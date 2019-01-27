<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  watch: {
    // '$route' (newVal, oldVal) {
    //   console.log('newVal', newVal)
    //   console.log('oldVal', oldVal)
    // }
  }
}
</script>

<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
}
</style>
