import {defineComponent, h} from "@vue/runtime-core";
import startPageImg from '../assets/start_page.png'
import startButton from '../assets/startBtn.png'

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
      h('sprite', {texture: startPageImg}),
      h('sprite',
        {
          texture: startButton,
          x: 226,
          y: 511,
          interactive: 'true',
          onClick:context.onClick
        }),
    ])
  }
})
