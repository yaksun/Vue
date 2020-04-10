<template>
  <div class="message-box" v-drag>
    <div class="top-message-box drog-box">
      <img src="~@/assets/images/jq/remind-icon.png">
      <p>您有一条新警情待分派</p>
    </div>
    <div class="message-content">
      <div class="content">
        <span>【警情摘要】</span>
        <span>报警人描述马路边有一根电线落下了，可能会对过路人造成安全隐患。</span>
      </div>
      <div class="info-box">
        <div class="address-box">
          <img src="~@/assets/images/jq/address-icon.png">
          <span>汉商武展购物中心</span>
        </div>
        <div class="time-box">
          <img src="~@/assets/images/jq/time-icon.png">
          <span>2020-02-03 11:11</span>
        </div>
      </div>
    </div>
    <div class="function-box">
      <el-button class="close-box" @click="closeMessageBox">稍后操作</el-button>
      <el-button class="push-police" @click="showPushBox">立即分派</el-button>
    </div>
  </div>     
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop, Emit } from "vue-property-decorator";

@Component
export default class MessageBox extends Vue {
  

  closeMessageBox() {
    this.$emit('closeAddNewAlarmInfo', false);
  }

  showPushBox() {
    this.$emit('showPushBox', true);
  }
}

</script>

<style lang="scss" scoped>
.message-box {
  width: 380px;
	height: 172px;
	background-color: #0a0a0a;
	border-radius: 20px;
	opacity: 0.75;

  position: absolute;
  top:20%;
  left: calc(100% - 200px);
  transform: translate(-50%, -50%);
  z-index: 999;
  .top-message-box {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 14px 0 0 17px;
    img {
      width:18px;
      height: 18px;
      margin-right: 8px;
    }
    p {
      color: #ff2d2d;
      font-size: 14px;
    }
  }
  
  .message-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .content {
      display: inline-block;
      white-space: pre-wrap;
      margin: 12px 0 12px 17px;
      span {
        font-size: 14px;
        color: #fff;
      }
    }

    .info-box {
      font-size: 14px;
      color:#fff;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 11px 0 17px;
      .address-box {
        display: flex;
        align-items: center;
        img {
          margin-right: 6px;
        }
      }

      .time-box {
        display: flex;
        align-items: center;
        img {
          margin-right: 6px;
        }
      }
    }
  }

  .function-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 12px;
    .el-button {
      width: 120px;
      height: 36px;
      background-color: #3366ff !important;
      border-radius: 8px !important;
      border: solid 1px #3366ff !important;
      color: #fff !important;
    }
    
    .close-box {
      margin-right: 30px;
    }
  }
}
</style>