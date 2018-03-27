import {ExampleSideBarSection} from './example-side-bar.section';
import {$$, browser, by, ElementArrayFinder, ElementFinder} from 'protractor';
import {SidebarNavSection} from '../sidebar-nav.section/sidebar-nav.section';


describe('slyce.swangler App', () => {
  const exampleSideBarSection: ExampleSideBarSection = new ExampleSideBarSection();
  const sidebarNavSection: SidebarNavSection = new SidebarNavSection();
  beforeEach(() => {
    exampleSideBarSection.navigateTo();
  });
  /*it('should open correct corresponding collapsible', function () {
    section.processCollasibles((header, body) => {
      header.click().then(() => {
        expect(body.isDisplayed()).toBeTruthy();
        header.click().then(() => {
          expect(body.isDisplayed()).not.toBeTruthy();
        });
      });
    });
  });
  it('should check each collasible body is not empty', function () {
    section.processCollasibles((header: ElementFinder, body: ElementFinder) => {
      header.click().then( () => {
        body.getText().then(res => {
          expect(res).toBeTruthy();
        });
      });
    });
  });*/
  /*it('spec name', function () {
    sidebarNavSection.processCollasibles((link) => {
      console.log(link);
      section.processCollasibles((header, body) => {
        header.getText().then(res => {
          console.log(res);
          header.click().then(() => {
            body.getText().then( bodyText => {
              browser.manage().logs().get('browser').then(function(browserLog) {
                if (browserLog.length) {
                  console.log('log: ' + require('util').inspect(browserLog));
                }
              });
            });
          });
        });
      });
    });
  });*/

  it('exampleSideBar should not throw an error', async function () {
    sidebarNavSection.processCollasibles((link) => {
      return browser.get(link).then(async () => {
        // After you go to the link do your shit
        exampleSideBarSection.processCollasibles((header, body) => {
          header.click();
        });
      });
    });
  });
});
