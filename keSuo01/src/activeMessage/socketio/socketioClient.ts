import { globalAPI } from "@/api/globalAPI";
import { jpConsole } from "@/utils/jpConsole";

/**
 * 事件枚举引用
 */
import {
  connectTypeEnumType,
  realtimeEventEnumType,
  alarmTypeEnumType,
  alarmEventEnumType
} from "../socketio/socketioEventenumTypes";
import store from "@/store/store";

/**
 * 【单例模式】消息中间件集成：socketio消息通讯
 * by tuzg 2019-04-09
 * by lavender 2019.09.09 updated
 */
export default class socketioClient {
  /**
   * intance单实例【静态方法】
   */
  private static instance: socketioClient;

  /**
   * 获取单例
   */
  public static getInstance(): socketioClient {
    if (!this.instance) {
      this.instance = new socketioClient();
    }
    return this.instance;
  }

  /**
   * 当前的socketio连接对象
   */
  public static currentSocket: any = {};

  /**
   * 客户端唯一Guid
   * socketio.ts中初始化时创建后存入到全局状态管理器中
   */
  public readonly clientId: string;

  /**
   * 构造函数
   */
  public constructor() {
    this.clientId = store.state.socketioClientId;
  }

  /**
   * 连接状态信息
   */
  public static connectionInfo = {
    status: connectTypeEnumType.None,
    message: ""
  };

  /**
   * connection连接
   */
  public connection(): any {
    jpConsole.log("socketio连接中......", "");
    socketioClient.connectionInfo = {
      status: connectTypeEnumType.connecting,
      message: "连接中......"
    };

    if ((<any>this).connected) {
      jpConsole.log("socketio连接成功", "");
      socketioClient.currentSocket = this;
      socketioClient.connectionInfo = {
        status: connectTypeEnumType.connectSuccess,
        message: "连接成功"
      };

      /**注册事件 */
      /**注册【测量预警弹框-车辆】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(alarmTypeEnumType.carAlarmType, (data: any) => {
          jpConsole.log(
            "【车辆】预警实时信息接收------------------------------>",
            data
          );
          //store.state.carAlarmData = data;
        });
      /**注册【测量预警弹框-wifi】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(alarmTypeEnumType.wifiAlarmType, (data: any) => {
          jpConsole.log(
            "【wifi】预警实时信息接收------------------------------>",
            data
          );
          //store.state.wifiAlarmData = data;
        });
      /**注册【测量预警弹框-人脸】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(alarmTypeEnumType.faceAlarmType, (data: any) => {
          jpConsole.log(
            "【人脸】预警实时信息接收------------------------------>",
            data
          );
         // store.state.faceAlarmData = data; //data.alarm_face_event  20191004 by lavender 统一
        });
      /**注册【测量预警弹框-积分】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(
          alarmTypeEnumType.integralAlarmType,
          (data: any) => {
            jpConsole.log(
              "【积分】预警实时信息接收------------------------------>",
              data
            );
            //store.state.integralAlramData = data;
          }
        );
      /**注册【涉疆车辆弹框】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(
          alarmTypeEnumType.xinJiangCarAlarmType,
          (data: any) => {
            jpConsole.log(
              "【涉疆车辆】预警实时信息接收------------------------------>",
              data
            );
            //store.state.xinJiangCarAlarmData = data;
          }
        );
      /**注册【超出阈值预警弹框】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(
          alarmTypeEnumType.overThresholdAlarmType,
          (data: any) => {
            jpConsole.log(
              "【超出阈值预警】预警实时信息接收------------------------------>",
              data
            );
            //store.state.overThresholdAlarmData = data.flow_warn_event;
          }
        );
      /**注册【范围异常预警弹框】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(alarmTypeEnumType.outsideAlarmType, (data: any) => {
          jpConsole.log(
            "【范围异常预警】预警实时信息接收------------------------------>",
            data
          );
          //store.state.outsideAlarmData = data;
        });
      /**注册【落脚点预警弹框】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(
          alarmTypeEnumType.footholdAlarmType,
          (data: any) => {
            jpConsole.log(
              "【落脚点预警】预警实时信息接收------------------------------>",
              data
            );
            //store.state.footholdAlarmData = data;
          }
        );
      /**注册【动态预警弹框】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(
          alarmTypeEnumType.dynamicWarningAlarmType,
          (data: any) => {
            jpConsole.log(
              "【动态预警】预警实时信息接收------------------------------>",
              data
            );
            //store.state.dynamicWarningAlarmData = data;
          }
        );
      /**注册【套牌车预警弹框】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(
          alarmTypeEnumType.coverPlateCarAlarmType,
          (data: any) => {
            jpConsole.log(
              "【套牌车预警】预警实时信息接收------------------------------>",
              data
            );
            //store.state.coverPlateCarAlarmData = data;
          }
        );
      /**注册【同行异常预警弹框】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(
          alarmTypeEnumType.peerAnomalyAlarmType,
          (data: any) => {
            jpConsole.log(
              "【同行异常预警】预警实时信息接收------------------------------>",
              data
            );
            //store.state.peerAnomalyAlarmData = data;
          }
        );
      /**注册【非法运营车预警弹框】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(
          alarmTypeEnumType.feifaCarAlarmType,
          (data: any) => {
            jpConsole.log(
              "【非法运营车预警】预警实时信息接收------------------------------>",
              data
            );
           // store.state.feifaCarAlarmData = data;
          }
        );
      /**注册【疑似非法运营车预警弹框】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(
          alarmTypeEnumType.yisiFeifaCarAlarmType,
          (data: any) => {
            jpConsole.log(
              "【疑似非法运营车预警】预警实时信息接收------------------------------>",
              data
            );
            //store.state.yisiFeifaAlarmData = data;
          }
        );
      /**注册【危险品运输车预警弹框】事件 */
      socketioClient
        .getInstance()
        .registerAlarmEvent(
          alarmTypeEnumType.dangerousCarAlarmType,
          (data: any) => {
            jpConsole.log(
              "【危险品运输车预警】预警实时信息接收------------------------------>",
              data
            );
            //store.state.dangerousCarAlarmData = data;
          }
        );
    } else {
      jpConsole.log("socketio连接失败！", "");
      socketioClient.connectionInfo = {
        status: connectTypeEnumType.connectFailed,
        message: "连接失败"
      };
    }
  }

