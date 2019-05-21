/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagSD(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="SDa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="SDb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#262626" />
          <stop offset="100%" stopColor="#0D0D0D" />
        </linearGradient>
        <linearGradient id="SDc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#EA1F44" />
          <stop offset="100%" stopColor="#D01739" />
        </linearGradient>
        <linearGradient id="SDd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#12933B" />
          <stop offset="100%" stopColor="#0D722D" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#SDa)" d="M0 0h21v15H0z" />
        <path fill="url(#SDb)" d="M0 10h21v5H0z" />
        <path fill="url(#SDc)" d="M0 0h21v5H0z" />
        <path fill="url(#SDa)" d="M0 5h21v5H0z" />
        <path fill="url(#SDd)" d="M0 0l10 7.5L0 15z" />
      </g>
    </svg>
  );
}
