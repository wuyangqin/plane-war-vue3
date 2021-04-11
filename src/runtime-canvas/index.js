import {createRenderer} from "@vue/runtime-core";

import {Graphics,Text} from "pixi.js";

const renderer = createRenderer({
  createElement(type, isSVG, isCustomizedBuiltIn, vnodeProps) {
    console.log(type);
    // 绘制一个 矩形
    // pixi.js
    let element
    if (type === 'rect') {
      element = new Graphics()
      element.beginFill(0xfcfcfc)
      element.drawRect(0, 0, 500, 500)
      element.endFill()
    } else if (type === 'circle') {
      element = new Graphics()
      element.beginFill(0xeeeeee)
      element.drawCircle(0, 0, 50)
      element.endFill()
    }
    return element;
  },
  insert(el, parent, anchor) {
    // console.log(el);
    // console.log(parent);
    parent.addChild(el)
  },
  createText(text) {
    return new Text(text);
  },
  setElementText(node, text) {
    const cText = new Text(text);
    node.addChild(cText);
  },
  patchProp(el, key, prevValue, nextValue, isSVG, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    el[key] = nextValue;
  }
  
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}
