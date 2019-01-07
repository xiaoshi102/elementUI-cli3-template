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
          <el-menu-item index="/home/axios">axios</el-menu-item>
          <el-menu-item index="/home/vuex">vuex</el-menu-item>
          <el-submenu index="2">
            <template slot="title">table</template>
            <el-menu-item index="/home/table/table1">table1</el-menu-item>
          </el-submenu>
          <el-menu-item index="/home/directive">directive</el-menu-item>
          <el-menu-item index="/home/editor">editor</el-menu-item>
          <el-menu-item index="/home/watch">watch</el-menu-item>
          <el-menu-item index="/home/echart">echart</el-menu-item>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import storage from 'store'
import { mapState } from 'vuex'
import { logout, getMenuList } from '@/assets/js/api'
export default {
  data () {
    return {
      menuList: []
    }
  },
  computed: {
    ...mapState({
      realName: state => state.user.realName
    })
  },
  methods: {
    selectHandle (index, indexPath) { // 点击二级el-submenu不会触发
      console.log(index)
      console.log(indexPath)
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
    getMenuList().then(response => {
      this.menuList = response.data.records
    })
  }
}
</script>

<style scoped lang="less">
#app > .el-container {
  width: 100%;
  height: 100%;
}
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
.el-main {
  padding: 0;
}
</style>
