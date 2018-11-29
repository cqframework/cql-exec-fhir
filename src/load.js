const fs = require('fs');
const xml2js = require('xml2js');
const processors = require('xml2js/lib/processors');

function load(filePathOrXML) {
  let xml, name;
  if (/^\s*<[\s\S]+>\s*$/.test(filePathOrXML)) {
    xml = filePathOrXML;
    name = 'XML';
  } else {
    xml = fs.readFileSync(filePathOrXML, 'utf8');
    name = filePathOrXML;
  }

  let modelInfo;
  const opts = {
    async: false,
    tagNameProcessors: [processors.stripPrefix],
    attrNameProcessors: [processors.stripPrefix],
    attrValueProcessors: [processors.stripPrefix]
  };
  xml2js.parseString(xml, opts, (err, result) => {
    if (err != null) {
      console.error(`Failed to load model info from ${name}:`, err);
      return;
    } else if (result.modelInfo == null) {
      console.error(`Model info is not valid for ${name}`);
      return;
    }
    modelInfo = new ModelInfo(result.modelInfo);
  });

  return modelInfo;
}

class ModelInfo {
  constructor(xml) {
    this._name = xml.$.name;
    this._version = xml.$.version;
    this._url = xml.$.url;
    this._schemaLocation = xml.$.schemaLocation;
    this._targetQualifier = xml.$.targetQualifier;
    this._patientClassName = xml.$.patientClassName;
    this._patientClassIdentifier = xml.$.patientClassIdentifier;
    this._patientBirthDatePropertyName = xml.$.patientBirthDatePropertyName;
    this._classesByLabel = new Map();
    this._classesByIdentifier = new Map();
    this._classesByName = new Map();

    for (const t of xml.typeInfo) {
      if (t.$ != null && (t.$.type.endsWith('ClassInfo') || t.$.type.endsWith('ProfileInfo'))) {
        const classInfo = new ClassInfo(t, this);
        if (classInfo.label != null) {
          this._classesByLabel.set(classInfo.label, classInfo);
        }
        if (classInfo.identifier != null) {
          this._classesByIdentifier.set(classInfo.identifier, classInfo);
        }
        if (classInfo.name != null) {
          this._classesByName.set(classInfo.name, classInfo);
        }
      }
    }
  }

  get name() { return this._name; }
  get version() { return this._version; }
  get url() { return this._url; }
  get schemaLocation() { return this._schemaLocation; }
  get targetQualifier() { return this._targetQualifier; }
  get patientClassName() { return this._patientClassName; }
  get patientClassIdentifier() { return this._patientClassIdentifier; }
  get patientBirthDatePropertyName() { return this._patientBirthDatePropertyName; }

  findClass(klass) {
    // First check label, then identifier, then name
    if (this._classesByLabel.has(klass)) {
      return this._classesByLabel.get(klass);
    } else if (this._classesByIdentifier.has(klass)) {
      return this._classesByIdentifier.get(klass);
    }

    // If label or identifier aren't used, it might come in as something like {http://hl7.org/fhir}MedicationStatement.
    // If the URL matches the model URL, then swap out the namespace with the model name (and a dot).  Otherwise this
    // will keep the name as-is.
    const klassName = klass.replace(`{${this.url}}`, `${this.name}.`);
    if (this._classesByName.has(klassName)) {
      return this._classesByName.get(klassName);
    }

    // Last ditch effort by name: if it starts with the model prefix (e.g., FHIR.Patient) then remove it; OR if it
    // doesn't start with the model prefix (e.g. Patient), add it.
    const modKlassName = klassName.startsWith(`${this.name}.`) ? klassName.slice(this.name.length+1) : `${this.name}.${klassName}`;
    return this._classesByName.get(modKlassName);
  }
}

class ClassInfo {
  constructor(xml, modelInfo) {
    this._name = xml.$.name;
    this._identifier = xml.$.identifier;
    this._label = xml.$.label;
    this._isRetrievable = xml.$.retrievable == 'true';
    this._primaryCodePath = xml.$.primaryCodePath;
    this._baseType = xml.$.baseType;
    this._modelInfo = modelInfo;
    this._elementsByName = new Map();
    if (xml.element != null) {
      for (const e of xml.element) {
        const element = new ClassElement(e, modelInfo);
        this._elementsByName.set(element.name, element);
      }
    }
  }

  get name() { return this._name; }
  get identifier() { return this._identifier; }
  get label() { return this._label; }
  get isRetrievable() { return this._isRetrievable; }
  get primaryCodePath() { return this._primaryCodePath; }
  get baseType() { return this._baseType; }
  get elements() { return Array.from(this._elementsByName.values()); }

  findElement(el) {
    let element = this._elementsByName.get(el);
    // TODO: Should we add support for when the base type is a System type?
    if (element == null && this.baseType != null && !this.baseType.startsWith('System.')) {
      element = this._modelInfo.findClass(this.baseType).findElement(el);
    }
    return element;
  }
}

class ClassElement {
  constructor(xml, modelInfo) {
    this._name = xml.$.name;
    this._typeSpecifier = getTypeSpecifierFromXML(xml);
    this._isProhibited = xml.$.prohibited == 'true';
    this._modelInfo = modelInfo;
  }

  get name() { return this._name; }
  get typeSpecifier() { return this._typeSpecifier; }
  get isProhibited() { return this._isProhibited; }
}

const NAMED_TYPE_NAME = 'NamedTypeSpecifier';
const NAMED_TYPE_RE = /^(([^\.<>]+)\.)?([^<>]+)$/;
class NamedTypeSpecifier {
  constructor(name, namespace) {
    this._name = name;
    this._namespace = namespace;
  }

