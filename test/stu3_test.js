const cql = require('cql-execution');
const cqlfhir = require('../src/index');
const {expect} = require('chai');

const conditionResource = require('./fixtures/stu3/Condition_f201.json');
const patientMyron = require('./fixtures/stu3/Myron933_Ondricka197_a901d2b4-30a8-41b9-b94a-f44561d8f809.json');
const patientShawnee = require('./fixtures/stu3/Shawnee493_Osinski784_60d5c7b1-53ee-49ca-a33a-945004d6b84f.json');

describe('#FHIRWrapper_STU3', () => {
  let fhirWrapper;
  let conditionResourceWithNoType;
  let domainResource;
  before(() => {
    fhirWrapper = cqlfhir.FHIRWrapper.FHIRv300();
    conditionResourceWithNoType = JSON.parse(JSON.stringify(conditionResource));
    delete conditionResourceWithNoType.resourceType;
    domainResource = JSON.parse(JSON.stringify(conditionResource));
    domainResource.resourceType = 'DomainResource';
  });

  it('should wrap a fhir resource to the correct type when type not specified', () => {
    let fhirObject = fhirWrapper.wrap(conditionResource);
    expect(fhirObject.getTypeInfo().name).to.equal('Condition');
    // Check one Condition property to be sure
    const assertedDate = fhirObject.getDate('assertedDate');
    expect(assertedDate.isDateTime).to.be.true;
    expect(assertedDate).to.deep.equal(cql.DateTime.parse('2013-04-04'));
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
    const assertedDate = fhirObject.getDate('assertedDate');
    expect(assertedDate.isDateTime).to.be.true;
    expect(assertedDate).to.deep.equal(cql.DateTime.parse('2013-04-04'));
  });

  it('should error if requested type is incompatible', () => {
    expect(function(){fhirWrapper.wrap(conditionResource, 'Observation');}).to.throw('Incompatible types: FHIR resourceType is Condition which cannot be cast as Observation');
  });

  it('should wrap a fhir resource to the type specified if real type unknown', () => {
    let fhirObject = fhirWrapper.wrap(conditionResourceWithNoType, 'Observation');
    expect(fhirObject.getTypeInfo().name).to.equal('Observation');
  });
});

