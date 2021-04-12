import {defineComponent, h} from "@vue/runtime-core";
import Map from "../components/Map";
import Plane from "../components/plane/Plane";

export default defineComponent({
  render() {
    return h('container', [
      h(Map),
      h(Plane),
    ])
  }
})
