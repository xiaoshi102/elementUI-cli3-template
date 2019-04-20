<template>
  <div>{{name}}</div>
</template>

<script>
export default {
  // name: 'name',
  data () {
    return {
      name: this.$route.params.name
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>
