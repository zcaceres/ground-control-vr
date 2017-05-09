import React from 'react'
import {Entity} from 'aframe-react'

const generateWarningLight = (hexCode, strikes) => (<Entity id="warningLight" position="0 5.3 0.4" primitive="a-cone" geometry={{radiusBottom: 0.21, radiusTop: 0.33, height: 0.3}} opacity="0.4" transparent animation={{property: 'material.color', from: '#000', to: `${hexCode}`, ease: 'linear', loop: 'true', direction: 'ease-in'}}>
<Entity primitive="a-light" type="hemisphere" position="0, 0, 0" intensity='5' animation={{property: 'color', from: '#000', to: `${hexCode}`, loop: 'true', ease: 'ease-in', direction: 'alternate'}} />
{/* Uncomment this line to enable alarm sound (disabled to avoid going crazy while testing)<Entity primitive='a-sound' src="#alarm" loop="true" autoplay="true" position="0 0 0" /> */}
</Entity>)

export const getWarningLightOfColor = strikes => {
  switch (strikes) {
    case 2:
      return generateWarningLight('#900', strikes)
    case 1:
      return generateWarningLight('#FFA500', strikes)
    case 0:
      return generateWarningLight('#FFF', strikes)
    default:
      // THIS IS THE WHEN YOU DIE
      return generateWarningLight('#900', strikes)
  }
}
