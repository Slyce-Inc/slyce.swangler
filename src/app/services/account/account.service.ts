import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SwaggerService } from '../swagger.service';
import { RequestInitiator } from '../../models/endpoint/endpoint.model';
import { LocalStorageService } from '../local-storage.service';
import { AppClickedTestRes } from '../../models/endpoint/clicked-test-res';
import { NotificationsService } from 'angular2-notifications';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { EndpointsSharedService } from '../endpoints-shared.service';

@Injectable()
export class AccountService {
  url: '/api_keys/mine';
  acl;
  endpointsWithRestrictions = new Subject();
  defaultSpecScheme = 'https';
  endpoints;
  apiKeysSubject = new Subject();

  constructor(
    private http: HttpClient,
    private swaggerService: SwaggerService,
    private localDataService: LocalStorageService,
    private notify: NotificationsService,
    private endpointsSharedService: EndpointsSharedService
  ) {
    this.swaggerService.endpointsSubject.subscribe(endpoints => {
      if (endpoints) {
        this.endpoints = endpoints;
        this.getApiKeys(endpoints);
      }
    });

    this.localDataService.onSecurityDefinitionsChange().subscribe(() => {
      if (this.endpoints) {
        this.getApiKeys(this.endpoints);
      }
    });

    this.swaggerService.getApiData().subscribe(swaggerData => {
      if (swaggerData) {
        this.defaultSpecScheme = swaggerData.spec.schemes[0] || 'https';
      }
    });
  }

  getApiKeys(endpoints) {
    const apiKeysEndpoint = endpoints.public.filter((endpoint) => {
      return endpoint.operationId === 'api_keys_mine';
    })[0];

    if (!apiKeysEndpoint) {
      return;
    }

    const request = new AppClickedTestRes(apiKeysEndpoint, null, null, null, this.defaultSpecScheme);

    const requestInitiator: RequestInitiator = new RequestInitiator(request, this.localDataService);
    this.swaggerService.testEndpoint(requestInitiator).subscribe( res => {
      this.acl = res.body.acl;

      this.filterEndpointsByPermissions(endpoints, this.acl);
      this.endpointsSharedService.triggerEndpointsRestrictedUpdate();
    }, error => {
      this.notify.error('Error', 'Cannot load API Keys');
      throw new Error(error);
    });
  }

  filterEndpointsByPermissions(endpoints, acl) {
    for (const key in endpoints) {
      if (endpoints.hasOwnProperty(key)) {
        const tag = endpoints[key];
        tag.forEach(endpoint => {
          if (endpoint.acl) {
            endpoint.acl.forEach(apiKey => {
              if (!acl[apiKey]) {
                endpoint.restricted = true;
              } else {
                endpoint.restricted = false;
              }
            });
          } else {
            endpoint.restricted = false;
          }
        });
      }
    }

    this.endpointsWithRestrictions.next(endpoints);
    this.swaggerService.updateSortedEndpoints(endpoints);
  }

  getEndpointsWithRestrictions() {
    return this.endpointsWithRestrictions.asObservable();
  }

  onApiKeysUpdate() {
    return this.apiKeysSubject.asObservable();
  }

}
