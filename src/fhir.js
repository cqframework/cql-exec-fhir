const cql = require('cql-execution');
const load = require('./load');
const FHIRv102XML = require('./modelInfos/fhir-modelinfo-1.0.2.xml.js');
const FHIRv16XML = require('./modelInfos/fhir-modelinfo-1.6.xml.js');

class PatientSource {
  constructor(filePathOrXML) {
    this._index = 0;
    this._bundles = [];
    this._modelInfo = load(filePathOrXML);
  }

  // Convenience factory method for getting a FHIR 1.0.2 (STU2) Patient Source
  static FHIRv102() {
    return new PatientSource(FHIRv102XML);
  }

  // Convenience factory method for getting a FHIR 1.6 (early STU3) Patient Source
  static FHIRv16() {
    return new PatientSource(FHIRv16XML);
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
    if (typeof typeInfo === 'undefined') {
      console.error(`Failed to locate typeInfo for ${json}`);
      return;
    }

    for (const el of typeInfo.elements) {
      Object.defineProperty(this, el.name, {
        get: function() {
          return this.get(el.name);
        },
        enumerable: true
      });
    }
  }

  // Required by cql-execution API
  get(field) {
    if (typeof this._json === 'undefined') {
      return;
    } else if (this.isFHIRPrimitive() && field != 'value') {
      // TODO: Add support for getting id or extensions on primitives (which are stored in properties starting with _)
      console.error(`Traversing into FHIR primitives isn't supported (except value): ${this._typeInfo.name}.${field}.`);
      return;
    }

    const [root, suffix] = field.split('.', 2);
    const element = this._typeInfo.findElement(root);
    if (typeof element === 'undefined') {
      console.error(`Failed to locate element for ${this._typeInfo.name}.${root}`);
      return;
    }

    if (element.isSystemType) {
      // TODO: If there is a suffix, we need to drill into the CQL system type!
      if (typeof suffix !== 'undefined') {
        console.error(`Traversing into CQL system types isn't supported: ${this._typeInfo.name}.${root}.${suffix}.`);
        return;
      }
      if (element.name == 'value') {
        // Even though the FHIR model has a value attribute, it doesn't come through in JSON serialization
        return convert(element, this._json);
      }
      return convert(element, this._json[root]);
    }

    const rootClassInfo = this._modelInfo.findClass(element.type);
    const toFHIRObject = (data) => {
      if (typeof data === 'undefined' ) {
        return;
      }
      const rootObject = new FHIRObject(data, rootClassInfo, this._modelInfo);
      if (typeof suffix !== 'undefined') {
        return rootObject.get(suffix);
      }
      return rootObject;
    };

    const data = this._json[root];
    if (typeof data === 'undefined') {
      return;
    }
    if (element.isList) {
      return data.map(item => toFHIRObject(item));
    } else if (element.isInterval) {
      return new cql.Interval(toFHIRObject(data.low), toFHIRObject(data.high), data.lowClosed, data.highClosed);
    }
    return toFHIRObject(data);
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

  isFHIRPrimitive() {
    return this._typeInfo.name.startsWith('FHIR.') && this._typeInfo.name[5].toLowerCase() == this._typeInfo.name[5];
  }
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
    if (typeof classInfo === 'undefined') {
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

function convert(classElement, data) {
  if (typeof data === 'undefined') {
    return null;
  } else if (classElement.isList) {
    return data.map(item => convert(item));
  } else if (classElement.isInterval) {
    return new cql.Interval(convert(data.low), convert(data.high), data.lowClosed, data.highClosed);
  }

  switch (classElement.type) {
  case 'System.Boolean':
  case 'System.Decimal':
  case 'System.Integer':
  case 'System.String':
    return data;
  case 'System.Code':
  case 'System.Concept':
  case 'System.Quantity':
    // Currently, these aren't used as leaf nodes in the FHIR model infos!
    return null;
  case 'System.DateTime':
    // CQL DateTime doesn't support 'Z' right now, so account for that.
    return cql.DateTime.parse(data.replace('Z', '+00:00'));
  case 'System.Time':
    // CQL DateTime doesn't support 'Z' right now, so account for that.
    // NOTE: Current CQL execution treats time as a DateTime w/ date fixed to 0000-01-01.
    return cql.DateTime.parse(`0001-01-01T${data.replace('Z', '+00:00')}`);
  }
}

function toCode(f) {
  if (typeof f === 'undefined' || f == null) {
    return null;
  }

  if (Array.isArray(f)) {
    return f.map(c => toCode(c));
  } else if (f.getTypeInfo().name == 'FHIR.CodeableConcept') {
    if (f.coding === undefined || f.coding == null) {
      return null;
    } else {
      return f.coding.map(c => toCode(c));
    }
  } else if (f.getTypeInfo().name == 'FHIR.Coding') {
    return new cql.Code(f.code.value, f.system ? f.system.value : f.system, f.version ? f.version.value : f.version);
  }
  return new cql.Code(f.code.value);
}

module.exports = { PatientSource };