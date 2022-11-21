declare module 'cql-exec-fhir' {
  import {
    RecordObject,
    PatientObject,
    DataProvider,
    RetrieveDetails,
    Code,
    Date,
    Interval
  } from 'cql-execution';

  interface PatientSourceOptions {
    requireProfileTagging: boolean;
  }

  class FHIRObject implements RecordObject {
    constructor(json: any, typeInfo: any, modelInfo: any);
    get(field: string): any;
    getId(): string;
    getCode(field: string): Code;
    getDate(field: string): Date;
    getInterval(field: string): Interval;
    getDateOrInterval(field: string): Date | Interval;
    _is(typeSpecifier: any): boolean;
    _typeHierarchy(): any;
    getTypeInfo(): any;
  }

  class Patient extends FHIRObject implements PatientObject {
    constructor(bundle: any, modelInfo: any, patientSourceOptions: PatientSourceOptions);
    findRecords(profile: string, retrieveDetails?: RetrieveDetails): FHIRObject;
    findRecord(profile: string, retrieveDetails?: RetrieveDetails): FHIRObject;
  }

  export class PatientSource implements DataProvider {
    constructor(filePathOrXML: string, patientSourceOptions?: PatientSourceOptions);
    static FHIRv102(patientSourceOptions?: PatientSourceOptions): PatientSource;
    static FHIRv401(patientSourceOptions?: PatientSourceOptions): PatientSource;
    static FHIRv400(patientSourceOptions?: PatientSourceOptions): PatientSource;
    static FHIRv401(patientSourceOptions?: PatientSourceOptions): PatientSource;
    get version(): string;
    loadBundles(bundles: any[]): void;
    currentPatient(): Patient | undefined;
    nextPatient(): Patient | undefined;
    reset(): void;
  }

  export class FHIRWrapper {
    constructor(filePathOrXML: string);
    static FHIRv102(): FHIRWrapper;
    static FHIRv300(): FHIRWrapper;
    static FHIRv400(): FHIRWrapper;
    static FHIRv401(): FHIRWrapper;
    wrap(fhirJson: any, fhirResourceType?: string): FHIRObject;
    _typeCastIsAllowed(currentClass: any, targetClass: any): boolean;
  }
}
