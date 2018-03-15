import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ImageBytesService {
  readerSubject = new Subject();
  reader = new FileReader();

  constructor(
  ) {}

  getImageBytes(imageInput: HTMLInputElement) {
    const self = this;
    const file = imageInput.files[0];

    this.reader.addEventListener('load', function () {
      const imageBytes = self.fetchByteData(self.reader.result);
      self.readerSubject.next(imageBytes);
    }, false);

    if (file) {
      this.reader.readAsDataURL(file);
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
