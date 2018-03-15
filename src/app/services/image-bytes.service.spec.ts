import { TestBed, inject } from '@angular/core/testing';

import { ImageBytesService } from './image-bytes.service';

const imageBase46 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVEhUVFxUWFhgVGBcVGBUYFR';

describe('ImageBytesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ImageBytesService
      ]
    });
  });

  it('should be created', inject([ImageBytesService], (service: ImageBytesService) => {
    expect(service).toBeTruthy();
  }));

  it('should parse base46 and return byte data', inject([ImageBytesService], (service: ImageBytesService) => {
    const bytes = service.fetchByteData(imageBase46);
    expect(bytes).toEqual('/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUSEhMVEhUVFxUWFhgVGBcVGBUYFR');
  }));
});
