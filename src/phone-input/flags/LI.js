/*
Copyright (c) 2018-2019 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagLI(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="LIa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="LIb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#0A3B97" />
          <stop offset="100%" stopColor="#042E7D" />
        </linearGradient>
        <linearGradient id="LIc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E6273E" />
          <stop offset="100%" stopColor="#CC162C" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#LIa)" d="M0 0h21v15H0z" />
        <path fill="url(#LIb)" d="M0 0h21v8H0z" />
        <path fill="url(#LIc)" d="M0 8h21v7H0z" />
      </g>
    </svg>
  );
}