  /**
   * disConnection断开连接
   */
  public disConnection(): any {
    jpConsole.log("socketio断开连接", "");
    socketioClient.connectionInfo = {
      status: connectTypeEnumType.disconnect,
      message: "断开连接"
    };

    /**注销事件 */
    //socketioClient.getInstance().removeRealtimeEvent();
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.faceAlarmType); //注销人脸预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.carAlarmType); //注销车辆预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.wifiAlarmType); //注销wifi预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.integralAlarmType); //注销积分预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.xinJiangCarAlarmType); //注销涉疆车辆
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.overThresholdAlarmType); //注销 超出阈值预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.overThresholdAlarmType); //注销 范围异常预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.footholdAlarmType); //注销 落脚点预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.dynamicWarningAlarmType); //注销 动态预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.coverPlateCarAlarmType); //注销 套牌车预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.peerAnomalyAlarmType); //注销 同行异常预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.feifaCarAlarmType); //注销 非法运营车预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.yisiFeifaCarAlarmType); //注销 疑似非法运营车预警
    socketioClient
      .getInstance()
      .removeAlarmEvent(alarmTypeEnumType.dangerousCarAlarmType); //注销 危险品运输车预警
  }

  /******【实时数据】socket.io相关事件函数如下*********************************************** */
  /**
   * 注册事件【实时数据】
   * @param callBack 回调函数(由注册事件监听者自己去处理)
   */
  public registerRealtimeEvent(callBack: (data: any) => void) {
    socketioClient.currentSocket.on(
      realtimeEventEnumType.staff_alarm_event,
      callBack
    );
  }

  /**
   * 移除监听事件【实时数据】
   * @param type 设备类型
   */
  public removeRealtimeEvent() {
    socketioClient.currentSocket.removeListener(
      realtimeEventEnumType.staff_alarm_event
    );
  }

  /**
   * 发送消息
   * @param eventName  事件名称
   * @param msgObj 消息对象
   */
  public sendRealtimeMessage(eventName: string, msgObj: Object) {
    jpConsole.log("socketio发送：", msgObj);
    socketioClient.currentSocket.emit(eventName, msgObj);
  }

  /************************************************【预警弹框数据】socket.io相关事件函数如下*********************************************** */
  /**
   * 注册事件【实时预警数据】
   * @param type 设备类型
   * @param callBack 回调函数(由注册事件监听者自己去处理)
   */
  public registerAlarmEvent(
    type: alarmTypeEnumType,
    callBack: (data: any) => void
  ) {
    switch (type) {
      case alarmTypeEnumType.faceAlarmType: //人脸预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.faceAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.wifiAlarmType: //wifi预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.wifiAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.carAlarmType: //车辆预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.carAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.xinJiangCarAlarmType: //涉疆车辆预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.xinJiangCarAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.overThresholdAlarmType: //超出阈值预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.overThresholdAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.integralAlarmType: //积分预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.integralAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.outsideAlarmType: //范围异常预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.outsideAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.footholdAlarmType: //落脚点预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.footholdAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.dynamicWarningAlarmType: //动态预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.dynamicWarningAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.coverPlateCarAlarmType: //套牌车预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.coverPlateCarAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.peerAnomalyAlarmType: //同行异常预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.peerAnomalyAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.feifaCarAlarmType: //非法运营车预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.feifaCarAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.yisiFeifaCarAlarmType: //疑似非法运营车预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.yisiFeifaCarAlarmEvent,
          callBack
        );
        break;
      case alarmTypeEnumType.dangerousCarAlarmType: //危险品运输车预警
        socketioClient.currentSocket.on(
          alarmEventEnumType.dangerousCarAlarmEvent,
          callBack
        );
        break;
      default:
        break;
    }
  }

  /**
   * 移除监听事件【实时数据】
   * @param type 设备类型
   */
  public removeAlarmEvent(type: alarmTypeEnumType) {
    switch (type) {
      case alarmTypeEnumType.faceAlarmType: //人脸预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.faceAlarmEvent
        );
        break;
      case alarmTypeEnumType.wifiAlarmType: //wifi预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.wifiAlarmEvent
        );
        break;
      case alarmTypeEnumType.carAlarmType: //车辆预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.carAlarmEvent
        );
        break;
      case alarmTypeEnumType.xinJiangCarAlarmType: //涉疆车辆预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.xinJiangCarAlarmEvent
        );
        break;
      case alarmTypeEnumType.overThresholdAlarmType: //超出阈值预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.overThresholdAlarmEvent
        );
        break;
      case alarmTypeEnumType.integralAlarmType: //积分预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.integralAlarmEvent
        );
        break;
      case alarmTypeEnumType.outsideAlarmType: //范围异常预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.outsideAlarmEvent
        );
        break;
      case alarmTypeEnumType.footholdAlarmType: //落脚点预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.footholdAlarmEvent
        );
        break;
      case alarmTypeEnumType.dynamicWarningAlarmType: //动态预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.dynamicWarningAlarmEvent
        );
        break;
      case alarmTypeEnumType.coverPlateCarAlarmType: //套牌车预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.coverPlateCarAlarmEvent
        );
        break;
      case alarmTypeEnumType.peerAnomalyAlarmType: //同行异常预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.peerAnomalyAlarmEvent
        );
      case alarmTypeEnumType.peerAnomalyAlarmType: //非法运营车预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.feifaCarAlarmEvent
        );
      case alarmTypeEnumType.peerAnomalyAlarmType: //疑似非法运营车预警
        socketioClient.currentSocket.removeListener(
          alarmEventEnumType.yisiFeifaCarAlarmEvent
        );
        break;
      default:
        break;
    }
  }
}
