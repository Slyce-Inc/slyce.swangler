import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LocalStorageService } from './local-storage.service';
import { SwaggerService } from './swagger.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedVarsService implements OnInit {
  sharedVars;

  constructor(
    public localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit() {
  }

  initSharedVars(endpoints) {
    const res = {};
    endpoints.forEach(endpoint => {
      if ( endpoint.parameters && endpoint.parameters.length ) {
        endpoint.parameters.forEach(param => {
          if (!param.default && !res[param.name]) {
            let sharedVarName;
            if (param.in === 'body') {
              sharedVarName = endpoint.operationId + '_body';
            } else {
              sharedVarName = param.name;
            }
            res[sharedVarName] = new BehaviorSubject(null);
            const localStorageVal = this.localStorageService.getStorageVar(sharedVarName);
            if ( localStorageVal ) {
              res[sharedVarName].next(localStorageVal);
            }
          }
        });
      }
      if (endpoint.requestMessages) {
        endpoint.requestMessages.forEach((requestMessage, i) => {
          const sharedVarName = endpoint.operationId + '_ws_message_' + i;
          res[sharedVarName] = new BehaviorSubject(null);
          const localStorageVal = this.localStorageService.getStorageVar(sharedVarName);
            if ( localStorageVal ) {
              res[sharedVarName].next(localStorageVal);
            }
        });
      }
    });

    this.sharedVars = res;
  }
}
