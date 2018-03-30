import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AltInputComponent } from './alt-input.component';
import {Component, Input, OnInit} from '@angular/core';
import {By} from '@angular/platform-browser';

describe('AltInputComponent', () => {
  @Component({
    selector: 'app-alt-file-upload',
    template: ''
  })
  class MockFileUploadComponent extends AltInputComponent implements OnInit {
  }
  let component: AltInputComponent;
  let fixture: ComponentFixture<AltInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AltInputComponent,
        MockFileUploadComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show FileUploadComponent on such settings', () => {
    component.type = AltInputComponent.TYPES.STRING;
    component.format = AltInputComponent.FORMATS.BYTE;
    fixture.detectChanges();
    const queryResult = fixture.debugElement.query(By.css('app-alt-file-upload'));
    expect(queryResult != null).toBeTruthy();
  });
  it('should show only one FileUploadComponent on such settings', () => {
    component.type = AltInputComponent.TYPES.STRING;
    component.format = AltInputComponent.FORMATS.BYTE;
    fixture.detectChanges();
    const queryResult = fixture.debugElement.queryAll(By.css('.alt')).length;
    expect(queryResult === 1).toBeTruthy();
    const queryResult2 = fixture.debugElement.query(By.css('app-alt-file-upload'));
    expect(queryResult2 != null).toBeTruthy();
  });
});
