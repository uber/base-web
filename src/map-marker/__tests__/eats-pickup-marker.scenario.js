/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';
import {
  FixedMarker,
  PINHEAD_SIZES_SHAPES,
  NEEDLE_SIZES,
  BADGE_ENHANCER_SIZES,
} from '../index.js';
import TileGrid from './tile-grid.js';
import ReactMapGL, {Marker, Layer, Source} from 'react-map-gl';
import Upload from '../../icon/upload.js';
import Search from '../../icon/search.js';

import {useStyletron} from '../../styles/index.js';

const uberHq = {
  latitude: 37.768495131168336,
  longitude: -122.38856031220648,
};

export function Scenario() {
  const [viewport, setViewport] = React.useState({
    ...uberHq,
    zoom: 14,
  });

  const [, theme] = useStyletron();

  return (
    <>
      <TileGrid cols={6} customizerOptions={[]}></TileGrid>
      <ReactMapGL
        {...viewport}
        width="100%"
        height="760px"
        onViewportChange={viewport => setViewport(viewport)}
        mapboxApiAccessToken="pk.eyJ1IjoiYmFiYnN1YmVyIiwiYSI6ImNrdThqeGkxZTVwb3kyd3BpZGRlc2NlOXUifQ.qh-EtXm2DJQZVprWUJ-GFQ"
      >
        <Marker latitude={uberHq.latitude} longitude={uberHq.longitude}>
          <FixedMarker
            size={PINHEAD_SIZES_SHAPES.large}
            needle={NEEDLE_SIZES.none}
            startEnhancer={() => <>3.9</>}
            overrides={{
              Root: {
                style: () => ({
                  transform: `translate(-50%, -100%)`,
                }),
              },
              BadgeEnhancer: {
                style: () => ({
                  boxShadow: theme.lighting.shadow600,
                }),
              },
            }}
            labelEnhancerContent="Uber Eats"
            badgeEnhancerSize={BADGE_ENHANCER_SIZES.mediumIcon}
            badgeEnhancerBackground={theme.colors.backgroundPrimary}
            badgeEnhancerContent={({size}) => (
              <Search size={16} color="green" />
            )}
            background={theme.colors.backgroundPrimary}
            color={theme.colors.primaryA}
          />
        </Marker>

        <Marker latitude={uberHq.latitude} longitude={uberHq.longitude + 0.006}>
          <FixedMarker
            size={PINHEAD_SIZES_SHAPES.large}
            needle={NEEDLE_SIZES.short}
            labelEnhancerContent="Uber Eats"
            startEnhancer={({size}) => <Upload size={size} />}
            overrides={{
              Root: {
                style: () => ({
                  transform: `translate(-50%, -100%)`,
                }),
              },
            }}
          />
        </Marker>
        <Source
          id="my-data"
          type="geojson"
          data={{
            type: 'FeatureCollection',
            features: [
              [uberHq.longitude, uberHq.latitude],
              [uberHq.longitude + 0.006, uberHq.latitude],
            ].map(coordinates => ({
              type: 'Feature',
              geometry: {type: 'Point', coordinates},
            })),
          }}
        >
          <Layer
            {...{
              id: 'point',
              type: 'circle',
              paint: {
                'circle-radius': 12,
                'circle-color': 'red',
              },
            }}
          />
        </Source>
      </ReactMapGL>
    </>
  );
}
