import store from "../../store/store";
import * as types from "../../store/mutation-types";
import { JPConfig } from "@/config/JPConfig";
import { time } from "@/utils/formatTime";
import $ from "jquery";
(window as any).jQuery = $;
require("signalr");

export default function MessageHub() {
  
  var hub:any={};
  /**store.state.userInfo.userId;**/
  let userId:any=null;
  let proxy:any=null;
  let connection:any=null;
  var hubName = "MessageOnUserDispatcherHub";
  /** 默认请求地址为 jpHttpUrl**/
  var baseUrl:any = "jpHttpUrl", 
  baseUrl = JPConfig.Instance()[baseUrl];
  hub.hubName=hubName;
  hub.init = function (signalrConnection:any) {
    if (typeof signalrConnection === "undefined" ) {
      return;
    }
    connection = signalrConnection;
    userId = (store.state.userinfo as any).userId;
    /**生产代理对象 消息**/ 
    proxy = connection.createHubProxy(hubName); 
    proxy.on("Receive", (id:any, data:any) => {
      console.log(id)
      console.log(data)
      console.log("signalr");
      var arr:any = {
        userId:data.extendedFields.userId,
        extendedFields:data.extendedFields,
        taskId:data.Topic,
        id:data.Description,
        I:'',
        time: time.getDateTimeByStr(data.LastUpdateTime,false,false),
        content:[],
      };
      if(data.extendedFields.userId ==userId ){
         arr.I='right'
      }else{
        arr.I='left'
      }
      
      data.Payload.forEach((item:any)=>{
        var msgContent = {
          textare: "",
          catalog: 1,
          uri: "",
          fileName: "",
          type: "text",
          imgUrl: require("@/assets/images/calledStation/dom.png"),
          speechTime: ""
      };
        //文本信息
        if (item.Type==1) {
          msgContent.textare = item.Text;
          msgContent.catalog = 1;
        } else if (item.Type == 2 && item.URI) {
          //文件或者声音或者视频
          msgContent.uri = baseUrl.url1 + "/api/jp-TIFS-FileCenter-ms/file?businessId=" + item.FileInfo.FileID;
          msgContent.fileName = item.FileInfo.FileName+"." + item.FileInfo.FileType;
          msgContent.speechTime=item.FileInfo.FileID;
          msgContent.type = item.FileInfo.Type;
          if (data.extendedFields.fileInfos[0].type === "Voice") {
            msgContent.catalog = 3;
          } else {
            msgContent.catalog = 2;
          }
        }
        arr.content.push(msgContent)
      })
      
      // var add={
      //   source:'signalr',
      //   num:arr.content.length,
      //   insId:arr.insId
      // }
      //var insList = store.state.instructLists;
      /**for(var i in insList){
        if(arr.insId == insList[i].id){
            insList[i].unReadMsgCount=insList[i].unReadMsgCount+arr.content.length;
        }
        
      }**/
      // store.commit("setUnreadMessage", insList);
      /**存储接收到的消息**/
      store.commit(types.SET_SIGNALRMSG, arr);
      // var add = 1;
      // store.commit("setUnreadMessage", add);
    });
    proxy.on("Stop", (connectionId:any)=> {
      connection.stop();
      // store.commit('signalrConState', 6)
      store.commit(types.SET_SIGNALRSTATE,6);
    });
    proxy.on("Status", (Status:any) => {
      console.log(Status);
    });
  };
  hub.afterConnnected = function () { };
  hub.ack = function (identifier:any, eventName:any, eventId:any) {
    if (connection!=null&&connection.state == 1) {
      proxy.invoke("ConsumeMessageACK", identifier, eventName, eventId, 1);
    }
  };

  return hub;
}
