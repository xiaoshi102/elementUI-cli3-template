export default {
  state: {
    httpError: {
      hasError: false,
      status: '',
      statusText: ''
    }
  },
  mutations: {
    ON_HTTP_ERROR (state, payload) {
      state.httpError = payload
    }
  },
  actions: {

  }
}
