import {defineComponent, h, ref,toRefs} from "@vue/runtime-core";
import planeImg from '../../assets/plane.png'

export default defineComponent({
  props:['x','y'],
  setup(props, context) {
    const {x,y}= toRefs(props)
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
