import axios from 'axios'
import { Message } from 'element-ui'
import storage from 'store'

import baseUrl from './setBaseUrl'
// import config from '@/config'
import { showFullScreenLoading, tryHideFullScreenLoading } from './axiosInitHelper'

// const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro
// 创建axios实例并配置默认值
const axiosHttp = axios.create({
  baseURL: baseUrl,
  timeout: 15000,
  headers: {
    // Authorization: '123456'
    // Authorization: storage.get('token') ? storage.get('token') : ''
  }
})

// 请求拦截器
axiosHttp.interceptors.request.use(function (config) {
  if (config.showLoading) {
    showFullScreenLoading()
  }
  config.headers.Authorization = storage.get('token') ? storage.get('token') : ''
  return config
}, function (error) {
  return Promise.reject(error)
})

// 响应拦截器
axiosHttp.interceptors.response.use(function (response) {
  if (response.config.showLoading) {
    tryHideFullScreenLoading()
  }
  return response.data // response是一个对象
  // return Promise.resolve(response)
}, function (error) {
  tryHideFullScreenLoading()
  // 请求错误则向store commit这个状态变化
  // const httpError = {
  //   hasError: true,
  //   status: error.response.status,
  //   statusText: error.response.statusText
  // }
  // store.commit('ON_HTTP_ERROR', httpError)
  Message.error(error.response.statusText)
  return Promise.reject(error)
})

const defaultConfig = { showLoading: true }
export default {
  get: (url, config) => axiosHttp.get(url, { ...defaultConfig, ...config }),
  put: (url, data, config) => axiosHttp.put(url, data, { ...defaultConfig, ...config }),
  post: (url, data, config) => axiosHttp.post(url, data, { ...defaultConfig, ...config }),
  patch: (url, data, config) => axiosHttp.patch(url, data, { ...defaultConfig, ...config }),
  delete: (url, data, config) => axiosHttp.delete(url, { ...defaultConfig, ...config })
}
