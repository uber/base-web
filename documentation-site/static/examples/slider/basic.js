// @flow
import * as React from 'react';
import {Slider} from 'baseui/slider';

export default class Basic extends React.Component<{}, {value: number[]}> {
  state = {value: [60]};
  render() {
    return (
      <Slider
        value={this.state.value}
        onChange={({value}) => this.setState({value})}
      />
    );
  }
}
