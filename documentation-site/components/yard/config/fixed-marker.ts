import {
  FixedMarker,
  PINHEAD_SIZES_SHAPES,
  NEEDLE_SIZES,
} from 'baseui/map-marker';
import {PropTypes} from 'react-view';
import {TConfig} from '../types';

const fixedMarkerPropsType = require('!!extract-react-types-loader!../../../../src/map-marker/fixed-marker.js');

export const theme = [];

export const fixedMarkerProps = {
  label: {
    value: 'Uber HQ',
    type: PropTypes.String,
    description: 'Text to display inside of the marker.',
    stateful: true,
  },
  dragging: {
    value: false,
    type: PropTypes.Boolean,
    description:
      'Renders the component with circular shadow to represent dragging.',
    defaultValue: false,
  },
  size: {
    value: 'PINHEAD_SIZES_SHAPES.medium',
    enumName: 'PINHEAD_SIZES_SHAPES',
    defaultValue: 'PINHEAD_SIZES_SHAPES.medium',
    options: PINHEAD_SIZES_SHAPES,
    type: PropTypes.Enum,
    description: 'Size of the pinhead (top container) of the marker.',
    imports: {
      'baseui/map-marker': {
        named: ['PINHEAD_SIZES_SHAPES'],
      },
    },
  },
  needle: {
    value: 'NEEDLE_SIZES.medium',
    enumName: 'NEEDLE_SIZES',
    defaultValue: 'NEEDLE_SIZES.medium',
    options: NEEDLE_SIZES,
    type: PropTypes.Enum,
    description: 'Size of the needle (bottom element) of the marker.',
    imports: {
      'baseui/map-marker': {
        named: ['NEEDLE_SIZES'],
      },
    },
  },
  startEnhancer: {
    value: undefined,
    placeholder: '() => <span>$</span>',
    type: PropTypes.Function,
    description:
      'Icon or element to render in the leading slot (before the label).',
  },
  endEnhancer: {
    value: undefined,
    placeholder: '() => <span>?</span>',
    type: PropTypes.Function,
    description:
      'Icon or element to render in the trailing slot (after the label).',
  },
  background: {
    value: undefined,
    placeholder: '#000',
    type: PropTypes.String,
    description: 'Color to render for background.',
  },
  color: {
    value: undefined,
    placeholder: '#fff',
    type: PropTypes.String,
    description: 'Color to render for content.',
  },
};

const FixedMarkerConfig: TConfig = {
  componentName: 'FixedMarker',
  imports: {
    'baseui/map-marker': {
      named: ['FixedMarker'],
    },
  },
  scope: {
    FixedMarker,
    NEEDLE_SIZES,
    PINHEAD_SIZES_SHAPES,
  },
  theme,
  props: {
    ...fixedMarkerProps,
    overrides: {
      value: undefined,
      type: PropTypes.Custom,
      description: 'Lets you customize all aspects of the component.',
      custom: {
        names: [
          'Root',
          'PinHead',
          'PinHeadContent',
          'PinHeadContainer',
          'Needle',
          'DragShadow',
          'DragShadowContainer',
          'DragContainer',
        ],
        sharedProps: {},
      },
    },
  },
  mapTokensToProps: {
    FixedMarker: fixedMarkerPropsType,
  },
};

export default FixedMarkerConfig;
