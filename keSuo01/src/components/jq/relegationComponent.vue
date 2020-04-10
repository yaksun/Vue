<template>
  <div class="backjq-box" v-drag>
    <div class="title drog-box">
      <p>升降级申请</p>
    </div>
    <div class="content">
      <div class="suggest-box">
        <p>申请建议：</p>
        <div class="radio-box">
          <el-radio v-model="radio" :label="up">升级</el-radio>
          <el-radio v-model="radio" :label="dom">降级</el-radio>
        </div>
      </div>
      <div class="reason-box">
        <p>申请理由：</p>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入理由"
          maxlength="1024"
          show-word-limit
          v-model.trim="reason"
        ></el-input>
      </div>
    </div>
    <div class="footer">
      <el-button @click="handleCancel" class="cancel-btn">取消</el-button>
      <el-button @click="handleSubmit" class="submit-btn">确认</el-button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit } from "vue-property-decorator";
import { liftingParam_par_model } from "@/model/instructionInfo/taskInfo_model";
import { instructionInfoService } from "@/bll/instructionInfo/taskInfoService";
import { Message } from "element-ui";

import { time } from "@/utils/formatTime";

@Component
export default class Relegation extends Vue {
  @Prop() public currentInsDatas!: any; // 当前指令的数据
  private radio: number = 0; //
  private up: number = 1;
  private dom: number = 0;
  private reason: string = ""; //

  handleCancel() {
    this.$emit("closeRelegationBox", false);
  }

  async handleSubmit() {
    if (!this.reason) {
      Message.warning("请输入申请理由");
      return;
    }
    let stationNum = this.$store.state.userinfo.policeStationInfo.stationNum;
    if (stationNum != "SJ") {
      let params = new liftingParam_par_model();
      params.addedDate = time.getDateTimeByStr(new Date(), true, true);
      params.applyLevel = this.radio;
      params.content = this.reason;
      params.insId = this.currentInsDatas.id;
      params.stationId = this.$store.state.userinfo.policeStationInfo.id;
      params.taskId = this.currentInsDatas.taskId;
      params.userId = this.$store.state.userinfo.userId;
      let arr: any = [];
      arr.push(params);
      try {
        let result = await new instructionInfoService().polsituinfo_addlylevel(
          arr
        );
        if (result.code == 200 && result.msg == "ok") {
          this.$message({
            message: "警情升降级请求"
          });
          this.$emit("closeRelegationBox", false);
        }
      } catch (err) {
        // this.$message.error("已经提交了相同的请求");
        this.$emit("closeRelegationBox", false);
      }
    } else if (stationNum === "SJ") {
      Message.warning("市局单位无需申请升降级");
      this.$emit("closeRelegationBox", false);
    }
  }
}
</script>

<style lang="scss" scoped>
.backjq-box {
  width: 380px;
  height: 260px;
  background-color: #ffffff;
  box-shadow: 0px 10px 6.5px 0.5px #f0f1f1;
  border-radius: 6px;
  border: solid 1px #e0e0e0;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  .title {
    width: 100%;
    height: 54px;
    line-height: 54px;
    background-color: #f6f6f6;
    border-bottom: solid 1px #e0e0e0;

    p {
      margin-left: 23px;
      color: #304363;
      font-size: 16px;
    }
  }

  .content {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 16px 23px;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
    .suggest-box {
      width: 100%;
      display: flex;

      p {
        width: 80px;
      }

      .radio-box {
        .el-radio__label {
          color: #000 !important;
        }

        ::v-deep .el-radio__input.is-checked + .el-radio__label {
          color: #409eff !important;
        }
      }
    }

    .reason-box {
      width: 100%;
      display: flex;
      margin-top: 16px;
      p {
        width: 100px;
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: center;
    .el-button {
      width: 100px;
      height: 36px;
      background-color: #6393f7 !important;
      border-radius: 6px !important;
      border: solid 1px #6393f7 !important;
      color: #fff !important;
    }

    .cancel-btn {
      background-color: #fff !important;
      border-radius: 6px !important;
      border: solid 1px #c2c2c2 !important;
      color: #000 !important;
    }
  }
}
</style>
