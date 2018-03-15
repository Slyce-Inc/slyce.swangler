import {LocalStorageService} from '../../services/local-storage.service';

export class AppEndPoint {
  public consumes: string[];
  public description?: string;
  public method: string;
  public operationId: string;
  public parameters: Parameter[];
  public produces: string[];
  public responses: Responses;
  public security: SecurityRequirement[];
  public summary: string;
  public tags: string[];
  public url: string;
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
  public url: string;
  public headers: RequestEntry = {};
  public method: string;
  [httpPart: string]: RequestEntry | any;
  constructor(request, localDataService: LocalStorageService) {
    // console.log(request);
    this.method = request.endPointData.method;
    this.url = request.endPointData.url;
    request.endPointData.security.forEach( item => {
      if ( item ) {
        Object.keys(item).forEach(secRequirement => {
          this.addHeader(secRequirement, localDataService.getStorageVar(secRequirement));
        });
      }
    });

    if (request.selectedResponse) {
      this.setContentType(request.selectedResponse);
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

  public addHeader(headerKey: string, headerValue: string) {
    this.headers[headerKey] = headerValue;
  }
}
export class RequestEntry {
  [entryName: string]: string;
}
