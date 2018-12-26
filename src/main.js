import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import './assets/css/lib.css'
import './assets/css/common.css'
import element from 'element-ui'

Vue.config.productionTip = false
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})
Vue.directive('demo', {
  bind (el, binding, vnode) {
    el.value = 'bind'
    console.log(1)
    console.log(el)
    console.log(binding)
    console.log(vnode)
  },
  inserted (el, binding, vnode) {
    console.log(2)
    el.value = 'inserted'
  },
  update (el, binding, vnode, oldVnode) {
    console.log(3)
    console.log(vnode)
    console.log(oldVnode)
    el.value = 'update'
  },
  componentUpdated (el, binding, vnode, oldVnode) {
    console.log(4)
    console.log(vnode)
    console.log(oldVnode)
    el.value = 'componentUpdated'
  },
  unbind (el, binding, vnode) {
    console.log(5)
    el.value = 'unbind'
  }
})
Vue.directive('auth', {
  bind (el, binding, vnode) {
    el.style.display = 'none'
  }
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
