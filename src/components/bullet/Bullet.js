import {defineComponent, h, ref, toRefs} from "@vue/runtime-core";
import bulletImg from '../../assets/bullet.png'

export default defineComponent({
  props: ['x', 'y'],
  setup(props, context) {
    const {x, y} = toRefs(props)
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
            texture: bulletImg,
            x: context.x,
            y: context.y
          }
        ),
      ]
    )
  }
})
