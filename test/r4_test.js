const cql = require('cql-execution');
const cqlfhir = require('../src/index');
const {expect} = require('chai');

describe('#FHIRWrapper_R4', () => {
  let fhirWrapper;
  let conditionResource;
  let conditionResourceWithNoType;
  let domainResource;
  before(() => {
    fhirWrapper = cqlfhir.FHIRWrapper.FHIRv400();
    conditionResource = require('./fixtures/r4/Condition_f201.json');
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