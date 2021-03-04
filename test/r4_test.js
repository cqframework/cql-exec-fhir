const cql = require('cql-execution');
const cqlfhir = require('../src/index');
const {expect} = require('chai');

const conditionResource = require('./fixtures/r4/Condition_f201.json');
const patientLuna = require('./fixtures/r4/Luna60_McCullough561_6662f0ca-b617-4e02-8f55-7275e9f49aa0.json');
const patientJohnnie = require('./fixtures/r4/Johnnie679_Hermiston71_2cd30bd6-3a87-4191-af90-6daa70f58f55.json');

describe('#FHIRWrapper_R4 v4.0.0', () => {
  let fhirWrapper;
  let conditionResourceWithNoType;
  let domainResource;
  before(() => {
    fhirWrapper = cqlfhir.FHIRWrapper.FHIRv400();
    conditionResourceWithNoType = JSON.parse(JSON.stringify(conditionResource));
    delete conditionResourceWithNoType.resourceType;
    domainResource = JSON.parse(JSON.stringify(conditionResource));
    domainResource.resourceType = 'DomainResource';
  });

  it('should wrap a fhir resource to the correct type when type not specified', () => {
    let fhirObject = fhirWrapper.wrap(conditionResource);
    expect(fhirObject.getTypeInfo().name).to.equal('Condition');
    // Check one Condition property to be sure
    const recordedDate = fhirObject.getDate('recordedDate');
    expect(recordedDate.isDateTime).to.be.true;
    expect(recordedDate).to.deep.equal(cql.DateTime.parse('2013-04-04'));
  });

  it('should wrap a fhir resource to the type specified if upcasting', () => {
    // inheritance is: Condition < DomainResource < Resource
    let fhirObject = fhirWrapper.wrap(conditionResource, 'DomainResource');
    expect(fhirObject.getTypeInfo().name).to.equal('DomainResource');
    // Check one DomainResource property to be sure
    const textStatus = fhirObject.get('text.status');
    expect(textStatus.getTypeInfo().name).to.be.equal('NarrativeStatus');
    expect(textStatus.value).to.equal('generated');

    fhirObject = fhirWrapper.wrap(conditionResource, 'Resource');
    expect(fhirObject.getTypeInfo().name).to.equal('Resource');
    // Check one Resource property to be sure
    const id = fhirObject.get('id');
    expect(id.getTypeInfo().name).to.be.equal('id');
    expect(id.value).to.equal('f201');
  });

  it('should wrap a fhir resource to the type specified if downcasting', () => {
    // inheritance is: Condition < DomainResource < Resource
    let fhirObject = fhirWrapper.wrap(domainResource, 'Condition');
    expect(fhirObject.getTypeInfo().name).to.equal('Condition');
    // Check one Condition property to be sure
    const recordedDate = fhirObject.getDate('recordedDate');
    expect(recordedDate.isDateTime).to.be.true;
    expect(recordedDate).to.deep.equal(cql.DateTime.parse('2013-04-04'));
  });

  it('should error if requested type is incompatible', () => {
    expect(function(){fhirWrapper.wrap(conditionResource, 'Observation');}).to.throw('Incompatible types: FHIR resourceType is Condition which cannot be cast as Observation');
  });

  it('should wrap a fhir resource to the type specified if real type unknown', () => {
    let fhirObject = fhirWrapper.wrap(conditionResourceWithNoType, 'Observation');
    expect(fhirObject.getTypeInfo().name).to.equal('Observation');
  });
});

