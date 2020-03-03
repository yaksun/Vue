<template>
  <div
    class="content"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-background="rgba(0, 0, 0, 0.4)"
  >
    <div class="title">武汉疫情</div>
    <div id="rank-echarts"></div>
  </div>
</template>

<script>
import { getTopTen, getWhInfo } from "@/api/index.js";
export default {
  data() {
    return {
      cityData: [],
      cureData: [],
      deathData: [],
      diagnosisData: [], // 确诊
      suspected: [], // 疑似
      loading: true,

      totalNum: '',
      todayNum: ''
    };
  },
  methods: {
    getArrByKey(data, k) {
      let key = k || "value";
      let res = [];
      if (data) {
        data.forEach(function(t) {
          res.push(t[key]);
        });
      }
      return res;
    },
    init() {
      let data = this.cityData;
      let option = {
        grid: {
          top: "2%",
          bottom: -15,
          right: 30,
          left: 0,
          containLabel: true
        },
        tooltip: {
          show: true,
          // backgroundColor: '',
          // borderColor: '',
          borderWidth: 1,
          textStyle: {
            // color: '',
            fontSize: 12
          },
          formatter: function(p) {
            return p.seriesName + ": " + p.value;
          },
          extraCssText: "box-shadow: 0 0 5px rgba(0, 0, 0, 0.1)"
        },
        xAxis: {
          show: false
        },
        yAxis: [
          {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: this.getArrByKey(data, "address"),
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: "#fff",
              align: "left",
              margin: 80,
              fontSize: 12,
              formatter: function(value, index) {
                if (index < 3) {
                  return (
                    "{idx" +
                    index +
                    "|" +
                    (1 + index) +
                    "} {title|" +
                    value +
                    "}"
                  );
                } else if (index === 9) {
                  return (
                    "{idx" +
                    index +
                    "|" +
                    (1 + index) +
                    "} {title|" +
                    value +
                    "}"
                  );
                } else {
                  return "{idx|" + (1 + index) + "} {title|" + value + "}";
                }
              },
              rich: {
                idx0: {
                  color: "#ff0000",
                  backgroundColor: "#581433",
                  borderRadius: 100,
                  padding: [5, 8]
                },
                idx1: {
                  color: "#ff5420",
                  backgroundColor: "#582d3d",
                  borderRadius: 100,
                  padding: [5, 8]
                },
                idx2: {
                  color: "#ffff00",
                  backgroundColor: "#576234",
                  borderRadius: 100,
                  padding: [5, 8]
                },
                idx: {
                  color: "#00f3ff",
                  backgroundColor: "#0c4970",
                  borderRadius: 100,
                  padding: [5, 8]
                },
                idx9: {
                  color: "#00f3ff",
                  backgroundColor: "#0c4970",
                  borderRadius: 100,
                  padding: [5, 5]
                },
                title: {
                  width: 165
                }
              }
            }
          },
          {
            triggerEvent: true,
            show: true,
            inverse: true,
            data: this.getArrByKey(data, "address"),
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              interval: 0,
              color: "#fff",
              align: "left",
              margin: 20,
              fontSize: 12,
              formatter: function(value, index) {
                return data[index].sum;
              }
            }
          }
        ],
        series: [
          {
            name: "确诊",
            type: "bar",
            stack: "1",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: "#e02c32"
              }
            },
            data: this.diagnosisData
          },
          {
            name: "治愈",
            type: "bar",
            stack: "1",
            barWidth: 10,
            itemStyle: {
              normal: {
                color: "#55f37e"
              }
            },
            data: this.cureData
          },
          {
            name: "死亡",
            type: "bar",
            stack: "1",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: [0, 30, 30, 0],
                color: "#666666"
              },
              emphasis: {
                barBorderRadius: [0, 30, 30, 0]
              }
            },
            data: this.deathData
          }
        ]
      };
      this.$echarts.dispose(document.getElementById("rank-echarts"));
      let myChart = this.$echarts.init(document.getElementById("rank-echarts"));
      myChart.setOption(option);
    },
    initWh() {
      let option = {
        tooltip: {
          show: true,
          formatter: function (value, index) {
            return value.seriesName + ':' + value.value
          }
        },
        legend: {
          show: true,
          x: "center",
          top: "10",
          y: "35",
          icon: "stack",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#e2e7f9"
          },
          data: ["累计", "新增",]
        },
        grid: {
          top: "2%",
          bottom: "5%",
          right: 30,
          left: "5%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          show: false,
          position: "top",
          axisTick: {
            show: false
          },
          axisLine: {
            show: false,
            lineStyle: {
              color: "#fff"
            }
          },
          splitLine: {
            show: false
          }
        },
        yAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
              alignWithLabel: false,
              length: 5
            },
            splitLine: {
              //网格线
              show: false
            },
            inverse: "true", //排序
            axisLine: {
              show: false,
              color: '#00c5ff',
              lineStyle: {
                color: "#fff"
              }
            },
            data: ["确诊", "治愈", "死亡"]
          }
        ],
        series: [
          {
            name: "累计",
            type: "bar",
            stack: "1",
            label: {
              normal: {
                show: true,
                position: 'inside',
                formatter: "{c}",
                textStyle: {
                  color: "white" //color of value
                }
              }
            },
            itemStyle: {
              normal: {
                show: true,
                color: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#009bff'
                }, {
                    offset: 1,
                    color: '#00c3ff'
                }]),
                borderWidth: 0,
                borderColor: "#333"
              }
            },
            barGap: "0%",
            barCategoryGap: "50%",
            data: this.totalNum
          },
          {
            name: "新增",
            type: "bar",
            stack: "1",
            label: {
              normal: {
                show: true,
                position: 'right',
                formatter: "{c}",
                textStyle: {
                  color: "white" //color of value
                }
              }
            },
            itemStyle: {
              normal: {
                show: true,
                color: "#d33e3e",
                borderWidth: 0,
                borderColor: "#333"
              }
            },
            barGap: "0%",
            barCategoryGap: "50%",
            data: this.todayNum
          },
          // {
          //   name: "死亡",
          //   type: "bar",
          //   stack: "1",
          //   label: {
          //     normal: {
          //       show: true,
          //      position: 'inside',
          //       formatter: "{c}",
          //       textStyle: {
          //         color: "white" //color of value
          //       }
          //     }
          //   },
          //   itemStyle: {
          //     normal: {
          //       show: true,
          //       color: "#666",
          //       borderWidth: 0,
          //       borderColor: "#333",
          //       // barBorderRadius: [0, 30, 30, 0]
          //     }
          //   },
          //   barGap: "0%",
          //   barCategoryGap: "50%",
          //   data: this.deathData
          // }
        ]
      };
      this.$echarts.dispose(document.getElementById("rank-echarts"));
      let myChart = this.$echarts.init(document.getElementById("rank-echarts"));
      myChart.setOption(option);
    }
  },
  created() {},
  mounted() {
    // getTopTen().then(res => {
    //   this.loading = false;
    //   if(res.data.length > 0) {
    //     let cure = [], death = [], diagnosis = [], suspected = []
    //     let arrData = res.data.filter((item, index) => {
    //       return index < 10
    //     })
    //     console.log(arrData)
    //     this.cityData = arrData;
    //     arrData.map((item, index) => {
    //       cure.push(item.cure)
    //       death.push(item.death)
    //       diagnosis.push(item.diagnosis)
    //       suspected.push(item.suspected)
    //     })
    //     this.cureData = cure
    //     this.deathData = death
    //     this.diagnosisData = diagnosis
    //     this.suspectedData = suspected
    //     this.init(); // 初始化图标
    //   }
    // }).catch(err => {
    //   this.loading = false;
    // })

    getWhInfo()
      .then(res => {
        this.loading = false;
        console.log(res);
        this.cityData = res.data;
        let cure = [], death = [], diagnosis = [], totalNum = [], todayNum = [];
        res.data.map(item => {
          cure.push(item.cure)
          death.push(item.death)
          diagnosis.push(item.diagnosis)
        })

        // 数组 index=0 累计   数组index=1 今日
        // 确诊 治愈 死亡 
        totalNum.push(this.cityData[0].diagnosis)
        totalNum.push(this.cityData[0].cure) 
        totalNum.push(this.cityData[0].death)

        todayNum.push(this.cityData[1].diagnosis)
        todayNum.push(this.cityData[1].cure) 
        todayNum.push(this.cityData[1].death) 

        this.totalNum = totalNum
        this.todayNum = todayNum

        this.cureData = cure
        this.deathData = death
        this.diagnosisData = diagnosis

        this.initWh();
      })
      .catch(err => {
        this.loading = false;
      });
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 30%;
  background: url("../assets/images/city-rank/bg.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  overflow: hidden;
  .title {
    font-size: 14px;
    color: #fff;
    font-weight: bold;
    margin-top: 4px;
  }
  #rank-echarts {
    width: 100%;
    height: calc(100% - 20px);
  }
}
</style>
