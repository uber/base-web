// @flow
import React from 'react';
import {shallow} from 'enzyme';
import {TextareaContainer, Textarea} from '../styled-components';
import {SIZE} from '../../input';

test('Textarea - TextareaContainer - basic render', () => {
  const component = shallow(
    <TextareaContainer $size={SIZE.default}>
      <span />
    </TextareaContainer>,
  );
  expect(component.instance().getStyles()).toMatchSnapshot(
    'TextareaContainer has correct default styles',
  );
  component.setProps({
    $isFocused: true,
  });
  expect(component.instance().getStyles()).toMatchSnapshot(
    'TextareaContainer has correct styles when focused',
  );
  component.setProps({
    $size: SIZE.compact,
  });
  expect(component.instance().getStyles()).toMatchSnapshot(
    'TextareaContainer has correct styles when compact',
  );
  component.setProps({
    $error: true,
  });
  expect(component.instance().getStyles()).toMatchSnapshot(
    'TextareaContainer has correct styles when error',
  );
  component.setProps({
    $disabled: true,
  });
  expect(component.instance().getStyles()).toMatchSnapshot(
    'TextareaContainer has correct styles when disabled',
  );
});

test('Textarea - Textarea - basic render', () => {
  const component = shallow(<Textarea $size={SIZE.default} />);
  expect(component.instance().getStyles()).toMatchSnapshot(
    'Textarea has correct default styles',
  );
  component.setProps({
    $size: SIZE.compact,
    $disabled: true,
  });
  expect(component.instance().getStyles()).toMatchSnapshot(
    'Textarea has correct styles when compact and disabled',
  );
});
