<template>
  <div
    class="content"
    v-loading="loading"
    element-loading-text="拼命加载中"
    element-loading-background="rgba(0, 0, 0, 0.4)"
  >
    <div class="title">发展趋势</div>
    <div id="trend-echarts"></div>
  </div>
</template>

<script>
import { getTypesComplaintstRend } from "@/api/index.js";
import { getDateTimeByStr, forTimeByStr } from "@/config/util.js";
import store from "@/store";
export default {
  data() {
    return {
      loading: true,
      cureData: [],
      deathData: [],
      diagnosisData: [], // 确诊
      suspected: [], // 疑似
      xData: [],

      jqDeath: [],
      jqdiagnosis: [],
      bed: [],
      life: [],
      assistance: [],
      protect: [],
      totalHelpNum: [],

      jqNum: []
    };
  },
  methods: {
    initEcharts() {
      var fontColor = "#30eee9";
      let option = {
        title: {
          text: "",
          top: "5%",
          left: "center",
          textStyle: {
            color: "#FFF",
            align: "center"
          }
        },
        grid: {
          left: "30",
          right: "30",
          top: "30",
          bottom: "40",
          containLabel: true
        },
        tooltip: {
          show: true,
          trigger: "item",
          confine: true
        },
        legend: {
          show: true,
          x: "center",
          top: 0,
          y: "35",
          icon: "stack",
          itemWidth: 10,
          itemHeight: 10,
          textStyle: {
            color: "#e2e7f9"
          },
          data: [
            "新增确诊",
            "新增治愈",
            "新增死亡",
            "新增警情",
            "新增求助",
          ]
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              color: fontColor
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#e2e7f9"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false,
              lineStyle: {
                color: "#e2e7f9"
              }
            },
            data: this.xData
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "疫情（人）",
            min: 0,
            // max: 1000,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#e2e7f9"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#e2e7f9"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#e2e7f9"
              }
            }
          },
          {
            type: "value",
            name: "警情（次）",
            min: 0,
            // max: 1000,
            axisLabel: {
              formatter: "{value}",
              textStyle: {
                color: "#e2e7f9"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#e2e7f9"
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#e2e7f9"
              }
            }
          }
        ],
        series: [
          {
            name: "新增确诊",
            type: "line",
            yAxisIndex: 0,
            // smooth: true, //折点是圆弧状的
            showSymbol: true,
            symbol: "circle", //折点设定为实心点
            symbolSize: 6, //设定实心点的大小
            itemStyle: {
              normal: {
                color: "#ff2d2d", // 折点颜色
                lineStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#e02c32"
                    },
                    {
                      offset: 1,
                      color: "#d72b33"
                    }
                  ]),
                  width: 3
                }
              }
            },
            markPoint: {
              itemStyle: {
                normal: {
                  color: "red"
                }
              }
            },
            data: this.diagnosisData
          },
          // {
          //   name: "疑似",
          //   type: "line",
          //    yAxisIndex: 0,
          //   symbol: "circle",
          //   symbolSize: 6,
          //   smooth:true,//折点是圆弧状的
          //   showSymbol: true,
          //   itemStyle: {
          //     normal: {
          //       color: "#ff7b41",
          //       lineStyle: {
          //         color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
          //           {
          //             offset: 0,
          //             color: "#ff7640"
          //           },
          //           {
          //             offset: 1,
          //             color: "#ff7b41"
          //           }
          //         ]),
          //         width: 3
          //       }
          //     }
          //   },
          //   data: this.suspectedData
          // },
          {
            name: "新增治愈",
            type: "line",
            yAxisIndex: 0,
            symbol: "circle",
            symbolSize: 6,
            showSymbol: true,
            itemStyle: {
              normal: {
                color: "#55f37e",
                lineStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#55f37e"
                    },
                    {
                      offset: 1,
                      color: "#55f37e"
                    }
                  ]),
                  width: 3
                }
              }
            },
            data: this.cureData
          },
          {
            name: "新增死亡",
            type: "line",
            yAxisIndex: 1,
            symbol: "circle",
            symbolSize: 6,
            showSymbol: true,
            itemStyle: {
              normal: {
                color: "#666666",
                lineStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#666666"
                    },
                    {
                      offset: 1,
                      color: "#666666"
                    }
                  ]),
                  width: 3
                }
              }
            },
            data: this.deathData
          },
          {
            name: "新增警情",
            type: "line",
            yAxisIndex: 1,
            symbol: "circle",
            symbolSize: 6,
            showSymbol: true,
            itemStyle: {
              normal: {
                color: "#245dfc",
                lineStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#245dfc"
                    },
                    {
                      offset: 1,
                      color: "#245dfc"
                    }
                  ]),
                  width: 3
                }
              }
            },
            data: this.jqNum
          },
          {
            name: "新增求助",
            type: "line",
            yAxisIndex: 1,
            symbol: "circle",
            symbolSize: 6,
            showSymbol: true,
            itemStyle: {
              normal: {
                color: "#fdcb5f",
                lineStyle: {
                  color: new this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "#fdcb5f"
                    },
                    {
                      offset: 1,
                      color: "#fdcb5f"
                    }
                  ]),
                  width: 3
                }
              }
            },
            data: this.totalHelpNum
          }
        ]
      };
      this.$echarts.dispose(document.getElementById("trend-echarts"));
      let myChart = this.$echarts.init(
        document.getElementById("trend-echarts")
      );
      myChart.setOption(option);
      window.onresize = function() {
        myChart.resize();
      };
      myChart.on("click", function(param) {
        console.log(param);
        store.commit("initTime", param.name);
        store.commit("initRefreshHelpStatistic", true);
      });
    }
  },
  mounted() {
    getTypesComplaintstRend()
      .then(res => {
        this.loading = false;
        console.log(res.data);
        if (res.data.length > 0) {
          let cure = [],
            death = [],
            diagnosis = [],
            suspected = [],
            xArr = [],
            jqDeath = [],
            jqdiagnosis = [],
            bed = [],
            life = [],
            assistance = [],
            protect = [],
            jqNum = [],
            totalHelpNum = [];
          res.data.map(item => {
            cure.push(item.cure); // 治愈
            death.push(item.death); // 死亡
            diagnosis.push(item.diagnosis); // 确诊
            // suspected.push(item.suspected) // 疑似
            xArr.push(forTimeByStr(item.statTime)); // x轴时间列表

            jqNum.push(item.jqNumber) // 警情总数

            jqDeath.push(item.jqdeath); // 警情诊断
            jqdiagnosis.push(item.jqdiagnosis); // 警情死亡
            bed.push(item.bed); // 床位
            life.push(item.life); // 生活
            protect.push(item.protect); // 保护
            assistance.push(item.assistance); // 援助
            // 求助总数
            totalHelpNum.push(item.jqdeath + item.jqdiagnosis + item.bed + item.life + item.protect + item.assistance)
          });
          this.cureData = cure;
          this.deathData = death;
          this.diagnosisData = diagnosis;
          this.suspectedData = suspected;
          this.xData = xArr;

          this.jqDeath = jqDeath;
          this.jqdiagnosis = jqdiagnosis;
          this.bed = bed;
          this.life = life;
          this.protect = protect;
          this.assistance = assistance;
          this.totalHelpNum = totalHelpNum
          
          console.log(this.deathData)

          this.jqNum = jqNum
        }
        this.initEcharts();
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
  margin-top: 10px;
  overflow: hidden;

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
  #trend-echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
