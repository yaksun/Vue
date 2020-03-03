<template>
  <div class="content">
    <div class="left-cont">
      <div class="title">疫情期间警情总数</div>
      <div class="box-item" v-for="(item, index) in jqNum" :key="index">
        <span>{{item}}</span>
      </div>
    </div>
    <div class="right-cont">
      <div class="title">疫情期间求助总数</div>
       <div class="box-item" v-for="(item, index) in helpNum" :key="index">
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { getPlatformStatistic } from "@/api/index.js";
export default {
  data () {
    return {
      jqNum: [],
      helpNum: []
    }
  },
  methods: {
    setNumberTransform () {
      const numberItems = this.$refs.numberItem // 拿到数字的ref，计算元素数量
      const numberArr = this.orderNum.filter(item => !isNaN(item))
      // 结合CSS 对数字字符进行滚动,显示订单数量
      for (let index = 0; index < numberItems.length; index++) {
        const elem = numberItems[index]
        elem.style.transform = `translate(-50%, -${numberArr[index] * 10}%)`
      }
    },
  },
  created() {
    getPlatformStatistic().then(res => {
      this.jqNum = (res.data.jqSum + '').split('').map(Number);
      this.helpNum =(res.data.helpSum + '').split('').map(Number);
    }).catch(err => {

    })
  },
  mounted () {

  }
}
</script>

<style lang="scss" scoped>
  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    overflow: hidden;
    margin-top: 12px;

    .title {
      font-size: 16px;
    }
    .box-item {
      position: relative;
      display: inline-block;
      width: 36px;
      height: 46px;
      background-size: 100% 100%;
      font-size: 24px;
      line-height: 46px;
      text-align: center;
      margin:6px 6px 0 0;
      writing-mode: vertical-lr;
      text-orientation: upright;
      /* overflow: hidden; */
      /*文字禁止编辑*/
      -moz-user-select: none; /*火狐*/
      -webkit-user-select: none; /*webkit浏览器*/
      -ms-user-select: none; /*IE10*/
      -khtml-user-select: none; /*早期浏览器*/
      user-select: none;
      span {
        position: absolute;
        top: 10px;
        left: 50%;
        transform: translateX(-50%);
        letter-spacing: 10px;
      }
    }
    .left-cont {
      margin-top: 10px;
      .box-item {
        background: url('../assets/images/main/police-num-bg.png') no-repeat center center;
      }
    }

    .right-cont {
      margin-top: 10px;
      .box-item {
        background: url('../assets/images/main/help-num-bg.png') no-repeat center center;
      }
    }
  }
</style>