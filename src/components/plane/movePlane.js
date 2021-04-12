import {ref} from '@vue/runtime-core'
import {keyboard} from "../../utils/keyboard";
import {game} from "../../Game";

export default function movePlane() {
  const planeX = ref(250)
  const planeY = ref(700)
  const speed = 10
  const left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);
  const viewWidth = 750
  const viewHeight = 1080
  const planeWidth = 275
  const planeHeight = 400
  const maxX = viewWidth - planeWidth
  const maxY = viewHeight - planeHeight
  const moveLeft = () => {
    planeX.value -= speed
    if (planeX.value <= 0) {
      planeX.value = 0
    }
  }
  const moveRight = () => {
    planeX.value += speed
    if (planeX.value >= maxX) {
      planeX.value = maxX
    }
  }
  const moveUp = () => {
    planeY.value -= speed
    if (planeY.value <= 0) {
      planeY.value = 0
    }
  }
  const moveDown = () => {
    planeY.value += speed
    if (planeY.value >= maxY) {
      planeY.value = maxY
    }
  }
  left.press = () => {
    game.ticker.add(moveLeft)
  };
  left.release = () => {
    game.ticker.remove(moveLeft)
  };
  right.press = () => {
    game.ticker.add(moveRight)
  }
  right.release = () => {
    game.ticker.remove(moveRight)
  }
  up.press = () => {
    game.ticker.add(moveUp)
  }
  up.release = () => {
    game.ticker.remove(moveUp)
  }
  down.press = () => {
    game.ticker.add(moveDown)
  }
  down.release = () => {
    game.ticker.remove(moveDown)
  }
  
  return {
    planeX,
    planeY
  }
  
}
