import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {Subject} from 'rxjs/Subject';
import {ImageBytesService} from '../../../services/image-bytes.service';
import {LocalStorageService} from '../../../services/local-storage.service';
import {WS_SPEC_MOCK, WSENDPOINT} from '../../../models/MOCK_DATA';
import {SwaggerService} from '../../../services/swagger.service';
import {Observable} from 'rxjs/Observable';
import {ApiData} from '../../../models/apidata.model';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AppEndPoint} from '../../../models/endpoint/endpoint.model';
import {SocketEndpointComponent} from './socket-endpoint.component';
import {FormsModule} from '@angular/forms';
import {TabsModule} from 'ngx-bootstrap';
import {AltInputModule} from '../../alt-input/altInput.module';
import {EndpointsSharedService} from '../../../services/endpoints-shared.service';
import {NotificationsService} from 'angular2-notifications';
import {SharedVarsService} from '../../../services/shared-vars.service';
import {SocketService} from '../../../services/socket/socket.service';
import {By} from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const openSubj = new Subject();
const closeSubj = new Subject();
const messageSubj = new Subject();
const connection = {
  onopen: (() => {
    return openSubj.asObservable();
  })(),
  onclose: (() => {
    return closeSubj.asObservable();
  })(),
  onmessage: (() => {
    return messageSubj.asObservable();
  })(),
  socket: {
    close: () => {
      closeSubj.next('test');
    },
    send: () => {},
  }
};

const sharedVarsServiceStub = {
  sharedVars: {}
};

const SocketServiceStub = {
  connect: () => {
    return connection;
  },
};

const ImageBytesServiceStub: Partial<ImageBytesService> = {
};

const storage = {
  'account_id': 'spec-test'
};
const LocalStorageServiceStub: Partial<LocalStorageService> = {
  getStorageVar: (varName) => {
    return storage ? storage[varName] : null;
  },
  setStorageVar: (varName, varVal) => {
    storage[varName] = varVal;
  }
};

const groupedEndpointsMock = [];
groupedEndpointsMock['test'] = [];
groupedEndpointsMock['test'].push(WSENDPOINT);

const SwaggerServiceStub: Partial<SwaggerService> = {
  getEndpointsSortedByTags: () => {
    return Observable.of(groupedEndpointsMock);
  },
  getApiData: () => {
    return Observable.of(JSON.parse(JSON.stringify(ApiData.MOCK_DATA)));
  },
  testEndpoint: () => {
    return Observable.of(null);
  },
  initSwagger: () => {
    return Promise.resolve(true);
  },
  getWsEndpoints: () => {
    return Observable.of(JSON.parse(JSON.stringify(WS_SPEC_MOCK)));
  },
  substitutePath: () => {
    return 'test';
  }
};

