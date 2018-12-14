import request from './request.js'

export function getTest () {
  return request({
    url: '/test',
    method: 'get'
  })
}
