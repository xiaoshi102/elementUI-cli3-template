<template>
  <el-container>
    <el-header>
      <router-link to="/home" class="logo">Vue cli 3</router-link>
      <el-dropdown @command="handleCommand">
        <i class="el-icon-caret-bottom" style="margin-right: 15px">&nbsp;{{realName}}</i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router :default-active="$route.path" @select="selectHandle">
          <el-menu-item index="/axios/1">axios</el-menu-item>
          <el-menu-item index="/vuex/1">vuex</el-menu-item>
          <el-submenu index="2">
            <template slot="title">table</template>
            <el-menu-item index="/table1">table1</el-menu-item>
            <el-menu-item index="/table2">table2</el-menu-item>
          </el-submenu>
          <el-menu-item index="/directive">directive</el-menu-item>
          <el-menu-item index="/editor">editor</el-menu-item>
          <el-menu-item index="/watch">watch</el-menu-item>
          <el-menu-item index="/echart">echart</el-menu-item>
          <el-menu-item index="/tab">tab</el-menu-item>
          <el-menu-item index="/slot">slot</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import storage from 'store'
import { mapState } from 'vuex'
import { logout, getMenuList } from '@/assets/js/api' // eslint-disable-line
export default {
  name: 'layout',
  data () {
    return {
      menuList: []
    }
  },
  computed: {
    ...mapState({
      realName: state => state.user.realName
    }),
    defaultActive () {
      return this.$route.path
    }
  },
  watch: {
    // '$route' (newVal, oldVal) {
    //   console.log('newVal', newVal)
    //   console.log('oldVal', oldVal)
    // }
  },
  methods: {
    selectHandle (index, indexPath) { // 点击二级el-submenu不会触发
      // console.log(index)
      // console.log(indexPath)
    },
    handleCommand (name) {
      switch (name) {
        case 'logout':
          logout().then(() => {
            storage.remove('token')
            this.$store.commit('setToken', '')
            this.$router.push('/login')
          })
          break
      }
    }
  },
  mounted () {
    // getMenuList().then(response => {
    //   this.menuList = response.data.records
    // })
  }
}
</script>

<style scoped lang="less">
#app > .el-container {
  width: 100%;
  height: 100%;
}
// 头部
.el-header {
  background-color: #409EFF;
  .logo {
    height: 60px;
    line-height: 60px;
    font-size: 1.4em;
    color: #fff;
  }
  .el-dropdown {
    float: right;
    margin-top: 20px;
  }
}

.el-container {
  height: calc(~"100% - 60px");
  // 左侧菜单
  .el-aside {
    border-right: 1px solid #dedede;
    overflow-x: hidden;
    .el-menu {
      border-right: none;
    }
    .el-menu-item.is-active {
      background-color: #ecf5ff;
    }
  }
  // 主体内容
  .el-main {
    padding: 0;
  }
}

</style>
