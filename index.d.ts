type RecordObject = import('cql-execution').RecordObject;
type PatientObject = import('cql-execution').PatientObject;
type DataProvider = import('cql-execution').DataProvider;
type RetrieveDetails = import('cql-execution').RetrieveDetails;
type Code = import('cql-execution').Code;
type Date = import('cql-execution').Date;
type Interval = import('cql-execution').Interval;

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

declare module 'cql-exec-fhir' {
  export interface PatientSourceOptions {
    requireProfileTagging?: boolean;
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
