<template>
  <div class="wrapper">
    <headerComponent></headerComponent>
    <BaseMapComponent
      :currentuserID="CurrentuserID"
      :stationId="stationId"
      :isGetListFlag="isGetListFlag"
      @on_backYP_command="on_backYP_command"
      @on_noticeYP_command="on_noticeYP_command"
      @on_applyYP_command="on_applyYP_command"
      @on_delayedYP_command="on_delayedYP_command"
      @on_relegationYP_command="on_relegationYP_command"
      @on_dblclicktask_command="on_dblclicktask_command"
      class="home-map-section"
      ref="refBaseMapComponent"
    ></BaseMapComponent>
    <taskList
      :isGetListFlag="isGetListFlag"
      @passTaskToMap="passTaskToMap"
      @closeAllBox="closeAllBox"
      @closeMapIcon="closeMapIcon"
      @isGetListFlagFn="isGetListFlagFn"
    ></taskList>
    <chat></chat>
    <taskVoiceTips></taskVoiceTips>
    <footerComponent></footerComponent>

    <pushPolice
      :currentInsDatas="currentInsDatas"
      @closePushPolice="closePushPolice"
      @showTimeAndDistance="showTimeAndDistance"
      @closeShowTimeAndDistance="closeShowTimeAndDistance"
      v-if="showPushPoliceStatus"
    ></pushPolice>
    <noticeComponent
      :currentInsDatas="currentInsDatas"
      @closeNoticeBox="closeNoticeBox"
      @on_repeatEvent_command="on_repeatEvent_command"
      v-if="showNoticeStatus"
    ></noticeComponent>

    <repeatEvent
      v-if="showRepeatEvent"
      :currentInsDatas="currentInsDatas"
      @closeRepeatEventBox="closeRepeatEventBox"
    ></repeatEvent>
    <backComponent
      :currentInsDatas="currentInsDatas"
      @closeBackBox="closeBackBox"
      @isGetListFlagFn="isGetListFlagFn"
      v-if="showBackStatus"
    ></backComponent>
    <relegationComponent
      :currentInsDatas="currentInsDatas"
      @closeRelegationBox="closeRelegationBox"
      v-if="showRelegationStatus"
    ></relegationComponent>
    <delayComponent
      :currentInsDatas="currentInsDatas"
      @closeDelayBox="closeDelayBox"
      v-if="showDelayStatus"
    ></delayComponent>

    <newAssignInfoComponent
      @morePolice="morePolice"
      @closeRecommendBox="closeRecommendBox"
      v-if="showTaskFP"
      ref="refnewassign"
    ></newAssignInfoComponent>
    <!-- signalr 消息提示弹窗 -->
    <messageComponent v-if="showAddAlarmInfoStatus" @showPushBox="showPushBox" @closeAddNewAlarmInfo="closeAddNewAlarmInfo"></messageComponent>
    <!-- <assignInfoComponent></assignInfoComponent> -->
    <taskDetail
      v-if="isDetailDisplay"
      :taskDetail="selectedTask"
      @closeDetail="closeDetail"
    ></taskDetail>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Emit, Watch } from "vue-property-decorator";
import BaseMapComponent from "@/components/baseComponents/baseMapComponent.vue";
import taskList from "@/components/taskList/taskList.vue";
import chat from "@/components/chatComponents/chat.vue";
import headerComponent from "@/components/headerComponent.vue";
import footerComponent from "@/components/footerComponent.vue";

import pushPolice from "@/components/jq/pushPoliceComponet.vue";
import noticeComponent from "@/components/jq/noticeComponent.vue";
import backComponent from "@/components/jq/backComponent.vue";
import relegationComponent from "@/components/jq/relegationComponent.vue";
import delayComponent from "@/components/jq/delayComponent.vue";
import messageComponent from "@/components/jq/messageComponent.vue";

import assignInfoComponent from "@/components/infoComponents/assignInfoComponent.vue";
import newAssignInfoComponent from "@/components/infoComponents/newAssignInfoComponent.vue";
import repeatEvent from "@/components/repeatEvent/repeatEvent.vue"; //重复警情
import taskDetail from "@/components/taskList/taskDetail.vue";
import taskVoiceTips from "@/components/taskList/taskVoiceTips.vue";
import store from "@/store/store";
import { Action, Getter, State, Mutation } from "vuex-class";
import { token_ui_model } from "@/model/sysManage/login_result_model";
import { loginService } from "@/bll/sysManage/loginService";

