import {Component, EventEmitter, Output} from '@angular/core';
import {RequestInitiator} from '../../../models/endpoint/endpoint.model';
import {AppClickedTestRes} from '../../../models/endpoint/clicked-test-res';
import {AltInputEventModel} from '../../alt-input/model/AltInputEvent.model';
import {SharedVarsService} from '../../../services/shared-vars.service';
import {NotificationsService} from 'angular2-notifications';
import {EndpointsSharedService} from '../../../services/endpoints-shared.service';
import {LocalStorageService} from '../../../services/local-storage.service';
import {SocketObservables} from '../../../models/socketObservables/socketObservables';
import {SwaggerService} from '../../../services/swagger.service';
import {SocketService} from '../../../services/socket/socket.service';
import {EndpointComponent} from '../endpoint.component';

@Component({
  selector: 'app-socket-endpoint',
  templateUrl: './socket-endpoint.component.html',
  styleUrls: ['./socket-endpoint.component.scss']
})
export class SocketEndpointComponent extends EndpointComponent {
  @Output() clickedSeeSocketMessages: EventEmitter<Object> = new EventEmitter<any>();

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
    public notificationService: NotificationsService,
    public sharedVarsService: SharedVarsService,
    public localStorageService: LocalStorageService, public swaggerService: SwaggerService, public socketService: SocketService) {
    super(endpointsSharedService, notificationService, sharedVarsService, localStorageService);
  }

  /**
   * Override
   */
  public initParameterFields() {
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

        if (this.sharedVarsService.sharedVars[params[p].name]) {
          ((elem) => {
            this.sharedVarsService.sharedVars[elem]
              .subscribe(value => {
                this.parameterFields[elem].value = value;
              });
          })(params[p].name);
        }
      }
    }
  }
  /* Init the default parameters to the parameter fields */
  public saveToLocalStorage(event) {
    const name = event.srcElement.getAttribute('ng-reflect-name');
    if (this.sharedVarsService.sharedVars[name]) {
      this.sharedVarsService.sharedVars[name].next(event.srcElement.value);
      this.localStorageService.setStorageVar(name, event.srcElement.value);
    }
  }
  applySampleBody(event, selectedRequest) {
    this.endpointData['requestMessages'][selectedRequest].value = event;
  }
  openSocketConnection() {
    if ( !this.isConnectionStarted ) {
      this.socketMessages = [];

      const request = new RequestInitiator(
        new AppClickedTestRes(this.endpointData, this.selectedResponse, this.selectedRequestType, this.parameterFields),
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
            if (event.data) {
              const response = JSON.parse(event.data);
              this.socketMessages.push(response);
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
    socketData['header'] = this.endpointData.summary;
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
}