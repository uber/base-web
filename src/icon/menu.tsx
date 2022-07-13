/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// BASEUI-GENERATED-REACT-ICON
// DO NOT EDIT THIS FILE DIRECTLY, SEE README.md
import * as React from 'react';
import { useStyletron } from '../styles';
import { mergeOverride, toObjectOverride } from '../helpers/overrides';

import Icon from './icon';
import type { IconPropsT } from './types';

function Menu(props: IconPropsT, ref) {
  const [, theme] = useStyletron();
  const { title = 'Menu', size, color, overrides = {}, ...restProps } = props;
  const SvgOverride = mergeOverride(
    // Icons from the theme target the SVG override in the underlying Icon component
    {
      component: theme.icons && theme.icons.Menu ? theme.icons.Menu : null,
    },
    overrides && overrides.Svg ? toObjectOverride(overrides.Svg) : {}
  );
  return (
    <Icon
      viewBox="0 0 24 24"
      ref={ref}
      title={title}
      size={size}
      color={color}
      overrides={{ Svg: SvgOverride }}
      {...restProps}
    >
      <rect x="4" y="11" width="16" height="2" rx="1" />
      <rect x="4" y="5" width="16" height="2" rx="1" />
      <rect x="4" y="17" width="16" height="2" rx="1" />
    </Icon>
  );
}

export default React.forwardRef<SVGSVGElement, IconPropsT>(Menu);
