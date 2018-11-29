const cql = require('cql-execution');
const load = require('./load');
const FHIRv102XML = require('./modelInfos/fhir-modelinfo-1.0.2.xml.js');
const FHIRv300XML = require('./modelInfos/fhir-modelinfo-3.0.0.xml.js');

class PatientSource {
  constructor(filePathOrXML) {
    this._index = 0;
    this._bundles = [];
    this._modelInfo = load(filePathOrXML);
  }

  // Convenience factory method for getting a FHIR 1.0.2 (DSTU2) Patient Source
  static FHIRv102() {
    return new PatientSource(FHIRv102XML);
  }

  // Convenience factory method for getting a FHIR 3.0.0 (STU3) Patient Source
  static FHIRv300() {
    return new PatientSource(FHIRv300XML);
  }

  get version() {
    return this._modelInfo.version;
  }

  loadBundles(bundles) {
    this._bundles = this._bundles.concat(bundles);
  }

  currentPatient() {
    if (this._index < this._bundles.length) {
      return new Patient(this._bundles[this._index], this._modelInfo);
    }
  }

  nextPatient() {
    // Advance the index to go to the next patient, allowing to advance one beyond the length (but no more)
    if (this._index < this._bundles.length) {
      this._index++;
    }
    return this.currentPatient();
  }

  reset() {
    this._index = 0;
    this._bundles = [];
  }
}

class FHIRObject {
  constructor(json, typeInfo, modelInfo) {
    // Define "private" un-enumerable properties to hold internal data
    Object.defineProperties(this, {
      _json: { value: json, enumerable: false },
      _typeInfo: { value: typeInfo, enumerable: false },
      _modelInfo: { value: modelInfo, enumerable: false },
    });
    if (typeInfo == null) {
      console.error(`Failed to locate typeInfo for ${json}`);
      return;
    }

    const elementNames = new Set();
    for (let currentInfo = typeInfo; currentInfo != null; ) {
      currentInfo.elements.forEach(e => elementNames.add(e.name));
      if (currentInfo.baseTypeSpecifier != null) {
        currentInfo = modelInfo.findClass(currentInfo.baseTypeSpecifier.fqn);
      } else {
        currentInfo = null;
      }
    }

    for (const name of elementNames) {
      Object.defineProperty(this, name, {
        get: function() {
          return this.get(name);
        },
        enumerable: true
      });
    }
  }

  // Required by cql-execution API
  get(field) {
    if (this._json == null) {
      // preserve distinction between null or undefined
      return this._json;
    }

    const parts = field.split('.');
    const root = parts[0];
    const suffix = parts.length > 1 ? parts.splice(1).join('.') : undefined;
    const element = this._typeInfo.findElement(root);
    if (typeof element === 'undefined') {
      console.error(`Failed to locate element for ${this._typeInfo.name}.${root}`);
      return;
    }

    let property = root;
    let typeSpecifier = element.typeSpecifier;
    // Special handling for choices to find the right value in FHIR (e.g., the property might
    // be 'value', but in JSON, it's spelled out as 'valueDateTime')
    if (typeSpecifier.isChoice) {
      for (const choice of typeSpecifier.choices) {
        if (choice.isNamed) {
          const choiceProperty = `${property}${choice.name[0].toUpperCase()}${choice.name.slice(1)}`;
          if (this._json[choiceProperty] != null || this._json[`_${choiceProperty}`] != null) {
            property = choiceProperty;
            typeSpecifier = choice;
            break;
          }
        }
      }
    }

    if (typeSpecifier.namespace === 'System') {
      // TODO: If there is a suffix, we need to drill into the CQL system type!
      if (suffix != null) {
        console.error(`Traversing into CQL system types isn't supported: ${this._typeInfo.name}.${root}.${suffix}.`);
        return;
      }
      return toSystemObject(this._json[property], typeSpecifier.name);
    }

    const data = getPropertyFromJSON(this._json, property, typeSpecifier, this._modelInfo);
    if (data == null) {
      // preserve distinction between null or undefined
      return data;
    }

    return toFHIRObject(data, typeSpecifier, this._modelInfo, suffix);
  }

  // Required by cql-execution API (starting w/ 1.2.1)
  getId() {
    return this._json.id;
  }

  // Required by cql-execution API
  getCode(field) {
    let code = this.get(field);
    if (!(code instanceof cql.Code)) {
      code = toCode(code);
    }
    return code;
  }

