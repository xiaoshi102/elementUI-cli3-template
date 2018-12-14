<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu router :default-active="$route.path" @select="selectHandle">
          <el-menu-item index="/home/axios">axios</el-menu-item>
          <el-submenu index="2">
            <template slot="title">table</template>
            <el-menu-item index="/home/table/table1">table1</el-menu-item>
            <el-menu-item index="2-2">table2</el-menu-item>
            <el-menu-item index="2-3">table3</el-menu-item>
            <el-menu-item index="2-4">table4</el-menu-item>
            <el-menu-item index="2-5">table5</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">table</template>
            <el-menu-item index="3-1">table1</el-menu-item>
            <el-menu-item index="3-2">table2</el-menu-item>
            <el-menu-item index="3-3">table3</el-menu-item>
            <el-menu-item index="3-4">table4</el-menu-item>
            <el-menu-item index="3-5">table5</el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  methods: {
    selectHandle (index, indexPath) { // 点击二级el-submenu不会触发
      console.log(index)
      console.log(indexPath)
    }
  }
}
</script>

<style scoped lang="less">
#app > .el-container {
  width: 100%;
  height: 100%;
}
.el-header {
  background-color: #ccc;
}
.el-aside {
  border-right: 1px solid #aaa;
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
