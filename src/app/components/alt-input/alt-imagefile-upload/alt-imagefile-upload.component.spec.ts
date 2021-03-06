import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {ImageBytesService} from '../../../services/image-bytes.service';
import {By} from '@angular/platform-browser';
import {AltImageFileUploadComponent} from './alt-imagefile-upload.component';

describe('AltImageFileUploadComponent', () => {
  class MockImageBytesService {
    constructor() {
    }
    getImageBytes(imageInput: HTMLInputElement) {
    }

    fetchByteData(string) {
    }
  }
  let component: AltImageFileUploadComponent;
  let fixture: ComponentFixture<AltImageFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltImageFileUploadComponent ],
      providers: [
        { provide: ImageBytesService, useValue: MockImageBytesService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltImageFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call clear input on click of the X button', () => {
    spyOn(component, 'clearInput');
    component.hasContent = true;
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.badge-danger')).triggerEventHandler('click', null);
    expect(component.clearInput).toHaveBeenCalled();
  });
  it('should show X button when there is content uploaded', () => {
    component.hasContent = true;
    fixture.detectChanges();
    const queryResult = fixture.debugElement.query(By.css('.badge-danger'));
    expect(queryResult != null).toBeTruthy();
  });
  it('should not show X button when there is no content uploaded', () => {
    component.hasContent = false;
    fixture.detectChanges();
    const queryResult = fixture.debugElement.query(By.css('.badge-danger'));
    expect(queryResult == null).toBeTruthy();
  });
  it('should call applyButtonClicked on click of apply button', () => {
    spyOn(component, 'applyButtonClicked');
    component.hasContent = true;
    fixture.detectChanges();
    fixture.debugElement.query(By.css('.badge-success')).triggerEventHandler('click', null);
    expect(component.applyButtonClicked).toHaveBeenCalled();
  });
  it('should show apply button when there is content uploaded', () => {
    component.hasContent = true;
    fixture.detectChanges();
    const queryResult = fixture.debugElement.query(By.css('.badge-success'));
    expect(queryResult != null).toBeTruthy();
  });
  it('should not show apply button when there is no content uploaded', () => {
    component.hasContent = false;
    fixture.detectChanges();
    const queryResult = fixture.debugElement.query(By.css('.badge-success'));
    expect(queryResult == null).toBeTruthy();
  });
});
