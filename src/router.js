import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login.vue')
    },
    {
      path: '/home',
      name: 'home',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/layout.vue'),
      children: [
        {
          path: '/home/axios',
          name: 'axios',
          component: () => import('@/views/axios.vue')
        },
        {
          path: '/home/table/table1',
          name: 'table1',
          component: () => import('@/views/table/table1.vue')
        }
      ]
    }
  ]
})
