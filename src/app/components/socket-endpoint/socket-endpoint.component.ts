import {Component, EventEmitter, Input, OnInit, Output, AfterViewInit, OnChanges, SimpleChanges} from '@angular/core';
import {AppEndPoint, RequestInitiator} from '../../models/endpoint/endpoint.model';
import {AppClickedSampleRes} from '../../models/endpoint/clicked-sample-res';
import {AppClickedTestRes} from '../../models/endpoint/clicked-test-res';
import {LocalStorageService} from '../../services/local-storage.service';
import {SwaggerService} from '../../services/swagger.service';
import { EndpointsSharedService } from '../../services/endpoints-shared.service';
import { NotificationsService } from 'angular2-notifications';
import { SocketService } from '../../services/socket/socket.service';
import { SocketObservables } from '../../models/socketObservables/socketObservables';
import { ImageBytesService } from '../../services/image-bytes.service';
import {AltInputEventModel} from '../alt-input/model/AltInputEvent.model';


@Component({
  selector: 'app-socket-endpoint',
  templateUrl: './socket-endpoint.component.html',
  styleUrls: ['./socket-endpoint.component.scss']
})
export class SocketEndpointComponent implements OnInit, OnChanges, AfterViewInit {
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
  /* Inputed values from user for each parameter otherwise go default */
  public parameterFields = {};
  public Object = Object;
  isExamplesHidden;
  bodyParams = [];
  selectedRequestType = 0;
  isConnectionStarted = false;
  connection: SocketObservables;
  socketMessages = [];
  public JSON = JSON;
  public document = document;
  public altInputs = {};
  constructor(
    public endpointsSharedService: EndpointsSharedService,
    public notify: NotificationsService,
    public socketService: SocketService,
    public swaggerService: SwaggerService,
    public localStorageService: LocalStorageService,
    public notificationService: NotificationsService
  ) {
  }

  ngOnInit() {
    this.initParameterFields();
    this.initSelectedResponse();
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
  private getElementById(id) {
    return document.getElementById(id);
  }

  /* Init the default parameters to the parameter fields */
  private initParameterFields() {
    for (let i = 0; i < this.endpointData['requestMessages'].length; i++) {
      const element = this.endpointData['requestMessages'][i];
      element.value = element.default || element.example || null;
    }

    const params = this.endpointData.parameters;
    for (const p in params) {
      if (params.hasOwnProperty(p)) {
        const element = params[p];

        element.value = element.default;
        this.parameterFields[element.name] = element;

        // if (element.in.toLocaleLowerCase() === 'body') {
        //   this.bodyParams.push(element);
        // }

        if (this.localStorageService.getStorageVar(element.name)) {
          this.parameterFields[element.name].value = this.localStorageService.getStorageVar(element.name);
        }
      }
    }
  }

  private scrollToElem(id?: string) {
    if ( id ) {
      const elem = document.getElementById(id);
      if (elem) {
        window.scrollTo(0, elem.offsetTop + 40);
        // this.smoothScroll(document.documentElement.scrollTop || document.body.scrollTop, elem.offsetTop);
      }
    } else {
      window.scrollTo(0, 0 + 40);
      // this.smoothScroll(document.documentElement.scrollTop || document.body.scrollTop, 0);
    }
  }

  smoothScroll (currentPosition, targetPosition) {

    if (currentPosition < targetPosition) {
      // scroll down
      let i = currentPosition;
      const interval = setInterval(() => {
        window.scrollTo(0, i);
        i += 100;
        if ( i >= targetPosition ) {
          window.scrollTo(0, targetPosition + 40);
          clearInterval(interval);
        }
      }, 15);

    } else {
      // scoll up
      let i = currentPosition;
      const interval = setInterval(() => {
        window.scrollTo(0, i);
        i -= 100;
        if ( i <= targetPosition ) {
          window.scrollTo(0, targetPosition + 40);
          clearInterval(interval);
        }
      }, 15);

    }
  }

  tryEndpointRequest(endpointForm) {
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
      this.notify.error('Error', invalidFields.join(', ') + ' required!');
    }

    this.clickedTestEndPoint.emit(this.clickTestEndPointButton());
  }

  applySampleBody(event, selectedRequest) {
    this.endpointData['requestMessages'][selectedRequest].value = event;
  }

