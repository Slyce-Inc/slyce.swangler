import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ShredVarsService implements OnInit {
  sharedVars;

  constructor() {
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
          }
        });
      }
    });
    this.sharedVars = res;
    // let count = 0;
    // setInterval(() => {
    //   count++;
    //   this.sharedVars['account_id'].next('test' + count);
    // }, 1000);
  }
}
