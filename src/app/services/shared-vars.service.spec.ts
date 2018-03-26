import { TestBed, inject } from '@angular/core/testing';

import { SharedVarsService } from './shared-vars.service';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './local-storage.service';
import { APPENDPOINT } from '../models/MOCK_DATA';

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
    service.initSharedVars([APPENDPOINT]);
    expect(service.sharedVars['account_id']).toBeDefined();
  }));
});