  // Required by cql-execution API (but not currently used in FHIR data model)
  getDate(field) {
    let date = this.get(field);
    if (!(date instanceof cql.DateTime) && date && date.value) {
      date = date.value;
    }
    return date;
  }

  // Required by cql-execution API (but not currently used in FHIR data model)
  getInterval(field) {
    let ivl = this.get(field);
    if (!(ivl instanceof cql.Interval) && ivl && ivl.value) {
      ivl = ivl.value;
    }
    return ivl;
  }

  // Required by cql-execution API (but not currently used in FHIR data model)
  getDateOrInterval(field) {
    let dateOrIvl = this.get(field);
    if (!(dateOrIvl instanceof cql.DateTime) && !(dateOrIvl instanceof cql.Interval) && dateOrIvl && dateOrIvl.value) {
      dateOrIvl = dateOrIvl.value;
    }
    return dateOrIvl;
  }

  getTypeInfo() { return this._typeInfo; }
}

class Patient extends FHIRObject {
  constructor(bundle, modelInfo) {
    const patientClass = modelInfo.patientClassIdentifier ? modelInfo.patientClassIdentifier : modelInfo.patientClassName;
    const resourceType = modelInfo.patientClassName.startsWith('FHIR.') ? modelInfo.patientClassName.substring(5) : modelInfo.patientClassName;
    const ptEntry = bundle.entry.find(e => e.resource && e.resource.resourceType == resourceType);
    const ptClass = modelInfo.findClass(patientClass);
    super(ptEntry.resource, ptClass, modelInfo);
    // Define a "private" un-enumerable property to hold the bundle
    Object.defineProperty(this, '_bundle', { value: bundle, enumerable: false });
  }

  findRecord(profile) {
    const records = this.findRecords(profile);
    if (records.length > 0) {
      return records[0];
    }
  }

  findRecords(profile) {
    const classInfo = this._modelInfo.findClass(profile);
    if (classInfo == null) {
      console.error(`Failed to find type info for ${profile}`);
      return [];
    }
    const resourceType = classInfo.name.startsWith('FHIR.') ? classInfo.name.substring(5) : classInfo.name;
    const records = this._bundle.entry.filter( e => {
      return e.resource && e.resource.resourceType == resourceType;
    }).map( e => {
      return new FHIRObject(e.resource, classInfo, this._modelInfo);
    });
    return records;
  }
}

/**
 * Extracts a property from the JSON, with special support for handling FHIR primitives that
 * may be spread out over two properties (`${property}` and `_${property}`).
 * @see http://hl7.org/fhir/STU3/json.html#primitive
 * @param {Object} json - the JSON representation from which to extract the property
 * @param {string} property - the property name to extract
 * @param {Object} typeSpecifier - the element information for the property being retrieved
 * @param {Object} modelInfo - the ModelInfo from which the element came
 * @returns {Object}
 */
function getPropertyFromJSON(json, property, typeSpecifier, modelInfo) {
  const value = json[property];
  const extra = json[`_${property}`];
  if (value == null && extra == null) {
    return json[property];
  }

  // Special handling for FHIR ids and extensions on primitives.
  if (isFHIRPrimitiveOrListOfFHIRPrimitives(typeSpecifier, modelInfo)) {
    // Normalize (or copy) to arrays to better share code between lists and non-lists
    const valueArr = (typeSpecifier.isList && Array.isArray(value)) ? [...value] : [value];
    const extraArr = (typeSpecifier.isList && Array.isArray(extra)) ? [...extra] : [extra];
    // Make sure arrays are of same length for easier processing
    while (valueArr.length > extraArr.length) {
      extraArr.push(undefined);
    }
    while (extraArr.length > valueArr.length) {
      valueArr.push(undefined);
    }

    const data = [];
    for (let i=0; i < valueArr.length; i++) {
      let item = {};
      if (typeof valueArr[i] !== 'undefined') {
        item.value = valueArr[i];
      }
      if (extraArr[i] != null) {
        Object.assign(item, extraArr[i]);
      }
      if (valueArr[i] == null && extraArr[i] == null) {
        // preserve undefined/null nature of value if neither value nor extra were found
        item = valueArr[i];
      }
      data.push(item);
    }
    return typeSpecifier.isList ? data : data[0];
  }

  return json[property];
}

