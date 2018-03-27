import { AppPage } from './app.po';
import {browser, protractor} from 'protractor';

/*
Some code to slow down the test to check for correctness
*/

/*const origFn = browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  const args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};*/

describe('slyce.swangler App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
});
