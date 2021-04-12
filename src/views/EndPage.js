import {defineComponent, h} from "@vue/runtime-core";
import endPageImg from '../assets/end_page.jpg'
import restartButton from '../assets/restartBtn.png'

export default defineComponent({
  setup(props,context){
    const onClick = () => {
      context.emit('pageChange','GamePage')
    }
    return {
      onClick
    }
  },
  render(context) {
    return h('container', [
      h('sprite', {texture: endPageImg}),
      h('sprite',
        {
          texture: restartButton,
          x: 226,
          y: 511,
          interactive: 'true',
          onClick:context.onClick
        }),
    ])
  }
})
