import {ref} from '@vue/runtime-core'
import {keyboard} from "../../utils/keyboard";
import {game} from "../../Game";

export default function movePlane() {
  const viewWidth = 750
  const viewHeight = 1080
  const planeWidth = 275
  const planeHeight = 400
  const maxX = viewWidth - planeWidth
  const maxY = viewHeight - planeHeight
  
  const planeX = ref(maxX / 2)
  const planeY = ref(maxY)
  
  const speed = 10
  const moveHandler = {
    left:()=>{
      planeX.value -= speed
      if (planeX.value <= 0) {
        planeX.value = 0
      }
    },
    right: () => {
      planeX.value += speed
      if (planeX.value >= maxX) {
        planeX.value = maxX
      }
    },
    up:() => {
      planeY.value -= speed
      if (planeY.value <= 0) {
        planeY.value = 0
      }
    },
    down:() => {
      planeY.value += speed
      if (planeY.value >= maxY) {
        planeY.value = maxY
      }
    }
  }
  
  const left = keyboard(37),
    up = keyboard(38),
    right = keyboard(39),
    down = keyboard(40);
  const keyboardEvents = [
    {key:'left',left},
    {key:'right',right},
    {key:'up',up},
    {key:'down',down},
  ]
  keyboardEvents.forEach(event => {
    const { key } = event
    const currentEvent = event[key]
    currentEvent.press = () => {
      game.ticker.add(moveHandler[key])
    }
    currentEvent.release = () => {
      game.ticker.remove(moveHandler[key])
    }
  })
  return {
    planeX,
    planeY
  }
  
}
