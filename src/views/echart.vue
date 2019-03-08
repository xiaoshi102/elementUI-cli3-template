<template>
  <div class="p20">
    <div id="main"></div>
    <!-- <div class="echart-wrap">
      <v-chart :options="options"/>
    </div> -->
    <ve-line :data="chartData"></ve-line>
  </div>
</template>

<script>
// 引入 ECharts 主模块
// import 'echarts/lib/chart/line'
// import echarts from 'echarts'

// import ECharts from 'vue-echarts/components/ECharts'
import VeLine from 'v-charts/lib/line.common'
var echarts = require('echarts/lib/echarts')
// 引入柱状图
require('echarts/lib/chart/line')
// 引入提示框和标题组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')
require('echarts/lib/component/legendScroll')
export default {
  components: {
    [VeLine.name]: VeLine /* eslint-disable-line */
  },
  data: function () {
    return {
      options: {
        grid: {
          // left: 'center'
          left: '12%'
          // right: '4%',
          // bottom: '3%',
          // containLabel: true
        },
        title: {
          text: 'ECharts 入门示例',
          left: 'center'
        },
        xAxis: {
          // position: 'top',
          name: '日期',
          nameLocation: 'center',
          boundaryGap: false,
          type: 'category',
          data: ['2', '3', '4', '5', '6', '6', '7']
        },
        yAxis: {
          type: 'value'
        },
        legend: {
          data: ['2018', '2019'],
          left: 'left',
          top: 20
        },
        series: [
          {
            name: '2018',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line'
          },
          {
            name: '2019',
            data: [200, 900, 601, 634, 1600, 430, 920],
            type: 'line'
          }
        ]
      },
      chartData: {
        columns: ['日期', '销售额'],
        rows: [
          { '日期': '1月1日', '销售额': 123 },
          { '日期': '1月2日', '销售额': 1223 },
          { '日期': '1月3日', '销售额': 2123 },
          { '日期': '1月4日', '销售额': 4123 },
          { '日期': '1月5日', '销售额': 3123 },
          { '日期': '1月6日', '销售额': 7123 }
        ]
      }
    }
  },
  methods: {},
  mounted () {
    var myChart = echarts.init(document.getElementById('main'))
    myChart.setOption({
      grid: {
        // left: 'center'
        left: '12%'
        // right: '4%',
        // bottom: '3%',
        // containLabel: true
      },
      title: {
        text: 'ECharts 入门示例',
        left: 'center'
      },
      xAxis: {
        // position: 'top',
        name: '日期',
        nameLocation: 'center',
        boundaryGap: false,
        type: 'category',
        data: ['2', '3', '4', '5', '6', '6', '7']
      },
      yAxis: {
        type: 'value'
      },
      legend: {
        data: ['2018', '2019'],
        left: 'left',
        top: 20
      },
      series: [
        {
          name: '2018',
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line'
        },
        {
          name: '2019',
          data: [200, 900, 601, 634, 1600, 430, 920],
          type: 'line'
        }
      ]
    })
  }
}
</script>

<style scoped lang="less">
  #main {
    width: 100%;
    height: 400px;
  }
  .echart-wrap {
    width: 100%;
    height: 400px;
  }
  .echarts {
  width: 100%;
  height: 100%;
}
</style>
