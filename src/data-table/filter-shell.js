/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {Button, SIZE as BUTTON_SIZE} from '../button/index.js';
import {Checkbox, STYLE_TYPE} from '../checkbox/index.js';
import {useStyletron} from '../styles/index.js';

type PropsT = {
  children: React.Node,
  exclude: boolean,
  onExcludeChange: () => void,
  onApply: () => void,
};

function FilterShell(props: PropsT) {
  const [useCss, theme] = useStyletron();
  return (
    <div
      className={useCss({
        backgroundColor: theme.colors.white,
        paddingTop: theme.sizing.scale600,
        paddingRight: theme.sizing.scale600,
        paddingBottom: theme.sizing.scale600,
        paddingLeft: theme.sizing.scale600,
        width: '320px',
      })}
    >
      {props.children}
      <div
        className={useCss({
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
        })}
      >
        <Checkbox
          checked={props.exclude}
          onChange={props.onExcludeChange}
          checkmarkType={STYLE_TYPE.toggle}
          labelPlacement="right"
        >
          Exclude
        </Checkbox>
        <Button size={BUTTON_SIZE.compact} onClick={props.onApply}>
          Apply
        </Button>
      </div>
    </div>
  );
}

export default FilterShell;
