import axios from '@/assets/js/axios/axiosHttp.js'

export function getTest () {
  return axios.get('/test', {
    // showLoading: false,
    params: {
      age: 20,
      hobby: 'music'
    }
  })
}

// 登录
export const login = (params) => {
  return axios.post('/login', params)
}

// 退出
export const logout = () => {
  return axios.post('/logout')
}

// 菜单目录
export const getMenuList = () => {
  return axios.get('/getMenuList')
}