  openSocketConnection() {
    if ( !this.isConnectionStarted ) {
      this.socketMessages = [];

      const request = new RequestInitiator(
        new AppClickedTestRes(this.endpointData, this.selectedResponse, this.parameterFields),
        this.localStorageService
      );
      this.swaggerService.getWsEndpoints().subscribe( data => {
        const params = this.buildQueryParams(this.parameterFields);
        const url = encodeURI(data.baseURL + this.swaggerService.substitutePath(this.endpointData.url, request.path) + params);

        this.connection = this.socketService.connect(url);

        this.connection.onopen.subscribe(event => {
          this.isConnectionStarted = true;
          // this.notify.info('Info', 'Connection open');
        });
        this.connection.onclose.subscribe(event => {
          this.isConnectionStarted = false;
          // this.socketMessages = [];
          // this.notify.warn('Info', 'Connection close');
        });
        this.connection.onmessage.subscribe(event => {
          if (event) {
            if (event.data && (JSON.parse(event.data)['error'] || JSON.parse(event.data)['errors'])) {
              const response = JSON.parse(event.data);
              const message = {};
              message['msg_type'] = 'Error';
              message['response'] = response;
              this.socketMessages.push(message);
              this.notify.error('Error',
                'Status: ' +
                (response['status'] || 'fail') + '. ' +
                (response['error'] || response['errors'] || 'fail'));
            } else {
              console.log(event);

              this.socketMessages.push(event);
            }
          }
        });
      });
    } else {
      this.connection.socket.close();
      this.socketMessages = [];
    }
  }

  showMessagesClicked() {
    const socketData = {};
    socketData['url'] = this.connection.socket.url;
    socketData['messages'] = this.socketMessages;
    this.clickedSeeSocketMessages.emit(socketData);
  }

  sendSocketMessage() {
    if (this.endpointData['requestMessages'][this.selectedRequestType].value) {
      this.connection.socket.send(this.endpointData['requestMessages'][this.selectedRequestType].value);
    }
  }
  processAltInput(event: AltInputEventModel, selectedRequest: string, field: string) {
    if ( event.eventType === AltInputEventModel.EVENT_TYPES.DATA) {
      if (!this.altInputs[selectedRequest]) {
        this.altInputs[selectedRequest] = {};
      }
      this.altInputs[selectedRequest][field] = event.data;
    } else if ( event.eventType === AltInputEventModel.EVENT_TYPES.APPLY) {
      // STUB FUNCTION TO APPLY THE FIELD INTO THE BODY
      this.substituteToBody(selectedRequest, field, AltInputEventModel.EVENT_TYPES.APPLY);
    } else if ( event.eventType === AltInputEventModel.EVENT_TYPES.DELETE) {
      delete this.altInputs[selectedRequest][field];
      this.substituteToBody(selectedRequest, field, AltInputEventModel.EVENT_TYPES.DELETE);
    }
  }
  substituteToBody(selectedRequest: string, field?: string, eventType?: string) {
    if ( this.selectedResponse === 'application/json') {
      // substitution for application json
      if (!this.endpointData['requestMessages'][selectedRequest].value) {
        // generate the json with the alt information inside
        this.endpointData['requestMessages'][selectedRequest].value = JSON.stringify(this.altInputs[selectedRequest], null , 4);
      } else {
        try {
          let obj = (JSON).parse(this.endpointData['requestMessages'][selectedRequest].value);
          if (field) {
            // apply to just that field
            obj[field] = this.altInputs[selectedRequest][field];
          } else {
            // apply to all
            obj = Object.assign(obj, this.altInputs[selectedRequest]);
          }
          this.endpointData['requestMessages'][selectedRequest].value = JSON.stringify(obj, null , 4);
          if (eventType === AltInputEventModel.EVENT_TYPES.DELETE) {
            this.notificationService.warn(`Deleted substitution on ${field}`);
          } else if (eventType === AltInputEventModel.EVENT_TYPES.APPLY) {
            this.notificationService.success(`Applied substitution on ${field}`);
          }
        } catch ( e ) {
          this.notificationService.error(`Unable to apply to incorrectly formatted JSON`);
        }
      }
    } else {
      this.notificationService.alert(`${this.selectedResponse} is not supported`);
    }
  }
  buildQueryParams(params) {
    let result = '?';
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const element = params[key];
        if ( element.in.toLocaleLowerCase() === 'query' ) {
          result += element.name + '=' + element.value + '&';
        }
      }
    }
    return result;
  }

  private initSelectedResponse() {
    this.selectedResponse = this.endpointData.produces ? this.endpointData.produces[0] : null;
  }
  public clickTestEndPointButton() {
    return ( new AppClickedTestRes(this.endpointData, this.selectedResponse, this.parameterFields));
  }
  public clickedToggleExamples() {
    this.endpointsSharedService.endpointsExamplesToggle();
  }
}

