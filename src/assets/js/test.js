export default {
  install (Vue, options) { // 相当于一个钩子函数，当Vue.use(...)时会执行这个钩子
    Vue.prototype.$testFun = function () { // 可以将这个参数Vue看成是main.js中的Vue构造器
      console.log(options.msg)
    }
    Vue.directive('auth', {
      bind (el, binding, vnode) {
        el.style.display = 'none'
      }
    })
    Vue.myProperty = 'I am a vue proterty'
  }
}
