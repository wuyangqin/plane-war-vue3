import {Application} from "pixi.js";
import {stage} from './config'

const {width, height} = stage;
//mount(根容器)
//canvas -> pixi.js
export const game = new Application({
  width,
  height
})
document.body.append(game.view)

export function getRootContainer() {
  return game.stage
}
