const cql = require('cql-execution');
const cqlfhir = require('../src/index');
const {expect} = require('chai');

const patientNumer = require('./fixtures/qicore4/tests-numer-EXM124-bundle.json');
const patientDenom = require('./fixtures/qicore4/tests-denom-EXM124-bundle.json');

describe('#R4 v4.0.1 with QICore 4.1.0 Data', () => {
  let patientSource;
  before(() => {
    patientSource = cqlfhir.PatientSource.FHIRv401();
  });

  beforeEach(() => {
    patientSource.loadBundles([
      patientNumer,
      patientDenom
    ]);
  });

  afterEach(() => patientSource.reset());


  it('should properly iterate test patients', () => {
    // Check first patient
    const numer = patientSource.currentPatient();
    expect(numer.getId()).to.equal('numer-EXM124');
    // Check next patient
    const denom = patientSource.nextPatient();
    expect(denom.getId()).to.equal('denom-EXM124');
    // No more patients should result in undefined
    expect(patientSource.nextPatient()).to.be.undefined;
    expect(patientSource.currentPatient()).to.be.undefined;
  });

  it('should set the current patient to the next when nextPatient is called', () => {
    const originalCurrent = patientSource.currentPatient();
    const nextPatient = patientSource.nextPatient();
    const newCurrent = patientSource.currentPatient();
    expect(newCurrent).not.to.deep.equal(originalCurrent);
    expect(newCurrent).to.deep.equal(nextPatient);
  });

  it('should clone currentPatient each time it is called', () => {
    expect(patientSource.currentPatient()).to.deep.equal(patientSource.currentPatient());
    expect(patientSource.currentPatient()).to.not.equal(patientSource.currentPatient());
  });

  it('should find patient birthDate', () =>{
    const pt = patientSource.currentPatient();
    // cql-execution v1.3.2 currently doesn't export the new Date class, so we need to use the .getDate() workaround
    expect(compact(pt.get('birthDate'))).to.deep.equal({ value: new cql.DateTime.parse('1995-01-01').getDate() });
    expect(pt.get('birthDate.value')).to.deep.equal(new cql.DateTime.parse('1995-01-01').getDate());
  });

  it('should find patient extensions', () =>{
    const pt = patientSource.currentPatient();
    const extensions = pt.get('extension');
    expect(extensions).to.have.length(2);
    //Check the first and last ones
    expect(compact(extensions[0])).to.deep.equal({
      url: { value: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race' },
      extension: [ {
        url: { value: 'ombCategory' },
        value: {
          system: { value: 'urn:oid:2.16.840.1.113883.6.238' },
          code: { value: '2028-9' },
          display: { value: 'Asian' }
        }
      } ]
    });
  });

  it('should find records by type name (e.g., Encounter)', () =>{
    const pt = patientSource.currentPatient();
    const encounters = pt.findRecords('Encounter');
    expect(encounters).to.have.length(1);
    expect(encounters.every(c => c.getTypeInfo().name === 'Encounter')).to.be.true;
    const paymentReconciliations = pt.findRecords('PaymentReconciliation');
    expect(paymentReconciliations).to.be.empty;
  });

  it('should find records by model name and type name (e.g., FHIR.Encounter)', () =>{
    const pt = patientSource.currentPatient();
    const encounters = pt.findRecords('FHIR.Encounter');
    expect(encounters).to.have.length(1);
    expect(encounters.every(c => c.getTypeInfo().name === 'Encounter')).to.be.true;
    const paymentReconciliations = pt.findRecords('FHIR.PaymentReconciliation');
    expect(paymentReconciliations).to.be.empty;
  });

  it('should find records by model URL and type name (e.g., {http://hl7.org/fhir}Encounter)', () =>{
    const pt = patientSource.currentPatient();
    const encounters = pt.findRecords('{http://hl7.org/fhir}Encounter');
    expect(encounters).to.have.length(1);
    expect(encounters.every(c => c.getTypeInfo().name === 'Encounter')).to.be.true;
    const paymentReconciliations = pt.findRecords('{http://hl7.org/fhir}PaymentReconciliation');
    expect(paymentReconciliations).to.be.empty;
  });

  it('should find records by QICore profile URL (e.g., http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-encounter)', () =>{
    const pt = patientSource.currentPatient();
    const encounters = pt.findRecords('http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-encounter');
    expect(encounters).to.have.length(1);
    expect(encounters.every(c => c.getTypeInfo().name === 'Encounter')).to.be.true;
    const coverage = pt.findRecords('http://hl7.org/fhir/us/qicore/StructureDefinition/qicore-coverage');
    expect(coverage).to.be.empty;
  });

  it('should find a single record', () =>{
    const pt = patientSource.currentPatient();
    const encounter = pt.findRecord('Encounter');
    expect(encounter.getTypeInfo().name).to.equal('Encounter');
    expect(encounter.getId()).to.equal('numer-EXM124-2');
    const paymentReconciliation = pt.findRecord('PaymentReconciliation');
    expect(paymentReconciliation).to.be.undefined;
  });
});

function compact(obj) {
  if (Array.isArray(obj)) {
    return obj.map(o => compact(o));
  } else if (obj == null || typeof obj !== 'object') {
    return obj;
  }
  const compacted = {};
  for (const prop in obj) {
    const value = obj[prop];
    if (value !== undefined) {
      compacted[prop] = compact(value);
    }

  }
  return compacted;
}