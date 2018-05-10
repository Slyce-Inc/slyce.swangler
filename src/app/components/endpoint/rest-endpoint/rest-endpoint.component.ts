import {Component, Input, OnInit} from '@angular/core';
import {EndpointComponent} from '../endpoint.component';
import {SharedVarsService} from '../../../services/shared-vars.service';
import {NotificationsService} from 'angular2-notifications';
import {EndpointsSharedService} from '../../../services/endpoints-shared.service';
import {LocalStorageService} from '../../../services/local-storage.service';
import {AppEndPoint, Parameter} from '../../../models/endpoint/endpoint.model';
import { AccountService } from '../../../services/account/account.service';
import {AltInputEventModel} from '../../alt-input/model/AltInputEvent.model';

@Component({
  selector: 'app-rest-endpoint',
  templateUrl: './rest-endpoint.component.html',
  styleUrls: ['./rest-endpoint.component.scss']
})
export class RestEndpointComponent extends EndpointComponent implements OnInit {
  @Input('endpointData') endpointData: AppEndPoint;

  constructor(public endpointsSharedService: EndpointsSharedService,
              public notificationService: NotificationsService,
              public sharedVarsService: SharedVarsService,
              public localStorageService: LocalStorageService) {
    super(endpointsSharedService, notificationService, sharedVarsService, localStorageService);
  }

  public onChangeInput(parmName, event) {
    const inputEl: HTMLInputElement = event.target;
    if (inputEl.files.length > 0) {
      this.parameterFields[parmName].value = inputEl.files.item(0);
    }
  }
  public shouldUseFileUploadBox(parm: Parameter) {
    if (parm.in && parm.type) {
      if ( parm.in === 'formData' && parm.type === 'file' ) {
        return (true);
      } else {
        return (false);
      }
    } else {
      return (false);
    }
  }

  processAltInput(event: AltInputEventModel, path?: any) {
    if ( event.eventType === AltInputEventModel.EVENT_TYPES.DATA) {
      if (!this.altInputs[path]) {
        this.altInputs[path] = {};
      }
      this.altInputs[path] = event.data;
    } else if ( event.eventType === AltInputEventModel.EVENT_TYPES.APPLY) {
      // STUB FUNCTION TO APPLY THE FIELD INTO THE BODY
      this.substituteToBody(path, AltInputEventModel.EVENT_TYPES.APPLY);
    } else if ( event.eventType === AltInputEventModel.EVENT_TYPES.DELETE) {
      delete this.altInputs[path];
      this.substituteToBody(path, AltInputEventModel.EVENT_TYPES.DELETE);
    }
  }
  substituteToBody(path: string, eventType?: string) {
    if ( this.selectedResponse === 'application/json') {
      // substitution for application json
      let target = null;
      this.endpointData['parameters'].forEach( p => {
        if (p.name === 'body') {
          target = p;
        }
      });
      if (target) {
        const pathArray = path.split('.');
        const lastPathItem = pathArray[pathArray.length - 1];
        if (!target.value) {
          // generate the json with the alt information inside
          target.value = {};
          pathArray.reduce((prevVal, nextVal) => {
            if (lastPathItem === nextVal) {
              return prevVal[nextVal] = this.altInputs[path];
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
                  prevVal[curVal] = this.altInputs[path];
                }
                return prevVal[curVal];
              }, obj);
            } else {
              // apply to all
              obj = Object.assign(obj, this.altInputs[path]);
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
