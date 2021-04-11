// root component

import {defineComponent, h} from "@vue/runtime-core";

export default defineComponent({
  render() {
    // create vnode
    // <rect x=100 y=100>阿咩咩</rect>
    // 第三个参数是子元素
    const vnode = h("rect",{x:100,y:50},[
      '阿咩咩',
      h("circle",{x:150,y:200})
    ]) // 调用 createElement
    console.log(vnode);
    return vnode
  }
})
