import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NotificationsService } from 'angular2-notifications';
import { Subject } from 'rxjs/Subject';
import { AppClickedTestRes } from '../../models/endpoint/clicked-test-res';
import { RequestInitiator } from '../../models/endpoint/endpoint.model';
import { EndpointsSharedService } from '../endpoints-shared.service';
import { LocalStorageService } from '../local-storage.service';
import { SwaggerService } from '../swagger.service';

@Injectable()
export class AccountService {
  url: '/api_keys/mine';
  acl;
  endpointsWithRestrictions = new Subject();
  defaultSpecScheme = 'https';
  endpoints;
  apiKeysSubject = new Subject();
  credentials = {};

  constructor(
    private http: HttpClient,
    public swaggerService: SwaggerService,
    private localDataService: LocalStorageService,
    private notify: NotificationsService,
    private endpointsSharedService: EndpointsSharedService
  ) {
    // get storedSecurityDefinitions from localStorage if exist
    this.localDataService.securityDefinitions
      .subscribe(data => {
        if (data) {
          this.credentials = this.localDataService.getSecurityDefinitionsValuesFromStorage(data);
        }
      });


    this.swaggerService.endpointsSubject.subscribe(endpoints => {
      if (endpoints) {
        this.endpoints = endpoints;

        this.filterEndpointsByPermissions(this.endpoints, []);
        this.endpointsSharedService.triggerEndpointsRestrictedUpdate();

        if (Object.keys(this.credentials).length !== 0) {
          this.getApiKeys(endpoints);
        }
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
    if (!endpoints.public) {
      return;
    }

    const apiKeysEndpoint = endpoints.public.filter((endpoint) => {
      return endpoint.operationId === 'api_keys_mine';
    })[0];

    if (!apiKeysEndpoint) {
      return;
    }

    const request = new AppClickedTestRes(apiKeysEndpoint, null, null, null, this.defaultSpecScheme);

    const requestInitiator: RequestInitiator = new RequestInitiator(request, this.localDataService);
    this.swaggerService.testEndpoint(requestInitiator).subscribe(res => {
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
