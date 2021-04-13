import {defineComponent, h, toRefs} from "@vue/runtime-core";
import {keyboard} from "../../utils/keyboard";
import planeImg from '../../assets/plane.png'

export default defineComponent({
  props: ['x', 'y'],
  setup(props, context) {
    const {x, y} = toRefs(props)
    let space = keyboard(32)
    space.press = () => {
      context.emit('shootBullet', {x: x.value + 100, y: y.value})
    }
    return {
      x,
      y
    }
  },
  render(context) {
    return h(
      'container',
      [
        h('sprite',
          {
            texture: planeImg,
            x: context.x,
            y: context.y
          }
        ),
      ]
    )
  }
})
