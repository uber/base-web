/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from 'react';
import {
  ORIENTATION,
  FILL,
  KEYBOARD_ACTIVATION,
  STATE_CHANGE_TYPE,
} from './constants.js';

import type {OverrideT} from '../helpers/overrides.js';
import type {IconPropsT} from '../icon/types.js';

export type OrientationT = $Values<typeof ORIENTATION>;
export type FillT = $Values<typeof FILL>;
export type KeyboardActivationT = $Values<typeof KEYBOARD_ACTIVATION>;
export type StateChangeT = $Values<typeof STATE_CHANGE_TYPE>;

export type TabsOverridesT = {|
  Root?: OverrideT,
  TabList?: OverrideT,
  TabHighlight?: OverrideT,
  TabBorder?: OverrideT,
|};

export type TabOverridesT = {|
  Tab?: OverrideT,
  ArtworkContainer?: OverrideT,
  TabPanel?: OverrideT,
|};

export type StatefulTabsStateT = {|
  activeKey: React.Key,
|};

export type StatefulTabsActionT = {|
  type: StateChangeT,
  payload: React.Key,
|};

export type StatefulTabsReducerT = (
  state: StatefulTabsStateT,
  action: StatefulTabsActionT,
) => StatefulTabsStateT;

export type onChangeT = (params: {activeKey: React.Key}) => void;

export type TabsPropsT = {|
  activeKey?: React.Key,
  disabled?: boolean,
  fill?: FillT,
  orientation?: OrientationT,
  keyboardActivation?: KeyboardActivationT,
  onChange?: onChangeT,
  overrides?: TabsOverridesT,
  children?: React.Node,
  renderAll?: boolean,
|};

export type StatefulTabsPropsT = {|
  ...TabsPropsT,
  initialState?: StatefulTabsStateT,
  stateReducer?: StatefulTabsReducerT,
  onChange?: onChangeT,
  children: React.Node,
|};

export type TabPropsT = {
  title?: React.Node,
  key?: React.Key,
  tabRef?: React.Ref<'button'>,
  overrides?: TabOverridesT,
  children?: React.Node,
  artwork?: React.AbstractComponent<{
    ...IconPropsT,
    size: $PropertyType<IconPropsT, 'size'>,
    color: $PropertyType<IconPropsT, 'color'>,
  }>,
};
