<template>
  <div class="notfound-container">
    <div class="img-404"></div>
    <p class="notfound-p">哎呦迷路了</p>
    <div class="notfound-reason">
      <p>可能的原因</p>
      <ul>
        <li>原来的页面不存在了</li>
        <li>我们的服务器被外星人劫持了</li>
      </ul>
    </div>
    <div class="notfound-btn-container">
      <el-button type="primary" size="medium" @click="goHome">返回首页</el-button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    goHome () {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="less" scoped>
.notfound-container {
  padding-top: 40px;
  text-align: center;

  .img-404 {
    height: 155px;
    // margin: 40px 0 20px;
    background: url('../assets/images/404.png') center center no-repeat;
    background-size: 150px;
  }

  .notfound-p {
    border-bottom: 1px solid #f6f6f6;
    padding-bottom: 17px;
    font-size: 17px;
    color: #262631;
  }

  .notfound-reason {
    width: 210px;
    margin: 0 auto;
    text-align: left;
    font-size: 13px;
    line-height: 13px;
    color: #9ca4ac;

    li {
      margin: 10px 0;
    }
  }
}
</style>

