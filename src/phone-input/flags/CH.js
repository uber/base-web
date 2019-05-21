/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagCH(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="CHa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="CHb" x1="50%" x2="50%" y1="100%" y2="0%">
          <stop offset="0%" stopColor="red" />
          <stop offset="100%" stopColor="#FF3131" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CHa)" d="M0 0h21v15H0z" />
        <path fill="url(#CHb)" d="M0 0h21v15H0z" />
        <path
          fill="url(#CHa)"
          d="M9 9H6.256A.255.255 0 0 1 6 8.744V6.256C6 6.115 6.114 6 6.256 6H9V3.256C9 3.115 9.114 3 9.256 3h2.488c.141 0 .256.114.256.256V6h2.744c.141 0 .256.114.256.256v2.488a.255.255 0 0 1-.256.256H12v2.744a.255.255 0 0 1-.256.256H9.256A.255.255 0 0 1 9 11.744V9z"
        />
      </g>
    </svg>
  );
}
