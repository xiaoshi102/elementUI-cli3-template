import storage from 'store'

export const setToken = (token) => {
  storage.set('token', token)
}

export const getToken = () => {
  const token = storage.get('token')
  if (token) return token
  else return false
}
