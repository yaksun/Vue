<template>
  <div>
    <div
      v-for="(linechartItem, linechartIndex) in getParentInfo"
      :key="'lineCharts' + linechartIndex"
      class="chartmain"
      :class="linechartItem.chartClass"
    >
      <div class="chartTit">
        <p>{{ linechartItem.chartTit }}</p>
      </div>
      <div class="charShow"></div>
    </div>
    <!-- 测试 -->
  </div>
</template>
<script>
import echarts from "echarts";
import { lineChart, pieChart, barChart } from "../utils/chartview.js";
export default {
  mounted() {
    this.getFirCharInfo();
  },
  data() {
    return {
      lineChart: {}, //echart初始化对象
      getParentInfo: [], //父组件传来的数据
      sortArr: [], //隐性排序移动顺序
      lineChartArr: [], //折线图arr
      pieChartArr: [], //饼图arr
      barChartArr: [] //柱状图arr
    };
  },
  methods: {
    async getFirCharInfo() {
      let result = await this.$store.dispatch("GET_ALL_CHART_INFO");
      if (result.success) {
        for (var i = 0; i < result.data.length; i++) {
          this.getParentInfo.push(result.data[i]);
          this.sortArr.push(result.data[i]);
          if (result.data[i].chartType === "line") {
            this.lineChartArr.push(result.data[i]);
          }
          if (result.data[i].chartType === "pie") {
            this.pieChartArr.push(result.data[i]);
          }
          if (result.data[i].chartType === "bar") {
            this.barChartArr.push(result.data[i]);
          }
        }
        this.$nextTick(() => {
          this.chartView();
        });
      }
    },

    chartView() {
      var that = this;

      lineChart(this.lineChartArr);
      pieChart(this.pieChartArr);
      barChart(this.barChartArr);
    }
  }
};
</script>
<style lang="scss">
.chartmain {
  position: relative;
  display: inline-block;
  margin-bottom: 1vh;
  border-radius: 2px 2px 2px 2px;
  box-shadow: 1px 2px 5px #ccc;
  border: 1px solid #ddd;
  min-height: 29vh;
  width: 24vw;
  margin-right: 0.5vw;
  // padding-top:4vh;
}
.h30 {
  height: 34vh !important;
}
.h20 {
  height: 24vh !important;
}
.h15 {
  height: 19vh !important;
}
.w24 {
  width: 24vw !important;
}
.w49 {
  width: 49vw !important;
}
.w32 {
  width: 32vw !important;
}
.charShow {
  height: calc(100% - 4vh);
  width: 100%;
}
.chartTit {
  top: 0;
  width: 100%;
  height: 4vh;
  border-bottom: 1px solid #e7e7e7;
  p {
    display: inline-block;
    margin-top: 0.5vh;
    margin-left: 1vw;
    font-size: 2.4vh;
    color: #222222;
    font-family: FZZZHONGJW--GB1-0;
  }
  i {
    float: right;
    margin-right: 1vw;
    margin-top: 1vh;
    cursor: pointer;
  }
}
.offDel {
  display: none !important;
}
</style>
