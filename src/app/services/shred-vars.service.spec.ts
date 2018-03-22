import { TestBed, inject } from '@angular/core/testing';

import { ShredVarsService } from './shred-vars.service';

describe('ShredVarsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShredVarsService]
    });
  });

  it('should be created', inject([ShredVarsService], (service: ShredVarsService) => {
    expect(service).toBeTruthy();
  }));
});
