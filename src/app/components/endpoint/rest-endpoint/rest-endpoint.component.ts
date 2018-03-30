import { Component, OnInit } from '@angular/core';
import {EndpointComponent} from '../endpoint.component';
import {SharedVarsService} from '../../../services/shared-vars.service';
import {NotificationsService} from 'angular2-notifications';
import {EndpointsSharedService} from '../../../services/endpoints-shared.service';
import {LocalStorageService} from '../../../services/local-storage.service';
import {Parameter} from '../../../models/endpoint/endpoint.model';

@Component({
  selector: 'app-rest-endpoint',
  templateUrl: './rest-endpoint.component.html',
  styleUrls: ['./rest-endpoint.component.scss']
})
export class RestEndpointComponent extends EndpointComponent implements OnInit {
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
}
