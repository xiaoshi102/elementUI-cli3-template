<template>
  <div class="p20" v-if="isShow" ref="info">
    <h4>{{info.name}}</h4>
    <p>{{info.description}}</p>
    <div style="height: 1000px;background-color:#ccc">long height</div>
    <router-link to="/home/vuex/2">/home/vuex/2</router-link>
    <br>
    <router-link to="/home/vuex/3">/home/vuex/3</router-link>
  </div>
</template>

<script>
export default {
  name: 'vuex',
  data () {
    return {
      info: {},
      isShow: true,
      id: this.$route.params.id,
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
  },
  methods: {
    test (id) {
      setTimeout(() => {
        this.info = {
          name: `name${id}`,
          description: `description${id}`
        }
      }, 100)
    }
  },
  mounted () {
    // this.test(`mounted ${this.id}`)
  },
  beforeRouteEnter (to, from, next) {
    console.log('beforeRouteEnter')
    next()
  },
  beforeRouteUpdate (to, from, next) {
    this.isShow = false
    this.$nextTick(() => {
      this.isShow = true
    })
    // this.test(to.params.id)
    console.log('beforeRouteUpdate')
    console.log(this.$el)
    console.log(this.$refs.info)
    // this.$nextTick(() => {
    //   this.$el.scrollTop = 0
    //   // this.$refs.info.scrollTop = 0
    // })
    next()
  },
  beforeRouteLeave (to, from, next) {
    console.log('beforeRouteLeave')
    next()
  }
}
</script>

<style lang="less" scoped>

</style>
