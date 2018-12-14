/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';
import {Button, ButtonGroup} from './index.js';

import examples from './examples-list.js';

export default {
  [examples.BUTTON_GROUP]: function SimpleStory() {
    return (
      <React.Fragment>
        <ButtonGroup>
          <Button>Label</Button>
          <Button>Label</Button>
          <Button>Label</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup kind="primary" mode="radio">
          <Button>Label</Button>
          <Button>Label</Button>
          <Button>Label</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup kind="tertiary" mode="checkbox">
          <Button>Label</Button>
          <Button>Label</Button>
          <Button>Label</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup kind="minimal" mode="checkbox">
          <Button>Label</Button>
          <Button>Label</Button>
          <Button>Label</Button>
        </ButtonGroup>
      </React.Fragment>
    );
  },
};
