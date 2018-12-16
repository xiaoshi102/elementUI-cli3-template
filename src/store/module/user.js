import { getToken, setToken } from '@/libs/util'

export default {
  state: {
    userName: '',
    realName: '',
    userId: '',
    avatorImgPath: '',
    token: getToken()
  },
  mutations: {
    setToken (state, token) {
      state.token = token
      setToken(token)
    },
    setUserName (state, userName) {
      state.userName = userName
    },
    setRealName (state, realName) {
      state.realName = realName
    },
    setUserId (state, userId) {
      state.userId = userId
    },
    setAvatorImgPath (state, avatorImgPath) {
      state.avatorImgPath = avatorImgPath
    }
  },
  actions: {

  }
}