import * as types from "@/store/mutation-types";

import {
  alarmPolice_ui_model,
  ppolsituInfo_ui_model
} from "@/model/sysManage/alarm_result_model";
import { alarmService } from "@/bll/sysManage/alarmService";

import { WaterMark } from "@/utils/waterMark";

@Component({
  components: {
    BaseMapComponent,
    taskList,
    taskVoiceTips,
    chat,
    headerComponent,
    footerComponent,
    pushPolice,
    noticeComponent,
    backComponent,
    relegationComponent,
    delayComponent,
    messageComponent,
    assignInfoComponent,
    newAssignInfoComponent,
    taskDetail,
    repeatEvent
  }
})
export default class Home extends Vue {
  @Action("setCaseSource") setCaseSourceActionCommand!: any;
  @Action("setCaseDatas") setCaseDatasActionCommand!: any;
  @Action("setPositionDatas") setPositionDatasActionCommand!: any;
  @Action("setDutyZone") setDutyZoneActionCommand!: any;
  @Action("setCurrentPoliceList") setCurrentPoliceListActionCommand!: any;

  @Getter("getUserinfo") userInfo: any; // 用户信息

  @Getter('getAlarmInsInfo') addAlarmInsInfo: any; // 新增警情指令信息

  @Mutation(types.SET_NEWTASK) set_newTask: any;

  @Watch('addAlarmInsInfo')
  onAddAlarmInsInfoChanged(val: any, oldVal: any) {
    this.showAddAlarmInfoStatus = true;
    this.set_newTask(true);
    console.log(val); 
  }

  private refBaseMapComponent: any = {}; /**地图基础组件 */
  private curhealthCheckTimer: any = 0;
  private storeToken: string = "";
  private CurrentpoliceCode: string = ""; /* 警察code */
  private CurrentuserID: string = ""; /* 用户ID */
  private Currentloginname: string = ""; /* 登陆名 */
  private stationId: string = ""; /* 部门ID */

  /** 组件显示控制 */
  private showNoticeStatus: boolean = false;
  private showPushPoliceStatus: boolean = false;
  private showBackStatus: boolean = false;
  private showRelegationStatus: boolean = false;
  private showDelayStatus: boolean = false;
  private showTaskFP: boolean = false;
  private showAddAlarmInfoStatus: boolean = false;
  private showRepeatEvent: boolean = false;

  /** 父子组件传递的当前指令信息 */
  private currentInsDatas: object = {};
  /**选中的某条任务**/
  private selectedTask: any = {};
  private isDetailDisplay: boolean = false;
  /**选中的某条任务**/

  private isGetListFlag: boolean = false;
  /** 地图面板事件 */
  /** 回退事件 */
  @Emit()
  on_backYP_command(data: any) {
    this.showBackStatus = true;
    this.currentInsDatas = data;
  }

  /** 回告事件 */
  @Emit()
  on_noticeYP_command(data: any) {
    this.currentInsDatas = data;
    if (data.businessFrom === 1) {
      this.showNoticeStatus = true;
    } else {
      this.$message.warning("暂时只针对警情回告");
    }
  }
  /** 打开关联警情界面 */
  on_repeatEvent_command(data: any) {
    this.currentInsDatas = data;
    this.showRepeatEvent = true;
  }
  /** 分派事件 */
  @Emit()
  on_applyYP_command(data: any) {
    this.showPushPoliceStatus = true;
    this.currentInsDatas = data;
  }

  /** 申请升降级 */
  @Emit()
  on_relegationYP_command(data: any) {
    this.showRelegationStatus = true;
    this.currentInsDatas = data;
  }

  /** 申请延时 */
  @Emit()
  on_delayedYP_command(data: any) {
    this.showDelayStatus = true;
    this.currentInsDatas = data;
  }
  /** end */

  /** 关闭推送民警弹框 */
  @Emit()
  closePushPolice(status: boolean) {
    this.showPushPoliceStatus = status;
  }

