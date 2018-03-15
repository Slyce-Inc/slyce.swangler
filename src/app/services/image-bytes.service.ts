import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ImageBytesService {
  readerSubject = new Subject();
  reader = new FileReader();
  regex = new RegExp(/,(\/.*)/g);

  constructor(
  ) {}

  getImageBytes(imageInput: HTMLInputElement) {
    const self = this;
    const file = imageInput.files[0];

    this.reader.addEventListener('load', function () {
      let binaryImage = self.reader.result.match(self.regex)[0];
      if (binaryImage.charAt(0) === ',') {
        binaryImage = binaryImage.substring(1);
      }
      self.readerSubject.next(binaryImage);
    }, false);

    if (file) {
      this.reader.readAsDataURL(file);
    }

    return this.readerSubject.asObservable();
  }

}
