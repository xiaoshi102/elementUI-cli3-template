<template>
  <div class="p20">
    <h1>slot</h1>
    <Info>
      <template v-slot:operate="slotProps">
        <span>hello world</span>
        <span>{{slotProps.age}}</span>
      </template>
    </Info>
    <hr>
    <Info :infoData="infoData">
      <template v-slot:operate="{ age }">
        <span>{{age}}</span>
      </template>
    </Info>
  </div>
</template>

<script>
import Info from '@/components/Info'
export default {
  components: {
    Info
  },
  data () {
    return {
      btnText: 'change',
      infoData: {
        name: 'ztt'
      }
    }
  },
  methods: {
    changeName () {
      console.log(1111)
    }
  }
}
</script>

<style scoped>

</style>
