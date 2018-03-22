import { Injectable } from '@angular/core';

@Injectable()
export class ShredVarsService {
  public sharedVars;

  constructor() { }

  initSharedVars(vars) {

    const res = {};
    vars.forEach(element => {
      if ( element.parameters && element.parameters.length ) {
        element.parameters.forEach(param => {
          if (!param.default && param.in !== 'body') {
            res[param.name] = 'test';
          }
        });
      }
    });
    this.sharedVars = res;
  }

}
