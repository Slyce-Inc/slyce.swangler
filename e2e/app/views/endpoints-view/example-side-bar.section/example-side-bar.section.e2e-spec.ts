import {ExampleSideBarSection} from './example-side-bar.section';
import {$$, browser, by, ElementArrayFinder, ElementFinder} from 'protractor';
import {SidebarNavSection} from '../sidebar-nav.section/sidebar-nav.section';


describe('ExampleSideBar Test', () => {
  const exampleSideBarSection: ExampleSideBarSection = new ExampleSideBarSection();
  const sidebarNavSection: SidebarNavSection = new SidebarNavSection();
  beforeEach(() => {
    exampleSideBarSection.navigateTo();
  });
  it('exampleSideBar should not throw an error', async function () {
    const errors = [];
    sidebarNavSection.processCollasibles((link) => {
      return browser.get(link).then(async () => {
        // After you go to the link do your shit
        exampleSideBarSection.processCollasibles((header, body) => {
          header.getText().then( text => {
            return header.click().then(() => {
              return browser.manage().logs().get('browser').then( browserLog => {
                if (browserLog.length) {
                  console.log(link);
                  console.log(text);
                  console.log(browserLog);
                  errors.push(browserLog);
                }
              });
            }, () => {});
          });
        });
      });
    }).then(() => { expect(errors.length === 0).toBeTruthy(); });
  });
});
