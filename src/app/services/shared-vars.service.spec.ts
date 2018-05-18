import { TestBed, inject } from '@angular/core/testing';

import { SharedVarsService } from './shared-vars.service';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './local-storage.service';
import { APPENDPOINT, WS_SPEC_MOCK } from '../models/MOCK_DATA';

const storage = {};
const LocalStorageServiceStub = {
  getStorageVar: (varName) => {
    return storage ? storage[varName] : null;
  },
  setStorageVar: (varName, varVal) => {
    storage[varName] = varVal;
  }
};

describe('SharedVarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SharedVarsService,
        { provide: LocalStorageService, useValue: LocalStorageServiceStub },
      ],
    });
  });

  it('should be created', inject([SharedVarsService], (service: SharedVarsService) => {
    expect(service).toBeTruthy();
  }));

  it('should init shared vars', inject([SharedVarsService], (service: SharedVarsService) => {
    service.initSharedVars({'API Keys': [JSON.parse(JSON.stringify(APPENDPOINT))]});
    expect(service.sharedVars['account_id']).toBeDefined();
    expect(service.sharedVars['API_Keys_create_api_key1_body']).toBeTruthy();
  }));

  it('should init ws shared vars', inject([SharedVarsService], (service: SharedVarsService) => {
    service.initSharedVars({'Test' : [JSON.parse(JSON.stringify(WS_SPEC_MOCK.socketEndpoints[0]))]});
    expect(service.sharedVars['test_ws_message_0']).toBeTruthy();
  }));
});
