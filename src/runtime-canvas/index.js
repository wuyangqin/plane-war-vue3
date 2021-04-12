import {createRenderer} from "@vue/runtime-core";

import {Text, Texture, Container, Sprite} from "pixi.js";

const renderer = createRenderer({
  createElement(type, isSVG, isCustomizedBuiltIn, vnodeProps) {
    // console.log(type);
    // pixi.js
    let element
    switch (type) {
      case "container":
        element = new Container();
        break;
      case "sprite":
        element = new Sprite();
        break;
    }
    // console.log(element,'el');
    return element;
  },
  insert(el, parent, anchor) {
    // console.log(el);
    // console.log(parent);
    parent.addChild(el)
  },
  // 处理注释
  createComment(text) {
  },
  // 获取父节点
  parentNode(node) {
    return node.parent
  },
  // 获取兄弟节点
  nextSibling(node) {
  },
  // 删除节点
  remove(el) {
    const parent = el.parent;
    if (parent) {
    
    }
  },
  createText(text) {
    return new Text(text);
  },
  setElementText(node, text) {
    const cText = new Text(text);
    node.addChild(cText);
  },
  patchProp(el, key, prevValue, nextValue, isSVG, prevChildren, parentComponent, parentSuspense, unmountChildren) {
    switch (key) {
      case 'texture':
        el.texture = Texture.from(nextValue);
        break;
      case 'onClick':
        el.on('pointertap', nextValue)
        break;
      default:
        el[key] = nextValue;
        break;
    }
  }
  
})

export function createApp(rootComponent) {
  return renderer.createApp(rootComponent)
}
