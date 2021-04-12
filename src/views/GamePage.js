import {defineComponent, h, reactive} from "@vue/runtime-core";
import Map from "../components/Map";
import Plane from "../components/plane/Plane";
import Enemy from "../components/enemy/Enemy";
import {game} from "../Game";
import movePlane from '../components/plane/movePlane';

export default defineComponent({
  setup() {
    const {planeX, planeY} = movePlane()
    const planeInfo = reactive({x: planeX, y: planeY})
    
    // 敌方飞机
    const {enemyPlanes} = useCreateEnemyPlanes()
    
    // const enemySpeed = Math.random()*10
    game.ticker.add(() => {
      enemyPlanes.forEach(enemyInfo => {
        enemyInfo.y +=3
        // enemyInfo.x = Math.random()*700
      })
      // console.log(1);
      // console.log(delta);
    })
    
    return {
      planeInfo,
      enemyPlanes
    };
  },
  render(context) {
    const createEnemyPlanes = () => {
      return context.enemyPlanes.map(info => {
        return h(Enemy, {x: info.x, y: info.y, scale: info.scale})
      })
    }
    return h('container', [
      h(Map),
      h(Plane, {x: context.planeInfo.x, y: context.planeInfo.y}),
      ...createEnemyPlanes()
    ])
  }
})

function useCreateEnemyPlanes(){
  const enemyPlanes =reactive([
    {x: 50, y: 0, scale: {x: 0.5, y: 0.5}},
    {x: 100, y: 10, scale: {x: 0.8, y: 0.8}},
  ])
  return {enemyPlanes}
}

