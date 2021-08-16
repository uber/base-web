/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import TagLongText from './tag-long-text.scenario.js';
import TagOverrides from './tag-overrides.scenario.js';
import TagSize from './tag-size.scenario.js';
import TagDefault from './tag.scenario.js';
import TagStartEnhancer from './tag-start-enhancer.scenario.js';

export const LongText = () => <TagLongText />;
export const Overrides = () => <TagOverrides />;
export const Size = () => <TagSize />;
export const Tag = () => <TagDefault />;
export const StartEnhancer = () => <TagStartEnhancer />;