describe('#R4 v4.0.0', () => {
  let patientSource;
  before(() => {
    patientSource = cqlfhir.PatientSource.FHIRv400();
  });

  beforeEach(() => {
    patientSource.loadBundles([
      patientLuna,
      patientJohnnie
    ]);
  });

  afterEach(() => patientSource.reset());

  it('should report version as 4.0.0', () => {
    expect(patientSource.version).to.equal('4.0.0');
  });

  it('should properly iterate test patients', () => {
    // Check first patient
    const luna = patientSource.currentPatient();
    expect(luna.getId()).to.equal('356a0ab8-5592-4ec5-8c3a-9a4d0857b793');
    // Check next patient
    const johnnie = patientSource.nextPatient();
    expect(johnnie.getId()).to.equal('ea877536-55b1-4ec8-a12b-e95594214c01');
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
    expect(compact(pt.get('birthDate'))).to.deep.equal({ value: new cql.DateTime.parse('2008-11-06').getDate() });
    expect(pt.get('birthDate.value')).to.deep.equal(new cql.DateTime.parse('2008-11-06').getDate());
  });

  it('should find patient extensions', () =>{
    const pt = patientSource.currentPatient();
    const extensions = pt.get('extension');
    expect(extensions).to.have.length(7);
    //Check the first and last ones
    expect(compact(extensions[0])).to.deep.equal({
      url: { value: 'http://hl7.org/fhir/us/core/StructureDefinition/us-core-race' },
      extension: [
        {
          url: { value: 'ombCategory' },
          value: {
            system: { value: 'urn:oid:2.16.840.1.113883.6.238' },
            code: { value: '2106-3' },
            display: { value: 'White' }
          }
        },
        {
          url: { value: 'text' },
          value: { value: 'White' }
        }
      ]
    });
    expect(compact(extensions[6])).to.deep.equal({
      url: { value: 'http://synthetichealth.github.io/synthea/quality-adjusted-life-years' },
      value: { value: 10.0 }
    });
  });

  it('should find records by type name (e.g., Condition)', () =>{
    const pt = patientSource.currentPatient();
    const conditions = pt.findRecords('Condition');
    expect(conditions).to.have.length(8);
    expect(conditions.every(c => c.getTypeInfo().name === 'Condition')).to.be.true;
    const paymentReconciliations = pt.findRecords('PaymentReconciliation');
    expect(paymentReconciliations.length).to.be.empty;
  });

  it('should find records by model name and type name (e.g., FHIR.Condition)', () =>{
    const pt = patientSource.currentPatient();
    const conditions = pt.findRecords('FHIR.Condition');
    expect(conditions).to.have.length(8);
    expect(conditions.every(c => c.getTypeInfo().name === 'Condition')).to.be.true;
    const paymentReconciliations = pt.findRecords('FHIR.PaymentReconciliation');
    expect(paymentReconciliations.length).to.be.empty;
  });

  it('should find records by model URL and type name (e.g., {http://hl7.org/fhir}Condition)', () =>{
    const pt = patientSource.currentPatient();
    const conditions = pt.findRecords('{http://hl7.org/fhir}Condition');
    expect(conditions).to.have.length(8);
    expect(conditions.every(c => c.getTypeInfo().name === 'Condition')).to.be.true;
    const paymentReconciliations = pt.findRecords('{http://hl7.org/fhir}PaymentReconciliation');
    expect(paymentReconciliations.length).to.be.empty;
  });

  it('should find a single record', () =>{
    const pt = patientSource.currentPatient();
    const condition = pt.findRecord('Condition');
    expect(condition.getTypeInfo().name).to.equal('Condition');
    expect(condition.getId()).to.equal('9934bc4f-58af-4ecf-bb70-b7cc31987fc5');
    const paymentReconciliation = pt.findRecord('PaymentReconciliation');
    expect(paymentReconciliation).to.be.undefined;
  });

  it('should support getId', () => {
    const pt = patientSource.currentPatient();
    const procedure = pt.findRecords('Procedure').find(p => p.getId() === '03c48dbb-2e69-451d-877a-b3397a9f3d26');
    expect(procedure.getId()).to.equal('03c48dbb-2e69-451d-877a-b3397a9f3d26');
  });

  it('should support getCode', () => {
    const pt = patientSource.currentPatient();
    const procedure = pt.findRecords('Procedure').find(p => p.getId() === '03c48dbb-2e69-451d-877a-b3397a9f3d26');
    expect(procedure.getCode('code')).to.deep.equal(new cql.Code('428191000124101', 'http://snomed.info/sct', undefined, 'Documentation of current medications'));
  });

  it('should support getDate (DateTime)', () => {
    const pt = patientSource.currentPatient();
    const medReq = pt.findRecords('MedicationRequest').find(p => p.getId() === '622c5788-3028-41fd-a8cb-164f868d4322');
    const authoredOn = medReq.getDate('authoredOn.value');
    expect(authoredOn.isDateTime).to.be.true;
    expect(authoredOn).to.deep.equal(cql.DateTime.parse('2009-12-01T11:18:29-05:00'));
  });

  it('should support getDate (Date)', () => {
    const pt = patientSource.currentPatient();
    const birthDate = pt.getDate('birthDate.value');
    expect(birthDate.isDate).to.be.true;
    expect(birthDate).to.deep.equal(cql.DateTime.parse('2008-11-06').getDate());
  });

  it('should support getDateOrInterval (DateTime)', () => {
    const pt = patientSource.currentPatient();
    const medReq = pt.findRecords('MedicationRequest').find(p => p.getId() === '622c5788-3028-41fd-a8cb-164f868d4322');
    const authoredOn = medReq.getDateOrInterval('authoredOn.value');
    expect(authoredOn.isDateTime).to.be.true;
    expect(authoredOn).to.deep.equal(cql.DateTime.parse('2009-12-01T11:18:29-05:00'));
  });

  it('should support getDateOrInterval (Date)', () => {
    const pt = patientSource.currentPatient();
    const birthDate = pt.getDateOrInterval('birthDate.value');
    expect(birthDate.isDate).to.be.true;
    expect(birthDate).to.deep.equal(cql.DateTime.parse('2008-11-06').getDate());
  });

  it('should support dot-separated-paths', () => {
    const pt = patientSource.currentPatient();
    const procedure = pt.findRecords('Procedure').find(p => p.getId() === '03c48dbb-2e69-451d-877a-b3397a9f3d26');
    expect(procedure.get('subject.reference.value')).to.deep.equal('urn:uuid:356a0ab8-5592-4ec5-8c3a-9a4d0857b793');
  });

  it('should support getting booleans', () => {
    const pt = patientSource.currentPatient();
    const immunization = pt.findRecords('Immunization').find(p => p.getId() === '2a986005-b7c9-464c-9da8-0a3220dd8721');
    expect(immunization.get('primarySource.value')).to.be.true;
  });

  it('should support getting decimals', () => {
    const pt = patientSource.currentPatient();
    const claim = pt.findRecords('Claim').find(p => p.getId() === '58cd648a-5f4d-4306-bef4-49ec64c88c63');
    expect(claim.get('total.value.value')).to.equal(687.08);
  });

  it('should support getting integers', () => {
    const pt = patientSource.currentPatient();
    const claim = pt.findRecords('Claim').find(p => p.getId() === '58cd648a-5f4d-4306-bef4-49ec64c88c63');
    expect(claim.get('item')[0].get('sequence.value')).to.equal(1);
  });

  it('should support getting strings', () => {
    const pt = patientSource.currentPatient();
    const procedure = pt.findRecords('Procedure').find(p => p.getId() === '03c48dbb-2e69-451d-877a-b3397a9f3d26');
    expect(procedure.get('status.value')).to.deep.equal('completed');
  });

  it('should support getting dateTimes', () => {
    const pt = patientSource.currentPatient();
    const medReq = pt.findRecords('MedicationRequest').find(p => p.getId() === '622c5788-3028-41fd-a8cb-164f868d4322');
    const authoredOn = medReq.getDate('authoredOn.value');
    expect(authoredOn.isDateTime).to.be.true;
    expect(authoredOn).to.deep.equal(cql.DateTime.parse('2009-12-01T11:18:29-05:00'));
  });

  it('should support getting dates', () => {
    const pt = patientSource.currentPatient();
    const birthDate = pt.get('birthDate.value');
    expect(birthDate.isDate).to.be.true;
    expect(birthDate).to.deep.equal(cql.DateTime.parse('2008-11-06').getDate());
  });

  it('should support getting times', () => {
    const pt = patientSource.currentPatient();
    const observation = pt.findRecords('Observation').find(p => p.getId() === '9c15c801-6bb5-47a7-a9db-8bad0cb6aa68');
    const valueTime = observation.get('value.value');
    expect(valueTime.isTime()).to.be.true;
    expect(valueTime).to.deep.equal(cql.DateTime.parse('0000-01-01T18:23:47.376-05:00').getTime());
  });

  it('should support getting an option of a choice', () => {
    const pt = patientSource.currentPatient();
    const condition = pt.findRecords('Condition').find(p => p.getId() === '9934bc4f-58af-4ecf-bb70-b7cc31987fc5');
    // In R4, you use the stub of the choice (e.g., onset[x] datetime is retrieved as onset)
    expect(condition.get('onset.value')).to.deep.equal(cql.DateTime.parse('2009-08-09T12:18:29-04:00'));
  });

  it('should support getting an option of a choice using explicit name', () => {
    // This was needed because the ModelInfo used to indicate MedicationRequest's primaryCodePath as medicationCodeableConcept!
    // Keep it in case anyone tries to load an older ModelInfo that still does that.
    const pt = patientSource.currentPatient();
    const medReq = pt.findRecords('MedicationRequest').find(p => p.getId() === '622c5788-3028-41fd-a8cb-164f868d4322');
    const code = medReq.getCode('medicationCodeableConcept');
    expect(code).to.deep.equal(new cql.Code('309097', 'http://www.nlm.nih.gov/research/umls/rxnorm', undefined, 'Cefuroxime 250 MG Oral Tablet'));
  });

  it('should not return wrong type if explicit choice name was requested but data used different type', () => {
    // This is needed because the ModelInfo indicates MedicationRequest's primaryCodePath as medicationCodeableConcept!
    const pt = patientSource.currentPatient();
    const medReq = pt.findRecords('MedicationRequest').find(p => p.getId() === '622c5788-3028-41fd-a8cb-164f868d4322');
    const ref = medReq.getCode('medicationReference');
    expect(ref).to.be.undefined;
  });

  it('should return undefined when attempting to get the code on a choice that is a reference', () => {
    // This was a bug that surfaced when testing some CQL against Synthea patients that use medicationReference
    const pt = patientSource.currentPatient();
    const medReq = pt.findRecords('MedicationRequest').find(p => p.getId() === '622c5788-3028-41fd-a8cb-164f868d4323');
    const ref = medReq.getCode('medication');
    expect(ref).to.be.undefined;
  });

  it('should support id and extension on primitives', () => {
    const pt = patientSource.currentPatient();
    const encounter = pt.findRecords('Encounter').find(p => p.getId() === '9d911534-10d8-4dc2-91f1-d7aeed828af8');
    expect(encounter.get('status.id')).to.equal('12345');
    expect(compact(encounter.get('status.extension'))).to.deep.equal([ {
      url: { value: 'http://example.org/fhir/StructureDefinition/originalText' },
      value: { value: 'completed' }
    }]);
  });

  it('should support id on list of primitives', () => {
    const pt = patientSource.currentPatient();
    expect(compact(pt.get('address')[0].get('line'))).to.deep.equal([
      { value: '386 Stokes Center' },
      { id: '2468', value: 'Floor 5' },
      { value: 'Apt. C' }
    ]);
  });

  it('should support _typeHierarchy', () => {
    const pt = patientSource.currentPatient();
    const condition = pt.findRecord('Condition');
    expect(condition._typeHierarchy()).to.eql([
      { name: '{http://hl7.org/fhir}Condition', type: 'NamedTypeSpecifier' },
      { name: '{http://hl7.org/fhir}DomainResource', type: 'NamedTypeSpecifier' },
      { name: '{http://hl7.org/fhir}Resource', type: 'NamedTypeSpecifier' },
      { name: '{urn:hl7-org:elm-types:r1}Any', type: 'NamedTypeSpecifier' },
    ]);
  });

  it('should support _is', () => {
    const pt = patientSource.currentPatient();
    const condition = pt.findRecord('Condition');
    expect(condition._is({name: '{http://hl7.org/fhir}Condition', type: 'NamedTypeSpecifier'})).to.be.true;
    expect(condition._is({name: '{http://hl7.org/fhir}DomainResource', type: 'NamedTypeSpecifier'})).to.be.true;
    expect(condition._is({name: '{http://hl7.org/fhir}Resource', type: 'NamedTypeSpecifier'})).to.be.true;
    expect(condition._is({name: '{urn:hl7-org:elm-types:r1}Any', type: 'NamedTypeSpecifier'})).to.be.true;
    expect(condition._is({name: '{http://some.other.model.org}Condition', type: 'NamedTypeSpecifier'})).to.be.false;
    expect(condition._is({name: '{http://hl7.org/fhir}Observation', type: 'NamedTypeSpecifier'})).to.be.false;
    expect(condition._is({name: '{http://hl7.org/fhir}Condition', type: 'IntervalTypeSpecifier'})).to.be.false;
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
