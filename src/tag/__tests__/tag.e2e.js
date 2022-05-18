/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* eslint-env node */
/* eslint-disable flowtype/require-valid-file-annotation */

const { mount, analyzeAccessibility } = require('../../../e2e/helpers');

const { expect, test } = require('@playwright/test');

test.describe('tag', () => {
  test('passes basic a11y tests', async ({ page }) => {
    await mount(page, 'tag--tag');
    const accessibilityReport = await analyzeAccessibility(page, {
      rules: [
        {
          id: 'th-has-data-cells', // table has some columns without header
          enabled: false,
        },
      ],
    });
    expect(accessibilityReport).toHaveNoAccessibilityIssues();
  });
});
