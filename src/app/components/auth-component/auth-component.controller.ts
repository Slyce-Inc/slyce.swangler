import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {LocalStorageService} from '../../services/local-storage.service';
import {SecurityDefinition} from '../../models/auth/security-definition';
import {NotificationsService} from 'angular2-notifications';
import { EndpointsSharedService } from '../../services/endpoints-shared.service';

@Component({
  selector: 'app-auth-component',
  templateUrl: './auth-component.component.html',
  styleUrls: ['./auth-component.component.scss'],
})

export class AuthComponent implements OnInit {
  Object = null;
  public APPLIED_AUTH_MSG = 'Authentication Applied';
  public inputFields = {};
  showFilteredEndpoints = false;
  @Output() toggleFilteredEndpoints = new EventEmitter();

  // Contains the name of the security definition as the key
  @Input('securityDefinitions') securityDefinitions: SecurityDefinition;

  constructor (
    public localStorageService: LocalStorageService,
    public notify: NotificationsService,
    public endpointsSharedService: EndpointsSharedService,
  ) {
  }

  ngOnInit() {
    this.Object = Object;
    this.localStorageService.securityDefinitions.subscribe(res => {
      this.securityDefinitions = res as SecurityDefinition;

      for (const sd in this.securityDefinitions) {
        if (this.securityDefinitions.hasOwnProperty(sd)) {
          const sdObj = this.securityDefinitions[sd];
          const localStorageVal = this.localStorageService.getStorageVar(sdObj.name);
          if (localStorageVal) {
            this.inputFields[sd] = localStorageVal;
          }
        }
      }
    });
  }

  public clickApplyButton() {
    this.localStorageService.updateSecurityDef(this.inputFields);
    this.notify.success('Success', this.APPLIED_AUTH_MSG);
  }

  toggleFilteredEndpointsClick(value) {
    this.toggleFilteredEndpoints.emit(value);
    this.endpointsSharedService.endpointsRestrictedToggle(value);
  }
}


