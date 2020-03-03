<template>
  <div class="content" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.4)">
    <div class="title-box">
      <div class="title">武汉市区求助统计</div>
      <div class="data-box">
        <div>{{currentDataSlot}}</div>
        <img src="../assets/images/icon/date-icon.png">
      </div>
    </div>
    <div id="area-help-echarts"></div>
  </div>
</template>

<script>
import { getRepeatHelpLine } from '@/api/index.js'
import { getData, getArrByKey } from '@/config/util.js'
import store from "@/store"
export default {
  data() {
    return {
      loading: true,
      currentDataSlot: '',
      currentDate: '',
      totalAreaData: []
    };
  },
  methods: {
    initEcharts() {
      let option = {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow" 
          }
        },
        grid: {
          letf: '0',
          top: '15%',
          bottom: '35%'
        },
        xAxis: [{
          type: 'category',
          data: getArrByKey(this.totalAreaData, 'address'),
          axisLine: {
            show: true,
            lineStyle: {
              color: "#577191",
              width: 1,
              type: "solid"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
						interval: 0,
					  rotate: 45,
						textStyle: {
              color: "#e2e7f9",
              fontSize: 10,
              fontFamily: 'Microsoft YaHei'
              }
					  }
        }],
        yAxis: [{
            type: 'value',
            name: "次",
            axisLabel: {
              margin: 4,
              formatter: function (value, index) {
                if (value >= 10000 && value < 10000000) {
                    value = value / 10000 + "万";
                } else if (value >= 10000000) {
                    value = value / 10000000 + "千万";
                }
                return value;
              }
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#577191",
                width: 1,
                type: "solid"
              },
            },
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                color: "#577191",
              }
            }
        }],
        series: [{
          type: 'bar',
          data: getArrByKey(this.totalAreaData, 'jqSum'),
          barWidth: 9, //柱子宽度
          barGap: 25, //柱子之间间距
          label: {
            normal: {
              show: true,
              position: 'top',
              formatter: "{c}",
              textStyle: {
                color: "white" //color of value
              }
            }
          },
          itemStyle: {
            normal: {
              barBorderRadius: [4, 4, 0, 0],
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00a4ff'
              }, {
                  offset: 1,
                  color: '#00c2ff '
              }]),
              opacity: 1,
            }
          },
        }]
      };
      this.$echarts.dispose(document.getElementById("area-help-echarts"));
      let myChart = this.$echarts.init(document.getElementById("area-help-echarts"));
      myChart.setOption(option);
      window.onresize = function() {
        myChart.resize();
      };
      var that = this;
      myChart.on('click', function(param) {
        console.log(param)
        let info = param.name + '求助列表'
        let obj = {
          index: 1,
          title: info,
          param: param.name
        }
        store.commit('initHelpListTitle', obj)
        store.commit('initRefreshHelpList', true)
      })
    },
    getData() {
      getRepeatHelpLine().then(res => {
        console.log(res.data)
        this.loading = false;

        res.data.sort((a, b) => {
          return b.jqSum - a.jqSum
        })

        this.totalAreaData = res.data;
        this.initEcharts();
      }).catch(err => {
        this.loading = false;
      })
    }
  },
  created() {
    this.currentDate = getData();
    this.currentDataSlot = '2019-12-31~' + this.currentDate
  },
  mounted() {
    this.getData();
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 54%;
  height: 100%;
  overflow: hidden;
  .title-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      width: 149px;
      height: 40px;
      line-height: 40px;
      background: url("../assets/images/main/long-title-bg.png") left top no-repeat;
      background-size: 100% 100%;
      text-align: center;
      font-size: 14px;
      color: #00c5ff;
    }
    .data-box {
      display: flex;
      align-items: center;
      color: #00c5ff;
      img {
        margin-left: 10px;
      }
    }
  }
  
  #area-help-echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
