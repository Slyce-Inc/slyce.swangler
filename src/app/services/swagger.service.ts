import { Injectable } from '@angular/core';
const Swagger = require('swagger-client');
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/first';
import { NotificationsService } from 'angular2-notifications';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import {RequestInitiator} from '../models/endpoint/endpoint.model';
import {EndpointAccesses} from '../models/endpointAccess/endpoint-access.model';

import { WS_SPEC_MOCK } from '../models/MOCK_DATA';
import { SharedVarsService } from './shared-vars.service';

@Injectable()
export class SwaggerService {
  public static NO_TAG_LABEL = 'NO_TAG';
  apiDataSubject: BehaviorSubject<any>;
  endpointsSubject: BehaviorSubject<any>;
  wsEndpointsSubject: BehaviorSubject<any>;
  specHost = '';
  specSocketHost = '';
  endpoints = [];

  public static applyEndpointAccesses(apiData, endpointAccesses: EndpointAccesses) {
    if (!endpointAccesses) {
      return apiData;
    }
    const newApiData = JSON.parse(JSON.stringify(apiData));
    if (newApiData && newApiData.spec && newApiData.spec.paths) {
      const paths = newApiData.spec.paths;
      Object.keys(paths).forEach( pathName => {
        const path = paths[pathName];
        if (path) {
          Object.keys(path).forEach( methodName => {
            if (endpointAccesses[pathName] && endpointAccesses[pathName][methodName] &&
              (!endpointAccesses[pathName][methodName].isAvailable)) {
              delete path[methodName];
            }
          });
        }
      });
    }
    return newApiData;
  }

  constructor(
    private http: HttpClient,
    public notify: NotificationsService,
    // public sharedVarsService: SharedVarsService
  ) {
    this.apiDataSubject = new BehaviorSubject(null);
    this.endpointsSubject = new BehaviorSubject(null);
    this.wsEndpointsSubject = new BehaviorSubject(null);
  }

  testEndpoint(callData: RequestInitiator): Observable<any> {
    const options = this.buildEndpointOptions(callData);
    const body = this.buildBody(callData);
    if (callData.method === 'put' || callData.method === 'patch' || callData.method === 'post') {
      return this.http[callData.method](callData.scheme + '://' + this.specHost + this.substitutePath(callData.url, callData.path),
        body, options);
    } else {
      return this.http[callData.method](callData.scheme + '://' + this.specHost + this.substitutePath(callData.url, callData.path),
        options);
    }
  }

  buildBody(callData: RequestInitiator): any {
    if (callData.headers && callData.headers['Content-Type'] === 'multipart/form-data') {
      const formData: FormData = new FormData();
      if (callData['formData']) {
        for (const property in callData['formData']) {
          if (callData['formData'].hasOwnProperty(property)) {
            formData.append(property, callData['formData'][property],  callData['formData'][property].filename);
          }
        }
      }
      if (callData['body']) {
        formData.append('data', JSON.stringify(callData['body']));
      }
      return formData;
    } else {
      return callData.body;
    }
  }

  buildEndpointOptions(callData: RequestInitiator) {
    const options = {};
    options['observe'] = 'response';
    if (callData.headers) {
      options['headers'] = new HttpHeaders();

      for (const headerName in callData.headers) {
        if (callData.headers.hasOwnProperty(headerName)) {
          const headerValue = callData.headers[headerName];
          if (headerValue) {
            if (headerName === 'Content-Type' && headerValue === 'multipart/form-data') {
              // options['headers'] = options['headers'].append(headerName, undefined);
            } else {
              options['headers'] = options['headers'].append(headerName, headerValue);
            }
          }
        }
      }
    }

    if (callData.query) {
      options['params'] = new HttpParams();
      for (const queryName in callData.query) {
        if (callData.query.hasOwnProperty(queryName)) {
          const queryValue = callData.query[queryName];
          if (queryValue) {
            options['params'] = options['params'].append(queryName, queryValue);
          }
        }
      }
    }
    return options;
  }

  substitutePath(path, pathObject): string {
    if (pathObject) {
      Object.keys(pathObject).forEach( key => {
        if (pathObject[key]) {
          path = path.replace('{' + key + '}', pathObject[key]);
        }
      });
    }
    return(path);
  }

  setApiData(apiData) {
    this.apiDataSubject.next(apiData);
  }

  setSortedEndpoints(sortedEndpoints) {
    this.endpointsSubject.next(sortedEndpoints);
  }

  getEndpointsSortedByTags(): Observable<any> {
    return this.endpointsSubject.asObservable();
  }