  /** 关闭回告弹框 */
  @Emit()
  closeNoticeBox(status: boolean) {
    this.showNoticeStatus = status;
  }
  /** 关闭警情关联弹框 */
  closeRepeatEventBox() {
    this.showNoticeStatus = false;
  }

  /** 关闭回退弹框 */
  @Emit()
  closeBackBox(status: boolean) {
    this.showBackStatus = status;
  }

  /** 关闭申请升降级弹框 */
  @Emit()
  closeRelegationBox(status: boolean) {
    this.showRelegationStatus = status;
  }

  /** 查看详情 */
  @Emit()
  on_dblclicktask_command(resultParameters: any) {
    console.log("查看详情");
    console.log(resultParameters);
    this.selectedTask = resultParameters;
    this.isDetailDisplay = true;
  }

  /** 关闭新增指令弹窗 */
  closeAddNewAlarmInfo(status: boolean) {
    this.showAddAlarmInfoStatus = status;
  }

  showPushBox(status: boolean) {
    this.showPushPoliceStatus = status;
  }

  /** 关闭申请延时弹框 */
  closeDelayBox(status: boolean) {
    this.showDelayStatus = status;
  }

  /**
   * 关闭详情页面
   * */
  closeDetail(data: boolean) {
    this.isDetailDisplay = data;
  }

  /** 刷新列表，关闭说要弹窗 */
  closeAllBox(status: boolean) {
    this.showNoticeStatus = status;
    this.showPushPoliceStatus = status;
    this.showBackStatus = status;
    this.showRelegationStatus = status;
    this.showDelayStatus = status;
    this.showRepeatEvent = status;
    /** 关闭推送警情 */
    // this.showTaskFP = status;
  }
  /**
   * 请求回退刷新列表
   * */
  isGetListFlagFn(data: boolean) {
    this.isGetListFlag = data;
  }
  /** 打开推送民警组件 */
  morePolice(status: boolean) {
    this.showPushPoliceStatus = status;
  }

  /** 关闭智能推荐弹窗组件 */
  closeRecommendBox(status: boolean) {
    this.showTaskFP = status;
  }

  /** 关闭地图图标 */
  closeMapIcon() {
    (this.$refs.refBaseMapComponent as any).clearJQ();
    this.showTaskFP = false;
  }

  /** 上图，显示民警轨迹和时间 */
  showTimeAndDistance(item: any) {
    (this.$refs.refBaseMapComponent as any).rePayPoliceToMap(item.userId);
  }

  /** 结束显示民警轨迹和时间 */
  closeShowTimeAndDistance(item: any) {
    (this.$refs.refBaseMapComponent as any).cancelPoliceToMap(item.userId);
  }

  private created() {
    // 导航页中 选中的菜单数据
    //console.log(sessionStorage.getItem("enterMenu"));
    // this.$route.query.paramter
    //////////////////////////////// 测试  /////////////////////////////////////////////////
    console.log("权限控制--测试", this.$route.query.paramter);
    let type = (this.$route.query.paramter as any).type;
    switch (type) {
      case "jq": {
      }
      case "yq": {
      }
    }
    ///////////////////////////////////////////////////////////////////////////////////////
  }
  public mounted() {
    this.getJqDictionaryData(); // 警情回告字典数据
this.set_newTask(false);
    this.refBaseMapComponent = this.$refs.refBaseMapComponent;

    this.$nextTick(() => {
      //心跳监测
      this.curhealthCheckTimer = setInterval(() => {
        // this.healthCheck();
      }, 1000 * 5); //2分钟刷新一次在实时数据

      //获取token
      if (!!store.state.token) this.storeToken = store.state.token;
      else if (!!sessionStorage.getItem("token"))
        this.storeToken = sessionStorage.getItem("token") as string;
      //获取用户

      if (!!store.state.userinfo) {
        this.Currentloginname = (<any>store.state.userinfo).loginName || "";
        this.CurrentuserID = (<any>store.state.userinfo).userId || "";
        this.CurrentpoliceCode = (<any>store.state.userinfo).policeCode || "";
        this.stationId = (<any>store.state.userinfo).policeStationInfo.id || "";
      } else if (!!sessionStorage.getItem("userinfo")) {
        let useinfoboj: any = JSON.parse(
          sessionStorage.getItem("userinfo") || ""
        );
        this.Currentloginname = useinfoboj.loginName || "";
        this.CurrentuserID = useinfoboj.userId || "";
        this.CurrentpoliceCode = useinfoboj.policeCode || "";
        this.stationId = useinfoboj.policeStationInfo.id || "";
      }

      // debugger;

      /**
       * 设置水印
       */
      this.setWatermarkData();
    });
  }

