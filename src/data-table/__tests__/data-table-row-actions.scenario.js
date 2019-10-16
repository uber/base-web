/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {useStyletron} from '../../styles/index.js';

import BooleanColumn from '../column-boolean.js';
import CategoricalColumn from '../column-categorical.js';
import CustomColumn from '../column-custom.js';
import NumericalColumn from '../column-numerical.js';
import StringColumn from '../column-string.js';
import {COLUMNS, NUMERICAL_FORMATS} from '../constants.js';
import {Unstable_DataTable} from '../data-table.js';

import {ArrowUp} from '../../icon/index.js';

export const name = 'data-table-row-actions';

const columns = [
  StringColumn({title: 'Movie'}),
  CategoricalColumn({title: 'Genre'}),
  NumericalColumn({
    title: 'Production Budget (millions)',
    format: NUMERICAL_FORMATS.ACCOUNTING,
  }),
  NumericalColumn({
    title: 'Box Office (millions)',
    format: NUMERICAL_FORMATS.ACCOUNTING,
  }),
  NumericalColumn({title: 'ROI', precision: 2}),
  NumericalColumn({title: 'Rating IMDB', precision: 2}),
];

const rows = [
  ['Avatar', 'Action', 237, 2784, 11.7, 8.0],
  ['The Blind Side', 'Drama', 29, 309, 10.7, 7.6],
  ['The Dark Knight', 'Action', 185, 1005, 5.4, 9.0],
  ['ET: The Extra-Terrestrial', 'Drama', 11, 793, 75.5, 7.9],
  ['Finding Nemo', 'Adventure', 94, 940, 10.0, 8.1],
  ['Ghostbusters', 'Comedy', 144, 229, 1.6, 7.8],
  ['The Hunger Games', 'Thriller/Suspense', 78, 649, 8.3, 7.2],
  ['Iron Man 3', 'Action', 178, 1215, 6.8, 7.6],
  ['Jurassic Park', 'Action', 53, 1030, 19.4, 8.0],
  ['King Kong', 'Adventure', 207, 551, 2.7, 7.3],
  ['The Lion King', 'Adventure', 115, 577, 5.0, 8.0],
  ['Monsters, Inc.', 'Adventure', 115, 577, 5.0, 8.0],
  ['The Twilight Saga: New Moon', 'Drama', 50, 710, 14.2, 4.5],
  ['Oz the Great and Powerful', 'Adventure', 160, 493, 3.1, 6.6],
  [
    `Pirates of the Caribbean: Dead Man's Chest`,
    'Adventure',
    225,
    1066,
    4.7,
    7.3,
  ],
  ['Quantum of Solace', 'Action', 200, 586, 2.9, 6.7],
  ['Raiders of the Lost Ark', 'Adventure', 18, 390, 21.7, 8.7],
  ['Star Wars Ep. I: The Phantom Menace', 'Adventure', 115, 1027, 8.9, 6.5],
  ['Titanic', 'Thriller/Suspense', 200, 2187, 10.9, 7.6],
  ['Up', 'Adventure', 175, 735, 4.2, 8.3],
  ['The Vow', 'Drama', 30, 196, 6.5, 6.7],
  ['The War of the Worlds', 'Action', 132, 704, 5.3, 6.5],
  ['X-Men: The Last Stand', 'Action', 210, 459, 2.2, 6.8],
  [`You've Got Mail`, 'Drama', 65, 251, 3.9, 6.3],
  ['Zookeeper', 'Romantic Comedy', 80, 170, 2.1, 5.0],
].map(r => ({id: r[0], data: r}));

const rowActions = [
  {label: 'hello', onClick: ({row}) => console.log(row), renderIcon: ArrowUp},
];

export const component = () => {
  return (
    <div style={{height: '500px', width: '1100px'}}>
      <Unstable_DataTable
        columns={columns}
        rows={rows}
        rowActions={rowActions}
      />
    </div>
  );
};
