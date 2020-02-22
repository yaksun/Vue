<template>
  <div class="content" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.4)">
    <div class="title-box">
      <div class="title">重复求助</div>
      <div class="data-box">
        <div>{{currentDate}}</div>
        <img src="../assets/images/icon/date-icon.png">
      </div>
    </div>
    <div id="help-echarts"></div>
  </div>
</template>

<script>
import { getRepeatHelpSuperposition } from '@/api/index.js'
import { getData, getArrByKey } from '@/config/util.js'
import store from "@/store"
export default {
  data() {
    return {
      loading: true,
      currentDate: '',
      repeatHelpData: []
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
          letf: '5%',
          top: '20%',
          bottom: '50%'
        },
        xAxis: [{
          type: 'category',
          data: getArrByKey(this.repeatHelpData, 'name'),
          axisLine: {
            show: true,
            lineStyle: {
              color: "#063374",
              width: 1,
              type: "solid"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
						interval: 0,
					  // rotate: 30,
						textStyle: {
              color: "#e2e7f9",
              fontSize: 10,
              fontFamily: 'Microsoft YaHei'
              }
					  }
        }],
        yAxis: [{
            type: 'value',
            name: "求助次数",
            axisLabel: {
              formatter: '{value}'
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
          data: getArrByKey(this.repeatHelpData, 'value'),
          barWidth: 35, //柱子宽度
          barGap: 105, //柱子之间间距
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
              barBorderRadius: [18, 18, 18, 18],
              color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#005aff'
              }, {
                  offset: 1,
                  color: '#4484eb'
              }]),
              opacity: 1,
            }
          },
        }]
      };
      this.$echarts.dispose(document.getElementById("help-echarts"));
      let myChart = this.$echarts.init(document.getElementById("help-echarts"));
      myChart.setOption(option);
      window.onresize = function() {
        myChart.resize();
      };
      var that = this;
      myChart.on('click', function(param) {
        let currentItem = that.repeatHelpData[param.dataIndex]
        console.log(currentItem);
        let info = currentItem.userName + '的重复求助列表'
        let obj = {
          index: 0,
          title: info,
          param: currentItem.phone
        }
        store.commit('initHelpListTitle', obj)
        store.commit('initRefreshHelpList', true)
      })
    }
  },
  created() {
    this.currentDate = getData();
  },
  mounted() {
    getRepeatHelpSuperposition().then(res => {
      console.log(res.data)
      this.loading = false;
      if(res.data.length > 0) {
        let arr = [];
        res.data.map((item, index) => {
          arr.push({
            name: item.repeatName + ' ***' + String(item.phone).substring(item.phone.length - 4),
            value: item.repeatNumber,
            phone: item.phone,
            userName: item.repeatName
          })
        })
        this.repeatHelpData = arr;
        console.log(this.repeatHelpData)
        this.initEcharts();
      }
    }).catch(err => {
      this.loading = false
    })
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 30%;
  overflow: hidden;

   .title-box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
      width: 149px;
      height: 40px;
      line-height: 40px;
      background: url("../assets/images/main/title-bg.png") left top no-repeat;
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

  #help-echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
