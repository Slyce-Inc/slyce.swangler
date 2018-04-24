import {LocalStorageService} from '../../services/local-storage.service';
import {AppClickedTestRes} from './clicked-test-res';

export class Endpoint {
  public operationId: string;
  public summary: string;
  public url: string;
  public parameters: Parameter[];
  public description?: string;
  public consumes: string[];
  public produces: string[];
  public tags: string[];
}
export class AppEndPoint extends Endpoint {
  public method: string;
  public responses: Responses;
  public security: SecurityRequirement[];
}
export class Parameter {
  public in: string;
  public name: string;
  public required: boolean;
  public type: string;
  public schema?: Schema;
  public default?: any;
  public example?: any;
  public description?: string;
  public format?: string;
  public value?: any;
}
export class SecurityRequirement {
  [name: string]: Array<any>;
}
export class Schema {
  public type: string;
  public $$ref?: string;
  public description?: string;
  public required?: any;
  public name?: string;
  public properties: Properties;
  public example?: object;
}
export class Properties {
  [name: string]: Property | Schema;
}
export class Responses {
  [code: string]: Response;
}
export class Response {
  public description: string;
  public schema?: Schema;
}
export class Property {
  public description?: string;
  public type: string;
  public example?: any;
  public required?: any [] | boolean;
}
export class RequestInitiator {
  public scheme: string;
  public url: string;
  public headers: RequestEntry = {};
  public method: string;
  [httpPart: string]: RequestEntry | any;
  constructor(request: AppClickedTestRes, localDataService: LocalStorageService) {
    console.log(request);
    this.scheme = request.selectedScheme;
    this.method = request.endPointData['method'];
    this.url = request.endPointData.url;
    if ( request.endPointData['security'] ) {
      request.endPointData['security'].forEach( item => {
        if ( item ) {
          Object.keys(item).forEach(secRequirement => {
            this.addHeader(secRequirement, localDataService.getStorageVar(secRequirement));
          });
        }
      });
    }

    if (request.selectedRequest) {
      this.setContentType(request.selectedRequest);
    }
    if (request.selectedResponse) {
      this.setAccept(request.selectedResponse);
    }
    if (request.parameterFields) {
      Object.keys(request.parameterFields).forEach(entry => {
        if (!this[request.parameterFields[entry].in]) {
          this[request.parameterFields[entry].in] = {};
        }
        if (entry.toLowerCase() === 'body') {
          this[request.parameterFields[entry].in] = request.parameterFields[entry].value;
        } else {
          this[request.parameterFields[entry].in][entry] = request.parameterFields[entry].value;
        }
      });
    }
  }
  public setContentType(contentType: string) {
    this.headers['Content-Type'] = contentType;
  }
  public setAccept(acceptType: string) {
    this.headers['Accept'] = acceptType;
  }
  public addHeader(headerKey: string, headerValue: string) {
    this.headers[headerKey] = headerValue;
  }
}
export class RequestEntry {
  [entryName: string]: string;
}
