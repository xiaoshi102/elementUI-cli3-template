/**
 * 给不同的环境（开发、测试、生产）设置不同的接口前缀
 * 配置文件可能会被频繁修改，所以将其放在src目录下
 */

let config
if (process.env.NODE_ENV === 'development') { // 开发环境
  console.log('development')
  config = {
    baseUrl: '/api'
  }
} else if (process.env.VUE_APP_TITLE === 'test') { // 测试环境
  console.log('test')
  config = {
    baseUrl: 'http://localhost:3004/api'
  }
} else if (process.env.VUE_APP_TITLE === 'alpha') { // 预发布环境
  console.log('alpha')
  config = {
    baseUrl: 'http://localhost:3000/api'
  }
} else if (process.env.VUE_APP_TITLE === 'production') { // 生产环境
  console.log('production')
  config = {
    baseUrl: 'http://localhost:3000/api'
  }
}
export default config
