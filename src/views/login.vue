<template>
  <div class="login">
    <div class="login-con">
      <el-card icon="log-in" header="欢迎登录" :bordered="false">
        <div class="form-con">
          <!-- <login-form @on-success-valid="handleSubmit"></login-form> -->
          <el-form ref="loginForm" :model="form" :rules="rules" @keydown.enter.native="handleSubmit">  <!-- @keydown.enter.native="handleSubmit" -->
            <el-form-item prop="userName">
              <el-input v-model="form.userName" placeholder="请输入用户名" prefix-icon="el-icon-search">
                <!-- <span slot="prepend">
                  <Icon :size="16" type="ios-person"></Icon>
                </span> -->
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="form.password" placeholder="请输入密码" prefix-icon="el-icon-search">
                <!-- <span slot="prepend">
                  <Icon :size="14" type="md-lock"></Icon>
                </span> -->
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button @click="handleSubmit" type="primary" class="pct100">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        userName: '',
        password: ''
      },
      rules: {
        userName: [
          { required: true, message: '账号不能为空', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '密码不能为空', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit () {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log(111)
        }
      })
    }
  }
}
</script>

<style scoped lang="less">
.login{
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/login-bg.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
    &-con{
        position: absolute;
        right: 160px;
        top: 50%;
        margin-top: -150px;
        // transform: translateY(-60%);
        width: 300px;
        .form-con{
            padding: 10px 0 0;
        }
    }
}
</style>
