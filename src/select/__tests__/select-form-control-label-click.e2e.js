/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-env node */
/* eslint-disable flowtype/require-valid-file-annotation */

const { mount } = require('../../../e2e/helpers');

const { test } = require('@playwright/test');

async function clickOutside(page) {
  const el = await page.$('#click-outside');
  await el.click();
}

async function clickSelectAtIndex(page, index) {
  const elements = await page.$$('div[data-baseweb="select"]');
  await elements[index].click();
}

async function clickLabelAtIndex(page, index) {
  const labels = await page.$$('label');
  await labels[index].click();
}

async function isListboxOpen(page) {
  await page.waitForSelector('ul[role="listbox"]');
}

async function isListboxClosed(page) {
  await page.waitForSelector('ul[role="listbox"]', { state: 'hidden' });
}

test.describe('select click open/close', () => {
  test.describe('baseui form-control label', () => {
    test.describe('non-searchable', () => {
      test('label click', async ({ page }) => {
        await mount(page, 'select--searchable-form-control');
        await clickLabelAtIndex(page, 0);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);

        await clickLabelAtIndex(page, 0);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);
      });

      test('select click', async ({ page }) => {
        await mount(page, 'select--searchable-form-control');
        await clickSelectAtIndex(page, 0);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);

        await clickSelectAtIndex(page, 0);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);
      });
    });

    test.describe('searchable', () => {
      test('label click', async ({ page }) => {
        await mount(page, 'select--searchable-form-control');
        await clickLabelAtIndex(page, 1);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);

        await clickLabelAtIndex(page, 1);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);
      });

      test('select click', async ({ page }) => {
        await mount(page, 'select--searchable-form-control');
        await clickSelectAtIndex(page, 1);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);

        await clickSelectAtIndex(page, 1);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);
      });
    });
  });

  test.describe('native label', () => {
    test.describe('non-searchable', () => {
      test('label click', async ({ page }) => {
        await mount(page, 'select--searchable-form-control');
        await clickLabelAtIndex(page, 2);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);

        await clickLabelAtIndex(page, 2);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);
      });

      test('select click', async ({ page }) => {
        await mount(page, 'select--searchable-form-control');
        await clickSelectAtIndex(page, 2);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);

        await clickSelectAtIndex(page, 2);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);
      });
    });

    test.describe('searchable', () => {
      test('label click', async ({ page }) => {
        await mount(page, 'select--searchable-form-control');
        await clickLabelAtIndex(page, 3);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);

        await clickLabelAtIndex(page, 3);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);
      });

      test('select click', async ({ page }) => {
        await mount(page, 'select--searchable-form-control');
        await clickSelectAtIndex(page, 3);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);

        await clickSelectAtIndex(page, 3);
        await isListboxOpen(page);

        await clickOutside(page);
        await isListboxClosed(page);
      });
    });
  });

  test.describe('no label', () => {
    test('non-searchable', async ({ page }) => {
      await mount(page, 'select--searchable-form-control');
      await clickSelectAtIndex(page, 4);
      await isListboxOpen(page);

      await clickOutside(page);
      await isListboxClosed(page);

      await clickSelectAtIndex(page, 4);
      await isListboxOpen(page);

      await clickOutside(page);
      await isListboxClosed(page);
    });

    test('searchable', async ({ page }) => {
      await mount(page, 'select--searchable-form-control');
      await clickSelectAtIndex(page, 5);
      await isListboxOpen(page);

      await clickOutside(page);
      await isListboxClosed(page);

      await clickSelectAtIndex(page, 5);
      await isListboxOpen(page);

      await clickOutside(page);
      await isListboxClosed(page);
    });
  });
});
