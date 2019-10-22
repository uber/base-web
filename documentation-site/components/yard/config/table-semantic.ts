import {Unstable_Table} from 'baseui/table-semantic';
import {PropTypes} from '../const';
import {TConfig} from '../types';

const TableSemanticConfig: TConfig = {
  imports: {
    'baseui/table-semantic': {
      named: ['Unstable_Table'],
    },
  },
  scope: {Unstable_Table},
  theme: [
    'tableHeadBackgroundColor',
    'tableBackground',
    'tableStripedBackground',
    'tableFilter',
    'tableFilterHeading',
    'tableFilterBackground',
    'tableFilterFooterBackground',
  ],
  props: {
    columns: {
      value: `['Name', 'Age', 'Address']`,
      type: PropTypes.Array,
      description: 'Table columns. Data passed to each header cell.',
    },
    data: {
      value: `[
  ['Sarah Brown', 31, '100 Broadway st. New York City, New York'],
  ['Jane Smith', 32, '100 Market st. San Francisco, California'],
]`,
      type: PropTypes.Array,
      description: 'Table rows. Data passed to each row and cell',
    },
    horizontalScrollWidth: {
      value: undefined,
      type: PropTypes.String,
      description: 'Table width fills this provided value.',
    },
    overrides: {
      value: undefined,
      type: PropTypes.Overrides,
      description: 'Lets you customize all aspects of the component.',
      names: [
        'Root',
        'Table',
        'TableHead',
        'TableHeadRow',
        'TableHeadCell',
        'TableBody',
        'TableBodyRow',
        'TableBodyCell',
      ],
      sharedProps: {},
    },
  },
};

export default TableSemanticConfig;
