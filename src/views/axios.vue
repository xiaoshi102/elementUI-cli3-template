<template>
  <div class="p20">
    <div id="app">
      <p style="color:red" v-show="httpError.hasError">{{httpError.status}} | {{httpError.statusText}}</p>
      <el-button @click="requestHandle">get test</el-button>
      <p>{{reponseData}}</p>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getTest } from '../assets/js/api.js'
export default {
  data () {
    return {
      reponseData: ''
    }
  },
  computed: {
    ...mapState(['httpError'])
  },
  methods: {
    requestHandle () {
      // axios.get('/api/test1').then(response => {
      //   console.log(1, response)
      //   console.log(typeof response.data)
      // }).catch(error => {
      //   console.log(2, error.response)
      // })
      getTest().then(response => {
        this.reponseData = response.data // eslint-disable-next-line
      }).catch(error => {
        this.reponseData = '发生错误，无法显示内容'
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
