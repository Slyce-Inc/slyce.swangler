import { Injectable } from '@angular/core';
import { SwaggerService } from './swagger.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {ConfigService} from './config-service/config.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LocalStorageService {
  private storedSecurityDefinitionsSubject: BehaviorSubject<any>;
  private updateSecurityDefinitionsSubject = new Subject();
  private tempSecurityDefinitions: Object = {};

  // Security Definitions obj from swagger spec
  securityDefinitions: Observable<Object>;

  // Security Definitions stored in localStorage with values
  storedSecurityDefinitions: Observable<Array<Object>>;

  constructor(
    public swaggerService: SwaggerService,
    public configService: ConfigService
  ) {
    this.storedSecurityDefinitionsSubject = new BehaviorSubject(undefined);
    this.storedSecurityDefinitions = this.storedSecurityDefinitionsSubject.asObservable();

    // get securityDefinitions from swagger spec file
    this.getSecurityDefinitions();
  }

  getSecurityDefinitionsValuesFromStorage(securityDefinitionObj) {
    const securityDefinitionsDict: Object = {};
    for (const securityDefinition in securityDefinitionObj) {
      if (securityDefinitionObj.hasOwnProperty(securityDefinition)) {
        const securityDefinitionVal = this.getStorageVar(securityDefinition);
        if (securityDefinitionVal) {
          securityDefinitionsDict[securityDefinition] = securityDefinitionVal;
        }
      }
    }
    this.tempSecurityDefinitions = securityDefinitionsDict;
    this.storedSecurityDefinitionsSubject.next(securityDefinitionsDict);
    return securityDefinitionsDict;
  }

  getSecurityDefinitions() {
    this.securityDefinitions = this.swaggerService.getApiData()
      .map( data => {
        if (data) {
          return data.spec.securityDefinitions;
        }
      });
  }

  /**
   * Save to local storage for security definitions
   * @param varName
   * @param varValue
   */
  setStorageSecurityDef(varName, varValue) {
    window.localStorage[this.configService.config.app_name + '_' + varName] = varValue;
    this.tempSecurityDefinitions[varName] = varValue;
    this.storedSecurityDefinitionsSubject.next(this.tempSecurityDefinitions);
  }

  updateSecurityDef(inputFields) {
    for (const i in inputFields) {
      if (inputFields.hasOwnProperty(i)) {
        this.setStorageSecurityDef(i, inputFields[i]);
      }
    }
    this.updateSecurityDefinitionsSubject.next(true);
  }

  onSecurityDefinitionsChange() {
    return this.updateSecurityDefinitionsSubject.asObservable();
  }

  /**
   * Save to storage variables for anything else that doesn't need special operations being done.
   * @param varName
   * @param varValue
   */
  setStorageVar(varName, varValue) {
    window.localStorage[this.configService.config.app_name + '_' + varName] = varValue;
  }

  getStorageVar(varName) {
    return window.localStorage[this.configService.config.app_name + '_' + varName];
  }
}