function isFHIRPrimitiveOrListOfFHIRPrimitives(typeSpecifier, modelInfo) {
  if (typeSpecifier.isNamed) {
    // If its namespace is FHIR and its name starts w/ a lowercase letter, it's a FHIR primitive
    if (typeSpecifier.namespace === 'FHIR' && typeSpecifier.name[0].toLowerCase() === typeSpecifier.name[0]) {
      return true;
    }
    // The FHIR modelinfo represents code elements as a unique class type with a single string 'value'.
    // e.g., Goal's 'status' element has type 'GoalStatus', which just has a string value element.
    const typeInfo = modelInfo.findClass(typeSpecifier.fqn);
    if (typeInfo && typeInfo.baseTypeSpecifier && typeInfo.baseTypeSpecifier.fqn === 'FHIR.Element' && typeInfo.elements.length === 1) {
      const property = typeInfo.findElement('value');
      return property && property.typeSpecifier.fqn === 'System.String';
    }
    return false;
  } else if (typeSpecifier.isList) {
    return isFHIRPrimitiveOrListOfFHIRPrimitives(typeSpecifier.elementType, modelInfo);
  }
  return false;
}

/**
 * Converts JSON data to the proper CQL System Type as necessary.
 * @param {Object} data - the data to convert to the proper CQL System type
 * @param {string} name - the name of the CQL System Type (e.g., 'Boolean')
 * @returns {Object}
 */
function toSystemObject(data, name) {
  if (data == null) {
    // preserve distinction between null or undefined
    return data;
  }

  switch (name) {
  case 'Boolean':
  case 'Decimal':
  case 'Integer':
  case 'String':
    return data;
  case 'Code':
  case 'Concept':
  case 'Quantity':
    // Currently, these aren't used as leaf nodes in the FHIR model infos!
    return;
  case 'DateTime':
    // CQL DateTime doesn't support 'Z' right now, so account for that.
    return cql.DateTime.parse(data.replace('Z', '+00:00'));
  case 'Date':
    // cql-execution v1.3.2 currently doesn't export the new Date class, so we need to use this workaround
    return cql.DateTime.parse(data) != null ? cql.DateTime.parse(data).getDate() : undefined;
  case 'Time':
    // CQL DateTime doesn't support 'Z' right now, so account for that.
    // NOTE: Current CQL execution treats time as a DateTime w/ date fixed to 0000-01-01.
    return cql.DateTime.parse(`0000-01-01T${data.replace('Z', '+00:00')}`);
  }
}

/**
 * Converts data to a FHIRObject class instance
 * @param {Object} data - the JSON data to populate the FHIR object with
 * @param {Object} typeSpecifier - the TypeSpecifier describing the data
 * @param {ModelInfo} modelInfo - the overall ModelInfo from which this class comes
 * @param {string} suffix - the trailing part of the path to get (e.g., x.y.z)
 * @returns {FHIRObject}
 */
function toFHIRObject(data, typeSpecifier, modelInfo, suffix) {
  if (data == null) {
    // preserve distinction between null or undefined
    return data;
  }

  if (typeSpecifier.isNamed) {
    const rootClassInfo = modelInfo.findClass(typeSpecifier.fqn);
    const rootObject = new FHIRObject(data, rootClassInfo, modelInfo);
    if (suffix != null) {
      return rootObject.get(suffix);
    }
    return rootObject;
  } else if (typeSpecifier.isList) {
    if (suffix != null) {
      console.error('List type found in the middle of a path.');
      return;
    }
    return data.map(item => toFHIRObject(item, typeSpecifier.elementType, modelInfo));
  } else if (typeSpecifier.isInterval) {
    return new cql.Interval(
      toFHIRObject(data.low, typeSpecifier.pointType, modelInfo),
      toFHIRObject(data.high, typeSpecifier.pointType, modelInfo),
      data.lowClosed,
      data.highClosed);
  }
  return;
}

/**
 * Converts a FHIRObject instance representing a FHIR.CodeableConcept, FHIR.Coding, or FHIR.code
 * to a CQL Code.
 * @param {FHIRObject} f - the FHIRObject instance to convert to a CQL Code
 * @returns {cql.Code}
 */
function toCode(f) {
  if (f == null) {
    // preserve distinction between null or undefined
    return f;
  }

  if (Array.isArray(f)) {
    return f.map(c => toCode(c));
  } else if (f.getTypeInfo().name == 'FHIR.CodeableConcept') {
    if (f.coding == null) {
      // preserve distinction between null or undefined
      return f.coding;
    } else {
      return f.coding.map(c => toCode(c));
    }
  } else if (f.getTypeInfo().name == 'FHIR.Coding') {
    return new cql.Code(f.code.value, f.system ? f.system.value : f.system, f.version ? f.version.value : f.version);
  }
  return new cql.Code(f.code.value);
}

module.exports = { PatientSource };