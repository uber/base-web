/*
Copyright (c) 2018 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow
// BASEUI-GENERATED-FLAG-COMPONENT
// DO NOT EDIT THIS FILE DIRECTLY

import * as React from 'react';

export default function FlagFM(props: {width: string}) {
  return (
    <svg viewBox="0 0 21 15" width={props.width}>
      <defs>
        <linearGradient id="FMa" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF" />
          <stop offset="100%" stopColor="#F0F0F0" />
        </linearGradient>
        <linearGradient id="FMb" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor="#95CEF5" />
          <stop offset="100%" stopColor="#78B3DC" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path fill="url(#FMa)" d="M0 0h21v15H0z" />
        <path fill="url(#FMb)" d="M0 0h21v15H0z" />
        <path
          fill="url(#FMa)"
          d="M10.5 4.32l-1.176.798.396-1.365-1.122-.871 1.42-.045L10.5 1.5l.482 1.337 1.42.045-1.122.871.396 1.365L10.5 4.32zm0 8l-1.176.798.396-1.365-1.122-.871 1.42-.045L10.5 9.5l.482 1.337 1.42.045-1.122.871.396 1.365-1.176-.798zm4-4l-1.176.798.396-1.365-1.122-.871 1.42-.045L14.5 5.5l.482 1.337 1.42.045-1.122.871.396 1.365L14.5 8.32zm-8 0l-1.176.798.396-1.365-1.122-.871 1.42-.045L6.5 5.5l.482 1.337 1.42.045-1.122.871.396 1.365L6.5 8.32z"
        />
      </g>
    </svg>
  );
}
