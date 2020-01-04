/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import {useStyletron} from 'baseui';

const monospace = {
  fontFamily:
    'SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace',
};

export function Type({value}: {value: string}) {
  const [css, theme] = useStyletron();
  return (
    <div className={css({marginBottom: theme.sizing.scale1000})}>
      <div
        className={css({
          ...theme.typography[value],
          ...monospace,
          marginBottom: theme.sizing.scale400,
        })}
      >
        {value}
      </div>
      <div
        className={css({
          ...theme.typography.ParagraphMedium,
          ...monospace,
          marginBottom: theme.sizing.scale400,
        })}
      >
        <div>{theme.typography[value].fontSize}</div>
        <div>{theme.typography[value].fontWeight}</div>
        <div>{theme.typography[value].lineHeight}</div>
      </div>
    </div>
  );
}
