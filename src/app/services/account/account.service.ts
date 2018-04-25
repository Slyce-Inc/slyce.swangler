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

@Injectable()
export class AccountService {
  url: '/api_keys/mine';
  acl;
  endpointsWithRestrictions = new Subject();

  constructor(
    private http: HttpClient,
    private swaggerService: SwaggerService,
    private localDataService: LocalStorageService,
    private notify: NotificationsService
  ) {
    this.swaggerService.endpointsSubject.subscribe(endpoints => {
      if (endpoints) {
        this.getApiKeys(endpoints);
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

    const request = new AppClickedTestRes(apiKeysEndpoint, null, null, null);

    const requestInitiator: RequestInitiator = new RequestInitiator(request, this.localDataService);
    this.swaggerService.testEndpoint(requestInitiator).subscribe( res => {
      this.acl = res.body.acl;

      this.filterEndpointsByPermissions(endpoints, this.acl);
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



}
