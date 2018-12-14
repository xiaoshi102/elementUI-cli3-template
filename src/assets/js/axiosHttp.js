import axios from 'axios'
import { Message } from 'element-ui'
import { Loading } from 'element-ui'
import store from '@/store'
import env from './env'

const axiosHttp = axios.create({ // 创建实例时设置配置的默认值
  baseURL: env.baseUrl, // 根据不同项目修改
  timeout: 15000 // 请求超时时间
})

axiosHttp.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
axiosHttp.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response // response是一个对象
  // return Promise.resolve(response)
}, function (error) {
  // 请求错误则向store commit这个状态变化
  const httpError = {
    hasError: true,
    status: error.response.status,
    statusText: error.response.statusText
  }
  store.commit('ON_HTTP_ERROR', httpError)
  return Promise.reject(error)
})

export default axiosHttp
