import {$, $$, browser, by, element} from 'protractor';

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
      }).then(() => {
        $('app-example-side-bar').$$('tabset .nav-item').each(tab => {
          tab.click().then(() => {
            $('app-example-side-bar').$('tabset').$$('app-example-collapsible .parent_menu').then(array => {
              array.forEach(p => {
                const header2 = p.element(by.css('.collapsable-nav-header'));
                const body2 = p.element(by.css('.collapsable-nav-body'));
                f(header2, body2);
              });
            });
          });
        });
      }).then(() => resolve());
    }));
  }
  getResponseTabset() {
    return $$('app-example-collapsible tabset');
  }
}
