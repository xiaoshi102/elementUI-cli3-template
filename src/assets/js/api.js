import axiosHttp from './axiosHttp.js'

export function getTest () {
  console.log(axiosHttp({
    url: '/test',
    method: 'get'
  }))
  return axiosHttp({
    url: '/test',
    method: 'get'
  })
}
