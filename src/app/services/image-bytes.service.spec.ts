import { TestBed, inject } from '@angular/core/testing';

import { ImageBytesService } from './image-bytes.service';

describe('ImageBytesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ImageBytesService]
    });
  });

  it('should be created', inject([ImageBytesService], (service: ImageBytesService) => {
    expect(service).toBeTruthy();
  }));
});
