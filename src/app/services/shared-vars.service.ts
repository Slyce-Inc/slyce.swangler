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
          if (!param.default && param.in !== 'body' && !res[param.name]) {
            res[param.name] = new BehaviorSubject(null);
            const localStorageVal = this.localStorageService.getStorageVar(param.name);
            if ( localStorageVal ) {
              res[param.name].next(localStorageVal);
            }
          }
        });
      }
    });
    console.log(res);

    this.sharedVars = res;
  }
}
