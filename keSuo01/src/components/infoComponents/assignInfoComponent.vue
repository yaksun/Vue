<template>
<div class="bodyWrap">
  <div class="headerWrap">
    <img src="~@/assets/images/jq/remind-icon.png">
    <p>您有一条新警情待分派</p>
  </div>
  <div class="contentWrap">
    <div class="content">
      <span class="content-first">【警情摘要】</span>
      <span class="content-second">报警人描述马路边有一根电线落下了，可能会对过路人造成安全隐患。</span>
    </div>
    <div class="content-box">
      <div class="content-address">
        <img src="~@/assets/images/jq/address-icon.png">
        <span>汉商武展购物中心</span>
      </div>
      <div class="content-box">
        <img src="~@/assets/images/jq/time-icon.png">
        <span>2020-02-03 11:11</span>
      </div>
    </div>
  </div>
  <div class="imageWrap">
    <div class="handselect-wrap">手动选择
    </div>
    <div class="image-body-wrap">
      <div class="image-box">
        <img src="~@/assets/images/info/jc.png">
      </div>
      <div class="poince-box">
        <i>小王</i>
        <i>025612</i>
      </div>
    </div>
    <div class="image-body-wrap">
      <div class="image-box">
        <img src="~@/assets/images/info/jc.png">
      </div>
      <div class="poince-box">
        <i>小王</i>
        <i>025612</i>
      </div>
    </div>
    <div class="image-body-wrap">
      <div class="image-box">
        <img src="~@/assets/images/info/jc.png">
      </div>
      <div class="poince-box">
        <i>小王</i>
        <i>025612</i>
      </div>
    </div>
    <div class="end-warp">
      <span>推荐</span>
      <div class="morewarp"></div>
    </div>
  </div>
  <div class="function-box">
    <el-button class="close-box">稍后操作</el-button>
    <el-button class="push-police">立即分派</el-button>
  </div>
</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {
  Component,
  Prop,
  Emit
} from "vue-property-decorator";

@Component
//分派 警情信息弹出框
export default class assignInfoComponent extends Vue {



}
</script>

<style lang="scss" scoped>
.bodyWrap {
  width: 380px;
  height: 300px;
  border-radius: 8px;
  background-color: white; //opacity: 0.75;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .headerWrap {
    display: flex;
    background-color: #FFD3D6;
    align-items: center;
    justify-content: flex-start;
    padding: 8px;
    border-top-left-radius:8px;
    border-top-right-radius:8px;
    img {
      width: 18px;
      height: 18px;
      margin-right: 8px;
    }
    p {
      color: #ff2d2d;
      font-size: 14px;
      font-family: Microsoft YaHei;
    }
  }
  .contentWrap {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .content {
      display: inline-block;
      white-space: pre-wrap;
      margin: 12px 0 12px 17px;
      .content-first {
        font-size: 16px;
        color: red;
        font-weight: 500;
      }
      .content-second {
        font-size: 16px;
        font-weight: 500;
      }
    }
    .content-box {
      font-size: 14px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 11px 0 17px;
      .content-address {
        display: flex;
        align-items: center;
        img {
          margin-right: 6px;
        }
      }
      .content-box {
        display: flex;
        align-items: center;
        img {
          margin-right: 6px;
        }
      }
    }
  }
  .imageWrap {
    height: 120px;
    background-color: #F3F3F4;
    margin-top: 10px;
    display: flex;
    .handselect-wrap {
      width: 20px;
      line-height: 18px;
      margin-top: 25px;
      margin-left: 10px;
    }
    .image-body-wrap {
      width: 80px;
      height: 90%;
      background-color: #009BFF;
      margin: 5px 5px 5px 5px;
      border-radius: 5px;
      .image-box {
        text-align: center;
        margin-left: 6px;
        margin-top: 5px;
        img {
          margin-right: 6px;
          height: 61px;
          width: 46px;
        }
      }
      .poince-box {
        color: white;
        font-size: 14px;
        display: grid;
        i {
          text-align: center;
        }
      }
    }
    .end-warp {
      margin: auto;
      display: flex;
      color: blue;
      .morewarp {
        background-image: url("~@/assets/images/info/gd.png");
        background-size: 16px 16px;
        height: 16px;
        width: 16px;
        margin-top: 3px;
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
      background-color: #3366ff  !important;
      border-radius: 8px !important;
      border: solid 1px #3366ff  !important;
      color: #fff !important;
    }
    .close-box {
      margin-right: 30px;
      background-color:white !important;
      color: black !important;
       border: solid 1px #9E9E9E !important;
    }
  }
}
</style>