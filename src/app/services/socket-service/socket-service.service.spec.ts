import { TestBed, inject } from '@angular/core/testing';

import { SocketServiceService } from './socket-service.service';
import {SocketObservables} from '../../models/socketObservables/socketObservables';

describe('SocketServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketServiceService]
    });
  });

  it('should be created', inject([SocketServiceService], (service: SocketServiceService) => {
    expect(service).toBeTruthy();
  }));
});
