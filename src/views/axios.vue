<template>
  <div class="p20">
    <el-button @click="requestHandle">request</el-button>
  </div>
</template>

<script>
// import axios from 'axios'
import { getTest } from '../assets/js/api.js'
export default {
  methods: {
    requestHandle () {
      // axios.get('/api/test1').then(response => {
      //   console.log(1, response)
      //   console.log(typeof response.data)
      // }).catch(error => {
      //   console.log(2, error.response)
      // })
      getTest().then(response => {
        console.log(response)
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>
