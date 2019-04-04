import Vue from 'vue'
import Router from 'vue-router'
import { getToken } from '@/libs/util'

Vue.use(Router)

const router = new Router({
  // scrollBehavior (to, from, savedPosition) {
  //   return { x: 0, y: 0 }
  // },
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404.vue'),
      meta: {
        title: '404'
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
      path: '/',
      redirect: '/axios/1',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/layout.vue'),
      children: [
        {
          path: '/axios/:id',
          name: 'axios',
          component: () => import('@/views/axios.vue'),
          meta: {
            title: 'axios'
          }
        },
        {
          path: '/table1',
          name: 'table1',
          component: () => import('@/views/table/table1.vue'),
          meta: {
            title: '表格'
          }
        },
        {
          path: '/vuex/:id',
          name: 'vuex',
          component: () => import('@/views/vuex.vue'),
          meta: {
            title: 'vuex'
          }
        },
        {
          path: '/directive',
          name: 'directive',
          component: () => import('@/views/directive.vue'),
          meta: {
            title: 'vue指令'
          }
        },
        {
          path: '/editor',
          name: 'editor',
          component: () => import('@/views/editor.vue'),
          meta: {
            title: 'editor编辑器'
          }
        },
        {
          path: '/watch',
          name: 'watch',
          component: () => import('@/views/watch.vue'),
          meta: {
            title: 'vue watch属性'
          }
        },
        {
          path: '/echart',
          name: 'echart1',
          component: () => import('@/views/echart.vue'),
          meta: {
            title: '图表'
          }
        },
        {
          path: '/tab',
          name: 'tab',
          component: () => import('@/views/tab'),
          meta: {
            title: 'tab'
          }
        },
        {
          path: '/slot',
          name: 'tab',
          component: () => import('@/views/slot'),
          meta: {
            title: 'slot'
          }
        }
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(to)
  if (to.matched.length === 0) {
    console.log(404)
    next({
      path: '/404'
    })
  }
  const token = getToken()
  document.title = to.meta.title + '-ele admin'
  if (!token && to.name !== 'login') {
    // 未登录且要跳转的页面不是登录页
    next({
      name: 'login' // 跳转到登录页
    })
  } else if (!token && to.name === 'login') {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转
  } else if (token && to.name === 'login') {
    // 已登录且要跳转的页面是登录页
    next({
      path: '/'
    })
  } else { // 已登录且不是进入登录页
    next()
  }
})

router.afterEach(to => {
  console.log('afterEach')
  window.scrollTo(0, 0)
})

export default router
