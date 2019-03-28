/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

/* @flow */

import {styled} from '../styles/index.js';

export const Action = styled('div', () => ({}));

export const Body = styled('div', ({$theme}) => {
  const {colors, sizing, typography} = $theme;
  return {
    marginBottom: sizing.scale600,
    color: colors.foregroundAlt,
    ...typography.font300,
  };
});

export const Contents = styled('div', ({$theme}) => {
  const {sizing} = $theme;
  return {
    marginLeft: sizing.scale800,
    marginTop: sizing.scale800,
    marginRight: sizing.scale800,
    marginBottom: sizing.scale800,
  };
});

export const HeaderImage = styled('img', ({$theme}) => {
  const {borders} = $theme;
  return {
    borderTopLeftRadius: borders.radius200,
    borderTopRightRadius: borders.radius200,
    objectFit: 'contain',
    maxWidth: '100%',
  };
});

export const Root = styled('div', ({$theme}) => {
  const {borders, lighting, colors} = $theme;
  return {
    ...borders.border300,
    boxShadow: lighting.shadow400,
    borderTopLeftRadius: borders.radius200,
    borderTopRightRadius: borders.radius200,
    borderBottomLeftRadius: borders.radius200,
    borderBottomRightRadius: borders.radius200,
    backgroundColor: colors.backgroundAlt,
  };
});

export const Thumbnail = styled('img', props => {
  const {
    $theme: {borders, sizing},
  } = props;
  return {
    float: 'right',
    height: sizing.scale2400,
    width: sizing.scale2400,
    objectFit: 'cover',
    borderTopLeftRadius: borders.radius200,
    borderTopRightRadius: borders.radius200,
    borderBottomLeftRadius: borders.radius200,
    borderBottomRightRadius: borders.radius200,
    ...borders.border200,
    margin: `0 0 ${sizing.scale500} ${sizing.scale500}`,
  };
});

export const Title = styled('h1', ({$hasThumbnail, $theme}) => {
  const {colors, sizing, typography} = $theme;
  return {
    ...typography.font500,
    color: colors.foreground,
    fontWeight: 500,
    marginLeft: 0,
    marginTop: 0,
    marginRight: sizing.scale300,
    marginBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingBottom: 0,
  };
});
