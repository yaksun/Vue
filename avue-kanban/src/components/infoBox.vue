<template>
  <div class="content">
    <div class="title">信息详情</div>
    <img class="close-btn" @click="closeInfoBox" src="../assets/images/icon/close.png">
    <div class="info-box" >
      <div class="info-title">交通类型</div>
      <div class="info-cont">{{info.trafficType | formatTraffic}}</div>
    </div>
    <div class="info-box">
      <div class="info-title">日期</div>
      <div class="info-cont">{{info.dateTime}}</div>
    </div>
    <div class="info-box" >
      <div class="info-title">车次/车牌/航班号/场所名称</div>
      <div class="info-cont">{{info.trainName}}</div>
    </div>
    <div class="info-box" >
      <div class="info-title">车厢</div>
      <div class="info-cont">{{info.carriage}}</div>
    </div>
    <div class="info-box" >
      <div class="info-title">出发站</div>
      <div class="info-cont">{{info.departureStation}}</div>
    </div>
    <div class="info-box" >
      <div class="info-title">到达站</div>
      <div class="info-cont">{{info.destination}}</div>
    </div>
    <div class="info-box" >
      <div class="info-title">车次附加描述</div>
      <div class="info-cont">{{info.describes}}</div>
    </div>
    <div class="info-box" >
      <div class="info-title">开始时间</div>
      <div class="info-cont">{{info.startTime}}</div>
    </div>
    <div class="info-box" >
      <div class="info-title">结束时间</div>
      <div class="info-cont">{{info.endTime}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from "@/store"
export default {
  data() {
    return {
      // info: {
      //   carriage: "2车厢，9A",
      //   clueSource: "https://weibo.com/3802143838/IrAOGw6Ov",
      //   dateTime: "2020-01-23",
      //   departureStation: "昆明站",
      //   describes: "",
      //   destination: "祥云站",
      //   endTime: "2020/01/23 14:37:00",
      //   id: 0,
      //   startTime: "2020/01/23 12:54:00",
      //   submissionTime: "2020/01/29 19:22:39",
      //   trafficType: "2",
      //   trainName: "D3936"
      // }
    }
  },
  watch: {
    
  },
  filters: {
    formatTraffic(type) {
      let arr = ['全部', '飞机', '火车', '地铁', '公交车', '长途客车', '出租车', '轮船', '其他'];
      return arr[type]
    }
  },
  computed: {
    ...mapState(['info']),
  },
  methods: {
    closeInfoBox() {
      store.commit('initInfoBoxStatus', false)
    }
  },
  mounted() {

  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 34%;
  height: 70%;
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: url('../assets/images/search/info-bg.png') no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  z-index: 999;
  .title {
    font-size: 18px;
    text-align: center;
    margin: 20px 0 4px 0;
    font-weight: bold;
    color: #00c5ff;
  }
  .close-btn {
    position: absolute;
    top:18px;
    right: 18px;
    cursor: pointer;
  }
  .info-box {
    height: 9%;
    width: 90%;
    margin: 0 auto;
    border-bottom: 1px solid #005091;
    display: flex;
    align-items: center;
    font-size: 16px;
    .info-title {
      color: #00c5ff;
      width:30%;
      white-space: wrap;
      margin-left: 7px;
    }
    .info-cont {
      color:#fff;
      margin-left: 40px;
      width:60%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>