// This file exists so that these FHIR modelinfos can also be used in a browser where Node's 'fs' module isn't
// available.

module.exports = `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ns4:modelInfo name="FHIR" version="4.0.0" url="http://hl7.org/fhir" targetQualifier="fhir" patientClassName="FHIR.Patient" patientBirthDatePropertyName="birthDate.value" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:ns4="urn:hl7-org:elm-modelinfo:r1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="uuid" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Count" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Dosage.DoseAndRate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="dose">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="rate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExampleScenario" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="actor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Actor"/>
        </ns4:element>
        <ns4:element name="instance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Instance"/>
        </ns4:element>
        <ns4:element name="process">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Process"/>
        </ns4:element>
        <ns4:element name="workflow">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScriptRequestMethodCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SortDirection" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductInteraction.Interactant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DetectedIssue.Mitigation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExampleScenario.Process" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="preConditions" elementType="FHIR.markdown"/>
        <ns4:element name="postConditions" elementType="FHIR.markdown"/>
        <ns4:element name="step">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Step"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reference" elementType="FHIR.Reference"/>
        <ns4:element name="fhirVersion">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.FHIRVersion"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="example">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="groupingId" elementType="FHIR.id"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BiologicallyDerivedProductStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Document" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.DocumentMode"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ChargeItemDefinition" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="derivedFromUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="instance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="applicability">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ChargeItemDefinition.Applicability"/>
        </ns4:element>
        <ns4:element name="propertyGroup">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ChargeItemDefinition.PropertyGroup"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstancePolymer.DegreeOfPolymerisation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="degree" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.SubstanceAmount"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductIndication.OtherTherapy" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="therapyRelationshipType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="UnitsOfTime" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Device.Property" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="valueQuantity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Quantity"/>
        </ns4:element>
        <ns4:element name="valueCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AddressType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="relation" elementType="FHIR.string"/>
        <ns4:element name="url" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingStudy.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="use" elementType="FHIR.Use"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="requestor" elementType="FHIR.Reference"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.ClaimProcessingCodes"/>
        <ns4:element name="disposition" elementType="FHIR.string"/>
        <ns4:element name="preAuthRef" elementType="FHIR.string"/>
        <ns4:element name="preAuthPeriod" elementType="FHIR.Period"/>
        <ns4:element name="payeeType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Item"/>
        </ns4:element>
        <ns4:element name="addItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.AddItem"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
        <ns4:element name="total">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Total"/>
        </ns4:element>
        <ns4:element name="payment" elementType="FHIR.ClaimResponse.Payment"/>
        <ns4:element name="fundsReserve" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="formCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="form" elementType="FHIR.Attachment"/>
        <ns4:element name="processNote">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.ProcessNote"/>
        </ns4:element>
        <ns4:element name="communicationRequest">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Insurance"/>
        </ns4:element>
        <ns4:element name="error">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Error"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinition" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="kind">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="keyword">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="fhirVersion" elementType="FHIR.FHIRVersion"/>
        <ns4:element name="mapping">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureDefinition.Mapping"/>
        </ns4:element>
        <ns4:element name="kind" elementType="FHIR.StructureDefinitionKind"/>
        <ns4:element name="abstract" elementType="FHIR.boolean"/>
        <ns4:element name="context">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureDefinition.Context"/>
        </ns4:element>
        <ns4:element name="contextInvariant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.uri"/>
        <ns4:element name="baseDefinition" elementType="FHIR.canonical"/>
        <ns4:element name="derivation" elementType="FHIR.TypeDerivationRule"/>
        <ns4:element name="snapshot" elementType="FHIR.StructureDefinition.Snapshot"/>
        <ns4:element name="differential" elementType="FHIR.StructureDefinition.Differential"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntoleranceCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Filter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="property" elementType="FHIR.code"/>
        <ns4:element name="op" elementType="FHIR.FilterOperator"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HealthcareService.NotAvailable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="during" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PractitionerRole.AvailableTime" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="daysOfWeek">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DaysOfWeek"/>
        </ns4:element>
        <ns4:element name="allDay" elementType="FHIR.boolean"/>
        <ns4:element name="availableStartTime" elementType="FHIR.time"/>
        <ns4:element name="availableEndTime" elementType="FHIR.time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceUseStatement" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.DeviceUseStatementStatus"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="derivedFrom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recordedOn" elementType="FHIR.dateTime"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
        <ns4:element name="device" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DiagnosticReport.Media" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="link" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="criteria" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Procedure" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EventStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="performed">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recorder" elementType="FHIR.Reference"/>
        <ns4:element name="asserter" elementType="FHIR.Reference"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Procedure.Performer"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="outcome" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="report">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="complication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="complicationDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="followUp">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="focalDevice">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Procedure.FocalDevice"/>
        </ns4:element>
        <ns4:element name="usedReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="usedCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MarketingStatus" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="country" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="jurisdiction" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="dateRange" elementType="FHIR.Period"/>
        <ns4:element name="restoreDate" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationDefinition.ReferencedFrom" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="source" elementType="FHIR.string"/>
        <ns4:element name="sourceId" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VerificationResult.Attestation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="who" elementType="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" elementType="FHIR.Reference"/>
        <ns4:element name="communicationMethod" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="sourceIdentityCertificate" elementType="FHIR.string"/>
        <ns4:element name="proxyIdentityCertificate" elementType="FHIR.string"/>
        <ns4:element name="proxySignature" elementType="FHIR.Signature"/>
        <ns4:element name="sourceSignature" elementType="FHIR.Signature"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchParameter" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="target">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="derivedFrom" elementType="FHIR.canonical"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="base">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.SearchParamType"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="xpath" elementType="FHIR.string"/>
        <ns4:element name="xpathUsage" elementType="FHIR.XPathUsageType"/>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="multipleOr" elementType="FHIR.boolean"/>
        <ns4:element name="multipleAnd" elementType="FHIR.boolean"/>
        <ns4:element name="comparator">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SearchComparator"/>
        </ns4:element>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SearchModifierCode"/>
        </ns4:element>
        <ns4:element name="chain">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="component">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SearchParameter.Component"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DataRequirement.CodeFilter" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="searchParam" elementType="FHIR.string"/>
        <ns4:element name="valueSet" elementType="FHIR.canonical"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="IssueSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CareTeamStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Procedure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="procedure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Binding" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="strength" elementType="FHIR.BindingStrength"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="valueSet" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EncounterStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinitionKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InsurancePlan.Limit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value" elementType="FHIR.Quantity"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PublicationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Device.DeviceName" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.DeviceNameType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.MeasureReportStatus"/>
        <ns4:element name="type" elementType="FHIR.MeasureReportType"/>
        <ns4:element name="measure" elementType="FHIR.canonical"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="reporter" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="improvementNotation" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="group">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Group"/>
        </ns4:element>
        <ns4:element name="evaluatedResource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIRVersion" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="representation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PropertyRepresentation"/>
        </ns4:element>
        <ns4:element name="sliceName" elementType="FHIR.string"/>
        <ns4:element name="sliceIsConstraining" elementType="FHIR.boolean"/>
        <ns4:element name="label" elementType="FHIR.string"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="slicing" elementType="FHIR.ElementDefinition.Slicing"/>
        <ns4:element name="short" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.markdown"/>
        <ns4:element name="comment" elementType="FHIR.markdown"/>
        <ns4:element name="requirements" elementType="FHIR.markdown"/>
        <ns4:element name="alias">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="min" elementType="FHIR.unsignedInt"/>
        <ns4:element name="max" elementType="FHIR.string"/>
        <ns4:element name="base" elementType="FHIR.ElementDefinition.Base"/>
        <ns4:element name="contentReference" elementType="FHIR.uri"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Type"/>
        </ns4:element>
        <ns4:element name="defaultValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="meaningWhenMissing" elementType="FHIR.markdown"/>
        <ns4:element name="orderMeaning" elementType="FHIR.string"/>
        <ns4:element name="fixed">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="pattern">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="example">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Example"/>
        </ns4:element>
        <ns4:element name="minValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="maxValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="maxLength" elementType="FHIR.integer"/>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.id"/>
        </ns4:element>
        <ns4:element name="constraint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Constraint"/>
        </ns4:element>
        <ns4:element name="mustSupport" elementType="FHIR.boolean"/>
        <ns4:element name="isModifier" elementType="FHIR.boolean"/>
        <ns4:element name="isModifierReason" elementType="FHIR.string"/>
        <ns4:element name="isSummary" elementType="FHIR.boolean"/>
        <ns4:element name="binding" elementType="FHIR.ElementDefinition.Binding"/>
        <ns4:element name="mapping">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Mapping"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Task.Input" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CoverageEligibilityResponse.Error" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlanActivityKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Composition.Attester" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.CompositionAttestationMode"/>
        <ns4:element name="time" elementType="FHIR.dateTime"/>
        <ns4:element name="party" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapSourceListMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationOutcome.Issue" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="severity" elementType="FHIR.IssueSeverity"/>
        <ns4:element name="code" elementType="FHIR.IssueType"/>
        <ns4:element name="details" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="diagnostics" elementType="FHIR.string"/>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="expression">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="strandType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireResponseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstancePolymer.Repeat" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="numberOfUnits" elementType="FHIR.integer"/>
        <ns4:element name="averageMolecularFormula" elementType="FHIR.string"/>
        <ns4:element name="repeatUnitAmountType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="repeatUnit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.RepeatUnit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GuidanceResponse" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="module">
        <ns4:element name="requestIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="module">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.GuidanceResponseStatus"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="occurrenceDateTime" elementType="FHIR.dateTime"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="evaluationMessage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="outputParameters" elementType="FHIR.Reference"/>
        <ns4:element name="result" elementType="FHIR.Reference"/>
        <ns4:element name="dataRequirement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchComparator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Endpoint" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="protocol" elementType="FHIR.Coding"/>
        <ns4:element name="address" elementType="FHIR.url"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetric" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unit" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
        <ns4:element name="parent" elementType="FHIR.Reference"/>
        <ns4:element name="operationalStatus" elementType="FHIR.DeviceMetricOperationalStatus"/>
        <ns4:element name="color" elementType="FHIR.DeviceMetricColor"/>
        <ns4:element name="category" elementType="FHIR.DeviceMetricCategory"/>
        <ns4:element name="measurementPeriod" elementType="FHIR.Timing"/>
        <ns4:element name="calibration">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceMetric.Calibration"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ChargeItemStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Flag" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FlagStatus"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EnrollmentRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="candidate" elementType="FHIR.Reference"/>
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CareTeam" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="category">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CareTeamStatus"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CareTeam.Participant"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="managingOrganization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities.ValidateCode" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="translations" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestScript.Operation"/>
        <ns4:element name="assert" elementType="FHIR.TestScript.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionParticipantType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphDefinition.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.code"/>
        <ns4:element name="params" elementType="FHIR.string"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
        <ns4:element name="compartment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Compartment"/>
        </ns4:element>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Link"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Account.Coverage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="priority" elementType="FHIR.positiveInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Invoice.PriceComponent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.InvoicePriceComponentType"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntoleranceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Discriminator" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.DiscriminatorType"/>
        <ns4:element name="path" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductAuthorization" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="country">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="statusDate" elementType="FHIR.dateTime"/>
        <ns4:element name="restoreDate" elementType="FHIR.dateTime"/>
        <ns4:element name="validityPeriod" elementType="FHIR.Period"/>
        <ns4:element name="dataExclusivityPeriod" elementType="FHIR.Period"/>
        <ns4:element name="dateOfFirstAuthorization" elementType="FHIR.dateTime"/>
        <ns4:element name="internationalBirthDate" elementType="FHIR.dateTime"/>
        <ns4:element name="legalBasis" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="jurisdictionalAuthorization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductAuthorization.JurisdictionalAuthorization"/>
        </ns4:element>
        <ns4:element name="holder" elementType="FHIR.Reference"/>
        <ns4:element name="regulator" elementType="FHIR.Reference"/>
        <ns4:element name="procedure" elementType="FHIR.MedicinalProductAuthorization.Procedure"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure.Population" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="criteria" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequest.InitialFill" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="duration" elementType="FHIR.Duration"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities.CodeSystem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uri" elementType="FHIR.canonical"/>
        <ns4:element name="version">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TerminologyCapabilities.Version"/>
        </ns4:element>
        <ns4:element name="subsumption" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Immunization.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlanActivityStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InvoiceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimProcessingCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="claim" elementType="FHIR.Reference"/>
        <ns4:element name="relationship" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reference" elementType="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestResourceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ParticipationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.Ingredient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="isActive" elementType="FHIR.boolean"/>
        <ns4:element name="strength" elementType="FHIR.Ratio"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.ProcessNote" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" elementType="FHIR.positiveInt"/>
        <ns4:element name="type" elementType="FHIR.NoteType"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="language" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Device.Version" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="component" elementType="FHIR.Identifier"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinition.Snapshot" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="element">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceNameType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireResponse.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="linkId" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.uri"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="answer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.QuestionnaireResponse.Answer"/>
        </ns4:element>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.QuestionnaireResponse.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AssertionOperatorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DaysOfWeek" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="IssueType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Rest" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.RestfulCapabilityMode"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
        <ns4:element name="security" elementType="FHIR.CapabilityStatement.Security"/>
        <ns4:element name="resource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Resource"/>
        </ns4:element>
        <ns4:element name="interaction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Interaction1"/>
        </ns4:element>
        <ns4:element name="searchParam">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.SearchParam"/>
        </ns4:element>
        <ns4:element name="operation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Operation"/>
        </ns4:element>
        <ns4:element name="compartment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageDefinition" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="event">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="base" elementType="FHIR.canonical"/>
        <ns4:element name="parent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="event">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="category" elementType="FHIR.MessageSignificanceCategory"/>
        <ns4:element name="focus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MessageDefinition.Focus"/>
        </ns4:element>
        <ns4:element name="responseRequired" elementType="FHIR.messageheaderResponseRequest"/>
        <ns4:element name="allowedResponse">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MessageDefinition.AllowedResponse"/>
        </ns4:element>
        <ns4:element name="graph">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingStudy.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uid" elementType="FHIR.id"/>
        <ns4:element name="sopClass" elementType="FHIR.Coding"/>
        <ns4:element name="number" elementType="FHIR.unsignedInt"/>
        <ns4:element name="title" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="canonical" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapContextType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FamilyHistoryStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="status" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphDefinition.Compartment" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="use" elementType="FHIR.GraphCompartmentUse"/>
        <ns4:element name="code" elementType="FHIR.CompartmentType"/>
        <ns4:element name="rule" elementType="FHIR.GraphCompartmentRule"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Input" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.id"/>
        <ns4:element name="type" elementType="FHIR.string"/>
        <ns4:element name="mode" elementType="FHIR.StructureMapInputMode"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities.Version" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.string"/>
        <ns4:element name="isDefault" elementType="FHIR.boolean"/>
        <ns4:element name="compositional" elementType="FHIR.boolean"/>
        <ns4:element name="language">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="filter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TerminologyCapabilities.Filter"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Origin" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="index" elementType="FHIR.integer"/>
        <ns4:element name="profile" elementType="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExtensionContextType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Coverage.Exception" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AssertionResponseTypes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationOutcome" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="issue.code">
        <ns4:element name="issue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationOutcome.Issue"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceDefinition.Property" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="valueQuantity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Quantity"/>
        </ns4:element>
        <ns4:element name="valueCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Signer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.Coding"/>
        <ns4:element name="party" elementType="FHIR.Reference"/>
        <ns4:element name="signature">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Signature"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.DrugCharacteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Population" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="count" elementType="FHIR.integer"/>
        <ns4:element name="subjectResults" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Adjudication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
        <ns4:element name="value" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="string" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProduct.CountryLanguage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="country" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="jurisdiction" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="language" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Security" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="cors" elementType="FHIR.boolean"/>
        <ns4:element name="service">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EvidenceVariable.Characteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="definition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="usageContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="exclude" elementType="FHIR.boolean"/>
        <ns4:element name="participantEffective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="timeFromStart" elementType="FHIR.Duration"/>
        <ns4:element name="groupMeasure" elementType="FHIR.GroupMeasure"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionRequiredBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphCompartmentUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PaymentReconciliation.ProcessNote" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.NoteType"/>
        <ns4:element name="text" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Total" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Element" retrievable="false" baseType="System.Any">
        <ns4:element name="id" elementType="System.String"/>
        <ns4:element name="extension">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ExplanationOfBenefitStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="use" elementType="FHIR.Use"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="billablePeriod" elementType="FHIR.Period"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="enterer" elementType="FHIR.Reference"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="fundsReserveRequested" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="fundsReserve" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="related">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Related"/>
        </ns4:element>
        <ns4:element name="prescription" elementType="FHIR.Reference"/>
        <ns4:element name="originalPrescription" elementType="FHIR.Reference"/>
        <ns4:element name="payee" elementType="FHIR.ExplanationOfBenefit.Payee"/>
        <ns4:element name="referral" elementType="FHIR.Reference"/>
        <ns4:element name="facility" elementType="FHIR.Reference"/>
        <ns4:element name="claim" elementType="FHIR.Reference"/>
        <ns4:element name="claimResponse" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.ClaimProcessingCodes"/>
        <ns4:element name="disposition" elementType="FHIR.string"/>
        <ns4:element name="preAuthRef">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="preAuthRefPeriod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Period"/>
        </ns4:element>
        <ns4:element name="careTeam">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.CareTeam"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.SupportingInfo"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Diagnosis"/>
        </ns4:element>
        <ns4:element name="procedure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Procedure"/>
        </ns4:element>
        <ns4:element name="precedence" elementType="FHIR.positiveInt"/>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Insurance"/>
        </ns4:element>
        <ns4:element name="accident" elementType="FHIR.ExplanationOfBenefit.Accident"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Item"/>
        </ns4:element>
        <ns4:element name="addItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.AddItem"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
        <ns4:element name="total">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Total"/>
        </ns4:element>
        <ns4:element name="payment" elementType="FHIR.ExplanationOfBenefit.Payment"/>
        <ns4:element name="formCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="form" elementType="FHIR.Attachment"/>
        <ns4:element name="processNote">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.ProcessNote"/>
        </ns4:element>
        <ns4:element name="benefitPeriod" elementType="FHIR.Period"/>
        <ns4:element name="benefitBalance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.BenefitBalance"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationDispense.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SpecimenDefinition.Additive" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="additive">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities.Translation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="needsMap" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Policy" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="authority" elementType="FHIR.uri"/>
        <ns4:element name="uri" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="List.Entry" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="flag" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="deleted" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="item" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="orientationType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Patient.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="relationship">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.HumanName"/>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" elementType="FHIR.Address"/>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="organization" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MolecularSequence.Quality" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.qualityType"/>
        <ns4:element name="standardSequence" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="start" elementType="FHIR.integer"/>
        <ns4:element name="end" elementType="FHIR.integer"/>
        <ns4:element name="score" elementType="FHIR.Quantity"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="truthTP" elementType="FHIR.decimal"/>
        <ns4:element name="queryTP" elementType="FHIR.decimal"/>
        <ns4:element name="truthFN" elementType="FHIR.decimal"/>
        <ns4:element name="queryFP" elementType="FHIR.decimal"/>
        <ns4:element name="gtFP" elementType="FHIR.decimal"/>
        <ns4:element name="precision" elementType="FHIR.decimal"/>
        <ns4:element name="recall" elementType="FHIR.decimal"/>
        <ns4:element name="fScore" elementType="FHIR.decimal"/>
        <ns4:element name="roc" elementType="FHIR.MolecularSequence.Roc"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.MedicineClassification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="classification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlan" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.RequestStatus"/>
        <ns4:element name="intent" elementType="FHIR.CarePlanIntent"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="contributor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="careTeam">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="addresses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="goal">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="activity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CarePlan.Activity"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceReferenceInformation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="gene">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceReferenceInformation.Gene"/>
        </ns4:element>
        <ns4:element name="geneElement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceReferenceInformation.GeneElement"/>
        </ns4:element>
        <ns4:element name="classification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceReferenceInformation.Classification"/>
        </ns4:element>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceReferenceInformation.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Questionnaire" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="name">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="derivedFrom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subjectType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Patient" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" elementType="FHIR.date"/>
        <ns4:element name="deceased">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="address">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="maritalStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="multipleBirth">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="photo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Patient.Contact"/>
        </ns4:element>
        <ns4:element name="communication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Patient.Communication"/>
        </ns4:element>
        <ns4:element name="generalPractitioner">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="managingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Patient.Link"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSourceMaterial" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="sourceMaterialClass" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="sourceMaterialType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="sourceMaterialState" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="organismId" elementType="FHIR.Identifier"/>
        <ns4:element name="organismName" elementType="FHIR.string"/>
        <ns4:element name="parentSubstanceId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="parentSubstanceName">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="countryOfOrigin">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="geographicalLocation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="developmentStage" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="fractionDescription">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSourceMaterial.FractionDescription"/>
        </ns4:element>
        <ns4:element name="organism" elementType="FHIR.SubstanceSourceMaterial.Organism"/>
        <ns4:element name="partDescription">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSourceMaterial.PartDescription"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="List" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ListStatus"/>
        <ns4:element name="mode" elementType="FHIR.ListMode"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
        <ns4:element name="orderedBy" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="entry">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.List.Entry"/>
        </ns4:element>
        <ns4:element name="emptyReason" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Stratum" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="component">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Component"/>
        </ns4:element>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Population1"/>
        </ns4:element>
        <ns4:element name="measureScore" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RelatedPerson" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="relationship">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="relationship">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" elementType="FHIR.date"/>
        <ns4:element name="address">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="photo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="communication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedPerson.Communication"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AccountStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EpisodeOfCare.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="condition" elementType="FHIR.Reference"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="rank" elementType="FHIR.positiveInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="description" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSourceMaterial.PartDescription" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="part" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="partLocation" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.Kinetics" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="areaUnderCurve">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Quantity"/>
        </ns4:element>
        <ns4:element name="lethalDose50">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Quantity"/>
        </ns4:element>
        <ns4:element name="halfLifePeriod" elementType="FHIR.Duration"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification.Official" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="authority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FamilyMemberHistory.Condition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="outcome" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="contributedToDeath" elementType="FHIR.boolean"/>
        <ns4:element name="onset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestGroup" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.RequestStatus"/>
        <ns4:element name="intent" elementType="FHIR.RequestIntent"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EffectEvidenceSynthesis.Certainty" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="rating">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="certaintySubcomponent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EffectEvidenceSynthesis.CertaintySubcomponent"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Page1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="anchor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="IdentifierUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductManufactured" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="manufacturedDoseForm" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unitOfPresentation" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="ingredient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="physicalCharacteristics" elementType="FHIR.ProdCharacteristic"/>
        <ns4:element name="otherCharacteristics">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Context" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reference" elementType="FHIR.Reference"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="text" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationAdministration.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapTargetListMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExposureState" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Detail1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.SubDetail1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReference" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="masterIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.DocumentReferenceStatus"/>
        <ns4:element name="docStatus" elementType="FHIR.CompositionStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.instant"/>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="authenticator" elementType="FHIR.Reference"/>
        <ns4:element name="custodian" elementType="FHIR.Reference"/>
        <ns4:element name="relatesTo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentReference.RelatesTo"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="securityLabel">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentReference.Content"/>
        </ns4:element>
        <ns4:element name="context" elementType="FHIR.DocumentReference.Context"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Address" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" elementType="FHIR.AddressUse"/>
        <ns4:element name="type" elementType="FHIR.AddressType"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="line">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="city" elementType="FHIR.string"/>
        <ns4:element name="district" elementType="FHIR.string"/>
        <ns4:element name="state" elementType="FHIR.string"/>
        <ns4:element name="postalCode" elementType="FHIR.string"/>
        <ns4:element name="country" elementType="FHIR.string"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Composition.RelatesTo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.DocumentRelationshipType"/>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.Goal" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="start" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="addresses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="documentation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReportParticipantType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BindingStrength" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestPriority" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Money" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="FHIR.decimal"/>
        <ns4:element name="currency" elementType="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CoverageEligibilityResponse.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="excluded" elementType="FHIR.boolean"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="network" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unit" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="term" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="benefit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityResponse.Benefit"/>
        </ns4:element>
        <ns4:element name="authorizationRequired" elementType="FHIR.boolean"/>
        <ns4:element name="authorizationSupporting">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="authorizationUrl" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MolecularSequence.ReferenceSeq" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="chromosome" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="genomeBuild" elementType="FHIR.string"/>
        <ns4:element name="orientation" elementType="FHIR.orientationType"/>
        <ns4:element name="referenceSeqId" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="referenceSeqPointer" elementType="FHIR.Reference"/>
        <ns4:element name="referenceSeqString" elementType="FHIR.string"/>
        <ns4:element name="strand" elementType="FHIR.strandType"/>
        <ns4:element name="windowStart" elementType="FHIR.integer"/>
        <ns4:element name="windowEnd" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Population1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="count" elementType="FHIR.integer"/>
        <ns4:element name="subjectResults" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Invoice.LineItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="chargeItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="priceComponent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Invoice.PriceComponent"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Practitioner" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="qualification.code">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" elementType="FHIR.date"/>
        <ns4:element name="photo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="qualification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Practitioner.Qualification"/>
        </ns4:element>
        <ns4:element name="communication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InsurancePlan.Plan" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="coverageArea">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="network">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="generalCost">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.GeneralCost"/>
        </ns4:element>
        <ns4:element name="specificCost">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.SpecificCost"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AdverseEvent.SuspectEntity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="instance" elementType="FHIR.Reference"/>
        <ns4:element name="causality">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AdverseEvent.Causality"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ParticipantRequired" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Offer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="party">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Party"/>
        </ns4:element>
        <ns4:element name="topic" elementType="FHIR.Reference"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="decision" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="decisionMode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="answer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Answer"/>
        </ns4:element>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="linkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="securityLabelNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.unsignedInt"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.ClassHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="class" elementType="FHIR.Coding"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExampleScenario.Version" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="versionId" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="XPathUsageType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VisionPrescription" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="dateWritten" elementType="FHIR.dateTime"/>
        <ns4:element name="prescriber" elementType="FHIR.Reference"/>
        <ns4:element name="lensSpecification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.VisionPrescription.LensSpecification"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchParameter.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="definition" elementType="FHIR.canonical"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="id" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="individual" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceAmount" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="amount">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="amountType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amountText" elementType="FHIR.string"/>
        <ns4:element name="referenceRange" elementType="FHIR.SubstanceAmount.ReferenceRange"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.Administration" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="schedule" elementType="FHIR.Timing"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="rate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RiskEvidenceSynthesis.PrecisionEstimate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="level" elementType="FHIR.decimal"/>
        <ns4:element name="from" elementType="FHIR.decimal"/>
        <ns4:element name="to" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FilterOperator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NamingSystemType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PaymentNotice" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="response" elementType="FHIR.Reference"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="payment" elementType="FHIR.Reference"/>
        <ns4:element name="paymentDate" elementType="FHIR.date"/>
        <ns4:element name="payee" elementType="FHIR.Reference"/>
        <ns4:element name="recipient" elementType="FHIR.Reference"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
        <ns4:element name="paymentStatus" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.AddItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="itemSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="detailSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="subdetailSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="provider">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subSite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Detail1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Range" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="low" elementType="FHIR.Quantity"/>
        <ns4:element name="high" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.PatientCharacteristics" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="characteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DomainResource" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="text" elementType="FHIR.Narrative"/>
        <ns4:element name="contained">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResourceContainer"/>
        </ns4:element>
        <ns4:element name="extension">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
        <ns4:element name="modifierExtension">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductInteraction" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="interactant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductInteraction.Interactant"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="effect" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="incidence" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="management" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ObservationDefinition" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="permittedDataType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ObservationDataType"/>
        </ns4:element>
        <ns4:element name="multipleResultsAllowed" elementType="FHIR.boolean"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="preferredReportName" elementType="FHIR.string"/>
        <ns4:element name="quantitativeDetails" elementType="FHIR.ObservationDefinition.QuantitativeDetails"/>
        <ns4:element name="qualifiedInterval">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ObservationDefinition.QualifiedInterval"/>
        </ns4:element>
        <ns4:element name="validCodedValueSet" elementType="FHIR.Reference"/>
        <ns4:element name="normalCodedValueSet" elementType="FHIR.Reference"/>
        <ns4:element name="abnormalCodedValueSet" elementType="FHIR.Reference"/>
        <ns4:element name="criticalCodedValueSet" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExampleScenario.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="initiator" elementType="FHIR.string"/>
        <ns4:element name="receiver" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="initiatorActive" elementType="FHIR.boolean"/>
        <ns4:element name="receiverActive" elementType="FHIR.boolean"/>
        <ns4:element name="request" elementType="FHIR.ExampleScenario.ContainedInstance"/>
        <ns4:element name="response" elementType="FHIR.ExampleScenario.ContainedInstance"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Interaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.TypeRestfulInteraction"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.id"/>
        <ns4:element name="extends" elementType="FHIR.id"/>
        <ns4:element name="typeMode" elementType="FHIR.StructureMapGroupTypeMode"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
        <ns4:element name="input">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Input"/>
        </ns4:element>
        <ns4:element name="rule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Rule"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContractResourceStatusCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="shortTitle" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="comment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="population" elementType="FHIR.Reference"/>
        <ns4:element name="exposure" elementType="FHIR.Reference"/>
        <ns4:element name="exposureAlternative" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.DependsOn" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uri" elementType="FHIR.canonical"/>
        <ns4:element name="packageId" elementType="FHIR.id"/>
        <ns4:element name="version" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstancePolymer.StartingMaterial" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="material" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="isDefining" elementType="FHIR.boolean"/>
        <ns4:element name="amount" elementType="FHIR.SubstanceAmount"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Party" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="questionnaire" elementType="FHIR.canonical"/>
        <ns4:element name="status" elementType="FHIR.QuestionnaireResponseStatus"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="authored" elementType="FHIR.dateTime"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.QuestionnaireResponse.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent.Agent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="role">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="who" elementType="FHIR.Reference"/>
        <ns4:element name="altId" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="requestor" elementType="FHIR.boolean"/>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="policy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="media" elementType="FHIR.Coding"/>
        <ns4:element name="network" elementType="FHIR.AuditEvent.Network"/>
        <ns4:element name="purposeOfUse">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem.Property1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingStudy" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="modality">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ImagingStudyStatus"/>
        <ns4:element name="modality">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="started" elementType="FHIR.dateTime"/>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="referrer" elementType="FHIR.Reference"/>
        <ns4:element name="interpreter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="numberOfSeries" elementType="FHIR.unsignedInt"/>
        <ns4:element name="numberOfInstances" elementType="FHIR.unsignedInt"/>
        <ns4:element name="procedureReference" elementType="FHIR.Reference"/>
        <ns4:element name="procedureCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="series">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingStudy.Series"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Account" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.AccountStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="servicePeriod" elementType="FHIR.Period"/>
        <ns4:element name="coverage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Account.Coverage"/>
        </ns4:element>
        <ns4:element name="owner" elementType="FHIR.Reference"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="guarantor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Account.Guarantor"/>
        </ns4:element>
        <ns4:element name="partOf" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification.Structure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="stereochemistry" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="opticalActivity" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="molecularFormula" elementType="FHIR.string"/>
        <ns4:element name="molecularFormulaByMoiety" elementType="FHIR.string"/>
        <ns4:element name="isotope">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Isotope"/>
        </ns4:element>
        <ns4:element name="molecularWeight" elementType="FHIR.SubstanceSpecification.MolecularWeight"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="representation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Representation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchSubjectStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent.Network" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="address" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.AuditEventAgentNetworkType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Actor" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reference" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VerificationResult" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="validationType">
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="targetLocation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="need" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.status"/>
        <ns4:element name="statusDate" elementType="FHIR.dateTime"/>
        <ns4:element name="validationType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="validationProcess">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="frequency" elementType="FHIR.Timing"/>
        <ns4:element name="lastPerformed" elementType="FHIR.dateTime"/>
        <ns4:element name="nextScheduled" elementType="FHIR.date"/>
        <ns4:element name="failureAction" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="primarySource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.VerificationResult.PrimarySource"/>
        </ns4:element>
        <ns4:element name="attestation" elementType="FHIR.VerificationResult.Attestation"/>
        <ns4:element name="validator">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.VerificationResult.Validator"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContactPoint" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="system" elementType="FHIR.ContactPointSystem"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="use" elementType="FHIR.ContactPointUse"/>
        <ns4:element name="rank" elementType="FHIR.positiveInt"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationDispense.Substitution" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="wasSubstituted" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="responsibleParty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.BenefitBalance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="excluded" elementType="FHIR.boolean"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="network" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unit" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="term" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="financial">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Financial"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.Supplement" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productName" elementType="FHIR.string"/>
        <ns4:element name="schedule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Timing"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="instruction" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PractitionerRole" retrievable="true" baseType="FHIR.DomainResource" primaryCOdePath="code">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="practitioner" elementType="FHIR.Reference"/>
        <ns4:element name="organization" elementType="FHIR.Reference"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="healthcareService">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="availableTime">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PractitionerRole.AvailableTime"/>
        </ns4:element>
        <ns4:element name="notAvailable">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PractitionerRole.NotAvailable"/>
        </ns4:element>
        <ns4:element name="availabilityExceptions" elementType="FHIR.string"/>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification.Isotope" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="name" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="substitution" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="halfLife" elementType="FHIR.Quantity"/>
        <ns4:element name="molecularWeight" elementType="FHIR.SubstanceSpecification.MolecularWeight"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BiologicallyDerivedProduct.Storage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="temperature" elementType="FHIR.decimal"/>
        <ns4:element name="scale" elementType="FHIR.BiologicallyDerivedProductStorageScale"/>
        <ns4:element name="duration" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Subject" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InsurancePlan.GeneralCost" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="groupSize" elementType="FHIR.positiveInt"/>
        <ns4:element name="cost" elementType="FHIR.Money"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphDefinition.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="sliceName" elementType="FHIR.string"/>
        <ns4:element name="min" elementType="FHIR.integer"/>
        <ns4:element name="max" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Immunization" retrievable="true" primaryCodePath="vaccineCode" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ImmunizationStatusCodes"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="vaccineCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recorded" elementType="FHIR.dateTime"/>
        <ns4:element name="primarySource" elementType="FHIR.boolean"/>
        <ns4:element name="reportOrigin" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="manufacturer" elementType="FHIR.Reference"/>
        <ns4:element name="lotNumber" elementType="FHIR.string"/>
        <ns4:element name="expirationDate" elementType="FHIR.date"/>
        <ns4:element name="site" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="route" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="doseQuantity" elementType="FHIR.Quantity"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.Performer"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="isSubpotent" elementType="FHIR.boolean"/>
        <ns4:element name="subpotentReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="education">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.Education"/>
        </ns4:element>
        <ns4:element name="programEligibility">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="fundingSource" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reaction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.Reaction"/>
        </ns4:element>
        <ns4:element name="protocolApplied">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Immunization.ProtocolApplied"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Specimen.Collection" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="collector" elementType="FHIR.Reference"/>
        <ns4:element name="collected">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="duration" elementType="FHIR.Duration"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="fastingStatus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapTransform" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationEvaluation" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="targetDisease">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ImmunizationEvaluationStatusCodes"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="authority" elementType="FHIR.Reference"/>
        <ns4:element name="targetDisease" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="immunizationEvent" elementType="FHIR.Reference"/>
        <ns4:element name="doseStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="doseStatusReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="series" elementType="FHIR.string"/>
        <ns4:element name="doseNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="seriesDoses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResponseType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="decimal" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AggregationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceAmount.ReferenceRange" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="lowLimit" elementType="FHIR.Quantity"/>
        <ns4:element name="highLimit" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem.Filter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="operator">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.FilterOperator"/>
        </ns4:element>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PaymentReconciliation.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="predecessor" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="submitter" elementType="FHIR.Reference"/>
        <ns4:element name="response" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="responsible" elementType="FHIR.Reference"/>
        <ns4:element name="payee" elementType="FHIR.Reference"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="sequenceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Condition.Stage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="summary" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="assessment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SystemRestfulInteraction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Task" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical" elementType="FHIR.canonical"/>
        <ns4:element name="instantiatesUri" elementType="FHIR.uri"/>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.TaskStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="businessStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intent" elementType="FHIR.TaskIntent"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="focus" elementType="FHIR.Reference"/>
        <ns4:element name="for" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="executionPeriod" elementType="FHIR.Period"/>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="lastModified" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="performerType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="owner" elementType="FHIR.Reference"/>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reasonReference" elementType="FHIR.Reference"/>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="relevantHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="restriction" elementType="FHIR.Task.Restriction"/>
        <ns4:element name="input">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Task.Input"/>
        </ns4:element>
        <ns4:element name="output">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Task.Output"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyDelivery" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.SupplyDeliveryStatus"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="suppliedItem" elementType="FHIR.SupplyDelivery.SuppliedItem"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="supplier" elementType="FHIR.Reference"/>
        <ns4:element name="destination" elementType="FHIR.Reference"/>
        <ns4:element name="receiver">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AdverseEventActuality" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Location.HoursOfOperation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="daysOfWeek">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DaysOfWeek"/>
        </ns4:element>
        <ns4:element name="allDay" elementType="FHIR.boolean"/>
        <ns4:element name="openingTime" elementType="FHIR.time"/>
        <ns4:element name="closingTime" elementType="FHIR.time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Answer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VisionPrescription.Prism" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="amount" elementType="FHIR.decimal"/>
        <ns4:element name="base" elementType="FHIR.VisionBase"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubscriptionChannelType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem.Property" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="uri" elementType="FHIR.uri"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.PropertyType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ParameterDefinition" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="name" elementType="FHIR.code"/>
        <ns4:element name="use" elementType="FHIR.code"/>
        <ns4:element name="min" elementType="FHIR.integer"/>
        <ns4:element name="max" elementType="FHIR.string"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.code"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Population" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="age">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="race" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="physiologicalCondition" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Payment" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="adjustment" elementType="FHIR.Money"/>
        <ns4:element name="adjustmentReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Assert" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="result" elementType="FHIR.TestReportActionResult"/>
        <ns4:element name="message" elementType="FHIR.markdown"/>
        <ns4:element name="detail" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationDispense" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.code"/>
        <ns4:element name="statusReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="supportingInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationDispense.Performer"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="authorizingPrescription">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="daysSupply" elementType="FHIR.Quantity"/>
        <ns4:element name="whenPrepared" elementType="FHIR.dateTime"/>
        <ns4:element name="whenHandedOver" elementType="FHIR.dateTime"/>
        <ns4:element name="destination" elementType="FHIR.Reference"/>
        <ns4:element name="receiver">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosageInstruction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
        <ns4:element name="substitution" elementType="FHIR.MedicationDispense.Substitution"/>
        <ns4:element name="detectedIssue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="eventHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CoverageEligibilityResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="purpose">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EligibilityResponsePurpose"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="requestor" elementType="FHIR.Reference"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.RemittanceOutcome"/>
        <ns4:element name="disposition" elementType="FHIR.string"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityResponse.Insurance"/>
        </ns4:element>
        <ns4:element name="preAuthRef" elementType="FHIR.string"/>
        <ns4:element name="form" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="error">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityResponse.Error"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Specimen.Processing" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="procedure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="additive">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="time">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Linkage.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.LinkageType"/>
        <ns4:element name="resource" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Questionnaire.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="linkId" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.uri"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="prefix" elementType="FHIR.string"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.QuestionnaireItemType"/>
        <ns4:element name="enableWhen">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.EnableWhen"/>
        </ns4:element>
        <ns4:element name="enableBehavior" elementType="FHIR.EnableWhenBehavior"/>
        <ns4:element name="required" elementType="FHIR.boolean"/>
        <ns4:element name="repeats" elementType="FHIR.boolean"/>
        <ns4:element name="readOnly" elementType="FHIR.boolean"/>
        <ns4:element name="maxLength" elementType="FHIR.integer"/>
        <ns4:element name="answerValueSet" elementType="FHIR.canonical"/>
        <ns4:element name="answerOption">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.AnswerOption"/>
        </ns4:element>
        <ns4:element name="initial">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.Initial"/>
        </ns4:element>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Questionnaire.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="equivalence" elementType="FHIR.ConceptMapEquivalence"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="dependsOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.DependsOn"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.DependsOn"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AssertionDirectionType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlanIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Device.Specialization" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="systemType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="version" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceDefinition.UdiDeviceIdentifier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="deviceIdentifier" elementType="FHIR.string"/>
        <ns4:element name="issuer" elementType="FHIR.uri"/>
        <ns4:element name="jurisdiction" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Substance.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="expiry" elementType="FHIR.dateTime"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Library" retrievable="true" primaryCodePath="topic" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ParameterDefinition"/>
        </ns4:element>
        <ns4:element name="dataRequirement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequest.DispenseRequest" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="initialFill" elementType="FHIR.MedicationRequest.InitialFill"/>
        <ns4:element name="dispenseInterval" elementType="FHIR.Duration"/>
        <ns4:element name="validityPeriod" elementType="FHIR.Period"/>
        <ns4:element name="numberOfRepeatsAllowed" elementType="FHIR.unsignedInt"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="expectedSupplyDuration" elementType="FHIR.Duration"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.StatusHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" elementType="FHIR.EncounterStatus"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="condition" elementType="FHIR.Reference"/>
        <ns4:element name="use" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="rank" elementType="FHIR.positiveInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntoleranceCriticality" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchStudy.Objective" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProduct.NamePart" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="part" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequest" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.MedicationRequestStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intent" elementType="FHIR.MedicationRequestIntent"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="reported">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="supportingInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="performerType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="recorder" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="courseOfTherapyType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosageInstruction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
        <ns4:element name="dispenseRequest" elementType="FHIR.MedicationRequest.DispenseRequest"/>
        <ns4:element name="substitution" elementType="FHIR.MedicationRequest.Substitution"/>
        <ns4:element name="priorPrescription" elementType="FHIR.Reference"/>
        <ns4:element name="detectedIssue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="eventHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationRecommendation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="authority" elementType="FHIR.Reference"/>
        <ns4:element name="recommendation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImmunizationRecommendation.Recommendation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PropertyRepresentation" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TriggerType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CompositionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AppointmentStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageSignificanceCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ListMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchElementType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ObservationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Meta" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="versionId" elementType="FHIR.id"/>
        <ns4:element name="lastUpdated" elementType="FHIR.instant"/>
        <ns4:element name="source" elementType="FHIR.uri"/>
        <ns4:element name="profile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="security">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="tag">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageHeader.Destination" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="target" elementType="FHIR.Reference"/>
        <ns4:element name="endpoint" elementType="FHIR.url"/>
        <ns4:element name="receiver" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Grouping" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Concept" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="designation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Designation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EnrollmentResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.RemittanceOutcome"/>
        <ns4:element name="disposition" elementType="FHIR.string"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="organization" elementType="FHIR.Reference"/>
        <ns4:element name="requestProvider" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EpisodeOfCare.StatusHistory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" elementType="FHIR.EpisodeOfCareStatus"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActivityDefinition.DynamicValue" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Coverage" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="policyHolder" elementType="FHIR.Reference"/>
        <ns4:element name="subscriber" elementType="FHIR.Reference"/>
        <ns4:element name="subscriberId" elementType="FHIR.string"/>
        <ns4:element name="beneficiary" elementType="FHIR.Reference"/>
        <ns4:element name="dependent" elementType="FHIR.string"/>
        <ns4:element name="relationship" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="payor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="class">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coverage.Class"/>
        </ns4:element>
        <ns4:element name="order" elementType="FHIR.positiveInt"/>
        <ns4:element name="network" elementType="FHIR.string"/>
        <ns4:element name="costToBeneficiary">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coverage.CostToBeneficiary"/>
        </ns4:element>
        <ns4:element name="subrogation" elementType="FHIR.boolean"/>
        <ns4:element name="contract">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CompartmentDefinition.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="param">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="documentation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceDefinition.Material" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="substance" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="alternate" elementType="FHIR.boolean"/>
        <ns4:element name="allergenicIndicator" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResourceType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Timing.Repeat" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="bounds">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="count" elementType="FHIR.positiveInt"/>
        <ns4:element name="countMax" elementType="FHIR.positiveInt"/>
        <ns4:element name="duration" elementType="FHIR.decimal"/>
        <ns4:element name="durationMax" elementType="FHIR.decimal"/>
        <ns4:element name="durationUnit" elementType="FHIR.UnitsOfTime"/>
        <ns4:element name="frequency" elementType="FHIR.positiveInt"/>
        <ns4:element name="frequencyMax" elementType="FHIR.positiveInt"/>
        <ns4:element name="period" elementType="FHIR.decimal"/>
        <ns4:element name="periodMax" elementType="FHIR.decimal"/>
        <ns4:element name="periodUnit" elementType="FHIR.UnitsOfTime"/>
        <ns4:element name="dayOfWeek">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="timeOfDay">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.time"/>
        </ns4:element>
        <ns4:element name="when">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EventTiming"/>
        </ns4:element>
        <ns4:element name="offset" elementType="FHIR.unsignedInt"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Medication.Ingredient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="isActive" elementType="FHIR.boolean"/>
        <ns4:element name="strength" elementType="FHIR.Ratio"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Media" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EventStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modality" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="view" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="created">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="issued" elementType="FHIR.instant"/>
        <ns4:element name="operator" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="deviceName" elementType="FHIR.string"/>
        <ns4:element name="device" elementType="FHIR.Reference"/>
        <ns4:element name="height" elementType="FHIR.positiveInt"/>
        <ns4:element name="width" elementType="FHIR.positiveInt"/>
        <ns4:element name="frames" elementType="FHIR.positiveInt"/>
        <ns4:element name="duration" elementType="FHIR.decimal"/>
        <ns4:element name="content" elementType="FHIR.Attachment"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="boolean" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapGroupTypeMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.ContractResourceStatusCodes"/>
        <ns4:element name="legalState" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="instantiatesCanonical" elementType="FHIR.Reference"/>
        <ns4:element name="instantiatesUri" elementType="FHIR.uri"/>
        <ns4:element name="contentDerivative" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="issued" elementType="FHIR.dateTime"/>
        <ns4:element name="applies" elementType="FHIR.Period"/>
        <ns4:element name="expirationType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="authority">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="domain">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="site">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="alias">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="scope" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contentDefinition" elementType="FHIR.Contract.ContentDefinition"/>
        <ns4:element name="term">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="relevantHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="signer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Signer"/>
        </ns4:element>
        <ns4:element name="friendly">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Friendly"/>
        </ns4:element>
        <ns4:element name="legal">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Legal"/>
        </ns4:element>
        <ns4:element name="rule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Rule"/>
        </ns4:element>
        <ns4:element name="legallyBinding">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.GuideParameterCode"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.Regulatory" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="regulatoryAuthority" elementType="FHIR.Reference"/>
        <ns4:element name="substitution">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Substitution"/>
        </ns4:element>
        <ns4:element name="schedule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Schedule"/>
        </ns4:element>
        <ns4:element name="maxDispense" elementType="FHIR.MedicationKnowledge.MaxDispense"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DiagnosticReport" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.DiagnosticReportStatus"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="issued" elementType="FHIR.instant"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="resultsInterpreter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="specimen">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="result">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="imagingStudy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="media">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DiagnosticReport.Media"/>
        </ns4:element>
        <ns4:element name="conclusion" elementType="FHIR.string"/>
        <ns4:element name="conclusionCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="presentedForm">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="site" elementType="FHIR.string"/>
        <ns4:element name="observer" elementType="FHIR.Reference"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BodyStructure" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="location">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="morphology" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="location" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="locationQualifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="image">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap.DependsOn" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="property" elementType="FHIR.uri"/>
        <ns4:element name="system" elementType="FHIR.canonical"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="display" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CatalogEntry.RelatedEntry" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="relationtype" elementType="FHIR.CatalogEntryRelationType"/>
        <ns4:element name="item" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CompartmentDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="code" elementType="FHIR.CompartmentType"/>
        <ns4:element name="search" elementType="FHIR.boolean"/>
        <ns4:element name="resource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CompartmentDefinition.Resource"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProduct.Name" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="productName" elementType="FHIR.string"/>
        <ns4:element name="namePart">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProduct.NamePart"/>
        </ns4:element>
        <ns4:element name="countryLanguage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProduct.CountryLanguage"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.Packaging" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClinicalImpression.Investigation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EncounterLocationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstancePolymer.MonomerSet" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="ratioType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="startingMaterial">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.StartingMaterial"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Schedule" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="serviceType">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="serviceCategory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviceType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="planningHorizon" elementType="FHIR.Period"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RelatedArtifact" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" elementType="FHIR.RelatedArtifactType"/>
        <ns4:element name="label" elementType="FHIR.string"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="citation" elementType="FHIR.markdown"/>
        <ns4:element name="url" elementType="FHIR.url"/>
        <ns4:element name="document" elementType="FHIR.Attachment"/>
        <ns4:element name="resource" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationAdministration" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiates">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.code"/>
        <ns4:element name="statusReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="supportingInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="effective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationAdministration.Performer"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="device">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosage" elementType="FHIR.MedicationAdministration.Dosage"/>
        <ns4:element name="eventHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Ratio" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="numerator" elementType="FHIR.Quantity"/>
        <ns4:element name="denominator" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InsurancePlan.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="purpose" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="name" elementType="FHIR.HumanName"/>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" elementType="FHIR.Address"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EffectEvidenceSynthesis.SampleSize" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="numberOfStudies" elementType="FHIR.integer"/>
        <ns4:element name="numberOfParticipants" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Resource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.code"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
        <ns4:element name="supportedProfile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
        <ns4:element name="interaction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Interaction"/>
        </ns4:element>
        <ns4:element name="versioning" elementType="FHIR.ResourceVersionPolicy"/>
        <ns4:element name="readHistory" elementType="FHIR.boolean"/>
        <ns4:element name="updateCreate" elementType="FHIR.boolean"/>
        <ns4:element name="conditionalCreate" elementType="FHIR.boolean"/>
        <ns4:element name="conditionalRead" elementType="FHIR.ConditionalReadStatus"/>
        <ns4:element name="conditionalUpdate" elementType="FHIR.boolean"/>
        <ns4:element name="conditionalDelete" elementType="FHIR.ConditionalDeleteStatus"/>
        <ns4:element name="referencePolicy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ReferenceHandlingPolicy"/>
        </ns4:element>
        <ns4:element name="searchInclude">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="searchRevInclude">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="searchParam">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.SearchParam"/>
        </ns4:element>
        <ns4:element name="operation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Operation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Task.Restriction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="repetitions" elementType="FHIR.positiveInt"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="recipient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Provenance" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="activity">
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="occurred">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recorded" elementType="FHIR.instant"/>
        <ns4:element name="policy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="reason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="activity" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="agent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Provenance.Agent"/>
        </ns4:element>
        <ns4:element name="entity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Provenance.Entity"/>
        </ns4:element>
        <ns4:element name="signature">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Signature"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductAuthorization.Procedure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="application">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductAuthorization.Procedure"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ProdCharacteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="height" elementType="FHIR.Quantity"/>
        <ns4:element name="width" elementType="FHIR.Quantity"/>
        <ns4:element name="depth" elementType="FHIR.Quantity"/>
        <ns4:element name="weight" elementType="FHIR.Quantity"/>
        <ns4:element name="nominalVolume" elementType="FHIR.Quantity"/>
        <ns4:element name="externalDiameter" elementType="FHIR.Quantity"/>
        <ns4:element name="shape" elementType="FHIR.string"/>
        <ns4:element name="color">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="imprint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="image">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Attachment"/>
        </ns4:element>
        <ns4:element name="scoring" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Medication" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.MedicationStatusCodes"/>
        <ns4:element name="manufacturer" elementType="FHIR.Reference"/>
        <ns4:element name="form" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Ratio"/>
        <ns4:element name="ingredient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Medication.Ingredient"/>
        </ns4:element>
        <ns4:element name="batch" elementType="FHIR.Medication.Batch"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlan.Activity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="outcomeCodeableConcept">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="outcomeReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="progress">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="reference" elementType="FHIR.Reference"/>
        <ns4:element name="detail" elementType="FHIR.CarePlan.Detail"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Goal.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="measure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="due">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Subject"/>
        </ns4:element>
        <ns4:element name="intent" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="linkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="contextLinkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="requester">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="requesterLinkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="performerType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="performerRole" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="performerLinkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="reasonLinkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="securityLabelNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.unsignedInt"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RiskEvidenceSynthesis.RiskEstimate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.decimal"/>
        <ns4:element name="unitOfMeasure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="denominatorCount" elementType="FHIR.integer"/>
        <ns4:element name="numeratorCount" elementType="FHIR.integer"/>
        <ns4:element name="precisionEstimate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RiskEvidenceSynthesis.PrecisionEstimate"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CoverageEligibilityRequest.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="supportingInfoSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="facility" elementType="FHIR.Reference"/>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityRequest.Diagnosis"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceRequest.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Rule" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.id"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Source"/>
        </ns4:element>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Target"/>
        </ns4:element>
        <ns4:element name="rule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Rule"/>
        </ns4:element>
        <ns4:element name="dependent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Dependent"/>
        </ns4:element>
        <ns4:element name="documentation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="structure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Structure"/>
        </ns4:element>
        <ns4:element name="import">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="group">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Group"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Accident" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.code"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HumanName" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" elementType="FHIR.NameUse"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="family" elementType="FHIR.string"/>
        <ns4:element name="given">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="prefix">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="suffix">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Questionnaire.EnableWhen" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="question" elementType="FHIR.string"/>
        <ns4:element name="operator" elementType="FHIR.QuestionnaireItemOperator"/>
        <ns4:element name="answer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.Coding"/>
        <ns4:element name="resource" elementType="FHIR.code"/>
        <ns4:element name="label" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="accept" elementType="FHIR.code"/>
        <ns4:element name="contentType" elementType="FHIR.code"/>
        <ns4:element name="destination" elementType="FHIR.integer"/>
        <ns4:element name="encodeRequestUrl" elementType="FHIR.boolean"/>
        <ns4:element name="method" elementType="FHIR.TestScriptRequestMethodCode"/>
        <ns4:element name="origin" elementType="FHIR.integer"/>
        <ns4:element name="params" elementType="FHIR.string"/>
        <ns4:element name="requestHeader">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.RequestHeader"/>
        </ns4:element>
        <ns4:element name="requestId" elementType="FHIR.id"/>
        <ns4:element name="responseId" elementType="FHIR.id"/>
        <ns4:element name="sourceId" elementType="FHIR.id"/>
        <ns4:element name="targetId" elementType="FHIR.id"/>
        <ns4:element name="url" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Group" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.GroupType"/>
        <ns4:element name="actual" elementType="FHIR.boolean"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="quantity" elementType="FHIR.unsignedInt"/>
        <ns4:element name="managingEntity" elementType="FHIR.Reference"/>
        <ns4:element name="characteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Group.Characteristic"/>
        </ns4:element>
        <ns4:element name="member">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Group.Member"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.Cost" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source" elementType="FHIR.string"/>
        <ns4:element name="cost" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Payee" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="party" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InsurancePlan" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="alias">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="ownedBy" elementType="FHIR.Reference"/>
        <ns4:element name="administeredBy" elementType="FHIR.Reference"/>
        <ns4:element name="coverageArea">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Contact"/>
        </ns4:element>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="network">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="coverage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Coverage"/>
        </ns4:element>
        <ns4:element name="plan">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Plan"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DetectedIssue" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ObservationStatus"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="severity" elementType="FHIR.DetectedIssueSeverity"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="identified">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="implicated">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="evidence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DetectedIssue.Evidence"/>
        </ns4:element>
        <ns4:element name="detail" elementType="FHIR.string"/>
        <ns4:element name="reference" elementType="FHIR.uri"/>
        <ns4:element name="mitigation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DetectedIssue.Mitigation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Location" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.LocationStatus"/>
        <ns4:element name="operationalStatus" elementType="FHIR.Coding"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="alias">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="mode" elementType="FHIR.LocationMode"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" elementType="FHIR.Address"/>
        <ns4:element name="physicalType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="position" elementType="FHIR.Location.Position"/>
        <ns4:element name="managingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="partOf" elementType="FHIR.Reference"/>
        <ns4:element name="hoursOfOperation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Location.HoursOfOperation"/>
        </ns4:element>
        <ns4:element name="availabilityExceptions" elementType="FHIR.string"/>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSourceMaterial.Hybrid" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="maternalOrganismId" elementType="FHIR.string"/>
        <ns4:element name="maternalOrganismName" elementType="FHIR.string"/>
        <ns4:element name="paternalOrganismId" elementType="FHIR.string"/>
        <ns4:element name="paternalOrganismName" elementType="FHIR.string"/>
        <ns4:element name="hybridType" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Resource" retrievable="false" baseType="System.Any">
        <ns4:element name="id" elementType="FHIR.id"/>
        <ns4:element name="meta" elementType="FHIR.Meta"/>
        <ns4:element name="implicitRules" elementType="FHIR.uri"/>
        <ns4:element name="language" elementType="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InsurancePlan.Benefit1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="cost">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Cost"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.SubDetail1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConditionalDeleteStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure.SupplementalData" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="usage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="criteria" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CoverageEligibilityResponse.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="inforce" elementType="FHIR.boolean"/>
        <ns4:element name="benefitPeriod" elementType="FHIR.Period"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityResponse.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EffectEvidenceSynthesis.EffectEstimate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="variantState" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.decimal"/>
        <ns4:element name="unitOfMeasure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="precisionEstimate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EffectEvidenceSynthesis.PrecisionEstimate"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="url" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="uri" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductContraindication.OtherTherapy" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="therapyRelationshipType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Use" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceReferenceInformation.Gene" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="geneSequenceOrigin" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="gene" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequestStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="IdentityAssuranceLevel" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.AddItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="itemSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="detailSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="subDetailSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="provider">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subSite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Detail1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Slicing" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="discriminator">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition.Discriminator"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="ordered" elementType="FHIR.boolean"/>
        <ns4:element name="rules" elementType="FHIR.SlicingRules"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetricColor" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Group.Member" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entity" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="inactive" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyRequest" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.SupplyRequestStatus"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SupplyRequest.Parameter"/>
        </ns4:element>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="supplier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="deliverFrom" elementType="FHIR.Reference"/>
        <ns4:element name="deliverTo" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="time" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConditionalReadStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PaymentReconciliation" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="paymentIssuer" elementType="FHIR.Reference"/>
        <ns4:element name="request" elementType="FHIR.Reference"/>
        <ns4:element name="requestor" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.RemittanceOutcome"/>
        <ns4:element name="disposition" elementType="FHIR.string"/>
        <ns4:element name="paymentDate" elementType="FHIR.date"/>
        <ns4:element name="paymentAmount" elementType="FHIR.Money"/>
        <ns4:element name="paymentIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PaymentReconciliation.Detail"/>
        </ns4:element>
        <ns4:element name="formCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="processNote">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PaymentReconciliation.ProcessNote"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchStudy.Arm" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntoleranceSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductPackaged.PackageItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="material">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="alternateMaterial">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="device">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="manufacturedItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="packageItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPackaged.PackageItem"/>
        </ns4:element>
        <ns4:element name="physicalCharacteristics" elementType="FHIR.ProdCharacteristic"/>
        <ns4:element name="otherCharacteristics">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="shelfLifeStorage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ProductShelfLife"/>
        </ns4:element>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FinancialResourceStatusCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Action2" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestReport.Operation"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Invoice.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Action1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestReport.Operation"/>
        <ns4:element name="assert" elementType="FHIR.TestReport.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Total" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Organization" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="alias">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="partOf" elementType="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Organization.Contact"/>
        </ns4:element>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap.Element" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.Target"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.OralDiet" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="schedule">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Timing"/>
        </ns4:element>
        <ns4:element name="nutrient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.Nutrient"/>
        </ns4:element>
        <ns4:element name="texture">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.Texture"/>
        </ns4:element>
        <ns4:element name="fluidConsistencyType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="instruction" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubscriptionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GoalLifecycleStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ObservationDataType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReferenceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EffectEvidenceSynthesis" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="synthesisType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="studyType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="population" elementType="FHIR.Reference"/>
        <ns4:element name="exposure" elementType="FHIR.Reference"/>
        <ns4:element name="exposureAlternative" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.Reference"/>
        <ns4:element name="sampleSize" elementType="FHIR.EffectEvidenceSynthesis.SampleSize"/>
        <ns4:element name="resultsByExposure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EffectEvidenceSynthesis.ResultsByExposure"/>
        </ns4:element>
        <ns4:element name="effectEstimate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EffectEvidenceSynthesis.EffectEstimate"/>
        </ns4:element>
        <ns4:element name="certainty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EffectEvidenceSynthesis.Certainty"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.RelatedAction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actionId" elementType="FHIR.id"/>
        <ns4:element name="relationship" elementType="FHIR.ActionRelationshipType"/>
        <ns4:element name="offset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="repositoryType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="LocationStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.MonitoringProgram" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="name" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceReferenceInformation.Classification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="domain" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="classification" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subtype">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NoteType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VerificationResult.PrimarySource" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="who" elementType="FHIR.Reference"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="communicationMethod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="validationStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="validationDate" elementType="FHIR.dateTime"/>
        <ns4:element name="canPushUpdates" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="pushTypeAvailable">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Fixture" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="autocreate" elementType="FHIR.boolean"/>
        <ns4:element name="autodelete" elementType="FHIR.boolean"/>
        <ns4:element name="resource" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Observation.Component" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="dataAbsentReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="interpretation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="referenceRange">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Observation.ReferenceRange"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Software" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="releaseDate" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ChargeItem.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReportStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystemContentMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageHeader.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="software" elementType="FHIR.string"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="contact" elementType="FHIR.ContactPoint"/>
        <ns4:element name="endpoint" elementType="FHIR.url"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RiskAssessment" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn" elementType="FHIR.Reference"/>
        <ns4:element name="parent" elementType="FHIR.Reference"/>
        <ns4:element name="status" elementType="FHIR.ObservationStatus"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="condition" elementType="FHIR.Reference"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="prediction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RiskAssessment.Prediction"/>
        </ns4:element>
        <ns4:element name="mitigation" elementType="FHIR.string"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="use" elementType="FHIR.Use"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="billablePeriod" elementType="FHIR.Period"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="enterer" elementType="FHIR.Reference"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="fundsReserve" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="related">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Related"/>
        </ns4:element>
        <ns4:element name="prescription" elementType="FHIR.Reference"/>
        <ns4:element name="originalPrescription" elementType="FHIR.Reference"/>
        <ns4:element name="payee" elementType="FHIR.Claim.Payee"/>
        <ns4:element name="referral" elementType="FHIR.Reference"/>
        <ns4:element name="facility" elementType="FHIR.Reference"/>
        <ns4:element name="careTeam">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.CareTeam"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.SupportingInfo"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Diagnosis"/>
        </ns4:element>
        <ns4:element name="procedure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Procedure"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Insurance"/>
        </ns4:element>
        <ns4:element name="accident" elementType="FHIR.Claim.Accident"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Item"/>
        </ns4:element>
        <ns4:element name="total" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductPackaged" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="legalStatusOfSupply" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="marketingStatus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MarketingStatus"/>
        </ns4:element>
        <ns4:element name="marketingAuthorization" elementType="FHIR.Reference"/>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="batchIdentifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPackaged.BatchIdentifier"/>
        </ns4:element>
        <ns4:element name="packageItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPackaged.PackageItem"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationDefinition.Binding" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="strength" elementType="FHIR.BindingStrength"/>
        <ns4:element name="valueSet" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIRDeviceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="measure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="due" elementType="FHIR.Duration"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContactPointSystem" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Global" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.code"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SlotStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PractitionerRole.NotAvailable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="during" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RiskEvidenceSynthesis.CertaintySubcomponent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="rating">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="kind" elementType="FHIR.CapabilityStatementKind"/>
        <ns4:element name="software" elementType="FHIR.TerminologyCapabilities.Software"/>
        <ns4:element name="implementation" elementType="FHIR.TerminologyCapabilities.Implementation"/>
        <ns4:element name="lockedDate" elementType="FHIR.boolean"/>
        <ns4:element name="codeSystem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TerminologyCapabilities.CodeSystem"/>
        </ns4:element>
        <ns4:element name="expansion" elementType="FHIR.TerminologyCapabilities.Expansion"/>
        <ns4:element name="codeSearch" elementType="FHIR.CodeSearchSupport"/>
        <ns4:element name="validateCode" elementType="FHIR.TerminologyCapabilities.ValidateCode"/>
        <ns4:element name="translation" elementType="FHIR.TerminologyCapabilities.Translation"/>
        <ns4:element name="closure" elementType="FHIR.TerminologyCapabilities.Closure"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HealthcareService" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="providedBy" elementType="FHIR.Reference"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="extraDetails" elementType="FHIR.markdown"/>
        <ns4:element name="photo" elementType="FHIR.Attachment"/>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="coverageArea">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="serviceProvisionCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="eligibility">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HealthcareService.Eligibility"/>
        </ns4:element>
        <ns4:element name="program">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="characteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="communication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="referralMethod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="appointmentRequired" elementType="FHIR.boolean"/>
        <ns4:element name="availableTime">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HealthcareService.AvailableTime"/>
        </ns4:element>
        <ns4:element name="notAvailable">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HealthcareService.NotAvailable"/>
        </ns4:element>
        <ns4:element name="availabilityExceptions" elementType="FHIR.string"/>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Condition" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="clinicalStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="verificationStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="severity" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="bodySite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="onset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="abatement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recordedDate" elementType="FHIR.dateTime"/>
        <ns4:element name="recorder" elementType="FHIR.Reference"/>
        <ns4:element name="asserter" elementType="FHIR.Reference"/>
        <ns4:element name="stage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Condition.Stage"/>
        </ns4:element>
        <ns4:element name="evidence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Condition.Evidence"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle.Search" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.SearchEntryMode"/>
        <ns4:element name="score" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ObservationDefinition.QuantitativeDetails" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="customaryUnit" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unit" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="conversionFactor" elementType="FHIR.decimal"/>
        <ns4:element name="decimalPrecision" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PropertyType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Type" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.uri"/>
        <ns4:element name="profile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="targetProfile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="aggregation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AggregationMode"/>
        </ns4:element>
        <ns4:element name="versioning" elementType="FHIR.ReferenceVersionRules"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RelatedPerson.Communication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="preferred" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TypeDerivationRule" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Subscription.Channel" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.SubscriptionChannelType"/>
        <ns4:element name="endpoint" elementType="FHIR.url"/>
        <ns4:element name="payload" elementType="FHIR.code"/>
        <ns4:element name="header">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Goal" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="lifecycleStatus" elementType="FHIR.GoalLifecycleStatus"/>
        <ns4:element name="achievementStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="start">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Goal.Target"/>
        </ns4:element>
        <ns4:element name="statusDate" elementType="FHIR.date"/>
        <ns4:element name="statusReason" elementType="FHIR.string"/>
        <ns4:element name="expressedBy" elementType="FHIR.Reference"/>
        <ns4:element name="addresses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="outcomeCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="outcomeReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification.Representation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="representation" elementType="FHIR.string"/>
        <ns4:element name="attachment" elementType="FHIR.Attachment"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExampleScenario.Actor" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actorId" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.ExampleScenarioActorType"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GuidanceResponseStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationDefinition.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.code"/>
        <ns4:element name="use" elementType="FHIR.OperationParameterUse"/>
        <ns4:element name="min" elementType="FHIR.integer"/>
        <ns4:element name="max" elementType="FHIR.string"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.code"/>
        <ns4:element name="targetProfile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="searchType" elementType="FHIR.SearchParamType"/>
        <ns4:element name="binding" elementType="FHIR.OperationDefinition.Binding"/>
        <ns4:element name="referencedFrom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationDefinition.ReferencedFrom"/>
        </ns4:element>
        <ns4:element name="part">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationDefinition.Parameter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="context" elementType="FHIR.id"/>
        <ns4:element name="contextType" elementType="FHIR.StructureMapContextType"/>
        <ns4:element name="element" elementType="FHIR.string"/>
        <ns4:element name="variable" elementType="FHIR.id"/>
        <ns4:element name="listMode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMapTargetListMode"/>
        </ns4:element>
        <ns4:element name="listRuleId" elementType="FHIR.id"/>
        <ns4:element name="transform" elementType="FHIR.StructureMapTransform"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.StructureMap.Parameter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities.Filter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="op">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RelatedArtifactType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="focal" elementType="FHIR.boolean"/>
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="businessArrangement" elementType="FHIR.string"/>
        <ns4:element name="claimResponse" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestReport.Operation"/>
        <ns4:element name="assert" elementType="FHIR.TestReport.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Resource1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="reference" elementType="FHIR.Reference"/>
        <ns4:element name="example">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="relativePath" elementType="FHIR.url"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="oid" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchElementDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="shortTitle" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="comment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.ResearchElementType"/>
        <ns4:element name="variableType" elementType="FHIR.VariableType"/>
        <ns4:element name="characteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResearchElementDefinition.Characteristic"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VerificationResult.Validator" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="organization" elementType="FHIR.Reference"/>
        <ns4:element name="identityCertificate" elementType="FHIR.string"/>
        <ns4:element name="attestationSignature" elementType="FHIR.Signature"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExampleScenario.Step" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="process">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Process"/>
        </ns4:element>
        <ns4:element name="pause" elementType="FHIR.boolean"/>
        <ns4:element name="operation" elementType="FHIR.ExampleScenario.Operation"/>
        <ns4:element name="alternative">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Alternative"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceDefinition.Specialization" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="systemType" elementType="FHIR.string"/>
        <ns4:element name="version" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentManifest.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="ref" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Composition.Event" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Quantity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="FHIR.decimal"/>
        <ns4:element name="comparator" elementType="FHIR.QuantityComparator"/>
        <ns4:element name="unit" elementType="FHIR.string"/>
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="code" elementType="FHIR.code"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CompartmentType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem.Designation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" elementType="FHIR.code"/>
        <ns4:element name="use" elementType="FHIR.Coding"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequestIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InvoicePriceComponentType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetricCalibrationState" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GroupType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DataRequirement" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" elementType="FHIR.code"/>
        <ns4:element name="profile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="mustSupport">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="codeFilter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement.CodeFilter"/>
        </ns4:element>
        <ns4:element name="dateFilter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement.DateFilter"/>
        </ns4:element>
        <ns4:element name="limit" elementType="FHIR.positiveInt"/>
        <ns4:element name="sort">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement.Sort"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VisionPrescription.LensSpecification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="product" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="eye" elementType="FHIR.VisionEyes"/>
        <ns4:element name="sphere" elementType="FHIR.decimal"/>
        <ns4:element name="cylinder" elementType="FHIR.decimal"/>
        <ns4:element name="axis" elementType="FHIR.integer"/>
        <ns4:element name="prism">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.VisionPrescription.Prism"/>
        </ns4:element>
        <ns4:element name="add" elementType="FHIR.decimal"/>
        <ns4:element name="power" elementType="FHIR.decimal"/>
        <ns4:element name="backCurve" elementType="FHIR.decimal"/>
        <ns4:element name="diameter" elementType="FHIR.decimal"/>
        <ns4:element name="duration" elementType="FHIR.Quantity"/>
        <ns4:element name="color" elementType="FHIR.string"/>
        <ns4:element name="brand" elementType="FHIR.string"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Population"/>
        </ns4:element>
        <ns4:element name="stratifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Stratifier"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="goal">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Goal"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MolecularSequence.Variant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="start" elementType="FHIR.integer"/>
        <ns4:element name="end" elementType="FHIR.integer"/>
        <ns4:element name="observedAllele" elementType="FHIR.string"/>
        <ns4:element name="referenceAllele" elementType="FHIR.string"/>
        <ns4:element name="cigar" elementType="FHIR.string"/>
        <ns4:element name="variantPointer" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.SupportingInfo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="reason" elementType="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstancePolymer.RepeatUnit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="orientationOfPolymerisation" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="repeatUnit" elementType="FHIR.string"/>
        <ns4:element name="amount" elementType="FHIR.SubstanceAmount"/>
        <ns4:element name="degreeOfPolymerisation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.DegreeOfPolymerisation"/>
        </ns4:element>
        <ns4:element name="structuralRepresentation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.StructuralRepresentation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Medication.Batch" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="lotNumber" elementType="FHIR.string"/>
        <ns4:element name="expirationDate" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Base" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="min" elementType="FHIR.unsignedInt"/>
        <ns4:element name="max" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.BundleType"/>
        <ns4:element name="timestamp" elementType="FHIR.instant"/>
        <ns4:element name="total" elementType="FHIR.unsignedInt"/>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Bundle.Link"/>
        </ns4:element>
        <ns4:element name="entry">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Bundle.Entry"/>
        </ns4:element>
        <ns4:element name="signature" elementType="FHIR.Signature"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EnableWhenBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.Hospitalization" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="preAdmissionIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="origin" elementType="FHIR.Reference"/>
        <ns4:element name="admitSource" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reAdmission" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="dietPreference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialCourtesy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialArrangement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="destination" elementType="FHIR.Reference"/>
        <ns4:element name="dischargeDisposition" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductIngredient.SpecifiedSubstance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="group" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="confidentiality" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="strength">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductIngredient.Strength"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TaskIntent" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationEvaluationStatusCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NamingSystem.UniqueId" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.NamingSystemIdentifierType"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="preferred" elementType="FHIR.boolean"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="date" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Date"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExampleScenarioActorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProduct.SpecialDesignation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intendedUse" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="indication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="species" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CatalogEntry" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="orderable" elementType="FHIR.boolean"/>
        <ns4:element name="referencedItem" elementType="FHIR.Reference"/>
        <ns4:element name="additionalIdentifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="classification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="validityPeriod" elementType="FHIR.Period"/>
        <ns4:element name="validTo" elementType="FHIR.dateTime"/>
        <ns4:element name="lastUpdated" elementType="FHIR.dateTime"/>
        <ns4:element name="additionalCharacteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="additionalClassification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="relatedEntry">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CatalogEntry.RelatedEntry"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InsurancePlan.SpecificCost" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="benefit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Benefit1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationAdministration.Dosage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="site" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="route" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="dose" elementType="FHIR.Quantity"/>
        <ns4:element name="rate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClinicalImpression.Finding" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="itemCodeableConcept" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="itemReference" elementType="FHIR.Reference"/>
        <ns4:element name="basis" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.Monograph" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProduct.ManufacturingBusinessOperation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operationType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="authorisationReferenceNumber" elementType="FHIR.Identifier"/>
        <ns4:element name="effectiveDate" elementType="FHIR.dateTime"/>
        <ns4:element name="confidentialityIndicator" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="regulator" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="origin">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Origin"/>
        </ns4:element>
        <ns4:element name="destination">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Destination"/>
        </ns4:element>
        <ns4:element name="metadata" elementType="FHIR.TestScript.Metadata"/>
        <ns4:element name="fixture">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Fixture"/>
        </ns4:element>
        <ns4:element name="profile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="variable">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Variable"/>
        </ns4:element>
        <ns4:element name="setup" elementType="FHIR.TestScript.Setup"/>
        <ns4:element name="test">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Test"/>
        </ns4:element>
        <ns4:element name="teardown" elementType="FHIR.TestScript.Teardown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BiologicallyDerivedProduct.Manipulation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="time">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ProductShelfLife" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="period" elementType="FHIR.Quantity"/>
        <ns4:element name="specialPrecautionsForStorage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Attachment" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="contentType" elementType="FHIR.code"/>
        <ns4:element name="language" elementType="FHIR.code"/>
        <ns4:element name="data" elementType="FHIR.base64Binary"/>
        <ns4:element name="url" elementType="FHIR.url"/>
        <ns4:element name="size" elementType="FHIR.unsignedInt"/>
        <ns4:element name="hash" elementType="FHIR.base64Binary"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="creation" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ProvenanceEntityRole" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestGroup.Condition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="kind" elementType="FHIR.ActionConditionKind"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="language" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="subDetailSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchElementDefinition.Characteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="definition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="usageContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="exclude" elementType="FHIR.boolean"/>
        <ns4:element name="unitOfMeasure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="studyEffectiveDescription" elementType="FHIR.string"/>
        <ns4:element name="studyEffective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="studyEffectiveTimeFromStart" elementType="FHIR.Duration"/>
        <ns4:element name="studyEffectiveGroupMeasure" elementType="FHIR.GroupMeasure"/>
        <ns4:element name="participantEffectiveDescription" elementType="FHIR.string"/>
        <ns4:element name="participantEffective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="participantEffectiveTimeFromStart" elementType="FHIR.Duration"/>
        <ns4:element name="participantEffectiveGroupMeasure" elementType="FHIR.GroupMeasure"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SpecimenStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EventDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="trigger">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TriggerDefinition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="udiDeviceIdentifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.UdiDeviceIdentifier"/>
        </ns4:element>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="deviceName">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.DeviceName"/>
        </ns4:element>
        <ns4:element name="modelNumber" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="specialization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.Specialization"/>
        </ns4:element>
        <ns4:element name="version">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="safety">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="shelfLifeStorage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ProductShelfLife"/>
        </ns4:element>
        <ns4:element name="physicalCharacteristics" elementType="FHIR.ProdCharacteristic"/>
        <ns4:element name="languageCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="capability">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.Capability"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.Property"/>
        </ns4:element>
        <ns4:element name="owner" elementType="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="onlineInformation" elementType="FHIR.uri"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="parentDevice" elementType="FHIR.Reference"/>
        <ns4:element name="material">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceDefinition.Material"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RestfulCapabilityMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Dosage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.integer"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="additionalInstruction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="patientInstruction" elementType="FHIR.string"/>
        <ns4:element name="timing" elementType="FHIR.Timing"/>
        <ns4:element name="asNeeded">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="site" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="route" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="doseAndRate">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage.DoseAndRate"/>
        </ns4:element>
        <ns4:element name="maxDosePerPeriod" elementType="FHIR.Ratio"/>
        <ns4:element name="maxDosePerAdministration" elementType="FHIR.Quantity"/>
        <ns4:element name="maxDosePerLifetime" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure.Stratifier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="criteria" elementType="FHIR.Expression"/>
        <ns4:element name="component">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Component"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DetectedIssueSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductPharmaceutical.TargetSpecies" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="withdrawalPeriod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPharmaceutical.WithdrawalPeriod"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.SubDetail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification.Relationship" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="substance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="relationship" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="isDefining" elementType="FHIR.boolean"/>
        <ns4:element name="amount">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="amountRatioLowLimit" elementType="FHIR.Ratio"/>
        <ns4:element name="amountType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Appointment" retrievable="true" primaryCodePath="serviceType" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.AppointmentStatus"/>
        <ns4:element name="cancelationReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="serviceCategory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviceType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="appointmentType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.unsignedInt"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="supportingInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="start" elementType="FHIR.instant"/>
        <ns4:element name="end" elementType="FHIR.instant"/>
        <ns4:element name="minutesDuration" elementType="FHIR.positiveInt"/>
        <ns4:element name="slot">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="patientInstruction" elementType="FHIR.string"/>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Appointment.Participant"/>
        </ns4:element>
        <ns4:element name="requestedPeriod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Period"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Assert" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="label" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="direction" elementType="FHIR.AssertionDirectionType"/>
        <ns4:element name="compareToSourceId" elementType="FHIR.string"/>
        <ns4:element name="compareToSourceExpression" elementType="FHIR.string"/>
        <ns4:element name="compareToSourcePath" elementType="FHIR.string"/>
        <ns4:element name="contentType" elementType="FHIR.code"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="headerField" elementType="FHIR.string"/>
        <ns4:element name="minimumId" elementType="FHIR.string"/>
        <ns4:element name="navigationLinks" elementType="FHIR.boolean"/>
        <ns4:element name="operator" elementType="FHIR.AssertionOperatorType"/>
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="requestMethod" elementType="FHIR.TestScriptRequestMethodCode"/>
        <ns4:element name="requestURL" elementType="FHIR.string"/>
        <ns4:element name="resource" elementType="FHIR.code"/>
        <ns4:element name="response" elementType="FHIR.AssertionResponseTypes"/>
        <ns4:element name="responseCode" elementType="FHIR.string"/>
        <ns4:element name="sourceId" elementType="FHIR.id"/>
        <ns4:element name="validateProfileId" elementType="FHIR.id"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="warningOnly" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.ValuedItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="entity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="effectiveTime" elementType="FHIR.dateTime"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="points" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="payment" elementType="FHIR.string"/>
        <ns4:element name="paymentDate" elementType="FHIR.dateTime"/>
        <ns4:element name="responsible" elementType="FHIR.Reference"/>
        <ns4:element name="recipient" elementType="FHIR.Reference"/>
        <ns4:element name="linkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="securityLabelNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.unsignedInt"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VisionEyes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConsentDataMeaning" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="messageheaderResponseRequest" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Device" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definition" elementType="FHIR.Reference"/>
        <ns4:element name="udiCarrier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Device.UdiCarrier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FHIRDeviceStatus"/>
        <ns4:element name="statusReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="distinctIdentifier" elementType="FHIR.string"/>
        <ns4:element name="manufacturer" elementType="FHIR.string"/>
        <ns4:element name="manufactureDate" elementType="FHIR.dateTime"/>
        <ns4:element name="expirationDate" elementType="FHIR.dateTime"/>
        <ns4:element name="lotNumber" elementType="FHIR.string"/>
        <ns4:element name="serialNumber" elementType="FHIR.string"/>
        <ns4:element name="deviceName">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Device.DeviceName"/>
        </ns4:element>
        <ns4:element name="modelNumber" elementType="FHIR.string"/>
        <ns4:element name="partNumber" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="specialization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Device.Specialization"/>
        </ns4:element>
        <ns4:element name="version">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Device.Version"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Device.Property"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="owner" elementType="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="safety">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="parent" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Capability" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="required" elementType="FHIR.boolean"/>
        <ns4:element name="validated" elementType="FHIR.boolean"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="origin">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="destination" elementType="FHIR.integer"/>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="capabilities" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Implementation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="url" elementType="FHIR.url"/>
        <ns4:element name="custodian" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductPackaged.BatchIdentifier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="outerPackaging" elementType="FHIR.Identifier"/>
        <ns4:element name="immediatePackaging" elementType="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GuidePageGeneration" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Substance.Ingredient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" elementType="FHIR.Ratio"/>
        <ns4:element name="substance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinition.Context" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ExtensionContextType"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Procedure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="procedure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities.Implementation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="url" elementType="FHIR.url"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.SecurityLabel" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.unsignedInt"/>
        </ns4:element>
        <ns4:element name="classification" elementType="FHIR.Coding"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="control">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification.Moiety" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="stereochemistry" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="opticalActivity" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="molecularFormula" elementType="FHIR.string"/>
        <ns4:element name="amount">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Constraint" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="key" elementType="FHIR.id"/>
        <ns4:element name="requirements" elementType="FHIR.string"/>
        <ns4:element name="severity" elementType="FHIR.ConstraintSeverity"/>
        <ns4:element name="human" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="xpath" elementType="FHIR.string"/>
        <ns4:element name="source" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentRelationshipType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BiologicallyDerivedProduct" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="productCategory" elementType="FHIR.BiologicallyDerivedProductCategory"/>
        <ns4:element name="productCode" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.BiologicallyDerivedProductStatus"/>
        <ns4:element name="request">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.integer"/>
        <ns4:element name="parent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="collection" elementType="FHIR.BiologicallyDerivedProduct.Collection"/>
        <ns4:element name="processing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.BiologicallyDerivedProduct.Processing"/>
        </ns4:element>
        <ns4:element name="manipulation" elementType="FHIR.BiologicallyDerivedProduct.Manipulation"/>
        <ns4:element name="storage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.BiologicallyDerivedProduct.Storage"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Destination" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="index" elementType="FHIR.integer"/>
        <ns4:element name="profile" elementType="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Expression" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.id"/>
        <ns4:element name="language" elementType="FHIR.ExpressionLanguage"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="reference" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InsurancePlan.Cost" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="applicability" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="qualifiers">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="value" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="detailSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceReferenceInformation.GeneElement" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="element" elementType="FHIR.Identifier"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.string"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProduct" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="domain" elementType="FHIR.Coding"/>
        <ns4:element name="combinedPharmaceuticalDoseForm" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="legalStatusOfSupply" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="additionalMonitoringIndicator" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="specialMeasures">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="paediatricUseIndicator" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productClassification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="marketingStatus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MarketingStatus"/>
        </ns4:element>
        <ns4:element name="pharmaceuticalProduct">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="packagedMedicinalProduct">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="attachedDocument">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="masterFile">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="clinicalTrial">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProduct.Name"/>
        </ns4:element>
        <ns4:element name="crossReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="manufacturingBusinessOperation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProduct.ManufacturingBusinessOperation"/>
        </ns4:element>
        <ns4:element name="specialDesignation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProduct.SpecialDesignation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Test" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Action1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.Nutrient" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="modifier" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Age" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Test" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Action1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CareTeam.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="member" elementType="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingStudy.Series" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="uid" elementType="FHIR.id"/>
        <ns4:element name="number" elementType="FHIR.unsignedInt"/>
        <ns4:element name="modality" elementType="FHIR.Coding"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="numberOfInstances" elementType="FHIR.unsignedInt"/>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.Coding"/>
        <ns4:element name="laterality" elementType="FHIR.Coding"/>
        <ns4:element name="specimen">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="started" elementType="FHIR.dateTime"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingStudy.Performer"/>
        </ns4:element>
        <ns4:element name="instance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImagingStudy.Instance"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Composition" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.CompositionStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="confidentiality" elementType="FHIR.vConfidentialityClassification"/>
        <ns4:element name="attester">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Attester"/>
        </ns4:element>
        <ns4:element name="custodian" elementType="FHIR.Reference"/>
        <ns4:element name="relatesTo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.RelatesTo"/>
        </ns4:element>
        <ns4:element name="event">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Event"/>
        </ns4:element>
        <ns4:element name="section">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Section"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductPharmaceutical.RouteOfAdministration" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="firstDose" elementType="FHIR.Quantity"/>
        <ns4:element name="maxSingleDose" elementType="FHIR.Quantity"/>
        <ns4:element name="maxDosePerDay" elementType="FHIR.Quantity"/>
        <ns4:element name="maxDosePerTreatmentPeriod" elementType="FHIR.Ratio"/>
        <ns4:element name="maxTreatmentPeriod" elementType="FHIR.Duration"/>
        <ns4:element name="targetSpecies">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPharmaceutical.TargetSpecies"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSourceMaterial.OrganismGeneral" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="kingdom" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="phylum" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="class" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="order" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationRecommendation.DateCriterion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.Dosage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="dosage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VariableType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Endpoint" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="connectionType">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EndpointStatus"/>
        <ns4:element name="connectionType" elementType="FHIR.Coding"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="managingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="payloadType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="payloadMimeType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="address" elementType="FHIR.url"/>
        <ns4:element name="header">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="kind" elementType="FHIR.CapabilityStatementKind"/>
        <ns4:element name="instantiates">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="imports">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="software" elementType="FHIR.CapabilityStatement.Software"/>
        <ns4:element name="implementation" elementType="FHIR.CapabilityStatement.Implementation"/>
        <ns4:element name="fhirVersion" elementType="FHIR.FHIRVersion"/>
        <ns4:element name="format">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="patchFormat">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="implementationGuide">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="rest">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Rest"/>
        </ns4:element>
        <ns4:element name="messaging">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Messaging"/>
        </ns4:element>
        <ns4:element name="document">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Document"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReportResult" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Stratifier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="stratum">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Stratum"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMapGroupUnmappedMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="instant" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.DateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Communication.Payload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActivityDefinition" retrievable="true" primaryCodePath="topic" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="kind" elementType="FHIR.RequestResourceType"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intent" elementType="FHIR.RequestIntent"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ActivityDefinition.Participant"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="dosage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
        <ns4:element name="bodySite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specimenRequirement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="observationRequirement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="observationResultRequirement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="transform" elementType="FHIR.canonical"/>
        <ns4:element name="dynamicValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ActivityDefinition.DynamicValue"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MolecularSequence.Inner" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="start" elementType="FHIR.integer"/>
        <ns4:element name="end" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyRequest.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Related" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="claim" elementType="FHIR.Reference"/>
        <ns4:element name="relationship" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reference" elementType="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Accident" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Questionnaire.Initial" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="positiveInt" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="immutable" elementType="FHIR.boolean"/>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="compose" elementType="FHIR.ValueSet.Compose"/>
        <ns4:element name="expansion" elementType="FHIR.ValueSet.Expansion"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CoverageEligibilityRequest.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="focal" elementType="FHIR.boolean"/>
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="businessArrangement" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Linkage" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Linkage.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EvidenceVariable" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="shortTitle" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.EvidenceVariableType"/>
        <ns4:element name="characteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EvidenceVariable.Characteristic"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Signature" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="when" elementType="FHIR.instant"/>
        <ns4:element name="who" elementType="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" elementType="FHIR.Reference"/>
        <ns4:element name="targetFormat" elementType="FHIR.code"/>
        <ns4:element name="sigFormat" elementType="FHIR.code"/>
        <ns4:element name="data" elementType="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExampleScenario.Alternative" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="step">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Step"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification.Code" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="statusDate" elementType="FHIR.dateTime"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClinicalImpressionStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReference.Context" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="encounter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="event">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="facilityType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="practiceSetting" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="sourcePatientInfo" elementType="FHIR.Reference"/>
        <ns4:element name="related">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Measure" retrievable="true" primaryCodePath="topic" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="library">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="disclaimer" elementType="FHIR.markdown"/>
        <ns4:element name="scoring" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="compositeScoring" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="riskAdjustment" elementType="FHIR.string"/>
        <ns4:element name="rateAggregation" elementType="FHIR.string"/>
        <ns4:element name="rationale" elementType="FHIR.markdown"/>
        <ns4:element name="clinicalRecommendationStatement" elementType="FHIR.markdown"/>
        <ns4:element name="improvementNotation" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="definition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.markdown"/>
        </ns4:element>
        <ns4:element name="guidance" elementType="FHIR.markdown"/>
        <ns4:element name="group">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.Group"/>
        </ns4:element>
        <ns4:element name="supplementalData">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Measure.SupplementalData"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Practitioner.Qualification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="issuer" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EligibilityResponsePurpose" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceDefinition.DeviceName" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.DeviceNameType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Narrative" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="status" elementType="FHIR.NarrativeStatus"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageDefinition.Focus" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
        <ns4:element name="min" elementType="FHIR.unsignedInt"/>
        <ns4:element name="max" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NarrativeStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Friendly" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageDefinition.AllowedResponse" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="message" elementType="FHIR.canonical"/>
        <ns4:element name="situation" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstancePolymer.StructuralRepresentation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="representation" elementType="FHIR.string"/>
        <ns4:element name="attachment" elementType="FHIR.Attachment"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Specimen.Container" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="capacity" elementType="FHIR.Quantity"/>
        <ns4:element name="specimenQuantity" elementType="FHIR.Quantity"/>
        <ns4:element name="additive">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SpecimenDefinition.Handling" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="temperatureQualifier" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="temperatureRange" elementType="FHIR.Range"/>
        <ns4:element name="maxDuration" elementType="FHIR.Duration"/>
        <ns4:element name="instruction" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InsurancePlan.Coverage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="network">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="benefit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Benefit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImagingStudyStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EndpointStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Example" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="label" elementType="FHIR.string"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BiologicallyDerivedProductCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ObservationDefinition.QualifiedInterval" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.ObservationRangeCategory"/>
        <ns4:element name="range" elementType="FHIR.Range"/>
        <ns4:element name="context" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="appliesTo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="age" elementType="FHIR.Range"/>
        <ns4:element name="gestationalAge" elementType="FHIR.Range"/>
        <ns4:element name="condition" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResourceVersionPolicy" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="dateTime" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.DateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Messaging" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.Endpoint"/>
        </ns4:element>
        <ns4:element name="reliableCache" elementType="FHIR.unsignedInt"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
        <ns4:element name="supportedMessage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CapabilityStatement.SupportedMessage"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="caseSensitive" elementType="FHIR.boolean"/>
        <ns4:element name="valueSet" elementType="FHIR.canonical"/>
        <ns4:element name="hierarchyMeaning" elementType="FHIR.CodeSystemHierarchyMeaning"/>
        <ns4:element name="compositional" elementType="FHIR.boolean"/>
        <ns4:element name="versionNeeded" elementType="FHIR.boolean"/>
        <ns4:element name="content" elementType="FHIR.CodeSystemContentMode"/>
        <ns4:element name="supplements" elementType="FHIR.canonical"/>
        <ns4:element name="count" elementType="FHIR.unsignedInt"/>
        <ns4:element name="filter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Filter"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Property"/>
        </ns4:element>
        <ns4:element name="concept">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Concept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Account.Guarantor" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="party" elementType="FHIR.Reference"/>
        <ns4:element name="onHold" elementType="FHIR.boolean"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter.Location" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="status" elementType="FHIR.EncounterLocationStatus"/>
        <ns4:element name="physicalType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionCardinalityBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="careTeamSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="diagnosisSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="procedureSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="informationSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subSite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="encounter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Financial" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="allowed">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="used">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.SupportedMessage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.EventCapabilityMode"/>
        <ns4:element name="definition" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Subscription" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="status" elementType="FHIR.SubscriptionStatus"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="end" elementType="FHIR.instant"/>
        <ns4:element name="reason" elementType="FHIR.string"/>
        <ns4:element name="criteria" elementType="FHIR.string"/>
        <ns4:element name="error" elementType="FHIR.string"/>
        <ns4:element name="channel" elementType="FHIR.Subscription.Channel"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Person" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.HumanName"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="gender" elementType="FHIR.AdministrativeGender"/>
        <ns4:element name="birthDate" elementType="FHIR.date"/>
        <ns4:element name="address">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Address"/>
        </ns4:element>
        <ns4:element name="photo" elementType="FHIR.Attachment"/>
        <ns4:element name="managingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Person.Link"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Duration" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.AdministrationGuidelines" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="dosage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Dosage"/>
        </ns4:element>
        <ns4:element name="indication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="patientCharacteristics">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.PatientCharacteristics"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle.Entry" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Bundle.Link"/>
        </ns4:element>
        <ns4:element name="fullUrl" elementType="FHIR.uri"/>
        <ns4:element name="resource" elementType="FHIR.ResourceContainer"/>
        <ns4:element name="search" elementType="FHIR.Bundle.Search"/>
        <ns4:element name="request" elementType="FHIR.Bundle.Request"/>
        <ns4:element name="response" elementType="FHIR.Bundle.Response"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GroupMeasure" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NamingSystemIdentifierType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ChargeItemDefinition.PriceComponent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.InvoicePriceComponentType"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationStatusCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationDefinition.Overload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="parameterName">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Provision" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ConsentProvisionType"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="actor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Actor"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="securityLabel">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="purpose">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="class">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="dataPeriod" elementType="FHIR.Period"/>
        <ns4:element name="data">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Data"/>
        </ns4:element>
        <ns4:element name="provision">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Provision"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="domain" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="comment" elementType="FHIR.string"/>
        <ns4:element name="moiety">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Moiety"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Property"/>
        </ns4:element>
        <ns4:element name="referenceInformation" elementType="FHIR.Reference"/>
        <ns4:element name="structure" elementType="FHIR.SubstanceSpecification.Structure"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Code"/>
        </ns4:element>
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Name"/>
        </ns4:element>
        <ns4:element name="molecularWeight">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.MolecularWeight"/>
        </ns4:element>
        <ns4:element name="relationship">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Relationship"/>
        </ns4:element>
        <ns4:element name="nucleicAcid" elementType="FHIR.Reference"/>
        <ns4:element name="polymer" elementType="FHIR.Reference"/>
        <ns4:element name="protein" elementType="FHIR.Reference"/>
        <ns4:element name="sourceMaterial" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceDefinition.Capability" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NamingSystem" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="kind" elementType="FHIR.NamingSystemType"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="responsible" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="usage" elementType="FHIR.string"/>
        <ns4:element name="uniqueId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NamingSystem.UniqueId"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="start" elementType="FHIR.code"/>
        <ns4:element name="profile" elementType="FHIR.canonical"/>
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.GraphDefinition.Link"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntolerance.Reaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="substance" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="manifestation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="onset" elementType="FHIR.dateTime"/>
        <ns4:element name="severity" elementType="FHIR.AllergyIntoleranceSeverity"/>
        <ns4:element name="exposureRoute" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.Texture" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="modifier" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="foodType" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Coverage.Class" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RiskEvidenceSynthesis" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="synthesisType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="studyType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="population" elementType="FHIR.Reference"/>
        <ns4:element name="exposure" elementType="FHIR.Reference"/>
        <ns4:element name="outcome" elementType="FHIR.Reference"/>
        <ns4:element name="sampleSize" elementType="FHIR.RiskEvidenceSynthesis.SampleSize"/>
        <ns4:element name="riskEstimate" elementType="FHIR.RiskEvidenceSynthesis.RiskEstimate"/>
        <ns4:element name="certainty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RiskEvidenceSynthesis.Certainty"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Device.UdiCarrier" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="deviceIdentifier" elementType="FHIR.string"/>
        <ns4:element name="issuer" elementType="FHIR.uri"/>
        <ns4:element name="jurisdiction" elementType="FHIR.uri"/>
        <ns4:element name="carrierAIDC" elementType="FHIR.base64Binary"/>
        <ns4:element name="carrierHRF" elementType="FHIR.string"/>
        <ns4:element name="entryType" elementType="FHIR.UDIEntryType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceRequest" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="priorRequest">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.RequestStatus"/>
        <ns4:element name="intent" elementType="FHIR.RequestIntent"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DeviceRequest.Parameter"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="performerType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="relevantHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ServiceRequest" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="requisition" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.RequestStatus"/>
        <ns4:element name="intent" elementType="FHIR.RequestIntent"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="orderDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="asNeeded">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="performerType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="locationCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="locationReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="specimen">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="patientInstruction" elementType="FHIR.string"/>
        <ns4:element name="relevantHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Provenance.Entity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="role" elementType="FHIR.ProvenanceEntityRole"/>
        <ns4:element name="what" elementType="FHIR.Reference"/>
        <ns4:element name="agent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Provenance.Agent"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeableConcept" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="coding">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="text" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceProtein.Subunit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="subunit" elementType="FHIR.integer"/>
        <ns4:element name="sequence" elementType="FHIR.string"/>
        <ns4:element name="length" elementType="FHIR.integer"/>
        <ns4:element name="sequenceAttachment" elementType="FHIR.Attachment"/>
        <ns4:element name="nTerminalModificationId" elementType="FHIR.Identifier"/>
        <ns4:element name="nTerminalModification" elementType="FHIR.string"/>
        <ns4:element name="cTerminalModificationId" elementType="FHIR.Identifier"/>
        <ns4:element name="cTerminalModification" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RiskEvidenceSynthesis.Certainty" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="rating">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="certaintySubcomponent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RiskEvidenceSynthesis.CertaintySubcomponent"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceProtein" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="sequenceType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="numberOfSubunits" elementType="FHIR.integer"/>
        <ns4:element name="disulfideLinkage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="subunit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceProtein.Subunit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AdverseEvent" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="actuality" elementType="FHIR.AdverseEventActuality"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="event" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="detected" elementType="FHIR.dateTime"/>
        <ns4:element name="recordedDate" elementType="FHIR.dateTime"/>
        <ns4:element name="resultingCondition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="seriousness" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="severity" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="outcome" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="recorder" elementType="FHIR.Reference"/>
        <ns4:element name="contributor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="suspectEntity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AdverseEvent.SuspectEntity"/>
        </ns4:element>
        <ns4:element name="subjectMedicalHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="referenceDocument">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="study">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.Condition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="kind" elementType="FHIR.ActionConditionKind"/>
        <ns4:element name="expression" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Appointment.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
        <ns4:element name="required" elementType="FHIR.ParticipantRequired"/>
        <ns4:element name="status" elementType="FHIR.ParticipationStatus"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Expansion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.uri"/>
        <ns4:element name="timestamp" elementType="FHIR.dateTime"/>
        <ns4:element name="total" elementType="FHIR.integer"/>
        <ns4:element name="offset" elementType="FHIR.integer"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Parameter"/>
        </ns4:element>
        <ns4:element name="contains">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Contains"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="target">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="group">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.Group"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationStatusCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DiscriminatorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Setup" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Reference" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="reference" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.uri"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="display" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapInputMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductUndesirableEffect" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="symptomConditionEffect" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="classification" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="frequencyOfOccurrence" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Population"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageHeader" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="event">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="destination">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MessageHeader.Destination"/>
        </ns4:element>
        <ns4:element name="sender" elementType="FHIR.Reference"/>
        <ns4:element name="enterer" elementType="FHIR.Reference"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="source" elementType="FHIR.MessageHeader.Source"/>
        <ns4:element name="responsible" elementType="FHIR.Reference"/>
        <ns4:element name="reason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="response" elementType="FHIR.MessageHeader.Response"/>
        <ns4:element name="focus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="definition" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="LinkageType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ReferenceHandlingPolicy" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Payment" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="adjustment" elementType="FHIR.Money"/>
        <ns4:element name="adjustmentReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="date" elementType="FHIR.date"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Contains" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="abstract" elementType="FHIR.boolean"/>
        <ns4:element name="inactive" elementType="FHIR.boolean"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="designation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Designation"/>
        </ns4:element>
        <ns4:element name="contains">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Contains"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AdverseEvent.Causality" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="assessment" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productRelatedness" elementType="FHIR.string"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchStudyStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Page" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="generation" elementType="FHIR.GuidePageGeneration"/>
        <ns4:element name="page">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Page"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEventOutcome" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReport.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Population"/>
        </ns4:element>
        <ns4:element name="measureScore" elementType="FHIR.Quantity"/>
        <ns4:element name="stratifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MeasureReport.Stratifier"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MolecularSequence.StructureVariant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="variantType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="exact" elementType="FHIR.boolean"/>
        <ns4:element name="length" elementType="FHIR.integer"/>
        <ns4:element name="outer" elementType="FHIR.MolecularSequence.Outer"/>
        <ns4:element name="inner" elementType="FHIR.MolecularSequence.Inner"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Compose" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="lockedDate" elementType="FHIR.date"/>
        <ns4:element name="inactive" elementType="FHIR.boolean"/>
        <ns4:element name="include">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Include"/>
        </ns4:element>
        <ns4:element name="exclude">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Include"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyDelivery.SuppliedItem" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Rule" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SpecimenContainedPreference" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionRelationshipType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConstraintSeverity" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AllergyIntolerance" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="clinicalStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="verificationStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type" elementType="FHIR.AllergyIntoleranceType"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AllergyIntoleranceCategory"/>
        </ns4:element>
        <ns4:element name="criticality" elementType="FHIR.AllergyIntoleranceCriticality"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="onset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="recordedDate" elementType="FHIR.dateTime"/>
        <ns4:element name="recorder" elementType="FHIR.Reference"/>
        <ns4:element name="asserter" elementType="FHIR.Reference"/>
        <ns4:element name="lastOccurrence" elementType="FHIR.dateTime"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="reaction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AllergyIntolerance.Reaction"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Encounter" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EncounterStatus"/>
        <ns4:element name="statusHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.StatusHistory"/>
        </ns4:element>
        <ns4:element name="class" elementType="FHIR.Coding"/>
        <ns4:element name="classHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.ClassHistory"/>
        </ns4:element>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviceType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="episodeOfCare">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.Participant"/>
        </ns4:element>
        <ns4:element name="appointment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="length" elementType="FHIR.Duration"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.Diagnosis"/>
        </ns4:element>
        <ns4:element name="account">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="hospitalization" elementType="FHIR.Encounter.Hospitalization"/>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Encounter.Location"/>
        </ns4:element>
        <ns4:element name="serviceProvider" elementType="FHIR.Reference"/>
        <ns4:element name="partOf" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Procedure.FocalDevice" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="manipulated" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Dependent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.id"/>
        <ns4:element name="variable">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EventCapabilityMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="onAdmission" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="packageCode" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CoverageEligibilityResponse.Benefit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="allowed">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="used">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Timing" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="event">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.dateTime"/>
        </ns4:element>
        <ns4:element name="repeat" elementType="FHIR.Timing.Repeat"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductIngredient" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="allergenicIndicator" elementType="FHIR.boolean"/>
        <ns4:element name="manufacturer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="specifiedSubstance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductIngredient.SpecifiedSubstance"/>
        </ns4:element>
        <ns4:element name="substance" elementType="FHIR.MedicinalProductIngredient.Substance"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Invoice" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.InvoiceStatus"/>
        <ns4:element name="cancelledReason" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="recipient" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Invoice.Participant"/>
        </ns4:element>
        <ns4:element name="issuer" elementType="FHIR.Reference"/>
        <ns4:element name="account" elementType="FHIR.Reference"/>
        <ns4:element name="lineItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Invoice.LineItem"/>
        </ns4:element>
        <ns4:element name="totalPriceComponent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Invoice.PriceComponent"/>
        </ns4:element>
        <ns4:element name="totalNet" elementType="FHIR.Money"/>
        <ns4:element name="totalGross" elementType="FHIR.Money"/>
        <ns4:element name="paymentTerms" elementType="FHIR.markdown"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSearchSupport" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinition.Mapping" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identity" elementType="FHIR.id"/>
        <ns4:element name="uri" elementType="FHIR.uri"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ObservationRangeCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Extension" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Group.Characteristic" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="exclude" elementType="FHIR.boolean"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="UDIEntryType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder.EnteralFormula" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="baseFormulaType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="baseFormulaProductName" elementType="FHIR.string"/>
        <ns4:element name="additiveType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="additiveProductName" elementType="FHIR.string"/>
        <ns4:element name="caloricDensity" elementType="FHIR.Quantity"/>
        <ns4:element name="routeofAdministration" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="administration">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.Administration"/>
        </ns4:element>
        <ns4:element name="maxVolumeToDeliver" elementType="FHIR.Quantity"/>
        <ns4:element name="administrationInstruction" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Composition.Section" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="focus" elementType="FHIR.Reference"/>
        <ns4:element name="text" elementType="FHIR.Narrative"/>
        <ns4:element name="mode" elementType="FHIR.ListMode"/>
        <ns4:element name="orderedBy" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="entry">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="emptyReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="section">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Composition.Section"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetricCategory" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductIndication" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="diseaseSymptomProcedure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="diseaseStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="comorbidity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="intendedEffect" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="duration" elementType="FHIR.Quantity"/>
        <ns4:element name="otherTherapy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductIndication.OtherTherapy"/>
        </ns4:element>
        <ns4:element name="undesirableEffect">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Population"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReportActionResult" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActivityDefinition.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ActionParticipantType"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductPharmaceutical" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="administrableDoseForm" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="unitOfPresentation" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="ingredient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="device">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="characteristics">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPharmaceutical.Characteristics"/>
        </ns4:element>
        <ns4:element name="routeOfAdministration">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductPharmaceutical.RouteOfAdministration"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle.Request" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="method" elementType="FHIR.HTTPVerb"/>
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="ifNoneMatch" elementType="FHIR.string"/>
        <ns4:element name="ifModifiedSince" elementType="FHIR.instant"/>
        <ns4:element name="ifMatch" elementType="FHIR.string"/>
        <ns4:element name="ifNoneExist" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MolecularSequence" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.sequenceType"/>
        <ns4:element name="coordinateSystem" elementType="FHIR.integer"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="specimen" elementType="FHIR.Reference"/>
        <ns4:element name="device" elementType="FHIR.Reference"/>
        <ns4:element name="performer" elementType="FHIR.Reference"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="referenceSeq" elementType="FHIR.MolecularSequence.ReferenceSeq"/>
        <ns4:element name="variant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MolecularSequence.Variant"/>
        </ns4:element>
        <ns4:element name="observedSeq" elementType="FHIR.string"/>
        <ns4:element name="quality">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MolecularSequence.Quality"/>
        </ns4:element>
        <ns4:element name="readCoverage" elementType="FHIR.integer"/>
        <ns4:element name="repository">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MolecularSequence.Repository"/>
        </ns4:element>
        <ns4:element name="pointer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="structureVariant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MolecularSequence.StructureVariant"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatementKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Person.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="target" elementType="FHIR.Reference"/>
        <ns4:element name="assurance" elementType="FHIR.IdentityAssuranceLevel"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="itemSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CarePlan.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="kind" elementType="FHIR.CarePlanActivityKind"/>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="goal">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.CarePlanActivityStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="scheduled">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="dailyAmount" elementType="FHIR.Quantity"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="description" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HealthcareService.Eligibility" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="comment" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EventTiming" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Immunization.ProtocolApplied" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="series" elementType="FHIR.string"/>
        <ns4:element name="authority" elementType="FHIR.Reference"/>
        <ns4:element name="targetDisease">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="doseNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="seriesDoses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSourceMaterial.FractionDescription" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="fraction" elementType="FHIR.string"/>
        <ns4:element name="materialType" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="type">
        <ns4:element name="type" elementType="FHIR.Coding"/>
        <ns4:element name="subtype">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="action" elementType="FHIR.AuditEventAction"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="recorded" elementType="FHIR.instant"/>
        <ns4:element name="outcome" elementType="FHIR.AuditEventOutcome"/>
        <ns4:element name="outcomeDesc" elementType="FHIR.string"/>
        <ns4:element name="purposeOfEvent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="agent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AuditEvent.Agent"/>
        </ns4:element>
        <ns4:element name="source" elementType="FHIR.AuditEvent.Source"/>
        <ns4:element name="entity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AuditEvent.Entity"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.CareTeam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="responsible" elementType="FHIR.boolean"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="qualification" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities.Closure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="translation" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchParamType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionGroupingBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="kind" elementType="FHIR.OperationKind"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="purpose" elementType="FHIR.markdown"/>
        <ns4:element name="affectsState" elementType="FHIR.boolean"/>
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="comment" elementType="FHIR.markdown"/>
        <ns4:element name="base" elementType="FHIR.canonical"/>
        <ns4:element name="resource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.code"/>
        </ns4:element>
        <ns4:element name="system" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.boolean"/>
        <ns4:element name="instance" elementType="FHIR.boolean"/>
        <ns4:element name="inputProfile" elementType="FHIR.canonical"/>
        <ns4:element name="outputProfile" elementType="FHIR.canonical"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationDefinition.Parameter"/>
        </ns4:element>
        <ns4:element name="overload">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.OperationDefinition.Overload"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMapModelMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TaskStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Manifest" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="rendering" elementType="FHIR.url"/>
        <ns4:element name="resource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Resource1"/>
        </ns4:element>
        <ns4:element name="page">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Page1"/>
        </ns4:element>
        <ns4:element name="image">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="other">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="result" elementType="FHIR.TestReportActionResult"/>
        <ns4:element name="message" elementType="FHIR.markdown"/>
        <ns4:element name="detail" elementType="FHIR.uri"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductContraindication" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="disease" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="diseaseStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="comorbidity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="therapeuticIndication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="otherTherapy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductContraindication.OtherTherapy"/>
        </ns4:element>
        <ns4:element name="population">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Population"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Source" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="context" elementType="FHIR.id"/>
        <ns4:element name="min" elementType="FHIR.integer"/>
        <ns4:element name="max" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.string"/>
        <ns4:element name="defaultValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="element" elementType="FHIR.string"/>
        <ns4:element name="listMode" elementType="FHIR.StructureMapSourceListMode"/>
        <ns4:element name="variable" elementType="FHIR.id"/>
        <ns4:element name="condition" elementType="FHIR.string"/>
        <ns4:element name="check" elementType="FHIR.string"/>
        <ns4:element name="logMessage" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.TestReportStatus"/>
        <ns4:element name="testScript" elementType="FHIR.Reference"/>
        <ns4:element name="result" elementType="FHIR.TestReportResult"/>
        <ns4:element name="score" elementType="FHIR.decimal"/>
        <ns4:element name="tester" elementType="FHIR.string"/>
        <ns4:element name="issued" elementType="FHIR.dateTime"/>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Participant"/>
        </ns4:element>
        <ns4:element name="setup" elementType="FHIR.TestReport.Setup"/>
        <ns4:element name="test">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Test"/>
        </ns4:element>
        <ns4:element name="teardown" elementType="FHIR.TestReport.Teardown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap.Group" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="source" elementType="FHIR.uri"/>
        <ns4:element name="sourceVersion" elementType="FHIR.string"/>
        <ns4:element name="target" elementType="FHIR.uri"/>
        <ns4:element name="targetVersion" elementType="FHIR.string"/>
        <ns4:element name="element">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ConceptMap.Element"/>
        </ns4:element>
        <ns4:element name="unmapped" elementType="FHIR.ConceptMap.Unmapped"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OrganizationAffiliation" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="active" elementType="FHIR.boolean"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="organization" elementType="FHIR.Reference"/>
        <ns4:element name="participatingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="network">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="healthcareService">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="endpoint">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEvent.Entity" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="what" elementType="FHIR.Reference"/>
        <ns4:element name="type" elementType="FHIR.Coding"/>
        <ns4:element name="role" elementType="FHIR.Coding"/>
        <ns4:element name="lifecycle" elementType="FHIR.Coding"/>
        <ns4:element name="securityLabel">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coding"/>
        </ns4:element>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="query" elementType="FHIR.base64Binary"/>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.AuditEvent.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Evidence" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="shortTitle" elementType="FHIR.string"/>
        <ns4:element name="subtitle" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="approvalDate" elementType="FHIR.date"/>
        <ns4:element name="lastReviewDate" elementType="FHIR.date"/>
        <ns4:element name="effectivePeriod" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="editor">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="reviewer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="endorser">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="exposureBackground" elementType="FHIR.Reference"/>
        <ns4:element name="exposureVariant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="outcome">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HealthcareService.AvailableTime" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="daysOfWeek">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DaysOfWeek"/>
        </ns4:element>
        <ns4:element name="allDay" elementType="FHIR.boolean"/>
        <ns4:element name="availableStartTime" elementType="FHIR.time"/>
        <ns4:element name="availableEndTime" elementType="FHIR.time"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BiologicallyDerivedProductStorageScale" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GraphCompartmentRule" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchSubject" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ResearchSubjectStatus"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="study" elementType="FHIR.Reference"/>
        <ns4:element name="individual" elementType="FHIR.Reference"/>
        <ns4:element name="assignedArm" elementType="FHIR.string"/>
        <ns4:element name="actualArm" elementType="FHIR.string"/>
        <ns4:element name="consent" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Parameters.Parameter" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="resource" elementType="FHIR.ResourceContainer"/>
        <ns4:element name="part">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Parameters.Parameter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DataRequirement.DateFilter" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="searchParam" elementType="FHIR.string"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Payee" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="party" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Substance" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FHIRSubstanceStatus"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="instance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Substance.Instance"/>
        </ns4:element>
        <ns4:element name="ingredient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Substance.Ingredient"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Legal" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReference.Content" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="attachment" elementType="FHIR.Attachment"/>
        <ns4:element name="format" elementType="FHIR.Coding"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RiskEvidenceSynthesis.SampleSize" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="numberOfStudies" elementType="FHIR.integer"/>
        <ns4:element name="numberOfParticipants" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Teardown" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Action2"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Designation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" elementType="FHIR.code"/>
        <ns4:element name="use" elementType="FHIR.Coding"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImmunizationRecommendation.Recommendation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="vaccineCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="targetDisease" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="contraindicatedVaccineCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="forecastStatus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="forecastReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="dateCriterion">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImmunizationRecommendation.DateCriterion"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="series" elementType="FHIR.string"/>
        <ns4:element name="doseNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="seriesDoses">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="supportingImmunization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingPatientInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceNucleicAcid.Sugar" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="residueSite" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TriggerDefinition" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" elementType="FHIR.TriggerType"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="data">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="condition" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AppointmentResponse" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="appointment" elementType="FHIR.Reference"/>
        <ns4:element name="start" elementType="FHIR.instant"/>
        <ns4:element name="end" elementType="FHIR.instant"/>
        <ns4:element name="participantType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
        <ns4:element name="participantStatus" elementType="FHIR.ParticipationStatus"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SlicingRules" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Interaction1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.SystemRestfulInteraction"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="focal" elementType="FHIR.boolean"/>
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="preAuthRef">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Communication" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="inResponseTo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EventStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="medium">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="topic" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="about">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="sent" elementType="FHIR.dateTime"/>
        <ns4:element name="received" elementType="FHIR.dateTime"/>
        <ns4:element name="recipient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="sender" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="payload">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Communication.Payload"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Term" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="issued" elementType="FHIR.dateTime"/>
        <ns4:element name="applies" elementType="FHIR.Period"/>
        <ns4:element name="topic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="securityLabel">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.SecurityLabel"/>
        </ns4:element>
        <ns4:element name="offer" elementType="FHIR.Contract.Offer"/>
        <ns4:element name="asset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Asset"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Action"/>
        </ns4:element>
        <ns4:element name="group">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Term"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefitStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="GuideParameterCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CatalogEntryRelationType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Coverage.CostToBeneficiary" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="exception">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Coverage.Exception"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="LinkType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.ContentDefinition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="publisher" elementType="FHIR.Reference"/>
        <ns4:element name="publicationDate" elementType="FHIR.dateTime"/>
        <ns4:element name="publicationStatus" elementType="FHIR.ContractResourcePublicationStatusCodes"/>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EventStatus"/>
        <ns4:element name="scope" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="dateTime" elementType="FHIR.dateTime"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="organization">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="policy">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Policy"/>
        </ns4:element>
        <ns4:element name="policyRule" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="verification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Consent.Verification"/>
        </ns4:element>
        <ns4:element name="provision" elementType="FHIR.Consent.Provision"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMapEquivalence" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEventAction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetric.Calibration" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.DeviceMetricCalibrationType"/>
        <ns4:element name="state" elementType="FHIR.DeviceMetricCalibrationState"/>
        <ns4:element name="time" elementType="FHIR.instant"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Detail1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.SubDetail1"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductIngredient.ReferenceStrength" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="substance" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="strength" elementType="FHIR.Ratio"/>
        <ns4:element name="strengthLowLimit" elementType="FHIR.Ratio"/>
        <ns4:element name="measurementPoint" elementType="FHIR.string"/>
        <ns4:element name="country">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentManifest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="masterIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.DocumentReferenceStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="recipient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="source" elementType="FHIR.uri"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="related">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DocumentManifest.Related"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.Operation" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.canonical"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Observation" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ObservationStatus"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="focus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="issued" elementType="FHIR.instant"/>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="dataAbsentReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="interpretation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="specimen" elementType="FHIR.Reference"/>
        <ns4:element name="device" elementType="FHIR.Reference"/>
        <ns4:element name="referenceRange">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Observation.ReferenceRange"/>
        </ns4:element>
        <ns4:element name="hasMember">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="derivedFrom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="component">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Observation.Component"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchModifierCode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConceptMap.Unmapped" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="mode" elementType="FHIR.ConceptMapGroupUnmappedMode"/>
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="url" elementType="FHIR.canonical"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Annotation" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="time" elementType="FHIR.dateTime"/>
        <ns4:element name="text" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceNucleicAcid" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="sequenceType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="numberOfSubunits" elementType="FHIR.integer"/>
        <ns4:element name="areaOfHybridisation" elementType="FHIR.string"/>
        <ns4:element name="oligoNucleotideType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subunit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceNucleicAcid.Subunit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EventStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.Schedule" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="schedule" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="OperationParameterUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.SupportingInfo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="reason" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ConsentProvisionType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ValueSet.Include" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="concept">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Concept"/>
        </ns4:element>
        <ns4:element name="filter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ValueSet.Filter"/>
        </ns4:element>
        <ns4:element name="valueSet">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EffectEvidenceSynthesis.CertaintySubcomponent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="rating">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DataRequirement.Sort" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="direction" elementType="FHIR.SortDirection"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductPharmaceutical.WithdrawalPeriod" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="tissue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value" elementType="FHIR.Quantity"/>
        <ns4:element name="supportingInformation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MolecularSequence.Repository" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.repositoryType"/>
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="datasetId" elementType="FHIR.string"/>
        <ns4:element name="variantsetId" elementType="FHIR.string"/>
        <ns4:element name="readsetId" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionConditionKind" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.Substitution" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="allowed" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="qualityType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ChargeItemDefinition.PropertyGroup" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="applicability">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ChargeItemDefinition.Applicability"/>
        </ns4:element>
        <ns4:element name="priceComponent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ChargeItemDefinition.PriceComponent"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AdministrativeGender" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Slot" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="serviceCategory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviceType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="specialty">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="appointmentType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="schedule" elementType="FHIR.Reference"/>
        <ns4:element name="status" elementType="FHIR.SlotStatus"/>
        <ns4:element name="start" elementType="FHIR.instant"/>
        <ns4:element name="end" elementType="FHIR.instant"/>
        <ns4:element name="overbooked" elementType="FHIR.boolean"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities.Expansion" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="hierarchical" elementType="FHIR.boolean"/>
        <ns4:element name="paging" elementType="FHIR.boolean"/>
        <ns4:element name="incomplete" elementType="FHIR.boolean"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TerminologyCapabilities.Parameter"/>
        </ns4:element>
        <ns4:element name="textFilter" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductIngredient.Substance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="strength">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductIngredient.Strength"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contributor" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="type" elementType="FHIR.ContributorType"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Observation.ReferenceRange" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="low" elementType="FHIR.Quantity"/>
        <ns4:element name="high" elementType="FHIR.Quantity"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="appliesTo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="age" elementType="FHIR.Range"/>
        <ns4:element name="text" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ChargeItemDefinition.Applicability" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="language" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResourceContainer" retrievable="false" baseType="System.Any">
        <ns4:element name="Account" elementType="FHIR.Account"/>
        <ns4:element name="ActivityDefinition" elementType="FHIR.ActivityDefinition"/>
        <ns4:element name="AdverseEvent" elementType="FHIR.AdverseEvent"/>
        <ns4:element name="AllergyIntolerance" elementType="FHIR.AllergyIntolerance"/>
        <ns4:element name="Appointment" elementType="FHIR.Appointment"/>
        <ns4:element name="AppointmentResponse" elementType="FHIR.AppointmentResponse"/>
        <ns4:element name="AuditEvent" elementType="FHIR.AuditEvent"/>
        <ns4:element name="Basic" elementType="FHIR.Basic"/>
        <ns4:element name="Binary" elementType="FHIR.Binary"/>
        <ns4:element name="BiologicallyDerivedProduct" elementType="FHIR.BiologicallyDerivedProduct"/>
        <ns4:element name="BodyStructure" elementType="FHIR.BodyStructure"/>
        <ns4:element name="Bundle" elementType="FHIR.Bundle"/>
        <ns4:element name="CapabilityStatement" elementType="FHIR.CapabilityStatement"/>
        <ns4:element name="CarePlan" elementType="FHIR.CarePlan"/>
        <ns4:element name="CareTeam" elementType="FHIR.CareTeam"/>
        <ns4:element name="CatalogEntry" elementType="FHIR.CatalogEntry"/>
        <ns4:element name="ChargeItem" elementType="FHIR.ChargeItem"/>
        <ns4:element name="ChargeItemDefinition" elementType="FHIR.ChargeItemDefinition"/>
        <ns4:element name="Claim" elementType="FHIR.Claim"/>
        <ns4:element name="ClaimResponse" elementType="FHIR.ClaimResponse"/>
        <ns4:element name="ClinicalImpression" elementType="FHIR.ClinicalImpression"/>
        <ns4:element name="CodeSystem" elementType="FHIR.CodeSystem"/>
        <ns4:element name="Communication" elementType="FHIR.Communication"/>
        <ns4:element name="CommunicationRequest" elementType="FHIR.CommunicationRequest"/>
        <ns4:element name="CompartmentDefinition" elementType="FHIR.CompartmentDefinition"/>
        <ns4:element name="Composition" elementType="FHIR.Composition"/>
        <ns4:element name="ConceptMap" elementType="FHIR.ConceptMap"/>
        <ns4:element name="Condition" elementType="FHIR.Condition"/>
        <ns4:element name="Consent" elementType="FHIR.Consent"/>
        <ns4:element name="Contract" elementType="FHIR.Contract"/>
        <ns4:element name="Coverage" elementType="FHIR.Coverage"/>
        <ns4:element name="CoverageEligibilityRequest" elementType="FHIR.CoverageEligibilityRequest"/>
        <ns4:element name="CoverageEligibilityResponse" elementType="FHIR.CoverageEligibilityResponse"/>
        <ns4:element name="DetectedIssue" elementType="FHIR.DetectedIssue"/>
        <ns4:element name="Device" elementType="FHIR.Device"/>
        <ns4:element name="DeviceDefinition" elementType="FHIR.DeviceDefinition"/>
        <ns4:element name="DeviceMetric" elementType="FHIR.DeviceMetric"/>
        <ns4:element name="DeviceRequest" elementType="FHIR.DeviceRequest"/>
        <ns4:element name="DeviceUseStatement" elementType="FHIR.DeviceUseStatement"/>
        <ns4:element name="DiagnosticReport" elementType="FHIR.DiagnosticReport"/>
        <ns4:element name="DocumentManifest" elementType="FHIR.DocumentManifest"/>
        <ns4:element name="DocumentReference" elementType="FHIR.DocumentReference"/>
        <ns4:element name="EffectEvidenceSynthesis" elementType="FHIR.EffectEvidenceSynthesis"/>
        <ns4:element name="Encounter" elementType="FHIR.Encounter"/>
        <ns4:element name="Endpoint" elementType="FHIR.Endpoint"/>
        <ns4:element name="EnrollmentRequest" elementType="FHIR.EnrollmentRequest"/>
        <ns4:element name="EnrollmentResponse" elementType="FHIR.EnrollmentResponse"/>
        <ns4:element name="EpisodeOfCare" elementType="FHIR.EpisodeOfCare"/>
        <ns4:element name="EventDefinition" elementType="FHIR.EventDefinition"/>
        <ns4:element name="Evidence" elementType="FHIR.Evidence"/>
        <ns4:element name="EvidenceVariable" elementType="FHIR.EvidenceVariable"/>
        <ns4:element name="ExampleScenario" elementType="FHIR.ExampleScenario"/>
        <ns4:element name="ExplanationOfBenefit" elementType="FHIR.ExplanationOfBenefit"/>
        <ns4:element name="FamilyMemberHistory" elementType="FHIR.FamilyMemberHistory"/>
        <ns4:element name="Flag" elementType="FHIR.Flag"/>
        <ns4:element name="Goal" elementType="FHIR.Goal"/>
        <ns4:element name="GraphDefinition" elementType="FHIR.GraphDefinition"/>
        <ns4:element name="Group" elementType="FHIR.Group"/>
        <ns4:element name="GuidanceResponse" elementType="FHIR.GuidanceResponse"/>
        <ns4:element name="HealthcareService" elementType="FHIR.HealthcareService"/>
        <ns4:element name="ImagingStudy" elementType="FHIR.ImagingStudy"/>
        <ns4:element name="Immunization" elementType="FHIR.Immunization"/>
        <ns4:element name="ImmunizationEvaluation" elementType="FHIR.ImmunizationEvaluation"/>
        <ns4:element name="ImmunizationRecommendation" elementType="FHIR.ImmunizationRecommendation"/>
        <ns4:element name="ImplementationGuide" elementType="FHIR.ImplementationGuide"/>
        <ns4:element name="InsurancePlan" elementType="FHIR.InsurancePlan"/>
        <ns4:element name="Invoice" elementType="FHIR.Invoice"/>
        <ns4:element name="ItemInstance" elementType="FHIR.ItemInstance"/>
        <ns4:element name="Library" elementType="FHIR.Library"/>
        <ns4:element name="Linkage" elementType="FHIR.Linkage"/>
        <ns4:element name="List" elementType="FHIR.List"/>
        <ns4:element name="Location" elementType="FHIR.Location"/>
        <ns4:element name="Measure" elementType="FHIR.Measure"/>
        <ns4:element name="MeasureReport" elementType="FHIR.MeasureReport"/>
        <ns4:element name="Media" elementType="FHIR.Media"/>
        <ns4:element name="Medication" elementType="FHIR.Medication"/>
        <ns4:element name="MedicationAdministration" elementType="FHIR.MedicationAdministration"/>
        <ns4:element name="MedicationDispense" elementType="FHIR.MedicationDispense"/>
        <ns4:element name="MedicationKnowledge" elementType="FHIR.MedicationKnowledge"/>
        <ns4:element name="MedicationRequest" elementType="FHIR.MedicationRequest"/>
        <ns4:element name="MedicationStatement" elementType="FHIR.MedicationStatement"/>
        <ns4:element name="MedicinalProduct" elementType="FHIR.MedicinalProduct"/>
        <ns4:element name="MedicinalProductAuthorization" elementType="FHIR.MedicinalProductAuthorization"/>
        <ns4:element name="MedicinalProductContraindication" elementType="FHIR.MedicinalProductContraindication"/>
        <ns4:element name="MedicinalProductIndication" elementType="FHIR.MedicinalProductIndication"/>
        <ns4:element name="MedicinalProductIngredient" elementType="FHIR.MedicinalProductIngredient"/>
        <ns4:element name="MedicinalProductInteraction" elementType="FHIR.MedicinalProductInteraction"/>
        <ns4:element name="MedicinalProductManufactured" elementType="FHIR.MedicinalProductManufactured"/>
        <ns4:element name="MedicinalProductPackaged" elementType="FHIR.MedicinalProductPackaged"/>
        <ns4:element name="MedicinalProductPharmaceutical" elementType="FHIR.MedicinalProductPharmaceutical"/>
        <ns4:element name="MedicinalProductUndesirableEffect" elementType="FHIR.MedicinalProductUndesirableEffect"/>
        <ns4:element name="MessageDefinition" elementType="FHIR.MessageDefinition"/>
        <ns4:element name="MessageHeader" elementType="FHIR.MessageHeader"/>
        <ns4:element name="MolecularSequence" elementType="FHIR.MolecularSequence"/>
        <ns4:element name="NamingSystem" elementType="FHIR.NamingSystem"/>
        <ns4:element name="NutritionOrder" elementType="FHIR.NutritionOrder"/>
        <ns4:element name="Observation" elementType="FHIR.Observation"/>
        <ns4:element name="ObservationDefinition" elementType="FHIR.ObservationDefinition"/>
        <ns4:element name="OperationDefinition" elementType="FHIR.OperationDefinition"/>
        <ns4:element name="OperationOutcome" elementType="FHIR.OperationOutcome"/>
        <ns4:element name="Organization" elementType="FHIR.Organization"/>
        <ns4:element name="OrganizationAffiliation" elementType="FHIR.OrganizationAffiliation"/>
        <ns4:element name="Patient" elementType="FHIR.Patient"/>
        <ns4:element name="PaymentNotice" elementType="FHIR.PaymentNotice"/>
        <ns4:element name="PaymentReconciliation" elementType="FHIR.PaymentReconciliation"/>
        <ns4:element name="Person" elementType="FHIR.Person"/>
        <ns4:element name="PlanDefinition" elementType="FHIR.PlanDefinition"/>
        <ns4:element name="Practitioner" elementType="FHIR.Practitioner"/>
        <ns4:element name="PractitionerRole" elementType="FHIR.PractitionerRole"/>
        <ns4:element name="Procedure" elementType="FHIR.Procedure"/>
        <ns4:element name="Provenance" elementType="FHIR.Provenance"/>
        <ns4:element name="Questionnaire" elementType="FHIR.Questionnaire"/>
        <ns4:element name="QuestionnaireResponse" elementType="FHIR.QuestionnaireResponse"/>
        <ns4:element name="RelatedPerson" elementType="FHIR.RelatedPerson"/>
        <ns4:element name="RequestGroup" elementType="FHIR.RequestGroup"/>
        <ns4:element name="ResearchDefinition" elementType="FHIR.ResearchDefinition"/>
        <ns4:element name="ResearchElementDefinition" elementType="FHIR.ResearchElementDefinition"/>
        <ns4:element name="ResearchStudy" elementType="FHIR.ResearchStudy"/>
        <ns4:element name="ResearchSubject" elementType="FHIR.ResearchSubject"/>
        <ns4:element name="RiskAssessment" elementType="FHIR.RiskAssessment"/>
        <ns4:element name="RiskEvidenceSynthesis" elementType="FHIR.RiskEvidenceSynthesis"/>
        <ns4:element name="Schedule" elementType="FHIR.Schedule"/>
        <ns4:element name="SearchParameter" elementType="FHIR.SearchParameter"/>
        <ns4:element name="ServiceRequest" elementType="FHIR.ServiceRequest"/>
        <ns4:element name="Slot" elementType="FHIR.Slot"/>
        <ns4:element name="Specimen" elementType="FHIR.Specimen"/>
        <ns4:element name="SpecimenDefinition" elementType="FHIR.SpecimenDefinition"/>
        <ns4:element name="StructureDefinition" elementType="FHIR.StructureDefinition"/>
        <ns4:element name="StructureMap" elementType="FHIR.StructureMap"/>
        <ns4:element name="Subscription" elementType="FHIR.Subscription"/>
        <ns4:element name="Substance" elementType="FHIR.Substance"/>
        <ns4:element name="SubstanceNucleicAcid" elementType="FHIR.SubstanceNucleicAcid"/>
        <ns4:element name="SubstancePolymer" elementType="FHIR.SubstancePolymer"/>
        <ns4:element name="SubstanceProtein" elementType="FHIR.SubstanceProtein"/>
        <ns4:element name="SubstanceReferenceInformation" elementType="FHIR.SubstanceReferenceInformation"/>
        <ns4:element name="SubstanceSourceMaterial" elementType="FHIR.SubstanceSourceMaterial"/>
        <ns4:element name="SubstanceSpecification" elementType="FHIR.SubstanceSpecification"/>
        <ns4:element name="SupplyDelivery" elementType="FHIR.SupplyDelivery"/>
        <ns4:element name="SupplyRequest" elementType="FHIR.SupplyRequest"/>
        <ns4:element name="Task" elementType="FHIR.Task"/>
        <ns4:element name="TerminologyCapabilities" elementType="FHIR.TerminologyCapabilities"/>
        <ns4:element name="TestReport" elementType="FHIR.TestReport"/>
        <ns4:element name="TestScript" elementType="FHIR.TestScript"/>
        <ns4:element name="ValueSet" elementType="FHIR.ValueSet"/>
        <ns4:element name="VerificationResult" elementType="FHIR.VerificationResult"/>
        <ns4:element name="VisionPrescription" elementType="FHIR.VisionPrescription"/>
        <ns4:element name="Parameters" elementType="FHIR.Parameters"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Insurance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="focal" elementType="FHIR.boolean"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="coverage" elementType="FHIR.Reference"/>
        <ns4:element name="businessArrangement" elementType="FHIR.string"/>
        <ns4:element name="preAuthRef">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="claimResponse" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireItemType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SpecimenDefinition.Container" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="material" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="cap" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="capacity" elementType="FHIR.Quantity"/>
        <ns4:element name="minimumVolume">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="additive">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SpecimenDefinition.Additive"/>
        </ns4:element>
        <ns4:element name="preparation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Contract.Asset" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="scope" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="typeReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="subtype">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="relationship" elementType="FHIR.Coding"/>
        <ns4:element name="context">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Context"/>
        </ns4:element>
        <ns4:element name="condition" elementType="FHIR.string"/>
        <ns4:element name="periodType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="period">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Period"/>
        </ns4:element>
        <ns4:element name="usePeriod">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Period"/>
        </ns4:element>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="linkId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="answer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.Answer"/>
        </ns4:element>
        <ns4:element name="securityLabelNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.unsignedInt"/>
        </ns4:element>
        <ns4:element name="valuedItem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Contract.ValuedItem"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Questionnaire.AnswerOption" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="initialSelected" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Location.Position" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="longitude" elementType="FHIR.decimal"/>
        <ns4:element name="latitude" elementType="FHIR.decimal"/>
        <ns4:element name="altitude" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BiologicallyDerivedProduct.Collection" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="collector" elementType="FHIR.Reference"/>
        <ns4:element name="source" elementType="FHIR.Reference"/>
        <ns4:element name="collected">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetricCalibrationType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Immunization.Reaction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="detail" elementType="FHIR.Reference"/>
        <ns4:element name="reported" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SpecimenDefinition.TypeTested" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="isDerived" elementType="FHIR.boolean"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="preference" elementType="FHIR.SpecimenContainedPreference"/>
        <ns4:element name="container" elementType="FHIR.SpecimenDefinition.Container"/>
        <ns4:element name="requirement" elementType="FHIR.string"/>
        <ns4:element name="retentionTime" elementType="FHIR.Duration"/>
        <ns4:element name="rejectionCriterion">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="handling">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SpecimenDefinition.Handling"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EvidenceVariableType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Immunization.Education" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="documentType" elementType="FHIR.string"/>
        <ns4:element name="reference" elementType="FHIR.uri"/>
        <ns4:element name="publicationDate" elementType="FHIR.dateTime"/>
        <ns4:element name="presentationDate" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="code" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Metadata" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="link">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Link"/>
        </ns4:element>
        <ns4:element name="capability">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Capability"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Binary" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="contentType" elementType="FHIR.code"/>
        <ns4:element name="securityContext" elementType="FHIR.Reference"/>
        <ns4:element name="data" elementType="FHIR.base64Binary"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionSelectionBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SupplyDeliveryStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.DynamicValue" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.Expression"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MolecularSequence.Roc" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="score">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="numTP">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="numFP">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="numFN">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.integer"/>
        </ns4:element>
        <ns4:element name="precision">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.decimal"/>
        </ns4:element>
        <ns4:element name="sensitivity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.decimal"/>
        </ns4:element>
        <ns4:element name="fMeasure">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.decimal"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureMap.Structure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="url" elementType="FHIR.canonical"/>
        <ns4:element name="mode" elementType="FHIR.StructureMapModelMode"/>
        <ns4:element name="alias" elementType="FHIR.string"/>
        <ns4:element name="documentation" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Task.Output" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="base64Binary"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="code"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="id"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="instant"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="markdown"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="oid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="positiveInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="unsignedInt"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="url"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uuid"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Annotation"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactPoint"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Count"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Distance"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="HumanName"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Identifier"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Money"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Ratio"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="SampledData"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Signature"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ContactDetail"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Contributor"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="DataRequirement"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Expression"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="ParameterDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="RelatedArtifact"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="TriggerDefinition"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="UsageContext"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Dosage"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CoverageEligibilityRequest.SupportingInfo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="information" elementType="FHIR.Reference"/>
        <ns4:element name="appliesToAll" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DiagnosticReportStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.RequestHeader" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="field" elementType="FHIR.string"/>
        <ns4:element name="value" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SampledData" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="origin" elementType="FHIR.Quantity"/>
        <ns4:element name="period" elementType="FHIR.decimal"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="lowerLimit" elementType="FHIR.decimal"/>
        <ns4:element name="upperLimit" elementType="FHIR.decimal"/>
        <ns4:element name="dimensions" elementType="FHIR.positiveInt"/>
        <ns4:element name="data" elementType="FHIR.SampledDataDataType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FlagStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EffectEvidenceSynthesis.PrecisionEstimate" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="level" elementType="FHIR.decimal"/>
        <ns4:element name="from" elementType="FHIR.decimal"/>
        <ns4:element name="to" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EffectEvidenceSynthesis.ResultsByExposure" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="exposureState" elementType="FHIR.ExposureState"/>
        <ns4:element name="variantState" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="riskEvidenceSynthesis" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Variable" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="defaultValue" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="expression" elementType="FHIR.string"/>
        <ns4:element name="headerField" elementType="FHIR.string"/>
        <ns4:element name="hint" elementType="FHIR.string"/>
        <ns4:element name="path" elementType="FHIR.string"/>
        <ns4:element name="sourceId" elementType="FHIR.id"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SPDXLicense" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification.MolecularWeight" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="method" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Quantity"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Distance" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MoneyQuantity" retrievable="false" baseType="FHIR.Quantity"/>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Definition" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="grouping">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Grouping"/>
        </ns4:element>
        <ns4:element name="resource">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Resource"/>
        </ns4:element>
        <ns4:element name="page" elementType="FHIR.ImplementationGuide.Page"/>
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Parameter"/>
        </ns4:element>
        <ns4:element name="template">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Template"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.ActionParticipantType"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ElementDefinition.Mapping" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identity" elementType="FHIR.id"/>
        <ns4:element name="language" elementType="FHIR.code"/>
        <ns4:element name="map" elementType="FHIR.string"/>
        <ns4:element name="comment" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Setup" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestScript.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ListStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="base64Binary" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DetectedIssue.Evidence" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceUseStatementStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CommunicationRequest" retrievable="true" primaryCodePath="category" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="replaces">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="groupIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.RequestStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="doNotPerform" elementType="FHIR.boolean"/>
        <ns4:element name="medium">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="about">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="payload">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CommunicationRequest.Payload"/>
        </ns4:element>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="authoredOn" elementType="FHIR.dateTime"/>
        <ns4:element name="requester" elementType="FHIR.Reference"/>
        <ns4:element name="recipient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="sender" elementType="FHIR.Reference"/>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RiskAssessment.Prediction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="outcome" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="probability">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="qualitativeRisk" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="relativeRisk" elementType="FHIR.decimal"/>
        <ns4:element name="when">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="rationale" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceNucleicAcid.Subunit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="subunit" elementType="FHIR.integer"/>
        <ns4:element name="sequence" elementType="FHIR.string"/>
        <ns4:element name="length" elementType="FHIR.integer"/>
        <ns4:element name="sequenceAttachment" elementType="FHIR.Attachment"/>
        <ns4:element name="fivePrime" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="threePrime" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="linkage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceNucleicAcid.Linkage"/>
        </ns4:element>
        <ns4:element name="sugar">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceNucleicAcid.Sugar"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AuditEventAgentNetworkType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystem.Concept" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.string"/>
        <ns4:element name="designation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Designation"/>
        </ns4:element>
        <ns4:element name="property">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Property1"/>
        </ns4:element>
        <ns4:element name="concept">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeSystem.Concept"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CommunicationRequest.Payload" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="content">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BackboneElement" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="modifierExtension">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Extension"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExpressionLanguage" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="AddressUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DocumentReference.RelatesTo" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.DocumentRelationshipType"/>
        <ns4:element name="target" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Participant" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.TestReportParticipantType"/>
        <ns4:element name="uri" elementType="FHIR.uri"/>
        <ns4:element name="display" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NutritionOrder" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="instantiates">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.RequestStatus"/>
        <ns4:element name="intent" elementType="FHIR.RequestIntent"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="dateTime" elementType="FHIR.dateTime"/>
        <ns4:element name="orderer" elementType="FHIR.Reference"/>
        <ns4:element name="allergyIntolerance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="foodPreferenceModifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="excludeFoodModifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="oralDiet" elementType="FHIR.NutritionOrder.OralDiet"/>
        <ns4:element name="supplement">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.NutritionOrder.Supplement"/>
        </ns4:element>
        <ns4:element name="enteralFormula" elementType="FHIR.NutritionOrder.EnteralFormula"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Action2" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestScript.Operation"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContactPointUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="DeviceMetricOperationalStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestScript.Action1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="operation" elementType="FHIR.TestScript.Operation"/>
        <ns4:element name="assert" elementType="FHIR.TestScript.Assert"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Data" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="meaning" elementType="FHIR.ConsentDataMeaning"/>
        <ns4:element name="reference" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestGroup.RelatedAction" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="actionId" elementType="FHIR.id"/>
        <ns4:element name="relationship" elementType="FHIR.ActionRelationshipType"/>
        <ns4:element name="offset">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContributorType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ReferenceVersionRules" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MessageHeader.Response" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier" elementType="FHIR.id"/>
        <ns4:element name="code" elementType="FHIR.ResponseType"/>
        <ns4:element name="details" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReportStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SearchEntryMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductAuthorization.JurisdictionalAuthorization" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="country" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="legalStatusOfSupply" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="validityPeriod" elementType="FHIR.Period"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ResearchStudy" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="protocol">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ResearchStudyStatus"/>
        <ns4:element name="primaryPurposeType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="phase" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="focus">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="relatedArtifact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="keyword">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="enrollment">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="sponsor" elementType="FHIR.Reference"/>
        <ns4:element name="principalInvestigator" elementType="FHIR.Reference"/>
        <ns4:element name="site">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reasonStopped" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="arm">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResearchStudy.Arm"/>
        </ns4:element>
        <ns4:element name="objective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ResearchStudy.Objective"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="StructureDefinition.Differential" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="element">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ElementDefinition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RequestGroup.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="prefix" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="textEquivalent" elementType="FHIR.string"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="documentation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.Condition"/>
        </ns4:element>
        <ns4:element name="relatedAction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.RelatedAction"/>
        </ns4:element>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="groupingBehavior" elementType="FHIR.ActionGroupingBehavior"/>
        <ns4:element name="selectionBehavior" elementType="FHIR.ActionSelectionBehavior"/>
        <ns4:element name="requiredBehavior" elementType="FHIR.ActionRequiredBehavior"/>
        <ns4:element name="precheckBehavior" elementType="FHIR.ActionPrecheckBehavior"/>
        <ns4:element name="cardinalityBehavior" elementType="FHIR.ActionCardinalityBehavior"/>
        <ns4:element name="resource" elementType="FHIR.Reference"/>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RequestGroup.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationRequest.Substitution" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="allowed">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="reason" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Condition.Evidence" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.SubDetail1" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClaimResponse.Adjudication"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Identifier" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="use" elementType="FHIR.IdentifierUse"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="value" elementType="FHIR.string"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="assigner" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TestReport.Teardown" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TestReport.Action2"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EpisodeOfCare" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.EpisodeOfCareStatus"/>
        <ns4:element name="statusHistory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EpisodeOfCare.StatusHistory"/>
        </ns4:element>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EpisodeOfCare.Diagnosis"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="managingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="period" elementType="FHIR.Period"/>
        <ns4:element name="referralRequest">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="careManager" elementType="FHIR.Reference"/>
        <ns4:element name="team">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="account">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Patient.Communication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="language" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="preferred" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="InsurancePlan.Benefit" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="requirement" elementType="FHIR.string"/>
        <ns4:element name="limit">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.InsurancePlan.Limit"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductIngredient.Strength" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="presentation" elementType="FHIR.Ratio"/>
        <ns4:element name="presentationLowLimit" elementType="FHIR.Ratio"/>
        <ns4:element name="concentration" elementType="FHIR.Ratio"/>
        <ns4:element name="concentrationLowLimit" elementType="FHIR.Ratio"/>
        <ns4:element name="measurementPoint" elementType="FHIR.string"/>
        <ns4:element name="country">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="referenceStrength">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicinalProductIngredient.ReferenceStrength"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SpecimenDefinition" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="typeCollected" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="patientPreparation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="timeAspect" elementType="FHIR.string"/>
        <ns4:element name="collection">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="typeTested">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SpecimenDefinition.TypeTested"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="type">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="onAdmission" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="packageCode" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContactDetail" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="unsignedInt" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="NameUse" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstancePolymer" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="class" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="geometry" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="copolymerConnectivity">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="modification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="monomerSet">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.MonomerSet"/>
        </ns4:element>
        <ns4:element name="repeat">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstancePolymer.Repeat"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification.Name" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="preferred" elementType="FHIR.boolean"/>
        <ns4:element name="language">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="domain">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="synonym">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Name"/>
        </ns4:element>
        <ns4:element name="translation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Name"/>
        </ns4:element>
        <ns4:element name="official">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSpecification.Official"/>
        </ns4:element>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSourceMaterial.Author" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="authorType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="authorDescription" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="LocationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="integer" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.Integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FHIRSubstanceStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Basic" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="created" elementType="FHIR.date"/>
        <ns4:element name="author" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClinicalImpression" retrievable="true" primaryCodePath="code" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ClinicalImpressionStatus"/>
        <ns4:element name="statusReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="encounter" elementType="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="assessor" elementType="FHIR.Reference"/>
        <ns4:element name="previous" elementType="FHIR.Reference"/>
        <ns4:element name="problem">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="investigation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClinicalImpression.Investigation"/>
        </ns4:element>
        <ns4:element name="protocol">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="summary" elementType="FHIR.string"/>
        <ns4:element name="finding">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ClinicalImpression.Finding"/>
        </ns4:element>
        <ns4:element name="prognosisCodeableConcept">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="prognosisReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ChargeItem" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="definitionUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="definitionCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.ChargeItemStatus"/>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="occurrence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="performer">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ChargeItem.Performer"/>
        </ns4:element>
        <ns4:element name="performingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="requestingOrganization" elementType="FHIR.Reference"/>
        <ns4:element name="costCenter" elementType="FHIR.Reference"/>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="bodysite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="factorOverride" elementType="FHIR.decimal"/>
        <ns4:element name="priceOverride" elementType="FHIR.Money"/>
        <ns4:element name="overrideReason" elementType="FHIR.string"/>
        <ns4:element name="enterer" elementType="FHIR.Reference"/>
        <ns4:element name="enteredDate" elementType="FHIR.dateTime"/>
        <ns4:element name="reason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="service">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="product">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="account">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="supportingInformation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireItemOperator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="HTTPVerb" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CapabilityStatement.SearchParam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="definition" elementType="FHIR.canonical"/>
        <ns4:element name="type" elementType="FHIR.SearchParamType"/>
        <ns4:element name="documentation" elementType="FHIR.markdown"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="code">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.code"/>
        <ns4:element name="manufacturer" elementType="FHIR.Reference"/>
        <ns4:element name="doseForm" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Quantity"/>
        <ns4:element name="synonym">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.string"/>
        </ns4:element>
        <ns4:element name="relatedMedicationKnowledge">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.RelatedMedicationKnowledge"/>
        </ns4:element>
        <ns4:element name="associatedMedication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="productType">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="monograph">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Monograph"/>
        </ns4:element>
        <ns4:element name="ingredient">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Ingredient"/>
        </ns4:element>
        <ns4:element name="preparationInstruction" elementType="FHIR.markdown"/>
        <ns4:element name="intendedRoute">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="cost">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Cost"/>
        </ns4:element>
        <ns4:element name="monitoringProgram">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.MonitoringProgram"/>
        </ns4:element>
        <ns4:element name="administrationGuidelines">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.AdministrationGuidelines"/>
        </ns4:element>
        <ns4:element name="medicineClassification">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.MedicineClassification"/>
        </ns4:element>
        <ns4:element name="packaging" elementType="FHIR.MedicationKnowledge.Packaging"/>
        <ns4:element name="drugCharacteristic">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.DrugCharacteristic"/>
        </ns4:element>
        <ns4:element name="contraindication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="regulatory">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Regulatory"/>
        </ns4:element>
        <ns4:element name="kinetics">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.MedicationKnowledge.Kinetics"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSpecification.Property" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="parameters" elementType="FHIR.string"/>
        <ns4:element name="definingSubstance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="amount">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EpisodeOfCareStatus" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceSourceMaterial.Organism" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="family" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="genus" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="species" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intraspecificType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="intraspecificDescription" elementType="FHIR.string"/>
        <ns4:element name="author">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.SubstanceSourceMaterial.Author"/>
        </ns4:element>
        <ns4:element name="hybrid" elementType="FHIR.SubstanceSourceMaterial.Hybrid"/>
        <ns4:element name="organismGeneral" elementType="FHIR.SubstanceSourceMaterial.OrganismGeneral"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="RemittanceOutcome" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.CareTeam" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="responsible" elementType="FHIR.boolean"/>
        <ns4:element name="role" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="qualification" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ItemInstance" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="count" elementType="FHIR.integer"/>
        <ns4:element name="location" elementType="FHIR.Reference"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="manufactureDate" elementType="FHIR.dateTime"/>
        <ns4:element name="expiryDate" elementType="FHIR.dateTime"/>
        <ns4:element name="currentSWVersion" elementType="FHIR.string"/>
        <ns4:element name="lotNumber" elementType="FHIR.string"/>
        <ns4:element name="serialNumber" elementType="FHIR.string"/>
        <ns4:element name="carrierAIDC" elementType="FHIR.string"/>
        <ns4:element name="carrierHRF" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Parameters" retrievable="false" baseType="FHIR.Resource">
        <ns4:element name="parameter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Parameters.Parameter"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Adjudication" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount" elementType="FHIR.Money"/>
        <ns4:element name="value" elementType="FHIR.decimal"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MolecularSequence.Outer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="start" elementType="FHIR.integer"/>
        <ns4:element name="end" elementType="FHIR.integer"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExampleScenario.ContainedInstance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="resourceId" elementType="FHIR.string"/>
        <ns4:element name="versionId" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="markdown" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ClaimResponse.Error" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="itemSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="detailSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="subDetailSequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuestionnaireResponse.Answer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="decimal"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="integer"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="time"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Attachment"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Coding"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.QuestionnaireResponse.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TerminologyCapabilities.Software" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="version" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="EligibilityRequestPurpose" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Patient.Link" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="other" elementType="FHIR.Reference"/>
        <ns4:element name="type" elementType="FHIR.LinkType"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="QuantityComparator" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Procedure.Performer" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="function" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="actor" elementType="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Claim.Detail" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="subDetail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Claim.SubDetail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationStatement" retrievable="true" primaryCodePath="medication" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="basedOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="partOf">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.MedicationStatusCodes"/>
        <ns4:element name="statusReason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="medication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="context" elementType="FHIR.Reference"/>
        <ns4:element name="effective">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="dateAsserted" elementType="FHIR.dateTime"/>
        <ns4:element name="informationSource" elementType="FHIR.Reference"/>
        <ns4:element name="derivedFrom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="dosage">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Dosage"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.MaxDispense" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="period" elementType="FHIR.Duration"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.Item" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="sequence" elementType="FHIR.positiveInt"/>
        <ns4:element name="careTeamSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="diagnosisSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="procedureSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="informationSequence">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="revenue" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="category" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="productOrService" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="modifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="programCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="location">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Address"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="quantity" elementType="FHIR.Quantity"/>
        <ns4:element name="unitPrice" elementType="FHIR.Money"/>
        <ns4:element name="factor" elementType="FHIR.decimal"/>
        <ns4:element name="net" elementType="FHIR.Money"/>
        <ns4:element name="udi">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="bodySite" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subSite">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="encounter">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="noteNumber">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.positiveInt"/>
        </ns4:element>
        <ns4:element name="adjudication">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Adjudication"/>
        </ns4:element>
        <ns4:element name="detail">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExplanationOfBenefit.Detail"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Coding" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="system" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="display" elementType="FHIR.string"/>
        <ns4:element name="userSelected" elementType="FHIR.boolean"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MeasureReportType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Period" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="start" elementType="FHIR.dateTime"/>
        <ns4:element name="end" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ActionPrecheckBehavior" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Specimen" retrievable="true" primaryCodePath="type" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="accessionIdentifier" elementType="FHIR.Identifier"/>
        <ns4:element name="status" elementType="FHIR.SpecimenStatus"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="subject" elementType="FHIR.Reference"/>
        <ns4:element name="receivedTime" elementType="FHIR.dateTime"/>
        <ns4:element name="parent">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="request">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="collection" elementType="FHIR.Specimen.Collection"/>
        <ns4:element name="processing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Specimen.Processing"/>
        </ns4:element>
        <ns4:element name="container">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Specimen.Container"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="FamilyMemberHistory" retrievable="true" baseType="FHIR.DomainResource" primaryCodePath="relationship">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="instantiatesCanonical">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.canonical"/>
        </ns4:element>
        <ns4:element name="instantiatesUri">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.uri"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FamilyHistoryStatus"/>
        <ns4:element name="dataAbsentReason" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="relationship" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="sex" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="born">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="age">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="estimatedAge" elementType="FHIR.boolean"/>
        <ns4:element name="deceased">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="boolean"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="reasonCode">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reasonReference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
        <ns4:element name="note">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Annotation"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.FamilyMemberHistory.Condition"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SampledDataDataType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="PlanDefinition.Action" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="prefix" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="textEquivalent" elementType="FHIR.string"/>
        <ns4:element name="priority" elementType="FHIR.RequestPriority"/>
        <ns4:element name="code">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="reason">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="documentation">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.RelatedArtifact"/>
        </ns4:element>
        <ns4:element name="goalId">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.id"/>
        </ns4:element>
        <ns4:element name="subject">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="trigger">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.TriggerDefinition"/>
        </ns4:element>
        <ns4:element name="condition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Condition"/>
        </ns4:element>
        <ns4:element name="input">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="output">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.DataRequirement"/>
        </ns4:element>
        <ns4:element name="relatedAction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.RelatedAction"/>
        </ns4:element>
        <ns4:element name="timing">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Age"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Duration"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Timing"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="participant">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Participant"/>
        </ns4:element>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="groupingBehavior" elementType="FHIR.ActionGroupingBehavior"/>
        <ns4:element name="selectionBehavior" elementType="FHIR.ActionSelectionBehavior"/>
        <ns4:element name="requiredBehavior" elementType="FHIR.ActionRequiredBehavior"/>
        <ns4:element name="precheckBehavior" elementType="FHIR.ActionPrecheckBehavior"/>
        <ns4:element name="cardinalityBehavior" elementType="FHIR.ActionCardinalityBehavior"/>
        <ns4:element name="definition">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="canonical"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="uri"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="transform" elementType="FHIR.canonical"/>
        <ns4:element name="dynamicValue">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.DynamicValue"/>
        </ns4:element>
        <ns4:element name="action">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.PlanDefinition.Action"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Provenance.Agent" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="role">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="who" elementType="FHIR.Reference"/>
        <ns4:element name="onBehalfOf" elementType="FHIR.Reference"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CoverageEligibilityRequest" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="identifier">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Identifier"/>
        </ns4:element>
        <ns4:element name="status" elementType="FHIR.FinancialResourceStatusCodes"/>
        <ns4:element name="priority" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="purpose">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.EligibilityRequestPurpose"/>
        </ns4:element>
        <ns4:element name="patient" elementType="FHIR.Reference"/>
        <ns4:element name="serviced">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="date"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="created" elementType="FHIR.dateTime"/>
        <ns4:element name="enterer" elementType="FHIR.Reference"/>
        <ns4:element name="provider" elementType="FHIR.Reference"/>
        <ns4:element name="insurer" elementType="FHIR.Reference"/>
        <ns4:element name="facility" elementType="FHIR.Reference"/>
        <ns4:element name="supportingInfo">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityRequest.SupportingInfo"/>
        </ns4:element>
        <ns4:element name="insurance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityRequest.Insurance"/>
        </ns4:element>
        <ns4:element name="item">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CoverageEligibilityRequest.Item"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BiologicallyDerivedProduct.Processing" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="description" elementType="FHIR.string"/>
        <ns4:element name="procedure" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="additive" elementType="FHIR.Reference"/>
        <ns4:element name="time">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="dateTime"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Period"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Consent.Verification" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="verified" elementType="FHIR.boolean"/>
        <ns4:element name="verifiedWith" elementType="FHIR.Reference"/>
        <ns4:element name="verificationDate" elementType="FHIR.dateTime"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CompositionAttestationMode" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExplanationOfBenefit.ProcessNote" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="number" elementType="FHIR.positiveInt"/>
        <ns4:element name="type" elementType="FHIR.NoteType"/>
        <ns4:element name="text" elementType="FHIR.string"/>
        <ns4:element name="language" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicationKnowledge.RelatedMedicationKnowledge" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="reference">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="TypeRestfulInteraction" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide" retrievable="true" baseType="FHIR.DomainResource">
        <ns4:element name="url" elementType="FHIR.uri"/>
        <ns4:element name="version" elementType="FHIR.string"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="title" elementType="FHIR.string"/>
        <ns4:element name="status" elementType="FHIR.PublicationStatus"/>
        <ns4:element name="experimental" elementType="FHIR.boolean"/>
        <ns4:element name="date" elementType="FHIR.dateTime"/>
        <ns4:element name="publisher" elementType="FHIR.string"/>
        <ns4:element name="contact">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactDetail"/>
        </ns4:element>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="useContext">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.UsageContext"/>
        </ns4:element>
        <ns4:element name="jurisdiction">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.CodeableConcept"/>
        </ns4:element>
        <ns4:element name="copyright" elementType="FHIR.markdown"/>
        <ns4:element name="packageId" elementType="FHIR.id"/>
        <ns4:element name="license" elementType="FHIR.SPDXLicense"/>
        <ns4:element name="fhirVersion">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.FHIRVersion"/>
        </ns4:element>
        <ns4:element name="dependsOn">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.DependsOn"/>
        </ns4:element>
        <ns4:element name="global">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ImplementationGuide.Global"/>
        </ns4:element>
        <ns4:element name="definition" elementType="FHIR.ImplementationGuide.Definition"/>
        <ns4:element name="manifest" elementType="FHIR.ImplementationGuide.Manifest"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="MedicinalProductPharmaceutical.Characteristics" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="status" elementType="FHIR.CodeableConcept"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceReferenceInformation.Target" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="target" elementType="FHIR.Identifier"/>
        <ns4:element name="type" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="interaction" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="organism" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="organismType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="amount">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="string"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
        <ns4:element name="amountType" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="source">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.Reference"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CodeSystemHierarchyMeaning" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="UsageContext" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="code" elementType="FHIR.Coding"/>
        <ns4:element name="value">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Quantity"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Range"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ImplementationGuide.Template" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="code" elementType="FHIR.code"/>
        <ns4:element name="source" elementType="FHIR.string"/>
        <ns4:element name="scope" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="vConfidentialityClassification" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ExampleScenario.Instance" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="resourceId" elementType="FHIR.string"/>
        <ns4:element name="resourceType" elementType="FHIR.ResourceType"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="description" elementType="FHIR.markdown"/>
        <ns4:element name="version">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.Version"/>
        </ns4:element>
        <ns4:element name="containedInstance">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ExampleScenario.ContainedInstance"/>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="CoverageEligibilityRequest.Diagnosis" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="diagnosis">
            <ns4:elementTypeSpecifier xsi:type="ns4:ChoiceTypeSpecifier">
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="CodeableConcept"/>
                <ns4:choice xsi:type="ns4:NamedTypeSpecifier" modelName="FHIR" name="Reference"/>
            </ns4:elementTypeSpecifier>
        </ns4:element>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Organization.Contact" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="purpose" elementType="FHIR.CodeableConcept"/>
        <ns4:element name="name" elementType="FHIR.HumanName"/>
        <ns4:element name="telecom">
            <ns4:elementTypeSpecifier xsi:type="ns4:ListTypeSpecifier" elementType="FHIR.ContactPoint"/>
        </ns4:element>
        <ns4:element name="address" elementType="FHIR.Address"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="ContractResourcePublicationStatusCodes" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="SubstanceNucleicAcid.Linkage" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="connectivity" elementType="FHIR.string"/>
        <ns4:element name="identifier" elementType="FHIR.Identifier"/>
        <ns4:element name="name" elementType="FHIR.string"/>
        <ns4:element name="residueSite" elementType="FHIR.string"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="VisionBase" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="BundleType" retrievable="false" baseType="FHIR.Element">
        <ns4:element name="value" elementType="System.String"/>
    </ns4:typeInfo>
    <ns4:typeInfo xsi:type="ns4:ClassInfo" name="Bundle.Response" retrievable="false" baseType="FHIR.BackboneElement">
        <ns4:element name="status" elementType="FHIR.string"/>
        <ns4:element name="location" elementType="FHIR.uri"/>
        <ns4:element name="etag" elementType="FHIR.string"/>
        <ns4:element name="lastModified" elementType="FHIR.instant"/>
        <ns4:element name="outcome" elementType="FHIR.ResourceContainer"/>
    </ns4:typeInfo>
    <ns4:conversionInfo fromType="FHIR.Coding" toType="System.Code" functionName="FHIRHelpers.ToCode"/>
    <ns4:conversionInfo fromType="FHIR.CodeableConcept" toType="System.Concept" functionName="FHIRHelpers.ToConcept"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.base64Binary" toType="System.String" />
    <ns4:conversionInfo functionName="FHIRHelpers.ToBoolean" fromType="FHIR.boolean" toType="System.Boolean" />
    <ns4:conversionInfo functionName="FHIRHelpers.ToDate" fromType="FHIR.date" toType="System.Date" />
    <ns4:conversionInfo functionName="FHIRHelpers.ToDateTime" fromType="FHIR.instant" toType="System.DateTime" />
    <ns4:conversionInfo functionName="FHIRHelpers.ToDateTime" fromType="FHIR.dateTime" toType="System.DateTime" />
    <ns4:conversionInfo functionName="FHIRHelpers.ToDecimal" fromType="FHIR.decimal" toType="System.Decimal" />
    <ns4:conversionInfo functionName="FHIRHelpers.ToInteger" fromType="FHIR.positiveInt" toType="System.Integer" />
    <ns4:conversionInfo functionName="FHIRHelpers.ToInteger" fromType="FHIR.unsignedInt" toType="System.Integer" />
    <ns4:conversionInfo functionName="FHIRHelpers.ToInteger" fromType="FHIR.integer" toType="System.Integer" />
    <ns4:conversionInfo functionName="FHIRHelpers.ToTime" fromType="FHIR.time" toType="System.Time" />
    <ns4:conversionInfo fromType="FHIR.Quantity" toType="System.Quantity" functionName="FHIRHelpers.ToQuantity"/>
    <ns4:conversionInfo fromType="FHIR.Period" toType="Interval&lt;System.DateTime&gt;" functionName="FHIRHelpers.ToInterval"/>
    <ns4:conversionInfo fromType="FHIR.Range" toType="Interval&lt;System.Quantity&gt;" functionName="FHIRHelpers.ToInterval"/>
    <ns4:conversionInfo functionName="FHIRHelpers.ToRatio" fromType="FHIR.Ratio" toType="System.Ratio"/>
    <ns4:conversionInfo fromType="FHIR.uuid" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TestScriptRequestMethodCode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SortDirection" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.BiologicallyDerivedProductStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.UnitsOfTime" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AddressType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IssueSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CareTeamStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EncounterStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureDefinitionKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.PublicationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FHIRVersion" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CarePlanActivityKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapSourceListMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RequestStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.strandType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.QuestionnaireResponseStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchComparator" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ChargeItemStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionParticipantType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CarePlanActivityStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.InvoiceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ClaimProcessingCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RequestResourceType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ParticipationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceNameType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DocumentMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AssertionOperatorType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DaysOfWeek" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IssueType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.canonical" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapContextType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FamilyHistoryStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.status" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ExtensionContextType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AssertionResponseTypes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RequestIntent" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.string" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionRequiredBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GraphCompartmentUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.orientationType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AccountStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IdentifierUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapTargetListMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ExposureState" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TestReportParticipantType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.BindingStrength" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RequestPriority" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ParticipantRequired" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.XPathUsageType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.id" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FilterOperator" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NamingSystemType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContractResourceStatusCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResearchSubjectStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapTransform" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResponseType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AggregationMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.sequenceType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SystemRestfulInteraction" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AdverseEventActuality" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SubscriptionChannelType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AssertionDirectionType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CarePlanIntent" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceCriticality" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.PropertyRepresentation" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TriggerType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CompositionStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AppointmentStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MessageSignificanceCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ListMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResearchElementType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ObservationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResourceType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapGroupTypeMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SupplyRequestStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EncounterLocationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConditionalDeleteStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.url" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.uri" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.Use" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationRequestStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.IdentityAssuranceLevel" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricColor" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConditionalReadStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AllergyIntoleranceSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FinancialResourceStatusCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.OperationKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SubscriptionStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GoalLifecycleStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ObservationDataType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DocumentReferenceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.repositoryType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LocationStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NoteType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TestReportStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CodeSystemContentMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FHIRDeviceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContactPointSystem" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SlotStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.PropertyType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TypeDerivationRule" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GuidanceResponseStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RelatedArtifactType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.oid" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CompartmentType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationRequestIntent" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.InvoicePriceComponentType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricCalibrationState" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GroupType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EnableWhenBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TaskIntent" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ImmunizationEvaluationStatusCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ExampleScenarioActorType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ProvenanceEntityRole" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SpecimenStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RestfulCapabilityMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DetectedIssueSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.VisionEyes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConsentDataMeaning" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.messageheaderResponseRequest" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GuidePageGeneration" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DocumentRelationshipType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.VariableType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TestReportResult" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConceptMapGroupUnmappedMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ClinicalImpressionStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EligibilityResponsePurpose" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NarrativeStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ImagingStudyStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EndpointStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.BiologicallyDerivedProductCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResourceVersionPolicy" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionCardinalityBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GroupMeasure" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NamingSystemIdentifierType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ImmunizationStatusCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MedicationStatusCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DiscriminatorType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapInputMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LinkageType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ReferenceHandlingPolicy" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ResearchStudyStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AuditEventOutcome" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SpecimenContainedPreference" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionRelationshipType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConstraintSeverity" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EventCapabilityMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CodeSearchSupport" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ObservationRangeCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.UDIEntryType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricCategory" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TestReportActionResult" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CapabilityStatementKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EventTiming" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchParamType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionGroupingBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.StructureMapModelMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TaskStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.BiologicallyDerivedProductStorageScale" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GraphCompartmentRule" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SlicingRules" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ExplanationOfBenefitStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.GuideParameterCode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CatalogEntryRelationType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LinkType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConceptMapEquivalence" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AuditEventAction" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchModifierCode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EventStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.OperationParameterUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ConsentProvisionType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionConditionKind" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.qualityType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AdministrativeGender" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.QuestionnaireItemType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricCalibrationType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EvidenceVariableType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.code" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionSelectionBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SupplyDeliveryStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DiagnosticReportStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FlagStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SPDXLicense" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ListStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceUseStatementStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AuditEventAgentNetworkType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ExpressionLanguage" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.AddressUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContactPointUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.DeviceMetricOperationalStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContributorType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ReferenceVersionRules" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MeasureReportStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SearchEntryMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.NameUse" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.LocationMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.FHIRSubstanceStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.QuestionnaireItemOperator" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.HTTPVerb" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EpisodeOfCareStatus" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.RemittanceOutcome" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.markdown" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.EligibilityRequestPurpose" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.QuantityComparator" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.MeasureReportType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ActionPrecheckBehavior" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.SampledDataDataType" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CompositionAttestationMode" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.TypeRestfulInteraction" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.CodeSystemHierarchyMeaning" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.vConfidentialityClassification" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.ContractResourcePublicationStatusCodes" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.VisionBase" toType="System.String" functionName="FHIRHelpers.ToString"/>
    <ns4:conversionInfo fromType="FHIR.BundleType" toType="System.String" functionName="FHIRHelpers.ToString"/>
</ns4:modelInfo>`;