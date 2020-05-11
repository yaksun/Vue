<template>
  <div class="backjq-box" v-drag>
    <div class="title drog-box">
      <p>延时申请</p>
    </div>
    <div class="content">
      <div class="suggest-box">
        <p>申请延时：</p>
        <div class="input-box">
          <el-input v-model="timeNumber" type="number" min="0"></el-input>
          <el-select v-model="timeUnit">
            <el-option
              v-for="item in timeUnitArray"
              :key="item.key"
              :label="item.value"
              :value="item.key"
            ></el-option>
          </el-select>
        </div>
      </div>
      <div class="reason-box">
        <p>延时理由：</p>
        <el-input
          type="textarea"
          :rows="4"
          placeholder="请输入理由"
          maxlength="1024"
          show-word-limit
          v-model="reason"
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
import { Component, Prop, Emit, Watch } from "vue-property-decorator";
import { applydelay_new_par_model } from "@/model/instructionInfo/taskInfo_model";
import { time } from "@/utils/formatTime";
import { Message } from "element-ui";
import { instructionInfoService } from "@/bll/instructionInfo/taskInfoService";

@Component
export default class Delay extends Vue {
  @Prop() public currentInsDatas!: any; // 当前指令的数据
  private timeNumber: number = 1; // 1升级 0 降级
  private timeUnit: string = "M";
  private reason: string = ""; //
  private timeUnitArray: Array<object> = [
    { key: "M", value: "分钟" },
    { key: "H", value: "小时" },
    { key: "D", value: "天" }
  ];
  @Watch("timeNumber")
  minTimeNumber(val: number, oldVal: number) {
    if (val < 0) {
      this.timeNumber = 0;
      //  时间不允许输入负数
    }
  }

  handleCancel() {
    this.$emit("closeDelayBox", false);
  }

  async handleSubmit() {
    if (!this.reason) {
      Message.warning("请输入申请理由");
      return;
    }
    let stationNum = this.$store.state.userinfo.policeStationInfo.stationNum;
    if (stationNum != "SJ") {
      let params = new applydelay_new_par_model();
      params.addedDate = time.getDateTimeByStr(new Date(), true, true);
      params.sn = this.currentInsDatas.no;
      params.content = this.reason;
      params.applyTime = this.timeNumber;
      params.applyTimeType = this.timeUnit;
      params.insId = this.currentInsDatas.id;
      params.stationId = this.$store.state.userinfo.policeStationInfo.id;
      params.taskId = this.currentInsDatas.taskId;
      params.userId = this.$store.state.userinfo.userId;
      let arr: any = [];
      arr.push(params);
      try {
        let result = await new instructionInfoService().bus_instructions_applydelay_new(
          arr
        );
        if (result.code == 200 && result.msg == "ok") {
          this.$message({
            message: "警情延时请求成功"
          });
          this.$emit("closeDelayBox", false);
        }
      } catch (err) {
        this.$emit("closeDelayBox", false);
      }
    } else if (stationNum === "SJ") {
      Message.warning("市局单位无需申请延时");
      this.$emit("closeDelayBox", false);
    }
  }
}
</script>

<style lang="scss" scoped>
.backjq-box {
  width: 380px;
  height: 270px;
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
        width: 100px;
      }

      .input-box {
        display: flex;
        align-items: center;
        justify-content: space-between;
        ::v-deep .el-input {
          margin-right: 10px;
          .el-input__inner {
            padding: 0 0 0 6px;
          }
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
