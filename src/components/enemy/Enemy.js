import {defineComponent, h, ref,toRefs} from "@vue/runtime-core";
import enemyImg from '../../assets/enemy.png'

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
            texture: enemyImg,
            x: context.x,
            y: context.y
          }
        ),
      ]
    )
  }
})
