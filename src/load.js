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
    attrNameProcessors: [processors.stripPrefix]
  };
  xml2js.parseString(xml, opts, (err, result) => {
    if (typeof err !== 'undefined' && err != null) {
      console.error(`Failed to load model info from ${name}:`, err);
      return;
    } else if (typeof result.modelInfo === 'undefined') {
      console.error(`Model info is not valid for ${name}`);
      return;
    }
    modelInfo = new ModelInfo(result.modelInfo);
  });

  return modelInfo;
}

class ModelInfo {
  constructor(info) {
    this._attrs = info.$;
    this._classesByLabel = new Map();
    this._classesByIdentifier = new Map();
    this._classesByName = new Map();

    for (const t of info.typeInfo) {
      if (typeof t.$ !== 'undefined' && (t.$.type.endsWith('ClassInfo') || t.$.type.endsWith('ProfileInfo'))) {
        const classInfo = new ClassInfo(t, this);
        if (typeof classInfo.label !== 'undefined') {
          this._classesByLabel.set(classInfo.label, classInfo);
        }
        if (typeof classInfo.identifier !== 'undefined') {
          this._classesByIdentifier.set(classInfo.identifier, classInfo);
        }
        if (typeof classInfo.name !== 'undefined') {
          this._classesByName.set(classInfo.name, classInfo);
        }
      }
    }
  }

  get name() { return this._attrs.name; }
  get version() { return this._attrs.version; }
  get url() { return this._attrs.url; }
  get schemaLocation() { return this._attrs.schemaLocation; }
  get targetQualifier() { return this._attrs.targetQualifier; }
  get patientClassName() { return this._attrs.patientClassName; }
  get patientClassIdentifier() { return this._attrs.patientClassIdentifier; }
  get patientBirthDatePropertyName() { return this._attrs.patientBirthDatePropertyName; }

  findClass(klass) {
    // First check label, then identifier, then name
    if (this._classesByLabel.has(klass)) {
      return this._classesByLabel.get(klass);
    } else if (this._classesByIdentifier.has(klass)) {
      return this._classesByIdentifier.get(klass);
    }

    // If label or identifier aren't used, it might come in as something like {http://hl7.org/fhir}MedicationStatement.
    // If the URL matches the model URL, then swap out the namespace with the model name (and a dot).
    const klassName = klass.replace(`{${this.url}}`, `${this.name}.`);
    if (this._classesByName.has(klassName)) {
      return this._classesByName.get(klassName);
    }

    // Last ditch effort, try by name, but applying model prefix (e.g., Foo --> FHIR.Foo)
    return this._classesByName.get(`${this.name}.${klass}`);
  }
}

class ClassInfo {
  constructor(t, modelInfo) {
    this._modelInfo = modelInfo;
    this._attrs = t.$;
    this._elementsByName = new Map();
    if (typeof t.element !== 'undefined') {
      for (const e of t.element) {
        const element = new ClassElement(e, modelInfo);
        this._elementsByName.set(element.name, element);
      }
    }
  }

  get name() { return this._attrs.name; }
  get identifier() { return this._attrs.identifier; }
  get label() { return this._attrs.label; }
  get isRetrievable() { return this._attrs.retrievable == 'true'; }
  get primaryCodePath() { return this._attrs.primaryCodePath; }
  get baseType() { return this._attrs.baseType; }
  get elements() { return Array.from(this._elementsByName.values()); }

  findElement(el) {
    let element = this._elementsByName.get(el);
    if (typeof element === 'undefined' && typeof this.baseType !== 'undefined') {
      element = this._modelInfo.findClass(this.baseType).findElement(el);
    }
    return element;
  }
}

class ClassElement {
  constructor(e) {
    this._attrs = e.$;
  }

  get name() { return this._attrs.name; }
  get type() {
    if (this.isList) {
      return this._attrs.type.substring(5, this._attrs.type.length-1);
    } else if (this.isInterval) {
      return this._attrs.type.substring(9, this._attrs.type.length-1);
    }
    return this._attrs.type;
  }
  get isProhibited() { return this._attrs.prohibited == 'true'; }

  get isList() { return this._attrs.type.startsWith('list<'); }
  get isInterval() { return this._attrs.type.startsWith('Interval<');}
  get isSystemType() { return this.type.startsWith('System.'); }
}

module.exports = load;