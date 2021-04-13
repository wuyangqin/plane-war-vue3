import {defineComponent, h, reactive, onMounted, onUnmounted} from "@vue/runtime-core";
import Map from "../components/Map";
import Plane from "../components/plane/Plane";
import Enemy from "../components/enemy/Enemy";
import Bullet from "../components/bullet/Bullet";
import {hitTestObject} from "../utils/hitTest";
import {game} from "../Game";
import movePlane from '../components/plane/movePlane';
import {moveEnemyPlane} from "../components/enemy/moveEnemyPlanes";

export default defineComponent({
  setup(props, context) {
    // 我方飞机
    const {planeInfo} = userCreatePlane()
    // 敌方飞机
    const {enemyPlanes} = useCreateEnemyPlanes()
    // 子弹
    const {bullets, onShootBullet} = useCreateBullets()
    // 战斗
    useFighting(enemyPlanes, bullets, planeInfo)
    return {
      planeInfo,
      enemyPlanes,
      bullets,
      onShootBullet
    };
  },
  render(context) {
    const createEnemyPlanes = () => {
      return context.enemyPlanes.map(info => {
        return h(Enemy, {x: info.x, y: info.y, scale: info.scale})
      })
    }
    const createBullets = () => {
      return context.bullets.map(info => {
        return h(Bullet, {x: info.x, y: info.y})
      })
    }
    return h('container', [
      h(Map),
      h(Plane,
        {
          x: context.planeInfo.x,
          y: context.planeInfo.y,
          onShootBullet: context.onShootBullet,
        },
      ),
      ...createEnemyPlanes(),
      ...createBullets(),
    ])
  }
})

function userCreatePlane() {
  const {planeX, planeY, planeWidth, planeHeight} = movePlane()
  const planeInfo = reactive({x: planeX, y: planeY, width: planeWidth, height: planeHeight})
  return {planeInfo}
}

function useCreateEnemyPlanes() {
  const enemyWidth = 308
  const enemyHeight = 200
  const enemyPlanes = reactive([
    {x: 50, y: 0, scale: {x: 1, y: 1}, width: enemyWidth, height: enemyHeight},
    // {x: 50, y: 0, scale: {x: 0.5, y: 0.5}, width: enemyWidth * .5, height: enemyHeight * .5},
    // {x: 100, y: 10, scale: {x: 0.8, y: 0.8}},
  ])
  return {enemyPlanes}
}

function useCreateBullets() {
  const width = 61
  const height = 99
  const bullets = reactive([])
  const onShootBullet = (info) => {
    bullets.push({
      ...info,
      width,
      height
    })
  }
  return {bullets, onShootBullet}
}

function useFighting(enemyPlanes, bullets, planeInfo) {
  const gameLoop = function () {
    moveEnemyPlane(enemyPlanes)
    enemyPlanes.forEach(enemy => {
      // 敌方和我方飞机碰撞检测
      if (hitTestObject(enemy, planeInfo)) {
        // console.log('hit');
        // 游戏结束
        // context.emit('pageChange', 'EndPage')
      }
    })
    bullets.forEach((bullet, bulletIndex) => {
      bullet.y -= 10
      enemyPlanes.forEach((enemy, enemyIndex) => {
        // 子弹和敌方碰撞检测
        if (hitTestObject(enemy, bullet)) {
          // 敌方飞机和子弹消失
          bullets.splice(bulletIndex, 1);
          enemyPlanes.splice(enemyIndex, 1);
        }
      })
    })
  }
  onMounted(() => {
    game.ticker.add(gameLoop)
  })
  onUnmounted(() => {
    game.ticker.remove(gameLoop)
  })
}
