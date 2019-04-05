<template>
  <div class="p10">
    <h1>table1</h1>
    <el-table
      ref="mulTtable"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        type="selection"
        width="55"/>
      <el-table-column
        prop="date"
        label="日期"
        width="180"/>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
        <template slot-scope="scope">
          <span>{{`test-${scope.row.name}`}}</span>
        </template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"/>
    </el-table>
    <div class="btn-wrap">
      <el-button type="primary" @click="clearSelection">取消勾选</el-button>
      <el-button type="primary" @click="toggleAllSelection">切换勾选</el-button>
      <el-button type="primary" @click="setSelection">设置勾选</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    clearSelection () {
      this.$refs.mulTtable.clearSelection() // 无需传参
    },
    toggleAllSelection () {
      this.$refs.mulTtable.toggleAllSelection() // 无需传参
    },
    setSelection () {
      // const rows = [{
      //   date: '2016-05-04',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1517 弄'
      // }, {
      //   date: '2016-05-01',
      //   name: '王小虎',
      //   address: '上海市普陀区金沙江路 1519 弄'
      // }]
      // var rows = [this.tableData[1], this.tableData[2]]
      this.tableData.forEach(row => {
        console.log(row)
        this.$refs.mulTtable.toggleRowSelection(row)
      })
    }
  }
}
</script>

<style lang="less" scoped>
.btn-wrap {
  margin-top: 20px;
}
</style>
