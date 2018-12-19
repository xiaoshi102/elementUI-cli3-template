<template>
  <div class="p20">
    <el-card v-demo:foo.a.b="test">
      <input type="text" v-focus style="margin-right: 20px;">
      <el-button @click="test='hello world'" v-auth>click</el-button>
    </el-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 'just a test'
    }
  }
}
</script>

<style scoped>

</style>
