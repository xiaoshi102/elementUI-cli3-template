import axios from 'axios'
import store from '@/store'

const service = axios.create({
  baseURL: ' /api',
  timeout: 15000 // 请求超时时间
})

service.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response
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

export default service
