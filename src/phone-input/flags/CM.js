/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagCM(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="CMa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="CMb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFDC44" />
          <stop offset="100%" stopColor="#FDD216" />
        </linearGradient>
        <linearGradient id="CMc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#059170" />
          <stop offset="100%" stopColor="#007B5E" />
        </linearGradient>
        <linearGradient id="CMd" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#E21A30" />
          <stop offset="100%" stopColor="#CE1126" />
        </linearGradient>
        <linearGradient id="CMe" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFDC42" />
          <stop offset="100%" stopColor="#FDD217" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#CMa)" d="M0 0h21v15H0z" />
        <path fill="url(#CMb)" d="M10 0h11v15H10z" />
        <path fill="url(#CMc)" d="M0 0h7v15H0z" />
        <path fill="url(#CMd)" d="M7 0h7v15H7z" />
        <path fill="url(#CMb)" d="M14 0h7v15h-7z" />
        <path
          fill="url(#CMe)"
          d="M10.5 8.475L9.03 9.523 9.574 7.8l-1.45-1.074 1.804-.016L10.5 5l.573 1.711 1.805.016-1.45 1.074.541 1.722z"
        />
      </g>
    </svg>
  );
}