  getApiData(): Observable<any> {
    return this.apiDataSubject.asObservable();
  }

  setSpecUrl(url: string) {
    this.initSwagger(url);
  }

  sortApiEndpointsByTags(endpoints): Array<Array<Object>> {
    const result = [];

    for (const pathKey in endpoints) {
      if (endpoints.hasOwnProperty(pathKey)) {
        const path = endpoints[pathKey];

        for (const methodKey in path) {
          if (path.hasOwnProperty(methodKey)) {
            const method = path[methodKey];

            this.endpoints.push(method);

            if ( method.tags ) {
              method.tags.filter( tag => {

                if (!result[tag]) {
                  result[tag] = [];
                }

                method.url = pathKey;
                method.method = methodKey;
                result[tag].push(method);

              });
            } else {
              if (!result[SwaggerService.NO_TAG_LABEL]) {
                result[SwaggerService.NO_TAG_LABEL] = [];
              }
              method.url = pathKey;
              method.method = methodKey;
              result[SwaggerService.NO_TAG_LABEL].push(method);
            }
          }
        }

      }
    }
    return result;
  }

  setHostUrl(apiData) {
    if (apiData) {
      let host;
      let basePath;
      if (apiData.spec && apiData.spec.host) {
        host = apiData.spec.host;
      } else {
        try {
          const matches = apiData.url.match('(https*://)([^/]*)');
          host = matches[matches.length - 1];
        } catch ( e ) {
          host = window.location.host;
        }
      }
      basePath = apiData.spec && apiData.spec.basePath ? apiData.spec.basePath : '';
      this.specHost = host + basePath;
      console.log(this.specHost);
    }
  }
  setSocketHost(apiData) {
    if (apiData) {
      let host;
      let basePath;
      // Set Host
      if (apiData.host) {
        host = apiData.host;
      } else {
        host = window.location.host;
      }
      // BasePath
      basePath = apiData.basePath ? apiData.basePath : '';
      this.specSocketHost = host + basePath;
    }
  }
  initSwagger(specUrl: string, websocketSpecUrl?: string): Promise<any> {
    return Swagger(specUrl).then( apiData => {
        apiData = SwaggerService.applyEndpointAccesses(apiData, null);
        this.setHostUrl(apiData);
        this.setApiData(apiData);
        if (websocketSpecUrl) {
          return this.initWsSpec(websocketSpecUrl).then( res => {
            this.setSocketHost(res);
            console.log(this.specSocketHost);
            const sortedRestEndpoints = this.sortApiEndpointsByTags(apiData.spec.paths);
            const sortedCombinedEndpoints = this.appendWsEndpointToTags(sortedRestEndpoints, res);
            // this.sharedVarsService.initSharedVars(this.endpoints);
            this.setSortedEndpoints(sortedCombinedEndpoints);

            return this.endpoints;
          }, error => {
            this.notify.error('Error', 'Swangler socket spec JSON was not loaded');
            this.setSortedEndpoints(this.sortApiEndpointsByTags(apiData.spec.paths));
            throw error;
          });
        } else {
          this.setSortedEndpoints(this.sortApiEndpointsByTags(apiData.spec.paths));
        }
      })
      .catch( error => {
        this.notify.error('Error', 'Swagger spec JSON was not loaded');
        throw error;
      });
  }

  appendWsEndpointToTags(restEndpoints, wsEndpoints) {
    if (wsEndpoints && wsEndpoints.socketEndpoints) {
      wsEndpoints.socketEndpoints.forEach(endpoint => {
        endpoint.type = 'websocket';
        this.endpoints.push(endpoint);
        if (endpoint && endpoint.tags && endpoint.tags.length > 0) {
          endpoint.tags.forEach(tag => {
            if (!restEndpoints[tag]) {
              restEndpoints[tag] = [];
            }
            restEndpoints[tag].push(endpoint);
          });
        } else if (endpoint) {
          if (!restEndpoints[SwaggerService.NO_TAG_LABEL]) {
            restEndpoints[SwaggerService.NO_TAG_LABEL] = [];
          }
          restEndpoints[SwaggerService.NO_TAG_LABEL].push(endpoint);
        }
      });
    }
    return restEndpoints;
  }

  initWsSpec(websocketSpecUrl): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get(websocketSpecUrl).subscribe( res => {
        this.setWsEndpoints(res);
        resolve(res);
      }, error => {
        reject(error);
      });
    });
  }

  setWsEndpoints(wsEndpointsData) {
    this.wsEndpointsSubject.next(wsEndpointsData);
  }

  getWsEndpoints() {
    return this.wsEndpointsSubject.asObservable();
  }
}
