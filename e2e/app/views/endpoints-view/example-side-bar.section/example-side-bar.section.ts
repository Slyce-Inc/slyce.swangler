import {$$, browser, by, element} from 'protractor';

export class ExampleSideBarSection {
  navigateTo() {
    return browser.get('/');
  }
  processCollasibles(f): Promise<any> {
    return new Promise<any>((resolve => {
      $$('app-example-collapsible .parent_menu').then(array => {
        array.forEach(p => {
          const header = p.element(by.css('.collapsable-nav-header'));
          const body = p.element(by.css('.collapsable-nav-body'));
          f(header, body);
        });
      }).then(() => resolve());
    }));
  }
}
