<template>
  <div class="p20">
    {{info.name}} hello world
    <el-button @click="click1">click1</el-button>
    <el-button v-auth>看不到我</el-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      info: {
        name: 'Jack'
      }
    }
  },
  watch: {
    info () {
      console.log(4567)
    },
    'info.name' () {
      console.log(123)
    }
  },
  methods: {
    click1 () {
      // this.$testFun()
      console.log(this)
      console.log(this)
    }
  }
}
</script>

<style scoped>

</style>
