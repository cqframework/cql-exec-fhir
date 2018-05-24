# CQL Execution FHIR Data Source

This project establishes a FHIR-based data source module for use with the CQL Execution Engine.  Currently,
only FHIR 1.0.2 (DSTU2) is supported.

# Setting Up the Environment

To use this project, you should perform the following steps:

1. Install [Node.js](https://nodejs.org/en/download/)
2. Install [Yarn](https://yarnpkg.com/en/docs/install)
3. Execute the following from this project's root directory: `yarn`

# Using the FHIR Data Source

The FHIR Data Source expects each patient to be represented as a single FHIR Bundle containing all of the patient's
relevant data.  The FHIR Data Source does _not_ query FHIR servers, but rather, expects the Bundles to be passed to
it.

The following is a simple example of how it would be used to execute over two patients:

```js
const cqlfhir = require('cql-exec-fhir');

// Code setting up the CQL library, executor, etc, and getting the patient data as a bundle
// ...

const patientSource = cqlfhir.PatientSource.FHIRv102();
patientSource.loadBundles([patient01, patient02]);
const results = executor.exec(patientSource);
```

# Linting the Code

To encourage quality and consistency within the code base, all code should pass eslint without any warnings.  Many text editors can be configured to automatically flag eslint violations.  We also provide an npm script for running eslint on the project.  To run eslint, execute the following command:
```
$ yarn lint
```