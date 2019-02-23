/**
 * 给不同的环境（开发、测试、预发布、生产）设置不同的接口前缀
 * 配置文件可能会被频繁修改，所以将其放在src目录下
 */

let config
if (process.env.NODE_ENV === 'development') { // 开发环境
  config = {
    serverUrl: '/api'
  }
} else if (process.env.NODE_ENV === 'test') { // 测试环境
  config = {
    serverUrl: '/test/api'
  }
} else if (process.env.NODE_ENV === 'alpha') { // 预发布环境
  config = {
    serverUrl: '/alpha/api'
  }
} else if (process.env.NODE_ENV === 'production') { // 生产环境
  config = {
    serverUrl: '/production/api'
  }
}
export default config
