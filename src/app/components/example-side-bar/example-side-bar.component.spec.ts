import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleSideBarComponent } from './example-side-bar.component';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { By } from '@angular/platform-browser';
import {APPENDPOINT, WS_SPEC_MOCK} from '../../models/MOCK_DATA';
import {AppEndPoint, Endpoint} from '../../models/endpoint/endpoint.model';
import {GetIndexPipe} from '../../pipes/get-index.pipe';
import {SocketModel} from '../../models/ws-spec.model';

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
/* tslint:disable */
@Component({
  template: '<ng-content></ng-content>',
  selector: 'tab'
})
class MockTabComponent {
  @Input() heading;
  @Input() id;
}

@Component({
  template: '<ng-content></ng-content>',
  selector: 'tabset'
})
/* tslint:enable */
class MockTabSetComponent {
}

describe('ExampleSideBarComponent - Rest Endpoints', () => {
  let component: ExampleSideBarComponent;
  let fixture: ComponentFixture<ExampleSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExampleSideBarComponent,
        MockExampleCollapsibleComponent,
        MockTabComponent,
        MockTabSetComponent,
        GetIndexPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSideBarComponent);
    component = fixture.componentInstance;
    component.endpoint = JSON.parse(JSON.stringify(APPENDPOINT));
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

describe('ExampleSideBarComponent - Socket Endpoints', () => {
  let component: ExampleSideBarComponent;
  let fixture: ComponentFixture<ExampleSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ExampleSideBarComponent,
        MockExampleCollapsibleComponent,
        MockTabComponent,
        MockTabSetComponent,
        GetIndexPipe
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleSideBarComponent);
    component = fixture.componentInstance;
    component.endpoint = JSON.parse(JSON.stringify(WS_SPEC_MOCK.socketEndpoints[0] as Endpoint));
    component.showRequestMessageOfIndex = null;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display the AppEndPoint portion of the component because the data passed is a SocketModel', () => {
    expect(fixture.debugElement.queryAll(By.css('#appEndPoint'))).toEqual([]);
  });
  it('should display the SocketEndPoint portion of the component because the data passed is a SocketModel', () => {
    expect(fixture.debugElement.query(By.css('#socketEndpoint')).nativeElement.textContent).toBeDefined();
  });
  it('should display the correct request message on @showRequestMessageOfIndex input of value 1', () => {
    component.showRequestMessageOfIndex = 1;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('#socketEndpoint'))
      .query(By.css('#request' + component.showRequestMessageOfIndex))).toBeDefined();
  });
  it('should display all request messages on @showRequestMessageOfIndex input of null', () => {
    component.showRequestMessageOfIndex = null;
    fixture.detectChanges();
    const socketModel: SocketModel = component.endpoint as SocketModel;
    for (let i = 0; i < socketModel.requestMessages.length; i++) {
      expect(fixture.debugElement.query(By.css('#socketEndpoint'))
        .query(By.css('#request' + i))).toBeDefined();
    }
  });
  it('should input Request Sample as the title for a request sample', () => {
    expect(fixture.debugElement.query(By.css('#requestSample0')).attributes['ng-reflect-header']).toContain('Request Sample');
  });
  it('should input Request Schema as the title for a request schema', () => {
    expect(fixture.debugElement.query(By.css('#requestSchema0')).attributes['ng-reflect-header']).toContain('Request Schema');
  });
  it('should not show text: No Samples if there are samples in endpoint or socketEndPoint', () => {
    expect(fixture.debugElement.queryAll(By.css('.no-samples'))).toEqual([]);
  });
  it('should show text: No Samples if requestMessages of socket is null', () => {
    const socket: SocketModel = component.endpoint as SocketModel;
    socket.requestMessages = null;
    socket.responseMessages = null;
    fixture.detectChanges();
    const result = fixture.debugElement.query(By.css('.no-samples'));
    expect(result != null).toBeTruthy();
  });
  it('should show text: No Samples if requestMessages of socket is []', () => {
    const socket: SocketModel = component.endpoint as SocketModel;
    socket.requestMessages = [];
    socket.responseMessages = [];
    fixture.detectChanges();
    const result = fixture.debugElement.query(By.css('.no-samples'));
    expect(result != null).toBeTruthy();
  });
  it('should return false on empty array aka []', () => {
    expect(component._isArray([])).toBe(false);
  });
  it('should return true on filled array', () => {
    expect(component._isArray(['abv'])).toBe(true);
  });
  it('should return false on null', () => {
    expect(component._isArray(null)).toBe(false);
  });
  it('should show all responseSamples of socketEndpoint', () => {
    const socket: SocketModel = component.endpoint as SocketModel;
    for ( let i = 0 ; i < socket.responseMessages.length; i ++ ) {
      const res = fixture.debugElement.query(By.css('#responseSample' + i));
      expect(res != null).toBeTruthy();
    }
  });
  it('should show headers as Samples for all responseSamples', () => {
    const socket: SocketModel = component.endpoint as SocketModel;
    for ( let i = 0 ; i < socket.responseMessages.length; i ++ ) {
      const res = fixture.debugElement.query(By.css('#responseSample' + i));
      expect(res.attributes['ng-reflect-header']).toEqual('Sample');
    }
  });
  it('should show headers as Schema for all responseSchemas', () => {
    const socket: SocketModel = component.endpoint as SocketModel;
    for ( let i = 0 ; i < socket.responseMessages.length; i ++ ) {
      const res = fixture.debugElement.query(By.css('#responseSchema' + i));
      expect(res.attributes['ng-reflect-header']).toEqual('Schema');
    }
  });
  it('should show all responseSchemas of socketEndpoint', () => {
    const socket: SocketModel = component.endpoint as SocketModel;
    for ( let i = 0 ; i < socket.responseMessages.length; i ++ ) {
      const res = fixture.debugElement.query(By.css('#responseSchema' + i));
      expect(res != null).toBeTruthy();
    }
  });
});
