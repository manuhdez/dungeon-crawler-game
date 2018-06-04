import store from '../../config/store'
import * as actionTypes from '../../config/constants'

export default function handleMovement(player) {

  function getNewPosition(direction) {
    const oldPosition = store.getState().player.position

    switch(direction) {
      case 'left':
        return [oldPosition[0] - actionTypes.SPRITE_SIZE, oldPosition[1]]
      case 'up':
        return [oldPosition[0], oldPosition[1] - actionTypes.SPRITE_SIZE]
      case 'right':
        return [oldPosition[0] + actionTypes.SPRITE_SIZE, oldPosition[1]]
      case 'down':
        return [oldPosition[0], oldPosition[1] + actionTypes.SPRITE_SIZE]
    }
  }

  function dispatchMove(direction) {
    store.dispatch({
      type: 'MOVE_PLAYER',
      payload: {
        position: getNewPosition(direction)
      }
    })
  }

  function handleKeyDown(e) {
    e.preventDefault()

    switch(e.keyCode) {
      case 37:
        return dispatchMove('left')
      case 38:
        return dispatchMove('up')
      case 39:
        return dispatchMove('right')
      case 40:
        return dispatchMove('down')
      default:
        console.log(e.keyCode)
    }
  }

  window.addEventListener('keydown', e => {
    handleKeyDown(e)
  })

  return player;
}