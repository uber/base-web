/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import { Scenario as SpinnerNegative } from './spinner-negative.scenario.js';
import { Scenario as SpinnerNext } from './spinner-next.scenario.js';
import { Scenario as SpinnerDefault } from './spinner.scenario.js';

export const Negative = () => <SpinnerNegative />;
export const Next = () => <SpinnerNext />;
export const Spinner = () => <SpinnerDefault />;
