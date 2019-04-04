<template>
  <div class="p10">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="tab1" name="first"><first/></el-tab-pane>
      <el-tab-pane label="tab2" name="second"><second/></el-tab-pane>
      <el-tab-pane label="tab3" name="third"><third/></el-tab-pane>
      <el-tab-pane label="tab4" name="fourth"><fourth/></el-tab-pane>
    </el-tabs>
    <el-button-group>
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <div class="btn-group-wrap">
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left" @click.native="showTab('first')">btn1</el-button>
        <el-button type="primary" @click.native="showTab('second')">btn2<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        <el-button type="primary" @click.native="showTab('third')">btn3<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        <el-button type="primary" @click.native="showTab('fourth')">btn4<i class="el-icon-arrow-right el-icon--right"></i></el-button>
      </el-button-group>
      <div class="conten">

      </div>
    </div>
    <div>
      <el-radio-group v-model="curCom">
        <el-radio-button label="first">上海</el-radio-button>
        <el-radio-button label="second">北京</el-radio-button>
        <el-radio-button label="third">广州</el-radio-button>
        <el-radio-button label="fourth">深圳</el-radio-button>
      </el-radio-group>
      <div class="content">
        <component :is="curCom"/>
      </div>
    </div>
  </div>

</template>

<script>
import first from './first'
import second from './second'
import third from './third'
import fourth from './fourth'
export default {
  name: 'tab',
  components: { first, second, third, fourth },
  data () {
    return {
      activeName: 'second',
      comName: 'first',
      curCom: 'second'
    }
  },
  methods: {
    handleClick () {

    },
    showTab (tab) {
      console.log(tab)
      this.comName = tab
    }
  },
  mounted () {
    console.log(1122)
  }
}
</script>

<style scoped lang="less">
.btn-group-wrap {
  margin-top: 10px;
  .el-button-group {
    .el-button {
      float: none;
      display: block;
      border-radius: 0;
      border: none;
    }
    .el-button:not(:first-child):not(:last-child) {
      border-top: 1px solid rgba(255,255,255,.5);
      border-bottom: 1px solid rgba(255,255,255,.5);
    }
    &>.el-button:last-child {
      border-top: 1px solid rgba(255,255,255,.5);
    }
    &>.el-button:not(:first-child) {
      margin-top: -1px;
    }
  }
}
</style>
