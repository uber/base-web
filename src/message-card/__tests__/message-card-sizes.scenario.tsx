/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { KIND } from '../../button';
import * as React from 'react';
import { colors } from '../../tokens';
import { MessageCard } from '..';
import { IMAGE_LAYOUT } from '../constants';
import deliveryHeroItalianSvg from './images/deliveryHeroItalian.svg';
import deliveryHeroItalianPng from './images/deliveryHeroItalian@3x.png';
import deliveryLargeStrawberriesSvg from './images/deliveryLargeStrawberries.svg';
import deliveryLargeStrawberriesPng from './images/deliveryLargeStrawberries@3x.png';
import earnerLargeRiderDriverSvg from './images/earnerLargeRiderDriver.svg';
import earnerLargeRiderDriverPng from './images/earnerLargeRiderDriver@3x.png';

export function Scenario() {
  const narrowContainerStyle = {
    padding: '16px',
    width: '200px',
  };
  const wideContainerStyle = {
    padding: '16px',
    width: '840px',
  };
  const widerContainerStyle = {
    padding: '16px',
    width: '1240px',
  };
  const rowStyle = {
    display: 'flex',
    marginBottom: '32px',
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div style={rowStyle}>
        <div style={wideContainerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Save now"
            image={{ src: deliveryHeroItalianSvg }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.red200}
          />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={narrowContainerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Save now"
            image={{ src: deliveryHeroItalianSvg }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.red200}
          />
        </div>
        <div style={narrowContainerStyle}>
          <MessageCard
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Save now"
            image={{ src: deliveryLargeStrawberriesSvg, layout: IMAGE_LAYOUT.trailing }}
            onClick={() => console.log('Saved')}
          />
        </div>
        <div style={narrowContainerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            image={{ src: earnerLargeRiderDriverSvg }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.blue300}
          />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={widerContainerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Save now"
            buttonKind={KIND.tertiary}
            image={{ src: deliveryHeroItalianPng }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.green300}
          />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={narrowContainerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Save now"
            buttonKind={KIND.tertiary}
            image={{ src: deliveryHeroItalianPng }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.green300}
          />
        </div>
        <div style={narrowContainerStyle}>
          <MessageCard
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Save now"
            buttonKind={KIND.tertiary}
            image={{ src: deliveryLargeStrawberriesPng, layout: IMAGE_LAYOUT.trailing }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.white}
          />
        </div>
        <div style={narrowContainerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            image={{ src: earnerLargeRiderDriverPng }}
            onClick={() => console.log('Saved')}
            backgroundColor={colors.purple300}
          />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={wideContainerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            buttonLabel="Make it happen"
            image={{ src: deliveryHeroItalianSvg, layout: IMAGE_LAYOUT.trailing }}
            onClick={() => console.log('Made it happen')}
            backgroundColor={colors.magenta700}
          />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={narrowContainerStyle}>
          <MessageCard
            heading="Heading"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            buttonLabel="Make it happen"
            image={{ src: deliveryHeroItalianSvg, layout: IMAGE_LAYOUT.trailing }}
            onClick={() => console.log('Made it happen')}
            backgroundColor={colors.magenta700}
          />
        </div>
        <div style={narrowContainerStyle}>
          <MessageCard
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            buttonLabel="Go!"
            image={{ src: deliveryLargeStrawberriesSvg }}
            onClick={() => console.log('Gone')}
            backgroundColor={colors.teal500}
          />
        </div>
        <div style={narrowContainerStyle}>
          <MessageCard
            heading="Much longer heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            image={{ src: earnerLargeRiderDriverSvg }}
            onClick={() => console.log('Gone')}
            backgroundColor={colors.yellow700}
          />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={widerContainerStyle}>
          <MessageCard
            heading="Much longer heading"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            buttonLabel="Make it happen"
            buttonKind={KIND.tertiary}
            image={{ src: deliveryHeroItalianPng, layout: IMAGE_LAYOUT.trailing }}
            onClick={() => console.log('Made it happen')}
            backgroundColor={colors.orange600}
          />
        </div>
      </div>

      <div style={rowStyle}>
        <div style={narrowContainerStyle}>
          <MessageCard
            heading="Much longer heading"
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            buttonLabel="Make it happen"
            buttonKind={KIND.tertiary}
            image={{ src: deliveryHeroItalianPng }}
            onClick={() => console.log('Made it happen')}
            backgroundColor={colors.orange600}
          />
        </div>
        <div style={narrowContainerStyle}>
          <MessageCard
            paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            buttonLabel="Go!"
            buttonKind={KIND.tertiary}
            image={{ src: deliveryLargeStrawberriesPng }}
            onClick={() => console.log('Gone')}
            backgroundColor={colors.red700}
          />
        </div>
        <div style={narrowContainerStyle}>
          <MessageCard
            heading="Much longer heading"
            paragraph="ipsum lorem dopem topo logic hippos bananas and the rest"
            image={{ src: earnerLargeRiderDriverPng, layout: IMAGE_LAYOUT.trailing }}
            onClick={() => console.log('Gone')}
            backgroundColor={colors.cobalt700}
          />
        </div>
      </div>
    </div>
  );
}
