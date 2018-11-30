/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import {styled} from '../styles/index.js';
import {getSvgStyles} from '../icon/styled-components.js';
import {KIND, PLACEMENT} from './constants.js';
import type {
  SharedStylePropsT,
  ToasterSharedStylePropsT,
  KindTypeT,
  PlacementTypeT,
} from './types.js';
import type {ThemeT} from '../styles/types.js';

function getBackgroundColor(kind: KindTypeT, theme: ThemeT) {
  return {
    [KIND.info]: theme.colors.primary500,
    [KIND.positive]: theme.colors.positive500,
    [KIND.warning]: theme.colors.warning500,
    [KIND.negative]: theme.colors.negative500,
  }[kind];
}

export function getPlacement(placement: PlacementTypeT) {
  return {
    [PLACEMENT.topLeft]: {
      top: 0,
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    [PLACEMENT.top]: {
      top: 0,
      alignItems: 'center',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    [PLACEMENT.topRight]: {
      top: 0,
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      flexDirection: 'column',
    },
    [PLACEMENT.bottomRight]: {
      bottom: 0,
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      flexDirection: 'column-reverse',
    },
    [PLACEMENT.bottom]: {
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'flex-end',
      flexDirection: 'column-reverse',
    },
    [PLACEMENT.bottomLeft]: {
      bottom: 0,
      alignItems: 'flex-start',
      justifyContent: 'flex-end',
      flexDirection: 'column-reverse',
    },
  }[placement];
}

/**
 * Main component container element
 */
export const Root = styled('div', (props: ToasterSharedStylePropsT) => {
  const {$placement} = props;
  return {
    pointerEvents: 'none',
    position: 'fixed',
    right: 0,
    left: 0,
    display: 'flex',
    ...getPlacement($placement),
  };
});

export const Body = styled('div', (props: SharedStylePropsT) => {
  const {$isVisible, $kind, $theme} = props;
  return {
    ...$theme.typography.font300,
    pointerEvents: 'auto',
    color: $theme.colors.white,
    height: 'auto',
    width: '288px',
    paddingTop: $theme.sizing.scale600,
    paddingRight: $theme.sizing.scale600,
    paddingBottom: $theme.sizing.scale600,
    paddingLeft: $theme.sizing.scale600,
    marginTop: $theme.sizing.scale300,
    marginBottom: $theme.sizing.scale300,
    backgroundColor:
      getBackgroundColor($kind, $theme) || $theme.colors.primary500,
    borderRadius: $theme.borders.useRoundedCorners
      ? $theme.borders.radius200
      : '0px',
    boxShadow: $theme.lighting.shadow600,
    opacity: $isVisible ? 1 : 0,
    transitionProperty: 'all',
    transitionDuration: $theme.animation.timing100,
    transitionTimingFunction: $theme.animation.easeInOutCurve,
  };
});

/**
 * DeleteAlt icon overrides
 */
export const CloseIconSvg = styled('svg', props => {
  return {
    ...getSvgStyles(props),
    cursor: 'pointer',
    float: 'right',
  };
});
