import React from 'react'
import { connect } from 'react-redux'
import handleMovement from './movement'
import walkSprite from '../player/player_walk.png'

const player = props => {
  return (
    <div
      style={{
        position: 'absolute',
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${walkSprite}')`,
        backgroundPosition: '0 0',
        width: '40px',
        height: '40px'
      }}
    />
  )
}

const mapStateToProps = state => {
  return {
    ...state.player
  }
}

export default connect(mapStateToProps)(handleMovement(player));