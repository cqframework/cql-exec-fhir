// This file exists so that these FHIR modelinfos can also be used in a browser where Node's 'fs' module isn't
// available.

module.exports = `<?xml version="1.0" encoding="UTF-8"?>
<modelInfo xmlns="urn:hl7-org:elm-modelinfo:r1" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" name="FHIR" version="4.0.1" url="http://hl7.org/fhir" targetQualifier="fhir" patientClassName="FHIR.Patient" patientBirthDatePropertyName="birthDate.value">
   <requiredModelInfo name="System" version="1.0.0"/>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Account" identifier="http://hl7.org/fhir/StructureDefinition/Account" label="Account" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.AccountStatus"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="subject">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="servicePeriod" elementType="FHIR.Period"/>
      <element name="coverage">
         <elementTypeSpecifier elementType="FHIR.Account.Coverage" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="owner" elementType="FHIR.Reference"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="guarantor">
         <elementTypeSpecifier elementType="FHIR.Account.Guarantor" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf" elementType="FHIR.Reference"/>
      <contextRelationship context="Practitioner" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Device" relatedKeyElement="subject"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Account.Coverage" retrievable="false" xsi:type="ClassInfo">
      <element name="coverage" elementType="FHIR.Reference"/>
      <element name="priority" elementType="FHIR.positiveInt"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Account.Guarantor" retrievable="false" xsi:type="ClassInfo">
      <element name="party" elementType="FHIR.Reference"/>
      <element name="onHold" elementType="FHIR.boolean"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AccountStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ActionCardinalityBehavior" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ActionConditionKind" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ActionGroupingBehavior" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ActionParticipantType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ActionPrecheckBehavior" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ActionRelationshipType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ActionRequiredBehavior" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ActionSelectionBehavior" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ActivityDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ActivityDefinition" label="ActivityDefinition" retrievable="true" primaryCodePath="topic" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="subtitle" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="subject">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="usage" elementType="FHIR.string"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="library">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="kind" elementType="FHIR.ActivityDefinitionKind"/>
      <element name="profile" elementType="FHIR.canonical"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="intent" elementType="FHIR.RequestIntent"/>
      <element name="priority" elementType="FHIR.RequestPriority"/>
      <element name="doNotPerform" elementType="FHIR.boolean"/>
      <element name="timing">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="participant">
         <elementTypeSpecifier elementType="FHIR.ActivityDefinition.Participant" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="product">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="dosage">
         <elementTypeSpecifier elementType="FHIR.Dosage" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="bodySite">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specimenRequirement">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="observationRequirement">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="observationResultRequirement">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="transform" elementType="FHIR.canonical"/>
      <element name="dynamicValue">
         <elementTypeSpecifier elementType="FHIR.ActivityDefinition.DynamicValue" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ActivityDefinition.DynamicValue" retrievable="false" xsi:type="ClassInfo">
      <element name="path" elementType="FHIR.string"/>
      <element name="expression" elementType="FHIR.Expression"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ActivityDefinition.Participant" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.ActivityParticipantType"/>
      <element name="role" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ActivityDefinitionKind" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ActivityParticipantType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Address" identifier="http://hl7.org/fhir/StructureDefinition/Address" label="Address" retrievable="false" xsi:type="ClassInfo">
      <element name="use" elementType="FHIR.AddressUse"/>
      <element name="type" elementType="FHIR.AddressType"/>
      <element name="text" elementType="FHIR.string"/>
      <element name="line">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="city" elementType="FHIR.string"/>
      <element name="district" elementType="FHIR.string"/>
      <element name="state" elementType="FHIR.string"/>
      <element name="postalCode" elementType="FHIR.string"/>
      <element name="country" elementType="FHIR.string"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AddressType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AddressUse" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AdministrativeGender" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="AdverseEvent" identifier="http://hl7.org/fhir/StructureDefinition/AdverseEvent" label="AdverseEvent" retrievable="true" primaryCodePath="event" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="actuality" elementType="FHIR.AdverseEventActuality"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="event" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="detected" elementType="FHIR.dateTime"/>
      <element name="recordedDate" elementType="FHIR.dateTime"/>
      <element name="resultingCondition">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="seriousness" elementType="FHIR.CodeableConcept"/>
      <element name="severity" elementType="FHIR.CodeableConcept"/>
      <element name="outcome" elementType="FHIR.CodeableConcept"/>
      <element name="recorder" elementType="FHIR.Reference"/>
      <element name="contributor">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="suspectEntity">
         <elementTypeSpecifier elementType="FHIR.AdverseEvent.SuspectEntity" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subjectMedicalHistory">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="referenceDocument">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="study">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="recorder"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="recorder"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="AdverseEvent.SuspectEntity" retrievable="false" xsi:type="ClassInfo">
      <element name="instance" elementType="FHIR.Reference"/>
      <element name="causality">
         <elementTypeSpecifier elementType="FHIR.AdverseEvent.SuspectEntity.Causality" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="AdverseEvent.SuspectEntity.Causality" retrievable="false" xsi:type="ClassInfo">
      <element name="assessment" elementType="FHIR.CodeableConcept"/>
      <element name="productRelatedness" elementType="FHIR.string"/>
      <element name="author" elementType="FHIR.Reference"/>
      <element name="method" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AdverseEventActuality" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Quantity" namespace="FHIR" name="Age" identifier="http://hl7.org/fhir/StructureDefinition/Age" label="Age" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AggregationMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="AllergyIntolerance" identifier="http://hl7.org/fhir/StructureDefinition/AllergyIntolerance" label="AllergyIntolerance" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="clinicalStatus" elementType="FHIR.CodeableConcept"/>
      <element name="verificationStatus" elementType="FHIR.CodeableConcept"/>
      <element name="type" elementType="FHIR.AllergyIntoleranceType"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.AllergyIntoleranceCategory" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="criticality" elementType="FHIR.AllergyIntoleranceCriticality"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="onset">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="recordedDate" elementType="FHIR.dateTime"/>
      <element name="recorder" elementType="FHIR.Reference"/>
      <element name="asserter" elementType="FHIR.Reference"/>
      <element name="lastOccurrence" elementType="FHIR.dateTime"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reaction">
         <elementTypeSpecifier elementType="FHIR.AllergyIntolerance.Reaction" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="recorder"/>
      <contextRelationship context="Practitioner" relatedKeyElement="asserter"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Patient" relatedKeyElement="recorder"/>
      <contextRelationship context="Patient" relatedKeyElement="asserter"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="asserter"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="AllergyIntolerance.Reaction" retrievable="false" xsi:type="ClassInfo">
      <element name="substance" elementType="FHIR.CodeableConcept"/>
      <element name="manifestation">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="onset" elementType="FHIR.dateTime"/>
      <element name="severity" elementType="FHIR.AllergyIntoleranceSeverity"/>
      <element name="exposureRoute" elementType="FHIR.CodeableConcept"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AllergyIntoleranceCategory" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AllergyIntoleranceCriticality" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AllergyIntoleranceSeverity" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AllergyIntoleranceType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Annotation" identifier="http://hl7.org/fhir/StructureDefinition/Annotation" label="Annotation" retrievable="false" xsi:type="ClassInfo">
      <element name="author">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="time" elementType="FHIR.dateTime"/>
      <element name="text" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Appointment" identifier="http://hl7.org/fhir/StructureDefinition/Appointment" label="Appointment" retrievable="true" primaryCodePath="serviceType" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.AppointmentStatus"/>
      <element name="cancelationReason" elementType="FHIR.CodeableConcept"/>
      <element name="serviceCategory">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviceType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specialty">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="appointmentType" elementType="FHIR.CodeableConcept"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="priority" elementType="FHIR.unsignedInt"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="supportingInformation">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="start" elementType="FHIR.instant"/>
      <element name="end" elementType="FHIR.instant"/>
      <element name="minutesDuration" elementType="FHIR.positiveInt"/>
      <element name="slot">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="comment" elementType="FHIR.string"/>
      <element name="patientInstruction" elementType="FHIR.string"/>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="participant">
         <elementTypeSpecifier elementType="FHIR.Appointment.Participant" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="requestedPeriod">
         <elementTypeSpecifier elementType="FHIR.Period" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="actor"/>
      <contextRelationship context="Patient" relatedKeyElement="actor"/>
      <contextRelationship context="Device" relatedKeyElement="actor"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Appointment.Participant" retrievable="false" xsi:type="ClassInfo">
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="actor" elementType="FHIR.Reference"/>
      <element name="required" elementType="FHIR.ParticipantRequired"/>
      <element name="status" elementType="FHIR.ParticipationStatus"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="AppointmentResponse" identifier="http://hl7.org/fhir/StructureDefinition/AppointmentResponse" label="AppointmentResponse" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="appointment" elementType="FHIR.Reference"/>
      <element name="start" elementType="FHIR.instant"/>
      <element name="end" elementType="FHIR.instant"/>
      <element name="participantType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="actor" elementType="FHIR.Reference"/>
      <element name="participantStatus" elementType="FHIR.ParticipantStatus"/>
      <element name="comment" elementType="FHIR.string"/>
      <contextRelationship context="Practitioner" relatedKeyElement="actor"/>
      <contextRelationship context="Patient" relatedKeyElement="actor"/>
      <contextRelationship context="Device" relatedKeyElement="actor"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AppointmentStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AssertionDirectionType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AssertionOperatorType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AssertionResponseTypes" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Attachment" identifier="http://hl7.org/fhir/StructureDefinition/Attachment" label="Attachment" retrievable="false" xsi:type="ClassInfo">
      <element name="contentType" elementType="FHIR.MimeType"/>
      <element name="language" elementType="FHIR.code"/>
      <element name="data" elementType="FHIR.base64Binary"/>
      <element name="url" elementType="FHIR.url"/>
      <element name="size" elementType="FHIR.unsignedInt"/>
      <element name="hash" elementType="FHIR.base64Binary"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="creation" elementType="FHIR.dateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="AuditEvent" identifier="http://hl7.org/fhir/StructureDefinition/AuditEvent" label="AuditEvent" retrievable="true" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.Coding"/>
      <element name="subtype">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="action" elementType="FHIR.AuditEventAction"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="recorded" elementType="FHIR.instant"/>
      <element name="outcome" elementType="FHIR.AuditEventOutcome"/>
      <element name="outcomeDesc" elementType="FHIR.string"/>
      <element name="purposeOfEvent">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="agent">
         <elementTypeSpecifier elementType="FHIR.AuditEvent.Agent" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="source" elementType="FHIR.AuditEvent.Source"/>
      <element name="entity">
         <elementTypeSpecifier elementType="FHIR.AuditEvent.Entity" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="who"/>
      <contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
      <contextRelationship context="Device" relatedKeyElement="who"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="AuditEvent.Agent" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="role">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="who" elementType="FHIR.Reference"/>
      <element name="altId" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="requestor" elementType="FHIR.boolean"/>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="policy">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="media" elementType="FHIR.Coding"/>
      <element name="network" elementType="FHIR.AuditEvent.Agent.Network"/>
      <element name="purposeOfUse">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="AuditEvent.Agent.Network" retrievable="false" xsi:type="ClassInfo">
      <element name="address" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.AuditEventAgentNetworkType"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="AuditEvent.Entity" retrievable="false" xsi:type="ClassInfo">
      <element name="what" elementType="FHIR.Reference"/>
      <element name="type" elementType="FHIR.Coding"/>
      <element name="role" elementType="FHIR.Coding"/>
      <element name="lifecycle" elementType="FHIR.Coding"/>
      <element name="securityLabel">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="query" elementType="FHIR.base64Binary"/>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.AuditEvent.Entity.Detail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="AuditEvent.Entity.Detail" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.string"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="AuditEvent.Source" retrievable="false" xsi:type="ClassInfo">
      <element name="site" elementType="FHIR.string"/>
      <element name="observer" elementType="FHIR.Reference"/>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AuditEventAction" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AuditEventAgentNetworkType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="AuditEventOutcome" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="BackboneElement" identifier="http://hl7.org/fhir/StructureDefinition/BackboneElement" label="BackboneElement" retrievable="false" xsi:type="ClassInfo">
      <element name="modifierExtension">
         <elementTypeSpecifier elementType="FHIR.Extension" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Basic" identifier="http://hl7.org/fhir/StructureDefinition/Basic" label="Basic" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="created" elementType="FHIR.date"/>
      <element name="author" elementType="FHIR.Reference"/>
      <contextRelationship context="Practitioner" relatedKeyElement="author"/>
      <contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
      <contextRelationship context="Patient" relatedKeyElement="author"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="author"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Resource" namespace="FHIR" name="Binary" identifier="http://hl7.org/fhir/StructureDefinition/Binary" label="Binary" retrievable="true" xsi:type="ClassInfo">
      <element name="contentType" elementType="FHIR.MimeType"/>
      <element name="securityContext" elementType="FHIR.Reference"/>
      <element name="data" elementType="FHIR.base64Binary"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="BindingStrength" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="BiologicallyDerivedProduct" identifier="http://hl7.org/fhir/StructureDefinition/BiologicallyDerivedProduct" label="BiologicallyDerivedProduct" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="productCategory" elementType="FHIR.BiologicallyDerivedProductCategory"/>
      <element name="productCode" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.BiologicallyDerivedProductStatus"/>
      <element name="request">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.integer"/>
      <element name="parent">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="collection" elementType="FHIR.BiologicallyDerivedProduct.Collection"/>
      <element name="processing">
         <elementTypeSpecifier elementType="FHIR.BiologicallyDerivedProduct.Processing" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="manipulation" elementType="FHIR.BiologicallyDerivedProduct.Manipulation"/>
      <element name="storage">
         <elementTypeSpecifier elementType="FHIR.BiologicallyDerivedProduct.Storage" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="BiologicallyDerivedProduct.Collection" retrievable="false" xsi:type="ClassInfo">
      <element name="collector" elementType="FHIR.Reference"/>
      <element name="source" elementType="FHIR.Reference"/>
      <element name="collected">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="BiologicallyDerivedProduct.Manipulation" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="time">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="BiologicallyDerivedProduct.Processing" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="procedure" elementType="FHIR.CodeableConcept"/>
      <element name="additive" elementType="FHIR.Reference"/>
      <element name="time">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="BiologicallyDerivedProduct.Storage" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="temperature" elementType="FHIR.decimal"/>
      <element name="scale" elementType="FHIR.BiologicallyDerivedProductStorageScale"/>
      <element name="duration" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="BiologicallyDerivedProductCategory" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="BiologicallyDerivedProductStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="BiologicallyDerivedProductStorageScale" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="BodyStructure" identifier="http://hl7.org/fhir/StructureDefinition/BodyStructure" label="BodyStructure" retrievable="true" primaryCodePath="location" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="morphology" elementType="FHIR.CodeableConcept"/>
      <element name="location" elementType="FHIR.CodeableConcept"/>
      <element name="locationQualifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="image">
         <elementTypeSpecifier elementType="FHIR.Attachment" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="patient" elementType="FHIR.Reference"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Resource" namespace="FHIR" name="Bundle" identifier="http://hl7.org/fhir/StructureDefinition/Bundle" label="Bundle" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="type" elementType="FHIR.BundleType"/>
      <element name="timestamp" elementType="FHIR.instant"/>
      <element name="total" elementType="FHIR.unsignedInt"/>
      <element name="link">
         <elementTypeSpecifier elementType="FHIR.Bundle.Link" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="entry">
         <elementTypeSpecifier elementType="FHIR.Bundle.Entry" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="signature" elementType="FHIR.Signature"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Bundle.Entry" retrievable="false" xsi:type="ClassInfo">
      <element name="link">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="Bundle.Link" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="fullUrl" elementType="FHIR.uri"/>
      <element name="resource" elementType="FHIR.Resource"/>
      <element name="search" elementType="FHIR.Bundle.Entry.Search"/>
      <element name="request" elementType="FHIR.Bundle.Entry.Request"/>
      <element name="response" elementType="FHIR.Bundle.Entry.Response"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Bundle.Entry.Request" retrievable="false" xsi:type="ClassInfo">
      <element name="method" elementType="FHIR.HTTPVerb"/>
      <element name="url" elementType="FHIR.uri"/>
      <element name="ifNoneMatch" elementType="FHIR.string"/>
      <element name="ifModifiedSince" elementType="FHIR.instant"/>
      <element name="ifMatch" elementType="FHIR.string"/>
      <element name="ifNoneExist" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Bundle.Entry.Response" retrievable="false" xsi:type="ClassInfo">
      <element name="status" elementType="FHIR.string"/>
      <element name="location" elementType="FHIR.uri"/>
      <element name="etag" elementType="FHIR.string"/>
      <element name="lastModified" elementType="FHIR.instant"/>
      <element name="outcome" elementType="FHIR.Resource"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Bundle.Entry.Search" retrievable="false" xsi:type="ClassInfo">
      <element name="mode" elementType="FHIR.SearchEntryMode"/>
      <element name="score" elementType="FHIR.decimal"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Bundle.Link" retrievable="false" xsi:type="ClassInfo">
      <element name="relation" elementType="FHIR.string"/>
      <element name="url" elementType="FHIR.uri"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="BundleType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="CapabilityStatement" identifier="http://hl7.org/fhir/StructureDefinition/CapabilityStatement" label="CapabilityStatement" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="kind" elementType="FHIR.CapabilityStatementKind"/>
      <element name="instantiates">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="imports">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="software" elementType="FHIR.CapabilityStatement.Software"/>
      <element name="implementation" elementType="FHIR.CapabilityStatement.Implementation"/>
      <element name="fhirVersion" elementType="FHIR.FHIRVersion"/>
      <element name="format">
         <elementTypeSpecifier elementType="FHIR.MimeType" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="patchFormat">
         <elementTypeSpecifier elementType="FHIR.MimeType" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="implementationGuide">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="rest">
         <elementTypeSpecifier elementType="FHIR.CapabilityStatement.Rest" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="messaging">
         <elementTypeSpecifier elementType="FHIR.CapabilityStatement.Messaging" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="document">
         <elementTypeSpecifier elementType="FHIR.CapabilityStatement.Document" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Document" retrievable="false" xsi:type="ClassInfo">
      <element name="mode" elementType="FHIR.DocumentMode"/>
      <element name="documentation" elementType="FHIR.markdown"/>
      <element name="profile" elementType="FHIR.canonical"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Implementation" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="url" elementType="FHIR.url"/>
      <element name="custodian" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Messaging" retrievable="false" xsi:type="ClassInfo">
      <element name="endpoint">
         <elementTypeSpecifier elementType="FHIR.CapabilityStatement.Messaging.Endpoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reliableCache" elementType="FHIR.unsignedInt"/>
      <element name="documentation" elementType="FHIR.markdown"/>
      <element name="supportedMessage">
         <elementTypeSpecifier elementType="FHIR.CapabilityStatement.Messaging.SupportedMessage" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Messaging.Endpoint" retrievable="false" xsi:type="ClassInfo">
      <element name="protocol" elementType="FHIR.Coding"/>
      <element name="address" elementType="FHIR.url"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Messaging.SupportedMessage" retrievable="false" xsi:type="ClassInfo">
      <element name="mode" elementType="FHIR.EventCapabilityMode"/>
      <element name="definition" elementType="FHIR.canonical"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Rest" retrievable="false" xsi:type="ClassInfo">
      <element name="mode" elementType="FHIR.RestfulCapabilityMode"/>
      <element name="documentation" elementType="FHIR.markdown"/>
      <element name="security" elementType="FHIR.CapabilityStatement.Rest.Security"/>
      <element name="resource">
         <elementTypeSpecifier elementType="FHIR.CapabilityStatement.Rest.Resource" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="interaction">
         <elementTypeSpecifier elementType="FHIR.CapabilityStatement.Rest.Interaction" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="searchParam">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="CapabilityStatement.Rest.Resource.SearchParam" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="operation">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="CapabilityStatement.Rest.Resource.Operation" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="compartment">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Rest.Interaction" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.SystemRestfulInteraction"/>
      <element name="documentation" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Rest.Resource" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.ResourceType"/>
      <element name="profile" elementType="FHIR.canonical"/>
      <element name="supportedProfile">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="documentation" elementType="FHIR.markdown"/>
      <element name="interaction">
         <elementTypeSpecifier elementType="FHIR.CapabilityStatement.Rest.Resource.Interaction" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="versioning" elementType="FHIR.ResourceVersionPolicy"/>
      <element name="readHistory" elementType="FHIR.boolean"/>
      <element name="updateCreate" elementType="FHIR.boolean"/>
      <element name="conditionalCreate" elementType="FHIR.boolean"/>
      <element name="conditionalRead" elementType="FHIR.ConditionalReadStatus"/>
      <element name="conditionalUpdate" elementType="FHIR.boolean"/>
      <element name="conditionalDelete" elementType="FHIR.ConditionalDeleteStatus"/>
      <element name="referencePolicy">
         <elementTypeSpecifier elementType="FHIR.ReferenceHandlingPolicy" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="searchInclude">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="searchRevInclude">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="searchParam">
         <elementTypeSpecifier elementType="FHIR.CapabilityStatement.Rest.Resource.SearchParam" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="operation">
         <elementTypeSpecifier elementType="FHIR.CapabilityStatement.Rest.Resource.Operation" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Rest.Resource.Interaction" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.TypeRestfulInteraction"/>
      <element name="documentation" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Rest.Resource.Operation" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="definition" elementType="FHIR.canonical"/>
      <element name="documentation" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Rest.Resource.SearchParam" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="definition" elementType="FHIR.canonical"/>
      <element name="type" elementType="FHIR.SearchParamType"/>
      <element name="documentation" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Rest.Security" retrievable="false" xsi:type="ClassInfo">
      <element name="cors" elementType="FHIR.boolean"/>
      <element name="service">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CapabilityStatement.Software" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="releaseDate" elementType="FHIR.dateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CapabilityStatementKind" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="CarePlan" identifier="http://hl7.org/fhir/StructureDefinition/CarePlan" label="CarePlan" retrievable="true" primaryCodePath="category" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="replaces">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.CarePlanStatus"/>
      <element name="intent" elementType="FHIR.CarePlanIntent"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="title" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="author" elementType="FHIR.Reference"/>
      <element name="contributor">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="careTeam">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="addresses">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="supportingInfo">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="goal">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="activity">
         <elementTypeSpecifier elementType="FHIR.CarePlan.Activity" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="performer"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Patient" relatedKeyElement="performer"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="performer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CarePlan.Activity" retrievable="false" xsi:type="ClassInfo">
      <element name="outcomeCodeableConcept">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="outcomeReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="progress">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reference" elementType="FHIR.Reference"/>
      <element name="detail" elementType="FHIR.CarePlan.Activity.Detail"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CarePlan.Activity.Detail" retrievable="false" xsi:type="ClassInfo">
      <element name="kind" elementType="FHIR.CarePlanActivityKind"/>
      <element name="instantiatesCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="goal">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.CarePlanActivityStatus"/>
      <element name="statusReason" elementType="FHIR.CodeableConcept"/>
      <element name="doNotPerform" elementType="FHIR.boolean"/>
      <element name="scheduled">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="product">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="dailyAmount" elementType="FHIR.SimpleQuantity"/>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="description" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CarePlanActivityKind" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CarePlanActivityStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CarePlanIntent" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CarePlanStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="CareTeam" identifier="http://hl7.org/fhir/StructureDefinition/CareTeam" label="CareTeam" retrievable="true" primaryCodePath="category" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.CareTeamStatus"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name" elementType="FHIR.string"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="participant">
         <elementTypeSpecifier elementType="FHIR.CareTeam.Participant" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="managingOrganization">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="member"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Patient" relatedKeyElement="member"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="member"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CareTeam.Participant" retrievable="false" xsi:type="ClassInfo">
      <element name="role">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="member" elementType="FHIR.Reference"/>
      <element name="onBehalfOf" elementType="FHIR.Reference"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CareTeamStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="CatalogEntry" identifier="http://hl7.org/fhir/StructureDefinition/CatalogEntry" label="CatalogEntry" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="orderable" elementType="FHIR.boolean"/>
      <element name="referencedItem" elementType="FHIR.Reference"/>
      <element name="additionalIdentifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="classification">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="validityPeriod" elementType="FHIR.Period"/>
      <element name="validTo" elementType="FHIR.dateTime"/>
      <element name="lastUpdated" elementType="FHIR.dateTime"/>
      <element name="additionalCharacteristic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="additionalClassification">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedEntry">
         <elementTypeSpecifier elementType="FHIR.CatalogEntry.RelatedEntry" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CatalogEntry.RelatedEntry" retrievable="false" xsi:type="ClassInfo">
      <element name="relationtype" elementType="FHIR.CatalogEntryRelationType"/>
      <element name="item" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CatalogEntryRelationType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ChargeItem" identifier="http://hl7.org/fhir/StructureDefinition/ChargeItem" label="ChargeItem" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="definitionUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="definitionCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ChargeItemStatus"/>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="context" elementType="FHIR.Reference"/>
      <element name="occurrence">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.ChargeItem.Performer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="performingOrganization" elementType="FHIR.Reference"/>
      <element name="requestingOrganization" elementType="FHIR.Reference"/>
      <element name="costCenter" elementType="FHIR.Reference"/>
      <element name="quantity" elementType="FHIR.Quantity"/>
      <element name="bodysite">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="factorOverride" elementType="FHIR.decimal"/>
      <element name="priceOverride" elementType="FHIR.Money"/>
      <element name="overrideReason" elementType="FHIR.string"/>
      <element name="enterer" elementType="FHIR.Reference"/>
      <element name="enteredDate" elementType="FHIR.dateTime"/>
      <element name="reason">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="service">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="product">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="account">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="supportingInformation">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="enterer"/>
      <contextRelationship context="Practitioner" relatedKeyElement="actor"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Encounter" relatedKeyElement="context"/>
      <contextRelationship context="Device" relatedKeyElement="enterer"/>
      <contextRelationship context="Device" relatedKeyElement="actor"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="enterer"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ChargeItem.Performer" retrievable="false" xsi:type="ClassInfo">
      <element name="function" elementType="FHIR.CodeableConcept"/>
      <element name="actor" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ChargeItemDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ChargeItemDefinition" label="ChargeItemDefinition" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="derivedFromUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="replaces">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="instance">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="applicability">
         <elementTypeSpecifier elementType="FHIR.ChargeItemDefinition.Applicability" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="propertyGroup">
         <elementTypeSpecifier elementType="FHIR.ChargeItemDefinition.PropertyGroup" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ChargeItemDefinition.Applicability" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="language" elementType="FHIR.string"/>
      <element name="expression" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ChargeItemDefinition.PropertyGroup" retrievable="false" xsi:type="ClassInfo">
      <element name="applicability">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ChargeItemDefinition.Applicability" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="priceComponent">
         <elementTypeSpecifier elementType="FHIR.ChargeItemDefinition.PropertyGroup.PriceComponent" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ChargeItemDefinition.PropertyGroup.PriceComponent" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.ChargeItemDefinitionPriceComponentType"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="amount" elementType="FHIR.Money"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ChargeItemDefinitionPriceComponentType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ChargeItemStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Claim" identifier="http://hl7.org/fhir/StructureDefinition/Claim" label="Claim" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ClaimStatus"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subType" elementType="FHIR.CodeableConcept"/>
      <element name="use" elementType="FHIR.Use"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="billablePeriod" elementType="FHIR.Period"/>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="enterer" elementType="FHIR.Reference"/>
      <element name="insurer" elementType="FHIR.Reference"/>
      <element name="provider" elementType="FHIR.Reference"/>
      <element name="priority" elementType="FHIR.CodeableConcept"/>
      <element name="fundsReserve" elementType="FHIR.CodeableConcept"/>
      <element name="related">
         <elementTypeSpecifier elementType="FHIR.Claim.Related" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="prescription" elementType="FHIR.Reference"/>
      <element name="originalPrescription" elementType="FHIR.Reference"/>
      <element name="payee" elementType="FHIR.Claim.Payee"/>
      <element name="referral" elementType="FHIR.Reference"/>
      <element name="facility" elementType="FHIR.Reference"/>
      <element name="careTeam">
         <elementTypeSpecifier elementType="FHIR.Claim.CareTeam" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="supportingInfo">
         <elementTypeSpecifier elementType="FHIR.Claim.SupportingInfo" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="diagnosis">
         <elementTypeSpecifier elementType="FHIR.Claim.Diagnosis" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="procedure">
         <elementTypeSpecifier elementType="FHIR.Claim.Procedure" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="insurance">
         <elementTypeSpecifier elementType="FHIR.Claim.Insurance" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="accident" elementType="FHIR.Claim.Accident"/>
      <element name="item">
         <elementTypeSpecifier elementType="FHIR.Claim.Item" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="total" elementType="FHIR.Money"/>
      <contextRelationship context="Practitioner" relatedKeyElement="enterer"/>
      <contextRelationship context="Practitioner" relatedKeyElement="provider"/>
      <contextRelationship context="Practitioner" relatedKeyElement="party"/>
      <contextRelationship context="Practitioner" relatedKeyElement="provider"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Patient" relatedKeyElement="party"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="udi"/>
      <contextRelationship context="Device" relatedKeyElement="udi"/>
      <contextRelationship context="Device" relatedKeyElement="udi"/>
      <contextRelationship context="Device" relatedKeyElement="udi"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="party"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.Accident" retrievable="false" xsi:type="ClassInfo">
      <element name="date" elementType="FHIR.date"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="location">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.CareTeam" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="provider" elementType="FHIR.Reference"/>
      <element name="responsible" elementType="FHIR.boolean"/>
      <element name="role" elementType="FHIR.CodeableConcept"/>
      <element name="qualification" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.Diagnosis" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="diagnosis">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="onAdmission" elementType="FHIR.CodeableConcept"/>
      <element name="packageCode" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.Insurance" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="focal" elementType="FHIR.boolean"/>
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="coverage" elementType="FHIR.Reference"/>
      <element name="businessArrangement" elementType="FHIR.string"/>
      <element name="preAuthRef">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="claimResponse" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.Item" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="careTeamSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="diagnosisSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="procedureSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="informationSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="revenue" elementType="FHIR.CodeableConcept"/>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="programCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviced">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="location">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="udi">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="bodySite" elementType="FHIR.CodeableConcept"/>
      <element name="subSite">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="encounter">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.Claim.Item.Detail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.Item.Detail" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="revenue" elementType="FHIR.CodeableConcept"/>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="programCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="udi">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subDetail">
         <elementTypeSpecifier elementType="FHIR.Claim.Item.Detail.SubDetail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.Item.Detail.SubDetail" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="revenue" elementType="FHIR.CodeableConcept"/>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="programCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="udi">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.Payee" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="party" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.Procedure" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="procedure">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="udi">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.Related" retrievable="false" xsi:type="ClassInfo">
      <element name="claim" elementType="FHIR.Reference"/>
      <element name="relationship" elementType="FHIR.CodeableConcept"/>
      <element name="reference" elementType="FHIR.Identifier"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Claim.SupportingInfo" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="timing">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="reason" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ClaimResponse" identifier="http://hl7.org/fhir/StructureDefinition/ClaimResponse" label="ClaimResponse" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ClaimResponseStatus"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subType" elementType="FHIR.CodeableConcept"/>
      <element name="use" elementType="FHIR.Use"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="insurer" elementType="FHIR.Reference"/>
      <element name="requestor" elementType="FHIR.Reference"/>
      <element name="request" elementType="FHIR.Reference"/>
      <element name="outcome" elementType="FHIR.RemittanceOutcome"/>
      <element name="disposition" elementType="FHIR.string"/>
      <element name="preAuthRef" elementType="FHIR.string"/>
      <element name="preAuthPeriod" elementType="FHIR.Period"/>
      <element name="payeeType" elementType="FHIR.CodeableConcept"/>
      <element name="item">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.Item" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="addItem">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.AddItem" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ClaimResponse.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="total">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.Total" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="payment" elementType="FHIR.ClaimResponse.Payment"/>
      <element name="fundsReserve" elementType="FHIR.CodeableConcept"/>
      <element name="formCode" elementType="FHIR.CodeableConcept"/>
      <element name="form" elementType="FHIR.Attachment"/>
      <element name="processNote">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.ProcessNote" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="communicationRequest">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="insurance">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.Insurance" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="error">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.Error" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="requestor"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.AddItem" retrievable="false" xsi:type="ClassInfo">
      <element name="itemSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="detailSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subdetailSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="provider">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="programCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviced">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="location">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="bodySite" elementType="FHIR.CodeableConcept"/>
      <element name="subSite">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ClaimResponse.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.AddItem.Detail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.AddItem.Detail" retrievable="false" xsi:type="ClassInfo">
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ClaimResponse.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="subDetail">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.AddItem.Detail.SubDetail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.AddItem.Detail.SubDetail" retrievable="false" xsi:type="ClassInfo">
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ClaimResponse.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.Error" retrievable="false" xsi:type="ClassInfo">
      <element name="itemSequence" elementType="FHIR.positiveInt"/>
      <element name="detailSequence" elementType="FHIR.positiveInt"/>
      <element name="subDetailSequence" elementType="FHIR.positiveInt"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.Insurance" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="focal" elementType="FHIR.boolean"/>
      <element name="coverage" elementType="FHIR.Reference"/>
      <element name="businessArrangement" elementType="FHIR.string"/>
      <element name="claimResponse" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.Item" retrievable="false" xsi:type="ClassInfo">
      <element name="itemSequence" elementType="FHIR.positiveInt"/>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.Item.Adjudication" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.Item.Detail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.Item.Adjudication" retrievable="false" xsi:type="ClassInfo">
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="reason" elementType="FHIR.CodeableConcept"/>
      <element name="amount" elementType="FHIR.Money"/>
      <element name="value" elementType="FHIR.decimal"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.Item.Detail" retrievable="false" xsi:type="ClassInfo">
      <element name="detailSequence" elementType="FHIR.positiveInt"/>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ClaimResponse.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="subDetail">
         <elementTypeSpecifier elementType="FHIR.ClaimResponse.Item.Detail.SubDetail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.Item.Detail.SubDetail" retrievable="false" xsi:type="ClassInfo">
      <element name="subDetailSequence" elementType="FHIR.positiveInt"/>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ClaimResponse.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.Payment" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="adjustment" elementType="FHIR.Money"/>
      <element name="adjustmentReason" elementType="FHIR.CodeableConcept"/>
      <element name="date" elementType="FHIR.date"/>
      <element name="amount" elementType="FHIR.Money"/>
      <element name="identifier" elementType="FHIR.Identifier"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.ProcessNote" retrievable="false" xsi:type="ClassInfo">
      <element name="number" elementType="FHIR.positiveInt"/>
      <element name="type" elementType="FHIR.NoteType"/>
      <element name="text" elementType="FHIR.string"/>
      <element name="language" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClaimResponse.Total" retrievable="false" xsi:type="ClassInfo">
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="amount" elementType="FHIR.Money"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ClaimResponseStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ClaimStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ClinicalImpression" identifier="http://hl7.org/fhir/StructureDefinition/ClinicalImpression" label="ClinicalImpression" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ClinicalImpressionStatus"/>
      <element name="statusReason" elementType="FHIR.CodeableConcept"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="effective">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="assessor" elementType="FHIR.Reference"/>
      <element name="previous" elementType="FHIR.Reference"/>
      <element name="problem">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="investigation">
         <elementTypeSpecifier elementType="FHIR.ClinicalImpression.Investigation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="protocol">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="summary" elementType="FHIR.string"/>
      <element name="finding">
         <elementTypeSpecifier elementType="FHIR.ClinicalImpression.Finding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="prognosisCodeableConcept">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="prognosisReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="supportingInfo">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="assessor"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClinicalImpression.Finding" retrievable="false" xsi:type="ClassInfo">
      <element name="itemCodeableConcept" elementType="FHIR.CodeableConcept"/>
      <element name="itemReference" elementType="FHIR.Reference"/>
      <element name="basis" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ClinicalImpression.Investigation" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="item">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ClinicalImpressionStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CodeSearchSupport" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="CodeSystem" identifier="http://hl7.org/fhir/StructureDefinition/CodeSystem" label="CodeSystem" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="caseSensitive" elementType="FHIR.boolean"/>
      <element name="valueSet" elementType="FHIR.canonical"/>
      <element name="hierarchyMeaning" elementType="FHIR.CodeSystemHierarchyMeaning"/>
      <element name="compositional" elementType="FHIR.boolean"/>
      <element name="versionNeeded" elementType="FHIR.boolean"/>
      <element name="content" elementType="FHIR.CodeSystemContentMode"/>
      <element name="supplements" elementType="FHIR.canonical"/>
      <element name="count" elementType="FHIR.unsignedInt"/>
      <element name="filter">
         <elementTypeSpecifier elementType="FHIR.CodeSystem.Filter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="property">
         <elementTypeSpecifier elementType="FHIR.CodeSystem.Property" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="concept">
         <elementTypeSpecifier elementType="FHIR.CodeSystem.Concept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CodeSystem.Concept" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.code"/>
      <element name="display" elementType="FHIR.string"/>
      <element name="definition" elementType="FHIR.string"/>
      <element name="designation">
         <elementTypeSpecifier elementType="FHIR.CodeSystem.Concept.Designation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="property">
         <elementTypeSpecifier elementType="FHIR.CodeSystem.Concept.Property" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="concept">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="CodeSystem.Concept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CodeSystem.Concept.Designation" retrievable="false" xsi:type="ClassInfo">
      <element name="language" elementType="FHIR.code"/>
      <element name="use" elementType="FHIR.Coding"/>
      <element name="value" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CodeSystem.Concept.Property" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.code"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CodeSystem.Filter" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.code"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="operator">
         <elementTypeSpecifier elementType="FHIR.FilterOperator" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="value" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CodeSystem.Property" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.code"/>
      <element name="uri" elementType="FHIR.uri"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.PropertyType"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CodeSystemContentMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CodeSystemHierarchyMeaning" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CodeableConcept" identifier="http://hl7.org/fhir/StructureDefinition/CodeableConcept" label="CodeableConcept" retrievable="false" xsi:type="ClassInfo">
      <element name="coding">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="text" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Coding" identifier="http://hl7.org/fhir/StructureDefinition/Coding" label="Coding" retrievable="false" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="system" elementType="FHIR.uri"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="code" elementType="FHIR.code"/>
      <element name="display" elementType="FHIR.string"/>
      <element name="userSelected" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Communication" identifier="http://hl7.org/fhir/StructureDefinition/Communication" label="Communication" retrievable="true" primaryCodePath="category" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="inResponseTo">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.CommunicationStatus"/>
      <element name="statusReason" elementType="FHIR.CodeableConcept"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="priority" elementType="FHIR.CommunicationPriority"/>
      <element name="medium">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="topic" elementType="FHIR.CodeableConcept"/>
      <element name="about">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="sent" elementType="FHIR.dateTime"/>
      <element name="received" elementType="FHIR.dateTime"/>
      <element name="recipient">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="sender" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="payload">
         <elementTypeSpecifier elementType="FHIR.Communication.Payload" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="sender"/>
      <contextRelationship context="Practitioner" relatedKeyElement="recipient"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="sender"/>
      <contextRelationship context="Patient" relatedKeyElement="recipient"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="sender"/>
      <contextRelationship context="Device" relatedKeyElement="recipient"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="sender"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="recipient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Communication.Payload" retrievable="false" xsi:type="ClassInfo">
      <element name="content">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CommunicationPriority" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="CommunicationRequest" identifier="http://hl7.org/fhir/StructureDefinition/CommunicationRequest" label="CommunicationRequest" retrievable="true" primaryCodePath="category" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="replaces">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="groupIdentifier" elementType="FHIR.Identifier"/>
      <element name="status" elementType="FHIR.CommunicationRequestStatus"/>
      <element name="statusReason" elementType="FHIR.CodeableConcept"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="priority" elementType="FHIR.CommunicationPriority"/>
      <element name="doNotPerform" elementType="FHIR.boolean"/>
      <element name="medium">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="about">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="payload">
         <elementTypeSpecifier elementType="FHIR.CommunicationRequest.Payload" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="occurrence">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="authoredOn" elementType="FHIR.dateTime"/>
      <element name="requester" elementType="FHIR.Reference"/>
      <element name="recipient">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="sender" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="sender"/>
      <contextRelationship context="Practitioner" relatedKeyElement="recipient"/>
      <contextRelationship context="Practitioner" relatedKeyElement="requester"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="sender"/>
      <contextRelationship context="Patient" relatedKeyElement="recipient"/>
      <contextRelationship context="Patient" relatedKeyElement="requester"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="sender"/>
      <contextRelationship context="Device" relatedKeyElement="recipient"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="sender"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="recipient"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="requester"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CommunicationRequest.Payload" retrievable="false" xsi:type="ClassInfo">
      <element name="content">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CommunicationRequestStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CommunicationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CompartmentCode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="CompartmentDefinition" identifier="http://hl7.org/fhir/StructureDefinition/CompartmentDefinition" label="CompartmentDefinition" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="code" elementType="FHIR.CompartmentType"/>
      <element name="search" elementType="FHIR.boolean"/>
      <element name="resource">
         <elementTypeSpecifier elementType="FHIR.CompartmentDefinition.Resource" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CompartmentDefinition.Resource" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.ResourceType"/>
      <element name="param">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="documentation" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CompartmentType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Composition" identifier="http://hl7.org/fhir/StructureDefinition/Composition" label="Composition" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="status" elementType="FHIR.CompositionStatus"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="title" elementType="FHIR.string"/>
      <element name="confidentiality" elementType="FHIR.DocumentConfidentiality"/>
      <element name="attester">
         <elementTypeSpecifier elementType="FHIR.Composition.Attester" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="custodian" elementType="FHIR.Reference"/>
      <element name="relatesTo">
         <elementTypeSpecifier elementType="FHIR.Composition.RelatesTo" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="event">
         <elementTypeSpecifier elementType="FHIR.Composition.Event" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="section">
         <elementTypeSpecifier elementType="FHIR.Composition.Section" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="subject"/>
      <contextRelationship context="Practitioner" relatedKeyElement="author"/>
      <contextRelationship context="Practitioner" relatedKeyElement="party"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="author"/>
      <contextRelationship context="Patient" relatedKeyElement="party"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="author"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="author"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Composition.Attester" retrievable="false" xsi:type="ClassInfo">
      <element name="mode" elementType="FHIR.CompositionAttestationMode"/>
      <element name="time" elementType="FHIR.dateTime"/>
      <element name="party" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Composition.Event" retrievable="false" xsi:type="ClassInfo">
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="period" elementType="FHIR.Period"/>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Composition.RelatesTo" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.DocumentRelationshipType"/>
      <element name="target">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Identifier" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Composition.Section" retrievable="false" xsi:type="ClassInfo">
      <element name="title" elementType="FHIR.string"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="focus" elementType="FHIR.Reference"/>
      <element name="text" elementType="FHIR.Narrative"/>
      <element name="mode" elementType="FHIR.SectionMode"/>
      <element name="orderedBy" elementType="FHIR.CodeableConcept"/>
      <element name="entry">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="emptyReason" elementType="FHIR.CodeableConcept"/>
      <element name="section">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="Composition.Section" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CompositionAttestationMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CompositionStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ConceptMap" identifier="http://hl7.org/fhir/StructureDefinition/ConceptMap" label="ConceptMap" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="source">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="target">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="group">
         <elementTypeSpecifier elementType="FHIR.ConceptMap.Group" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ConceptMap.Group" retrievable="false" xsi:type="ClassInfo">
      <element name="source" elementType="FHIR.uri"/>
      <element name="sourceVersion" elementType="FHIR.string"/>
      <element name="target" elementType="FHIR.uri"/>
      <element name="targetVersion" elementType="FHIR.string"/>
      <element name="element">
         <elementTypeSpecifier elementType="FHIR.ConceptMap.Group.Element" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="unmapped" elementType="FHIR.ConceptMap.Group.Unmapped"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ConceptMap.Group.Element" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.code"/>
      <element name="display" elementType="FHIR.string"/>
      <element name="target">
         <elementTypeSpecifier elementType="FHIR.ConceptMap.Group.Element.Target" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ConceptMap.Group.Element.Target" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.code"/>
      <element name="display" elementType="FHIR.string"/>
      <element name="equivalence" elementType="FHIR.ConceptMapEquivalence"/>
      <element name="comment" elementType="FHIR.string"/>
      <element name="dependsOn">
         <elementTypeSpecifier elementType="FHIR.ConceptMap.Group.Element.Target.DependsOn" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="product">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ConceptMap.Group.Element.Target.DependsOn" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ConceptMap.Group.Element.Target.DependsOn" retrievable="false" xsi:type="ClassInfo">
      <element name="property" elementType="FHIR.uri"/>
      <element name="system" elementType="FHIR.canonical"/>
      <element name="value" elementType="FHIR.string"/>
      <element name="display" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ConceptMap.Group.Unmapped" retrievable="false" xsi:type="ClassInfo">
      <element name="mode" elementType="FHIR.ConceptMapGroupUnmappedMode"/>
      <element name="code" elementType="FHIR.code"/>
      <element name="display" elementType="FHIR.string"/>
      <element name="url" elementType="FHIR.canonical"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ConceptMapEquivalence" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ConceptMapGroupUnmappedMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Condition" identifier="http://hl7.org/fhir/StructureDefinition/Condition" label="Condition" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="clinicalStatus" elementType="FHIR.CodeableConcept"/>
      <element name="verificationStatus" elementType="FHIR.CodeableConcept"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="severity" elementType="FHIR.CodeableConcept"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="bodySite">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="onset">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="abatement">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="recordedDate" elementType="FHIR.dateTime"/>
      <element name="recorder" elementType="FHIR.Reference"/>
      <element name="asserter" elementType="FHIR.Reference"/>
      <element name="stage">
         <elementTypeSpecifier elementType="FHIR.Condition.Stage" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="evidence">
         <elementTypeSpecifier elementType="FHIR.Condition.Evidence" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="asserter"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Patient" relatedKeyElement="asserter"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="asserter"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Condition.Evidence" retrievable="false" xsi:type="ClassInfo">
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Condition.Stage" retrievable="false" xsi:type="ClassInfo">
      <element name="summary" elementType="FHIR.CodeableConcept"/>
      <element name="assessment">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ConditionalDeleteStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ConditionalReadStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Consent" identifier="http://hl7.org/fhir/StructureDefinition/Consent" label="Consent" retrievable="true" primaryCodePath="category" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ConsentState"/>
      <element name="scope" elementType="FHIR.CodeableConcept"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="dateTime" elementType="FHIR.dateTime"/>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="organization">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="source">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="policy">
         <elementTypeSpecifier elementType="FHIR.Consent.Policy" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="policyRule" elementType="FHIR.CodeableConcept"/>
      <element name="verification">
         <elementTypeSpecifier elementType="FHIR.Consent.Verification" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="provision" elementType="FHIR.Consent.Provision"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Consent.Policy" retrievable="false" xsi:type="ClassInfo">
      <element name="authority" elementType="FHIR.uri"/>
      <element name="uri" elementType="FHIR.uri"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Consent.Provision" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.ConsentProvisionType"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="actor">
         <elementTypeSpecifier elementType="FHIR.Consent.Provision.Actor" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="action">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="securityLabel">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="class">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="dataPeriod" elementType="FHIR.Period"/>
      <element name="data">
         <elementTypeSpecifier elementType="FHIR.Consent.Provision.Data" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="provision">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="Consent.Provision" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Consent.Provision.Actor" retrievable="false" xsi:type="ClassInfo">
      <element name="role" elementType="FHIR.CodeableConcept"/>
      <element name="reference" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Consent.Provision.Data" retrievable="false" xsi:type="ClassInfo">
      <element name="meaning" elementType="FHIR.ConsentDataMeaning"/>
      <element name="reference" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Consent.Verification" retrievable="false" xsi:type="ClassInfo">
      <element name="verified" elementType="FHIR.boolean"/>
      <element name="verifiedWith" elementType="FHIR.Reference"/>
      <element name="verificationDate" elementType="FHIR.dateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ConsentDataMeaning" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ConsentProvisionType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ConsentState" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ConstraintSeverity" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ContactDetail" identifier="http://hl7.org/fhir/StructureDefinition/ContactDetail" label="ContactDetail" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ContactPoint" identifier="http://hl7.org/fhir/StructureDefinition/ContactPoint" label="ContactPoint" retrievable="false" xsi:type="ClassInfo">
      <element name="system" elementType="FHIR.ContactPointSystem"/>
      <element name="value" elementType="FHIR.string"/>
      <element name="use" elementType="FHIR.ContactPointUse"/>
      <element name="rank" elementType="FHIR.positiveInt"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ContactPointSystem" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ContactPointUse" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Contract" identifier="http://hl7.org/fhir/StructureDefinition/Contract" label="Contract" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="url" elementType="FHIR.uri"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.ContractStatus"/>
      <element name="legalState" elementType="FHIR.CodeableConcept"/>
      <element name="instantiatesCanonical" elementType="FHIR.Reference"/>
      <element name="instantiatesUri" elementType="FHIR.uri"/>
      <element name="contentDerivative" elementType="FHIR.CodeableConcept"/>
      <element name="issued" elementType="FHIR.dateTime"/>
      <element name="applies" elementType="FHIR.Period"/>
      <element name="expirationType" elementType="FHIR.CodeableConcept"/>
      <element name="subject">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="authority">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="domain">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="site">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="subtitle" elementType="FHIR.string"/>
      <element name="alias">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author" elementType="FHIR.Reference"/>
      <element name="scope" elementType="FHIR.CodeableConcept"/>
      <element name="topic">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="contentDefinition" elementType="FHIR.Contract.ContentDefinition"/>
      <element name="term">
         <elementTypeSpecifier elementType="FHIR.Contract.Term" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="supportingInfo">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relevantHistory">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="signer">
         <elementTypeSpecifier elementType="FHIR.Contract.Signer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="friendly">
         <elementTypeSpecifier elementType="FHIR.Contract.Friendly" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="legal">
         <elementTypeSpecifier elementType="FHIR.Contract.Legal" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="rule">
         <elementTypeSpecifier elementType="FHIR.Contract.Rule" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="legallyBinding">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.ContentDefinition" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subType" elementType="FHIR.CodeableConcept"/>
      <element name="publisher" elementType="FHIR.Reference"/>
      <element name="publicationDate" elementType="FHIR.dateTime"/>
      <element name="publicationStatus" elementType="FHIR.ContractPublicationStatus"/>
      <element name="copyright" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Friendly" retrievable="false" xsi:type="ClassInfo">
      <element name="content">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Legal" retrievable="false" xsi:type="ClassInfo">
      <element name="content">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Rule" retrievable="false" xsi:type="ClassInfo">
      <element name="content">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Signer" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.Coding"/>
      <element name="party" elementType="FHIR.Reference"/>
      <element name="signature">
         <elementTypeSpecifier elementType="FHIR.Signature" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Term" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="issued" elementType="FHIR.dateTime"/>
      <element name="applies" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subType" elementType="FHIR.CodeableConcept"/>
      <element name="text" elementType="FHIR.string"/>
      <element name="securityLabel">
         <elementTypeSpecifier elementType="FHIR.Contract.Term.SecurityLabel" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="offer" elementType="FHIR.Contract.Term.Offer"/>
      <element name="asset">
         <elementTypeSpecifier elementType="FHIR.Contract.Term.Asset" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="action">
         <elementTypeSpecifier elementType="FHIR.Contract.Term.Action" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="group">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="Contract.Term" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Term.Action" retrievable="false" xsi:type="ClassInfo">
      <element name="doNotPerform" elementType="FHIR.boolean"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subject">
         <elementTypeSpecifier elementType="FHIR.Contract.Term.Action.Subject" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="intent" elementType="FHIR.CodeableConcept"/>
      <element name="linkId">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.CodeableConcept"/>
      <element name="context" elementType="FHIR.Reference"/>
      <element name="contextLinkId">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="occurrence">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="requester">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="requesterLinkId">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="performerType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="performerRole" elementType="FHIR.CodeableConcept"/>
      <element name="performer" elementType="FHIR.Reference"/>
      <element name="performerLinkId">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reason">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonLinkId">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="securityLabelNumber">
         <elementTypeSpecifier elementType="FHIR.unsignedInt" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Term.Action.Subject" retrievable="false" xsi:type="ClassInfo">
      <element name="reference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="role" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Term.Asset" retrievable="false" xsi:type="ClassInfo">
      <element name="scope" elementType="FHIR.CodeableConcept"/>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="typeReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subtype">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relationship" elementType="FHIR.Coding"/>
      <element name="context">
         <elementTypeSpecifier elementType="FHIR.Contract.Term.Asset.Context" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="condition" elementType="FHIR.string"/>
      <element name="periodType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="period">
         <elementTypeSpecifier elementType="FHIR.Period" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="usePeriod">
         <elementTypeSpecifier elementType="FHIR.Period" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="text" elementType="FHIR.string"/>
      <element name="linkId">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="answer">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="Contract.Term.Offer.Answer" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="securityLabelNumber">
         <elementTypeSpecifier elementType="FHIR.unsignedInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="valuedItem">
         <elementTypeSpecifier elementType="FHIR.Contract.Term.Asset.ValuedItem" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Term.Asset.Context" retrievable="false" xsi:type="ClassInfo">
      <element name="reference" elementType="FHIR.Reference"/>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="text" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Term.Asset.ValuedItem" retrievable="false" xsi:type="ClassInfo">
      <element name="entity">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="effectiveTime" elementType="FHIR.dateTime"/>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="points" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="payment" elementType="FHIR.string"/>
      <element name="paymentDate" elementType="FHIR.dateTime"/>
      <element name="responsible" elementType="FHIR.Reference"/>
      <element name="recipient" elementType="FHIR.Reference"/>
      <element name="linkId">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="securityLabelNumber">
         <elementTypeSpecifier elementType="FHIR.unsignedInt" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Term.Offer" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="party">
         <elementTypeSpecifier elementType="FHIR.Contract.Term.Offer.Party" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="topic" elementType="FHIR.Reference"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="decision" elementType="FHIR.CodeableConcept"/>
      <element name="decisionMode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="answer">
         <elementTypeSpecifier elementType="FHIR.Contract.Term.Offer.Answer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="text" elementType="FHIR.string"/>
      <element name="linkId">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="securityLabelNumber">
         <elementTypeSpecifier elementType="FHIR.unsignedInt" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Term.Offer.Answer" retrievable="false" xsi:type="ClassInfo">
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Term.Offer.Party" retrievable="false" xsi:type="ClassInfo">
      <element name="reference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="role" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Contract.Term.SecurityLabel" retrievable="false" xsi:type="ClassInfo">
      <element name="number">
         <elementTypeSpecifier elementType="FHIR.unsignedInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="classification" elementType="FHIR.Coding"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="control">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ContractPublicationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ContractStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Contributor" identifier="http://hl7.org/fhir/StructureDefinition/Contributor" label="Contributor" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.ContributorType"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ContributorType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Quantity" namespace="FHIR" name="Count" identifier="http://hl7.org/fhir/StructureDefinition/Count" label="Count" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Coverage" identifier="http://hl7.org/fhir/StructureDefinition/Coverage" label="Coverage" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.CoverageStatus"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="policyHolder" elementType="FHIR.Reference"/>
      <element name="subscriber" elementType="FHIR.Reference"/>
      <element name="subscriberId" elementType="FHIR.string"/>
      <element name="beneficiary" elementType="FHIR.Reference"/>
      <element name="dependent" elementType="FHIR.string"/>
      <element name="relationship" elementType="FHIR.CodeableConcept"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="payor">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="class">
         <elementTypeSpecifier elementType="FHIR.Coverage.Class" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="order" elementType="FHIR.positiveInt"/>
      <element name="network" elementType="FHIR.string"/>
      <element name="costToBeneficiary">
         <elementTypeSpecifier elementType="FHIR.Coverage.CostToBeneficiary" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subrogation" elementType="FHIR.boolean"/>
      <element name="contract">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Patient" relatedKeyElement="policyHolder"/>
      <contextRelationship context="Patient" relatedKeyElement="subscriber"/>
      <contextRelationship context="Patient" relatedKeyElement="beneficiary"/>
      <contextRelationship context="Patient" relatedKeyElement="payor"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="policyHolder"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="subscriber"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="payor"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Coverage.Class" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="value" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Coverage.CostToBeneficiary" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="SimpleQuantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="exception">
         <elementTypeSpecifier elementType="FHIR.Coverage.CostToBeneficiary.Exception" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Coverage.CostToBeneficiary.Exception" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="CoverageEligibilityRequest" identifier="http://hl7.org/fhir/StructureDefinition/CoverageEligibilityRequest" label="CoverageEligibilityRequest" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.EligibilityRequestStatus"/>
      <element name="priority" elementType="FHIR.CodeableConcept"/>
      <element name="purpose">
         <elementTypeSpecifier elementType="FHIR.EligibilityRequestPurpose" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="serviced">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="enterer" elementType="FHIR.Reference"/>
      <element name="provider" elementType="FHIR.Reference"/>
      <element name="insurer" elementType="FHIR.Reference"/>
      <element name="facility" elementType="FHIR.Reference"/>
      <element name="supportingInfo">
         <elementTypeSpecifier elementType="FHIR.CoverageEligibilityRequest.SupportingInfo" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="insurance">
         <elementTypeSpecifier elementType="FHIR.CoverageEligibilityRequest.Insurance" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="item">
         <elementTypeSpecifier elementType="FHIR.CoverageEligibilityRequest.Item" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="enterer"/>
      <contextRelationship context="Practitioner" relatedKeyElement="provider"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CoverageEligibilityRequest.Insurance" retrievable="false" xsi:type="ClassInfo">
      <element name="focal" elementType="FHIR.boolean"/>
      <element name="coverage" elementType="FHIR.Reference"/>
      <element name="businessArrangement" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CoverageEligibilityRequest.Item" retrievable="false" xsi:type="ClassInfo">
      <element name="supportingInfoSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="provider" elementType="FHIR.Reference"/>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="facility" elementType="FHIR.Reference"/>
      <element name="diagnosis">
         <elementTypeSpecifier elementType="FHIR.CoverageEligibilityRequest.Item.Diagnosis" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CoverageEligibilityRequest.Item.Diagnosis" retrievable="false" xsi:type="ClassInfo">
      <element name="diagnosis">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CoverageEligibilityRequest.SupportingInfo" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="information" elementType="FHIR.Reference"/>
      <element name="appliesToAll" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="CoverageEligibilityResponse" identifier="http://hl7.org/fhir/StructureDefinition/CoverageEligibilityResponse" label="CoverageEligibilityResponse" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.EligibilityResponseStatus"/>
      <element name="purpose">
         <elementTypeSpecifier elementType="FHIR.EligibilityResponsePurpose" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="serviced">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="requestor" elementType="FHIR.Reference"/>
      <element name="request" elementType="FHIR.Reference"/>
      <element name="outcome" elementType="FHIR.RemittanceOutcome"/>
      <element name="disposition" elementType="FHIR.string"/>
      <element name="insurer" elementType="FHIR.Reference"/>
      <element name="insurance">
         <elementTypeSpecifier elementType="FHIR.CoverageEligibilityResponse.Insurance" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="preAuthRef" elementType="FHIR.string"/>
      <element name="form" elementType="FHIR.CodeableConcept"/>
      <element name="error">
         <elementTypeSpecifier elementType="FHIR.CoverageEligibilityResponse.Error" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="requestor"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CoverageEligibilityResponse.Error" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CoverageEligibilityResponse.Insurance" retrievable="false" xsi:type="ClassInfo">
      <element name="coverage" elementType="FHIR.Reference"/>
      <element name="inforce" elementType="FHIR.boolean"/>
      <element name="benefitPeriod" elementType="FHIR.Period"/>
      <element name="item">
         <elementTypeSpecifier elementType="FHIR.CoverageEligibilityResponse.Insurance.Item" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CoverageEligibilityResponse.Insurance.Item" retrievable="false" xsi:type="ClassInfo">
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="provider" elementType="FHIR.Reference"/>
      <element name="excluded" elementType="FHIR.boolean"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="network" elementType="FHIR.CodeableConcept"/>
      <element name="unit" elementType="FHIR.CodeableConcept"/>
      <element name="term" elementType="FHIR.CodeableConcept"/>
      <element name="benefit">
         <elementTypeSpecifier elementType="FHIR.CoverageEligibilityResponse.Insurance.Item.Benefit" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="authorizationRequired" elementType="FHIR.boolean"/>
      <element name="authorizationSupporting">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="authorizationUrl" elementType="FHIR.uri"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="CoverageEligibilityResponse.Insurance.Item.Benefit" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="allowed">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="used">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CoverageStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="CurrencyCode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DataRequirement" identifier="http://hl7.org/fhir/StructureDefinition/DataRequirement" label="DataRequirement" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.FHIRAllTypes"/>
      <element name="profile">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="mustSupport">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="codeFilter">
         <elementTypeSpecifier elementType="FHIR.DataRequirement.CodeFilter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="dateFilter">
         <elementTypeSpecifier elementType="FHIR.DataRequirement.DateFilter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="limit" elementType="FHIR.positiveInt"/>
      <element name="sort">
         <elementTypeSpecifier elementType="FHIR.DataRequirement.Sort" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DataRequirement.CodeFilter" retrievable="false" xsi:type="ClassInfo">
      <element name="path" elementType="FHIR.string"/>
      <element name="searchParam" elementType="FHIR.string"/>
      <element name="valueSet" elementType="FHIR.canonical"/>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DataRequirement.DateFilter" retrievable="false" xsi:type="ClassInfo">
      <element name="path" elementType="FHIR.string"/>
      <element name="searchParam" elementType="FHIR.string"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DataRequirement.Sort" retrievable="false" xsi:type="ClassInfo">
      <element name="path" elementType="FHIR.string"/>
      <element name="direction" elementType="FHIR.SortDirection"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DayOfWeek" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DaysOfWeek" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="DetectedIssue" identifier="http://hl7.org/fhir/StructureDefinition/DetectedIssue" label="DetectedIssue" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.DetectedIssueStatus"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="severity" elementType="FHIR.DetectedIssueSeverity"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="identified">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="author" elementType="FHIR.Reference"/>
      <element name="implicated">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="evidence">
         <elementTypeSpecifier elementType="FHIR.DetectedIssue.Evidence" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="detail" elementType="FHIR.string"/>
      <element name="reference" elementType="FHIR.uri"/>
      <element name="mitigation">
         <elementTypeSpecifier elementType="FHIR.DetectedIssue.Mitigation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="author"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Device" relatedKeyElement="author"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DetectedIssue.Evidence" retrievable="false" xsi:type="ClassInfo">
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DetectedIssue.Mitigation" retrievable="false" xsi:type="ClassInfo">
      <element name="action" elementType="FHIR.CodeableConcept"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="author" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DetectedIssueSeverity" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DetectedIssueStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Device" identifier="http://hl7.org/fhir/StructureDefinition/Device" label="Device" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="definition" elementType="FHIR.Reference"/>
      <element name="udiCarrier">
         <elementTypeSpecifier elementType="FHIR.Device.UdiCarrier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.FHIRDeviceStatus"/>
      <element name="statusReason">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="distinctIdentifier" elementType="FHIR.string"/>
      <element name="manufacturer" elementType="FHIR.string"/>
      <element name="manufactureDate" elementType="FHIR.dateTime"/>
      <element name="expirationDate" elementType="FHIR.dateTime"/>
      <element name="lotNumber" elementType="FHIR.string"/>
      <element name="serialNumber" elementType="FHIR.string"/>
      <element name="deviceName">
         <elementTypeSpecifier elementType="FHIR.Device.DeviceName" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="modelNumber" elementType="FHIR.string"/>
      <element name="partNumber" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="specialization">
         <elementTypeSpecifier elementType="FHIR.Device.Specialization" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version">
         <elementTypeSpecifier elementType="FHIR.Device.Version" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="property">
         <elementTypeSpecifier elementType="FHIR.Device.Property" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="owner" elementType="FHIR.Reference"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="url" elementType="FHIR.uri"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="safety">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="parent" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Device.DeviceName" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.DeviceNameType"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Device.Property" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="valueQuantity">
         <elementTypeSpecifier elementType="FHIR.Quantity" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="valueCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Device.Specialization" retrievable="false" xsi:type="ClassInfo">
      <element name="systemType" elementType="FHIR.CodeableConcept"/>
      <element name="version" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Device.UdiCarrier" retrievable="false" xsi:type="ClassInfo">
      <element name="deviceIdentifier" elementType="FHIR.string"/>
      <element name="issuer" elementType="FHIR.uri"/>
      <element name="jurisdiction" elementType="FHIR.uri"/>
      <element name="carrierAIDC" elementType="FHIR.base64Binary"/>
      <element name="carrierHRF" elementType="FHIR.string"/>
      <element name="entryType" elementType="FHIR.UDIEntryType"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Device.Version" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="component" elementType="FHIR.Identifier"/>
      <element name="value" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="DeviceDefinition" identifier="http://hl7.org/fhir/StructureDefinition/DeviceDefinition" label="DeviceDefinition" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="udiDeviceIdentifier">
         <elementTypeSpecifier elementType="FHIR.DeviceDefinition.UdiDeviceIdentifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="manufacturer">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="deviceName">
         <elementTypeSpecifier elementType="FHIR.DeviceDefinition.DeviceName" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="modelNumber" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="specialization">
         <elementTypeSpecifier elementType="FHIR.DeviceDefinition.Specialization" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="safety">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="shelfLifeStorage">
         <elementTypeSpecifier elementType="FHIR.ProductShelfLife" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="physicalCharacteristics" elementType="FHIR.ProdCharacteristic"/>
      <element name="languageCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="capability">
         <elementTypeSpecifier elementType="FHIR.DeviceDefinition.Capability" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="property">
         <elementTypeSpecifier elementType="FHIR.DeviceDefinition.Property" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="owner" elementType="FHIR.Reference"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="url" elementType="FHIR.uri"/>
      <element name="onlineInformation" elementType="FHIR.uri"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.Quantity"/>
      <element name="parentDevice" elementType="FHIR.Reference"/>
      <element name="material">
         <elementTypeSpecifier elementType="FHIR.DeviceDefinition.Material" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DeviceDefinition.Capability" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="description">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DeviceDefinition.DeviceName" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.DeviceNameType"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DeviceDefinition.Material" retrievable="false" xsi:type="ClassInfo">
      <element name="substance" elementType="FHIR.CodeableConcept"/>
      <element name="alternate" elementType="FHIR.boolean"/>
      <element name="allergenicIndicator" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DeviceDefinition.Property" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="valueQuantity">
         <elementTypeSpecifier elementType="FHIR.Quantity" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="valueCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DeviceDefinition.Specialization" retrievable="false" xsi:type="ClassInfo">
      <element name="systemType" elementType="FHIR.string"/>
      <element name="version" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DeviceDefinition.UdiDeviceIdentifier" retrievable="false" xsi:type="ClassInfo">
      <element name="deviceIdentifier" elementType="FHIR.string"/>
      <element name="issuer" elementType="FHIR.uri"/>
      <element name="jurisdiction" elementType="FHIR.uri"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="DeviceMetric" identifier="http://hl7.org/fhir/StructureDefinition/DeviceMetric" label="DeviceMetric" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="unit" elementType="FHIR.CodeableConcept"/>
      <element name="source" elementType="FHIR.Reference"/>
      <element name="parent" elementType="FHIR.Reference"/>
      <element name="operationalStatus" elementType="FHIR.DeviceMetricOperationalStatus"/>
      <element name="color" elementType="FHIR.DeviceMetricColor"/>
      <element name="category" elementType="FHIR.DeviceMetricCategory"/>
      <element name="measurementPeriod" elementType="FHIR.Timing"/>
      <element name="calibration">
         <elementTypeSpecifier elementType="FHIR.DeviceMetric.Calibration" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DeviceMetric.Calibration" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.DeviceMetricCalibrationType"/>
      <element name="state" elementType="FHIR.DeviceMetricCalibrationState"/>
      <element name="time" elementType="FHIR.instant"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DeviceMetricCalibrationState" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DeviceMetricCalibrationType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DeviceMetricCategory" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DeviceMetricColor" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DeviceMetricOperationalStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DeviceNameType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="DeviceRequest" identifier="http://hl7.org/fhir/StructureDefinition/DeviceRequest" label="DeviceRequest" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="priorRequest">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="groupIdentifier" elementType="FHIR.Identifier"/>
      <element name="status" elementType="FHIR.DeviceRequestStatus"/>
      <element name="intent" elementType="FHIR.RequestIntent"/>
      <element name="priority" elementType="FHIR.RequestPriority"/>
      <element name="code">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="parameter">
         <elementTypeSpecifier elementType="FHIR.DeviceRequest.Parameter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="occurrence">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="authoredOn" elementType="FHIR.dateTime"/>
      <element name="requester" elementType="FHIR.Reference"/>
      <element name="performerType" elementType="FHIR.CodeableConcept"/>
      <element name="performer" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="insurance">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="supportingInfo">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relevantHistory">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="requester"/>
      <contextRelationship context="Practitioner" relatedKeyElement="performer"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="performer"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="code as Reference)"/>
      <contextRelationship context="Device" relatedKeyElement="subject"/>
      <contextRelationship context="Device" relatedKeyElement="requester"/>
      <contextRelationship context="Device" relatedKeyElement="performer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DeviceRequest.Parameter" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DeviceRequestStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="DeviceUseStatement" identifier="http://hl7.org/fhir/StructureDefinition/DeviceUseStatement" label="DeviceUseStatement" retrievable="true" primaryCodePath="device.code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.DeviceUseStatementStatus"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="derivedFrom">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="timing">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="recordedOn" elementType="FHIR.dateTime"/>
      <element name="source" elementType="FHIR.Reference"/>
      <element name="device" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="bodySite" elementType="FHIR.CodeableConcept"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Device" relatedKeyElement="device"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DeviceUseStatementStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="DiagnosticReport" identifier="http://hl7.org/fhir/StructureDefinition/DiagnosticReport" label="DiagnosticReport" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.DiagnosticReportStatus"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="effective">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="issued" elementType="FHIR.instant"/>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="resultsInterpreter">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specimen">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="result">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="imagingStudy">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="media">
         <elementTypeSpecifier elementType="FHIR.DiagnosticReport.Media" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="conclusion" elementType="FHIR.string"/>
      <element name="conclusionCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="presentedForm">
         <elementTypeSpecifier elementType="FHIR.Attachment" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="performer"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="subject"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DiagnosticReport.Media" retrievable="false" xsi:type="ClassInfo">
      <element name="comment" elementType="FHIR.string"/>
      <element name="link" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DiagnosticReportStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DiscriminatorType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Quantity" namespace="FHIR" name="Distance" identifier="http://hl7.org/fhir/StructureDefinition/Distance" label="Distance" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DocumentConfidentiality" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="DocumentManifest" identifier="http://hl7.org/fhir/StructureDefinition/DocumentManifest" label="DocumentManifest" retrievable="true" xsi:type="ClassInfo">
      <element name="masterIdentifier" elementType="FHIR.Identifier"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.DocumentReferenceStatus"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="recipient">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="source" elementType="FHIR.uri"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="content">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="related">
         <elementTypeSpecifier elementType="FHIR.DocumentManifest.Related" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="subject"/>
      <contextRelationship context="Practitioner" relatedKeyElement="author"/>
      <contextRelationship context="Practitioner" relatedKeyElement="recipient"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="author"/>
      <contextRelationship context="Patient" relatedKeyElement="recipient"/>
      <contextRelationship context="Encounter" relatedKeyElement="ref"/>
      <contextRelationship context="Device" relatedKeyElement="subject"/>
      <contextRelationship context="Device" relatedKeyElement="author"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="author"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="recipient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DocumentManifest.Related" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="ref" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DocumentMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="DocumentReference" identifier="http://hl7.org/fhir/StructureDefinition/DocumentReference" label="DocumentReference" retrievable="true" xsi:type="ClassInfo">
      <element name="masterIdentifier" elementType="FHIR.Identifier"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.DocumentReferenceStatus"/>
      <element name="docStatus" elementType="FHIR.ReferredDocumentStatus"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="date" elementType="FHIR.instant"/>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="authenticator" elementType="FHIR.Reference"/>
      <element name="custodian" elementType="FHIR.Reference"/>
      <element name="relatesTo">
         <elementTypeSpecifier elementType="FHIR.DocumentReference.RelatesTo" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="securityLabel">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="content">
         <elementTypeSpecifier elementType="FHIR.DocumentReference.Content" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="context" elementType="FHIR.DocumentReference.Context"/>
      <contextRelationship context="Practitioner" relatedKeyElement="subject"/>
      <contextRelationship context="Practitioner" relatedKeyElement="author"/>
      <contextRelationship context="Practitioner" relatedKeyElement="authenticator"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="author"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="subject"/>
      <contextRelationship context="Device" relatedKeyElement="author"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="author"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DocumentReference.Content" retrievable="false" xsi:type="ClassInfo">
      <element name="attachment" elementType="FHIR.Attachment"/>
      <element name="format" elementType="FHIR.Coding"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DocumentReference.Context" retrievable="false" xsi:type="ClassInfo">
      <element name="encounter">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="event">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="period" elementType="FHIR.Period"/>
      <element name="facilityType" elementType="FHIR.CodeableConcept"/>
      <element name="practiceSetting" elementType="FHIR.CodeableConcept"/>
      <element name="sourcePatientInfo" elementType="FHIR.Reference"/>
      <element name="related">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="DocumentReference.RelatesTo" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.DocumentRelationshipType"/>
      <element name="target" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DocumentReferenceStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="DocumentRelationshipType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Resource" namespace="FHIR" name="DomainResource" identifier="http://hl7.org/fhir/StructureDefinition/DomainResource" label="DomainResource" retrievable="true" xsi:type="ClassInfo">
      <element name="text" elementType="FHIR.Narrative"/>
      <element name="contained">
         <elementTypeSpecifier elementType="FHIR.Resource" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="extension">
         <elementTypeSpecifier elementType="FHIR.Extension" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="modifierExtension">
         <elementTypeSpecifier elementType="FHIR.Extension" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Dosage" identifier="http://hl7.org/fhir/StructureDefinition/Dosage" label="Dosage" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.integer"/>
      <element name="text" elementType="FHIR.string"/>
      <element name="additionalInstruction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="patientInstruction" elementType="FHIR.string"/>
      <element name="timing" elementType="FHIR.Timing"/>
      <element name="asNeeded">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="site" elementType="FHIR.CodeableConcept"/>
      <element name="route" elementType="FHIR.CodeableConcept"/>
      <element name="method" elementType="FHIR.CodeableConcept"/>
      <element name="doseAndRate">
         <elementTypeSpecifier elementType="FHIR.Dosage.DoseAndRate" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="maxDosePerPeriod" elementType="FHIR.Ratio"/>
      <element name="maxDosePerAdministration" elementType="FHIR.SimpleQuantity"/>
      <element name="maxDosePerLifetime" elementType="FHIR.SimpleQuantity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Dosage.DoseAndRate" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="dose">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SimpleQuantity" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="rate">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SimpleQuantity" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Quantity" namespace="FHIR" name="Duration" identifier="http://hl7.org/fhir/StructureDefinition/Duration" label="Duration" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="EffectEvidenceSynthesis" identifier="http://hl7.org/fhir/StructureDefinition/EffectEvidenceSynthesis" label="EffectEvidenceSynthesis" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="synthesisType" elementType="FHIR.CodeableConcept"/>
      <element name="studyType" elementType="FHIR.CodeableConcept"/>
      <element name="population" elementType="FHIR.Reference"/>
      <element name="exposure" elementType="FHIR.Reference"/>
      <element name="exposureAlternative" elementType="FHIR.Reference"/>
      <element name="outcome" elementType="FHIR.Reference"/>
      <element name="sampleSize" elementType="FHIR.EffectEvidenceSynthesis.SampleSize"/>
      <element name="resultsByExposure">
         <elementTypeSpecifier elementType="FHIR.EffectEvidenceSynthesis.ResultsByExposure" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="effectEstimate">
         <elementTypeSpecifier elementType="FHIR.EffectEvidenceSynthesis.EffectEstimate" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="certainty">
         <elementTypeSpecifier elementType="FHIR.EffectEvidenceSynthesis.Certainty" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="EffectEvidenceSynthesis.Certainty" retrievable="false" xsi:type="ClassInfo">
      <element name="rating">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="certaintySubcomponent">
         <elementTypeSpecifier elementType="FHIR.EffectEvidenceSynthesis.Certainty.CertaintySubcomponent" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="EffectEvidenceSynthesis.Certainty.CertaintySubcomponent" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="rating">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="EffectEvidenceSynthesis.EffectEstimate" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="variantState" elementType="FHIR.CodeableConcept"/>
      <element name="value" elementType="FHIR.decimal"/>
      <element name="unitOfMeasure" elementType="FHIR.CodeableConcept"/>
      <element name="precisionEstimate">
         <elementTypeSpecifier elementType="FHIR.EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="EffectEvidenceSynthesis.EffectEstimate.PrecisionEstimate" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="level" elementType="FHIR.decimal"/>
      <element name="from" elementType="FHIR.decimal"/>
      <element name="to" elementType="FHIR.decimal"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="EffectEvidenceSynthesis.ResultsByExposure" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="exposureState" elementType="FHIR.ExposureState"/>
      <element name="variantState" elementType="FHIR.CodeableConcept"/>
      <element name="riskEvidenceSynthesis" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="EffectEvidenceSynthesis.SampleSize" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="numberOfStudies" elementType="FHIR.integer"/>
      <element name="numberOfParticipants" elementType="FHIR.integer"/>
   </typeInfo>
   <typeInfo namespace="FHIR" name="Element" identifier="http://hl7.org/fhir/StructureDefinition/Element" label="Element" retrievable="false" xsi:type="ClassInfo" baseType="System.Any">
      <element name="id" elementType="System.String"/>
      <element name="extension">
         <elementTypeSpecifier elementType="FHIR.Extension" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ElementDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ElementDefinition" label="ElementDefinition" retrievable="false" xsi:type="ClassInfo">
      <element name="path" elementType="FHIR.string"/>
      <element name="representation">
         <elementTypeSpecifier elementType="FHIR.PropertyRepresentation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="sliceName" elementType="FHIR.string"/>
      <element name="sliceIsConstraining" elementType="FHIR.boolean"/>
      <element name="label" elementType="FHIR.string"/>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="slicing" elementType="FHIR.ElementDefinition.Slicing"/>
      <element name="short" elementType="FHIR.string"/>
      <element name="definition" elementType="FHIR.markdown"/>
      <element name="comment" elementType="FHIR.markdown"/>
      <element name="requirements" elementType="FHIR.markdown"/>
      <element name="alias">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="min" elementType="FHIR.unsignedInt"/>
      <element name="max" elementType="FHIR.string"/>
      <element name="base" elementType="FHIR.ElementDefinition.Base"/>
      <element name="contentReference" elementType="FHIR.uri"/>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.ElementDefinition.Type" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="defaultValue">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="id" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="markdown" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="oid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="url" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uuid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Annotation" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactPoint" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Count" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Distance" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="HumanName" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Identifier" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Signature" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactDetail" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Contributor" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ParameterDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="RelatedArtifact" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="TriggerDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="UsageContext" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Dosage" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Meta" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="meaningWhenMissing" elementType="FHIR.markdown"/>
      <element name="orderMeaning" elementType="FHIR.string"/>
      <element name="fixed">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="id" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="markdown" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="oid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="url" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uuid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Annotation" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactPoint" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Count" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Distance" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="HumanName" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Identifier" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Signature" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactDetail" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Contributor" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ParameterDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="RelatedArtifact" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="TriggerDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="UsageContext" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Dosage" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Meta" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="pattern">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="id" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="markdown" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="oid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="url" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uuid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Annotation" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactPoint" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Count" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Distance" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="HumanName" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Identifier" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Signature" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactDetail" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Contributor" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ParameterDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="RelatedArtifact" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="TriggerDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="UsageContext" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Dosage" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Meta" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="example">
         <elementTypeSpecifier elementType="FHIR.ElementDefinition.Example" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="minValue">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="maxValue">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="maxLength" elementType="FHIR.integer"/>
      <element name="condition">
         <elementTypeSpecifier elementType="FHIR.id" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="constraint">
         <elementTypeSpecifier elementType="FHIR.ElementDefinition.Constraint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="mustSupport" elementType="FHIR.boolean"/>
      <element name="isModifier" elementType="FHIR.boolean"/>
      <element name="isModifierReason" elementType="FHIR.string"/>
      <element name="isSummary" elementType="FHIR.boolean"/>
      <element name="binding" elementType="FHIR.ElementDefinition.Binding"/>
      <element name="mapping">
         <elementTypeSpecifier elementType="FHIR.ElementDefinition.Mapping" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ElementDefinition.Base" retrievable="false" xsi:type="ClassInfo">
      <element name="path" elementType="FHIR.string"/>
      <element name="min" elementType="FHIR.unsignedInt"/>
      <element name="max" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ElementDefinition.Binding" retrievable="false" xsi:type="ClassInfo">
      <element name="strength" elementType="FHIR.BindingStrength"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="valueSet" elementType="FHIR.canonical"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ElementDefinition.Constraint" retrievable="false" xsi:type="ClassInfo">
      <element name="key" elementType="FHIR.id"/>
      <element name="requirements" elementType="FHIR.string"/>
      <element name="severity" elementType="FHIR.ConstraintSeverity"/>
      <element name="human" elementType="FHIR.string"/>
      <element name="expression" elementType="FHIR.string"/>
      <element name="xpath" elementType="FHIR.string"/>
      <element name="source" elementType="FHIR.canonical"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ElementDefinition.Example" retrievable="false" xsi:type="ClassInfo">
      <element name="label" elementType="FHIR.string"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="id" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="markdown" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="oid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="url" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uuid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Annotation" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactPoint" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Count" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Distance" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="HumanName" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Identifier" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Signature" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactDetail" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Contributor" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ParameterDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="RelatedArtifact" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="TriggerDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="UsageContext" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Dosage" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Meta" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ElementDefinition.Mapping" retrievable="false" xsi:type="ClassInfo">
      <element name="identity" elementType="FHIR.id"/>
      <element name="language" elementType="FHIR.MimeType"/>
      <element name="map" elementType="FHIR.string"/>
      <element name="comment" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ElementDefinition.Slicing" retrievable="false" xsi:type="ClassInfo">
      <element name="discriminator">
         <elementTypeSpecifier elementType="FHIR.ElementDefinition.Slicing.Discriminator" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="ordered" elementType="FHIR.boolean"/>
      <element name="rules" elementType="FHIR.SlicingRules"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ElementDefinition.Slicing.Discriminator" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.DiscriminatorType"/>
      <element name="path" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ElementDefinition.Type" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.uri"/>
      <element name="targetProfile">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="versioning" elementType="FHIR.ReferenceVersionRules"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EligibilityRequestPurpose" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EligibilityRequestStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EligibilityResponsePurpose" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EligibilityResponseStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EnableWhenBehavior" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Encounter" identifier="http://hl7.org/fhir/StructureDefinition/Encounter" label="Encounter" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.EncounterStatus"/>
      <element name="statusHistory">
         <elementTypeSpecifier elementType="FHIR.Encounter.StatusHistory" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="class" elementType="FHIR.Coding"/>
      <element name="classHistory">
         <elementTypeSpecifier elementType="FHIR.Encounter.ClassHistory" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviceType" elementType="FHIR.CodeableConcept"/>
      <element name="priority" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="episodeOfCare">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="participant">
         <elementTypeSpecifier elementType="FHIR.Encounter.Participant" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="appointment">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="period" elementType="FHIR.Period"/>
      <element name="length" elementType="FHIR.Duration"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="diagnosis">
         <elementTypeSpecifier elementType="FHIR.Encounter.Diagnosis" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="account">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="hospitalization" elementType="FHIR.Encounter.Hospitalization"/>
      <element name="location">
         <elementTypeSpecifier elementType="FHIR.Encounter.Location" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviceProvider" elementType="FHIR.Reference"/>
      <element name="partOf" elementType="FHIR.Reference"/>
      <contextRelationship context="Practitioner" relatedKeyElement="where(resolve() is Practitioner)"/>
      <contextRelationship context="Practitioner" relatedKeyElement="individual"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="individual"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Encounter.ClassHistory" retrievable="false" xsi:type="ClassInfo">
      <element name="class" elementType="FHIR.Coding"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Encounter.Diagnosis" retrievable="false" xsi:type="ClassInfo">
      <element name="condition" elementType="FHIR.Reference"/>
      <element name="use" elementType="FHIR.CodeableConcept"/>
      <element name="rank" elementType="FHIR.positiveInt"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Encounter.Hospitalization" retrievable="false" xsi:type="ClassInfo">
      <element name="preAdmissionIdentifier" elementType="FHIR.Identifier"/>
      <element name="origin" elementType="FHIR.Reference"/>
      <element name="admitSource" elementType="FHIR.CodeableConcept"/>
      <element name="reAdmission" elementType="FHIR.CodeableConcept"/>
      <element name="dietPreference">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specialCourtesy">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specialArrangement">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="destination" elementType="FHIR.Reference"/>
      <element name="dischargeDisposition" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Encounter.Location" retrievable="false" xsi:type="ClassInfo">
      <element name="location" elementType="FHIR.Reference"/>
      <element name="status" elementType="FHIR.EncounterLocationStatus"/>
      <element name="physicalType" elementType="FHIR.CodeableConcept"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Encounter.Participant" retrievable="false" xsi:type="ClassInfo">
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="period" elementType="FHIR.Period"/>
      <element name="individual" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Encounter.StatusHistory" retrievable="false" xsi:type="ClassInfo">
      <element name="status" elementType="FHIR.EncounterStatus"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EncounterLocationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EncounterStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Endpoint" identifier="http://hl7.org/fhir/StructureDefinition/Endpoint" label="Endpoint" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.EndpointStatus"/>
      <element name="connectionType" elementType="FHIR.Coding"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="managingOrganization" elementType="FHIR.Reference"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="period" elementType="FHIR.Period"/>
      <element name="payloadType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="payloadMimeType">
         <elementTypeSpecifier elementType="FHIR.MimeType" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="address" elementType="FHIR.url"/>
      <element name="header">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EndpointStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="EnrollmentRequest" identifier="http://hl7.org/fhir/StructureDefinition/EnrollmentRequest" label="EnrollmentRequest" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.EnrollmentRequestStatus"/>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="insurer" elementType="FHIR.Reference"/>
      <element name="provider" elementType="FHIR.Reference"/>
      <element name="candidate" elementType="FHIR.Reference"/>
      <element name="coverage" elementType="FHIR.Reference"/>
      <contextRelationship context="Patient" relatedKeyElement="candidate"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EnrollmentRequestStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="EnrollmentResponse" identifier="http://hl7.org/fhir/StructureDefinition/EnrollmentResponse" label="EnrollmentResponse" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.EnrollmentResponseStatus"/>
      <element name="request" elementType="FHIR.Reference"/>
      <element name="outcome" elementType="FHIR.RemittanceOutcome"/>
      <element name="disposition" elementType="FHIR.string"/>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="organization" elementType="FHIR.Reference"/>
      <element name="requestProvider" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EnrollmentResponseStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="EpisodeOfCare" identifier="http://hl7.org/fhir/StructureDefinition/EpisodeOfCare" label="EpisodeOfCare" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.EpisodeOfCareStatus"/>
      <element name="statusHistory">
         <elementTypeSpecifier elementType="FHIR.EpisodeOfCare.StatusHistory" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="diagnosis">
         <elementTypeSpecifier elementType="FHIR.EpisodeOfCare.Diagnosis" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="managingOrganization" elementType="FHIR.Reference"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="referralRequest">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="careManager" elementType="FHIR.Reference"/>
      <element name="team">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="account">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="where(resolve() is Practitioner)"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="EpisodeOfCare.Diagnosis" retrievable="false" xsi:type="ClassInfo">
      <element name="condition" elementType="FHIR.Reference"/>
      <element name="role" elementType="FHIR.CodeableConcept"/>
      <element name="rank" elementType="FHIR.positiveInt"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="EpisodeOfCare.StatusHistory" retrievable="false" xsi:type="ClassInfo">
      <element name="status" elementType="FHIR.EpisodeOfCareStatus"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EpisodeOfCareStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EventCapabilityMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="EventDefinition" identifier="http://hl7.org/fhir/StructureDefinition/EventDefinition" label="EventDefinition" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="subtitle" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="subject">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="usage" elementType="FHIR.string"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="trigger">
         <elementTypeSpecifier elementType="FHIR.TriggerDefinition" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EventTiming" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Evidence" identifier="http://hl7.org/fhir/StructureDefinition/Evidence" label="Evidence" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="shortTitle" elementType="FHIR.string"/>
      <element name="subtitle" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="exposureBackground" elementType="FHIR.Reference"/>
      <element name="exposureVariant">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="outcome">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="EvidenceVariable" identifier="http://hl7.org/fhir/StructureDefinition/EvidenceVariable" label="EvidenceVariable" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="shortTitle" elementType="FHIR.string"/>
      <element name="subtitle" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.EvidenceVariableType"/>
      <element name="characteristic">
         <elementTypeSpecifier elementType="FHIR.EvidenceVariable.Characteristic" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="EvidenceVariable.Characteristic" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="definition">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="TriggerDefinition" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="usageContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="exclude" elementType="FHIR.boolean"/>
      <element name="participantEffective">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="timeFromStart" elementType="FHIR.Duration"/>
      <element name="groupMeasure" elementType="FHIR.GroupMeasure"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="EvidenceVariableType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ExampleScenario" identifier="http://hl7.org/fhir/StructureDefinition/ExampleScenario" label="ExampleScenario" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="actor">
         <elementTypeSpecifier elementType="FHIR.ExampleScenario.Actor" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instance">
         <elementTypeSpecifier elementType="FHIR.ExampleScenario.Instance" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="process">
         <elementTypeSpecifier elementType="FHIR.ExampleScenario.Process" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="workflow">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExampleScenario.Actor" retrievable="false" xsi:type="ClassInfo">
      <element name="actorId" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.ExampleScenarioActorType"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExampleScenario.Instance" retrievable="false" xsi:type="ClassInfo">
      <element name="resourceId" elementType="FHIR.string"/>
      <element name="resourceType" elementType="FHIR.FHIRResourceType"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="version">
         <elementTypeSpecifier elementType="FHIR.ExampleScenario.Instance.Version" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="containedInstance">
         <elementTypeSpecifier elementType="FHIR.ExampleScenario.Instance.ContainedInstance" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExampleScenario.Instance.ContainedInstance" retrievable="false" xsi:type="ClassInfo">
      <element name="resourceId" elementType="FHIR.string"/>
      <element name="versionId" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExampleScenario.Instance.Version" retrievable="false" xsi:type="ClassInfo">
      <element name="versionId" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExampleScenario.Process" retrievable="false" xsi:type="ClassInfo">
      <element name="title" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="preConditions" elementType="FHIR.markdown"/>
      <element name="postConditions" elementType="FHIR.markdown"/>
      <element name="step">
         <elementTypeSpecifier elementType="FHIR.ExampleScenario.Process.Step" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExampleScenario.Process.Step" retrievable="false" xsi:type="ClassInfo">
      <element name="process">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ExampleScenario.Process" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="pause" elementType="FHIR.boolean"/>
      <element name="operation" elementType="FHIR.ExampleScenario.Process.Step.Operation"/>
      <element name="alternative">
         <elementTypeSpecifier elementType="FHIR.ExampleScenario.Process.Step.Alternative" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExampleScenario.Process.Step.Alternative" retrievable="false" xsi:type="ClassInfo">
      <element name="title" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="step">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ExampleScenario.Process.Step" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExampleScenario.Process.Step.Operation" retrievable="false" xsi:type="ClassInfo">
      <element name="number" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="initiator" elementType="FHIR.string"/>
      <element name="receiver" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="initiatorActive" elementType="FHIR.boolean"/>
      <element name="receiverActive" elementType="FHIR.boolean"/>
      <element name="request" elementType="FHIR.ExampleScenario.Instance.ContainedInstance"/>
      <element name="response" elementType="FHIR.ExampleScenario.Instance.ContainedInstance"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ExampleScenarioActorType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ExplanationOfBenefit" identifier="http://hl7.org/fhir/StructureDefinition/ExplanationOfBenefit" label="ExplanationOfBenefit" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ExplanationOfBenefitStatus"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subType" elementType="FHIR.CodeableConcept"/>
      <element name="use" elementType="FHIR.Use"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="billablePeriod" elementType="FHIR.Period"/>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="enterer" elementType="FHIR.Reference"/>
      <element name="insurer" elementType="FHIR.Reference"/>
      <element name="provider" elementType="FHIR.Reference"/>
      <element name="priority" elementType="FHIR.CodeableConcept"/>
      <element name="fundsReserveRequested" elementType="FHIR.CodeableConcept"/>
      <element name="fundsReserve" elementType="FHIR.CodeableConcept"/>
      <element name="related">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.Related" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="prescription" elementType="FHIR.Reference"/>
      <element name="originalPrescription" elementType="FHIR.Reference"/>
      <element name="payee" elementType="FHIR.ExplanationOfBenefit.Payee"/>
      <element name="referral" elementType="FHIR.Reference"/>
      <element name="facility" elementType="FHIR.Reference"/>
      <element name="claim" elementType="FHIR.Reference"/>
      <element name="claimResponse" elementType="FHIR.Reference"/>
      <element name="outcome" elementType="FHIR.RemittanceOutcome"/>
      <element name="disposition" elementType="FHIR.string"/>
      <element name="preAuthRef">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="preAuthRefPeriod">
         <elementTypeSpecifier elementType="FHIR.Period" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="careTeam">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.CareTeam" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="supportingInfo">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.SupportingInfo" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="diagnosis">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.Diagnosis" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="procedure">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.Procedure" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="precedence" elementType="FHIR.positiveInt"/>
      <element name="insurance">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.Insurance" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="accident" elementType="FHIR.ExplanationOfBenefit.Accident"/>
      <element name="item">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.Item" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="addItem">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.AddItem" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ExplanationOfBenefit.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="total">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.Total" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="payment" elementType="FHIR.ExplanationOfBenefit.Payment"/>
      <element name="formCode" elementType="FHIR.CodeableConcept"/>
      <element name="form" elementType="FHIR.Attachment"/>
      <element name="processNote">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.ProcessNote" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="benefitPeriod" elementType="FHIR.Period"/>
      <element name="benefitBalance">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.BenefitBalance" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="enterer"/>
      <contextRelationship context="Practitioner" relatedKeyElement="provider"/>
      <contextRelationship context="Practitioner" relatedKeyElement="party"/>
      <contextRelationship context="Practitioner" relatedKeyElement="provider"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Patient" relatedKeyElement="party"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="udi"/>
      <contextRelationship context="Device" relatedKeyElement="udi"/>
      <contextRelationship context="Device" relatedKeyElement="udi"/>
      <contextRelationship context="Device" relatedKeyElement="udi"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="party"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Accident" retrievable="false" xsi:type="ClassInfo">
      <element name="date" elementType="FHIR.date"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="location">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.AddItem" retrievable="false" xsi:type="ClassInfo">
      <element name="itemSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="detailSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subDetailSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="provider">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="programCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviced">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="location">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="bodySite" elementType="FHIR.CodeableConcept"/>
      <element name="subSite">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ExplanationOfBenefit.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.AddItem.Detail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.AddItem.Detail" retrievable="false" xsi:type="ClassInfo">
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ExplanationOfBenefit.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="subDetail">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.AddItem.Detail.SubDetail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.AddItem.Detail.SubDetail" retrievable="false" xsi:type="ClassInfo">
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ExplanationOfBenefit.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.BenefitBalance" retrievable="false" xsi:type="ClassInfo">
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="excluded" elementType="FHIR.boolean"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="network" elementType="FHIR.CodeableConcept"/>
      <element name="unit" elementType="FHIR.CodeableConcept"/>
      <element name="term" elementType="FHIR.CodeableConcept"/>
      <element name="financial">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.BenefitBalance.Financial" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.BenefitBalance.Financial" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="allowed">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="used">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.CareTeam" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="provider" elementType="FHIR.Reference"/>
      <element name="responsible" elementType="FHIR.boolean"/>
      <element name="role" elementType="FHIR.CodeableConcept"/>
      <element name="qualification" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Diagnosis" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="diagnosis">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="onAdmission" elementType="FHIR.CodeableConcept"/>
      <element name="packageCode" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Insurance" retrievable="false" xsi:type="ClassInfo">
      <element name="focal" elementType="FHIR.boolean"/>
      <element name="coverage" elementType="FHIR.Reference"/>
      <element name="preAuthRef">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Item" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="careTeamSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="diagnosisSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="procedureSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="informationSequence">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="revenue" elementType="FHIR.CodeableConcept"/>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="programCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviced">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="location">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="udi">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="bodySite" elementType="FHIR.CodeableConcept"/>
      <element name="subSite">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="encounter">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.Item.Adjudication" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.Item.Detail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Item.Adjudication" retrievable="false" xsi:type="ClassInfo">
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="reason" elementType="FHIR.CodeableConcept"/>
      <element name="amount" elementType="FHIR.Money"/>
      <element name="value" elementType="FHIR.decimal"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Item.Detail" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="revenue" elementType="FHIR.CodeableConcept"/>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="programCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="udi">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ExplanationOfBenefit.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="subDetail">
         <elementTypeSpecifier elementType="FHIR.ExplanationOfBenefit.Item.Detail.SubDetail" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Item.Detail.SubDetail" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="revenue" elementType="FHIR.CodeableConcept"/>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="productOrService" elementType="FHIR.CodeableConcept"/>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="programCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="unitPrice" elementType="FHIR.Money"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="net" elementType="FHIR.Money"/>
      <element name="udi">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="noteNumber">
         <elementTypeSpecifier elementType="FHIR.positiveInt" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="adjudication">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ExplanationOfBenefit.Item.Adjudication" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Payee" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="party" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Payment" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="adjustment" elementType="FHIR.Money"/>
      <element name="adjustmentReason" elementType="FHIR.CodeableConcept"/>
      <element name="date" elementType="FHIR.date"/>
      <element name="amount" elementType="FHIR.Money"/>
      <element name="identifier" elementType="FHIR.Identifier"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Procedure" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="procedure">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="udi">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.ProcessNote" retrievable="false" xsi:type="ClassInfo">
      <element name="number" elementType="FHIR.positiveInt"/>
      <element name="type" elementType="FHIR.NoteType"/>
      <element name="text" elementType="FHIR.string"/>
      <element name="language" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Related" retrievable="false" xsi:type="ClassInfo">
      <element name="claim" elementType="FHIR.Reference"/>
      <element name="relationship" elementType="FHIR.CodeableConcept"/>
      <element name="reference" elementType="FHIR.Identifier"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.SupportingInfo" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="timing">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="reason" elementType="FHIR.Coding"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ExplanationOfBenefit.Total" retrievable="false" xsi:type="ClassInfo">
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="amount" elementType="FHIR.Money"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ExplanationOfBenefitStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ExposureState" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Expression" identifier="http://hl7.org/fhir/StructureDefinition/Expression" label="Expression" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.id"/>
      <element name="language" elementType="FHIR.code"/>
      <element name="expression" elementType="FHIR.string"/>
      <element name="reference" elementType="FHIR.uri"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Extension" identifier="http://hl7.org/fhir/StructureDefinition/Extension" label="Extension" retrievable="false" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="id" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="markdown" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="oid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="url" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uuid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Annotation" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactPoint" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Count" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Distance" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="HumanName" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Identifier" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Signature" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactDetail" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Contributor" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ParameterDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="RelatedArtifact" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="TriggerDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="UsageContext" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Dosage" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Meta" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ExtensionContextType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="FHIRAllTypes" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="FHIRDefinedType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="FHIRDeviceStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="FHIRResourceType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="FHIRSubstanceStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="FHIRVersion" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="FamilyHistoryStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="FamilyMemberHistory" identifier="http://hl7.org/fhir/StructureDefinition/FamilyMemberHistory" label="FamilyMemberHistory" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.FamilyHistoryStatus"/>
      <element name="dataAbsentReason" elementType="FHIR.CodeableConcept"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="relationship" elementType="FHIR.CodeableConcept"/>
      <element name="sex" elementType="FHIR.CodeableConcept"/>
      <element name="born">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="age">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="estimatedAge" elementType="FHIR.boolean"/>
      <element name="deceased">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="condition">
         <elementTypeSpecifier elementType="FHIR.FamilyMemberHistory.Condition" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="FamilyMemberHistory.Condition" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="outcome" elementType="FHIR.CodeableConcept"/>
      <element name="contributedToDeath" elementType="FHIR.boolean"/>
      <element name="onset">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="FilterOperator" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Flag" identifier="http://hl7.org/fhir/StructureDefinition/Flag" label="Flag" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.FlagStatus"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="author" elementType="FHIR.Reference"/>
      <contextRelationship context="Practitioner" relatedKeyElement="author"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Device" relatedKeyElement="author"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="FlagStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Goal" identifier="http://hl7.org/fhir/StructureDefinition/Goal" label="Goal" retrievable="true" primaryCodePath="category" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="lifecycleStatus" elementType="FHIR.GoalLifecycleStatus"/>
      <element name="achievementStatus" elementType="FHIR.CodeableConcept"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="priority" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="start">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="target">
         <elementTypeSpecifier elementType="FHIR.Goal.Target" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="statusDate" elementType="FHIR.date"/>
      <element name="statusReason" elementType="FHIR.string"/>
      <element name="expressedBy" elementType="FHIR.Reference"/>
      <element name="addresses">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="outcomeCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="outcomeReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Goal.Target" retrievable="false" xsi:type="ClassInfo">
      <element name="measure" elementType="FHIR.CodeableConcept"/>
      <element name="detail">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="due">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="GoalLifecycleStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="GraphCompartmentRule" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="GraphCompartmentUse" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="GraphDefinition" identifier="http://hl7.org/fhir/StructureDefinition/GraphDefinition" label="GraphDefinition" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="start" elementType="FHIR.ResourceType"/>
      <element name="profile" elementType="FHIR.canonical"/>
      <element name="link">
         <elementTypeSpecifier elementType="FHIR.GraphDefinition.Link" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="GraphDefinition.Link" retrievable="false" xsi:type="ClassInfo">
      <element name="path" elementType="FHIR.string"/>
      <element name="sliceName" elementType="FHIR.string"/>
      <element name="min" elementType="FHIR.integer"/>
      <element name="max" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="target">
         <elementTypeSpecifier elementType="FHIR.GraphDefinition.Link.Target" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="GraphDefinition.Link.Target" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.ResourceType"/>
      <element name="params" elementType="FHIR.string"/>
      <element name="profile" elementType="FHIR.canonical"/>
      <element name="compartment">
         <elementTypeSpecifier elementType="FHIR.GraphDefinition.Link.Target.Compartment" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="link">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="GraphDefinition.Link" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="GraphDefinition.Link.Target.Compartment" retrievable="false" xsi:type="ClassInfo">
      <element name="use" elementType="FHIR.GraphCompartmentUse"/>
      <element name="code" elementType="FHIR.CompartmentCode"/>
      <element name="rule" elementType="FHIR.GraphCompartmentRule"/>
      <element name="expression" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Group" identifier="http://hl7.org/fhir/StructureDefinition/Group" label="Group" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="type" elementType="FHIR.GroupType"/>
      <element name="actual" elementType="FHIR.boolean"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="quantity" elementType="FHIR.unsignedInt"/>
      <element name="managingEntity" elementType="FHIR.Reference"/>
      <element name="characteristic">
         <elementTypeSpecifier elementType="FHIR.Group.Characteristic" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="member">
         <elementTypeSpecifier elementType="FHIR.Group.Member" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="entity"/>
      <contextRelationship context="Patient" relatedKeyElement="entity"/>
      <contextRelationship context="Device" relatedKeyElement="entity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Group.Characteristic" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="exclude" elementType="FHIR.boolean"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Group.Member" retrievable="false" xsi:type="ClassInfo">
      <element name="entity" elementType="FHIR.Reference"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="inactive" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="GroupMeasure" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="GroupType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="GuidanceResponse" identifier="http://hl7.org/fhir/StructureDefinition/GuidanceResponse" label="GuidanceResponse" retrievable="true" primaryCodePath="module" xsi:type="ClassInfo">
      <element name="requestIdentifier" elementType="FHIR.Identifier"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="module">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="status" elementType="FHIR.GuidanceResponseStatus"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="occurrenceDateTime" elementType="FHIR.dateTime"/>
      <element name="performer" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="evaluationMessage">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="outputParameters" elementType="FHIR.Reference"/>
      <element name="result" elementType="FHIR.Reference"/>
      <element name="dataRequirement">
         <elementTypeSpecifier elementType="FHIR.DataRequirement" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="GuidanceResponseStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="GuidePageGeneration" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="GuideParameterCode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="HTTPVerb" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="HealthcareService" identifier="http://hl7.org/fhir/StructureDefinition/HealthcareService" label="HealthcareService" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="providedBy" elementType="FHIR.Reference"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specialty">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="location">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name" elementType="FHIR.string"/>
      <element name="comment" elementType="FHIR.string"/>
      <element name="extraDetails" elementType="FHIR.markdown"/>
      <element name="photo" elementType="FHIR.Attachment"/>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="coverageArea">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviceProvisionCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="eligibility">
         <elementTypeSpecifier elementType="FHIR.HealthcareService.Eligibility" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="program">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="characteristic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="communication">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="referralMethod">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="appointmentRequired" elementType="FHIR.boolean"/>
      <element name="availableTime">
         <elementTypeSpecifier elementType="FHIR.HealthcareService.AvailableTime" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="notAvailable">
         <elementTypeSpecifier elementType="FHIR.HealthcareService.NotAvailable" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="availabilityExceptions" elementType="FHIR.string"/>
      <element name="endpoint">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="HealthcareService.AvailableTime" retrievable="false" xsi:type="ClassInfo">
      <element name="daysOfWeek">
         <elementTypeSpecifier elementType="FHIR.DaysOfWeek" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="allDay" elementType="FHIR.boolean"/>
      <element name="availableStartTime" elementType="FHIR.time"/>
      <element name="availableEndTime" elementType="FHIR.time"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="HealthcareService.Eligibility" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="comment" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="HealthcareService.NotAvailable" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="during" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="HumanName" identifier="http://hl7.org/fhir/StructureDefinition/HumanName" label="HumanName" retrievable="false" xsi:type="ClassInfo">
      <element name="use" elementType="FHIR.NameUse"/>
      <element name="text" elementType="FHIR.string"/>
      <element name="family" elementType="FHIR.string"/>
      <element name="given">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="prefix">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="suffix">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Identifier" identifier="http://hl7.org/fhir/StructureDefinition/Identifier" label="Identifier" retrievable="false" xsi:type="ClassInfo">
      <element name="use" elementType="FHIR.IdentifierUse"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="system" elementType="FHIR.uri"/>
      <element name="value" elementType="FHIR.string"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="assigner" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="IdentifierUse" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="IdentityAssuranceLevel" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ImagingStudy" identifier="http://hl7.org/fhir/StructureDefinition/ImagingStudy" label="ImagingStudy" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ImagingStudyStatus"/>
      <element name="modality">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="started" elementType="FHIR.dateTime"/>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="referrer" elementType="FHIR.Reference"/>
      <element name="interpreter">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endpoint">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="numberOfSeries" elementType="FHIR.unsignedInt"/>
      <element name="numberOfInstances" elementType="FHIR.unsignedInt"/>
      <element name="procedureReference" elementType="FHIR.Reference"/>
      <element name="procedureCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="series">
         <elementTypeSpecifier elementType="FHIR.ImagingStudy.Series" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImagingStudy.Series" retrievable="false" xsi:type="ClassInfo">
      <element name="uid" elementType="FHIR.id"/>
      <element name="number" elementType="FHIR.unsignedInt"/>
      <element name="modality" elementType="FHIR.Coding"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="numberOfInstances" elementType="FHIR.unsignedInt"/>
      <element name="endpoint">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="bodySite" elementType="FHIR.Coding"/>
      <element name="laterality" elementType="FHIR.Coding"/>
      <element name="specimen">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="started" elementType="FHIR.dateTime"/>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.ImagingStudy.Series.Performer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instance">
         <elementTypeSpecifier elementType="FHIR.ImagingStudy.Series.Instance" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImagingStudy.Series.Instance" retrievable="false" xsi:type="ClassInfo">
      <element name="uid" elementType="FHIR.id"/>
      <element name="sopClass" elementType="FHIR.Coding"/>
      <element name="number" elementType="FHIR.unsignedInt"/>
      <element name="title" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImagingStudy.Series.Performer" retrievable="false" xsi:type="ClassInfo">
      <element name="function" elementType="FHIR.CodeableConcept"/>
      <element name="actor" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ImagingStudyStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Immunization" identifier="http://hl7.org/fhir/StructureDefinition/Immunization" label="Immunization" retrievable="true" primaryCodePath="vaccineCode" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ImmunizationStatus"/>
      <element name="statusReason" elementType="FHIR.CodeableConcept"/>
      <element name="vaccineCode" elementType="FHIR.CodeableConcept"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="occurrence">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="recorded" elementType="FHIR.dateTime"/>
      <element name="primarySource" elementType="FHIR.boolean"/>
      <element name="reportOrigin" elementType="FHIR.CodeableConcept"/>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="manufacturer" elementType="FHIR.Reference"/>
      <element name="lotNumber" elementType="FHIR.string"/>
      <element name="expirationDate" elementType="FHIR.date"/>
      <element name="site" elementType="FHIR.CodeableConcept"/>
      <element name="route" elementType="FHIR.CodeableConcept"/>
      <element name="doseQuantity" elementType="FHIR.SimpleQuantity"/>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.Immunization.Performer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="isSubpotent" elementType="FHIR.boolean"/>
      <element name="subpotentReason">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="education">
         <elementTypeSpecifier elementType="FHIR.Immunization.Education" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="programEligibility">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="fundingSource" elementType="FHIR.CodeableConcept"/>
      <element name="reaction">
         <elementTypeSpecifier elementType="FHIR.Immunization.Reaction" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="protocolApplied">
         <elementTypeSpecifier elementType="FHIR.Immunization.ProtocolApplied" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="actor"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Immunization.Education" retrievable="false" xsi:type="ClassInfo">
      <element name="documentType" elementType="FHIR.string"/>
      <element name="reference" elementType="FHIR.uri"/>
      <element name="publicationDate" elementType="FHIR.dateTime"/>
      <element name="presentationDate" elementType="FHIR.dateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Immunization.Performer" retrievable="false" xsi:type="ClassInfo">
      <element name="function" elementType="FHIR.CodeableConcept"/>
      <element name="actor" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Immunization.ProtocolApplied" retrievable="false" xsi:type="ClassInfo">
      <element name="series" elementType="FHIR.string"/>
      <element name="authority" elementType="FHIR.Reference"/>
      <element name="targetDisease">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="doseNumber">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="seriesDoses">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Immunization.Reaction" retrievable="false" xsi:type="ClassInfo">
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="detail" elementType="FHIR.Reference"/>
      <element name="reported" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ImmunizationEvaluation" identifier="http://hl7.org/fhir/StructureDefinition/ImmunizationEvaluation" label="ImmunizationEvaluation" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ImmunizationEvaluationStatus"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="authority" elementType="FHIR.Reference"/>
      <element name="targetDisease" elementType="FHIR.CodeableConcept"/>
      <element name="immunizationEvent" elementType="FHIR.Reference"/>
      <element name="doseStatus" elementType="FHIR.CodeableConcept"/>
      <element name="doseStatusReason">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="series" elementType="FHIR.string"/>
      <element name="doseNumber">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="seriesDoses">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ImmunizationEvaluationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ImmunizationRecommendation" identifier="http://hl7.org/fhir/StructureDefinition/ImmunizationRecommendation" label="ImmunizationRecommendation" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="authority" elementType="FHIR.Reference"/>
      <element name="recommendation">
         <elementTypeSpecifier elementType="FHIR.ImmunizationRecommendation.Recommendation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImmunizationRecommendation.Recommendation" retrievable="false" xsi:type="ClassInfo">
      <element name="vaccineCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="targetDisease" elementType="FHIR.CodeableConcept"/>
      <element name="contraindicatedVaccineCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="forecastStatus" elementType="FHIR.CodeableConcept"/>
      <element name="forecastReason">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="dateCriterion">
         <elementTypeSpecifier elementType="FHIR.ImmunizationRecommendation.Recommendation.DateCriterion" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="series" elementType="FHIR.string"/>
      <element name="doseNumber">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="seriesDoses">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="supportingImmunization">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="supportingPatientInformation">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImmunizationRecommendation.Recommendation.DateCriterion" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="value" elementType="FHIR.dateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ImmunizationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ImplementationGuide" identifier="http://hl7.org/fhir/StructureDefinition/ImplementationGuide" label="ImplementationGuide" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="packageId" elementType="FHIR.id"/>
      <element name="license" elementType="FHIR.SPDXLicense"/>
      <element name="fhirVersion">
         <elementTypeSpecifier elementType="FHIR.FHIRVersion" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="dependsOn">
         <elementTypeSpecifier elementType="FHIR.ImplementationGuide.DependsOn" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="global">
         <elementTypeSpecifier elementType="FHIR.ImplementationGuide.Global" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="definition" elementType="FHIR.ImplementationGuide.Definition"/>
      <element name="manifest" elementType="FHIR.ImplementationGuide.Manifest"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.Definition" retrievable="false" xsi:type="ClassInfo">
      <element name="grouping">
         <elementTypeSpecifier elementType="FHIR.ImplementationGuide.Definition.Grouping" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="resource">
         <elementTypeSpecifier elementType="FHIR.ImplementationGuide.Definition.Resource" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="page" elementType="FHIR.ImplementationGuide.Definition.Page"/>
      <element name="parameter">
         <elementTypeSpecifier elementType="FHIR.ImplementationGuide.Definition.Parameter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="template">
         <elementTypeSpecifier elementType="FHIR.ImplementationGuide.Definition.Template" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.Definition.Grouping" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.Definition.Page" retrievable="false" xsi:type="ClassInfo">
      <element name="name">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="url" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="title" elementType="FHIR.string"/>
      <element name="generation" elementType="FHIR.GuidePageGeneration"/>
      <element name="page">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ImplementationGuide.Definition.Page" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.Definition.Parameter" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.GuideParameterCode"/>
      <element name="value" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.Definition.Resource" retrievable="false" xsi:type="ClassInfo">
      <element name="reference" elementType="FHIR.Reference"/>
      <element name="fhirVersion">
         <elementTypeSpecifier elementType="FHIR.FHIRVersion" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="example">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="groupingId" elementType="FHIR.id"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.Definition.Template" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.code"/>
      <element name="source" elementType="FHIR.string"/>
      <element name="scope" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.DependsOn" retrievable="false" xsi:type="ClassInfo">
      <element name="uri" elementType="FHIR.canonical"/>
      <element name="packageId" elementType="FHIR.id"/>
      <element name="version" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.Global" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.ResourceType"/>
      <element name="profile" elementType="FHIR.canonical"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.Manifest" retrievable="false" xsi:type="ClassInfo">
      <element name="rendering" elementType="FHIR.url"/>
      <element name="resource">
         <elementTypeSpecifier elementType="FHIR.ImplementationGuide.Manifest.Resource" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="page">
         <elementTypeSpecifier elementType="FHIR.ImplementationGuide.Manifest.Page" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="image">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="other">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.Manifest.Page" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="anchor">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ImplementationGuide.Manifest.Resource" retrievable="false" xsi:type="ClassInfo">
      <element name="reference" elementType="FHIR.Reference"/>
      <element name="example">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="relativePath" elementType="FHIR.url"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="InsurancePlan" identifier="http://hl7.org/fhir/StructureDefinition/InsurancePlan" label="InsurancePlan" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name" elementType="FHIR.string"/>
      <element name="alias">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="period" elementType="FHIR.Period"/>
      <element name="ownedBy" elementType="FHIR.Reference"/>
      <element name="administeredBy" elementType="FHIR.Reference"/>
      <element name="coverageArea">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.InsurancePlan.Contact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endpoint">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="network">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="coverage">
         <elementTypeSpecifier elementType="FHIR.InsurancePlan.Coverage" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="plan">
         <elementTypeSpecifier elementType="FHIR.InsurancePlan.Plan" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="InsurancePlan.Contact" retrievable="false" xsi:type="ClassInfo">
      <element name="purpose" elementType="FHIR.CodeableConcept"/>
      <element name="name" elementType="FHIR.HumanName"/>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="address" elementType="FHIR.Address"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="InsurancePlan.Coverage" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="network">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="benefit">
         <elementTypeSpecifier elementType="FHIR.InsurancePlan.Coverage.Benefit" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="InsurancePlan.Coverage.Benefit" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="requirement" elementType="FHIR.string"/>
      <element name="limit">
         <elementTypeSpecifier elementType="FHIR.InsurancePlan.Coverage.Benefit.Limit" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="InsurancePlan.Coverage.Benefit.Limit" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="FHIR.Quantity"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="InsurancePlan.Plan" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="coverageArea">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="network">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="generalCost">
         <elementTypeSpecifier elementType="FHIR.InsurancePlan.Plan.GeneralCost" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specificCost">
         <elementTypeSpecifier elementType="FHIR.InsurancePlan.Plan.SpecificCost" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="InsurancePlan.Plan.GeneralCost" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="groupSize" elementType="FHIR.positiveInt"/>
      <element name="cost" elementType="FHIR.Money"/>
      <element name="comment" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="InsurancePlan.Plan.SpecificCost" retrievable="false" xsi:type="ClassInfo">
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="benefit">
         <elementTypeSpecifier elementType="FHIR.InsurancePlan.Plan.SpecificCost.Benefit" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="InsurancePlan.Plan.SpecificCost.Benefit" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="cost">
         <elementTypeSpecifier elementType="FHIR.InsurancePlan.Plan.SpecificCost.Benefit.Cost" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="InsurancePlan.Plan.SpecificCost.Benefit.Cost" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="applicability" elementType="FHIR.CodeableConcept"/>
      <element name="qualifiers">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="value" elementType="FHIR.Quantity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Invoice" identifier="http://hl7.org/fhir/StructureDefinition/Invoice" label="Invoice" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.InvoiceStatus"/>
      <element name="cancelledReason" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="recipient" elementType="FHIR.Reference"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="participant">
         <elementTypeSpecifier elementType="FHIR.Invoice.Participant" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="issuer" elementType="FHIR.Reference"/>
      <element name="account" elementType="FHIR.Reference"/>
      <element name="lineItem">
         <elementTypeSpecifier elementType="FHIR.Invoice.LineItem" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="totalPriceComponent">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="Invoice.LineItem.PriceComponent" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="totalNet" elementType="FHIR.Money"/>
      <element name="totalGross" elementType="FHIR.Money"/>
      <element name="paymentTerms" elementType="FHIR.markdown"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="actor"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
      <contextRelationship context="Patient" relatedKeyElement="recipient"/>
      <contextRelationship context="Device" relatedKeyElement="actor"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="recipient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Invoice.LineItem" retrievable="false" xsi:type="ClassInfo">
      <element name="sequence" elementType="FHIR.positiveInt"/>
      <element name="chargeItem">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="priceComponent">
         <elementTypeSpecifier elementType="FHIR.Invoice.LineItem.PriceComponent" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Invoice.LineItem.PriceComponent" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.InvoicePriceComponentType"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="amount" elementType="FHIR.Money"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Invoice.Participant" retrievable="false" xsi:type="ClassInfo">
      <element name="role" elementType="FHIR.CodeableConcept"/>
      <element name="actor" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="InvoicePriceComponentType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="InvoiceStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="IssueSeverity" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="IssueType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Library" identifier="http://hl7.org/fhir/StructureDefinition/Library" label="Library" retrievable="true" primaryCodePath="topic" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="subtitle" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subject">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="usage" elementType="FHIR.string"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="parameter">
         <elementTypeSpecifier elementType="FHIR.ParameterDefinition" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="dataRequirement">
         <elementTypeSpecifier elementType="FHIR.DataRequirement" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="content">
         <elementTypeSpecifier elementType="FHIR.Attachment" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="LinkType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Linkage" identifier="http://hl7.org/fhir/StructureDefinition/Linkage" label="Linkage" retrievable="true" xsi:type="ClassInfo">
      <element name="active" elementType="FHIR.boolean"/>
      <element name="author" elementType="FHIR.Reference"/>
      <element name="item">
         <elementTypeSpecifier elementType="FHIR.Linkage.Item" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="author"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Linkage.Item" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.LinkageType"/>
      <element name="resource" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="LinkageType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="List" identifier="http://hl7.org/fhir/StructureDefinition/List" label="List" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ListStatus"/>
      <element name="mode" elementType="FHIR.ListMode"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="source" elementType="FHIR.Reference"/>
      <element name="orderedBy" elementType="FHIR.CodeableConcept"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="entry">
         <elementTypeSpecifier elementType="FHIR.List.Entry" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="emptyReason" elementType="FHIR.CodeableConcept"/>
      <contextRelationship context="Practitioner" relatedKeyElement="source"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="source"/>
      <contextRelationship context="Device" relatedKeyElement="subject"/>
      <contextRelationship context="Device" relatedKeyElement="source"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="List.Entry" retrievable="false" xsi:type="ClassInfo">
      <element name="flag" elementType="FHIR.CodeableConcept"/>
      <element name="deleted" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="item" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ListMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ListStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Location" identifier="http://hl7.org/fhir/StructureDefinition/Location" label="Location" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.LocationStatus"/>
      <element name="operationalStatus" elementType="FHIR.Coding"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="alias">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="mode" elementType="FHIR.LocationMode"/>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="address" elementType="FHIR.Address"/>
      <element name="physicalType" elementType="FHIR.CodeableConcept"/>
      <element name="position" elementType="FHIR.Location.Position"/>
      <element name="managingOrganization" elementType="FHIR.Reference"/>
      <element name="partOf" elementType="FHIR.Reference"/>
      <element name="hoursOfOperation">
         <elementTypeSpecifier elementType="FHIR.Location.HoursOfOperation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="availabilityExceptions" elementType="FHIR.string"/>
      <element name="endpoint">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Location.HoursOfOperation" retrievable="false" xsi:type="ClassInfo">
      <element name="daysOfWeek">
         <elementTypeSpecifier elementType="FHIR.DaysOfWeek" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="allDay" elementType="FHIR.boolean"/>
      <element name="openingTime" elementType="FHIR.time"/>
      <element name="closingTime" elementType="FHIR.time"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Location.Position" retrievable="false" xsi:type="ClassInfo">
      <element name="longitude" elementType="FHIR.decimal"/>
      <element name="latitude" elementType="FHIR.decimal"/>
      <element name="altitude" elementType="FHIR.decimal"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="LocationMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="LocationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MarketingStatus" identifier="http://hl7.org/fhir/StructureDefinition/MarketingStatus" label="MarketingStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="country" elementType="FHIR.CodeableConcept"/>
      <element name="jurisdiction" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.CodeableConcept"/>
      <element name="dateRange" elementType="FHIR.Period"/>
      <element name="restoreDate" elementType="FHIR.dateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Measure" identifier="http://hl7.org/fhir/StructureDefinition/Measure" label="Measure" retrievable="true" primaryCodePath="topic" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="subtitle" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="subject">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="usage" elementType="FHIR.string"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="library">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="disclaimer" elementType="FHIR.markdown"/>
      <element name="scoring" elementType="FHIR.CodeableConcept"/>
      <element name="compositeScoring" elementType="FHIR.CodeableConcept"/>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="riskAdjustment" elementType="FHIR.string"/>
      <element name="rateAggregation" elementType="FHIR.string"/>
      <element name="rationale" elementType="FHIR.markdown"/>
      <element name="clinicalRecommendationStatement" elementType="FHIR.markdown"/>
      <element name="improvementNotation" elementType="FHIR.CodeableConcept"/>
      <element name="definition">
         <elementTypeSpecifier elementType="FHIR.markdown" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="guidance" elementType="FHIR.markdown"/>
      <element name="group">
         <elementTypeSpecifier elementType="FHIR.Measure.Group" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="supplementalData">
         <elementTypeSpecifier elementType="FHIR.Measure.SupplementalData" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Measure.Group" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="population">
         <elementTypeSpecifier elementType="FHIR.Measure.Group.Population" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="stratifier">
         <elementTypeSpecifier elementType="FHIR.Measure.Group.Stratifier" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Measure.Group.Population" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="criteria" elementType="FHIR.Expression"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Measure.Group.Stratifier" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="criteria" elementType="FHIR.Expression"/>
      <element name="component">
         <elementTypeSpecifier elementType="FHIR.Measure.Group.Stratifier.Component" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Measure.Group.Stratifier.Component" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="criteria" elementType="FHIR.Expression"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Measure.SupplementalData" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="usage">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="criteria" elementType="FHIR.Expression"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MeasureReport" identifier="http://hl7.org/fhir/StructureDefinition/MeasureReport" label="MeasureReport" retrievable="true" primaryCodePath="measure.topic" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.MeasureReportStatus"/>
      <element name="type" elementType="FHIR.MeasureReportType"/>
      <element name="measure" elementType="FHIR.canonical"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="reporter" elementType="FHIR.Reference"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="improvementNotation" elementType="FHIR.CodeableConcept"/>
      <element name="group">
         <elementTypeSpecifier elementType="FHIR.MeasureReport.Group" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="evaluatedResource">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MeasureReport.Group" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="population">
         <elementTypeSpecifier elementType="FHIR.MeasureReport.Group.Population" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="measureScore" elementType="FHIR.Quantity"/>
      <element name="stratifier">
         <elementTypeSpecifier elementType="FHIR.MeasureReport.Group.Stratifier" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MeasureReport.Group.Population" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="count" elementType="FHIR.integer"/>
      <element name="subjectResults" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MeasureReport.Group.Stratifier" retrievable="false" xsi:type="ClassInfo">
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="stratum">
         <elementTypeSpecifier elementType="FHIR.MeasureReport.Group.Stratifier.Stratum" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MeasureReport.Group.Stratifier.Stratum" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="FHIR.CodeableConcept"/>
      <element name="component">
         <elementTypeSpecifier elementType="FHIR.MeasureReport.Group.Stratifier.Stratum.Component" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="population">
         <elementTypeSpecifier elementType="FHIR.MeasureReport.Group.Stratifier.Stratum.Population" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="measureScore" elementType="FHIR.Quantity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MeasureReport.Group.Stratifier.Stratum.Component" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="value" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MeasureReport.Group.Stratifier.Stratum.Population" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="count" elementType="FHIR.integer"/>
      <element name="subjectResults" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MeasureReportStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MeasureReportType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Media" identifier="http://hl7.org/fhir/StructureDefinition/Media" label="Media" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.MediaStatus"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="modality" elementType="FHIR.CodeableConcept"/>
      <element name="view" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="created">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="issued" elementType="FHIR.instant"/>
      <element name="operator" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="bodySite" elementType="FHIR.CodeableConcept"/>
      <element name="deviceName" elementType="FHIR.string"/>
      <element name="device" elementType="FHIR.Reference"/>
      <element name="height" elementType="FHIR.positiveInt"/>
      <element name="width" elementType="FHIR.positiveInt"/>
      <element name="frames" elementType="FHIR.positiveInt"/>
      <element name="duration" elementType="FHIR.decimal"/>
      <element name="content" elementType="FHIR.Attachment"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="subject"/>
      <contextRelationship context="Practitioner" relatedKeyElement="operator"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="subject"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MediaStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Medication" identifier="http://hl7.org/fhir/StructureDefinition/Medication" label="Medication" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.MedicationStatus"/>
      <element name="manufacturer" elementType="FHIR.Reference"/>
      <element name="form" elementType="FHIR.CodeableConcept"/>
      <element name="amount" elementType="FHIR.Ratio"/>
      <element name="ingredient">
         <elementTypeSpecifier elementType="FHIR.Medication.Ingredient" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="batch" elementType="FHIR.Medication.Batch"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Medication.Batch" retrievable="false" xsi:type="ClassInfo">
      <element name="lotNumber" elementType="FHIR.string"/>
      <element name="expirationDate" elementType="FHIR.dateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Medication.Ingredient" retrievable="false" xsi:type="ClassInfo">
      <element name="item">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="isActive" elementType="FHIR.boolean"/>
      <element name="strength" elementType="FHIR.Ratio"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicationAdministration" identifier="http://hl7.org/fhir/StructureDefinition/MedicationAdministration" label="MedicationAdministration" retrievable="true" primaryCodePath="medication" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiates">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.MedicationAdministrationStatus"/>
      <element name="statusReason">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="medication">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="context" elementType="FHIR.Reference"/>
      <element name="supportingInformation">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="effective">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.MedicationAdministration.Performer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="request" elementType="FHIR.Reference"/>
      <element name="device">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="dosage" elementType="FHIR.MedicationAdministration.Dosage"/>
      <element name="eventHistory">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="actor"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Patient" relatedKeyElement="actor"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Encounter" relatedKeyElement="context"/>
      <contextRelationship context="Device" relatedKeyElement="device"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationAdministration.Dosage" retrievable="false" xsi:type="ClassInfo">
      <element name="text" elementType="FHIR.string"/>
      <element name="site" elementType="FHIR.CodeableConcept"/>
      <element name="route" elementType="FHIR.CodeableConcept"/>
      <element name="method" elementType="FHIR.CodeableConcept"/>
      <element name="dose" elementType="FHIR.SimpleQuantity"/>
      <element name="rate">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SimpleQuantity" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationAdministration.Performer" retrievable="false" xsi:type="ClassInfo">
      <element name="function" elementType="FHIR.CodeableConcept"/>
      <element name="actor" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MedicationAdministrationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicationDispense" identifier="http://hl7.org/fhir/StructureDefinition/MedicationDispense" label="MedicationDispense" retrievable="true" primaryCodePath="medication" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.MedicationDispenseStatus"/>
      <element name="statusReason">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="medication">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="context" elementType="FHIR.Reference"/>
      <element name="supportingInformation">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.MedicationDispense.Performer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="authorizingPrescription">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="daysSupply" elementType="FHIR.SimpleQuantity"/>
      <element name="whenPrepared" elementType="FHIR.dateTime"/>
      <element name="whenHandedOver" elementType="FHIR.dateTime"/>
      <element name="destination" elementType="FHIR.Reference"/>
      <element name="receiver">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="dosageInstruction">
         <elementTypeSpecifier elementType="FHIR.Dosage" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="substitution" elementType="FHIR.MedicationDispense.Substitution"/>
      <element name="detectedIssue">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="eventHistory">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="actor"/>
      <contextRelationship context="Practitioner" relatedKeyElement="receiver"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Patient" relatedKeyElement="receiver"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationDispense.Performer" retrievable="false" xsi:type="ClassInfo">
      <element name="function" elementType="FHIR.CodeableConcept"/>
      <element name="actor" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationDispense.Substitution" retrievable="false" xsi:type="ClassInfo">
      <element name="wasSubstituted" elementType="FHIR.boolean"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="reason">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="responsibleParty">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MedicationDispenseStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicationKnowledge" identifier="http://hl7.org/fhir/StructureDefinition/MedicationKnowledge" label="MedicationKnowledge" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.MedicationKnowledgeStatus"/>
      <element name="manufacturer" elementType="FHIR.Reference"/>
      <element name="doseForm" elementType="FHIR.CodeableConcept"/>
      <element name="amount" elementType="FHIR.SimpleQuantity"/>
      <element name="synonym">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedMedicationKnowledge">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.RelatedMedicationKnowledge" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="associatedMedication">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="productType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="monograph">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.Monograph" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="ingredient">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.Ingredient" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="preparationInstruction" elementType="FHIR.markdown"/>
      <element name="intendedRoute">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="cost">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.Cost" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="monitoringProgram">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.MonitoringProgram" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="administrationGuidelines">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.AdministrationGuidelines" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="medicineClassification">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.MedicineClassification" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="packaging" elementType="FHIR.MedicationKnowledge.Packaging"/>
      <element name="drugCharacteristic">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.DrugCharacteristic" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="contraindication">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="regulatory">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.Regulatory" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="kinetics">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.Kinetics" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.AdministrationGuidelines" retrievable="false" xsi:type="ClassInfo">
      <element name="dosage">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.AdministrationGuidelines.Dosage" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="indication">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="patientCharacteristics">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.AdministrationGuidelines.Dosage" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="dosage">
         <elementTypeSpecifier elementType="FHIR.Dosage" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.AdministrationGuidelines.PatientCharacteristics" retrievable="false" xsi:type="ClassInfo">
      <element name="characteristic">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SimpleQuantity" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="value">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.Cost" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="source" elementType="FHIR.string"/>
      <element name="cost" elementType="FHIR.Money"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.DrugCharacteristic" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SimpleQuantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.Ingredient" retrievable="false" xsi:type="ClassInfo">
      <element name="item">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="isActive" elementType="FHIR.boolean"/>
      <element name="strength" elementType="FHIR.Ratio"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.Kinetics" retrievable="false" xsi:type="ClassInfo">
      <element name="areaUnderCurve">
         <elementTypeSpecifier elementType="FHIR.SimpleQuantity" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="lethalDose50">
         <elementTypeSpecifier elementType="FHIR.SimpleQuantity" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="halfLifePeriod" elementType="FHIR.Duration"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.MedicineClassification" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="classification">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.MonitoringProgram" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="name" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.Monograph" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="source" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.Packaging" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.Regulatory" retrievable="false" xsi:type="ClassInfo">
      <element name="regulatoryAuthority" elementType="FHIR.Reference"/>
      <element name="substitution">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.Regulatory.Substitution" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="schedule">
         <elementTypeSpecifier elementType="FHIR.MedicationKnowledge.Regulatory.Schedule" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="maxDispense" elementType="FHIR.MedicationKnowledge.Regulatory.MaxDispense"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.Regulatory.MaxDispense" retrievable="false" xsi:type="ClassInfo">
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="period" elementType="FHIR.Duration"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.Regulatory.Schedule" retrievable="false" xsi:type="ClassInfo">
      <element name="schedule" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.Regulatory.Substitution" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="allowed" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationKnowledge.RelatedMedicationKnowledge" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="reference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MedicationKnowledgeStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicationRequest" identifier="http://hl7.org/fhir/StructureDefinition/MedicationRequest" label="MedicationRequest" retrievable="true" primaryCodePath="medication" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.MedicationRequestStatus"/>
      <element name="statusReason" elementType="FHIR.CodeableConcept"/>
      <element name="intent" elementType="FHIR.MedicationRequestIntent"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="priority" elementType="FHIR.MedicationRequestPriority"/>
      <element name="doNotPerform" elementType="FHIR.boolean"/>
      <element name="reported">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="medication">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="supportingInformation">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="authoredOn" elementType="FHIR.dateTime"/>
      <element name="requester" elementType="FHIR.Reference"/>
      <element name="performer" elementType="FHIR.Reference"/>
      <element name="performerType" elementType="FHIR.CodeableConcept"/>
      <element name="recorder" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="groupIdentifier" elementType="FHIR.Identifier"/>
      <element name="courseOfTherapyType" elementType="FHIR.CodeableConcept"/>
      <element name="insurance">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="dosageInstruction">
         <elementTypeSpecifier elementType="FHIR.Dosage" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="dispenseRequest" elementType="FHIR.MedicationRequest.DispenseRequest"/>
      <element name="substitution" elementType="FHIR.MedicationRequest.Substitution"/>
      <element name="priorPrescription" elementType="FHIR.Reference"/>
      <element name="detectedIssue">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="eventHistory">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="requester"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationRequest.DispenseRequest" retrievable="false" xsi:type="ClassInfo">
      <element name="initialFill" elementType="FHIR.MedicationRequest.DispenseRequest.InitialFill"/>
      <element name="dispenseInterval" elementType="FHIR.Duration"/>
      <element name="validityPeriod" elementType="FHIR.Period"/>
      <element name="numberOfRepeatsAllowed" elementType="FHIR.unsignedInt"/>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="expectedSupplyDuration" elementType="FHIR.Duration"/>
      <element name="performer" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationRequest.DispenseRequest.InitialFill" retrievable="false" xsi:type="ClassInfo">
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="duration" elementType="FHIR.Duration"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicationRequest.Substitution" retrievable="false" xsi:type="ClassInfo">
      <element name="allowed">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="reason" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MedicationRequestIntent" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MedicationRequestPriority" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MedicationRequestStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicationStatement" identifier="http://hl7.org/fhir/StructureDefinition/MedicationStatement" label="MedicationStatement" retrievable="true" primaryCodePath="medication" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.MedicationStatementStatus"/>
      <element name="statusReason">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="medication">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="context" elementType="FHIR.Reference"/>
      <element name="effective">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="dateAsserted" elementType="FHIR.dateTime"/>
      <element name="informationSource" elementType="FHIR.Reference"/>
      <element name="derivedFrom">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="dosage">
         <elementTypeSpecifier elementType="FHIR.Dosage" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="informationSource"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="informationSource"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MedicationStatementStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MedicationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicinalProduct" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProduct" label="MedicinalProduct" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="domain" elementType="FHIR.Coding"/>
      <element name="combinedPharmaceuticalDoseForm" elementType="FHIR.CodeableConcept"/>
      <element name="legalStatusOfSupply" elementType="FHIR.CodeableConcept"/>
      <element name="additionalMonitoringIndicator" elementType="FHIR.CodeableConcept"/>
      <element name="specialMeasures">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="paediatricUseIndicator" elementType="FHIR.CodeableConcept"/>
      <element name="productClassification">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="marketingStatus">
         <elementTypeSpecifier elementType="FHIR.MarketingStatus" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="pharmaceuticalProduct">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="packagedMedicinalProduct">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="attachedDocument">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="masterFile">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="clinicalTrial">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name">
         <elementTypeSpecifier elementType="FHIR.MedicinalProduct.Name" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="crossReference">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="manufacturingBusinessOperation">
         <elementTypeSpecifier elementType="FHIR.MedicinalProduct.ManufacturingBusinessOperation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specialDesignation">
         <elementTypeSpecifier elementType="FHIR.MedicinalProduct.SpecialDesignation" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProduct.ManufacturingBusinessOperation" retrievable="false" xsi:type="ClassInfo">
      <element name="operationType" elementType="FHIR.CodeableConcept"/>
      <element name="authorisationReferenceNumber" elementType="FHIR.Identifier"/>
      <element name="effectiveDate" elementType="FHIR.dateTime"/>
      <element name="confidentialityIndicator" elementType="FHIR.CodeableConcept"/>
      <element name="manufacturer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="regulator" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProduct.Name" retrievable="false" xsi:type="ClassInfo">
      <element name="productName" elementType="FHIR.string"/>
      <element name="namePart">
         <elementTypeSpecifier elementType="FHIR.MedicinalProduct.Name.NamePart" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="countryLanguage">
         <elementTypeSpecifier elementType="FHIR.MedicinalProduct.Name.CountryLanguage" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProduct.Name.CountryLanguage" retrievable="false" xsi:type="ClassInfo">
      <element name="country" elementType="FHIR.CodeableConcept"/>
      <element name="jurisdiction" elementType="FHIR.CodeableConcept"/>
      <element name="language" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProduct.Name.NamePart" retrievable="false" xsi:type="ClassInfo">
      <element name="part" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.Coding"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProduct.SpecialDesignation" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="intendedUse" elementType="FHIR.CodeableConcept"/>
      <element name="indication">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="status" elementType="FHIR.CodeableConcept"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="species" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicinalProductAuthorization" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductAuthorization" label="MedicinalProductAuthorization" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="country">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.CodeableConcept"/>
      <element name="statusDate" elementType="FHIR.dateTime"/>
      <element name="restoreDate" elementType="FHIR.dateTime"/>
      <element name="validityPeriod" elementType="FHIR.Period"/>
      <element name="dataExclusivityPeriod" elementType="FHIR.Period"/>
      <element name="dateOfFirstAuthorization" elementType="FHIR.dateTime"/>
      <element name="internationalBirthDate" elementType="FHIR.dateTime"/>
      <element name="legalBasis" elementType="FHIR.CodeableConcept"/>
      <element name="jurisdictionalAuthorization">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductAuthorization.JurisdictionalAuthorization" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="holder" elementType="FHIR.Reference"/>
      <element name="regulator" elementType="FHIR.Reference"/>
      <element name="procedure" elementType="FHIR.MedicinalProductAuthorization.Procedure"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductAuthorization.JurisdictionalAuthorization" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="country" elementType="FHIR.CodeableConcept"/>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="legalStatusOfSupply" elementType="FHIR.CodeableConcept"/>
      <element name="validityPeriod" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductAuthorization.Procedure" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="date">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="application">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="MedicinalProductAuthorization.Procedure" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicinalProductContraindication" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductContraindication" label="MedicinalProductContraindication" retrievable="true" xsi:type="ClassInfo">
      <element name="subject">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="disease" elementType="FHIR.CodeableConcept"/>
      <element name="diseaseStatus" elementType="FHIR.CodeableConcept"/>
      <element name="comorbidity">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="therapeuticIndication">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="otherTherapy">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductContraindication.OtherTherapy" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="population">
         <elementTypeSpecifier elementType="FHIR.Population" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductContraindication.OtherTherapy" retrievable="false" xsi:type="ClassInfo">
      <element name="therapyRelationshipType" elementType="FHIR.CodeableConcept"/>
      <element name="medication">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicinalProductIndication" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductIndication" label="MedicinalProductIndication" retrievable="true" xsi:type="ClassInfo">
      <element name="subject">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="diseaseSymptomProcedure" elementType="FHIR.CodeableConcept"/>
      <element name="diseaseStatus" elementType="FHIR.CodeableConcept"/>
      <element name="comorbidity">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="intendedEffect" elementType="FHIR.CodeableConcept"/>
      <element name="duration" elementType="FHIR.Quantity"/>
      <element name="otherTherapy">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductIndication.OtherTherapy" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="undesirableEffect">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="population">
         <elementTypeSpecifier elementType="FHIR.Population" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductIndication.OtherTherapy" retrievable="false" xsi:type="ClassInfo">
      <element name="therapyRelationshipType" elementType="FHIR.CodeableConcept"/>
      <element name="medication">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicinalProductIngredient" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductIngredient" label="MedicinalProductIngredient" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="role" elementType="FHIR.CodeableConcept"/>
      <element name="allergenicIndicator" elementType="FHIR.boolean"/>
      <element name="manufacturer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specifiedSubstance">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductIngredient.SpecifiedSubstance" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="substance" elementType="FHIR.MedicinalProductIngredient.Substance"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductIngredient.SpecifiedSubstance" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="group" elementType="FHIR.CodeableConcept"/>
      <element name="confidentiality" elementType="FHIR.CodeableConcept"/>
      <element name="strength">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductIngredient.SpecifiedSubstance.Strength" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductIngredient.SpecifiedSubstance.Strength" retrievable="false" xsi:type="ClassInfo">
      <element name="presentation" elementType="FHIR.Ratio"/>
      <element name="presentationLowLimit" elementType="FHIR.Ratio"/>
      <element name="concentration" elementType="FHIR.Ratio"/>
      <element name="concentrationLowLimit" elementType="FHIR.Ratio"/>
      <element name="measurementPoint" elementType="FHIR.string"/>
      <element name="country">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="referenceStrength">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductIngredient.SpecifiedSubstance.Strength.ReferenceStrength" retrievable="false" xsi:type="ClassInfo">
      <element name="substance" elementType="FHIR.CodeableConcept"/>
      <element name="strength" elementType="FHIR.Ratio"/>
      <element name="strengthLowLimit" elementType="FHIR.Ratio"/>
      <element name="measurementPoint" elementType="FHIR.string"/>
      <element name="country">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductIngredient.Substance" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="strength">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="MedicinalProductIngredient.SpecifiedSubstance.Strength" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicinalProductInteraction" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductInteraction" label="MedicinalProductInteraction" retrievable="true" xsi:type="ClassInfo">
      <element name="subject">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="interactant">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductInteraction.Interactant" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="effect" elementType="FHIR.CodeableConcept"/>
      <element name="incidence" elementType="FHIR.CodeableConcept"/>
      <element name="management" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductInteraction.Interactant" retrievable="false" xsi:type="ClassInfo">
      <element name="item">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicinalProductManufactured" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductManufactured" label="MedicinalProductManufactured" retrievable="true" xsi:type="ClassInfo">
      <element name="manufacturedDoseForm" elementType="FHIR.CodeableConcept"/>
      <element name="unitOfPresentation" elementType="FHIR.CodeableConcept"/>
      <element name="quantity" elementType="FHIR.Quantity"/>
      <element name="manufacturer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="ingredient">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="physicalCharacteristics" elementType="FHIR.ProdCharacteristic"/>
      <element name="otherCharacteristics">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicinalProductPackaged" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductPackaged" label="MedicinalProductPackaged" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="legalStatusOfSupply" elementType="FHIR.CodeableConcept"/>
      <element name="marketingStatus">
         <elementTypeSpecifier elementType="FHIR.MarketingStatus" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="marketingAuthorization" elementType="FHIR.Reference"/>
      <element name="manufacturer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="batchIdentifier">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductPackaged.BatchIdentifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="packageItem">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductPackaged.PackageItem" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductPackaged.BatchIdentifier" retrievable="false" xsi:type="ClassInfo">
      <element name="outerPackaging" elementType="FHIR.Identifier"/>
      <element name="immediatePackaging" elementType="FHIR.Identifier"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductPackaged.PackageItem" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="quantity" elementType="FHIR.Quantity"/>
      <element name="material">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="alternateMaterial">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="device">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="manufacturedItem">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="packageItem">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="MedicinalProductPackaged.PackageItem" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="physicalCharacteristics" elementType="FHIR.ProdCharacteristic"/>
      <element name="otherCharacteristics">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="shelfLifeStorage">
         <elementTypeSpecifier elementType="FHIR.ProductShelfLife" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="manufacturer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicinalProductPharmaceutical" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductPharmaceutical" label="MedicinalProductPharmaceutical" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="administrableDoseForm" elementType="FHIR.CodeableConcept"/>
      <element name="unitOfPresentation" elementType="FHIR.CodeableConcept"/>
      <element name="ingredient">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="device">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="characteristics">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductPharmaceutical.Characteristics" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="routeOfAdministration">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductPharmaceutical.RouteOfAdministration" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductPharmaceutical.Characteristics" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductPharmaceutical.RouteOfAdministration" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="firstDose" elementType="FHIR.Quantity"/>
      <element name="maxSingleDose" elementType="FHIR.Quantity"/>
      <element name="maxDosePerDay" elementType="FHIR.Quantity"/>
      <element name="maxDosePerTreatmentPeriod" elementType="FHIR.Ratio"/>
      <element name="maxTreatmentPeriod" elementType="FHIR.Duration"/>
      <element name="targetSpecies">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="withdrawalPeriod">
         <elementTypeSpecifier elementType="FHIR.MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.WithdrawalPeriod" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MedicinalProductPharmaceutical.RouteOfAdministration.TargetSpecies.WithdrawalPeriod" retrievable="false" xsi:type="ClassInfo">
      <element name="tissue" elementType="FHIR.CodeableConcept"/>
      <element name="value" elementType="FHIR.Quantity"/>
      <element name="supportingInformation" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MedicinalProductUndesirableEffect" identifier="http://hl7.org/fhir/StructureDefinition/MedicinalProductUndesirableEffect" label="MedicinalProductUndesirableEffect" retrievable="true" xsi:type="ClassInfo">
      <element name="subject">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="symptomConditionEffect" elementType="FHIR.CodeableConcept"/>
      <element name="classification" elementType="FHIR.CodeableConcept"/>
      <element name="frequencyOfOccurrence" elementType="FHIR.CodeableConcept"/>
      <element name="population">
         <elementTypeSpecifier elementType="FHIR.Population" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MessageDefinition" identifier="http://hl7.org/fhir/StructureDefinition/MessageDefinition" label="MessageDefinition" retrievable="true" primaryCodePath="event" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="replaces">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="base" elementType="FHIR.canonical"/>
      <element name="parent">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="event">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="category" elementType="FHIR.MessageSignificanceCategory"/>
      <element name="focus">
         <elementTypeSpecifier elementType="FHIR.MessageDefinition.Focus" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="responseRequired" elementType="FHIR.Messageheader_Response_Request"/>
      <element name="allowedResponse">
         <elementTypeSpecifier elementType="FHIR.MessageDefinition.AllowedResponse" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="graph">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MessageDefinition.AllowedResponse" retrievable="false" xsi:type="ClassInfo">
      <element name="message" elementType="FHIR.canonical"/>
      <element name="situation" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MessageDefinition.Focus" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.ResourceType"/>
      <element name="profile" elementType="FHIR.canonical"/>
      <element name="min" elementType="FHIR.unsignedInt"/>
      <element name="max" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MessageHeader" identifier="http://hl7.org/fhir/StructureDefinition/MessageHeader" label="MessageHeader" retrievable="true" xsi:type="ClassInfo">
      <element name="event">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="destination">
         <elementTypeSpecifier elementType="FHIR.MessageHeader.Destination" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="sender" elementType="FHIR.Reference"/>
      <element name="enterer" elementType="FHIR.Reference"/>
      <element name="author" elementType="FHIR.Reference"/>
      <element name="source" elementType="FHIR.MessageHeader.Source"/>
      <element name="responsible" elementType="FHIR.Reference"/>
      <element name="reason" elementType="FHIR.CodeableConcept"/>
      <element name="response" elementType="FHIR.MessageHeader.Response"/>
      <element name="focus">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="definition" elementType="FHIR.canonical"/>
      <contextRelationship context="Practitioner" relatedKeyElement="receiver"/>
      <contextRelationship context="Practitioner" relatedKeyElement="author"/>
      <contextRelationship context="Practitioner" relatedKeyElement="responsible"/>
      <contextRelationship context="Practitioner" relatedKeyElement="enterer"/>
      <contextRelationship context="Device" relatedKeyElement="target"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MessageHeader.Destination" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="target" elementType="FHIR.Reference"/>
      <element name="endpoint" elementType="FHIR.url"/>
      <element name="receiver" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MessageHeader.Response" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.id"/>
      <element name="code" elementType="FHIR.ResponseType"/>
      <element name="details" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MessageHeader.Source" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="software" elementType="FHIR.string"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="contact" elementType="FHIR.ContactPoint"/>
      <element name="endpoint" elementType="FHIR.url"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MessageSignificanceCategory" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Messageheader_Response_Request" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Meta" identifier="http://hl7.org/fhir/StructureDefinition/Meta" label="Meta" retrievable="false" xsi:type="ClassInfo">
      <element name="versionId" elementType="FHIR.id"/>
      <element name="lastUpdated" elementType="FHIR.instant"/>
      <element name="source" elementType="FHIR.uri"/>
      <element name="profile">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="security">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="tag">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="MimeType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="MolecularSequence" identifier="http://hl7.org/fhir/StructureDefinition/MolecularSequence" label="MolecularSequence" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.SequenceType"/>
      <element name="coordinateSystem" elementType="FHIR.integer"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="specimen" elementType="FHIR.Reference"/>
      <element name="device" elementType="FHIR.Reference"/>
      <element name="performer" elementType="FHIR.Reference"/>
      <element name="quantity" elementType="FHIR.Quantity"/>
      <element name="referenceSeq" elementType="FHIR.MolecularSequence.ReferenceSeq"/>
      <element name="variant">
         <elementTypeSpecifier elementType="FHIR.MolecularSequence.Variant" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="observedSeq" elementType="FHIR.string"/>
      <element name="quality">
         <elementTypeSpecifier elementType="FHIR.MolecularSequence.Quality" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="readCoverage" elementType="FHIR.integer"/>
      <element name="repository">
         <elementTypeSpecifier elementType="FHIR.MolecularSequence.Repository" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="pointer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="structureVariant">
         <elementTypeSpecifier elementType="FHIR.MolecularSequence.StructureVariant" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MolecularSequence.Quality" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.QualityType"/>
      <element name="standardSequence" elementType="FHIR.CodeableConcept"/>
      <element name="start" elementType="FHIR.integer"/>
      <element name="end" elementType="FHIR.integer"/>
      <element name="score" elementType="FHIR.Quantity"/>
      <element name="method" elementType="FHIR.CodeableConcept"/>
      <element name="truthTP" elementType="FHIR.decimal"/>
      <element name="queryTP" elementType="FHIR.decimal"/>
      <element name="truthFN" elementType="FHIR.decimal"/>
      <element name="queryFP" elementType="FHIR.decimal"/>
      <element name="gtFP" elementType="FHIR.decimal"/>
      <element name="precision" elementType="FHIR.decimal"/>
      <element name="recall" elementType="FHIR.decimal"/>
      <element name="fScore" elementType="FHIR.decimal"/>
      <element name="roc" elementType="FHIR.MolecularSequence.Quality.Roc"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MolecularSequence.Quality.Roc" retrievable="false" xsi:type="ClassInfo">
      <element name="score">
         <elementTypeSpecifier elementType="FHIR.integer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="numTP">
         <elementTypeSpecifier elementType="FHIR.integer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="numFP">
         <elementTypeSpecifier elementType="FHIR.integer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="numFN">
         <elementTypeSpecifier elementType="FHIR.integer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="precision">
         <elementTypeSpecifier elementType="FHIR.decimal" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="sensitivity">
         <elementTypeSpecifier elementType="FHIR.decimal" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="fMeasure">
         <elementTypeSpecifier elementType="FHIR.decimal" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MolecularSequence.ReferenceSeq" retrievable="false" xsi:type="ClassInfo">
      <element name="chromosome" elementType="FHIR.CodeableConcept"/>
      <element name="genomeBuild" elementType="FHIR.string"/>
      <element name="orientation" elementType="FHIR.OrientationType"/>
      <element name="referenceSeqId" elementType="FHIR.CodeableConcept"/>
      <element name="referenceSeqPointer" elementType="FHIR.Reference"/>
      <element name="referenceSeqString" elementType="FHIR.string"/>
      <element name="strand" elementType="FHIR.StrandType"/>
      <element name="windowStart" elementType="FHIR.integer"/>
      <element name="windowEnd" elementType="FHIR.integer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MolecularSequence.Repository" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.RepositoryType"/>
      <element name="url" elementType="FHIR.uri"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="datasetId" elementType="FHIR.string"/>
      <element name="variantsetId" elementType="FHIR.string"/>
      <element name="readsetId" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MolecularSequence.StructureVariant" retrievable="false" xsi:type="ClassInfo">
      <element name="variantType" elementType="FHIR.CodeableConcept"/>
      <element name="exact" elementType="FHIR.boolean"/>
      <element name="length" elementType="FHIR.integer"/>
      <element name="outer" elementType="FHIR.MolecularSequence.StructureVariant.Outer"/>
      <element name="inner" elementType="FHIR.MolecularSequence.StructureVariant.Inner"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MolecularSequence.StructureVariant.Inner" retrievable="false" xsi:type="ClassInfo">
      <element name="start" elementType="FHIR.integer"/>
      <element name="end" elementType="FHIR.integer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MolecularSequence.StructureVariant.Outer" retrievable="false" xsi:type="ClassInfo">
      <element name="start" elementType="FHIR.integer"/>
      <element name="end" elementType="FHIR.integer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="MolecularSequence.Variant" retrievable="false" xsi:type="ClassInfo">
      <element name="start" elementType="FHIR.integer"/>
      <element name="end" elementType="FHIR.integer"/>
      <element name="observedAllele" elementType="FHIR.string"/>
      <element name="referenceAllele" elementType="FHIR.string"/>
      <element name="cigar" elementType="FHIR.string"/>
      <element name="variantPointer" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Money" identifier="http://hl7.org/fhir/StructureDefinition/Money" label="Money" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="FHIR.decimal"/>
      <element name="currency" elementType="FHIR.CurrencyCode"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Quantity" namespace="FHIR" name="MoneyQuantity" identifier="http://hl7.org/fhir/StructureDefinition/MoneyQuantity" label="MoneyQuantity" retrievable="false" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="value" elementType="FHIR.decimal"/>
      <element name="comparator" elementType="FHIR.QuantityComparator"/>
      <element name="unit" elementType="FHIR.string"/>
      <element name="system" elementType="FHIR.uri"/>
      <element name="code" elementType="FHIR.code"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="NameUse" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="NamingSystem" identifier="http://hl7.org/fhir/StructureDefinition/NamingSystem" label="NamingSystem" retrievable="true" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="kind" elementType="FHIR.NamingSystemType"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="responsible" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="usage" elementType="FHIR.string"/>
      <element name="uniqueId">
         <elementTypeSpecifier elementType="FHIR.NamingSystem.UniqueId" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="NamingSystem.UniqueId" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.NamingSystemIdentifierType"/>
      <element name="value" elementType="FHIR.string"/>
      <element name="preferred" elementType="FHIR.boolean"/>
      <element name="comment" elementType="FHIR.string"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="NamingSystemIdentifierType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="NamingSystemType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Narrative" identifier="http://hl7.org/fhir/StructureDefinition/Narrative" label="Narrative" retrievable="false" xsi:type="ClassInfo">
      <element name="status" elementType="FHIR.NarrativeStatus"/>
      <element name="div" elementType="FHIR.xhtml"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="NarrativeStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="NoteType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="NutritiionOrderIntent" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="NutritionOrder" identifier="http://hl7.org/fhir/StructureDefinition/NutritionOrder" label="NutritionOrder" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiates">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.NutritionOrderStatus"/>
      <element name="intent" elementType="FHIR.NutritiionOrderIntent"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="dateTime" elementType="FHIR.dateTime"/>
      <element name="orderer" elementType="FHIR.Reference"/>
      <element name="allergyIntolerance">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="foodPreferenceModifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="excludeFoodModifier">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="oralDiet" elementType="FHIR.NutritionOrder.OralDiet"/>
      <element name="supplement">
         <elementTypeSpecifier elementType="FHIR.NutritionOrder.Supplement" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="enteralFormula" elementType="FHIR.NutritionOrder.EnteralFormula"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="orderer"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="NutritionOrder.EnteralFormula" retrievable="false" xsi:type="ClassInfo">
      <element name="baseFormulaType" elementType="FHIR.CodeableConcept"/>
      <element name="baseFormulaProductName" elementType="FHIR.string"/>
      <element name="additiveType" elementType="FHIR.CodeableConcept"/>
      <element name="additiveProductName" elementType="FHIR.string"/>
      <element name="caloricDensity" elementType="FHIR.SimpleQuantity"/>
      <element name="routeofAdministration" elementType="FHIR.CodeableConcept"/>
      <element name="administration">
         <elementTypeSpecifier elementType="FHIR.NutritionOrder.EnteralFormula.Administration" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="maxVolumeToDeliver" elementType="FHIR.SimpleQuantity"/>
      <element name="administrationInstruction" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="NutritionOrder.EnteralFormula.Administration" retrievable="false" xsi:type="ClassInfo">
      <element name="schedule" elementType="FHIR.Timing"/>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="rate">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="SimpleQuantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="NutritionOrder.OralDiet" retrievable="false" xsi:type="ClassInfo">
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="schedule">
         <elementTypeSpecifier elementType="FHIR.Timing" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="nutrient">
         <elementTypeSpecifier elementType="FHIR.NutritionOrder.OralDiet.Nutrient" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="texture">
         <elementTypeSpecifier elementType="FHIR.NutritionOrder.OralDiet.Texture" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="fluidConsistencyType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instruction" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="NutritionOrder.OralDiet.Nutrient" retrievable="false" xsi:type="ClassInfo">
      <element name="modifier" elementType="FHIR.CodeableConcept"/>
      <element name="amount" elementType="FHIR.SimpleQuantity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="NutritionOrder.OralDiet.Texture" retrievable="false" xsi:type="ClassInfo">
      <element name="modifier" elementType="FHIR.CodeableConcept"/>
      <element name="foodType" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="NutritionOrder.Supplement" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="productName" elementType="FHIR.string"/>
      <element name="schedule">
         <elementTypeSpecifier elementType="FHIR.Timing" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="instruction" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="NutritionOrderStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Observation" identifier="http://hl7.org/fhir/StructureDefinition/Observation" label="Observation" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ObservationStatus"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="focus">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="effective">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="issued" elementType="FHIR.instant"/>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="dataAbsentReason" elementType="FHIR.CodeableConcept"/>
      <element name="interpretation">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="bodySite" elementType="FHIR.CodeableConcept"/>
      <element name="method" elementType="FHIR.CodeableConcept"/>
      <element name="specimen" elementType="FHIR.Reference"/>
      <element name="device" elementType="FHIR.Reference"/>
      <element name="referenceRange">
         <elementTypeSpecifier elementType="FHIR.Observation.ReferenceRange" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="hasMember">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="derivedFrom">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="component">
         <elementTypeSpecifier elementType="FHIR.Observation.Component" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="performer"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="performer"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="subject"/>
      <contextRelationship context="Device" relatedKeyElement="device"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="performer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Observation.Component" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="dataAbsentReason" elementType="FHIR.CodeableConcept"/>
      <element name="interpretation">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="referenceRange">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="Observation.ReferenceRange" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Observation.ReferenceRange" retrievable="false" xsi:type="ClassInfo">
      <element name="low" elementType="FHIR.SimpleQuantity"/>
      <element name="high" elementType="FHIR.SimpleQuantity"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="appliesTo">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="age" elementType="FHIR.Range"/>
      <element name="text" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ObservationDataType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ObservationDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ObservationDefinition" label="ObservationDefinition" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="permittedDataType">
         <elementTypeSpecifier elementType="FHIR.ObservationDataType" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="multipleResultsAllowed" elementType="FHIR.boolean"/>
      <element name="method" elementType="FHIR.CodeableConcept"/>
      <element name="preferredReportName" elementType="FHIR.string"/>
      <element name="quantitativeDetails" elementType="FHIR.ObservationDefinition.QuantitativeDetails"/>
      <element name="qualifiedInterval">
         <elementTypeSpecifier elementType="FHIR.ObservationDefinition.QualifiedInterval" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="validCodedValueSet" elementType="FHIR.Reference"/>
      <element name="normalCodedValueSet" elementType="FHIR.Reference"/>
      <element name="abnormalCodedValueSet" elementType="FHIR.Reference"/>
      <element name="criticalCodedValueSet" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ObservationDefinition.QualifiedInterval" retrievable="false" xsi:type="ClassInfo">
      <element name="category" elementType="FHIR.ObservationRangeCategory"/>
      <element name="range" elementType="FHIR.Range"/>
      <element name="context" elementType="FHIR.CodeableConcept"/>
      <element name="appliesTo">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="gender" elementType="FHIR.AdministrativeGender"/>
      <element name="age" elementType="FHIR.Range"/>
      <element name="gestationalAge" elementType="FHIR.Range"/>
      <element name="condition" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ObservationDefinition.QuantitativeDetails" retrievable="false" xsi:type="ClassInfo">
      <element name="customaryUnit" elementType="FHIR.CodeableConcept"/>
      <element name="unit" elementType="FHIR.CodeableConcept"/>
      <element name="conversionFactor" elementType="FHIR.decimal"/>
      <element name="decimalPrecision" elementType="FHIR.integer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ObservationRangeCategory" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ObservationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="OperationDefinition" identifier="http://hl7.org/fhir/StructureDefinition/OperationDefinition" label="OperationDefinition" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="kind" elementType="FHIR.OperationKind"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="affectsState" elementType="FHIR.boolean"/>
      <element name="code" elementType="FHIR.code"/>
      <element name="comment" elementType="FHIR.markdown"/>
      <element name="base" elementType="FHIR.canonical"/>
      <element name="resource">
         <elementTypeSpecifier elementType="FHIR.ResourceType" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="system" elementType="FHIR.boolean"/>
      <element name="type" elementType="FHIR.boolean"/>
      <element name="instance" elementType="FHIR.boolean"/>
      <element name="inputProfile" elementType="FHIR.canonical"/>
      <element name="outputProfile" elementType="FHIR.canonical"/>
      <element name="parameter">
         <elementTypeSpecifier elementType="FHIR.OperationDefinition.Parameter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="overload">
         <elementTypeSpecifier elementType="FHIR.OperationDefinition.Overload" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="OperationDefinition.Overload" retrievable="false" xsi:type="ClassInfo">
      <element name="parameterName">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="comment" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="OperationDefinition.Parameter" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.code"/>
      <element name="use" elementType="FHIR.OperationParameterUse"/>
      <element name="min" elementType="FHIR.integer"/>
      <element name="max" elementType="FHIR.string"/>
      <element name="documentation" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.FHIRAllTypes"/>
      <element name="targetProfile">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="searchType" elementType="FHIR.SearchParamType"/>
      <element name="binding" elementType="FHIR.OperationDefinition.Parameter.Binding"/>
      <element name="referencedFrom">
         <elementTypeSpecifier elementType="FHIR.OperationDefinition.Parameter.ReferencedFrom" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="part">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="OperationDefinition.Parameter" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="OperationDefinition.Parameter.Binding" retrievable="false" xsi:type="ClassInfo">
      <element name="strength" elementType="FHIR.BindingStrength"/>
      <element name="valueSet" elementType="FHIR.canonical"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="OperationDefinition.Parameter.ReferencedFrom" retrievable="false" xsi:type="ClassInfo">
      <element name="source" elementType="FHIR.string"/>
      <element name="sourceId" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="OperationKind" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="OperationOutcome" identifier="http://hl7.org/fhir/StructureDefinition/OperationOutcome" label="OperationOutcome" retrievable="true" primaryCodePath="issue.code" xsi:type="ClassInfo">
      <element name="issue">
         <elementTypeSpecifier elementType="FHIR.OperationOutcome.Issue" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="OperationOutcome.Issue" retrievable="false" xsi:type="ClassInfo">
      <element name="severity" elementType="FHIR.IssueSeverity"/>
      <element name="code" elementType="FHIR.IssueType"/>
      <element name="details" elementType="FHIR.CodeableConcept"/>
      <element name="diagnostics" elementType="FHIR.string"/>
      <element name="location">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="expression">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="OperationParameterUse" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Organization" identifier="http://hl7.org/fhir/StructureDefinition/Organization" label="Organization" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name" elementType="FHIR.string"/>
      <element name="alias">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="address">
         <elementTypeSpecifier elementType="FHIR.Address" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf" elementType="FHIR.Reference"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.Organization.Contact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endpoint">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Organization.Contact" retrievable="false" xsi:type="ClassInfo">
      <element name="purpose" elementType="FHIR.CodeableConcept"/>
      <element name="name" elementType="FHIR.HumanName"/>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="address" elementType="FHIR.Address"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="OrganizationAffiliation" identifier="http://hl7.org/fhir/StructureDefinition/OrganizationAffiliation" label="OrganizationAffiliation" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="organization" elementType="FHIR.Reference"/>
      <element name="participatingOrganization" elementType="FHIR.Reference"/>
      <element name="network">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specialty">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="location">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="healthcareService">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endpoint">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="OrientationType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ParameterDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ParameterDefinition" label="ParameterDefinition" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.code"/>
      <element name="use" elementType="FHIR.ParameterUse"/>
      <element name="min" elementType="FHIR.integer"/>
      <element name="max" elementType="FHIR.string"/>
      <element name="documentation" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.FHIRAllTypes"/>
      <element name="profile" elementType="FHIR.canonical"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ParameterUse" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Resource" namespace="FHIR" name="Parameters" identifier="http://hl7.org/fhir/StructureDefinition/Parameters" label="Parameters" retrievable="true" xsi:type="ClassInfo">
      <element name="parameter">
         <elementTypeSpecifier elementType="FHIR.Parameters.Parameter" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Parameters.Parameter" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="id" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="markdown" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="oid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="url" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uuid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Annotation" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactPoint" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Count" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Distance" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="HumanName" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Identifier" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Signature" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactDetail" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Contributor" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ParameterDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="RelatedArtifact" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="TriggerDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="UsageContext" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Dosage" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Meta" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="resource" elementType="FHIR.Resource"/>
      <element name="part">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="Parameters.Parameter" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ParticipantRequired" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ParticipantStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ParticipationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Patient" identifier="http://hl7.org/fhir/StructureDefinition/Patient" label="Patient" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="name">
         <elementTypeSpecifier elementType="FHIR.HumanName" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="gender" elementType="FHIR.AdministrativeGender"/>
      <element name="birthDate" elementType="FHIR.date"/>
      <element name="deceased">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="address">
         <elementTypeSpecifier elementType="FHIR.Address" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="maritalStatus" elementType="FHIR.CodeableConcept"/>
      <element name="multipleBirth">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="photo">
         <elementTypeSpecifier elementType="FHIR.Attachment" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.Patient.Contact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="communication">
         <elementTypeSpecifier elementType="FHIR.Patient.Communication" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="generalPractitioner">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="managingOrganization" elementType="FHIR.Reference"/>
      <element name="link">
         <elementTypeSpecifier elementType="FHIR.Patient.Link" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="generalPractitioner"/>
      <contextRelationship context="Patient" relatedKeyElement="other"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="other"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Patient.Communication" retrievable="false" xsi:type="ClassInfo">
      <element name="language" elementType="FHIR.CodeableConcept"/>
      <element name="preferred" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Patient.Contact" retrievable="false" xsi:type="ClassInfo">
      <element name="relationship">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name" elementType="FHIR.HumanName"/>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="address" elementType="FHIR.Address"/>
      <element name="gender" elementType="FHIR.AdministrativeGender"/>
      <element name="organization" elementType="FHIR.Reference"/>
      <element name="period" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Patient.Link" retrievable="false" xsi:type="ClassInfo">
      <element name="other" elementType="FHIR.Reference"/>
      <element name="type" elementType="FHIR.LinkType"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="PaymentNotice" identifier="http://hl7.org/fhir/StructureDefinition/PaymentNotice" label="PaymentNotice" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.PaymentNoticeStatus"/>
      <element name="request" elementType="FHIR.Reference"/>
      <element name="response" elementType="FHIR.Reference"/>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="provider" elementType="FHIR.Reference"/>
      <element name="payment" elementType="FHIR.Reference"/>
      <element name="paymentDate" elementType="FHIR.date"/>
      <element name="payee" elementType="FHIR.Reference"/>
      <element name="recipient" elementType="FHIR.Reference"/>
      <element name="amount" elementType="FHIR.Money"/>
      <element name="paymentStatus" elementType="FHIR.CodeableConcept"/>
      <contextRelationship context="Practitioner" relatedKeyElement="provider"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="PaymentNoticeStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="PaymentReconciliation" identifier="http://hl7.org/fhir/StructureDefinition/PaymentReconciliation" label="PaymentReconciliation" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.PaymentReconciliationStatus"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="paymentIssuer" elementType="FHIR.Reference"/>
      <element name="request" elementType="FHIR.Reference"/>
      <element name="requestor" elementType="FHIR.Reference"/>
      <element name="outcome" elementType="FHIR.RemittanceOutcome"/>
      <element name="disposition" elementType="FHIR.string"/>
      <element name="paymentDate" elementType="FHIR.date"/>
      <element name="paymentAmount" elementType="FHIR.Money"/>
      <element name="paymentIdentifier" elementType="FHIR.Identifier"/>
      <element name="detail">
         <elementTypeSpecifier elementType="FHIR.PaymentReconciliation.Detail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="formCode" elementType="FHIR.CodeableConcept"/>
      <element name="processNote">
         <elementTypeSpecifier elementType="FHIR.PaymentReconciliation.ProcessNote" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="requestor"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PaymentReconciliation.Detail" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="predecessor" elementType="FHIR.Identifier"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="request" elementType="FHIR.Reference"/>
      <element name="submitter" elementType="FHIR.Reference"/>
      <element name="response" elementType="FHIR.Reference"/>
      <element name="date" elementType="FHIR.date"/>
      <element name="responsible" elementType="FHIR.Reference"/>
      <element name="payee" elementType="FHIR.Reference"/>
      <element name="amount" elementType="FHIR.Money"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PaymentReconciliation.ProcessNote" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.NoteType"/>
      <element name="text" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="PaymentReconciliationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Period" identifier="http://hl7.org/fhir/StructureDefinition/Period" label="Period" retrievable="false" xsi:type="ClassInfo">
      <element name="start" elementType="FHIR.dateTime"/>
      <element name="end" elementType="FHIR.dateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Person" identifier="http://hl7.org/fhir/StructureDefinition/Person" label="Person" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name">
         <elementTypeSpecifier elementType="FHIR.HumanName" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="gender" elementType="FHIR.AdministrativeGender"/>
      <element name="birthDate" elementType="FHIR.date"/>
      <element name="address">
         <elementTypeSpecifier elementType="FHIR.Address" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="photo" elementType="FHIR.Attachment"/>
      <element name="managingOrganization" elementType="FHIR.Reference"/>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="link">
         <elementTypeSpecifier elementType="FHIR.Person.Link" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="where(resolve() is Practitioner)"/>
      <contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="target"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Person.Link" retrievable="false" xsi:type="ClassInfo">
      <element name="target" elementType="FHIR.Reference"/>
      <element name="assurance" elementType="FHIR.IdentityAssuranceLevel"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="PlanDefinition" identifier="http://hl7.org/fhir/StructureDefinition/PlanDefinition" label="PlanDefinition" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="subtitle" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="subject">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="usage" elementType="FHIR.string"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="library">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="goal">
         <elementTypeSpecifier elementType="FHIR.PlanDefinition.Goal" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="action">
         <elementTypeSpecifier elementType="FHIR.PlanDefinition.Action" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PlanDefinition.Action" retrievable="false" xsi:type="ClassInfo">
      <element name="prefix" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="textEquivalent" elementType="FHIR.string"/>
      <element name="priority" elementType="FHIR.RequestPriority"/>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reason">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="documentation">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="goalId">
         <elementTypeSpecifier elementType="FHIR.id" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subject">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="trigger">
         <elementTypeSpecifier elementType="FHIR.TriggerDefinition" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="condition">
         <elementTypeSpecifier elementType="FHIR.PlanDefinition.Action.Condition" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="input">
         <elementTypeSpecifier elementType="FHIR.DataRequirement" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="output">
         <elementTypeSpecifier elementType="FHIR.DataRequirement" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedAction">
         <elementTypeSpecifier elementType="FHIR.PlanDefinition.Action.RelatedAction" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="timing">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="participant">
         <elementTypeSpecifier elementType="FHIR.PlanDefinition.Action.Participant" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="groupingBehavior" elementType="FHIR.ActionGroupingBehavior"/>
      <element name="selectionBehavior" elementType="FHIR.ActionSelectionBehavior"/>
      <element name="requiredBehavior" elementType="FHIR.ActionRequiredBehavior"/>
      <element name="precheckBehavior" elementType="FHIR.ActionPrecheckBehavior"/>
      <element name="cardinalityBehavior" elementType="FHIR.ActionCardinalityBehavior"/>
      <element name="definition">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="transform" elementType="FHIR.canonical"/>
      <element name="dynamicValue">
         <elementTypeSpecifier elementType="FHIR.PlanDefinition.Action.DynamicValue" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="action">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="PlanDefinition.Action" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PlanDefinition.Action.Condition" retrievable="false" xsi:type="ClassInfo">
      <element name="kind" elementType="FHIR.ActionConditionKind"/>
      <element name="expression" elementType="FHIR.Expression"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PlanDefinition.Action.DynamicValue" retrievable="false" xsi:type="ClassInfo">
      <element name="path" elementType="FHIR.string"/>
      <element name="expression" elementType="FHIR.Expression"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PlanDefinition.Action.Participant" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.ActionParticipantType"/>
      <element name="role" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PlanDefinition.Action.RelatedAction" retrievable="false" xsi:type="ClassInfo">
      <element name="actionId" elementType="FHIR.id"/>
      <element name="relationship" elementType="FHIR.ActionRelationshipType"/>
      <element name="offset">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PlanDefinition.Goal" retrievable="false" xsi:type="ClassInfo">
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.CodeableConcept"/>
      <element name="priority" elementType="FHIR.CodeableConcept"/>
      <element name="start" elementType="FHIR.CodeableConcept"/>
      <element name="addresses">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="documentation">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="target">
         <elementTypeSpecifier elementType="FHIR.PlanDefinition.Goal.Target" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PlanDefinition.Goal.Target" retrievable="false" xsi:type="ClassInfo">
      <element name="measure" elementType="FHIR.CodeableConcept"/>
      <element name="detail">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="due" elementType="FHIR.Duration"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Population" identifier="http://hl7.org/fhir/StructureDefinition/Population" label="Population" retrievable="false" xsi:type="ClassInfo">
      <element name="age">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="gender" elementType="FHIR.CodeableConcept"/>
      <element name="race" elementType="FHIR.CodeableConcept"/>
      <element name="physiologicalCondition" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Practitioner" identifier="http://hl7.org/fhir/StructureDefinition/Practitioner" label="Practitioner" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="name">
         <elementTypeSpecifier elementType="FHIR.HumanName" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="address">
         <elementTypeSpecifier elementType="FHIR.Address" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="gender" elementType="FHIR.AdministrativeGender"/>
      <element name="birthDate" elementType="FHIR.date"/>
      <element name="photo">
         <elementTypeSpecifier elementType="FHIR.Attachment" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="qualification">
         <elementTypeSpecifier elementType="FHIR.Practitioner.Qualification" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="communication">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Practitioner.Qualification" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="issuer" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="PractitionerRole" identifier="http://hl7.org/fhir/StructureDefinition/PractitionerRole" label="PractitionerRole" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="practitioner" elementType="FHIR.Reference"/>
      <element name="organization" elementType="FHIR.Reference"/>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specialty">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="location">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="healthcareService">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="availableTime">
         <elementTypeSpecifier elementType="FHIR.PractitionerRole.AvailableTime" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="notAvailable">
         <elementTypeSpecifier elementType="FHIR.PractitionerRole.NotAvailable" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="availabilityExceptions" elementType="FHIR.string"/>
      <element name="endpoint">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="practitioner"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PractitionerRole.AvailableTime" retrievable="false" xsi:type="ClassInfo">
      <element name="daysOfWeek">
         <elementTypeSpecifier elementType="FHIR.DaysOfWeek" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="allDay" elementType="FHIR.boolean"/>
      <element name="availableStartTime" elementType="FHIR.time"/>
      <element name="availableEndTime" elementType="FHIR.time"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="PractitionerRole.NotAvailable" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="during" elementType="FHIR.Period"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Procedure" identifier="http://hl7.org/fhir/StructureDefinition/Procedure" label="Procedure" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ProcedureStatus"/>
      <element name="statusReason" elementType="FHIR.CodeableConcept"/>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="performed">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="recorder" elementType="FHIR.Reference"/>
      <element name="asserter" elementType="FHIR.Reference"/>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.Procedure.Performer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="bodySite">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="outcome" elementType="FHIR.CodeableConcept"/>
      <element name="report">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="complication">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="complicationDetail">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="followUp">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="focalDevice">
         <elementTypeSpecifier elementType="FHIR.Procedure.FocalDevice" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="usedReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="usedCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="actor"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Patient" relatedKeyElement="actor"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Procedure.FocalDevice" retrievable="false" xsi:type="ClassInfo">
      <element name="action" elementType="FHIR.CodeableConcept"/>
      <element name="manipulated" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Procedure.Performer" retrievable="false" xsi:type="ClassInfo">
      <element name="function" elementType="FHIR.CodeableConcept"/>
      <element name="actor" elementType="FHIR.Reference"/>
      <element name="onBehalfOf" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ProcedureStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ProdCharacteristic" identifier="http://hl7.org/fhir/StructureDefinition/ProdCharacteristic" label="ProdCharacteristic" retrievable="false" xsi:type="ClassInfo">
      <element name="height" elementType="FHIR.Quantity"/>
      <element name="width" elementType="FHIR.Quantity"/>
      <element name="depth" elementType="FHIR.Quantity"/>
      <element name="weight" elementType="FHIR.Quantity"/>
      <element name="nominalVolume" elementType="FHIR.Quantity"/>
      <element name="externalDiameter" elementType="FHIR.Quantity"/>
      <element name="shape" elementType="FHIR.string"/>
      <element name="color">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="imprint">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="image">
         <elementTypeSpecifier elementType="FHIR.Attachment" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="scoring" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ProductShelfLife" identifier="http://hl7.org/fhir/StructureDefinition/ProductShelfLife" label="ProductShelfLife" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="period" elementType="FHIR.Quantity"/>
      <element name="specialPrecautionsForStorage">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="PropertyRepresentation" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="PropertyType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Provenance" identifier="http://hl7.org/fhir/StructureDefinition/Provenance" label="Provenance" retrievable="true" xsi:type="ClassInfo">
      <element name="target">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="occurred">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="recorded" elementType="FHIR.instant"/>
      <element name="policy">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="reason">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="activity" elementType="FHIR.CodeableConcept"/>
      <element name="agent">
         <elementTypeSpecifier elementType="FHIR.Provenance.Agent" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="entity">
         <elementTypeSpecifier elementType="FHIR.Provenance.Entity" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="signature">
         <elementTypeSpecifier elementType="FHIR.Signature" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="who"/>
      <contextRelationship context="Patient" relatedKeyElement="where(resolve() is Patient)"/>
      <contextRelationship context="Device" relatedKeyElement="who"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="who"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Provenance.Agent" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="role">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="who" elementType="FHIR.Reference"/>
      <element name="onBehalfOf" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Provenance.Entity" retrievable="false" xsi:type="ClassInfo">
      <element name="role" elementType="FHIR.ProvenanceEntityRole"/>
      <element name="what" elementType="FHIR.Reference"/>
      <element name="agent">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="Provenance.Agent" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ProvenanceEntityRole" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="PublicationStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="QualityType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Quantity" identifier="http://hl7.org/fhir/StructureDefinition/Quantity" label="Quantity" retrievable="false" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="value" elementType="FHIR.decimal"/>
      <element name="comparator" elementType="FHIR.QuantityComparator"/>
      <element name="unit" elementType="FHIR.string"/>
      <element name="system" elementType="FHIR.uri"/>
      <element name="code" elementType="FHIR.code"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="QuantityComparator" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Questionnaire" identifier="http://hl7.org/fhir/StructureDefinition/Questionnaire" label="Questionnaire" retrievable="true" primaryCodePath="name" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="derivedFrom">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="subjectType">
         <elementTypeSpecifier elementType="FHIR.ResourceType" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="item">
         <elementTypeSpecifier elementType="FHIR.Questionnaire.Item" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Questionnaire.Item" retrievable="false" xsi:type="ClassInfo">
      <element name="linkId" elementType="FHIR.string"/>
      <element name="definition" elementType="FHIR.uri"/>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="prefix" elementType="FHIR.string"/>
      <element name="text" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.QuestionnaireItemType"/>
      <element name="enableWhen">
         <elementTypeSpecifier elementType="FHIR.Questionnaire.Item.EnableWhen" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="enableBehavior" elementType="FHIR.EnableWhenBehavior"/>
      <element name="required" elementType="FHIR.boolean"/>
      <element name="repeats" elementType="FHIR.boolean"/>
      <element name="readOnly" elementType="FHIR.boolean"/>
      <element name="maxLength" elementType="FHIR.integer"/>
      <element name="answerValueSet" elementType="FHIR.canonical"/>
      <element name="answerOption">
         <elementTypeSpecifier elementType="FHIR.Questionnaire.Item.AnswerOption" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="initial">
         <elementTypeSpecifier elementType="FHIR.Questionnaire.Item.Initial" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="item">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="Questionnaire.Item" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Questionnaire.Item.AnswerOption" retrievable="false" xsi:type="ClassInfo">
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="initialSelected" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Questionnaire.Item.EnableWhen" retrievable="false" xsi:type="ClassInfo">
      <element name="question" elementType="FHIR.string"/>
      <element name="operator" elementType="FHIR.QuestionnaireItemOperator"/>
      <element name="answer">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Questionnaire.Item.Initial" retrievable="false" xsi:type="ClassInfo">
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="QuestionnaireItemOperator" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="QuestionnaireItemType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="QuestionnaireResponse" identifier="http://hl7.org/fhir/StructureDefinition/QuestionnaireResponse" label="QuestionnaireResponse" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="questionnaire" elementType="FHIR.canonical"/>
      <element name="status" elementType="FHIR.QuestionnaireResponseStatus"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="authored" elementType="FHIR.dateTime"/>
      <element name="author" elementType="FHIR.Reference"/>
      <element name="source" elementType="FHIR.Reference"/>
      <element name="item">
         <elementTypeSpecifier elementType="FHIR.QuestionnaireResponse.Item" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="author"/>
      <contextRelationship context="Practitioner" relatedKeyElement="source"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="author"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="author"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="author"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="source"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="QuestionnaireResponse.Item" retrievable="false" xsi:type="ClassInfo">
      <element name="linkId" elementType="FHIR.string"/>
      <element name="definition" elementType="FHIR.uri"/>
      <element name="text" elementType="FHIR.string"/>
      <element name="answer">
         <elementTypeSpecifier elementType="FHIR.QuestionnaireResponse.Item.Answer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="item">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="QuestionnaireResponse.Item" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="QuestionnaireResponse.Item.Answer" retrievable="false" xsi:type="ClassInfo">
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="item">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="QuestionnaireResponse.Item" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="QuestionnaireResponseStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Range" identifier="http://hl7.org/fhir/StructureDefinition/Range" label="Range" retrievable="false" xsi:type="ClassInfo">
      <element name="low" elementType="FHIR.SimpleQuantity"/>
      <element name="high" elementType="FHIR.SimpleQuantity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Ratio" identifier="http://hl7.org/fhir/StructureDefinition/Ratio" label="Ratio" retrievable="false" xsi:type="ClassInfo">
      <element name="numerator" elementType="FHIR.Quantity"/>
      <element name="denominator" elementType="FHIR.Quantity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Reference" identifier="http://hl7.org/fhir/StructureDefinition/Reference" label="Reference" retrievable="false" xsi:type="ClassInfo">
      <element name="reference" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.uri"/>
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="display" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ReferenceHandlingPolicy" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ReferenceVersionRules" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ReferredDocumentStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="RelatedArtifact" identifier="http://hl7.org/fhir/StructureDefinition/RelatedArtifact" label="RelatedArtifact" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.RelatedArtifactType"/>
      <element name="label" elementType="FHIR.string"/>
      <element name="display" elementType="FHIR.string"/>
      <element name="citation" elementType="FHIR.markdown"/>
      <element name="url" elementType="FHIR.url"/>
      <element name="document" elementType="FHIR.Attachment"/>
      <element name="resource" elementType="FHIR.canonical"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="RelatedArtifactType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="RelatedPerson" identifier="http://hl7.org/fhir/StructureDefinition/RelatedPerson" label="RelatedPerson" retrievable="true" primaryCodePath="relationship" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="relationship">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name">
         <elementTypeSpecifier elementType="FHIR.HumanName" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="telecom">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="gender" elementType="FHIR.AdministrativeGender"/>
      <element name="birthDate" elementType="FHIR.date"/>
      <element name="address">
         <elementTypeSpecifier elementType="FHIR.Address" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="photo">
         <elementTypeSpecifier elementType="FHIR.Attachment" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="period" elementType="FHIR.Period"/>
      <element name="communication">
         <elementTypeSpecifier elementType="FHIR.RelatedPerson.Communication" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="RelatedPerson.Communication" retrievable="false" xsi:type="ClassInfo">
      <element name="language" elementType="FHIR.CodeableConcept"/>
      <element name="preferred" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="RemittanceOutcome" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="RepositoryType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="RequestGroup" identifier="http://hl7.org/fhir/StructureDefinition/RequestGroup" label="RequestGroup" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="replaces">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="groupIdentifier" elementType="FHIR.Identifier"/>
      <element name="status" elementType="FHIR.RequestStatus"/>
      <element name="intent" elementType="FHIR.RequestIntent"/>
      <element name="priority" elementType="FHIR.RequestPriority"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="authoredOn" elementType="FHIR.dateTime"/>
      <element name="author" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="action">
         <elementTypeSpecifier elementType="FHIR.RequestGroup.Action" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="participant"/>
      <contextRelationship context="Practitioner" relatedKeyElement="author"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="participant"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="author"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="participant"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="RequestGroup.Action" retrievable="false" xsi:type="ClassInfo">
      <element name="prefix" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="textEquivalent" elementType="FHIR.string"/>
      <element name="priority" elementType="FHIR.RequestPriority"/>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="documentation">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="condition">
         <elementTypeSpecifier elementType="FHIR.RequestGroup.Action.Condition" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedAction">
         <elementTypeSpecifier elementType="FHIR.RequestGroup.Action.RelatedAction" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="timing">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="participant">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="groupingBehavior" elementType="FHIR.ActionGroupingBehavior"/>
      <element name="selectionBehavior" elementType="FHIR.ActionSelectionBehavior"/>
      <element name="requiredBehavior" elementType="FHIR.ActionRequiredBehavior"/>
      <element name="precheckBehavior" elementType="FHIR.ActionPrecheckBehavior"/>
      <element name="cardinalityBehavior" elementType="FHIR.ActionCardinalityBehavior"/>
      <element name="resource" elementType="FHIR.Reference"/>
      <element name="action">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="RequestGroup.Action" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="RequestGroup.Action.Condition" retrievable="false" xsi:type="ClassInfo">
      <element name="kind" elementType="FHIR.ActionConditionKind"/>
      <element name="expression" elementType="FHIR.Expression"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="RequestGroup.Action.RelatedAction" retrievable="false" xsi:type="ClassInfo">
      <element name="actionId" elementType="FHIR.id"/>
      <element name="relationship" elementType="FHIR.ActionRelationshipType"/>
      <element name="offset">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="RequestIntent" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="RequestPriority" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="RequestStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ResearchDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ResearchDefinition" label="ResearchDefinition" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="shortTitle" elementType="FHIR.string"/>
      <element name="subtitle" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="subject">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="comment">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="usage" elementType="FHIR.string"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="library">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="population" elementType="FHIR.Reference"/>
      <element name="exposure" elementType="FHIR.Reference"/>
      <element name="exposureAlternative" elementType="FHIR.Reference"/>
      <element name="outcome" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ResearchElementDefinition" identifier="http://hl7.org/fhir/StructureDefinition/ResearchElementDefinition" label="ResearchElementDefinition" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="shortTitle" elementType="FHIR.string"/>
      <element name="subtitle" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="subject">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="comment">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="usage" elementType="FHIR.string"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="library">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.ResearchElementType"/>
      <element name="variableType" elementType="FHIR.VariableType"/>
      <element name="characteristic">
         <elementTypeSpecifier elementType="FHIR.ResearchElementDefinition.Characteristic" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ResearchElementDefinition.Characteristic" retrievable="false" xsi:type="ClassInfo">
      <element name="definition">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="usageContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="exclude" elementType="FHIR.boolean"/>
      <element name="unitOfMeasure" elementType="FHIR.CodeableConcept"/>
      <element name="studyEffectiveDescription" elementType="FHIR.string"/>
      <element name="studyEffective">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="studyEffectiveTimeFromStart" elementType="FHIR.Duration"/>
      <element name="studyEffectiveGroupMeasure" elementType="FHIR.GroupMeasure"/>
      <element name="participantEffectiveDescription" elementType="FHIR.string"/>
      <element name="participantEffective">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="participantEffectiveTimeFromStart" elementType="FHIR.Duration"/>
      <element name="participantEffectiveGroupMeasure" elementType="FHIR.GroupMeasure"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ResearchElementType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ResearchStudy" identifier="http://hl7.org/fhir/StructureDefinition/ResearchStudy" label="ResearchStudy" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="title" elementType="FHIR.string"/>
      <element name="protocol">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ResearchStudyStatus"/>
      <element name="primaryPurposeType" elementType="FHIR.CodeableConcept"/>
      <element name="phase" elementType="FHIR.CodeableConcept"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="focus">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="condition">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="keyword">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="location">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="enrollment">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="period" elementType="FHIR.Period"/>
      <element name="sponsor" elementType="FHIR.Reference"/>
      <element name="principalInvestigator" elementType="FHIR.Reference"/>
      <element name="site">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonStopped" elementType="FHIR.CodeableConcept"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="arm">
         <elementTypeSpecifier elementType="FHIR.ResearchStudy.Arm" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="objective">
         <elementTypeSpecifier elementType="FHIR.ResearchStudy.Objective" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="principalInvestigator"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ResearchStudy.Arm" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ResearchStudy.Objective" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ResearchStudyStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ResearchSubject" identifier="http://hl7.org/fhir/StructureDefinition/ResearchSubject" label="ResearchSubject" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.ResearchSubjectStatus"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="study" elementType="FHIR.Reference"/>
      <element name="individual" elementType="FHIR.Reference"/>
      <element name="assignedArm" elementType="FHIR.string"/>
      <element name="actualArm" elementType="FHIR.string"/>
      <element name="consent" elementType="FHIR.Reference"/>
      <contextRelationship context="Patient" relatedKeyElement="individual"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ResearchSubjectStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo namespace="FHIR" name="Resource" identifier="http://hl7.org/fhir/StructureDefinition/Resource" label="Resource" retrievable="true" xsi:type="ClassInfo" baseType="System.Any">
      <element name="id" elementType="FHIR.id"/>
      <element name="meta" elementType="FHIR.Meta"/>
      <element name="implicitRules" elementType="FHIR.uri"/>
      <element name="language" elementType="FHIR.code"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ResourceType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ResourceVersionPolicy" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ResponseType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="RestfulCapabilityMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="RiskAssessment" identifier="http://hl7.org/fhir/StructureDefinition/RiskAssessment" label="RiskAssessment" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn" elementType="FHIR.Reference"/>
      <element name="parent" elementType="FHIR.Reference"/>
      <element name="status" elementType="FHIR.RiskAssessmentStatus"/>
      <element name="method" elementType="FHIR.CodeableConcept"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="occurrence">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="condition" elementType="FHIR.Reference"/>
      <element name="performer" elementType="FHIR.Reference"/>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basis">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="prediction">
         <elementTypeSpecifier elementType="FHIR.RiskAssessment.Prediction" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="mitigation" elementType="FHIR.string"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="performer"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Device" relatedKeyElement="performer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="RiskAssessment.Prediction" retrievable="false" xsi:type="ClassInfo">
      <element name="outcome" elementType="FHIR.CodeableConcept"/>
      <element name="probability">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="qualitativeRisk" elementType="FHIR.CodeableConcept"/>
      <element name="relativeRisk" elementType="FHIR.decimal"/>
      <element name="when">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="rationale" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="RiskAssessmentStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="RiskEvidenceSynthesis" identifier="http://hl7.org/fhir/StructureDefinition/RiskEvidenceSynthesis" label="RiskEvidenceSynthesis" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="approvalDate" elementType="FHIR.date"/>
      <element name="lastReviewDate" elementType="FHIR.date"/>
      <element name="effectivePeriod" elementType="FHIR.Period"/>
      <element name="topic">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="editor">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reviewer">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="endorser">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relatedArtifact">
         <elementTypeSpecifier elementType="FHIR.RelatedArtifact" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="synthesisType" elementType="FHIR.CodeableConcept"/>
      <element name="studyType" elementType="FHIR.CodeableConcept"/>
      <element name="population" elementType="FHIR.Reference"/>
      <element name="exposure" elementType="FHIR.Reference"/>
      <element name="outcome" elementType="FHIR.Reference"/>
      <element name="sampleSize" elementType="FHIR.RiskEvidenceSynthesis.SampleSize"/>
      <element name="riskEstimate" elementType="FHIR.RiskEvidenceSynthesis.RiskEstimate"/>
      <element name="certainty">
         <elementTypeSpecifier elementType="FHIR.RiskEvidenceSynthesis.Certainty" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="RiskEvidenceSynthesis.Certainty" retrievable="false" xsi:type="ClassInfo">
      <element name="rating">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="certaintySubcomponent">
         <elementTypeSpecifier elementType="FHIR.RiskEvidenceSynthesis.Certainty.CertaintySubcomponent" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="RiskEvidenceSynthesis.Certainty.CertaintySubcomponent" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="rating">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="RiskEvidenceSynthesis.RiskEstimate" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="value" elementType="FHIR.decimal"/>
      <element name="unitOfMeasure" elementType="FHIR.CodeableConcept"/>
      <element name="denominatorCount" elementType="FHIR.integer"/>
      <element name="numeratorCount" elementType="FHIR.integer"/>
      <element name="precisionEstimate">
         <elementTypeSpecifier elementType="FHIR.RiskEvidenceSynthesis.RiskEstimate.PrecisionEstimate" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="RiskEvidenceSynthesis.RiskEstimate.PrecisionEstimate" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="level" elementType="FHIR.decimal"/>
      <element name="from" elementType="FHIR.decimal"/>
      <element name="to" elementType="FHIR.decimal"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="RiskEvidenceSynthesis.SampleSize" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="numberOfStudies" elementType="FHIR.integer"/>
      <element name="numberOfParticipants" elementType="FHIR.integer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SPDXLicense" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SampledData" identifier="http://hl7.org/fhir/StructureDefinition/SampledData" label="SampledData" retrievable="false" xsi:type="ClassInfo">
      <element name="origin" elementType="FHIR.SimpleQuantity"/>
      <element name="period" elementType="FHIR.decimal"/>
      <element name="factor" elementType="FHIR.decimal"/>
      <element name="lowerLimit" elementType="FHIR.decimal"/>
      <element name="upperLimit" elementType="FHIR.decimal"/>
      <element name="dimensions" elementType="FHIR.positiveInt"/>
      <element name="data" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Schedule" identifier="http://hl7.org/fhir/StructureDefinition/Schedule" label="Schedule" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="active" elementType="FHIR.boolean"/>
      <element name="serviceCategory">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviceType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specialty">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="actor">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="planningHorizon" elementType="FHIR.Period"/>
      <element name="comment" elementType="FHIR.string"/>
      <contextRelationship context="Practitioner" relatedKeyElement="actor"/>
      <contextRelationship context="Patient" relatedKeyElement="actor"/>
      <contextRelationship context="Device" relatedKeyElement="actor"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="actor"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SearchComparator" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SearchEntryMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SearchModifierCode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SearchParamType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="SearchParameter" identifier="http://hl7.org/fhir/StructureDefinition/SearchParameter" label="SearchParameter" retrievable="true" primaryCodePath="target" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="derivedFrom" elementType="FHIR.canonical"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="code" elementType="FHIR.code"/>
      <element name="base">
         <elementTypeSpecifier elementType="FHIR.ResourceType" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.SearchParamType"/>
      <element name="expression" elementType="FHIR.string"/>
      <element name="xpath" elementType="FHIR.string"/>
      <element name="xpathUsage" elementType="FHIR.XPathUsageType"/>
      <element name="target">
         <elementTypeSpecifier elementType="FHIR.ResourceType" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="multipleOr" elementType="FHIR.boolean"/>
      <element name="multipleAnd" elementType="FHIR.boolean"/>
      <element name="comparator">
         <elementTypeSpecifier elementType="FHIR.SearchComparator" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="modifier">
         <elementTypeSpecifier elementType="FHIR.SearchModifierCode" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="chain">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="component">
         <elementTypeSpecifier elementType="FHIR.SearchParameter.Component" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SearchParameter.Component" retrievable="false" xsi:type="ClassInfo">
      <element name="definition" elementType="FHIR.canonical"/>
      <element name="expression" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SectionMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SequenceType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ServiceRequest" identifier="http://hl7.org/fhir/StructureDefinition/ServiceRequest" label="ServiceRequest" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesCanonical">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesUri">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="replaces">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="requisition" elementType="FHIR.Identifier"/>
      <element name="status" elementType="FHIR.ServiceRequestStatus"/>
      <element name="intent" elementType="FHIR.ServiceRequestIntent"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="priority" elementType="FHIR.ServiceRequestPriority"/>
      <element name="doNotPerform" elementType="FHIR.boolean"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="orderDetail">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="quantity">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="occurrence">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="asNeeded">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="authoredOn" elementType="FHIR.dateTime"/>
      <element name="requester" elementType="FHIR.Reference"/>
      <element name="performerType" elementType="FHIR.CodeableConcept"/>
      <element name="performer">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="locationCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="locationReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="insurance">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="supportingInfo">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specimen">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="bodySite">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="patientInstruction" elementType="FHIR.string"/>
      <element name="relevantHistory">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="performer"/>
      <contextRelationship context="Practitioner" relatedKeyElement="requester"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Patient" relatedKeyElement="performer"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
      <contextRelationship context="Device" relatedKeyElement="performer"/>
      <contextRelationship context="Device" relatedKeyElement="requester"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="performer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ServiceRequestIntent" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ServiceRequestPriority" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="ServiceRequestStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Signature" identifier="http://hl7.org/fhir/StructureDefinition/Signature" label="Signature" retrievable="false" xsi:type="ClassInfo">
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="when" elementType="FHIR.instant"/>
      <element name="who" elementType="FHIR.Reference"/>
      <element name="onBehalfOf" elementType="FHIR.Reference"/>
      <element name="targetFormat" elementType="FHIR.MimeType"/>
      <element name="sigFormat" elementType="FHIR.MimeType"/>
      <element name="data" elementType="FHIR.base64Binary"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Quantity" namespace="FHIR" name="SimpleQuantity" identifier="http://hl7.org/fhir/StructureDefinition/SimpleQuantity" label="SimpleQuantity" retrievable="false" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="value" elementType="FHIR.decimal"/>
      <element name="unit" elementType="FHIR.string"/>
      <element name="system" elementType="FHIR.uri"/>
      <element name="code" elementType="FHIR.code"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SlicingRules" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Slot" identifier="http://hl7.org/fhir/StructureDefinition/Slot" label="Slot" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviceCategory">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="serviceType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="specialty">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="appointmentType" elementType="FHIR.CodeableConcept"/>
      <element name="schedule" elementType="FHIR.Reference"/>
      <element name="status" elementType="FHIR.SlotStatus"/>
      <element name="start" elementType="FHIR.instant"/>
      <element name="end" elementType="FHIR.instant"/>
      <element name="overbooked" elementType="FHIR.boolean"/>
      <element name="comment" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SlotStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SortDirection" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Specimen" identifier="http://hl7.org/fhir/StructureDefinition/Specimen" label="Specimen" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="accessionIdentifier" elementType="FHIR.Identifier"/>
      <element name="status" elementType="FHIR.SpecimenStatus"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="subject" elementType="FHIR.Reference"/>
      <element name="receivedTime" elementType="FHIR.dateTime"/>
      <element name="parent">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="request">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="collection" elementType="FHIR.Specimen.Collection"/>
      <element name="processing">
         <elementTypeSpecifier elementType="FHIR.Specimen.Processing" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="container">
         <elementTypeSpecifier elementType="FHIR.Specimen.Container" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="condition">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="collector"/>
      <contextRelationship context="Patient" relatedKeyElement="subject"/>
      <contextRelationship context="Device" relatedKeyElement="subject"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Specimen.Collection" retrievable="false" xsi:type="ClassInfo">
      <element name="collector" elementType="FHIR.Reference"/>
      <element name="collected">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="duration" elementType="FHIR.Duration"/>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="method" elementType="FHIR.CodeableConcept"/>
      <element name="bodySite" elementType="FHIR.CodeableConcept"/>
      <element name="fastingStatus">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Specimen.Container" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="capacity" elementType="FHIR.SimpleQuantity"/>
      <element name="specimenQuantity" elementType="FHIR.SimpleQuantity"/>
      <element name="additive">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Specimen.Processing" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="procedure" elementType="FHIR.CodeableConcept"/>
      <element name="additive">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="time">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SpecimenContainedPreference" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="SpecimenDefinition" identifier="http://hl7.org/fhir/StructureDefinition/SpecimenDefinition" label="SpecimenDefinition" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="typeCollected" elementType="FHIR.CodeableConcept"/>
      <element name="patientPreparation">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="timeAspect" elementType="FHIR.string"/>
      <element name="collection">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="typeTested">
         <elementTypeSpecifier elementType="FHIR.SpecimenDefinition.TypeTested" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SpecimenDefinition.TypeTested" retrievable="false" xsi:type="ClassInfo">
      <element name="isDerived" elementType="FHIR.boolean"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="preference" elementType="FHIR.SpecimenContainedPreference"/>
      <element name="container" elementType="FHIR.SpecimenDefinition.TypeTested.Container"/>
      <element name="requirement" elementType="FHIR.string"/>
      <element name="retentionTime" elementType="FHIR.Duration"/>
      <element name="rejectionCriterion">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="handling">
         <elementTypeSpecifier elementType="FHIR.SpecimenDefinition.TypeTested.Handling" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SpecimenDefinition.TypeTested.Container" retrievable="false" xsi:type="ClassInfo">
      <element name="material" elementType="FHIR.CodeableConcept"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="cap" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="capacity" elementType="FHIR.SimpleQuantity"/>
      <element name="minimumVolume">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="SimpleQuantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="additive">
         <elementTypeSpecifier elementType="FHIR.SpecimenDefinition.TypeTested.Container.Additive" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="preparation" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SpecimenDefinition.TypeTested.Container.Additive" retrievable="false" xsi:type="ClassInfo">
      <element name="additive">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SpecimenDefinition.TypeTested.Handling" retrievable="false" xsi:type="ClassInfo">
      <element name="temperatureQualifier" elementType="FHIR.CodeableConcept"/>
      <element name="temperatureRange" elementType="FHIR.Range"/>
      <element name="maxDuration" elementType="FHIR.Duration"/>
      <element name="instruction" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SpecimenStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Status" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="StrandType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="StructureDefinition" identifier="http://hl7.org/fhir/StructureDefinition/StructureDefinition" label="StructureDefinition" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="keyword">
         <elementTypeSpecifier elementType="FHIR.Coding" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="fhirVersion" elementType="FHIR.FHIRVersion"/>
      <element name="mapping">
         <elementTypeSpecifier elementType="FHIR.StructureDefinition.Mapping" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="kind" elementType="FHIR.StructureDefinitionKind"/>
      <element name="abstract" elementType="FHIR.boolean"/>
      <element name="context">
         <elementTypeSpecifier elementType="FHIR.StructureDefinition.Context" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="contextInvariant">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="type" elementType="FHIR.uri"/>
      <element name="baseDefinition" elementType="FHIR.canonical"/>
      <element name="derivation" elementType="FHIR.TypeDerivationRule"/>
      <element name="snapshot" elementType="FHIR.StructureDefinition.Snapshot"/>
      <element name="differential" elementType="FHIR.StructureDefinition.Differential"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureDefinition.Context" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.ExtensionContextType"/>
      <element name="expression" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureDefinition.Differential" retrievable="false" xsi:type="ClassInfo">
      <element name="element">
         <elementTypeSpecifier elementType="FHIR.ElementDefinition" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureDefinition.Mapping" retrievable="false" xsi:type="ClassInfo">
      <element name="identity" elementType="FHIR.id"/>
      <element name="uri" elementType="FHIR.uri"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="comment" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureDefinition.Snapshot" retrievable="false" xsi:type="ClassInfo">
      <element name="element">
         <elementTypeSpecifier elementType="FHIR.ElementDefinition" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="StructureDefinitionKind" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="StructureMap" identifier="http://hl7.org/fhir/StructureDefinition/StructureMap" label="StructureMap" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="structure">
         <elementTypeSpecifier elementType="FHIR.StructureMap.Structure" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="import">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="group">
         <elementTypeSpecifier elementType="FHIR.StructureMap.Group" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureMap.Group" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.id"/>
      <element name="extends" elementType="FHIR.id"/>
      <element name="typeMode" elementType="FHIR.StructureMapGroupTypeMode"/>
      <element name="documentation" elementType="FHIR.string"/>
      <element name="input">
         <elementTypeSpecifier elementType="FHIR.StructureMap.Group.Input" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="rule">
         <elementTypeSpecifier elementType="FHIR.StructureMap.Group.Rule" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureMap.Group.Input" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.id"/>
      <element name="type" elementType="FHIR.string"/>
      <element name="mode" elementType="FHIR.StructureMapInputMode"/>
      <element name="documentation" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureMap.Group.Rule" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.id"/>
      <element name="source">
         <elementTypeSpecifier elementType="FHIR.StructureMap.Group.Rule.Source" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="target">
         <elementTypeSpecifier elementType="FHIR.StructureMap.Group.Rule.Target" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="rule">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="StructureMap.Group.Rule" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="dependent">
         <elementTypeSpecifier elementType="FHIR.StructureMap.Group.Rule.Dependent" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="documentation" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureMap.Group.Rule.Dependent" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.id"/>
      <element name="variable">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureMap.Group.Rule.Source" retrievable="false" xsi:type="ClassInfo">
      <element name="context" elementType="FHIR.id"/>
      <element name="min" elementType="FHIR.integer"/>
      <element name="max" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.string"/>
      <element name="defaultValue">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="id" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="markdown" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="oid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="url" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uuid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Annotation" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactPoint" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Count" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Distance" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="HumanName" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Identifier" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Signature" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactDetail" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Contributor" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ParameterDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="RelatedArtifact" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="TriggerDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="UsageContext" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Dosage" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Meta" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="element" elementType="FHIR.string"/>
      <element name="listMode" elementType="FHIR.StructureMapSourceListMode"/>
      <element name="variable" elementType="FHIR.id"/>
      <element name="condition" elementType="FHIR.string"/>
      <element name="check" elementType="FHIR.string"/>
      <element name="logMessage" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureMap.Group.Rule.Target" retrievable="false" xsi:type="ClassInfo">
      <element name="context" elementType="FHIR.id"/>
      <element name="contextType" elementType="FHIR.StructureMapContextType"/>
      <element name="element" elementType="FHIR.string"/>
      <element name="variable" elementType="FHIR.id"/>
      <element name="listMode">
         <elementTypeSpecifier elementType="FHIR.StructureMapTargetListMode" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="listRuleId" elementType="FHIR.id"/>
      <element name="transform" elementType="FHIR.StructureMapTransform"/>
      <element name="parameter">
         <elementTypeSpecifier elementType="FHIR.StructureMap.Group.Rule.Target.Parameter" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureMap.Group.Rule.Target.Parameter" retrievable="false" xsi:type="ClassInfo">
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="id" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="StructureMap.Structure" retrievable="false" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.canonical"/>
      <element name="mode" elementType="FHIR.StructureMapModelMode"/>
      <element name="alias" elementType="FHIR.string"/>
      <element name="documentation" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="StructureMapContextType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="StructureMapGroupTypeMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="StructureMapInputMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="StructureMapModelMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="StructureMapSourceListMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="StructureMapTargetListMode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="StructureMapTransform" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Subscription" identifier="http://hl7.org/fhir/StructureDefinition/Subscription" label="Subscription" retrievable="true" xsi:type="ClassInfo">
      <element name="status" elementType="FHIR.SubscriptionStatus"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactPoint" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="end" elementType="FHIR.instant"/>
      <element name="reason" elementType="FHIR.string"/>
      <element name="criteria" elementType="FHIR.string"/>
      <element name="error" elementType="FHIR.string"/>
      <element name="channel" elementType="FHIR.Subscription.Channel"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Subscription.Channel" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.SubscriptionChannelType"/>
      <element name="endpoint" elementType="FHIR.url"/>
      <element name="payload" elementType="FHIR.MimeType"/>
      <element name="header">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SubscriptionChannelType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SubscriptionStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Substance" identifier="http://hl7.org/fhir/StructureDefinition/Substance" label="Substance" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.FHIRSubstanceStatus"/>
      <element name="category">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="instance">
         <elementTypeSpecifier elementType="FHIR.Substance.Instance" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="ingredient">
         <elementTypeSpecifier elementType="FHIR.Substance.Ingredient" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Substance.Ingredient" retrievable="false" xsi:type="ClassInfo">
      <element name="quantity" elementType="FHIR.Ratio"/>
      <element name="substance">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Substance.Instance" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="expiry" elementType="FHIR.dateTime"/>
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceAmount" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceAmount" label="SubstanceAmount" retrievable="false" xsi:type="ClassInfo">
      <element name="amount">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="amountType" elementType="FHIR.CodeableConcept"/>
      <element name="amountText" elementType="FHIR.string"/>
      <element name="referenceRange" elementType="FHIR.SubstanceAmount.ReferenceRange"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SubstanceAmount.ReferenceRange" retrievable="false" xsi:type="ClassInfo">
      <element name="lowLimit" elementType="FHIR.Quantity"/>
      <element name="highLimit" elementType="FHIR.Quantity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="SubstanceNucleicAcid" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceNucleicAcid" label="SubstanceNucleicAcid" retrievable="true" xsi:type="ClassInfo">
      <element name="sequenceType" elementType="FHIR.CodeableConcept"/>
      <element name="numberOfSubunits" elementType="FHIR.integer"/>
      <element name="areaOfHybridisation" elementType="FHIR.string"/>
      <element name="oligoNucleotideType" elementType="FHIR.CodeableConcept"/>
      <element name="subunit">
         <elementTypeSpecifier elementType="FHIR.SubstanceNucleicAcid.Subunit" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceNucleicAcid.Subunit" retrievable="false" xsi:type="ClassInfo">
      <element name="subunit" elementType="FHIR.integer"/>
      <element name="sequence" elementType="FHIR.string"/>
      <element name="length" elementType="FHIR.integer"/>
      <element name="sequenceAttachment" elementType="FHIR.Attachment"/>
      <element name="fivePrime" elementType="FHIR.CodeableConcept"/>
      <element name="threePrime" elementType="FHIR.CodeableConcept"/>
      <element name="linkage">
         <elementTypeSpecifier elementType="FHIR.SubstanceNucleicAcid.Subunit.Linkage" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="sugar">
         <elementTypeSpecifier elementType="FHIR.SubstanceNucleicAcid.Subunit.Sugar" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceNucleicAcid.Subunit.Linkage" retrievable="false" xsi:type="ClassInfo">
      <element name="connectivity" elementType="FHIR.string"/>
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="residueSite" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceNucleicAcid.Subunit.Sugar" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="residueSite" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="SubstancePolymer" identifier="http://hl7.org/fhir/StructureDefinition/SubstancePolymer" label="SubstancePolymer" retrievable="true" xsi:type="ClassInfo">
      <element name="class" elementType="FHIR.CodeableConcept"/>
      <element name="geometry" elementType="FHIR.CodeableConcept"/>
      <element name="copolymerConnectivity">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="modification">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="monomerSet">
         <elementTypeSpecifier elementType="FHIR.SubstancePolymer.MonomerSet" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="repeat">
         <elementTypeSpecifier elementType="FHIR.SubstancePolymer.Repeat" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstancePolymer.MonomerSet" retrievable="false" xsi:type="ClassInfo">
      <element name="ratioType" elementType="FHIR.CodeableConcept"/>
      <element name="startingMaterial">
         <elementTypeSpecifier elementType="FHIR.SubstancePolymer.MonomerSet.StartingMaterial" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstancePolymer.MonomerSet.StartingMaterial" retrievable="false" xsi:type="ClassInfo">
      <element name="material" elementType="FHIR.CodeableConcept"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="isDefining" elementType="FHIR.boolean"/>
      <element name="amount" elementType="FHIR.SubstanceAmount"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstancePolymer.Repeat" retrievable="false" xsi:type="ClassInfo">
      <element name="numberOfUnits" elementType="FHIR.integer"/>
      <element name="averageMolecularFormula" elementType="FHIR.string"/>
      <element name="repeatUnitAmountType" elementType="FHIR.CodeableConcept"/>
      <element name="repeatUnit">
         <elementTypeSpecifier elementType="FHIR.SubstancePolymer.Repeat.RepeatUnit" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstancePolymer.Repeat.RepeatUnit" retrievable="false" xsi:type="ClassInfo">
      <element name="orientationOfPolymerisation" elementType="FHIR.CodeableConcept"/>
      <element name="repeatUnit" elementType="FHIR.string"/>
      <element name="amount" elementType="FHIR.SubstanceAmount"/>
      <element name="degreeOfPolymerisation">
         <elementTypeSpecifier elementType="FHIR.SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="structuralRepresentation">
         <elementTypeSpecifier elementType="FHIR.SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstancePolymer.Repeat.RepeatUnit.DegreeOfPolymerisation" retrievable="false" xsi:type="ClassInfo">
      <element name="degree" elementType="FHIR.CodeableConcept"/>
      <element name="amount" elementType="FHIR.SubstanceAmount"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstancePolymer.Repeat.RepeatUnit.StructuralRepresentation" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="representation" elementType="FHIR.string"/>
      <element name="attachment" elementType="FHIR.Attachment"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="SubstanceProtein" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceProtein" label="SubstanceProtein" retrievable="true" xsi:type="ClassInfo">
      <element name="sequenceType" elementType="FHIR.CodeableConcept"/>
      <element name="numberOfSubunits" elementType="FHIR.integer"/>
      <element name="disulfideLinkage">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subunit">
         <elementTypeSpecifier elementType="FHIR.SubstanceProtein.Subunit" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceProtein.Subunit" retrievable="false" xsi:type="ClassInfo">
      <element name="subunit" elementType="FHIR.integer"/>
      <element name="sequence" elementType="FHIR.string"/>
      <element name="length" elementType="FHIR.integer"/>
      <element name="sequenceAttachment" elementType="FHIR.Attachment"/>
      <element name="nTerminalModificationId" elementType="FHIR.Identifier"/>
      <element name="nTerminalModification" elementType="FHIR.string"/>
      <element name="cTerminalModificationId" elementType="FHIR.Identifier"/>
      <element name="cTerminalModification" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="SubstanceReferenceInformation" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceReferenceInformation" label="SubstanceReferenceInformation" retrievable="true" xsi:type="ClassInfo">
      <element name="comment" elementType="FHIR.string"/>
      <element name="gene">
         <elementTypeSpecifier elementType="FHIR.SubstanceReferenceInformation.Gene" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="geneElement">
         <elementTypeSpecifier elementType="FHIR.SubstanceReferenceInformation.GeneElement" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="classification">
         <elementTypeSpecifier elementType="FHIR.SubstanceReferenceInformation.Classification" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="target">
         <elementTypeSpecifier elementType="FHIR.SubstanceReferenceInformation.Target" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceReferenceInformation.Classification" retrievable="false" xsi:type="ClassInfo">
      <element name="domain" elementType="FHIR.CodeableConcept"/>
      <element name="classification" elementType="FHIR.CodeableConcept"/>
      <element name="subtype">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="source">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceReferenceInformation.Gene" retrievable="false" xsi:type="ClassInfo">
      <element name="geneSequenceOrigin" elementType="FHIR.CodeableConcept"/>
      <element name="gene" elementType="FHIR.CodeableConcept"/>
      <element name="source">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceReferenceInformation.GeneElement" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="element" elementType="FHIR.Identifier"/>
      <element name="source">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceReferenceInformation.Target" retrievable="false" xsi:type="ClassInfo">
      <element name="target" elementType="FHIR.Identifier"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="interaction" elementType="FHIR.CodeableConcept"/>
      <element name="organism" elementType="FHIR.CodeableConcept"/>
      <element name="organismType" elementType="FHIR.CodeableConcept"/>
      <element name="amount">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="amountType" elementType="FHIR.CodeableConcept"/>
      <element name="source">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="SubstanceSourceMaterial" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceSourceMaterial" label="SubstanceSourceMaterial" retrievable="true" xsi:type="ClassInfo">
      <element name="sourceMaterialClass" elementType="FHIR.CodeableConcept"/>
      <element name="sourceMaterialType" elementType="FHIR.CodeableConcept"/>
      <element name="sourceMaterialState" elementType="FHIR.CodeableConcept"/>
      <element name="organismId" elementType="FHIR.Identifier"/>
      <element name="organismName" elementType="FHIR.string"/>
      <element name="parentSubstanceId">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="parentSubstanceName">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="countryOfOrigin">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="geographicalLocation">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="developmentStage" elementType="FHIR.CodeableConcept"/>
      <element name="fractionDescription">
         <elementTypeSpecifier elementType="FHIR.SubstanceSourceMaterial.FractionDescription" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="organism" elementType="FHIR.SubstanceSourceMaterial.Organism"/>
      <element name="partDescription">
         <elementTypeSpecifier elementType="FHIR.SubstanceSourceMaterial.PartDescription" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSourceMaterial.FractionDescription" retrievable="false" xsi:type="ClassInfo">
      <element name="fraction" elementType="FHIR.string"/>
      <element name="materialType" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSourceMaterial.Organism" retrievable="false" xsi:type="ClassInfo">
      <element name="family" elementType="FHIR.CodeableConcept"/>
      <element name="genus" elementType="FHIR.CodeableConcept"/>
      <element name="species" elementType="FHIR.CodeableConcept"/>
      <element name="intraspecificType" elementType="FHIR.CodeableConcept"/>
      <element name="intraspecificDescription" elementType="FHIR.string"/>
      <element name="author">
         <elementTypeSpecifier elementType="FHIR.SubstanceSourceMaterial.Organism.Author" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="hybrid" elementType="FHIR.SubstanceSourceMaterial.Organism.Hybrid"/>
      <element name="organismGeneral" elementType="FHIR.SubstanceSourceMaterial.Organism.OrganismGeneral"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSourceMaterial.Organism.Author" retrievable="false" xsi:type="ClassInfo">
      <element name="authorType" elementType="FHIR.CodeableConcept"/>
      <element name="authorDescription" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSourceMaterial.Organism.Hybrid" retrievable="false" xsi:type="ClassInfo">
      <element name="maternalOrganismId" elementType="FHIR.string"/>
      <element name="maternalOrganismName" elementType="FHIR.string"/>
      <element name="paternalOrganismId" elementType="FHIR.string"/>
      <element name="paternalOrganismName" elementType="FHIR.string"/>
      <element name="hybridType" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSourceMaterial.Organism.OrganismGeneral" retrievable="false" xsi:type="ClassInfo">
      <element name="kingdom" elementType="FHIR.CodeableConcept"/>
      <element name="phylum" elementType="FHIR.CodeableConcept"/>
      <element name="class" elementType="FHIR.CodeableConcept"/>
      <element name="order" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSourceMaterial.PartDescription" retrievable="false" xsi:type="ClassInfo">
      <element name="part" elementType="FHIR.CodeableConcept"/>
      <element name="partLocation" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="SubstanceSpecification" identifier="http://hl7.org/fhir/StructureDefinition/SubstanceSpecification" label="SubstanceSpecification" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.CodeableConcept"/>
      <element name="domain" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="source">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="comment" elementType="FHIR.string"/>
      <element name="moiety">
         <elementTypeSpecifier elementType="FHIR.SubstanceSpecification.Moiety" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="property">
         <elementTypeSpecifier elementType="FHIR.SubstanceSpecification.Property" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="referenceInformation" elementType="FHIR.Reference"/>
      <element name="structure" elementType="FHIR.SubstanceSpecification.Structure"/>
      <element name="code">
         <elementTypeSpecifier elementType="FHIR.SubstanceSpecification.Code" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="name">
         <elementTypeSpecifier elementType="FHIR.SubstanceSpecification.Name" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="molecularWeight">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="SubstanceSpecification.Structure.Isotope.MolecularWeight" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="relationship">
         <elementTypeSpecifier elementType="FHIR.SubstanceSpecification.Relationship" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="nucleicAcid" elementType="FHIR.Reference"/>
      <element name="polymer" elementType="FHIR.Reference"/>
      <element name="protein" elementType="FHIR.Reference"/>
      <element name="sourceMaterial" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSpecification.Code" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.CodeableConcept"/>
      <element name="statusDate" elementType="FHIR.dateTime"/>
      <element name="comment" elementType="FHIR.string"/>
      <element name="source">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSpecification.Moiety" retrievable="false" xsi:type="ClassInfo">
      <element name="role" elementType="FHIR.CodeableConcept"/>
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="stereochemistry" elementType="FHIR.CodeableConcept"/>
      <element name="opticalActivity" elementType="FHIR.CodeableConcept"/>
      <element name="molecularFormula" elementType="FHIR.string"/>
      <element name="amount">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSpecification.Name" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.CodeableConcept"/>
      <element name="preferred" elementType="FHIR.boolean"/>
      <element name="language">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="domain">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="synonym">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="SubstanceSpecification.Name" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="translation">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="SubstanceSpecification.Name" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="official">
         <elementTypeSpecifier elementType="FHIR.SubstanceSpecification.Name.Official" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="source">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSpecification.Name.Official" retrievable="false" xsi:type="ClassInfo">
      <element name="authority" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.CodeableConcept"/>
      <element name="date" elementType="FHIR.dateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSpecification.Property" retrievable="false" xsi:type="ClassInfo">
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="parameters" elementType="FHIR.string"/>
      <element name="definingSubstance">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="amount">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSpecification.Relationship" retrievable="false" xsi:type="ClassInfo">
      <element name="substance">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="relationship" elementType="FHIR.CodeableConcept"/>
      <element name="isDefining" elementType="FHIR.boolean"/>
      <element name="amount">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="amountRatioLowLimit" elementType="FHIR.Ratio"/>
      <element name="amountType" elementType="FHIR.CodeableConcept"/>
      <element name="source">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSpecification.Structure" retrievable="false" xsi:type="ClassInfo">
      <element name="stereochemistry" elementType="FHIR.CodeableConcept"/>
      <element name="opticalActivity" elementType="FHIR.CodeableConcept"/>
      <element name="molecularFormula" elementType="FHIR.string"/>
      <element name="molecularFormulaByMoiety" elementType="FHIR.string"/>
      <element name="isotope">
         <elementTypeSpecifier elementType="FHIR.SubstanceSpecification.Structure.Isotope" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="molecularWeight" elementType="FHIR.SubstanceSpecification.Structure.Isotope.MolecularWeight"/>
      <element name="source">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="representation">
         <elementTypeSpecifier elementType="FHIR.SubstanceSpecification.Structure.Representation" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSpecification.Structure.Isotope" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="name" elementType="FHIR.CodeableConcept"/>
      <element name="substitution" elementType="FHIR.CodeableConcept"/>
      <element name="halfLife" elementType="FHIR.Quantity"/>
      <element name="molecularWeight" elementType="FHIR.SubstanceSpecification.Structure.Isotope.MolecularWeight"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSpecification.Structure.Isotope.MolecularWeight" retrievable="false" xsi:type="ClassInfo">
      <element name="method" elementType="FHIR.CodeableConcept"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="amount" elementType="FHIR.Quantity"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SubstanceSpecification.Structure.Representation" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="representation" elementType="FHIR.string"/>
      <element name="attachment" elementType="FHIR.Attachment"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="SupplyDelivery" identifier="http://hl7.org/fhir/StructureDefinition/SupplyDelivery" label="SupplyDelivery" retrievable="true" primaryCodePath="type" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.SupplyDeliveryStatus"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="suppliedItem" elementType="FHIR.SupplyDelivery.SuppliedItem"/>
      <element name="occurrence">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="supplier" elementType="FHIR.Reference"/>
      <element name="destination" elementType="FHIR.Reference"/>
      <element name="receiver">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="supplier"/>
      <contextRelationship context="Practitioner" relatedKeyElement="receiver"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SupplyDelivery.SuppliedItem" retrievable="false" xsi:type="ClassInfo">
      <element name="quantity" elementType="FHIR.SimpleQuantity"/>
      <element name="item">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SupplyDeliveryStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="SupplyRequest" identifier="http://hl7.org/fhir/StructureDefinition/SupplyRequest" label="SupplyRequest" retrievable="true" primaryCodePath="category" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.SupplyRequestStatus"/>
      <element name="category" elementType="FHIR.CodeableConcept"/>
      <element name="priority" elementType="FHIR.RequestPriority"/>
      <element name="item">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="quantity" elementType="FHIR.Quantity"/>
      <element name="parameter">
         <elementTypeSpecifier elementType="FHIR.SupplyRequest.Parameter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="occurrence">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="authoredOn" elementType="FHIR.dateTime"/>
      <element name="requester" elementType="FHIR.Reference"/>
      <element name="supplier">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonCode">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="reasonReference">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="deliverFrom" elementType="FHIR.Reference"/>
      <element name="deliverTo" elementType="FHIR.Reference"/>
      <contextRelationship context="Practitioner" relatedKeyElement="requester"/>
      <contextRelationship context="Patient" relatedKeyElement="deliverTo"/>
      <contextRelationship context="Device" relatedKeyElement="requester"/>
      <contextRelationship context="RelatedPerson" relatedKeyElement="requester"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="SupplyRequest.Parameter" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SupplyRequestStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="SystemRestfulInteraction" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="Task" identifier="http://hl7.org/fhir/StructureDefinition/Task" label="Task" retrievable="true" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="instantiatesCanonical" elementType="FHIR.canonical"/>
      <element name="instantiatesUri" elementType="FHIR.uri"/>
      <element name="basedOn">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="groupIdentifier" elementType="FHIR.Identifier"/>
      <element name="partOf">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.TaskStatus"/>
      <element name="statusReason" elementType="FHIR.CodeableConcept"/>
      <element name="businessStatus" elementType="FHIR.CodeableConcept"/>
      <element name="intent" elementType="FHIR.TaskIntent"/>
      <element name="priority" elementType="FHIR.TaskPriority"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="focus" elementType="FHIR.Reference"/>
      <element name="for" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="executionPeriod" elementType="FHIR.Period"/>
      <element name="authoredOn" elementType="FHIR.dateTime"/>
      <element name="lastModified" elementType="FHIR.dateTime"/>
      <element name="requester" elementType="FHIR.Reference"/>
      <element name="performerType">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="owner" elementType="FHIR.Reference"/>
      <element name="location" elementType="FHIR.Reference"/>
      <element name="reasonCode" elementType="FHIR.CodeableConcept"/>
      <element name="reasonReference" elementType="FHIR.Reference"/>
      <element name="insurance">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="relevantHistory">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="restriction" elementType="FHIR.Task.Restriction"/>
      <element name="input">
         <elementTypeSpecifier elementType="FHIR.Task.Input" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="output">
         <elementTypeSpecifier elementType="FHIR.Task.Output" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Task.Input" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="id" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="markdown" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="oid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="url" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uuid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Annotation" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactPoint" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Count" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Distance" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="HumanName" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Identifier" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Signature" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactDetail" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Contributor" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ParameterDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="RelatedArtifact" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="TriggerDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="UsageContext" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Dosage" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Meta" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Task.Output" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.CodeableConcept"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="base64Binary" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="canonical" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="id" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="instant" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="markdown" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="oid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="positiveInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="time" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="unsignedInt" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="url" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uuid" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Address" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Age" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Annotation" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Attachment" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Coding" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactPoint" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Count" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Distance" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="HumanName" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Identifier" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Money" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Ratio" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="SampledData" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Signature" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ContactDetail" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Contributor" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="DataRequirement" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Expression" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="ParameterDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="RelatedArtifact" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="TriggerDefinition" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="UsageContext" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Dosage" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Meta" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Task.Restriction" retrievable="false" xsi:type="ClassInfo">
      <element name="repetitions" elementType="FHIR.positiveInt"/>
      <element name="period" elementType="FHIR.Period"/>
      <element name="recipient">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TaskIntent" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TaskPriority" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TaskStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="TerminologyCapabilities" identifier="http://hl7.org/fhir/StructureDefinition/TerminologyCapabilities" label="TerminologyCapabilities" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="kind" elementType="FHIR.CapabilityStatementKind"/>
      <element name="software" elementType="FHIR.TerminologyCapabilities.Software"/>
      <element name="implementation" elementType="FHIR.TerminologyCapabilities.Implementation"/>
      <element name="lockedDate" elementType="FHIR.boolean"/>
      <element name="codeSystem">
         <elementTypeSpecifier elementType="FHIR.TerminologyCapabilities.CodeSystem" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="expansion" elementType="FHIR.TerminologyCapabilities.Expansion"/>
      <element name="codeSearch" elementType="FHIR.CodeSearchSupport"/>
      <element name="validateCode" elementType="FHIR.TerminologyCapabilities.ValidateCode"/>
      <element name="translation" elementType="FHIR.TerminologyCapabilities.Translation"/>
      <element name="closure" elementType="FHIR.TerminologyCapabilities.Closure"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TerminologyCapabilities.Closure" retrievable="false" xsi:type="ClassInfo">
      <element name="translation" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TerminologyCapabilities.CodeSystem" retrievable="false" xsi:type="ClassInfo">
      <element name="uri" elementType="FHIR.canonical"/>
      <element name="version">
         <elementTypeSpecifier elementType="FHIR.TerminologyCapabilities.CodeSystem.Version" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="subsumption" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TerminologyCapabilities.CodeSystem.Version" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.string"/>
      <element name="isDefault" elementType="FHIR.boolean"/>
      <element name="compositional" elementType="FHIR.boolean"/>
      <element name="language">
         <elementTypeSpecifier elementType="FHIR.code" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="filter">
         <elementTypeSpecifier elementType="FHIR.TerminologyCapabilities.CodeSystem.Version.Filter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="property">
         <elementTypeSpecifier elementType="FHIR.code" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TerminologyCapabilities.CodeSystem.Version.Filter" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.code"/>
      <element name="op">
         <elementTypeSpecifier elementType="FHIR.code" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TerminologyCapabilities.Expansion" retrievable="false" xsi:type="ClassInfo">
      <element name="hierarchical" elementType="FHIR.boolean"/>
      <element name="paging" elementType="FHIR.boolean"/>
      <element name="incomplete" elementType="FHIR.boolean"/>
      <element name="parameter">
         <elementTypeSpecifier elementType="FHIR.TerminologyCapabilities.Expansion.Parameter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="textFilter" elementType="FHIR.markdown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TerminologyCapabilities.Expansion.Parameter" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.code"/>
      <element name="documentation" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TerminologyCapabilities.Implementation" retrievable="false" xsi:type="ClassInfo">
      <element name="description" elementType="FHIR.string"/>
      <element name="url" elementType="FHIR.url"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TerminologyCapabilities.Software" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="version" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TerminologyCapabilities.Translation" retrievable="false" xsi:type="ClassInfo">
      <element name="needsMap" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TerminologyCapabilities.ValidateCode" retrievable="false" xsi:type="ClassInfo">
      <element name="translations" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="TestReport" identifier="http://hl7.org/fhir/StructureDefinition/TestReport" label="TestReport" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.TestReportStatus"/>
      <element name="testScript" elementType="FHIR.Reference"/>
      <element name="result" elementType="FHIR.TestReportResult"/>
      <element name="score" elementType="FHIR.decimal"/>
      <element name="tester" elementType="FHIR.string"/>
      <element name="issued" elementType="FHIR.dateTime"/>
      <element name="participant">
         <elementTypeSpecifier elementType="FHIR.TestReport.Participant" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="setup" elementType="FHIR.TestReport.Setup"/>
      <element name="test">
         <elementTypeSpecifier elementType="FHIR.TestReport.Test" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="teardown" elementType="FHIR.TestReport.Teardown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestReport.Participant" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.TestReportParticipantType"/>
      <element name="uri" elementType="FHIR.uri"/>
      <element name="display" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestReport.Setup" retrievable="false" xsi:type="ClassInfo">
      <element name="action">
         <elementTypeSpecifier elementType="FHIR.TestReport.Setup.Action" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestReport.Setup.Action" retrievable="false" xsi:type="ClassInfo">
      <element name="operation" elementType="FHIR.TestReport.Setup.Action.Operation"/>
      <element name="assert" elementType="FHIR.TestReport.Setup.Action.Assert"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestReport.Setup.Action.Assert" retrievable="false" xsi:type="ClassInfo">
      <element name="result" elementType="FHIR.TestReportActionResult"/>
      <element name="message" elementType="FHIR.markdown"/>
      <element name="detail" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestReport.Setup.Action.Operation" retrievable="false" xsi:type="ClassInfo">
      <element name="result" elementType="FHIR.TestReportActionResult"/>
      <element name="message" elementType="FHIR.markdown"/>
      <element name="detail" elementType="FHIR.uri"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestReport.Teardown" retrievable="false" xsi:type="ClassInfo">
      <element name="action">
         <elementTypeSpecifier elementType="FHIR.TestReport.Teardown.Action" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestReport.Teardown.Action" retrievable="false" xsi:type="ClassInfo">
      <element name="operation" elementType="FHIR.TestReport.Setup.Action.Operation"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestReport.Test" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="action">
         <elementTypeSpecifier elementType="FHIR.TestReport.Test.Action" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestReport.Test.Action" retrievable="false" xsi:type="ClassInfo">
      <element name="operation" elementType="FHIR.TestReport.Setup.Action.Operation"/>
      <element name="assert" elementType="FHIR.TestReport.Setup.Action.Assert"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TestReportActionResult" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TestReportParticipantType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TestReportResult" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TestReportStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="TestScript" identifier="http://hl7.org/fhir/StructureDefinition/TestScript" label="TestScript" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier" elementType="FHIR.Identifier"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="origin">
         <elementTypeSpecifier elementType="FHIR.TestScript.Origin" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="destination">
         <elementTypeSpecifier elementType="FHIR.TestScript.Destination" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="metadata" elementType="FHIR.TestScript.Metadata"/>
      <element name="fixture">
         <elementTypeSpecifier elementType="FHIR.TestScript.Fixture" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="profile">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="variable">
         <elementTypeSpecifier elementType="FHIR.TestScript.Variable" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="setup" elementType="FHIR.TestScript.Setup"/>
      <element name="test">
         <elementTypeSpecifier elementType="FHIR.TestScript.Test" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="teardown" elementType="FHIR.TestScript.Teardown"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Destination" retrievable="false" xsi:type="ClassInfo">
      <element name="index" elementType="FHIR.integer"/>
      <element name="profile" elementType="FHIR.Coding"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Fixture" retrievable="false" xsi:type="ClassInfo">
      <element name="autocreate" elementType="FHIR.boolean"/>
      <element name="autodelete" elementType="FHIR.boolean"/>
      <element name="resource" elementType="FHIR.Reference"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Metadata" retrievable="false" xsi:type="ClassInfo">
      <element name="link">
         <elementTypeSpecifier elementType="FHIR.TestScript.Metadata.Link" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="capability">
         <elementTypeSpecifier elementType="FHIR.TestScript.Metadata.Capability" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Metadata.Capability" retrievable="false" xsi:type="ClassInfo">
      <element name="required" elementType="FHIR.boolean"/>
      <element name="validated" elementType="FHIR.boolean"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="origin">
         <elementTypeSpecifier elementType="FHIR.integer" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="destination" elementType="FHIR.integer"/>
      <element name="link">
         <elementTypeSpecifier elementType="FHIR.uri" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="capabilities" elementType="FHIR.canonical"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Metadata.Link" retrievable="false" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="description" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Origin" retrievable="false" xsi:type="ClassInfo">
      <element name="index" elementType="FHIR.integer"/>
      <element name="profile" elementType="FHIR.Coding"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Setup" retrievable="false" xsi:type="ClassInfo">
      <element name="action">
         <elementTypeSpecifier elementType="FHIR.TestScript.Setup.Action" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Setup.Action" retrievable="false" xsi:type="ClassInfo">
      <element name="operation" elementType="FHIR.TestScript.Setup.Action.Operation"/>
      <element name="assert" elementType="FHIR.TestScript.Setup.Action.Assert"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Setup.Action.Assert" retrievable="false" xsi:type="ClassInfo">
      <element name="label" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="direction" elementType="FHIR.AssertionDirectionType"/>
      <element name="compareToSourceId" elementType="FHIR.string"/>
      <element name="compareToSourceExpression" elementType="FHIR.string"/>
      <element name="compareToSourcePath" elementType="FHIR.string"/>
      <element name="contentType" elementType="FHIR.MimeType"/>
      <element name="expression" elementType="FHIR.string"/>
      <element name="headerField" elementType="FHIR.string"/>
      <element name="minimumId" elementType="FHIR.string"/>
      <element name="navigationLinks" elementType="FHIR.boolean"/>
      <element name="operator" elementType="FHIR.AssertionOperatorType"/>
      <element name="path" elementType="FHIR.string"/>
      <element name="requestMethod" elementType="FHIR.TestScriptRequestMethodCode"/>
      <element name="requestURL" elementType="FHIR.string"/>
      <element name="resource" elementType="FHIR.FHIRDefinedType"/>
      <element name="response" elementType="FHIR.AssertionResponseTypes"/>
      <element name="responseCode" elementType="FHIR.string"/>
      <element name="sourceId" elementType="FHIR.id"/>
      <element name="validateProfileId" elementType="FHIR.id"/>
      <element name="value" elementType="FHIR.string"/>
      <element name="warningOnly" elementType="FHIR.boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Setup.Action.Operation" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.Coding"/>
      <element name="resource" elementType="FHIR.FHIRDefinedType"/>
      <element name="label" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="accept" elementType="FHIR.MimeType"/>
      <element name="contentType" elementType="FHIR.MimeType"/>
      <element name="destination" elementType="FHIR.integer"/>
      <element name="encodeRequestUrl" elementType="FHIR.boolean"/>
      <element name="method" elementType="FHIR.TestScriptRequestMethodCode"/>
      <element name="origin" elementType="FHIR.integer"/>
      <element name="params" elementType="FHIR.string"/>
      <element name="requestHeader">
         <elementTypeSpecifier elementType="FHIR.TestScript.Setup.Action.Operation.RequestHeader" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="requestId" elementType="FHIR.id"/>
      <element name="responseId" elementType="FHIR.id"/>
      <element name="sourceId" elementType="FHIR.id"/>
      <element name="targetId" elementType="FHIR.id"/>
      <element name="url" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Setup.Action.Operation.RequestHeader" retrievable="false" xsi:type="ClassInfo">
      <element name="field" elementType="FHIR.string"/>
      <element name="value" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Teardown" retrievable="false" xsi:type="ClassInfo">
      <element name="action">
         <elementTypeSpecifier elementType="FHIR.TestScript.Teardown.Action" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Teardown.Action" retrievable="false" xsi:type="ClassInfo">
      <element name="operation" elementType="FHIR.TestScript.Setup.Action.Operation"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Test" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="action">
         <elementTypeSpecifier elementType="FHIR.TestScript.Test.Action" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Test.Action" retrievable="false" xsi:type="ClassInfo">
      <element name="operation" elementType="FHIR.TestScript.Setup.Action.Operation"/>
      <element name="assert" elementType="FHIR.TestScript.Setup.Action.Assert"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="TestScript.Variable" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="defaultValue" elementType="FHIR.string"/>
      <element name="description" elementType="FHIR.string"/>
      <element name="expression" elementType="FHIR.string"/>
      <element name="headerField" elementType="FHIR.string"/>
      <element name="hint" elementType="FHIR.string"/>
      <element name="path" elementType="FHIR.string"/>
      <element name="sourceId" elementType="FHIR.id"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TestScriptRequestMethodCode" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="Timing" identifier="http://hl7.org/fhir/StructureDefinition/Timing" label="Timing" retrievable="false" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="event">
         <elementTypeSpecifier elementType="FHIR.dateTime" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="repeat" elementType="FHIR.Timing.Repeat"/>
      <element name="code" elementType="FHIR.CodeableConcept"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Timing.Repeat" retrievable="false" xsi:type="ClassInfo">
      <element name="bounds">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Duration" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Period" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="count" elementType="FHIR.positiveInt"/>
      <element name="countMax" elementType="FHIR.positiveInt"/>
      <element name="duration" elementType="FHIR.decimal"/>
      <element name="durationMax" elementType="FHIR.decimal"/>
      <element name="durationUnit" elementType="FHIR.UnitsOfTime"/>
      <element name="frequency" elementType="FHIR.positiveInt"/>
      <element name="frequencyMax" elementType="FHIR.positiveInt"/>
      <element name="period" elementType="FHIR.decimal"/>
      <element name="periodMax" elementType="FHIR.decimal"/>
      <element name="periodUnit" elementType="FHIR.UnitsOfTime"/>
      <element name="dayOfWeek">
         <elementTypeSpecifier elementType="FHIR.DayOfWeek" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="timeOfDay">
         <elementTypeSpecifier elementType="FHIR.time" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="when">
         <elementTypeSpecifier elementType="FHIR.EventTiming" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="offset" elementType="FHIR.unsignedInt"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TriggerDefinition" identifier="http://hl7.org/fhir/StructureDefinition/TriggerDefinition" label="TriggerDefinition" retrievable="false" xsi:type="ClassInfo">
      <element name="type" elementType="FHIR.TriggerType"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="timing">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="Timing" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="date" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="data">
         <elementTypeSpecifier elementType="FHIR.DataRequirement" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="condition" elementType="FHIR.Expression"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TriggerType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TypeDerivationRule" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="TypeRestfulInteraction" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="UDIEntryType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="UnitsOfTime" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="UsageContext" identifier="http://hl7.org/fhir/StructureDefinition/UsageContext" label="UsageContext" retrievable="false" primaryCodePath="code" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.Coding"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="CodeableConcept" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Quantity" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Range" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="Reference" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="Use" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="ValueSet" identifier="http://hl7.org/fhir/StructureDefinition/ValueSet" label="ValueSet" retrievable="true" xsi:type="ClassInfo">
      <element name="url" elementType="FHIR.uri"/>
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="version" elementType="FHIR.string"/>
      <element name="name" elementType="FHIR.string"/>
      <element name="title" elementType="FHIR.string"/>
      <element name="status" elementType="FHIR.PublicationStatus"/>
      <element name="experimental" elementType="FHIR.boolean"/>
      <element name="date" elementType="FHIR.dateTime"/>
      <element name="publisher" elementType="FHIR.string"/>
      <element name="contact">
         <elementTypeSpecifier elementType="FHIR.ContactDetail" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="description" elementType="FHIR.markdown"/>
      <element name="useContext">
         <elementTypeSpecifier elementType="FHIR.UsageContext" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="jurisdiction">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="immutable" elementType="FHIR.boolean"/>
      <element name="purpose" elementType="FHIR.markdown"/>
      <element name="copyright" elementType="FHIR.markdown"/>
      <element name="compose" elementType="FHIR.ValueSet.Compose"/>
      <element name="expansion" elementType="FHIR.ValueSet.Expansion"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ValueSet.Compose" retrievable="false" xsi:type="ClassInfo">
      <element name="lockedDate" elementType="FHIR.date"/>
      <element name="inactive" elementType="FHIR.boolean"/>
      <element name="include">
         <elementTypeSpecifier elementType="FHIR.ValueSet.Compose.Include" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="exclude">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ValueSet.Compose.Include" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ValueSet.Compose.Include" retrievable="false" xsi:type="ClassInfo">
      <element name="system" elementType="FHIR.uri"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="concept">
         <elementTypeSpecifier elementType="FHIR.ValueSet.Compose.Include.Concept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="filter">
         <elementTypeSpecifier elementType="FHIR.ValueSet.Compose.Include.Filter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="valueSet">
         <elementTypeSpecifier elementType="FHIR.canonical" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ValueSet.Compose.Include.Concept" retrievable="false" xsi:type="ClassInfo">
      <element name="code" elementType="FHIR.code"/>
      <element name="display" elementType="FHIR.string"/>
      <element name="designation">
         <elementTypeSpecifier elementType="FHIR.ValueSet.Compose.Include.Concept.Designation" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ValueSet.Compose.Include.Concept.Designation" retrievable="false" xsi:type="ClassInfo">
      <element name="language" elementType="FHIR.code"/>
      <element name="use" elementType="FHIR.Coding"/>
      <element name="value" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ValueSet.Compose.Include.Filter" retrievable="false" xsi:type="ClassInfo">
      <element name="property" elementType="FHIR.code"/>
      <element name="op" elementType="FHIR.FilterOperator"/>
      <element name="value" elementType="FHIR.string"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ValueSet.Expansion" retrievable="false" xsi:type="ClassInfo">
      <element name="identifier" elementType="FHIR.uri"/>
      <element name="timestamp" elementType="FHIR.dateTime"/>
      <element name="total" elementType="FHIR.integer"/>
      <element name="offset" elementType="FHIR.integer"/>
      <element name="parameter">
         <elementTypeSpecifier elementType="FHIR.ValueSet.Expansion.Parameter" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="contains">
         <elementTypeSpecifier elementType="FHIR.ValueSet.Expansion.Contains" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ValueSet.Expansion.Contains" retrievable="false" xsi:type="ClassInfo">
      <element name="system" elementType="FHIR.uri"/>
      <element name="abstract" elementType="FHIR.boolean"/>
      <element name="inactive" elementType="FHIR.boolean"/>
      <element name="version" elementType="FHIR.string"/>
      <element name="code" elementType="FHIR.code"/>
      <element name="display" elementType="FHIR.string"/>
      <element name="designation">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ValueSet.Compose.Include.Concept.Designation" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
      <element name="contains">
         <elementTypeSpecifier xsi:type="ListTypeSpecifier">
            <elementTypeSpecifier namespace="FHIR" name="ValueSet.Expansion.Contains" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="ValueSet.Expansion.Parameter" retrievable="false" xsi:type="ClassInfo">
      <element name="name" elementType="FHIR.string"/>
      <element name="value">
         <elementTypeSpecifier xsi:type="ChoiceTypeSpecifier">
            <choice namespace="FHIR" name="string" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="boolean" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="integer" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="decimal" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="uri" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="code" xsi:type="NamedTypeSpecifier"/>
            <choice namespace="FHIR" name="dateTime" xsi:type="NamedTypeSpecifier"/>
         </elementTypeSpecifier>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="VariableType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="VerificationResult" identifier="http://hl7.org/fhir/StructureDefinition/VerificationResult" label="VerificationResult" retrievable="true" xsi:type="ClassInfo">
      <element name="target">
         <elementTypeSpecifier elementType="FHIR.Reference" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="targetLocation">
         <elementTypeSpecifier elementType="FHIR.string" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="need" elementType="FHIR.CodeableConcept"/>
      <element name="status" elementType="FHIR.Status"/>
      <element name="statusDate" elementType="FHIR.dateTime"/>
      <element name="validationType" elementType="FHIR.CodeableConcept"/>
      <element name="validationProcess">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="frequency" elementType="FHIR.Timing"/>
      <element name="lastPerformed" elementType="FHIR.dateTime"/>
      <element name="nextScheduled" elementType="FHIR.date"/>
      <element name="failureAction" elementType="FHIR.CodeableConcept"/>
      <element name="primarySource">
         <elementTypeSpecifier elementType="FHIR.VerificationResult.PrimarySource" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="attestation" elementType="FHIR.VerificationResult.Attestation"/>
      <element name="validator">
         <elementTypeSpecifier elementType="FHIR.VerificationResult.Validator" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="VerificationResult.Attestation" retrievable="false" xsi:type="ClassInfo">
      <element name="who" elementType="FHIR.Reference"/>
      <element name="onBehalfOf" elementType="FHIR.Reference"/>
      <element name="communicationMethod" elementType="FHIR.CodeableConcept"/>
      <element name="date" elementType="FHIR.date"/>
      <element name="sourceIdentityCertificate" elementType="FHIR.string"/>
      <element name="proxyIdentityCertificate" elementType="FHIR.string"/>
      <element name="proxySignature" elementType="FHIR.Signature"/>
      <element name="sourceSignature" elementType="FHIR.Signature"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="VerificationResult.PrimarySource" retrievable="false" xsi:type="ClassInfo">
      <element name="who" elementType="FHIR.Reference"/>
      <element name="type">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="communicationMethod">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="validationStatus" elementType="FHIR.CodeableConcept"/>
      <element name="validationDate" elementType="FHIR.dateTime"/>
      <element name="canPushUpdates" elementType="FHIR.CodeableConcept"/>
      <element name="pushTypeAvailable">
         <elementTypeSpecifier elementType="FHIR.CodeableConcept" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="VerificationResult.Validator" retrievable="false" xsi:type="ClassInfo">
      <element name="organization" elementType="FHIR.Reference"/>
      <element name="identityCertificate" elementType="FHIR.string"/>
      <element name="attestationSignature" elementType="FHIR.Signature"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="VisionBase" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="VisionEyes" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.DomainResource" namespace="FHIR" name="VisionPrescription" identifier="http://hl7.org/fhir/StructureDefinition/VisionPrescription" label="VisionPrescription" retrievable="true" xsi:type="ClassInfo">
      <element name="identifier">
         <elementTypeSpecifier elementType="FHIR.Identifier" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="status" elementType="FHIR.VisionStatus"/>
      <element name="created" elementType="FHIR.dateTime"/>
      <element name="patient" elementType="FHIR.Reference"/>
      <element name="encounter" elementType="FHIR.Reference"/>
      <element name="dateWritten" elementType="FHIR.dateTime"/>
      <element name="prescriber" elementType="FHIR.Reference"/>
      <element name="lensSpecification">
         <elementTypeSpecifier elementType="FHIR.VisionPrescription.LensSpecification" xsi:type="ListTypeSpecifier"/>
      </element>
      <contextRelationship context="Practitioner" relatedKeyElement="prescriber"/>
      <contextRelationship context="Patient" relatedKeyElement="patient"/>
      <contextRelationship context="Encounter" relatedKeyElement="encounter"/>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="VisionPrescription.LensSpecification" retrievable="false" xsi:type="ClassInfo">
      <element name="product" elementType="FHIR.CodeableConcept"/>
      <element name="eye" elementType="FHIR.VisionEyes"/>
      <element name="sphere" elementType="FHIR.decimal"/>
      <element name="cylinder" elementType="FHIR.decimal"/>
      <element name="axis" elementType="FHIR.integer"/>
      <element name="prism">
         <elementTypeSpecifier elementType="FHIR.VisionPrescription.LensSpecification.Prism" xsi:type="ListTypeSpecifier"/>
      </element>
      <element name="add" elementType="FHIR.decimal"/>
      <element name="power" elementType="FHIR.decimal"/>
      <element name="backCurve" elementType="FHIR.decimal"/>
      <element name="diameter" elementType="FHIR.decimal"/>
      <element name="duration" elementType="FHIR.SimpleQuantity"/>
      <element name="color" elementType="FHIR.string"/>
      <element name="brand" elementType="FHIR.string"/>
      <element name="note">
         <elementTypeSpecifier elementType="FHIR.Annotation" xsi:type="ListTypeSpecifier"/>
      </element>
   </typeInfo>
   <typeInfo baseType="FHIR.BackboneElement" namespace="FHIR" name="VisionPrescription.LensSpecification.Prism" retrievable="false" xsi:type="ClassInfo">
      <element name="amount" elementType="FHIR.decimal"/>
      <element name="base" elementType="FHIR.VisionBase"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="VisionStatus" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="XPathUsageType" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="base64Binary" identifier="http://hl7.org/fhir/StructureDefinition/base64Binary" label="base64Binary" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="boolean" identifier="http://hl7.org/fhir/StructureDefinition/boolean" label="boolean" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.Boolean"/>
   </typeInfo>
   <typeInfo baseType="FHIR.uri" namespace="FHIR" name="canonical" identifier="http://hl7.org/fhir/StructureDefinition/canonical" label="canonical" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.string" namespace="FHIR" name="code" identifier="http://hl7.org/fhir/StructureDefinition/code" label="code" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="date" identifier="http://hl7.org/fhir/StructureDefinition/date" label="date" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.Date"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="dateTime" identifier="http://hl7.org/fhir/StructureDefinition/dateTime" label="dateTime" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.DateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="decimal" identifier="http://hl7.org/fhir/StructureDefinition/decimal" label="decimal" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.Decimal"/>
   </typeInfo>
   <typeInfo baseType="FHIR.string" namespace="FHIR" name="id" identifier="http://hl7.org/fhir/StructureDefinition/id" label="id" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="instant" identifier="http://hl7.org/fhir/StructureDefinition/instant" label="instant" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.DateTime"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="integer" identifier="http://hl7.org/fhir/StructureDefinition/integer" label="integer" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.Integer"/>
   </typeInfo>
   <typeInfo baseType="FHIR.string" namespace="FHIR" name="markdown" identifier="http://hl7.org/fhir/StructureDefinition/markdown" label="markdown" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.uri" namespace="FHIR" name="oid" identifier="http://hl7.org/fhir/StructureDefinition/oid" label="oid" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.integer" namespace="FHIR" name="positiveInt" identifier="http://hl7.org/fhir/StructureDefinition/positiveInt" label="positiveInt" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="string" identifier="http://hl7.org/fhir/StructureDefinition/string" label="string" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="time" identifier="http://hl7.org/fhir/StructureDefinition/time" label="time" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.Time"/>
   </typeInfo>
   <typeInfo baseType="FHIR.integer" namespace="FHIR" name="unsignedInt" identifier="http://hl7.org/fhir/StructureDefinition/unsignedInt" label="unsignedInt" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="uri" identifier="http://hl7.org/fhir/StructureDefinition/uri" label="uri" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <typeInfo baseType="FHIR.uri" namespace="FHIR" name="url" identifier="http://hl7.org/fhir/StructureDefinition/url" label="url" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.uri" namespace="FHIR" name="uuid" identifier="http://hl7.org/fhir/StructureDefinition/uuid" label="uuid" retrievable="false" xsi:type="ClassInfo"/>
   <typeInfo baseType="FHIR.Element" namespace="FHIR" name="xhtml" identifier="http://hl7.org/fhir/StructureDefinition/xhtml" label="xhtml" retrievable="false" xsi:type="ClassInfo">
      <element name="value" elementType="System.String"/>
   </typeInfo>
   <conversionInfo functionName="FHIRHelpers.ToCode" fromType="FHIR.Coding" toType="System.Code"/>
   <conversionInfo functionName="FHIRHelpers.ToConcept" fromType="FHIR.CodeableConcept" toType="System.Concept"/>
   <conversionInfo functionName="FHIRHelpers.ToQuantity" fromType="FHIR.Quantity" toType="System.Quantity"/>
   <conversionInfo functionName="FHIRHelpers.ToInterval" fromType="FHIR.Period" toType="Interval&lt;System.DateTime>"/>
   <conversionInfo functionName="FHIRHelpers.ToInterval" fromType="FHIR.Range" toType="Interval&lt;System.Quantity>"/>
   <conversionInfo functionName="FHIRHelpers.ToRatio" fromType="FHIR.Ratio" toType="System.Ratio"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EnrollmentRequestStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TestScriptRequestMethodCode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SortDirection" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.BiologicallyDerivedProductStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.UnitsOfTime" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AddressType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AllergyIntoleranceCategory" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.IssueSeverity" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CareTeamStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureDefinitionKind" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EncounterStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.PublicationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRVersion" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CarePlanActivityKind" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapSourceListMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RequestStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.QuestionnaireResponseStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SearchComparator" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ChargeItemStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.xhtml" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionParticipantType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AllergyIntoleranceType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.InvoiceStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CarePlanActivityStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ParticipationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceNameType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DocumentMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AssertionOperatorType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DaysOfWeek" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.IssueType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapContextType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FamilyHistoryStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ExtensionContextType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CommunicationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AssertionResponseTypes" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RequestIntent" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EnrollmentResponseStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.string" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionRequiredBehavior" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GraphCompartmentUse" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AccountStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationDispenseStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ParameterUse" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ClaimStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.IdentifierUse" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapTargetListMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ExposureState" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TestReportParticipantType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.BindingStrength" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RequestPriority" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MimeType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.QualityType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ParticipantRequired" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.XPathUsageType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CoverageStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FilterOperator" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NamingSystemType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResearchSubjectStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapTransform" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResponseType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToDecimal" fromType="FHIR.decimal" toType="System.Decimal"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AggregationMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SystemRestfulInteraction" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.Messageheader_Response_Request" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NutritiionOrderIntent" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationKnowledgeStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AdverseEventActuality" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SubscriptionChannelType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActivityDefinitionKind" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AssertionDirectionType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CarePlanIntent" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConsentState" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AllergyIntoleranceCriticality" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationRequestPriority" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.PropertyRepresentation" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TriggerType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CompositionStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AppointmentStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MessageSignificanceCategory" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ListMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResearchElementType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TaskPriority" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ObservationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.PaymentNoticeStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResourceType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.PaymentReconciliationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToBoolean" fromType="FHIR.boolean" toType="System.Boolean"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapGroupTypeMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.OrientationType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SupplyRequestStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EncounterLocationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CommunicationPriority" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CarePlanStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConditionalDeleteStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ContractPublicationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NutritionOrderStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ImmunizationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.uri" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.Use" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.IdentityAssuranceLevel" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceMetricColor" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToTime" fromType="FHIR.time" toType="System.Time"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConditionalReadStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AllergyIntoleranceSeverity" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.OperationKind" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SubscriptionStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GoalLifecycleStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ObservationDataType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DocumentReferenceStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.LocationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SectionMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NoteType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TestReportStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CodeSystemContentMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRDeviceStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ContactPointSystem" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SlotStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.PropertyType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceRequestStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TypeDerivationRule" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GuidanceResponseStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RelatedArtifactType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SequenceType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ReferredDocumentStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MediaStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CompartmentType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.InvoicePriceComponentType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceMetricCalibrationState" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GroupType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EnableWhenBehavior" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TaskIntent" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ImmunizationEvaluationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToDate" fromType="FHIR.date" toType="System.Date"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ExampleScenarioActorType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ProvenanceEntityRole" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EligibilityRequestStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SpecimenStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CurrencyCode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RestfulCapabilityMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DetectedIssueSeverity" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.VisionEyes" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.VisionStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConsentDataMeaning" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GuidePageGeneration" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DocumentRelationshipType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ClaimResponseStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.VariableType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RepositoryType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TestReportResult" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConceptMapGroupUnmappedMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToDateTime" fromType="FHIR.instant" toType="System.DateTime"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ClinicalImpressionStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EligibilityResponsePurpose" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NarrativeStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ImagingStudyStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EndpointStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.BiologicallyDerivedProductCategory" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationRequestStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResourceVersionPolicy" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToDateTime" fromType="FHIR.dateTime" toType="System.DateTime"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationAdministrationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionCardinalityBehavior" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationRequestIntent" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GroupMeasure" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NamingSystemIdentifierType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRResourceType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RiskAssessmentStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CompartmentCode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DiscriminatorType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapInputMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.LinkageType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ReferenceHandlingPolicy" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ResearchStudyStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRDefinedType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AuditEventOutcome" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SpecimenContainedPreference" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionRelationshipType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConstraintSeverity" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ProcedureStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EventCapabilityMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CodeSearchSupport" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ObservationRangeCategory" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.UDIEntryType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceMetricCategory" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TestReportActionResult" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ChargeItemDefinitionPriceComponentType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CapabilityStatementKind" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActivityParticipantType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EventTiming" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SearchParamType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionGroupingBehavior" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StructureMapModelMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TaskStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ServiceRequestStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.BiologicallyDerivedProductStorageScale" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GraphCompartmentRule" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ServiceRequestIntent" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SlicingRules" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ExplanationOfBenefitStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.GuideParameterCode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CatalogEntryRelationType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.LinkType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRAllTypes" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConceptMapEquivalence" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AuditEventAction" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EligibilityResponseStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SearchModifierCode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.OperationParameterUse" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ConsentProvisionType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionConditionKind" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ParticipantStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AdministrativeGender" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.QuestionnaireItemType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceMetricCalibrationType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EvidenceVariableType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionSelectionBehavior" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SupplyDeliveryStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DiagnosticReportStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FlagStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SPDXLicense" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ListStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.base64Binary" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceUseStatementStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AuditEventAgentNetworkType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.AddressUse" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ContactPointUse" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DeviceMetricOperationalStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ContributorType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ReferenceVersionRules" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DetectedIssueStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MeasureReportStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.SearchEntryMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.NameUse" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CommunicationRequestStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.LocationMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToInteger" fromType="FHIR.integer" toType="System.Integer"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.FHIRSubstanceStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.QuestionnaireItemOperator" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.HTTPVerb" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EpisodeOfCareStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.RemittanceOutcome" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.StrandType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.Status" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MedicationStatementStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.EligibilityRequestPurpose" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ServiceRequestPriority" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.QuantityComparator" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.MeasureReportType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ActionPrecheckBehavior" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DayOfWeek" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CompositionAttestationMode" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.TypeRestfulInteraction" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.ContractStatus" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.CodeSystemHierarchyMeaning" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.VisionBase" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.BundleType" toType="System.String"/>
   <conversionInfo functionName="FHIRHelpers.ToString" fromType="FHIR.DocumentConfidentiality" toType="System.String"/>
   <contextInfo name="Practitioner" keyElement="id">
      <contextType namespace="FHIR" name="Practitioner"/>
   </contextInfo>
   <contextInfo name="Device" keyElement="id">
      <contextType namespace="FHIR" name="Device"/>
   </contextInfo>
   <contextInfo name="Patient" keyElement="id" birthDateElement="birthDate.value">
      <contextType namespace="FHIR" name="Patient"/>
   </contextInfo>
   <contextInfo name="Encounter" keyElement="id">
      <contextType namespace="FHIR" name="Encounter"/>
   </contextInfo>
   <contextInfo name="RelatedPerson" keyElement="id">
      <contextType namespace="FHIR" name="RelatedPerson"/>
   </contextInfo>
</modelInfo>`;