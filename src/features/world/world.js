import React from 'react'
import Player from '../player/player';
import Map from '../map/map';

const worldStyle = {
  position: 'relative',
  width: '800px',
  height: '400px',
  margin: '20px auto'
}

const world = props => {
  return (
    <div style={worldStyle}>
      <Map />
      <Player />
    </div>
  )
}

export default world