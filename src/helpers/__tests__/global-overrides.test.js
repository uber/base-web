/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/

// @flow

import * as React from 'react';
import {
  fireEvent,
  getByTestId,
  getByText,
  render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect.js';
import {withOverrides} from '../overrides.js';
import type {OverrideObjectT} from '../overrides.js';
import ThemeProvider from '../../styles/theme-provider.js';
import BaseProvider from '../base-provider.js';

type withOverridesT = {
  overrides: OverrideObjectT,
  forwardedRef?: React.Ref<any>,
};

describe('Global Overrides', () => {
  test('passes global overrides through ThemeProvider', () => {
    // Mock behavior of baseui component
    const TestElement = (props: withOverridesT) => {
      return (
        <div {...props.overrides.props} style={props.overrides.style}></div>
      );
    };
    const TestComponent = withOverrides(TestElement, 'TestComponent');
    const {container} = render(
      // $FlowFixMe
      <ThemeProvider
        overrides={{
          TestComponent: {
            props: {
              'data-testid': 'global-overrides',
            },
            style: {
              color: 'red',
            },
          },
        }}
      >
        {/* $FlowFixMe */}
        <TestComponent />
      </ThemeProvider>,
    );
    const testComponent = getByTestId(container, 'global-overrides');
    expect(testComponent).toBeTruthy();
    expect(testComponent).toHaveStyle('color: red');
  });
  test('passes global overrides through BaseProvider', () => {
    // Mock behavior of baseui component
    const TestElement = (props: withOverridesT) => {
      return (
        <div {...props.overrides.props} style={props.overrides.style}></div>
      );
    };
    const TestComponent = withOverrides(TestElement, 'TestComponent');
    const {container} = render(
      // $FlowFixMe
      <BaseProvider
        overrides={{
          TestComponent: {
            props: {
              'data-testid': 'global-overrides',
            },
            style: {
              color: 'red',
            },
          },
        }}
      >
        {/* $FlowFixMe */}
        <TestComponent />
      </BaseProvider>,
    );
    const testComponent = getByTestId(container, 'global-overrides');
    expect(testComponent).toBeTruthy();
    expect(testComponent).toHaveStyle('color: red');
  });
  test('passes ref successfully', () => {
    /** Create nested forwardRefs */
    const TestElement = (props: {
      overrides?: OverrideObjectT,
      forwardedRef?: React.Ref<any>,
    }) => {
      return <input ref={props.forwardedRef}></input>;
    };
    const ForwardingElement = React.forwardRef<withOverridesT, HTMLElement>(
      (props: withOverridesT, ref) => (
        <TestElement {...props} forwardedRef={ref} />
      ),
    );
    const TestComponent = withOverrides(ForwardingElement, 'ForwardingElement');
    const ToRender = ({mockFn}: any) => {
      const ref = React.createRef();
      const handleClick = () => {
        if (!ref.current) return;
        mockFn();
        ref.current.textContent = 'called';
      };
      return (
        // $FlowFixMe
        <ThemeProvider
          overrides={{
            ForwardingElement: {
              props: {
                'data-testid': 'global-overrides',
              },
            },
          }}
        >
          {/* $FlowFixMe */}
          <TestComponent ref={ref} />
          <button
            onClick={() => {
              handleClick();
            }}
            data-testid="test-btn"
          ></button>
        </ThemeProvider>
      );
    };
    const mock = jest.fn();
    const {container} = render(<ToRender mockFn={mock}></ToRender>);
    fireEvent.click(getByTestId(container, 'test-btn'));
    expect(mock).toBeCalledTimes(1);
    expect(getByText(container, 'called')).toBeTruthy();
  });
});
