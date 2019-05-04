/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
import type {ButtonPropsT} from './types.js';

export function getSharedProps({
  disabled,
  loading,
  isSelected,
  kind,
  shape,
  size,
}: ButtonPropsT) {
  return {
    $disabled: disabled,
    $loading: loading,
    $isSelected: isSelected,
    $kind: kind,
    $shape: shape,
    $size: size,
  };
}
