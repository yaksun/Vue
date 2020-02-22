<template>
  <div class="content">
    <div class="title">信息详情</div>
    <img class="close-btn" @click="closeInfoBox" src="../assets/images/icon/close.png">
    <div class="info-box" >
      <div class="info-title">姓名</div>
      <div class="info-cont">{{helpInfo.name}}</div>
    </div>
    <div class="info-box">
      <div class="info-title">电话</div>
      <div class="info-cont">{{helpInfo.phone}}</div>
    </div>
    <div class="info-box">
      <div class="info-title">地址</div>
      <div class="info-cont">{{helpInfo.address}}</div>
    </div>
    <div class="detail-box">
      <div class="detail-title">内容</div>
      <div class="detail-cont">{{helpInfo.content}}</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import store from "@/store"
export default {
  data() {
    return {
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
    ...mapState(['helpInfo']),
  },
  methods: {
    closeInfoBox() {
      store.commit('initHelpInfoBoxStatus', false)
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
  .detail-box {
    width: 90%;
    margin: 5px auto;
    border-bottom: 1px solid #005091;
    display: flex;
    align-items: center;
    font-size: 16px;
    .detail-title {
      color: #00c5ff;
      width:30%;
      white-space: wrap;
      margin-left: 7px;
    }
    .detail-cont {
      color:#fff;
      margin-left: 40px;
      width:60%;
      white-space: normal;
    }
  }
}
</style>