import axiosHttp from './axiosHttp.js'

export function getTest () {
  return axiosHttp.get('/test', {
    // showLoading: false,
    params: {
      age: 20,
      hobby: 'music'
    }
  })
}

// 登录
export const login = (params) => {
  return axiosHttp.post('/login', params)
}

// 退出
export const logout = () => {
  return axiosHttp.post('/logout')
}

// 菜单目录
export const getMenuList = () => {
  return axiosHttp.get('/getMenuList')
}
