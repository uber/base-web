/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-env node*/
// @flow
import * as webdriver from 'selenium-webdriver';
import AxeBuilder from 'axe-webdriverjs';

const {By} = webdriver;

if (!process.env.SAUCE_USERNAME || !process.env.SAUCE_ACCESS_KEY) {
  throw new Error(
    'You have to set the SAUCE_USERNAME and SAUCE_ACCESS_KEY environment variables',
  );
}

const sauceUsername = process.env.SAUCE_USERNAME;
const sauceAccessKey = process.env.SAUCE_ACCESS_KEY;
const sauceServer = `http://${sauceUsername}:${sauceAccessKey}@ondemand.saucelabs.com:80/wd/hub`;

const browsers = ['chrome'];
const activeDrivers = {};
let currentDriver;

const location = 'http://localhost:8080';

const goToUrl = async function(
  driver: webdriver$WebDriver,
  suite: string,
  test: string,
) {
  const url = location + `/?suite=${suite}&test=${test}`;
  await driver.get(url);
  let errors = await driver
    .manage()
    .logs()
    .get('browser');
  errors = errors.filter(error => error.message.indexOf('NOT_FOUND_TEST') >= 0);
  if (errors.length) {
    // eslint-disable-next-line no-console
    console.error(errors[0].message);
  }
  await new Promise(resolve => resolve());
};

const run = function(
  testSuite: (driver: webdriver$WebDriver, browser: string) => void,
) {
  browsers.forEach(browser => {
    if (!activeDrivers[browser]) {
      const browserMethod = webdriver.Capabilities[browser];
      const capabilities = browserMethod();

      // adding Sauce Labs config
      capabilities.username = sauceUsername;
      capabilities.accessKey = sauceAccessKey;

      activeDrivers[browser] = new webdriver.Builder()
        .forBrowser(browser)
        .withCapabilities(capabilities)
        .usingServer(sauceServer)
        .build();
    }
    afterAll(async function() {
      await currentDriver.quit();
    });
    currentDriver = activeDrivers[browser];
    testSuite(currentDriver, browser);
  });
};

const runBrowserAccecibilityTest = async function(
  driver: webdriver$WebDriver,
  rootSelector: string = 'body',
) {
  const builder = AxeBuilder(driver).include(rootSelector);
  const results = await builder.analyze();
  if (results.violations && results.violations.length) {
    // eslint-disable-next-line no-console
    console.log('Accessibility violations: ', results.violations);
  }
};

const getElement = async function(
  parent: webdriver$WebElement | webdriver$WebDriver,
  css: string,
) {
  return await parent.findElement(By.css(css));
};

export default {
  goToUrl,
  run,
  By,
  runBrowserAccecibilityTest,
  getElement,
  location,
};
