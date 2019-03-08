import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/lib.css'
import './assets/css/common.css'
import test from '@/assets/js/test.js'
import VeLine from 'v-charts/lib/line.common'
require('echarts/lib/component/grid')
require('echarts/lib/component/title')

// import ECharts from 'vue-echarts/components/ECharts.vue'
// import 'echarts/lib/chart/line'
// require('echarts/lib/chart/line')
// // 引入提示框和标题组件
// require('echarts/lib/component/tooltip')
// require('echarts/lib/component/title')
// require('echarts/lib/component/legendScroll')

// Vue.component('v-chart', ECharts)

Vue.component(VeLine.name, VeLine)

Vue.use(test, { msg: 'hello hello' })
Vue.config.productionTip = false
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
Vue.directive('demo', {
  bind (el, binding, vnode) {
    el.value = 'bind'
    // console.log(1)
    // console.log(el)
    // console.log(binding)
    // console.log(vnode)
  },
  inserted (el, binding, vnode) {
    // console.log(2)
    el.value = 'inserted'
  },
  update (el, binding, vnode, oldVnode) {
    // console.log(3)
    // console.log(vnode)
    // console.log(oldVnode)
    el.value = 'update'
  },
  componentUpdated (el, binding, vnode, oldVnode) {
    // console.log(4)
    // console.log(vnode)
    // console.log(oldVnode)
    el.value = 'componentUpdated'
  },
  unbind (el, binding, vnode) {
    // console.log(5)
    el.value = 'unbind'
  }
})
const vueInstance = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

console.log(vueInstance)
// console.log(Vue.myProperty)
