/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* eslint-env node */
/* eslint-disable flowtype/require-valid-file-annotation */

const { mount } = require('../../../e2e/helpers');

const { expect, test } = require('@playwright/test');

const selectors = {
  input: 'input',
  calendar: '[data-baseweb="calendar"]',
  day: '[aria-label="Choose Monday, March 14th 2022. It\'s available."]',
  day2: '[aria-label="Choose Saturday, March 26th 2022. It\'s available."]',
  day3: '[aria-label="Choose Tuesday, March 22nd 2022. It\'s available."]',
  day4: '[aria-label="Choose Thursday, March 31st 2022. It\'s available."]',
  day5: '[aria-label="Choose Monday, April 4th 2022. It\'s available."]',
  day6: '[aria-label="Choose Friday, April 1st 2022. It\'s available."]',
  rightArrow: '[aria-label="Next month."]',
};

test.describe('Datepicker, Range', () => {
  test('is unable to select range that includes excluded date', async ({ page }) => {
    const inputSelector = `#within-month ${selectors.input}`;
    await mount(page, 'datepicker--range-exclude-dates');
    await page.waitForSelector(inputSelector);
    await page.click(inputSelector);
    await page.waitForSelector(selectors.calendar);
    const selectedValue1 = await page.$eval(inputSelector, (input) => input.value);
    expect(selectedValue1).toBe('2022/03/14 –     /  /  ');
    await page.click(selectors.day2);
    const selectedValue2 = await page.$eval(inputSelector, (input) => input.value);
    expect(selectedValue2).toBe('2022/03/14 –     /  /  ');
    await page.click(selectors.day3);
    await page.waitForSelector(selectors.calendar, { state: 'hidden' });
    const selectedValue3 = await page.$eval(inputSelector, (input) => input.value);
    expect(selectedValue3).toBe('2022/03/14 – 2022/03/22');
  });

  test('is unable to select range that includes excluded date, across months', async ({ page }) => {
    const inputSelector = `#between-month ${selectors.input}`;
    await mount(page, 'datepicker--range-exclude-dates');
    await page.waitForSelector(inputSelector);
    await page.click(inputSelector);
    await page.waitForSelector(selectors.calendar);
    const selectedValue1 = await page.$eval(inputSelector, (input) => input.value);
    expect(selectedValue1).toBe('2022/03/31 –     /  /  ');
    await page.click(selectors.day3);
    const selectedValue2 = await page.$eval(inputSelector, (input) => input.value);
    expect(selectedValue2).toBe('2022/03/31 –     /  /  ');
    await page.click(selectors.rightArrow);
    await page.waitForSelector(selectors.day5);
    await page.click(selectors.day5);
    const selectedValue3 = await page.$eval(inputSelector, (input) => input.value);
    expect(selectedValue3).toBe('2022/03/31 –     /  /  ');
    await page.click(selectors.day6);
    await page.waitForSelector(selectors.calendar, { state: 'hidden' });
    const selectedValue4 = await page.$eval(inputSelector, (input) => input.value);
    expect(selectedValue4).toBe('2022/03/31 – 2022/04/01');
  });
});
