import {defineComponent, h, ref} from "@vue/runtime-core";
import movePlane from './movePlane'
import planeImg from '../../assets/plane.png'


export default defineComponent({
  setup(props, context) {
    const { planeX, planeY } = movePlane()
    return {
      planeX,
      planeY
    }
  },
  render(context) {
    return h(
      'container',
      [
        h('sprite',
          {
            texture: planeImg,
            x: context.planeX,
            y: context.planeY
          }
        ),
      ]
    )
  }
})
