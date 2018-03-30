import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AltInputComponent } from './alt-input.component';
import {By} from '@angular/platform-browser';
import {AltImageFileUploadComponent} from './alt-imagefile-upload/alt-imagefile-upload.component';
import {AltFileUploadComponent} from './alt-file-upload/alt-file-upload.component';
import {ImageBytesService} from '../../services/image-bytes.service';

describe('AltInputComponent', () => {
  let component: AltInputComponent;
  let fixture: ComponentFixture<AltInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AltInputComponent,
        AltFileUploadComponent,
        AltImageFileUploadComponent
      ],
      providers: [
        ImageBytesService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltInputComponent);
    component = fixture.componentInstance;
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should show FileUploadComponent on such settings', () => {
    component.type = AltInputComponent.TYPES.STRING;
    component.format = AltInputComponent.FORMATS.BYTE;
    fixture.detectChanges();
    const queryResult = fixture.debugElement.query(By.css('app-alt-imagefile-upload'));
    expect(queryResult != null).toBeTruthy();
  });
  it('should show only one FileUploadComponent on such settings', () => {
    component.type = AltInputComponent.TYPES.STRING;
    component.format = AltInputComponent.FORMATS.BYTE;
    fixture.detectChanges();
    const queryResult = fixture.debugElement.queryAll(By.css('.alt')).length;
    expect(queryResult === 1).toBeTruthy();
    const queryResult2 = fixture.debugElement.query(By.css('app-alt-imagefile-upload'));
    expect(queryResult2 != null).toBeTruthy();
  });
});
