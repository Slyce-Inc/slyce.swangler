import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {AppEndPoint, Endpoint} from '../../models/endpoint/endpoint.model';
import {AppClickedSampleRes} from '../../models/endpoint/clicked-sample-res';
import {AppClickedTestRes} from '../../models/endpoint/clicked-test-res';
import {NotificationsService} from 'angular2-notifications';
import {SharedVarsService} from '../../services/shared-vars.service';
import {LocalStorageService} from '../../services/local-storage.service';
import {EndpointsSharedService} from '../../services/endpoints-shared.service';
export class EndpointComponent implements OnInit {
  public DEFAULT_SCHEME = 'http';
  @Input() schemes: string[] = [];
  @Input() scrollToId: string;
  /* Accepts AppEndPoint object */
  @Input('endpointData') endpointData: Endpoint;
  /* Call back on sample toggle */
  @Output('clickedSample') clickedSample: EventEmitter<AppClickedSampleRes> = new EventEmitter();
  /* Call back on test button click */
  @Output('clickedTestEndPoint') clickedTestEndPoint: EventEmitter<AppClickedTestRes> = new EventEmitter<any>();
  @Output() clickedSeeSocketMessages: EventEmitter<Object> = new EventEmitter<any>();
  hideRestrictedEndpoints =  this.endpointsSharedService.isRestrictedHidden || false;

  /* Selected wanted response format from endpoint */
  public selectedResponse;
  public selectedRequest;
  /*Schemes like https or wss or ws and such*/
  public selectedScheme;
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
    this.initSchemes();
    this.initParameterFields();
    this.initSelectedResponse();
    this.initSelectedRequest();

    this.endpointsSharedService.onRestrictedEndpointsVisibilityChange().subscribe((value: boolean) => this.hideRestrictedEndpoints = value);
  }
  public initSchemes() {
    // Initialize selected scheme
    if ( this.schemes && this.schemes.length > 0 ) {
      this.selectedScheme = this.schemes[0];
    } else {
      // If there are no schemes available to select form default to the default scheme
      this.schemes = [];
      this.schemes.push(this.DEFAULT_SCHEME);
      this.selectedScheme = this.DEFAULT_SCHEME;
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
      this.sharedVarsService.sharedVars[name].next(event.srcElement.value);
      this.localStorageService.setStorageVar(name, event.srcElement.value);
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
    return ( new AppClickedTestRes(this.endpointData, this.selectedResponse, this.selectedRequest, this.parameterFields,
      this.selectedScheme));
  }
  public clickedToggleExamples() {
    this.endpointsSharedService.endpointsExamplesToggle();
  }
  public clickedScheme(scheme) {
    this.selectedScheme = scheme;
  }
}
