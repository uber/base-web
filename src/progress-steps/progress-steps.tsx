/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

import * as React from 'react';
import { getOverrides } from '../helpers/overrides';
import { StyledProgressSteps } from './styled-components';
import type { ProgressStepsProps, StepProps } from './types';
import { ORIENTATION } from './constants';

function ProgressSteps({
  overrides = {},
  current,
  alwaysShowDescription = false,
  orientation = ORIENTATION.vertical,
  children,
}: ProgressStepsProps) {
  const [Root, rootProps] = getOverrides(overrides.Root, StyledProgressSteps);
  const numChildren = React.Children.count(children);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const modifiedChildren = React.Children.map(children, (child: any, index) => {
    if (!child) return;

    const childOverrides = child.props.overrides || {};

    const isActive = child.props.isActive !== undefined ? child.props.isActive : index === current;
    const isRightBeforeActive =
      typeof current === 'number' && !isNaN(current) && index === current - 1;

    return React.cloneElement(child, {
      isLast: index === numChildren - 1,
      // @ts-ignore
      isCompleted: index < current,
      isActive,
      isRightBeforeActive,
      alwaysShowDescription:
        child.props.alwaysShowDescription === undefined
          ? alwaysShowDescription
          : child.props.alwaysShowDescription,
      step: index + 1,
      orientation,
      overrides: {
        ...overrides,
        Root: overrides.StepRoot,
        ...childOverrides,
      },
    } as StepProps);
  });

  return (
    <Root data-baseweb="progress-steps" $orientation={orientation} {...rootProps}>
      {modifiedChildren}
    </Root>
  );
}

ProgressSteps.defaultProps = {
  current: 0,
};

export default ProgressSteps;
