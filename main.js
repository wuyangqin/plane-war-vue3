import {createApp} from "./src/runtime-canvas";
import App from "./src/App";
import {getRootContainer} from "./src/Game";
//mount(根容器)
//canvas -> pixi.js

createApp(App).mount(getRootContainer())
