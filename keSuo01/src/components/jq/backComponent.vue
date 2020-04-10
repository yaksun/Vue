<template>
  <div class="backjq-box" v-drag>
    <div class="title drog-box">
      <p>回退</p>
    </div>
    <div class="content">
      <p>理由</p>
      <el-input
        class="reason-box"
        type="textarea"
        :rows="9"
        placeholder="请输入理由"
        maxlength="300"
        show-word-limit
        v-model="reason"
      ></el-input>
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
import { backParam_par_model } from "@/model/instructionInfo/taskInfo_model";
import { instructionInfoService } from "@/bll/instructionInfo/taskInfoService";
import { Message } from "element-ui";

@Component
export default class Back extends Vue {
  @Prop() public currentInsDatas!: any; // 当前指令的数据
  private reason: string = ""; //
  handleCancel() {
    this.$emit("closeBackBox", false);
  }

  public async handleSubmit() {
    if (!this.reason) {
      Message.warning("请输入申请理由");
      return;
    }
    let stationNum = this.$store.state.userinfo.policeStationInfo.stationNum;
    if (stationNum != "SJ") {
      let params = new backParam_par_model();
      params.reason = this.reason;
      params.tag = "辖区争议";
      params.taskId = this.currentInsDatas.taskId;
      params.userId = this.$store.state.userinfo.userId;
      try {
        let result = await new instructionInfoService().bus_instructions_back(
          params
        );
        if (result.code == 200 && result.msg == "ok") {
          this.$message({
            message: "警情回退成功"
          });
          this.$emit("closeBackBox", false);
          this.$emit("isGetListFlagFn", true); //让左侧俩表刷新 和地图清屏
        }
      } catch (err) {
        this.$emit("closeBackBox", false);
      }
    } else if (stationNum === "SJ") {
      Message.warning("市局单位无需申请回退");
      this.$emit("closeBackBox", false);
    }
  }
}
</script>

<style lang="scss" scoped>
.backjq-box {
  width: 450px;
  height: 320px;
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
    margin: 16px 23px;
    justify-content: space-between;
    font-size: 14px;
    color: #333;
    p {
      width: 40px;
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
