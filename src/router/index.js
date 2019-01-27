import Vue from 'vue'
import Router from 'vue-router'
import { getToken, setToken } from '@/libs/util'
// import Home from './views/Home.vue'
import config from '@/config'

Vue.use(Router)

const router = new Router({
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // },
  routes: [
    {
      path: '/',
      redirect: '/login',
      meta: {
        title: '登录'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/echart',
      name: 'echart',
      component: () => import('@/views/echart.vue'),
      meta: {
        title: '图表'
      }
    },
    {
      path: '/echart1',
      name: 'echart1',
      component: () => import('@/views/echart1.vue'),
      meta: {
        title: '图表'
      }
    },
    {
      path: '/home',
      redirect: '/home/axios',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/layout.vue'),
      children: [
        {
          path: '/home/axios',
          name: 'axios',
          component: () => import('@/views/axios.vue'),
          meta: {
            title: 'axios'
          }
        },
        {
          path: '/home/table/table1',
          name: 'table1',
          component: () => import('@/views/table/table1.vue'),
          meta: {
            title: '表格'
          }
        },
        {
          path: '/home/vuex/:id',
          name: 'vuex',
          component: () => import('@/views/vuex.vue'),
          meta: {
            title: 'vuex'
          }
        },
        {
          path: '/home/directive',
          name: 'directive',
          component: () => import('@/views/directive.vue'),
          meta: {
            title: 'vue指令'
          }
        },
        {
          path: '/home/editor',
          name: 'editor',
          component: () => import('@/views/editor.vue'),
          meta: {
            title: 'editor编辑器'
          }
        },
        {
          path: '/home/watch',
          name: 'watch',
          component: () => import('@/views/watch.vue'),
          meta: {
            title: 'vue watch属性'
          }
        },
        {
          path: '/home/echart',
          name: 'echart1',
          component: () => import('@/views/echart.vue'),
          meta: {
            title: '图表'
          }
        },
        {
          path: '/home/tab',
          name: 'tab',
          component: () => import('@/views/tab'),
          meta: {
            title: 'tab'
          }
        }
      ]
    }
  ]
})

const LOGIN_PAGE_NAME = 'login'
router.beforeEach((to, from, next) => {
  console.log('beforeEach')
  const token = getToken()
  document.title = to.meta.title + '-ele admin'
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: config.homeName // 跳转到homeName页
    })
  } else { // 已登录且不是进入登录页
    next()
    // console.log(store.state.user.hasGetInfo)
    // if (store.state.user.hasGetInfo) {
    //   turnTo(to, store.state.user.access, next)
    // } else {
    //   store.dispatch('getUserInfo').then(user => {
    //     // 拉取用户信息，通过用户权限和跳转的页面的name来判断是否有权限访问;access必须是一个数组，如：['super_admin'] ['super_admin', 'admin']
    //     turnTo(to, user.access, next)
    //   }).catch(() => {
    //     setToken('')
    //     next({
    //       name: 'login'
    //     })
    //   })
    // }
  }
})

router.afterEach(to => {
  console.log('afterEach')
  window.scrollTo(0, 0)
})

export default router
