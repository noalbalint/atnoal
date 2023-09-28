import React from 'react'
import Velofood from './Velofood'
import VelofoodMobile from './VelofoodMobile';

export default function VelofoodWrapper(): React.ReactElement {
  if (window.innerWidth < 1000) {
    return VelofoodMobile();
  }

  return Velofood();
}
