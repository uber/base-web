/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import deepMerge from '../../utils/deep-merge.js';
import {DarkTheme} from './dark-theme.js';
import {
  typography as moveTypography,
  fontTokens as moveFontTokens,
} from '../move-theme/typography.js';
import getTypography from '../shared/typography.js';

import type {ThemeT} from '../../styles/types.js';

export const DarkThemeMove: ThemeT = deepMerge(
  {
    name: 'dark-theme-with-move',
    typography: deepMerge(getTypography(moveFontTokens), moveTypography),
  },
  DarkTheme,
);
