import * as React from 'react';
import {Override} from '../overrides';

export interface FLOATING_MARKER_ANCHOR_POSITIONS {
  none: 'none';
  topLeft: 'top-left';
  topRight: 'top-right';
  bottomRight: 'bottom-right';
  bottomLeft: 'bottom-left';
}

export interface NEEDLE_SIZES {
  none: 'none';
  short: 'short';
  medium: 'medium';
  tall: 'tall';
}

export interface PINHEAD_SIZES_SHAPES {
  xSmallCircle: 'x-small-circle';
  xSmallSquare: 'x-small-square';
  small: 'small';
  medium: 'medium';
  large: 'large';
}

export interface PINHEAD_TYPES {
  floating: 'floating';
  fixed: 'fixed';
}

export interface FLOATING_MARKER_SIZES {
  small: 'small';
  medium: 'medium';
  large: 'large';
}

export interface FLOATING_MARKER_ANCHOR_TYPES {
  round: 'round';
  square: 'square';
}

export type NeedleSizeT = NEEDLE_SIZES[keyof NEEDLE_SIZES];
export type PinHeadT = PINHEAD_TYPES[keyof PINHEAD_TYPES];
export type PinHeadSizeT = PINHEAD_SIZES_SHAPES[keyof PINHEAD_SIZES_SHAPES];
export type AnchorPositionsT = FLOATING_MARKER_ANCHOR_POSITIONS[keyof FLOATING_MARKER_ANCHOR_POSITIONS];
export type FloatingMarkerSizeT = FLOATING_MARKER_SIZES[keyof FLOATING_MARKER_SIZES];
export type FloatingMarkerAnchorTypeT = FLOATING_MARKER_ANCHOR_TYPES[keyof FLOATING_MARKER_ANCHOR_TYPES];

export type FixedMarkerOverridesT = {
  Root?: Override<any>;
  InnerAnchor?: Override<any>;
  OuterAnchor?: Override<any>;
  PinHead?: Override<any>;
  PinHeadContent?: Override<any>;
  PinHeadContainer?: Override<any>;
  Needle?: Override<any>;
  DragShadow?: Override<any>;
  DragShadowContainer?: Override<any>;
  DragContainer?: Override<any>;
};

export type FixedMarkerPropsT = {
  size?: PinHeadSizeT;
  needle?: NeedleSizeT;
  label?: string;
  startEnhancer?: (props: {size: number}) => React.ReactNode;
  endEnhancer?: (props: {size: number}) => React.ReactNode;
  color?: string;
  background?: string;
  dragging?: boolean;
  overrides?: FixedMarkerOverridesT;
};

export type FloatingMarkerOverridesT = {
  Root?: Override<any>;
  InnerAnchor?: Override<any>;
  OuterAnchor?: Override<any>;
  PinHead?: Override<any>;
  PinHeadContent?: Override<any>;
  PinHeadContainer?: Override<any>;
  AnchorContainer?: Override<any>;
};

export type FloatingMarkerPropsT = {
  color?: string;
  background?: string;
  label?: string;
  anchor?: AnchorPositionsT;
  endEnhancer?: (props: {size: number}) => React.ReactNode;
  startEnhancer?: (props: {size: number}) => React.ReactNode;
  anchorType?: FloatingMarkerAnchorTypeT;
  size?: FloatingMarkerSizeT;
  overrides?: FloatingMarkerOverridesT;
};

export const FLOATING_MARKER_ANCHOR_POSITIONS: FLOATING_MARKER_ANCHOR_POSITIONS;
export const NEEDLE_SIZES: NEEDLE_SIZES;
export const PINHEAD_SIZES_SHAPES: PINHEAD_SIZES_SHAPES;
export const PINHEAD_TYPES: PINHEAD_TYPES;
export const FLOATING_MARKER_ANCHOR_TYPES: FLOATING_MARKER_ANCHOR_TYPES;
export const FLOATING_MARKER_SIZES: FLOATING_MARKER_SIZES;

export const FixedMarker: React.FC<FixedMarkerPropsT>;
export const FloatingMarker: React.FC<FloatingMarkerPropsT>;
