/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
/* global __dirname */

// @flow

jest.autoMockOff();
const defineTest = require('jscodeshift/dist/testUtils').defineTest;

describe('styled-flowfixme', () => {
  defineTest(
    __dirname,
    'styled-v7-themedStyled',
    null,
    'styled-v7-themedStyled-component',
  );

  defineTest(
    __dirname,
    'styled-v7-themedStyled',
    null,
    'styled-v7-themedStyled-element',
  );

  defineTest(
    __dirname,
    'styled-v7-themedStyled',
    null,
    'styled-v7-themedStyled-multi-diff',
  );

  defineTest(
    __dirname,
    'styled-v7-themedStyled',
    null,
    'styled-v7-themedStyled-multi-dup',
  );

  defineTest(
    __dirname,
    'styled-v7-themedStyled',
    null,
    'styled-v7-themedStyled-object',
  );
});
