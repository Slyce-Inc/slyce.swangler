import { TestBed, inject } from '@angular/core/testing';

import { SocketService } from './socket.service';
import {SocketObservables} from '../../models/socketObservables/socketObservables';

describe('SocketServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocketService]
    });
  });

  it('should be created', inject([SocketService], (service: SocketService) => {
    expect(service).toBeTruthy();
  }));
});
