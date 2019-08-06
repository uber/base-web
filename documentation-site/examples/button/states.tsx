import * as React from 'react';
import {Button} from 'baseui/button';
import {useStyletron} from 'baseui';

export default () => {
  const [useCss, theme] = useStyletron();
  const space = useCss({marginLeft: theme.sizing.scale300});
  return (
    <React.Fragment>
      <Button>No state</Button>
      <span className={space} />
      <Button isLoading>Loading</Button>
      <span className={space} />
      <Button isSelected>Selected</Button>
      <span className={space} />
      <Button disabled>Disabled</Button>
    </React.Fragment>
  );
};
