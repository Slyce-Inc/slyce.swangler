import {Component, EventEmitter, Input, Output} from '@angular/core';
import {AppEndPoint, RequestInitiator} from '../../../models/endpoint/endpoint.model';
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
import {SocketModel} from '../../../models/ws-spec.model';
import { AccountService } from '../../../services/account/account.service';

@Component({
  selector: 'app-socket-endpoint',
  templateUrl: './socket-endpoint.component.html',
  styleUrls: ['./socket-endpoint.component.scss']
})
export class SocketEndpointComponent extends EndpointComponent {
  public DEFAULT_SCHEME = 'ws';
  @Input() endpointData: SocketModel;

  @Output() clickedSeeSocketMessages: EventEmitter<Object> = new EventEmitter<any>();
  bodyParams = [];
  selectedRequestType = 0;
  isConnectionStarted = false;
  connection: SocketObservables;
  socketMessages = [];
  public JSON = JSON;
  public document = document;
  constructor(
    public endpointsSharedService: EndpointsSharedService,
    public notificationService: NotificationsService,
    public sharedVarsService: SharedVarsService,
    public localStorageService: LocalStorageService,
    public swaggerService: SwaggerService,
    public socketService: SocketService) {
    super(endpointsSharedService, notificationService, sharedVarsService, localStorageService);
  }

  /**
   * Override
   */
  public initParameterFields() {
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

    this.endpointData['requestMessages'].forEach((requestMessage, i) => {
      const sharedVarName = this.endpointData.operationId + '_ws_message_' + i;

      if (this.sharedVarsService.sharedVars[sharedVarName]) {
        ((elem, index) => {
          this.sharedVarsService.sharedVars[elem]
            .subscribe(value => {
              this.endpointData['requestMessages'][index]['value'] = value;
            });
        })(sharedVarName, i);
      }
    });
  }

  applySampleBody(event, selectedRequest) {
    this.endpointData['requestMessages'][selectedRequest]['value'] = event;

    if (this.sharedVarsService.sharedVars[this.endpointData.operationId + '_ws_message_' + selectedRequest]) {
      this.localStorageService.setStorageVar(this.endpointData.operationId + '_ws_message_' + selectedRequest, event);
      this.sharedVarsService.sharedVars[this.endpointData.operationId + '_ws_message_' + selectedRequest].next(event);
    }
  }
  openSocketConnection() {
    if ( !this.isConnectionStarted ) {
      this.socketMessages = [];
      const parameterFieldsLocal = (JSON).parse(JSON.stringify(this.parameterFields));
      if (this.endpointData && this.endpointData.securityParameters) {
        this.endpointData.securityParameters.forEach(s => {
            parameterFieldsLocal[s.name] = s;
            parameterFieldsLocal[s.name].value = this.localStorageService.getStorageVar(s.name);
        });
      }
      const request = new RequestInitiator(
        new AppClickedTestRes(this.endpointData, this.selectedResponse, this.selectedRequestType, parameterFieldsLocal),
        this.localStorageService
      );
      const params = this.buildQueryParams(parameterFieldsLocal);
      const url = encodeURI(this.selectedScheme + '://' + this.swaggerService.specSocketHost + this.swaggerService.substitutePath(
        this.endpointData.url,
        request.path) + params);
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
    if (this.endpointData['requestMessages'][this.selectedRequestType]['value']) {
      this.connection.socket.send(this.endpointData['requestMessages'][this.selectedRequestType]['value']);
    }
  }
  buildQueryParams(params) {
    let result = '?';
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        const element = params[key];
        if ( element.in && element.in.toLowerCase() === 'query' ) {
          result += element.name + '=' + element.value + '&';
        }
      }
    }
    return result;
  }

  processAltInput(event: AltInputEventModel, path: string, selectedRequest: string) {
    if ( event.eventType === AltInputEventModel.EVENT_TYPES.DATA) {
      if (!this.altInputs[selectedRequest]) {
        this.altInputs[selectedRequest] = {};
      }
      this.altInputs[selectedRequest][path] = event.data;
    } else if ( event.eventType === AltInputEventModel.EVENT_TYPES.APPLY) {
      // STUB FUNCTION TO APPLY THE FIELD INTO THE BODY
      this.substituteToBody(selectedRequest, path, AltInputEventModel.EVENT_TYPES.APPLY);
    } else if ( event.eventType === AltInputEventModel.EVENT_TYPES.DELETE) {
      delete this.altInputs[selectedRequest][path];
      this.substituteToBody(selectedRequest, path, AltInputEventModel.EVENT_TYPES.DELETE);
    }
  }
  substituteToBody(selectedRequest: string, path?: string, eventType?: string) {
    if ( this.selectedResponse === 'application/json') {
      // substitution for application json
      const target = this.endpointData['requestMessages'][selectedRequest];
      if (target) {
        const pathArray = path.split('.');
        const lastPathItem = pathArray[pathArray.length - 1];
        if (!target.value) {
          // generate the json with the alt information inside
          target.value = {};
          pathArray.reduce((prevVal, nextVal) => {
            if (lastPathItem === nextVal) {
              return prevVal[nextVal] = this.altInputs[selectedRequest][path];
            } else {
              return prevVal[nextVal] = {};
            }
          }, target.value);
          target.value = JSON.stringify(target.value, null , 4);
        } else {
          try {
            let obj = (JSON).parse(target.value);
            if (path) {
              // apply to just that field
              // I got to go to this path.....
              pathArray.reduce((prevVal, curVal) => {
                if (prevVal[curVal] === undefined || prevVal[curVal] === null) {
                  prevVal[curVal] = {};
                }
                if (curVal === lastPathItem) {
                  prevVal[curVal] = this.altInputs[selectedRequest][path];
                }
                return prevVal[curVal];
              }, obj);
            } else {
              // apply to all
              obj = Object.assign(obj, this.altInputs[selectedRequest][path]);
            }
            target.value = JSON.stringify(obj, null , 4);
            if (eventType === AltInputEventModel.EVENT_TYPES.DELETE) {
              this.notificationService.warn(`Deleted substitution on ${path}`);
            } else if (eventType === AltInputEventModel.EVENT_TYPES.APPLY) {
              this.notificationService.success(`Applied substitution on ${path}`);
            }
          } catch ( e ) {
            this.notificationService.error(`Unable to apply to incorrectly formatted JSON`);
          }
        }
      }
    } else {
      this.notificationService.alert(`${this.selectedResponse} is not supported`);
    }
  }
}
