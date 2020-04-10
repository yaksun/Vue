<template>
  <div class="bodyWrap" v-drag>
    <div class="headerWrap drog-box">
      <div class="title">
        <img src="~@/assets/images/jq/remind-icon.png" />
        <p>您有一条新警情待分派</p>
      </div>
      <img src="~@/assets/images/police-box/close.png" title="关闭" @click="closeBox">
    </div>
    <div class="contentWrap">
      <div class="content">
        <span class="content-first">【警情摘要】</span>
        <span class="content-second">{{ taskInfo.insContent }}</span>
      </div>
      <div class="content-box">
        <div class="content-address">
          <img src="~@/assets/images/jq/address-icon.png" />
          <span>{{ taskInfo.address | transferAddress }}</span>
        </div>
        <div class="content-box">
          <img src="~@/assets/images/jq/time-icon.png" />
          <span>{{ taskInfo.sendTime | transferTime }}</span>
        </div>
      </div>
    </div>
    <div class="imageWrap">
      <div class="handselect-wrap">智能推荐</div>
      <div class="image-body-wrap">
        <div class="police-info-box">
          <img src="~@/assets/images/info/jc.png" />
          <p :title="policeName">{{ policeName }}</p>
          <p :title="policeCode">{{ policeCode }}</p>
        </div>
      </div>
      <div class="end-warp" @click="goMorePoliceBox">
        <span>更多</span>
        <div class="morewarp"></div>
      </div>
    </div>
    <div class="function-box">
      <el-button class="push-police" @click="pushPolice">立即分派</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Action, Getter, State, Mutation } from "vuex-class";
import { Component, Prop, Emit, Watch } from "vue-property-decorator";

import { queryModel_ui_model } from "@/model/instructionInfoUser/instructionInfoUser_model";
import { instructionInfoUserService } from "@/bll/instructionInfoUser/instructionInfoUserService";

import { orderTaskPush_par_model } from "@/model/instructionInfo/orderTask_model";
import { orderTaskService } from "@/bll/instructionInfo/orderTaskService";

import { time } from "@/utils/formatTime";

@Component({
  filters: {
    transferAddress: (val: any) => {
      if (val) {
        return val;
      }
      return "暂无";
    },
    transferTime: (val: any) => {
      if (val) {
        return time.getDateTimeByStr(val, false, false);
      }
      return "暂无";
    }
  }
})
//分派 警情信息弹出框
export default class newAssignInfoComponent extends Vue {
  @Getter("getUserinfo") userInfo: any; // 用户信息

  private taskInfo: any = ""; // 当前指令信息
  private policeData: any = ""; // 推荐民警信息

  /** 民警信息 */
  private policeCode: string = "";
  private policeName: string = "";
  private stationName: string = "";

  public setTaskinfo(item: any) {
    this.taskInfo = item;
  }

  @Watch("taskInfo")
  onTaskinfoChanged(val: any, oldVal: any) {
    console.log(val);
    this.taskInfo = val;
    this.getRecommendPolices();
  }

  /** 更多 */
  public goMorePoliceBox() {
    this.$emit('morePolice', true);
    this.$emit('closeRecommendBox', false);
  }

  /** 关闭弹窗 */
  public closeBox() {
    this.$emit('closeRecommendBox', false);
  }

  /** 推送民警 */
  public async pushPolice() {
    let params = new orderTaskPush_par_model();
    params.taskId = this.taskInfo.taskId;
    params.userId = this.userInfo.userId;
    params.receivePartParamObj = {
      receivePartParam: [
        {
          /***内容类型(1:文本 2:文件 3:语音)***/
          catalog: 1,
          /***文件ID集合***/
          fileKey: [],
          /***	是否知会(0:不知会 1:知会)***/
          isNotified: 0,
          /***用户或者部门标识符***/
          partId: this.policeData.userId,
          /***	参与者类型(0:人 1:部门 2:警务通 3:车小丫 4:手台)***/
          partType: 0,
          /***内容***/
          payload: this.userInfo.policeStationInfo.stationName + '分派给' + this.policeData.policeName,
          /***推送设备类型，默认全部ALL***/
          pushDevice: 'ALL',
          /***限制时长***/
          timeSpan: this.taskInfo.timeSpan,
          /***限制时长单位***/
          timeUnit: this.taskInfo.timeUnit
        }
      ]
    };
    let resultData = await new orderTaskService().orderTaskPush(params);
 
    if(resultData.code == '200' && resultData.msg == 'ok') {
      this.$emit('closeRecommendBox', false);
      this.$message({
        type: 'success',
        message: '推送成功！'
      });
    }
  }

  /** 获取只能推荐 */
  public async getRecommendPolices() {
    let params = new queryModel_ui_model();
    params.stationId = this.userInfo.policeStationInfo.id;
    params.insId = this.taskInfo.id;
    params.loadingTarget =".function-box";
    let resultData = await new instructionInfoUserService().instructionUser_recommendation_user(
      params
    );
    if (resultData.code == "200" && resultData.msg == "ok") {
      this.policeData = resultData.data;
      this.policeName = this.policeData.policeName;
      this.policeCode = this.policeData.policeCode;
      this.stationName = this.policeData.stationName;
    }
  }
}
</script>

<style lang="scss" scoped>
.bodyWrap {
  width: 380px;
  height: 300px;
  border-radius: 8px;
  background-color: white; //opacity: 0.75;
  position: absolute;
  top: 29%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  .headerWrap {
    display: flex;
    background-color: #ffd3d6;
    align-items: center;
    justify-content: space-between;
    padding: 8px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    .title {
      display: flex;
      align-items: center;
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
    > img {
      cursor: pointer;
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
        color: #ff2d2d;
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
    background-color: #f3f3f4;
    margin-top: 10px;
    display: flex;
    .handselect-wrap {
      width: 20px;
      line-height: 18px;
      margin-top: 25px;
      margin-left: 10px;
    }
    .image-body-wrap {
      width: 180px;
      height: 90%;
      margin: 5px 5px 5px 5px;
      border-radius: 5px;
      .police-info-box {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        width: 90px;
        height: 110px;
        background-color: #009aff;
        border-radius: 3px;
        color: #fff;
        font-size: 14px;
        margin-right: 12px;
        img {
          width: 48px;
          height: 67px;
        }
        p {
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          width: 100%;
          padding: 0 8px;
          text-align: center;
        }
      }
    }
  }
  .end-warp {
    margin: auto;
    display: flex;
    margin-right: 20px;
    color: #40b8fe;
    cursor: pointer;
    .morewarp {
      background-image: url("~@/assets/images/info/gd.png");
      background-size: 16px 16px;
      height: 16px;
      width: 16px;
      margin-top: 3px;
      margin-left: 5px;
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
    background-color: white !important;
    color: black !important;
    border: solid 1px #9e9e9e !important;
  }
}
</style>
