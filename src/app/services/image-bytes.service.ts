import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ImageBytesService {
  readerSubject = new Subject();
  constructor(
    public zone: NgZone
  ) {}

  getImageBytes(imageInput: HTMLInputElement) {
    const reader = new FileReader();
    const self = this;
    const file = imageInput.files[0];

    this.zone.runOutsideAngular(() => {
        reader.addEventListener('load', function () {
          const imageBytes = self.fetchByteData(reader.result);
          self.readerSubject.next(imageBytes);
        }, false);
    });

    if (file) {
      reader.readAsDataURL(file);
    }

    return this.readerSubject.asObservable();
  }

  fetchByteData(string) {
    const regex = new RegExp(/,(\/.*)/g);
    let imageBytes = string.match(regex)[0];
    if (imageBytes.charAt(0) === ',') {
      imageBytes = imageBytes.substring(1);
    }
    return imageBytes;
  }

}
