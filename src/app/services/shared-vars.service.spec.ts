import { TestBed, inject } from '@angular/core/testing';

import { SharedVarsService } from './shared-vars.service';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './local-storage.service';

const storage = {};
const LocalStorageServiceStub = {
  getStorageVar: (varName) => {
    return storage ? storage[varName] : null;
  },
  securityDefinitions: (() => {
    return Observable.of(true);
  })(),
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
});
