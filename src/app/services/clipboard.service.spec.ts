import { TestBed, inject } from '@angular/core/testing';

import { ClipboardService } from './clipboard.service';
import { NotificationsService } from 'angular2-notifications';

const NotificationsServiceStub: Partial<NotificationsService> = {
  success: (heading, text): any => {
    return true;
  },
  error: (heading, text): any => {
    return false;
  }
};

describe('ClipboardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ClipboardService,
        { provide: NotificationsService, useValue: NotificationsServiceStub }
      ]
    });
  });

  it('should be created', inject([ClipboardService], (service: ClipboardService) => {
    expect(service).toBeTruthy();
  }));

  it('should use fallbackCopyTextToClipboard', inject([ClipboardService], (service: ClipboardService) => {
    spyOn(service, 'fallbackCopyTextToClipboard');
    const elem = document.createElement('div');
    service.writeToClipboard({test: 'test'}, elem);

    expect(service.fallbackCopyTextToClipboard).toHaveBeenCalled();
  }));

  it('should sumulate copy to clipboard', inject([ClipboardService], (service: ClipboardService) => {
    spyOn(service.notify, 'success');
    const elem = document.createElement('div');
    service.writeToClipboard({test: 'test'}, elem);

    expect(service.notify.success).toHaveBeenCalled();
  }));
});