  get isNamed() { return true; }
  get name() { return this._name; }
  get namespace() { return this._namespace; }
  get fqn() { return this.namespace == null ? this.name : `${this.namespace}.${this.name}`; }

  static fromXML(xml) {
    if (xmlHasTypeMatch(xml, NAMED_TYPE_RE)) {
      const m = NAMED_TYPE_RE.exec(xml.$.type);
      return new NamedTypeSpecifier(m[3], m[2]);
    } else if (xmlHasTypeSpecifierMatch(xml, NAMED_TYPE_NAME)) {
      const typeSpecifier = xml.typeSpecifier[0];
      const name = typeSpecifier.$.name;
      const namespace = typeSpecifier.$.modelName || typeSpecifier.$.namespace;
      return new NamedTypeSpecifier(name, namespace);
    }
    return;
  }
}

const LIST_TYPE_NAME = 'ListTypeSpecifier';
const LIST_TYPE_RE = /^[Ll]ist\s*<\s*(.*[^\s])\s*>$/;
class ListTypeSpecifier {
  constructor(elementType) {
    this._elementType = elementType;
  }

  get isList() { return true; }
  get elementType() { return this._elementType; }

  static fromXML(xml) {
    if (xmlHasTypeMatch(xml, LIST_TYPE_RE)) {
      const m = LIST_TYPE_RE.exec(xml.$.type);
      return new ListTypeSpecifier(getTypeSpecifierFromXML({ $: { type: m[1] } }));
    } else if (xmlHasTypeSpecifierMatch(xml, LIST_TYPE_NAME)) {
      const typeSpecifier = xml.typeSpecifier[0];
      return new ListTypeSpecifier(getTypeSpecifierFromXML({
        $: { type: typeSpecifier.$.elementType },
        typeSpecifier: typeSpecifier.elementTypeSpecifier
      }));
    }
    return;
  }
}

const INTERVAL_TYPE_NAME = 'IntervalTypeSpecifier';
const INTERVAL_TYPE_RE = /^[Ii]nterval\s*<\s*(.*[^\s])\s*>$/;
class IntervalTypeSpecifier {
  constructor(pointType) {
    this._pointType = pointType;
  }

  get isInterval() { return true; }
  get pointType() { return this._pointType; }

  static fromXML(xml) {
    if (xmlHasTypeMatch(xml, INTERVAL_TYPE_RE)) {
      const m = INTERVAL_TYPE_RE.exec(xml.$.type);
      return new IntervalTypeSpecifier(getTypeSpecifierFromXML({ $: { type: m[1] } }));
    } else if (xmlHasTypeSpecifierMatch(xml, INTERVAL_TYPE_NAME)) {
      const typeSpecifier = xml.typeSpecifier[0];
      return new IntervalTypeSpecifier(getTypeSpecifierFromXML({
        $: { type: typeSpecifier.$.pointType },
        typeSpecifier: typeSpecifier.pointTypeSpecifier
      }));
    }
    return;
  }
}

const CHOICE_TYPE_NAME = 'ChoiceTypeSpecifier';
const CHOICE_TYPE_RE = /^[Cc]hoice\s*<\s*(.*[^\s])\s*>$/;
class ChoiceTypeSpecifier {
  constructor(choices) {
    this._choices = choices;
  }

  get isChoice() { return true; }
  get choices() { return this._pointType; }

  static fromXML(xml) {
    if (xmlHasTypeMatch(xml, CHOICE_TYPE_RE)) {
      // NOTE: The type attribute variant does not support choices nested in choices
      const m = INTERVAL_TYPE_RE.exec(xml.$.type);
      const choiceStrings = m[1].split(',').map(c => c.trim());
      const choices = choiceStrings.map(c => getTypeSpecifierFromXML({ $: { type: c } }));
      return new ChoiceTypeSpecifier(choices);
    } else if (xmlHasTypeSpecifierMatch(xml, CHOICE_TYPE_NAME)) {
      const typeSpecifier = xml.typeSpecifier[0];
      const choices = typeSpecifier.choice.map(c => getTypeSpecifierFromXML({
        typeSpecifier: c
      }));
      return new ChoiceTypeSpecifier(choices);
    }
    return;
  }
}

function xmlHasTypeMatch(xml, typeRegex) {
  return xml.$ && xml.$.type && typeRegex.test(xml.$.type);
}

function xmlHasTypeSpecifierMatch(xml, typeSpecifierName) {
  return xml.typeSpecifier && xml.typeSpecifier.length === 1 && xml.typeSpecifier[0].$.type === typeSpecifierName;
}

function getTypeSpecifierFromXML(xml) {
  if (xmlHasTypeMatch(xml, NAMED_TYPE_RE) || xmlHasTypeSpecifierMatch(xml, NAMED_TYPE_NAME)) {
    return NamedTypeSpecifier.fromXML(xml);
  } else if (xmlHasTypeMatch(xml, LIST_TYPE_RE) || xmlHasTypeSpecifierMatch(xml, LIST_TYPE_NAME)) {
    return ListTypeSpecifier.fromXML(xml);
  } else if (xmlHasTypeMatch(xml, INTERVAL_TYPE_RE) || xmlHasTypeSpecifierMatch(xml, INTERVAL_TYPE_NAME)) {
    return IntervalTypeSpecifier.fromXML(xml);
  } else if (xmlHasTypeMatch(xml, CHOICE_TYPE_RE) || xmlHasTypeSpecifierMatch(xml, CHOICE_TYPE_NAME)) {
    return ChoiceTypeSpecifier.fromXML(xml);
  }
  return;
}

module.exports = load;