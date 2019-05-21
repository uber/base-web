/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagMR(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="MRa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="MRb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#108B4D" />
          <stop offset="100%" stopColor="#0A6135" />
        </linearGradient>
        <linearGradient id="MRc" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFC941" />
          <stop offset="100%" stopColor="#FFC42E" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#MRa)" d="M0 0h21v15H0z" />
        <path fill="url(#MRb)" d="M0 0h21v15H0z" />
        <path
          fill="url(#MRc)"
          d="M14.86 5.8a4.5 4.5 0 1 1-8.89 0 4.501 4.501 0 0 0 8.89 0zm-4.36.623l-1.236.881.456-1.448-1.22-.903 1.518-.014L10.5 3.5l.482 1.44 1.518.013-1.22.903.456 1.448-1.236-.88z"
        />
      </g>
    </svg>
  );
}
