/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import {useStyletron} from '../styles/index.js';
import {mergeOverride, toObjectOverride} from '../helpers/overrides.js';

import Icon from './icon.js';
import type {IconPropsT} from './types.js';

function ArrowDown(props: IconPropsT, ref) {
  const [, theme] = useStyletron();
  const {
    title = 'Arrow Down',
    size,
    color,
    overrides = {},
    ...restProps
  } = props;
  const SvgOverride = mergeOverride(
    // Icons from the theme target the SVG override in the underlying Icon component
    {
      component:
        theme.icons && theme.icons.ArrowDown ? theme.icons.ArrowDown : null,
    },
    overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {},
  );
  return (
    <Icon
      viewBox="0 0 24 24"
      ref={ref}
      title={title}
      size={size}
      color={color}
      overrides={{Svg: SvgOverride}}
      {...restProps}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 6C12.5523 6 13 6.44772 13 7V14.5858L15.2929 12.2929C15.6834 11.9024 16.3166 11.9024 16.7071 12.2929C17.0976 12.6834 17.0976 13.3166 16.7071 13.7071L12.7071 17.7071C12.3166 18.0976 11.6834 18.0976 11.2929 17.7071L7.29289 13.7071C6.90237 13.3166 6.90237 12.6834 7.29289 12.2929C7.68342 11.9024 8.31658 11.9024 8.70711 12.2929L11 14.5858V7C11 6.44772 11.4477 6 12 6Z"
      />
    </Icon>
  );
}

export default React.forwardRef<IconPropsT, mixed>(ArrowDown);
