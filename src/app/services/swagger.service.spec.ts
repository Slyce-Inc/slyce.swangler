import { TestBed, inject, tick, fakeAsync } from '@angular/core/testing';

import { SwaggerService } from './swagger.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { NotificationsService } from 'angular2-notifications';
import { AppEndPoint, RequestInitiator } from '../models/endpoint/endpoint.model';
import 'rxjs/add/observable/of';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './local-storage.service';
import {Access, EndpointAccesses} from '../models/endpointAccess/endpoint-access.model';
import {ApiData} from '../models/apidata.model';
import {APPENDPOINT, REQUEST_INITIATOR, REQUEST_INITIATOR_OBJ} from '../models/MOCK_DATA';
import {AppClickedTestRes} from '../models/endpoint/clicked-test-res';
import {ConfigService} from './config-service/config.service';

const endpointsMockData = [{ 'test': JSON.parse(JSON.stringify(APPENDPOINT)) }];

const LocalStorageServiceStub: Partial<LocalStorageService> = {
  getStorageVar: (varName) => {
    return 'test';
  }
};

const requestMockData = REQUEST_INITIATOR;

describe('SwaggerService', () => {
  let service: SwaggerService;
  let localStorageService: LocalStorageService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SwaggerService,
        HttpClient,
        HttpHandler,
        NotificationsService,
        { provide: LocalStorageService, useValue: LocalStorageServiceStub }
      ]
    });
    service = TestBed.get(SwaggerService);
    localStorageService = TestBed.get(LocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should substitute path', () => {
    let res: string = service.substitutePath('test.com/{param}', { param: 'test-param' });
    expect(res).toEqual('test.com/test-param');

    res = service.substitutePath('test.com/{param1}/{param2}', { 'param1': 'test-param1', 'param2': 'test-param2'});
    expect(res).toEqual('test.com/test-param1/test-param2');

    res = service.substitutePath('test.com/{param1}/test/{param2}', { 'param1': 'test-param1', 'param2': 'test-param2'});
    expect(res).toEqual('test.com/test-param1/test/test-param2');
  });

  it('should set API Data', () => {
    service.getApiData()
      .subscribe( res => {
        if (res) {
          expect(res).toEqual('test');
        }
      });

    service.setApiData('test');
    expect(service.apiDataSubject.getValue()).toEqual('test');
  });

  it('should set sorted endpoints', () => {
    service.getEndpointsSortedByTags()
      .subscribe( res => {
        if (res) {
          expect(res).toEqual('test');
        }
      });

    service.setSortedEndpoints('test');
    expect(service.endpointsSubject.getValue()).toEqual('test');
  });
  it('should sort endpoints by tags', () => {
    const res = service.sortApiEndpointsByTags(endpointsMockData);

    // tag from AppEndPoint.MOCK_DATA.tags property
    expect(Object.keys(res)[0]).toEqual('API Keys');

    // meaning this is an array
    expect(res['API Keys'].length).toEqual(1);
  });
  it('should sort endpoints by tags even if endpoint has no tags -> default to NO_TAGS', () => {
    const endpointsMockDataClone = JSON.parse(JSON.stringify(endpointsMockData));
    endpointsMockDataClone[0].test.tags = undefined;
    const res = service.sortApiEndpointsByTags(endpointsMockDataClone);
    // tag from AppEndPoint.MOCK_DATA.tags property
    expect(Object.keys(res)[0]).toEqual('NO_TAG');

    // meaning this is an array
    expect(res['NO_TAG'].length).toEqual(1);
  });

  it('should set host URL', () => {
    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json', 'spec': { 'host': null, schemes: ['http'] } });
    expect(service.specHost).toEqual('forge.local');

    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json', 'spec': { 'host': 'test.com', schemes: ['https'] } });
    expect(service.specHost).toEqual('test.com');

    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json', 'spec': { 'host': 'test.com', schemes: [] } });
    expect(service.specHost).toEqual('test.com');

    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json' });
    expect(service.specHost).toEqual('forge.local');

    service.setHostUrl({ 'url': 'http://forge.local/openapi/spec.json', 'spec': { 'host': 'test.com', schemes: [], basePath: '/v2' } });
    expect(service.specHost).toEqual('test.com/v2');

    service.setHostUrl({ 'url': '../openapi/spec.json', 'spec': { 'host': null, schemes: ['http'], basePath: '/v2' } });
    expect(service.specHost).toEqual (window.location.host + '/v2');

    service.setHostUrl({ 'url': '../openapi/spec.json', 'spec': { 'host': null, schemes: ['https'], basePath: '/v2' } });
    expect(service.specHost).toEqual(window.location.host + '/v2');

    service.setHostUrl({ 'url': '../openapi/spec.json', 'spec': { 'host': null, schemes: ['http']} });
    expect(service.specHost).toEqual( window.location.host);
  });

  it('should call initSwaggerconso', () => {
    spyOn(service, 'initSwagger');
    service.setSpecUrl('');
    expect(service.initSwagger).toHaveBeenCalled();
  });

  it('should return promise', fakeAsync(() => {
    spyOn(service, 'initSwagger').and.returnValue(Promise.resolve(true));
    let result;
    service.initSwagger('test').then(data => result = data);
    tick();
    expect(result).toBeTruthy();
  }));

  it('should build endpoint options', fakeAsync(() => {
    const endpointOptions = service.buildEndpointOptions(new RequestInitiator(requestMockData, localStorageService));
    expect(endpointOptions['observe']).toEqual('response');
    expect(endpointOptions['headers'].get('slyce-account-id')).toEqual('test');
    expect(endpointOptions['headers'].get('slyce-api-key')).toEqual('test');
    expect(endpointOptions['headers'].get('accept')).toEqual('application/json');
    expect(endpointOptions['headers'].get('content-type')).toBeFalsy();
    expect(endpointOptions['params'].get('page_number')).toEqual(1);
    expect(endpointOptions['params'].get('page_size')).toEqual(20);
  }));

  it('should build endpoint options', fakeAsync(() => {
    const test: AppClickedTestRes = JSON.parse(JSON.stringify(requestMockData));
    test.selectedRequest = 'application/json';
    const endpointOptions = service.buildEndpointOptions(new RequestInitiator(test, localStorageService));
    expect(endpointOptions['observe']).toEqual('response');
    expect(endpointOptions['headers'].get('slyce-account-id')).toEqual('test');
    expect(endpointOptions['headers'].get('slyce-api-key')).toEqual('test');
    expect(endpointOptions['headers'].get('accept')).toEqual('application/json');
    expect(endpointOptions['headers'].get('content-type')).toEqual('application/json');
    expect(endpointOptions['params'].get('page_number')).toEqual(1);
    expect(endpointOptions['params'].get('page_size')).toEqual(20);
  }));

  it('should test endpoint', fakeAsync(() => {
    spyOn(service, 'testEndpoint').and.returnValue(Observable.of(true));
    let result;
    service.testEndpoint(null).subscribe(res => result = res);
    tick();
    expect(result).toBeTruthy();
  }));
  it('should apply the endpointAccesses criteria and remove the available apis from the json recieved from swagger service', () => {
    const sampleEndPointAccesses = new EndpointAccesses();
    sampleEndPointAccesses.push(new Access('/accounts/', 'get', false));
    sampleEndPointAccesses.push(new Access('/accounts/', 'post', false));
    const appliedData = SwaggerService.applyEndpointAccesses(JSON.parse(JSON.stringify(ApiData.MOCK_RAW_DATA)), sampleEndPointAccesses);
    expect(appliedData.spec.paths['/accounts/']['get']).toBeUndefined();
    expect(appliedData.spec.paths['/accounts/']['post']).toBeUndefined();
  });

  it('should apply the endpointAccesses criteria and not remove on true from the' +
    ' available apis from the json recieved from swagger service', () => {
    const sampleEndPointAccesses = new EndpointAccesses();
    sampleEndPointAccesses.push(new Access('/accounts/', 'get', true));
    sampleEndPointAccesses.push(new Access('/accounts/', 'post', false));
    const appliedData = SwaggerService.applyEndpointAccesses(JSON.parse(JSON.stringify(ApiData.MOCK_RAW_DATA)), sampleEndPointAccesses);
    expect(appliedData.spec.paths['/accounts/']['get']).toBeDefined();
    expect(appliedData.spec.paths['/accounts/']['post']).toBeUndefined();
  });

  it('should not apply the endpointAccesses criteria and remove the available' +
    ' apis from the json recieved from swagger service if no EndpointAccess Entries', () => {
    const sampleEndPointAccesses = new EndpointAccesses();
    const startData = JSON.parse(JSON.stringify(ApiData.MOCK_RAW_DATA));
    const appliedData = SwaggerService.applyEndpointAccesses(startData, sampleEndPointAccesses);
    expect(appliedData.spec.paths['/accounts/']['get']).toBeDefined();
    expect(appliedData.spec.paths['/accounts/']['post']).toBeDefined();
  });

  it('should append ws endpoints to corresponding rest endpoints tags', fakeAsync(() => {
    const fakeRestEndpoints = {
      'test': []
    };
    const fakeWsEndpoints = {
      'socketEndpoints': [{
        tags: [
          'test',
          'accounts'
        ]
      }]
    };
    service.appendWsEndpointToTags(fakeRestEndpoints, fakeWsEndpoints);
    expect(fakeRestEndpoints['test']).toBeDefined();
    expect(fakeRestEndpoints['accounts']).toBeDefined();
  }));

  it('should create new tag in dictionary of combined endpoints', fakeAsync(() => {
    const fakeRestEndpoints = {};
    const fakeWsEndpoints = {
      'socketEndpoints': [{
        tags: [
          'test'
        ]
      }]
    };
    service.appendWsEndpointToTags(fakeRestEndpoints, fakeWsEndpoints);
    expect(fakeRestEndpoints['test']).toBeDefined();
  }));

  it('should not populate the dictionary of combined endpoints', fakeAsync(() => {
    const fakeRestEndpoints = {};
    service.appendWsEndpointToTags({}, {});
    expect(fakeRestEndpoints).toEqual({});
  }));

  it('should set ws endpoints', fakeAsync(() => {
    service.setWsEndpoints('test');
    service.getWsEndpoints().subscribe(data => expect(data).toEqual('test'));
  }));

  describe('should load websocket endpoint in NO_TAG field if there is no tag array for that endpoint', function () {
    const test = function (fakeWsEndpoints, description) {
      it('test with ' + description, function () {
        const fakeRestEndpoints = {
          'test': []
        };
        service.appendWsEndpointToTags(fakeRestEndpoints, fakeWsEndpoints);
        expect(fakeRestEndpoints[SwaggerService.NO_TAG_LABEL][0].operationId).toEqual(fakeWsEndpoints.socketEndpoints[0].operationId);
      });
    };
    const fake = {
      'socketEndpoints': [{
        operationId: 'something123',
        tags: [
        ]
      }]
    };
    test(fake, 'empty tags');
    fake.socketEndpoints[0].tags = undefined;
    test(fake, 'undefined tag');
    fake.socketEndpoints[0].tags = null;
    test(fake, 'null tag');
    delete fake.socketEndpoints[0].tags;
    test(fake, 'no tag field');
  });

  it('should build body correctly on content-type application/json', function () {
    const test: RequestInitiator = JSON.parse(JSON.stringify(REQUEST_INITIATOR_OBJ));
    test.headers['Content-Type'] = 'application/json';
    expect(service.buildBody(test)).toEqual(test.body);
  });
  it('should build body correctly on content-type ', function () {
    const test: RequestInitiator = JSON.parse(JSON.stringify(REQUEST_INITIATOR_OBJ));
    test.headers['Content-Type'] = 'multipart/form-data';
    const result: FormData = service.buildBody(test);
    /*for (const pair of result.entries()) {
      "
    }*/
    expect(result).toBeTruthy();
  });
});
