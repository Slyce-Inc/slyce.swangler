import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSideBarComponent } from './example-side-bar.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import {APPENDPOINT} from '../../models/MOCK_DATA';
import {AppEndPoint} from '../../models/endpoint/endpoint.model';

@Component({
  template: '',
  selector: 'app-example-collapsible'
})
class MockExampleCollapsibleComponent {
  @Input() header;
  @Input() type;
  @Input() schema;
  @Output() clickedSample: EventEmitter<any> = new EventEmitter();
}

describe('ExampleSideBarComponent', () => {
  let component: ExampleSideBarComponent;
  let fixture: ComponentFixture<ExampleSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExampleSideBarComponent,
        MockExampleCollapsibleComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSideBarComponent);
    component = fixture.componentInstance;
    component.endpoint = APPENDPOINT;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should init component', () => {
    expect(component.requestSchema).toBeFalsy();
    expect(component.responseSchema).toBeFalsy();

    component.ngOnInit();

    expect(typeof component.requestSchema).toEqual('object');
    expect(typeof component.responseSchema).toEqual('object');

    component.requestSchema = null;
    component.responseSchema = null;
    const endpoint: AppEndPoint = component.endpoint as AppEndPoint;
    endpoint.responses['200'].schema = null;
    component.ngOnInit();
    expect(component.responseSchema).toBeFalsy();

    endpoint.responses['200'] = null;
    component.ngOnInit();
    expect(component.responseSchema).toBeFalsy();

    endpoint.responses = null;
    component.ngOnInit();
    expect(component.responseSchema).toBeFalsy();
  });

  it('should emit event', () => {
    component.ngOnInit();
    fixture.detectChanges();
    const bodySample = fixture.debugElement.query(By.css('.request-body-sample')).nativeElement;
    component.clickedBodySample.subscribe( data => {
      expect(data).toBeTruthy();
    });
    bodySample.dispatchEvent(new Event('clickedSample'));
  });

  it('should render h5', () => {
    fixture.detectChanges();
    component.responseSchema = null;
    component.requestSchema = null;
    fixture.detectChanges();
    const h5 = fixture.debugElement.query(By.css('h5'));
    expect(h5).toBeTruthy();
  });
});
