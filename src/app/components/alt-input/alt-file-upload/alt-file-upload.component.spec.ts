import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltFileUploadComponent } from './alt-file-upload.component';

describe('AltFileUploadComponent', () => {
  let component: AltFileUploadComponent;
  let fixture: ComponentFixture<AltFileUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltFileUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
