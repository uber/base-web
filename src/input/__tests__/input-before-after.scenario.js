/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {StatefulInput, SIZE} from '../index.js';
import {Block} from '../../block/index.js';
import Search from '../../icon/search.js';

export const name = 'input-before-after';

export const component = () => (
  <React.Fragment>
    <StatefulInput
      overrides={{
        Before: () => (
          <Block display="flex" alignItems="center" paddingLeft="scale500">
            <Search size="16px" />
          </Block>
        ),
      }}
      placeholder="Input with a Before component"
    />

    <br />
    <StatefulInput
      overrides={{
        After: () => (
          <Block display="flex" alignItems="center" paddingRight="scale500">
            <Search size="16px" />
          </Block>
        ),
      }}
      placeholder="Input with an After component"
    />
  </React.Fragment>
);
