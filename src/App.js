// root component

import StartPage from "./views/StartPage";
import GamePage from "./views/GamePage";
import {defineComponent, h, computed, ref} from "@vue/runtime-core";

export default defineComponent({
  setup(props, context) {
    // const currentPageName = ref('StartPage');
    const currentPageName = ref('GamePage');
    const currentPage = computed(() => {
      switch (currentPageName.value) {
        case 'StartPage':
          return StartPage;
        case 'GamePage':
          return GamePage;
      }
    })
    return {
      currentPageName,
      currentPage
    }
  },
  render(context) {
    const vnode = h('container', [
      h(context.currentPage, {
        onPageChange(e) {
          context.currentPageName = e
        }
      })
    ]) // 调用 createElement
    console.log(vnode);
    return vnode
  }
})