describe('#STU3', () => {
  let patientSource;
  before(() => {
    patientSource = cqlfhir.PatientSource.FHIRv300();
  });

  beforeEach(() => {
    patientSource.loadBundles([
      patientMyron,
      patientShawnee
    ]);
  });

  afterEach(() => patientSource.reset());

  it('should report version as 3.0.0', () => {
    expect(patientSource.version).to.equal('3.0.0');
  });

  it('should properly iterate test patients', () => {
    // Check first patient
    const myron = patientSource.currentPatient();
    expect(myron.getId()).to.equal('d02dafab-dd3b-43cf-ae5b-c29b9789cb1c');
    // Check next patient
    const shawnee = patientSource.nextPatient();
    expect(shawnee.getId()).to.equal('e11ee407-ef55-4acb-853f-72ff1f5cb644');
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
    expect(compact(pt.get('birthDate'))).to.deep.equal({ value: new cql.DateTime.parse('1975-02-25').getDate() });
    expect(pt.get('birthDate.value')).to.deep.equal(new cql.DateTime.parse('1975-02-25').getDate());
  });

  it('should find patient extensions', () =>{
    const pt = patientSource.currentPatient();
    const extensions = pt.get('extension');
    expect(extensions).to.have.length(11);
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
    expect(compact(extensions[10])).to.deep.equal({
      url: { value: 'http://synthetichealth.github.io/synthea/quality-adjusted-life-years' },
      value: { value: 40.353136402148294 }
    });
  });

  it('should find records by type name (e.g., Condition)', () =>{
    const pt = patientSource.currentPatient();
    const conditions = pt.findRecords('Condition');
    expect(conditions).to.have.length(9);
    expect(conditions.every(c => c.getTypeInfo().name === 'Condition')).to.be.true;
    const paymentReconciliations = pt.findRecords('PaymentReconciliation');
    expect(paymentReconciliations.length).to.be.empty;
  });

  it('should find records by model name and type name (e.g., FHIR.Condition)', () =>{
    const pt = patientSource.currentPatient();
    const conditions = pt.findRecords('FHIR.Condition');
    expect(conditions).to.have.length(9);
    expect(conditions.every(c => c.getTypeInfo().name === 'Condition')).to.be.true;
    const paymentReconciliations = pt.findRecords('FHIR.PaymentReconciliation');
    expect(paymentReconciliations.length).to.be.empty;
  });

  it('should find records by model URL and type name (e.g., {http://hl7.org/fhir}Condition)', () =>{
    const pt = patientSource.currentPatient();
    const conditions = pt.findRecords('{http://hl7.org/fhir}Condition');
    expect(conditions).to.have.length(9);
    expect(conditions.every(c => c.getTypeInfo().name === 'Condition')).to.be.true;
    const paymentReconciliations = pt.findRecords('{http://hl7.org/fhir}PaymentReconciliation');
    expect(paymentReconciliations.length).to.be.empty;
  });

  it('should find a single record', () =>{
    const pt = patientSource.currentPatient();
    const condition = pt.findRecord('Condition');
    expect(condition.getTypeInfo().name).to.equal('Condition');
    expect(condition.getId()).to.equal('9aae38e5-44ff-4f6e-8228-4898cdfa0833');
    const paymentReconciliation = pt.findRecord('PaymentReconciliation');
    expect(paymentReconciliation).to.be.undefined;
  });

  it('should support getId', () => {
    const pt = patientSource.currentPatient();
    const procedure = pt.findRecords('Procedure').find(p => p.getId() === 'f38a480b-f352-4c1f-aca2-b6612a110530');
    expect(procedure.getId()).to.equal('f38a480b-f352-4c1f-aca2-b6612a110530');
  });

  it('should support getCode', () => {
    const pt = patientSource.currentPatient();
    const procedure = pt.findRecords('Procedure').find(p => p.getId() === 'f38a480b-f352-4c1f-aca2-b6612a110530');
    expect(procedure.getCode('code')).to.deep.equal(new cql.Code('117015009', 'http://snomed.info/sct', undefined, 'Throat culture (procedure) '));
  });

  it('should support getDate (DateTime)', () => {
    const pt = patientSource.currentPatient();
    const condition = pt.findRecords('MedicationRequest').find(p => p.getId() === 'a87a2346-f826-40db-95ff-0660786460c0');
    const periodStart = condition.getDate('authoredOn.value');
    expect(periodStart.isDateTime).to.be.true;
    expect(periodStart).to.deep.equal(cql.DateTime.parse('2008-11-11T08:18:56-05:00'));
  });

  it('should support getDate (Date)', () => {
    const pt = patientSource.currentPatient();
    const birthDate = pt.getDate('birthDate.value');
    expect(birthDate.isDate).to.be.true;
    expect(birthDate).to.deep.equal(cql.DateTime.parse('1975-02-25').getDate());
  });

  it('should support getDateOrInterval (DateTime)', () => {
    const pt = patientSource.currentPatient();
    const condition = pt.findRecords('MedicationRequest').find(p => p.getId() === 'a87a2346-f826-40db-95ff-0660786460c0');
    const periodStart = condition.getDateOrInterval('authoredOn.value');
    expect(periodStart.isDateTime).to.be.true;
    expect(periodStart).to.deep.equal(cql.DateTime.parse('2008-11-11T08:18:56-05:00'));
  });

  it('should support getDateOrInterval (Date)', () => {
    const pt = patientSource.currentPatient();
    const birthDate = pt.getDateOrInterval('birthDate.value');
    expect(birthDate.isDate).to.be.true;
    expect(birthDate).to.deep.equal(cql.DateTime.parse('1975-02-25').getDate());
  });

  it('should support dot-separated-paths', () => {
    const pt = patientSource.currentPatient();
    const procedure = pt.findRecords('Procedure').find(p => p.getId() === 'f38a480b-f352-4c1f-aca2-b6612a110530');
    expect(procedure.get('subject.reference.value')).to.deep.equal('urn:uuid:d02dafab-dd3b-43cf-ae5b-c29b9789cb1c');
  });

  it('should support getting booleans', () => {
    const pt = patientSource.currentPatient();
    const immunization = pt.findRecords('Immunization').find(p => p.getId() === 'b61579e1-1c2b-49e1-8be7-b95b11f1ca70');
    expect(immunization.get('notGiven.value')).to.be.false;
  });

  it('should support getting decimals', () => {
    const pt = patientSource.currentPatient();
    const claim = pt.findRecords('Claim').find(p => p.getId() === 'c04752c4-38ab-464a-8c97-b4e755d15e36');
    expect(claim.get('total.value.value')).to.equal(265.52);
  });

  it('should support getting integers', () => {
    const pt = patientSource.currentPatient();
    const claim = pt.findRecords('Claim').find(p => p.getId() === 'c04752c4-38ab-464a-8c97-b4e755d15e36');
    expect(claim.get('item')[0].get('sequence.value')).to.equal(1);
  });

  it('should support getting strings', () => {
    const pt = patientSource.currentPatient();
    const procedure = pt.findRecords('Procedure').find(p => p.getId() === 'f38a480b-f352-4c1f-aca2-b6612a110530');
    expect(procedure.get('status.value')).to.deep.equal('completed');
  });

  it('should support getting dateTimes', () => {
    const pt = patientSource.currentPatient();
    const condition = pt.findRecords('MedicationRequest').find(p => p.getId() === 'a87a2346-f826-40db-95ff-0660786460c0');
    const periodStart = condition.get('authoredOn.value');
    expect(periodStart.isDateTime).to.be.true;
    expect(periodStart).to.deep.equal(cql.DateTime.parse('2008-11-11T08:18:56-05:00'));
  });

  it('should support getting dates', () => {
    const pt = patientSource.currentPatient();
    const birthDate = pt.get('birthDate.value');
    expect(birthDate.isDate).to.be.true;
    expect(birthDate).to.deep.equal(cql.DateTime.parse('1975-02-25').getDate());
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
    const condition = pt.findRecords('Condition').find(p => p.getId() === '9aae38e5-44ff-4f6e-8228-4898cdfa0833');
    // In STU3, you use the stub of the choice (e.g., onset[x] datetime is retrieved as onset)
    expect(condition.get('onset.value')).to.deep.equal(cql.DateTime.parse('1994-07-19T09:18:56-04:00'));
  });

  it('should support getting an option of a choice using explicit name', () => {
    // This is needed because the ModelInfo indicates MedicationRequest's primaryCodePath as medicationCodeableConcept!
    const pt = patientSource.currentPatient();
    const condition = pt.findRecords('MedicationRequest').find(p => p.getId() === 'a87a2346-f826-40db-95ff-0660786460c0');
    const code = condition.getCode('medicationCodeableConcept');
    expect(code).to.deep.equal(new cql.Code('308192', 'http://www.nlm.nih.gov/research/umls/rxnorm', undefined, 'Amoxicillin 500 MG Oral Tablet'));
  });

  it('should not return wrong type if explicit choice name was requested but data used different type', () => {
    // This is needed because the ModelInfo indicates MedicationRequest's primaryCodePath as medicationCodeableConcept!
    const pt = patientSource.currentPatient();
    const condition = pt.findRecords('MedicationRequest').find(p => p.getId() === 'a87a2346-f826-40db-95ff-0660786460c0');
    const code = condition.getCode('medicationReference');
    expect(code).to.be.undefined;
  });

  it('should support id and extension on primitives', () => {
    const pt = patientSource.currentPatient();
    const goal = pt.findRecords('Goal').find(p => p.getId() === '1ed18813-c964-4f2d-8467-d8b351fe051c');
    expect(goal.get('status.id')).to.equal('12345');
    expect(compact(goal.get('status.extension'))).to.deep.equal([ {
      url: { value: 'http://example.org/fhir/StructureDefinition/originalText' },
      value: { value: 'progressing' }
    }]);
  });

  it('should support id on list of primitives', () => {
    const pt = patientSource.currentPatient();
    expect(compact(pt.get('address')[0].get('line'))).to.deep.equal([
      { value: '172 O\'Keefe Station' },
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
