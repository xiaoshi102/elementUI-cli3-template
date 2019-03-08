<template>
  <div>
    <p>{{infoData.name}}</p>
    <slot name="operate" :age="age">{{name}}</slot>
  </div>
</template>

<script>
export default {
  props: {
    infoData: {
      type: Object,
      default: () => ({ name: 'zzz' })
    }
  },
  data () {
    return {
      name: 'ttt',
      age: 22
    }
  }
}
</script>

<style scoped>

</style>
