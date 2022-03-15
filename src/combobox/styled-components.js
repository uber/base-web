/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import { SIZE } from '../input/index.js';
import { styled } from '../styles/index.js';
import type { FontT } from '../themes/types.js';

export const StyledRoot = styled('div', {});

export const StyledInputContainer = styled('div', {});

export const StyledListBox = styled<{| $width: string |}>('ul', ({ $theme, $width }) => {
  return {
    backgroundColor: $theme.colors.backgroundPrimary,
    marginBlockStart: 'unset',
    marginBlockEnd: 'unset',
    maxHeight: '200px',
    overflowY: 'auto',
    outline: 'none',
    paddingInlineStart: 'unset',
    width: $width,
  };
});

function buildStylesForSize(
  size,
  theme
):
  | {| ...FontT, height: string, paddingLeft?: string |}
  | {| ...FontT, height: string, paddingRight?: string |} {
  const paddingDir: string = theme.direction === 'rtl' ? 'paddingRight' : 'paddingLeft';
  switch (size) {
    case SIZE.mini:
      return {
        ...theme.typography.ParagraphXSmall,
        height: '30px',
        [paddingDir]: theme.sizing.scale200,
      };
    case SIZE.compact:
      return {
        ...theme.typography.ParagraphSmall,
        height: '36px',
        [paddingDir]: theme.sizing.scale400,
      };
    case SIZE.large:
      return {
        ...theme.typography.ParagraphLarge,
        height: '56px',
        [paddingDir]: theme.sizing.scale650,
      };
    case SIZE.default:
    default:
      return {
        ...theme.typography.ParagraphMedium,
        height: '48px',
        [paddingDir]: theme.sizing.scale550,
      };
  }
}

export const StyledListItem = styled<{|
  $isSelected: boolean,
  $size: $Keys<typeof SIZE>,
|}>('li', ({ $isSelected, $theme, $size }) => {
  return {
    ...buildStylesForSize($size, $theme),
    alignItems: 'center',
    backgroundColor: $isSelected ? $theme.colors.comboboxListItemFocus : null,
    cursor: 'default',
    display: 'flex',
    listStyle: 'none',
    ':hover': {
      backgroundColor: $isSelected ? null : $theme.colors.comboboxListItemHover,
    },
  };
});
