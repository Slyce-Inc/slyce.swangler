import { TestBed, inject } from '@angular/core/testing';
import { AccountService } from './account.service';
import { HttpClient } from '@angular/common/http';
import { SwaggerService } from '../swagger.service';
import { LocalStorageService } from '../local-storage.service';
import { NotificationsService } from 'angular2-notifications';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { ApiData } from '../../models/apidata.model';
import { APPENDPOINT } from '../../models/MOCK_DATA';
import { EndpointsSharedService } from '../endpoints-shared.service';

class RequestInitiator {
  constructor(request, localDataService) {}
}

const taggedEndpoints = {
  'public': [APPENDPOINT]
};

const groupedEndpointsMock = [];
groupedEndpointsMock['public'] = [JSON.parse(JSON.stringify(APPENDPOINT))];

const HttpClientStub: Partial<HttpClient> = {};
const SwaggerServiceStub: Partial<SwaggerService> = {
  endpointsSubject: new BehaviorSubject(groupedEndpointsMock),
  getEndpointsSortedByTags: () => {
    return Observable.of(groupedEndpointsMock);
  },
  getApiData: () => {
    return Observable.of(JSON.parse(JSON.stringify(ApiData.MOCK_DATA)));
  },
  testEndpoint: () => {
    return Observable.of(null);
  },
  initSwagger: () => {
    return Promise.resolve(true);
  },
  updateSortedEndpoints(endpoints) {
    return true;
  }
};

const EndpointsSharedServiceStub: Partial<EndpointsSharedService> = {
  triggerEndpointsRestrictedUpdate() {
    return true;
  }
};

const LocalStorageServiceStub: Partial<LocalStorageService> = {
 onSecurityDefinitionsChange: function() {
    return Observable.of(true);
  },
  getStorageVar: function(varName) {
    return 'test';
  },
  securityDefinitions: (function () {
   return Observable.of(true);
  })(),
  getSecurityDefinitionsValuesFromStorage() {
   return {'test_name': 'test_value'};
  }
};
const NotificationsServiceStub: Partial<NotificationsService> = {};

fdescribe('AccountService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AccountService,
        { provide: HttpClient, useValue: HttpClientStub },
        { provide: SwaggerService, useValue: SwaggerServiceStub },
        { provide: LocalStorageService, useValue: LocalStorageServiceStub },
        { provide: NotificationsService, useValue: NotificationsServiceStub },
        { provide: EndpointsSharedService, useValue: EndpointsSharedServiceStub },
      ],
    });
  });

  it('should be created', inject([AccountService], (service: AccountService) => {
    expect(service).toBeTruthy();
  }));

  it('should add "restricted" property to endpoints', inject([AccountService], (service: AccountService) => {
    service.getEndpointsWithRestrictions().subscribe(endpoints => {
      expect(endpoints['public'][0].restricted).toBeFalsy();
    });

    service.filterEndpointsByPermissions(taggedEndpoints, {});
  }));
});
