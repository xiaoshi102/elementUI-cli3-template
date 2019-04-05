<template>
  <div class="p10">
    <div id="app">
      <p style="color:red" v-show="httpError.hasError">{{httpError.status}} | {{httpError.statusText}}</p>
      <el-button @click="requestHandle">get test</el-button>
      <p>{{reponseData}}</p>
      <!-- <router-view></router-view> -->
      <p>count: {{$store.state.app.count}}</p>
      <el-button @click="login">click1</el-button>
      <el-button @click="handleStore">click2</el-button>
      <el-button @click="goTo('/home/axios/2')">to axios</el-button>
      <el-button @click="goTo('/home/vuex')">to vuex</el-button>
      <el-button @click="goTo('/hello')">不存在的页面</el-button>
    </div>
  </div>
</template>

<script>
import storage from 'store'
import { mapState } from 'vuex'
import { getTest, login } from '@/assets/js/api'
export default {
  name: 'axios',
  data () {
    return {
      reponseData: ''
    }
  },
  computed: {
    ...mapState({
      httpError: state => state.app.httpError
    })
  },
  methods: {
    login () {
      login({ userName: 'admin', password: '1234561' }).then(response => {
        if (response.code === '00') {

        } else {
          this.$message.error(response.msg)
        }
      })
    },
    requestHandle () {
      getTest().then(response => {
        console.log(response)
        if (response.code === '00') {
          this.reponseData = response.data // eslint-disable-next-line
        } else {
          this.$message.error(response.msg)
        }
      }).catch(error => {
        console.log(error)
        // this.reponseData = '发生错误，无法显示内容'
      })
    },
    handleStore () {
      storage.set('name', { firstname: 'bx', lastname: 'z' })
    },
    goTo (path) {
      this.$router.push(path)
    }
  },
  mounted () {
    console.log(111)
    login({ userName: 'admin', password: '123456' }).then(response => {
      console.log(response)
    })
    // window.onbeforeunload = function () {
    //   return '1111'
    // }
  }
}
</script>

<style lang="less" scoped>

</style>
