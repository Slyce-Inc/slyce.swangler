import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class EndpointsSharedService {

  isExamplesHidden = false;
  isRestrictedHidden = false;
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
    this.isRestrictedHidden = value;

    if (value === false) {
      this.clearHiddenTags();
    }
  }

  triggerEndpointsRestrictedUpdate() {
    this.isRestrictedHiddenSubject.next(this.isRestrictedHidden);
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
