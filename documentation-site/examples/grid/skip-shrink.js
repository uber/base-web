// @flow

import React from 'react';
import {useStyletron} from 'baseui';
import {
  Unstable_Grid as Grid,
  Unstable_Cell as Cell,
} from 'baseui/grid';

export default () => (
  <Outer>
    <Grid>
      <Cell skip={2} span={[4, 8, 12]}>
        <Inner>1</Inner>
      </Cell>
    </Grid>
  </Outer>
);

function Outer({children}) {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        background: theme.colors.accent100,
      })}
    >
      {children}
    </div>
  );
}

function Inner({children}) {
  const [css, theme] = useStyletron();
  return (
    <div
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: theme.colors.accent200,
        color: theme.colors.accent700,
        padding: '.25rem',
      })}
    >
      {children}
    </div>
  );
}
