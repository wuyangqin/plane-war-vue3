// root component

import StartPage from "./views/StartPage";
import {defineComponent, h} from "@vue/runtime-core";

export default defineComponent({
  render() {
    // create vnode
    const vnode = h('container', [h(StartPage)]) // 调用 createElement
    console.log(vnode);
    return vnode
  }
})
