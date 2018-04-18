import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AppEndPoint} from '../../models/endpoint/endpoint.model';
import {AppClickedSampleRes} from '../../models/endpoint/clicked-sample-res';
import {AppClickedTestRes} from '../../models/endpoint/clicked-test-res';
import {NotificationsService} from 'angular2-notifications';
import {SharedVarsService} from '../../services/shared-vars.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {EndpointsSharedService} from '../../services/endpoints-shared.service';
export class EndpointComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() scrollToId: string;
  /* Accepts AppEndPoint object */
  @Input('endpointData') endpointData: AppEndPoint;
  /* Call back on sample toggle */
  @Output('clickedSample') clickedSample: EventEmitter<AppClickedSampleRes> = new EventEmitter();
  /* Call back on test button click */
  @Output('clickedTestEndPoint') clickedTestEndPoint: EventEmitter<AppClickedTestRes> = new EventEmitter<any>();
  @Output() clickedSeeSocketMessages: EventEmitter<Object> = new EventEmitter<any>();
  /* Selected wanted response format from endpoint */
  public selectedResponse;
  public selectedRequest;
  /* Inputed values from user for each parameter otherwise go default */
  public parameterFields = {};
  public Object = Object;
  isExamplesHidden;

  constructor(
    public endpointsSharedService: EndpointsSharedService,
    public notificationService: NotificationsService,
    public sharedVarsService: SharedVarsService,
    public localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit() {
    this.initParameterFields();
    this.initSelectedResponse();
    this.initSelectedRequest();
  }

  ngAfterViewInit() {
    if ( this.endpointData.operationId === this.scrollToId ) {
      this.scrollToElem(this.scrollToId);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    if ( changes.scrollToId.currentValue ) {
      if ( this.endpointData.operationId === changes.scrollToId.currentValue ) {
        this.scrollToElem(changes.scrollToId.currentValue);
      }
    } else if ( changes.scrollToId.currentValue === null ) {
      this.scrollToElem();
    }
  }

  /* Init the default parameters to the parameter fields */
  public initParameterFields() {
    const params = this.endpointData.parameters;
    for (const p in params) {
      if (params[p].hasOwnProperty('name')) {
        params[p].value = params[p].default;
        this.parameterFields[params[p].name] = params[p];

        if (this.sharedVarsService.sharedVars[params[p].name]) {
          ((elem) => {
            this.sharedVarsService.sharedVars[elem]
              .subscribe(value => {
                this.parameterFields[elem].value = value;
              });
          })(params[p].name);
        }

        if (params[p].name === 'body' && this.sharedVarsService.sharedVars[this.endpointData.operationId + '_body']) {
          ((elem) => {
            this.sharedVarsService.sharedVars[elem]
              .subscribe(value => {
                this.parameterFields['body'].value = value;
              });
          })(this.endpointData.operationId + '_body');
        }
      }
    }
  }

  public saveToLocalStorage(event) {
    const name = event.srcElement.getAttribute('data-name');
    if (this.sharedVarsService.sharedVars[name]) {
      console.log(event);
      this.sharedVarsService.sharedVars[name].next(event.srcElement.value);
      this.localStorageService.setStorageVar(name, event.srcElement.value);
    }
  }
  public scrollToElem(id?: string) {
    if ( id ) {
      const elem = document.getElementById(id);
      if (elem) {
        window.scrollTo(0, elem.offsetTop + 40);
      }
    } else {
      window.scrollTo(0, 0 + 40);
    }
  }
  public tryEndpointRequest(endpointForm) {
    const invalidFields = [];
    for (const key in endpointForm.controls) {
      if (endpointForm.controls.hasOwnProperty(key)) {
        const element = endpointForm.controls[key];
        if (element.invalid) {
          invalidFields.push(key);
        }
      }
    }
    if (endpointForm.invalid) {
      this.notificationService.error('Error', invalidFields.join(', ') + ' required!');
    }

    this.clickedTestEndPoint.emit(this.clickTestEndPointButton());
  }
  public populateBody(event) {
    this.parameterFields['body'].value = event;

    if (this.sharedVarsService.sharedVars[this.endpointData.operationId + '_body']) {
      this.sharedVarsService.sharedVars[this.endpointData.operationId + '_body'].next(event);
      this.localStorageService.setStorageVar(this.endpointData.operationId + '_body', event);
    }
  }
  public initSelectedResponse() {
    this.selectedResponse = this.endpointData.produces ? this.endpointData.produces[0] : null;
  }
  public initSelectedRequest() {
    this.selectedRequest = this.endpointData.consumes ? this.endpointData.consumes[0] : null;
  }
  public clickTestEndPointButton() {
    return ( new AppClickedTestRes(this.endpointData, this.selectedResponse, this.selectedRequest, this.parameterFields));
  }
  public clickedToggleExamples() {
    this.endpointsSharedService.endpointsExamplesToggle();
  }
}
