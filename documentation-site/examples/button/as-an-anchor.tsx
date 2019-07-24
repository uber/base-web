// @flow
import * as React from 'react';
import {Button} from 'baseui/button';

export default () => (
  <React.Fragment>
    <Button $as="a" href="https://styletron.org" target="_blank">
      Visit the Styletron docs
    </Button>
  </React.Fragment>
);
