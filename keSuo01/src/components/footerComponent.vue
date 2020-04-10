<template>
  <div class="footer-box">
    <div class="message-box">
      <span>消息推送：</span>
      <span :class="[classLeixing,'message-status']" ></span>
      <span :class="[txtLeixing,'message-tips']">{{signalrStatus}}</span>
      <!-- <span>消息推送：</span>
      <span :class="statusChangetostyle(connectionState)" class="message-status"></span>
      <span>{{ this.signalStatus }}</span>-->
    </div>
    <div class="right-box">
      <div>当前登录部门: {{stationName}}</div>
      <div>当前用户: {{userinfo.policeName}}</div>
      <div>服务器时间: {{nowTime | formatTime}}</div>
      <div>系统版本：{{currentVersion}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import { JPConfig } from "@/config/JPConfig";
import { time } from "@/utils/formatTime";
import { common } from "@/utils/common";
import store from "@/store/store";
import { timeService } from "@/bll/sysManage/timeService";
import { Action, Getter, State, Mutation } from "vuex-class";
import  eventHub  from "@/activeMessage/signalr/eventHub";
import messageHub from "@/activeMessage/signalr/messageHub";
import connServer from "@/activeMessage/signalr/signalRConnection";
// import { Getter, Action } from "vuex-class";
@Component({
  filters: {
    formatTime: (val: string) => {
      let nowTime = common.timestampConvertToDate(val);
      let week = time.getWeekTime(nowTime);
      return nowTime.slice(0, 10) + "(" + week + ") " + nowTime.slice(11);
    }
  }
})
export default class Footer extends Vue {
  @Getter("getUserinfo") userinfo: any;
  @Getter("getSystemTime") systemTime: any;
  @Action("setSystemTime") setSystemTimeActionCommand!: any;
  // @Getter('getConnectState') connectionState:any;
  private time: string = ""; // 系统时间
  private week: string = ""; // 周几
  private currentTime: string = ""; // 当前时间字符串
  private stationName: string = ""; // 当前用户单位
  /**
   * 当前系统版本号
   */
  private currentVersion: string = "";
  private timer: any = "";
  private nowTime: any = "";
  /***signlar的连接状态**/
  private signalrStatus: any = "";
  /**signalr不同的连接状态显示不同的颜色**/
  private classLeixing:any='';
  /**signalr不同的连接状态文字显示不同的颜色**/
  private txtLeixing:any='';
  @Watch('signalrState')
  private on_signalrState_command(val:any){
    this.signalrStatus = this.changeToWord(val);
    this.classLeixing = this.statusChangetostyle(val)
    this.txtLeixing = this.txtChangetostyle(val)
    if(val == 6){
        this.$message({
          type: 'warning',
          message: '您已下线，请稍后重新登录'
        })
        this.$router.push("/")
      }
    
  }
  created() {
    this.stationName = this.userinfo.policeStationInfo.stationName;
  }

  mounted() {
    this.currentVersion = JPConfig.Instance().Version;
    /**
     * 获取系统时间
     */
    this.getSystemTime();
    /***每次刷新的时候signalr重新连接**/
    connServer(messageHub(),eventHub()).state;
    this.signalrStatus = this.changeToWord(store.state.connectionState);
    this.classLeixing = this.statusChangetostyle(store.state.connectionState)
    this.txtLeixing = this.txtChangetostyle(store.state.connectionState)
  }

  /**
   * 获取系统时间
   */
  private async getSystemTime() {
    let systemTime = await new timeService().schedule_getCurrentTime();
    if (systemTime.code == "200" && systemTime.msg == "ok") {
      this.nowTime = new Date(systemTime.data).getTime();
      this.timer = setInterval(() => {
        this.nowTime = this.nowTime + 1000;
      }, 1000);
    }
  }

  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
  
  /**signlar连接状态颜色**/
  private statusChangetostyle(val: any) {
    var leiming;
    switch (val) {
      case 0:
        leiming = "connectioning-status";
        break;
      case 1:
        leiming = "connectioned-status";
        break;
      case 2:
        leiming = "reconnectioning-status";
        break;
      case 4:
        leiming = "unconnection-status";
        break;
      case 5:
        leiming = "unstart-status";
        break;
      case 6:
        leiming = "loginingoff-status";
        break;
    }
    return leiming;
  }
  /**signalr 文字连接状态颜色**/
  private txtChangetostyle(val: any) {
    var leiming;
    switch (val) {
      case 0:
        leiming = "connectioning-txt-status";
        break;
      case 1:
        leiming = "connectioned-txt-status";
        break;
      case 2:
        leiming = "reconnectioning-txt-status";
        break;
      case 4:
        leiming = "unconnection-txt-status";
        break;
      case 5:
        leiming = "unstart-txt-status";
        break;
      case 6:
        leiming = "loginingoff-txt-status";
        break;
    }
    return leiming;
  }
  /**signalr的连接**/
  private changeToWord(val: any) {
    var stat;
    switch (val) {
      case 0:
        stat = "连接中";
        break;
      case 1:
        stat = "已连接";
        break;
      case 2:
        stat = "重连中";
        break;
      case 4:
        stat = "未连接";
        break;
      case 5:
        stat = "未启动";
        break;
      case 6:
        stat = "已下线";
        break;
    }
    return stat;
  }
  /**接收signalr状态**/
  private get signalrState(){
    return store.state.connectionState;
  }
}
</script>

<style lang="scss" scoped>
.footer-box {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 9;
  width: 79.17%;
  height: 40px;
  background-color: #fff;
  color: #000;
  font-size: 12px;
  opacity: 0.75;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .message-box {
    display: flex;
    align-items: center;
    padding-left: 20px;

    span {
      color: #000;
      font-size: 14px;
    }

    .message-status {
      width: 10px;
      height: 10px;
      margin-right: 6px;
    }

    .message-tips {
      color: #585858;
    }
    /***signalr连接状态的颜色**/
    .connectioning-status {
      background-color: #eef10c;
    }
    .connectioned-status {
      background-color: #00ff83;
    }
    .reconnectioning-status {
      background-color: #ff8000;
    }
    .unconnection-status {
      background-color: #585858;
    }
    .unstart-status {
      background-color: #770e0e;
    }
    .startting-status {
      background-color: #f703c2;
    }
    .loginingoff-status {
      background-color: #f30c0c;
    }
    .status {
      background-color: #00ff83;
    }
    .err-status {
      background-color: #770e0e;
    }
    /***signalr连接文字的颜色**/
    .connectioning-txt-status {
      color: #eef10c;
    }
    .connectioned-txt-status {
      color: #00ff83;
    }
    .reconnectioning-txt-status {
      color: #ff8000;
    }
    .unconnection-txt-status {
      color: #585858;
    }
    .unstart-txt-status {
      color: #770e0e;
    }
    .startting-txt-status {
      color: #f703c2;
    }
    .loginingoff-txt-status {
      color: #f30c0c;
    }
    .txt-status {
      color: #00ff83;
    }
    .err-txt-status {
      color: #770e0e;
    }
  }
  .right-box {
    display: flex;
    align-items: center;
    padding-right: 30px;
    div {
      color: #000;
      font-size: 12px;
      &::after {
        content: "|";
        width: 2px;
        height: 10px;
        padding: 0 5px;
      }
    }
    div:last-child {
      &::after {
        content: "";
      }
    }
  }
}
</style>