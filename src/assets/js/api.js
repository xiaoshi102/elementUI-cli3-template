import axiosHttp from './axiosHttp.js'

export function getTest () {
  // console.log(axiosHttp({
  //   url: '/test',
  //   method: 'get'
  // }))
  return axiosHttp.get('/test', {
    // showLoading: false,
    params: {
      age: 20,
      hobby: 'music'
    }
  })
}

export const login = (params) => {
  return axiosHttp.post('/login', params)
}

export const logout = () => {
  return axiosHttp.post('/logout')
}
