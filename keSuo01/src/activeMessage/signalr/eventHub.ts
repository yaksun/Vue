import store from "../../store/store";
import * as types from "../../store/mutation-types";
import $ from "jquery";
(window as any).jQuery = $;
require("signalr");

export default function EventHub() {

  let eventNames = [
      "event_taskStatusChanged",
      "event_approved",
      "event_instructionTimeOut",
      "event_taskTimeOut",
      "event_batchLocation" ,
      "event_alarmUpdate"
  ];
  var hub:any={};
  /**store.state.userInfo.userId;**/
  let userId:any;
  let proxy:any;
  let connection:any;
  var hubName = "EventDispatcherHub";
  hub.hubName=hubName;
  hub.init = function (signalrConnection:any) {
    if (typeof signalrConnection === "undefined") {
      return;
    }
    connection = signalrConnection;
    userId = (store.state.userinfo as any).userId;
    /**生产代理对象 消息**/ 
    proxy = connection.createHubProxy(hubName); 
    proxy.on("Notify", (identifier:any, eventName:any, message:any) => {
      console.log(eventName);
      let infomation = JSON.parse(message);
      console.log(infomation);
      /**
       * 指令任务状态事件
       * 新建警情事件
       ***/
      if (eventName == 'event_taskStatusChanged') {
        console.log("event_taskStatusChanged", infomation);
        store.commit(types.SET_ALARMINSINFO, infomation);
      }
      /**审批事件**/
      if (eventName == 'event_approved') {
        console.log("event_approved",infomation);
        //store.commit('taskStatusChanged', infomation)
      }
       /**警情信息更新事件**/
      if(eventName =="event_alarmUpdate"){
        console.log("event_alarmUpdate",infomation);
      }
      /**动态点位事件 待我确认能不能相对筛选需求数据**/
      if(eventName == "event_batchLocation"){
        console.log("event_batchLocation",infomation);
      }
      /**超时事件**/
      if(eventName == "event_instructionTimeOut"){
        console.log("event_instructionTimeOut",infomation);
      }
      /**超时事件**/
      if(eventName == "event_taskTimeOut"){
        console.log("event_taskTimeOut",infomation);
      }
    });
    proxy.on("Stop", (connectionId:any) => {
      // connection.stop();
      // store.commit('signalrConnectionState', 6)
      // store.signalR.connection=null;
    });
    proxy.on("Status", (Status:any) => {
      console.log(Status);
    });
  };
  hub.afterConnnected = function () {
    if (connection != null && connection.state == 1) {
      // console.info('开始事件注册');

      $.each(eventNames, function (i:any, eventName:any) {
        // console.info(eventName);
        if (connection != null && connection.state == 1) {
          proxy.invoke("Register", userId, eventName, 2);
        }
      });
    }
  };
  hub.ack = function (identifier:any, eventName:any, eventId:any) {
    if (connection != null && connection.state == 1) {
      proxy.invoke("ConsumeEventACK", identifier, eventName, eventId, 1);
    }
  };
  return hub;
}
