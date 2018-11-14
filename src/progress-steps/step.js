/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from 'react';
import {getOverrides} from '../helpers/overrides';
import {
  StyledStep,
  StyledIcon,
  StyledInnerIcon,
  StyledContent,
  StyledContentTitle,
  StyledContentTail,
  StyledContentDescription,
} from './styled-components';

import type {StepPropsT} from './types';

function Step({
  overrides = {},
  isCompleted,
  isActive,
  isLast,
  title,
  children,
}: StepPropsT) {
  const [Root, rootProps] = getOverrides(overrides.Root, StyledStep);
  const [Icon, iconProps] = getOverrides(overrides.Icon, StyledIcon);
  const [InnerIcon, innerIconProps] = getOverrides(
    overrides.InnerIcon,
    StyledInnerIcon,
  );
  const [Tail, tailProps] = getOverrides(overrides.Tail, StyledContentTail);
  const [Content, contentProps] = getOverrides(
    overrides.Content,
    StyledContent,
  );
  const [Title, titleProps] = getOverrides(overrides.Title, StyledContentTitle);
  const [Description, descriptionProps] = getOverrides(
    overrides.Description,
    StyledContentDescription,
  );

  const sharedProps = {
    $isCompleted: isCompleted,
    $isActive: isActive,
  };

  return (
    <Root {...rootProps}>
      <Icon {...sharedProps} {...iconProps}>
        {isActive && <InnerIcon {...innerIconProps} />}
      </Icon>
      {!isLast && <Tail {...sharedProps} {...tailProps} />}
      <Content {...sharedProps} {...contentProps}>
        <Title {...sharedProps} {...titleProps}>
          {title}
        </Title>
        {isActive &&
          React.Children.count(children) > 0 && (
            <Description {...descriptionProps}>{children}</Description>
          )}
      </Content>
    </Root>
  );
}

Step.defaultProps = {
  isCompleted: false,
  isActive: false,
  isLast: false,
};

export default Step;
