import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { LocalStorageService } from './local-storage.service';
import { SwaggerService } from './swagger.service';

@Injectable()
export class ShredVarsService implements OnInit {
  sharedVars;

  constructor(
    public localStorageService: LocalStorageService,
    // public swaggerService: SwaggerService
  ) {
  }

  ngOnInit() {
  }

  initSharedVars(vars) {
    const res = {};
    vars.forEach(element => {
      if ( element.parameters && element.parameters.length ) {
        element.parameters.forEach(param => {
          if (!param.default && param.in !== 'body') {
            res[param.name] = new Subject();
            const localStorageVal = this.localStorageService.getStorageVar(param.name);
            if ( localStorageVal ) {
              res[param.name].next(localStorageVal);
              res[param.name].value = localStorageVal;
            }
          }
        });
      }
    });
    this.sharedVars = res;
  }
}
