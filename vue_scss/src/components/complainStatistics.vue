<template>
  <div class="content" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.4)">
    <div class="title-box">
      <div class="title">求助统计</div>
      <div class="data-box">
        <div>{{currentDate}}</div>
        <img src="../assets/images/icon/date-icon.png">
      </div>
    </div>
    <div id="complain-echarts"></div>
  </div>
</template>

<script>
import { getTypesComplaintsline } from '@/api/index.js'
import { getData, forTimeByStr, getDateTimeByStr } from '@/config/util.js'
import { mapState } from 'vuex'
import store from "@/store"
export default {
  data() {
    return {
      loading: true,
      currentDate: '',
      helpStatisticsData: []
    };
  },
  watch: {
    refreshHelpStatistic: function(val) {
      if(val) {
        this.getHelpData(this.time)
        this.currentDate = forTimeByStr(this.time)
      }
    }
  },
  computed: {
    ...mapState(['time', 'refreshHelpStatistic']),
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
    initEcharts() {
      var _this = this;
      let option = {
        title: {
          text: "",
          bottom: "10",
          left: "center",
          textStyle: {
            color: "#fff",
            fontSize: 12
          }
        },
        legend: {
          orient: "vertical",
          align: "left",
          right: "0", //可设定图例在左、右、居中
          top: "4%", //可设定图例在上、下、居中
          let: "0",
          data: this.getArrByKey(this.helpStatisticsData, 'name'),
          icon: "roundRect",
          itemGap: 14,
          itemWidth: 14,
          itemHeight: 14,
          textStyle: {
            color: "#fff"
          },
          formatter: function(param) {
            let index = 0;
            _this.helpStatisticsData.forEach((item, idx) => {
              if (item.name == param) {
                index = idx;
              }
            });
            return param + " " + _this.helpStatisticsData[index].value + " " +  _this.helpStatisticsData[index].percentage + '%';
          }
        },
        tooltip: {
          show: true,
          formatter: "{b} {c}"
        },
        series: [
          {
            type: "pie",
            radius: ["0", "65%"],
            center: ["30%", "40%"],
            roseType : 'radius',
            color: ["#249ecc", "#245dfc", "#603bbe", "#f56b6e", "#fdcb5f", "#fdcb5f"],
            label: {
              normal: {
                show: false
              }
            },
            data: this.helpStatisticsData
          }
        ]
      };
      this.$echarts.dispose(document.getElementById("complain-echarts"));
      let myChart = this.$echarts.init(document.getElementById("complain-echarts"));
      myChart.setOption(option);
      window.onresize = function() {
        myChart.resize();
      };
    },
    getHelpData(time) {
      this.loading = true
      getTypesComplaintsline(time).then(res => {
        this.loading = false
        console.log(res.data)
        if(res.data.length > 0) {
          let arr = [];
          res.data.map((item, index) => {
            arr.push({
              name: item.type,
              value: item.typeNumber,
              percentage: item.percentage
            })
          })
          this.helpStatisticsData = arr;
          this.initEcharts();
        }
        store.commit('initRefreshHelpStatistic',false)
      }).catch(err => {
        this.loading = false
      })
    }
  },
  created() {
    this.currentDate = '2020-02-08';
  },
  mounted() {
    this.getHelpData(this.currentDate);
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 42%;
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
  
  #complain-echarts {
    width: 100%;
    height: 100%;
  }
}
</style>