  /**
   * @description: 传递任务信息到地图，定位警情等数据
   * @param {type}
   * @return:
   */
  private passTaskToMap(item: any) {
    (this.$refs.refBaseMapComponent as any).passTaskToMap(item);
    //显示任务分配
    this.showTaskFP = true;
    this.$nextTick(() => {
      (this.$refs.refnewassign as any).setTaskinfo(item);
    });
  }

  //心跳检测
  private async healthCheck() {
    let para = new token_ui_model();
    //para.loadingTarget = "online";
    para.clientVersion = "1.2.3.8";
    para.path = "E:\\workFile\\消息通知中心\\Output";
    para.code = "BFEBFBFF000806EA-335A_4830_4B22_3271_0025_3846_0000_0001.";
    para.isNew = 1;
    para.isOnline = 1;
    para.sysLoginname = this.Currentloginname;
    para.token = this.storeToken;
    let tokenData = await new loginService().getToken(para);
    if (tokenData.code == "0" && tokenData.msg == "ok") {
      console.log("心跳检测连接服务器成功!");
    } else {
      console.log("心跳检测连接服务器失败!");
    }
  }
  /**
   * 设置水印显示
   */
  private setWatermarkData() {
    //let userInfo: any = store.state.userinfo;
    // jpConsole.log("setWatermarkData--store.state.currentUserInfo", userInfo);
    //根据用户信息设置水印显示数据
    let waterArray = ["武汉市公安局智慧警务系统", this.CurrentpoliceCode];

    //水印展示调用
    WaterMark.loadWatermark(this.getWatermarkDispData(waterArray));
  }
  /**
   * 水印字符串转换
   */
  private getWatermarkDispData(
    arr: string[],
    rowTotalLength: number = 18
  ): string {
    let result = "";
    arr.forEach((item: string) => {
      let res = "";
      if (item.length <= 18) {
        res = item;
        for (let i = 0; i < 18 - item.length; i++) {
          res += " ";
        }
      } else {
        res = item.substring(0, 18);
      }
      result += res;
    });
    return result;
  }

  /**
   * 组件销毁前销毁水印处理
   */
  public beforeDestroy() {
    //清空水印
    WaterMark.loadWatermark(this.getWatermarkDispData([]));
  }
  /**
   * 组件销毁前清除定时器
   */
  public destroyed() {
    if (this.curhealthCheckTimer != -1) {
      clearInterval(this.curhealthCheckTimer);
    }
  }

  /**
   * 字典数据获取
   */
  public async getJqDictionaryData() {
    let caseSource = await new alarmService().polsituinfos_source_queryAll();
    if (caseSource.code == "200" && caseSource.msg == "ok") {
      this.setCaseSourceActionCommand(caseSource.data);
    }

    let caseDatas = await new alarmService().ppolsituInfo_caseDatas();
    if (caseDatas.code == "200" && caseDatas.msg == "ok") {
      this.setCaseDatasActionCommand(caseDatas.data);
    }

    let casePositionDatas = await new alarmService().ppolsituInfo_positionDatas();
    if (casePositionDatas.code == "200" && casePositionDatas.msg == "ok") {
      this.setPositionDatasActionCommand(casePositionDatas.data);
    }

    let param = new alarmPolice_ui_model();
    param.userId = this.userInfo.userId;

    let dutyZone = await new alarmService().ppolsituInfo(param);
    if (dutyZone.code == "200" && dutyZone.msg == "ok") {
      this.setDutyZoneActionCommand(dutyZone.data);
    }

    let policeList = await new alarmService().polices_byUserId(param);
    if (dutyZone.code == "200" && dutyZone.msg == "ok") {
      this.setCurrentPoliceListActionCommand(policeList.data);
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100%;
  height: 100%;
}
</style>
