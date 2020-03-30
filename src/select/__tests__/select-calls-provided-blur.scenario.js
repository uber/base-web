/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import React from 'react';

import {StatefulSelect} from '../index.js';

export default function Scenario() {
  const [blurCalled, setBlurCalled] = React.useState(false);
  return (
    <React.Fragment>
      <StatefulSelect
        onBlur={() => setBlurCalled(true)}
        options={[
          {id: 'a', label: 'hey!'},
          {id: 'b', label: 'are you listening?'},
          {id: 'c', label: 'look at me!'},
        ]}
      />
      <button>focus target</button>
      <p>{String(blurCalled)}</p>
    </React.Fragment>
  );
}
