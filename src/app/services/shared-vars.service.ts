import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LocalStorageService } from './local-storage.service';
import { SwaggerService } from './swagger.service';

@Injectable()
export class SharedVarsService implements OnInit {
  sharedVars;

  constructor(
    public localStorageService: LocalStorageService,
  ) {
  }

  ngOnInit() {
  }

  initSharedVars(vars) {
    const res = {};
    vars.forEach(element => {
      if ( element.parameters && element.parameters.length ) {
        element.parameters.forEach(param => {
          if (!param.default && param.in !== 'body' && !res[param.name]) {
            res[param.name] = new Subject();
            const localStorageVal = this.localStorageService.getStorageVar(param.name);
            if ( localStorageVal ) {
              res[param.name].next(localStorageVal);
              if (!res[param.name].value) {
                res[param.name].value = localStorageVal;
              }
            }
          }
        });
      }
    });
    this.sharedVars = res;
  }
}
