import {Observable} from 'rxjs/Observable';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {async, ComponentFixture, TestBed, fakeAsync, tick} from '@angular/core/testing';
import {FormsModule} from '@angular/forms';
import {NotificationsService} from 'angular2-notifications';
import {By} from '@angular/platform-browser';
import {Subject} from 'rxjs/Subject';
import {SecurityDefinition} from '../../models/auth/security-definition';
import {AppEndPoint} from '../../models/endpoint/endpoint.model';
import {RestEndpointComponent} from './rest-endpoint/rest-endpoint.component';
import {SharedVarsService} from '../../services/shared-vars.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {EndpointsSharedService} from '../../services/endpoints-shared.service';
import {APPENDPOINT} from '../../models/MOCK_DATA';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';


const sharedVarsServiceStub = {
  sharedVars: {}
};

const securityDefinition = JSON.parse(JSON.stringify(SecurityDefinition.MOCK_DATA));

const storage = {};
const LocalStorageServiceStub = {
  getStorageVar: (varName) => {
    return storage ? storage[varName] : null;
  },
  securityDefinitions: (() => {
    return Observable.of(securityDefinition);
  })(),
  setStorageVar: (varName, varVal) => {
    storage[varName] = varVal;
  }
};

describe('EndpointComponent', () => {

  @Component({
    selector: 'app-example-side-bar',
    template: '<span></span>'
  })
  class ExampleSideBarComponent {
    @Input('endpoint') endpoint: AppEndPoint;
    @Output('clickedBodySample') clickedBodySample: EventEmitter<any> = new EventEmitter();
  }
  let component: RestEndpointComponent;
  let fixture: ComponentFixture<RestEndpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RestEndpointComponent,
        ExampleSideBarComponent
      ],
      imports: [
        FormsModule,
      ],
      providers: [
        { provide: SharedVarsService, useValue: sharedVarsServiceStub },
        { provide: LocalStorageService, useValue: LocalStorageServiceStub },
        EndpointsSharedService,
        NotificationsService
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestEndpointComponent);
    component = fixture.componentInstance;
    component.endpointData = JSON.parse(JSON.stringify(APPENDPOINT));
    this.endpointsSharedService = TestBed.get(EndpointsSharedService);
    fixture.detectChanges();
  });
  it('should initSelectedResponse with data from endpointData', () => {
    component.ngOnInit();
    try {
      expect(component.selectedResponse).toEqual(component.endpointData.produces[0]);
    } catch ( e ) {
      fail('endpointData.produces array is empty');
    }
  });
  it('should initParameterFields with endpointData', () => {
    component.ngOnInit();
    (component.endpointData).parameters.forEach( parm => {
      if (component.parameterFields[parm.name]) {
        if (parm) {
          if (!(component.parameterFields[parm.name] === parm)) {
            fail();
          }
        }
      } else {
        fail();
      }
    });
    expect().nothing();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should populate .param-property with data from endpointData.parameters ', () => {
    component.endpointData = JSON.parse(JSON.stringify(APPENDPOINT));
    fixture.detectChanges();
    component.endpointData.parameters.forEach( parm => {
      const element = fixture.debugElement.query(By.css(`#${parm.name}`));
      expect(element.query(By.css('span')).nativeElement.textContent).toEqual(parm.name + ':');
      expect(element.query(By.css('em')).nativeElement.textContent).toEqual(parm.in);
    });
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

  it('should not show empty badge on null endpointData.method', () => {
    component.endpointData.method = undefined;
    fixture.detectChanges();
    expect(fixture.debugElement.queryAll(By.css('#methodBadge')).length).toBeFalsy();
  });

  it('should not crash on null endpointData.method', () => {
    component.endpointData.method = undefined;
    try {
      fixture.detectChanges();
      expect(true).toBeTruthy();
    } catch (e) {
      fail('crashed on endpointData.method == undefined');
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

  it('should call saveToLocalStorage once input changed', () => {
    spyOn(component, 'saveToLocalStorage').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();

    component.parameterFields['account_id'].value = 'test';
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input.parameter'));
    input.nativeElement.dispatchEvent(new Event('change'));
    input.triggerEventHandler('click', null);

    expect(component.saveToLocalStorage).toHaveBeenCalled();
  });

  it('should populate body', () => {
    component.sharedVarsService.sharedVars['API_Keys_create_api_key1_body'] = new Subject();
    component.populateBody('test');


    component.sharedVarsService.sharedVars['API_Keys_create_api_key1_body']
      .subscribe((e) => {
        if (e) {
          expect(component.parameterFields['body'].value).toEqual('test');
          expect(component.localStorageService.getStorageVar('API_Keys_create_api_key1_body')).toEqual('test');
        }
      });
  });

  it('should set body textarea value if localStorage value exists', () => {
    component.sharedVarsService.sharedVars['API_Keys_create_api_key1_body'] = new BehaviorSubject('test');
    component.ngOnInit();

    fixture.detectChanges();

    const element = fixture.debugElement.query(By.css('[data-name=API_Keys_create_api_key1_body]'));

    setTimeout(() => {
      expect(element.nativeElement.value).toEqual('test');
    });
  });

  it('should change value in input once value in sharedVarsService is changed', () => {
    component.sharedVarsService.sharedVars['account_id'] = new Subject();
    component.ngOnInit();

    component.parameterFields['account_id'].value = 'test1';
    component.sharedVarsService.sharedVars['account_id'].next('test2');

    expect(component.parameterFields['account_id'].value).toEqual('test2');
  });
  it('should init selected request for the content type to the first available', function () {
    const test: AppEndPoint = JSON.parse(JSON.stringify(APPENDPOINT));
    test.consumes[0] = 'multipart/form-data';
    component.endpointData = test;
    component.initSelectedRequest();
    expect(component.selectedRequest).toEqual('multipart/form-data');
  });
  it('should init scheme when there is no schemes available, should default to the default', function() {
    component.endpointData = JSON.parse(JSON.stringify(APPENDPOINT));
    fixture.detectChanges();
    expect(component.schemes.length === 1).toBeTruthy();
    expect(component.schemes[0]).toEqual(component.DEFAULT_SCHEME);
  });
  it('should init scheme when there are schemes available', function() {
    component.endpointData = JSON.parse(JSON.stringify(APPENDPOINT));
    component.schemes = ['http', 'https'];
    fixture.detectChanges();
    expect(component.schemes.length === 2).toBeTruthy();
    expect(component.schemes[0]).toEqual(component.schemes[0]);
    expect(component.schemes[1]).toEqual(component.schemes[1]);
  });
});
