/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { styled } from '../styles';

export const StyledRoot = styled<'div', {}>('div', ({}) => {
  return { display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' };
});

export const StyledBottomContainer = styled<'div', { $position: string | false }>(
  'div',
  ({ $position, $theme }) => {
    const baseStyle = {
      borderTopLeftRadius: $theme.borders.radius500,
      borderTopRightRadius: $theme.borders.radius500,
      backgroundColor: $theme.colors.backgroundPrimary,
    };

    return $position !== false
      ? {
          width: '100%',
          position: 'absolute',
          top: $position,
          left: 0,
          transition: 'top 300ms ease-in',
          ...baseStyle,
        }
      : { ...baseStyle };
  }
);

export const StyledHeader = styled<'div', {}>('div', ({ $theme }) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: $theme.sizing.scale300,
}));

export const StyledHeaderGrid = styled<
  'div',
  { $hasLeadingAction: boolean; $hasTrailingAction: boolean }
>('div', ({ $theme, $hasLeadingAction, $hasTrailingAction }) => ({
  display: 'grid',
  gridTemplateColumns: 'auto 1fr auto',
  alignItems: 'center',
  paddingRight: $hasTrailingAction ? $theme.sizing.scale300 : $theme.sizing.scale600,
  paddingLeft: $hasLeadingAction ? $theme.sizing.scale300 : $theme.sizing.scale600,
  paddingBottom: $theme.sizing.scale200,
}));

export const StyledHeaderInner = styled<
  'div',
  { $isDraggable: boolean; $hasTitle: boolean; $hasDescription: boolean }
>('div', ({ $isDraggable, $hasTitle, $hasDescription }) => {
  // TODO: change this to using $theme
  let height = $hasTitle && $hasDescription ? 56 : $hasTitle ? 48 : $hasDescription ? 32 : 24;
  if ($isDraggable) {
    height -= 4;
  }
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: `${height}px`,
    maxWidth: '100%',
    overflow: 'hidden',
    gridColumn: '2 / 3',
  };
});

export const StyledContent = styled<'div', {}>('div', ({}) => ({
  height: '100%',
  overflow: 'auto',
}));

// TODO: should this be an h1 or similar?
export const StyledTitle = styled<'div', {}>('div', ({ $theme }) => ({
  color: $theme.colors.contentPrimary,
  maxWidth: 'inherit',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  ...$theme.typography.LabelLarge,
}));

export const StyledDescription = styled<'div', {}>('div', ({ $theme }) => ({
  color: $theme.colors.contentSecondary,
  display: '-webkit-box',
  '-webkit-line-clamp': 2,
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
  // maxWidth: 'inherit',
  // overflow: 'hidden',
  // // whiteSpace: 'nowrap',
  // textOverflow: 'ellipsis',
  // // * setting maxHeight to twice the line height to force truncation after two lines
  // maxHeight: '48px',
  ...$theme.typography.ParagraphMedium,
}));

export const StyledGrabber = styled<'button', {}>('button', ({ $theme }) => ({
  // reset button styles
  '-webkit-appearance': 'none',
  borderRadius: 0,
  textAlign: 'inherit',
  background: 'none',
  boxShadow: 'none',
  padding: 0,
  cursor: 'pointer',
  border: 'none',
  color: 'inherit',
  font: 'inherit',
  // other styles
  // position: 'absolute',
  // top: '-24px',
  width: '100%',
  // paddingTop: '34px',
  paddingRight: 'auto',
  paddingBottom: '12px',
  paddingLeft: 'auto',
  display: 'flex',
  justifyContent: 'center',
  position: 'relative',
  // interior
  ':before': {
    content: '""',
    position: 'absolute',
    top: '-32px',
    height: '32px',
    width: '100%',
  },
  ':after': {
    content: '""',
    height: $theme.sizing.scale100,
    width: $theme.sizing.scale1200,
    background: $theme.colors.borderOpaque,
    borderRadius: '100px',
    margin: '0 auto',
  },
}));
