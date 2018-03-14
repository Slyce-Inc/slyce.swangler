import { Injectable, NgZone } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ImageBytesService {
  readerSubject = new Subject();

  constructor(
    public zone: NgZone
  ) {}

  getImageBytes(imageInput: HTMLInputElement) {
      const self = this;
      const file = imageInput.files[0];
      const reader = new FileReader();
      const regex = new RegExp(/(?<=,)(\/.*)/g);

      this.zone.runOutsideAngular( () => {
          reader.addEventListener('load', function () {
            self.readerSubject.next(reader.result.match(regex)[0]);
          }, false);
      });

      if (file) {
        reader.readAsDataURL(file);
      }

      return this.readerSubject.asObservable();
  }

}
