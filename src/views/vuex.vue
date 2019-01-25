<template>
  <div class="p20">
    {{title}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'vuexxx'
    }
  },
  watch: {
    // '$route' (newVal, oldVal) {
    //   console.log('newVal', newVal)
    //   console.log('oldVal', oldVal)
    // }
    '$route': {
      handler (newVal, oldVal) {
        console.log('newVal', newVal)
        console.log('oldVal', oldVal)
      },
      immediate: true
    }
  }
}
</script>

<style lang="less" scoped>

</style>
