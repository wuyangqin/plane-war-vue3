import {defineComponent, h, reactive} from "@vue/runtime-core";
import Map from "../components/Map";
import Plane from "../components/plane/Plane";
import movePlane from '../components/plane/movePlane';

export default defineComponent({
  setup() {
    const {planeX, planeY} = movePlane()
    const planeInfo = reactive({x: planeX, y: planeY})
    return {planeInfo};
  },
  render(context) {
    return h('container', [
      h(Map),
      h(Plane, {x: context.planeInfo.x, y: context.planeInfo.y}),
    ])
  }
})

