import {$$, browser, by, element, ElementArrayFinder, ElementFinder} from 'protractor';

export class SidebarNavSection {
  navigateTo() {
    return browser.get('/');
  }
  processCollasibles(f) {
    this.getCollapsibleNavParentMenu()
      .map(ef => ef.$('a').getAttribute('href').then( link => link)).then( links => {
      links.reduce((lastLinkP, curLink) => {
        return lastLinkP.then(() => {
          return f(curLink);
        });
      }, Promise.resolve([]));
    });
  }
  getCollapsibleNavParentMenu(): ElementArrayFinder {
    return $$('app-collapsable-nav .parent_menu');
  }
}
