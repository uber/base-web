/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from 'react';

import {Popover, PLACEMENT} from '../popover/index.js';
import {mergeOverrides, withOverrides} from '../helpers/overrides.js';

import {StyledArrow, StyledBody} from './styled-components.js';
import type {PropsT, PropsDefaultT} from './types.js';

function Helper(props: PropsT) {
  const {overrides = {}, placement, ...restProps} = props;

  const mergedOverrides = mergeOverrides(
    {
      Arrow: placement !== PLACEMENT.auto ? StyledArrow : {},
      Body: placement !== PLACEMENT.auto ? StyledBody : {},
      Inner: {
        style: ({$theme}) => {
          return {backgroundColor: $theme.colors.backgroundPrimary};
        },
      },
    },
    overrides,
  );

  return (
    <Popover
      data-baseweb="helper"
      {...restProps}
      placement={placement}
      overrides={mergedOverrides}
    />
  );
}

const defaultProps: PropsDefaultT = {
  // $FlowFixMe
  ...Popover.defaultProps,
  placement: PLACEMENT.bottom,
  showArrow: true,
};

Helper.defaultProps = defaultProps;

let helper = withOverrides<React.Config<PropsT, PropsDefaultT>, mixed>(
  Helper,
  'Helper',
);

export {helper as Helper};
