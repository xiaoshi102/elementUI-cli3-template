/**
 * 给不同的环境（开发、测试、生产）设置不同的接口前缀
 */
let baseUrl = ''
var env = process.env.NODE_ENV === 'development' ? 'development' : process.env.VUE_APP_TITLE === 'alpha' ? 'alpha' : 'production'
switch (env) {
  case 'development':
    baseUrl = '/api' // 开发环境的请求url
    break
  case 'alpha':
    baseUrl = 'http://localhost:3004/api' // 测试环境的请求url
    break
  case 'production':
    baseUrl = 'http://localhost:3000/api' // 生产环境的请求url
    break
}

export default baseUrl
