# CQL Execution FHIR Data Source

This project establishes a FHIR-based data source module for use with the CQL Execution Engine.  Currently,
FHIR 1.0.2 (DSTU2), FHIR 3.0.0 (STU3), FHIR 4.0.0 ,and FHIR 4.0.1 (R4) are supported.

# Setting Up the Environment

To use this project, you should perform the following steps:

1. Install [Node.js](https://nodejs.org/en/download/)
2. Execute the following from this project's root directory: `npm install`

# Using the FHIR Patient Data Source

The FHIR Data Source expects each patient to be represented as a single FHIR Bundle containing all of the patient's
relevant data.  The FHIR Data Source does _not_ query FHIR servers, but rather, expects the Bundles to be passed to
it.

The following is a simple example of how it would be used to execute over two patients:

```js
const cqlfhir = require('cql-exec-fhir');

// Code setting up the CQL library, executor, etc, and getting the patient data as a bundle
// ...

const patientSource = cqlfhir.PatientSource.FHIRv401(); // or .FHIRv102() or .FHIRv300() or .FHIRv400()
patientSource.loadBundles([patient01, patient02]);
const results = executor.exec(patientSource);
```

## (Optional) Trusted Environment with meta.profile

**NOTE**: This feature will only work with `cql-execution` version 2.4.1 or higher.

If desired, the FHIR Data Source can be configured to use the `meta.profile` list on FHIR resources as a source of truth for whether or not that resource should be included when looking through the Bundle of data.

```js
const cqlfhir = require('cql-exec-fhir');

// Including "requireProfileTagging: true" in an object passed in to the constructor enables the trusted environment
const patientSource = cqlfhir.PatientSource.FHIRv401({
  requireProfileTagging: true,
}); // or .FHIRv102() or .FHIRv300() or .FHIRv400()
```

As an example, if an ELM Retrieve expression asks for a FHIR Condition Resource with profile `http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-encounter-diagnosis`, the default behavior of the FHIR Data Source is to find any FHIR Condition resource.
With the trusted environment enabled however, the FHIR Data Source will _only_ find resources with the string `'http://hl7.org/fhir/us/core/StructureDefinition/us-core-condition-encounter-diagnosis'` included in their `meta.profile` lists.

# Using the FHIRWrapper

If you are passing in individual FHIR resources to the execution engine as parameters, you can use FHIRWrapper
to convert the raw json FHIR resources into FHIRObjects that work with the execution engine.

Example:

```js
const cqlfhir = require('cql-exec-fhir');
const fhirWrapper = cqlfhir.FHIRWrapper.FHIRv401(); // or .FHIRv102() or .FHIRv300() or .FHIRv400()

const conditionRawResource = { "resourceType": "Condition", "id": "f201", "clinicalStatus": "active", ... }
const conditionFhirObject = fhirWrapper.wrap(conditionResource)
// Now conditionFhirObject can be passed into the cql execution engine
```

# Testing the Code

To run the automated unit tests, execute the following command:
```
$ npm test
```

# Linting the Code

To encourage quality and consistency within the code base, all code should pass eslint without any warnings.  Many text editors can be configured to automatically flag eslint violations.  We also provide an npm script for running eslint on the project.  To run eslint, execute the following command:
```
$ npm run lint
```

Many eslint violations can be fixed automatically by executing the following command:
```
$ npm run lint:fix
```

# Checking Code Format

To encourage a consistent format in the code base, all code should pass prettier without any warnings. To run prettier, execute the following command:
```
$ npm run prettier
```

Prettier violations can be fixed automatically by executing the following command:
```
$ npm run prettier:fix
```

# Altogether Now!

To run the unit tests, linter, and prettier all in one shot, execute the following command:
```
$ npm run test:plus
```
