<template>
  <div class="content" v-loading="loading" element-loading-text="拼命加载中" element-loading-background="rgba(0, 0, 0, 0.4)">
    <div class="title">警情词云</div>
    <!-- <div id="echarts" style="width: 100%;height: 100%;"></div> -->
    <div class="word-cont">
      <div class="bottom-image"></div>
      <div id="word-echarts" style="width: 100%;height: 100%;"></div>
    </div>
  </div>
</template>

<script>
import store from "@/store"
import { getWordCloud } from "@/api/index.js";
import "echarts-wordcloud/dist/echarts-wordcloud";
import "echarts-wordcloud/dist/echarts-wordcloud.min";
export default {
  data() {
    return {
      wordData: [],
      loading: true
    };
  },
  methods: {
    initChart() {
      this.$echarts.dispose(document.getElementById("word-echarts"));
      let myChart = this.$echarts.init(document.getElementById("word-echarts"));
      const option = {
        backgroundColor: 'transparent',
        // tooltip: {
        //   pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>"
        // },
        series: [
          {
            type: "wordCloud",
            //用来调整词之间的距离
            gridSize: 10,
            //用来调整字的大小范围
            // Text size range which the value in data will be mapped to.
            // Default to have minimum 12px and maximum 60px size.
            sizeRange: [10, 30],
            // Text rotation range and step in degree. Text will be rotated randomly in range [-90,                                                                             90] by rotationStep 45
            //用来调整词的旋转方向，，[0,0]--代表着没有角度，也就是词为水平方向，需要设置角度参考注释内容
            // rotationRange: [-45, 0, 45, 90],
            // rotationRange: [ 0,90],
            rotationRange: [0, 0],
            //随机生成字体颜色
            // maskImage: maskImage,
            textStyle: {
              normal: {
                color: function() {
                  return (
                    "rgb(" +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ", " +
                    Math.round(Math.random() * 255) +
                    ")"
                  );
                }
              }
            },
            //位置相关设置
            // Folllowing left/top/width/height/right/bottom are used for positioning the word cloud
            // Default to be put in the center and has 75% x 80% size.
            left: "center",
            top: "center",
            right: null,
            bottom: null,
            width: "100%",
            height: "100%",
            //数据
            data: this.wordData
          }
        ]
      };
      myChart.setOption(option);
      myChart.on('click', function(param) {
        console.log(param)
        let info = param.data.name + '相关求助列表'
        let obj = {
          index: 2,
          title: info,
          param: param.data.name
        }
        store.commit('initHelpListTitle', obj)
        store.commit('initRefreshHelpList', true)
      })
    }
  },
  mounted() {
    getWordCloud().then(res => {
      console.log(res.data);
      this.loading = false;
      if(res.data.length > 0) {
        let arr = [];
        res.data.map((item, index) => {
          arr.push({
            name: item.type,
            value: item.number,
          })
        })
        this.wordData = arr;
        this.initChart();
      }
    }).catch(err => {
      this.loading = false;
    })
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
  .word-cont {
    width: 84%;
    height: calc(100% - 40px);
    margin: 10px auto;
    position: relative;
    .bottom-image {
      width: 100%;
      height: 100%;
      background: url("../assets/images/hot-words/bottom-bg.png") no-repeat;
      background-size: 100% 100%;
    }
    #word-echarts {
      position: absolute;
      bottom: 10px;
      left: 0;
    }
  }
}
</style>
