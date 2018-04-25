import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EndpointsSharedService {

  isExamplesHidden = false;
  isRestrictedHiddenSubject = new Subject();
  hiddenTags: String[] = [];
  hiddenTagsSubject = new Subject();

  constructor() {
  }

  endpointsExamplesToggle() {
    this.isExamplesHidden = !this.isExamplesHidden;
  }

  endpointsRestrictedToggle(value: boolean) {
    this.isRestrictedHiddenSubject.next(value);

    if (value === false) {
      this.clearHiddenTags();
    }
  }

  onRestrictedEndpointsVisibilityChange() {
    return this.isRestrictedHiddenSubject.asObservable();
  }

  addHiddenTag(tag) {
    this.hiddenTags.push(tag);
    this.hiddenTagsSubject.next(this.hiddenTags);
  }

  onHiddenTagsChange() {
    return this.hiddenTagsSubject.asObservable();
  }

  clearHiddenTags() {
    this.hiddenTags = [];
    this.hiddenTagsSubject.next(this.hiddenTags);
  }
}