describe('SocketEndpointComponent', () => {
  @Component({
    selector: 'app-example-side-bar',
    template: '<span></span>'
  })
  class ExampleSideBarComponent {
    @Input() endpoint: AppEndPoint;
    @Input() showRequestMessageOfIndex;
    @Output() clickedBodySample: EventEmitter<any> = new EventEmitter();
  }
  let component: SocketEndpointComponent;
  let fixture: ComponentFixture<SocketEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocketEndpointComponent,
        ExampleSideBarComponent
      ],
      imports: [
        FormsModule,
        TabsModule.forRoot(),
        AltInputModule
      ],
      providers: [
        EndpointsSharedService,
        NotificationsService,
        { provide: SharedVarsService, useValue: sharedVarsServiceStub },
        { provide: SocketService, useValue: SocketServiceStub },
        { provide: SwaggerService, useValue: SwaggerServiceStub },
        { provide: LocalStorageService, useValue: LocalStorageServiceStub },
        { provide: ImageBytesService, useValue: ImageBytesServiceStub },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocketEndpointComponent);
    component = fixture.componentInstance;
    component.endpointData = JSON.parse(JSON.stringify(WSENDPOINT));
    this.endpointsSharedService = TestBed.get(EndpointsSharedService);
    fixture.detectChanges();
  });
  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should initParameterFields with endpointData', () => {
    component.ngOnInit();

    (component.endpointData).parameters.forEach( parm => {
      if (component.parameterFields[parm.name]) {
        if (parm) {
          if (component.parameterFields[parm.name] !== parm) {
            fail();
          }
        }
      } else {
        fail();
      }
    });

    expect().nothing();
  });

  it('should open socket connection', () => {
    component.openSocketConnection();
    expect(component.isConnectionStarted).toBeFalsy();
    openSubj.next('test');
    expect(component.isConnectionStarted).toBeTruthy();
  });

  it('should close socket connection', () => {
    component.openSocketConnection();
    openSubj.next('test');
    expect(component.isConnectionStarted).toBeTruthy();
    closeSubj.next('test');
    expect(component.isConnectionStarted).toBeFalsy();
  });

  it('should close socket connection if already open', () => {
    component.openSocketConnection();
    openSubj.next('test');
    expect(component.isConnectionStarted).toBeTruthy();
    component.openSocketConnection();
    expect(component.isConnectionStarted).toBeFalsy();
  });

  it('should save socket message in array', () => {
    component.openSocketConnection();
    messageSubj.next({data: '{"test": "test"}'});

    expect(component.socketMessages[0]).toEqual({ test: 'test' });
  });

  it('should send socket message', () => {
    component.openSocketConnection();
    spyOn(component.connection.socket, 'send');
    component.endpointData['requestMessages'][0]['value'] = 'test';
    const sent = component.sendSocketMessage();
    expect(component.connection.socket.send).toHaveBeenCalled();
  });

  it('should build query params', () => {
    component.ngOnInit();
    component.parameterFields['slyce-account-id'].value = 'test';
    component.parameterFields['slyce-api-key'].value = 'test';
    const params = component.buildQueryParams(component.parameterFields);
    expect(params).toEqual('?slyce-account-id=test&slyce-api-key=test&');
  });

  it('should init selected response', () => {
    component.ngOnInit();
    expect(component.selectedResponse).toEqual('application/json');
  });
  it('should initSelectedResponse with data from endpointData', () => {
    component.ngOnInit();
    try {
      expect(component.selectedResponse).toEqual(component.endpointData.produces[0]);
    } catch ( e ) {
      fail('endpointData.produces array is empty');
    }
  });

  it('should not crash on null id', () => {
    component.endpointData.operationId = undefined;
    try {
      fixture.detectChanges();
      expect(true).toBeTruthy();
    } catch (e) {
      fail();
    }
  });
  it('should change grid layout on endpointSharedService.isExamplesHidden == true', () => {
    const exampleHiddenClasses = [
      'col-lg-9',
      'col-xl-9'
    ];
    component.endpointsSharedService.isExamplesHidden = true;
    fixture.detectChanges();
    const classes = fixture.debugElement.query(By.css('#gridChange')).classes;
    exampleHiddenClasses.forEach(classItem => {
      if (!classes[classItem]) {
        fail('Missing class: ' + classItem);
      }
    });
    expect(true).toBeTruthy();
  });

  it('should change grid layout on endpointSharedService.isExamplesHidden == false', () => {
    const exampleNotHiddenClasses = [
      'col-lg-6',
      'col-xl-6'
    ];
    component.endpointsSharedService.isExamplesHidden = false;
    fixture.detectChanges();
    const classes = fixture.debugElement.query(By.css('#gridChange')).classes;
    exampleNotHiddenClasses.forEach(classItem => {
      if (!classes[classItem]) {
        fail('Missing class: ' + classItem);
      }
    });
    expect(true).toBeTruthy();
  });

  it('should not crash on null endpointData.summary', () => {
    component.endpointData.summary = undefined;
    try {
      fixture.detectChanges();
      expect(true).toBeTruthy();
    } catch (e) {
      fail('crashed on endpointData.summary == undefined');
    }
  });

  it('should not crash on null endpointData.url', () => {
    component.endpointData.url = undefined;
    try {
      fixture.detectChanges();
      expect(true).toBeTruthy();
    } catch (e) {
      fail('crashed on endpointData.url == undefined');
    }
  });
  it('should not show #url on null endpointData.url', () => {
    component.endpointData.url = undefined;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#url')).length).toBeFalsy();
  });
  it('should show #url on valid endpointData.url', () => {
    component.endpointData.url = 'www.google.com';
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#url')).length).toBeTruthy();
  });
  it('should not show #description on null endpointData.description', () => {
    component.endpointData.description = undefined;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#description')).length).toBeFalsy();
  });
  it('should show #description on valid endpointData.description', () => {
    component.endpointData.description = 'something';
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#description')).length).toBeTruthy();
  });
  it('should activate endpointSharedService.endpointsExamplesToggle() on clicking #toggle-examples', () => {
    const oldValueIsExamplesHidden = component.endpointsSharedService.isExamplesHidden;
    fixture.debugElement.query(By.css('#toggle-examples')).triggerEventHandler('click', null);
    expect(component.endpointsSharedService.isExamplesHidden).toEqual(!oldValueIsExamplesHidden);
  });
  it('should trigger clickedToggleExamples on clicking #toggle-examples', () => {
    spyOn(component, 'clickedToggleExamples').and.callThrough();
    fixture.debugElement.query(By.css('#toggle-examples')).triggerEventHandler('click', null);
    expect(component.clickedToggleExamples).toHaveBeenCalled();
  });
  it('should display "Show Samples" when isExamplesHidden from service is true', () => {
    component.endpointsSharedService.isExamplesHidden = true;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.sampleState')).nativeElement.textContent).toEqual('Show Samples');
  });
  it('should display "Hide Samples" when isExamplesHidden from service is false', () => {
    component.endpointsSharedService.isExamplesHidden = false;
    fixture.detectChanges();
    expect(fixture.debugElement.query(By.css('.sampleState')).nativeElement.textContent).toEqual('Hide Samples');
  });
  it('should not crash when endpointData.parameters == null ', () => {
    component.endpointData.parameters = undefined;
    try {
      fixture.detectChanges();
      expect().nothing();
    } catch (e) {
      fail('crashed due to endpointData.parameters == undefined');
    }
  });
  it('should initSelectedResponse with null if data from endpointData produces is null', () => {
    component.endpointData.produces = undefined;
    component.ngOnInit();
    fixture.detectChanges();
    expect(component.selectedResponse).toEqual(null);
  });

  it('should apply sanmple WS message body', () => {
    component.sharedVarsService.sharedVars['test_ws_message_0'] = new BehaviorSubject(null);

    component.sharedVarsService.sharedVars['test_ws_message_0']
      .subscribe((e) => {
        if (e) {
          expect(component.sharedVarsService.sharedVars['test_ws_message_0'].value).toEqual('test');
          expect(component.localStorageService.getStorageVar('test_ws_message_0')).toEqual('test');
        }
      });

    component.applySampleBody('test', 0);
  });

  it('should change value of ws message textarea element once sharedVarsService is changed', () => {
    component.sharedVarsService.sharedVars['test_ws_message_0'] = new BehaviorSubject('test');
    component.ngOnInit();
    fixture.detectChanges();
    const element = fixture.debugElement.query(By.css('[data-name=test_ws_message_0]'));
    component.sharedVarsService.sharedVars['test_ws_message_0']
      .subscribe((e) => {
        if (e) {
          expect(component.endpointData['requestMessages'][0]['value']).toEqual('test');
        }
      });
  });

  it('should change value of ws message once sharedVarsService is changed', () => {
    component.sharedVarsService.sharedVars['test_ws_message_0'] = new BehaviorSubject('test1');
    component.ngOnInit();

    component.sharedVarsService.sharedVars['test_ws_message_0'].next('test2');

    expect(component.endpointData['requestMessages'][0]['value']).toEqual('test2');
  });

});
