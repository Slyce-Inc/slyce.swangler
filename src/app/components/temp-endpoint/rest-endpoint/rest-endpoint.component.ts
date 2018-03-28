import { Component, OnInit } from '@angular/core';
import {TempEndpointComponent} from '../temp-endpoint.component';
import {SharedVarsService} from '../../../services/shared-vars.service';
import {NotificationsService} from 'angular2-notifications';
import {EndpointsSharedService} from '../../../services/endpoints-shared.service';
import {LocalStorageService} from '../../../services/local-storage.service';

@Component({
  selector: 'app-rest-endpoint',
  templateUrl: './rest-endpoint.component.html',
  styleUrls: ['./rest-endpoint.component.scss']
})
export class RestEndpointComponent extends TempEndpointComponent implements OnInit {
  constructor(
    public endpointsSharedService: EndpointsSharedService,
    public notificationService: NotificationsService,
    public sharedVarsService: SharedVarsService,
    public localStorageService: LocalStorageService) {
    super(endpointsSharedService, notificationService, sharedVarsService, localStorageService);
  }
}
