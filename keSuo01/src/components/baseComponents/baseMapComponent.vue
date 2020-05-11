<template>
<div class="base-map-component-body" id="mapDiv" v-loading="isLoading" :style="baseMapStyle" element-loading-text="地图加载中......" element-loading-background="rgba(18, 68, 111, 0)">
  <!--地图iframe-->
  <iframe id="iframeMap" name="iframeMap" frameborder="0" style="width:100%;height:100%;"></iframe>
  <div class="qurey_body" v-if="isQueryControl">
    <div class="input_warp">
      <el-input placeholder="请输入内容" v-model="keyword"></el-input>
      <el-button type="primary" icon="el-icon-search"  @click="queryAddressToGps"  ></el-button>
      <el-button type="primary" icon="el-icon-close"  @click="closeQuery"  ></el-button>
    </div>
    <div class="list_body" v-if="isQueryControl_list">
      <div class="list_warp" v-for="(item, index) in gpsresultmodel.data" :key="index" @click="clickHandelAdrrass(item)">
        {{ item.poi_dz }}
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import Vue from "vue";
import {
  Component,
  Prop,
  Watch
} from "vue-property-decorator";
import {
  globalAPI
} from "@/api/globalAPI";
import {
  jpConsole
} from "../../utils/jpConsole";
import store from "@/store/store";
import {
  traceDataTypeEnumType
} from "@/utils/enumTypes";

import {
  tEventUpdateService
} from "@/bll/eventUpdate/tEventUpdateService";
import {
  tEventUpdate_par_model,
  tEventUpdate_ui_model
} from "@/model/eventUpdate/tEventUpdate_model";
import {
  MessageBox
} from "element-ui";

import {
  gpsService
} from "@/bll/gps/gpsService";
import {
  gps_ui_model,
  gps_result_model,
  gps_result_model_detail
} from "@/model/gps/gps_model";

import {
  instructionInfoUserService
} from "@/bll/instructionInfoUser/instructionInfoUserService";

import {
  queryModel_ui_model
} from "@/model/instructionInfoUser/instructionInfoUser_model";


import {
  planningService
} from "@/bll/planning/planningService";

import {
  requestArriveInfo_ui_model,
  destination_child_result_model_detail
} from "@/model/planning/planning_model";
@Component({})
export default class BaseMapComponent extends Vue {
  /**props */
  @Prop({
    default: () => {}
  })
  baseMapStyle!: object;
  @Prop({
    default: ""
  })
  currentuserID!: string;
  @Prop({
    default: ""
  })
  stationId!: string;

  @Prop() public isGetListFlag!: any; // 指令回退的标识
  @Watch("isGetListFlag")
  onDefaultFileListChanged(val: boolean, oldVal: boolean) {
    if (val) {
      this.clearJQ();
      // 这里关闭页面的弹框
      //指令回退后地图清屏（警和警的操作消失）
    }
  }

  /**data */
  /**
   * 地图进度条loading
   */
  private isLoading: boolean = true;

  /**
   * 是否显示地图工具框选设备列表
   */
  private isShowMapEquipList: boolean = false;

  /**
   * 圈选绘制矩形方法时返回回调的方法
   */
  private dataRectangleCallBack: Function = (data: any) => {}; //or  function(data:any){}

  /**
   * 是否显示地图工具栏
   */
  private isShowMapTool: boolean = true;
  private selectDeviceIdArray: any = new Object();

  private refreshPoliceTimer: number = 0;

  /*
   * 地址搜索
   */
  private keyword: string = "";
  private isQueryControl: boolean = false;
  private isQueryControl_list: boolean = false;
  private gpsresultmodel = new gps_result_model();

  //地图返回的任务信息存储
  private TaskInfo_select: any = null;

  //存储警情周围的警察数据
  private policeInfo_lon: number = 0;
  private policeInfo_lat: number = 0;

  private curPoliceInfoTimer: any = 0;

  /**
   * mounted钩子
   */
  mounted() {
    this.onLoaded_iFrame(); // 加载iframe
  
    /**
     * 添加监听消息
     * AddListener
     */
    this.receiveMessageFromMap();

    //刷新警察数据信息
    this.curPoliceInfoTimer = setInterval(() => {
      this.PoliceInfoCheck();
    }, 30000); //30秒刷新一次在实时数据
  }

  /**methods */
  /**
   * iframe加载完毕事件
   */
  public onLoaded_iFrame() {
    let iframe: any = document.getElementById("iframeMap");
    iframe.src = this.getMapServiceHttpUrl();
    iframe.onload = () => {
      //iframe加载完毕后要进行的操作
      this.isLoading = false;
      this.map_initPointAndZoom(114.4188, 30.6087, 6); //初始化地图定位
    };
  }

  /**
   * 获取地图url地址
   */
  public getMapServiceHttpUrl() {
    return globalAPI.mapAPIs.jp_gis_map_service_url.url;
  }

  /**
   * 【postMessage发送数据】
   * 向地图发送消息数据
   */
  public sendMessageData(msg: any) {
    let iframe: any = document.getElementById("iframeMap");
    let sendMsg = JSON.stringify(msg);
    jpConsole.log("【postMessage发送数据->地图】", sendMsg);
    iframe.contentWindow.postMessage(sendMsg, "*"); //可以发送任意对象或字符串或其它
  }

  /**
   * 清除临时图形
   */
  public map_clearMapGraphics_click() {
    this.sendMessageData({
      functionName: "clearMapGraphics"
    });
  }

  /**
   * 关闭地图工具
   */
  public map_clearMapTools_click() {
    this.sendMessageData({
      functionName: "clearMapTools"
    });
  }

  /**
   * 设置所有图层隐藏
   */
  public map_setAllLayersHide() {
    this.sendMessageData({
      functionName: "setAllLayersHide"
    });
  }

  /**
   * 地图工具框选设备列表关闭
   */
  public handleCloseMapEquipList() {
    this.isShowMapEquipList = false;
  }
  /**
   * 清空警情
   */
  public clearJQ() {
    this.sendMessageData({
      functionName: "clearJQ"
    });
  }

  /**
   * 一键清屏（地图）
   */
  public map_clearMapAll_click() {
    /**关闭地图工具 */
    this.map_clearMapTools_click();
    /**清除圈选的图层 */
    this.map_clearMapGraphics_click();
    /**关闭地图框选设备 */
    this.handleCloseMapEquipList();
  }

  /**
   * 初始化坐标和缩放级别
   */
  public map_initPointAndZoom(lon: number, lat: number, zoom: number) {
    this.sendMessageData({
      functionName: "initPointAndZoom",
      parameters: {
        lon: lon,
        lat: lat,
        zoom: zoom
      }
    });
  }
  /**
   * 地图放大
   */
  public map_zoomIn_click() {
    this.sendMessageData({
      functionName: "zoomIn"
    });
  }

  /**
   * 地图缩小
   */
  public map_zoomOut_click() {
    this.sendMessageData({
      functionName: "zoomOut"
    });
  }

  /**
   * 地图全图恢复
   */
  public map_fullExtent_click() {
    this.sendMessageData({
      functionName: "fullExtent"
    });
  }

  /**
   * 定位点数据
   * @param  {Double} lon 经度
   * @param {Double} lat 纬度
   */
  public locatePoint(lon: any, lat: any) {
    this.sendMessageData({
      functionName: "locatePoint",
      parameters: {
        lon: lon,
        lat: lat
      }
    });
  }
  /**
   * 多定位点数据
   * @param param array
   */
  public locateMultiPoint(param: any) {
    this.sendMessageData({
      functionName: "locateMultiPoint",
      parameters: param
    });
  }
  /**
   * 所有图层数据
   * @param data array
   */
  public loadAllLayer(data: any) {
    this.sendMessageData({
      functionName: "alldevice",
      parameters: data
    });
  }
  ///////////////////////////////
  /**
   * @description: 点击任务信息，进行地图警情定位
   * @param {type}
   * @return:
   */
  public passTaskToMap(item: any) {
    this.sendMessageData({
      functionName: "taskinfo",
      parameters: item
    });
    //根据警情坐标查询附近的警察
    this.policeInfo_lon = item.longitude;
    this.policeInfo_lat = item.latitude;
    this.searchPolice(item.longitude, item.latitude);

  }

  /**
   * @description: 根据警情坐标查询附近的警察
   * @param {type}
   * @return:
   */
  private async searchPolice(lon: any, lat: any, item: string = "policePosition") {
    let queruimodel = new queryModel_ui_model();
    queruimodel.latitude = lat; // 30.59276; //lat;
    queruimodel.longitude = lon; // 114.30525; // lon;
    queruimodel.radius = 3000;
    queruimodel.stationId = this.stationId; // "9BECB65D-4E52-4039-993B-369DAA145EAF"; //this.stationId;
    queruimodel.type = "appAccount";
    queruimodel.loadingTarget = ".qurey_body";
    let result: any = await new instructionInfoUserService().instructionUser_map_policeLocation(
      queruimodel
    );
    if (result.success) {
      this.sendMessageData({
        functionName: item,
        parameters: result.data
      });
    }
  }
  /**
   * @description: 定时刷新警察的位置  通过警察的坐标和半径进行查询
   * @param {type} 
   * @return: 
   */
  private PoliceInfoCheck() {
    if (!!!this.policeInfo_lon || !!!this.policeInfo_lat) return;
    this.searchPolice(this.policeInfo_lon, this.policeInfo_lat, "refreshPolicePosition");
  }

  /**
   * @description: 分派列表点击警察，进行轨迹，时间，距离等显示
   * @param {type} 
   * @return: 
   */
  private rePayPoliceToMap(userId: string) {
    console.log(userId);
    this.sendMessageData({
      functionName: "rePayPoliceToMap",
      parameters: userId
    });
  }
  /**
   * @description: 分派列表点击警察，取消  轨迹，时间，距离等显示
   * @param {type} 
   * @return: 
   */
  private cancelPoliceToMap(userId: string) {
    console.log(userId);
    this.sendMessageData({
      functionName: "cancelPoliceToMap",
      parameters: userId
    });
  }
  /////////////////////////////////////////
  /**
   * 接收地图iframeMap返回的跨域信息
   */
  public receiveMessageFromMap() {
    window.addEventListener("message", this.windowEventFun, false);
  }
  public windowEventFun(event: any) {
    let msg = event.data;
    let sourceFunctionName = msg.functionName;
    let resultParameters = msg.parameters;
    jpConsole.log("----event----windowEventFun----", event);
    jpConsole.log("----msg----windowEventFun-----", msg);
    switch (sourceFunctionName) {
      case "backYP": //回退
        this.$emit("on_backYP_command", resultParameters);
        break;
      case "noticeYP": //回告
        this.$emit("on_noticeYP_command", resultParameters);
        break;
      case "applyYP": //分派
        this.$emit("on_applyYP_command", resultParameters);
        break;
      case "delayedYP": //申请 延时
        this.$emit("on_delayedYP_command", resultParameters);
        break;
      case "relegationYP": //申请  升降级
        this.$emit("on_relegationYP_command", resultParameters);
        break;
      case "twoPositonModify": //二次定位
        this.twoPositonModify(
          resultParameters.attributes,
          resultParameters.point
        );
        break;
      case "dblclicktask": //双击警情图标
        this.$emit("on_dblclicktask_command", resultParameters);
        break;
      case "queryaddress":
        {
          //弹出查询地址对话框
          this.isQueryControl = true;
          this.TaskInfo_select = resultParameters; //存储任务信息
          break;
        }
      case "timeAndDistance":
        {
          //查询警察获取到时间和距离
          this.searchtimeAndDistance(resultParameters.lonDes, resultParameters.latDes, resultParameters.origin);
          break;
        }
    }
  }

  /**
   * @description:点击警察，显示到达时间，轨迹坐标等信息
   * @param {type}
   * @return:
   */
  private async searchtimeAndDistance(lon: any, lat: any, item: any) {

    let requestArriveInfouimodel = new requestArriveInfo_ui_model();

    let destination = new destination_child_result_model_detail();
    destination.latitude = lat; // 30.68340272; //lat;
    destination.longitude = lon; // 114.34133001; //lon;

    let origin = new destination_child_result_model_detail();
    origin.latitude = item.latitude; // 30.583019; //item.latitude;
    origin.longitude = item.longitude; // 114.370013; //item.longitude;

    requestArriveInfouimodel.destination = destination;
    requestArriveInfouimodel.origin = origin;
    requestArriveInfouimodel.gpsType = 1;
    requestArriveInfouimodel.strategy = "0";
    requestArriveInfouimodel.type = "1";
    requestArriveInfouimodel.loadingTarget = ".qurey_body";
    let result = await new planningService().planning_getPathPlanning(
      requestArriveInfouimodel
    );
    if (result.success) {
      this.policeTimeAndTrackToMap(result.data, item);
    }
  }
  /**
   * @description:  绘制警察的轨迹和显示时间以及距离
   * @param {type}  
   * @return: 
   */
  private policeTimeAndTrackToMap(data: any, item: any) {
    this.sendMessageData({
      functionName: "policeTimeAndTrackToMap",
      parameters: {
        trackpoints: data,
        policeinfo: item
      }
    });
  }

  /**
   * @description: 二次定位位置确定
   * @param {type}
   * @return:
   */
  private async twoPositonModify(attributes: any, point: any) {
    let tEventUpdateMter = new tEventUpdate_ui_model();
    tEventUpdateMter.userId = this.currentuserID;
    tEventUpdateMter.alarmId = attributes.businessKey;
    tEventUpdateMter.insId = attributes.id;
    tEventUpdateMter.latitude = point.y;
    tEventUpdateMter.longitude = point.x;
    tEventUpdateMter.updateType = 0;
    tEventUpdateMter.address = attributes.address;
    tEventUpdateMter.summary = attributes.summary;
    tEventUpdateMter.loadingTarget = ".qurey_body";
    let result = await new tEventUpdateService().polsituinfo_addEventUpdate(
      tEventUpdateMter
    );
    if (result.success) {
      this.isQueryControl = false;
      this.isQueryControl_list = false;
      //根据警情坐标查询附近的警察
      this.policeInfo_lon = point.x;
      this.policeInfo_lat = point.y;
      this.searchPolice(point.x, point.y);
    }
  }
  /**
   * @description: 通过地址查询经纬度
   * @param {type}
   * @return:
   */
  private async queryAddressToGps(resultParameters: any) {
    let gpsuimodel = new gps_ui_model();
    gpsuimodel.KeyWords = this.keyword;
    gpsuimodel.CurrentPageNum = "1";
    gpsuimodel.PageSize = "100";
    gpsuimodel.loadingTarget = ".qurey_body";
    let result = await new gpsService().getgpsinfoV2(gpsuimodel);
    if (result.success) {
      this.isQueryControl_list = true;
      this.gpsresultmodel.data = result.data.records as any;
    }
  }

  private closeQuery(){
      this.isQueryControl = false;
      this.isQueryControl_list = false;
  }
  /**
   * @description: 点击地址进行地图定位
   * @param {type}
   * @return:
   */
  private clickHandelAdrrass(item: any) {
    this.sendMessageData({
      functionName: "queryAddressToMap",
      parameters: {
        taskinfo: this.TaskInfo_select,
        lon: item.poi_x,
        lat: item.poi_y
      }
    });
  }

  /**
   * 地图工具-绘制基本图形（地图）
   * 包括：圆圈、方框、多边形、自由选择(绘制自由线)
   */
  public map_drawing_basic_change(selectedValue: any) {
    let that: any = this;
    let value = selectedValue;
    let methodName = ""; //默认
    switch (value) {
      case "圆形": //圆圈
        methodName = "drawCircle";
        break;
      case "矩形": //方框
        methodName = "drawRectangle";
        break;
      case "多边形": //多边形
        methodName = "drawPolygon";
        break;
      case "自由选择": //自由选择（绘制自由线）
        methodName = "drawFreehandPolyline";
        break;
      default:
        return;
    }

    this.sendMessageData({
      functionName: methodName,
      parameters: {
        callbackFunction: "queryCameraFromMapEvents"
      }
    });
  }

  /**
   * IE下组件关闭时要释放iframe，避免内存泄漏
   */
  private async clearIframe() {
    var iframe = document.getElementById("iframeMap");
    if (iframe) {
      ( < any > iframe).src = ""; //"about:blank";

      // await this.sleep(2000);
      setTimeout(this.cycleClear, 100);

      console.log("clearIframe-bkmap--exec...success");
    }
  }

  private cycleClear() {
    var iframe = document.getElementById("iframeMap");
    console.log("cycleClear-cycleClear--cycleClearcycleClearcycleClearsuccess");
    try {
      ( < any > iframe).contentWindow.document.write("");
      ( < any > iframe).contentWindow.document.clear();
      ( < any > iframe).contentWindow.close();
    } catch (e) {
      console.log(
        "发生异常iframe---iframe----iframe---iframe----iframe---iframe"
      );
    }
    ( < any > iframe).parentNode.removeChild(iframe);
    console.log(
      "cycleClear-removeChild--removeChild---removeChildremoveChildremoveChild"
    );
  }

  public beforeDestroy() {
    window.removeEventListener("message", this.windowEventFun, false);
    this.clearIframe();

    if (this.curPoliceInfoTimer != -1) {
      clearInterval(this.curPoliceInfoTimer);
    }
  }
}
</script>

<style lang="scss" scoped>
.base-map-component-body {
  // background: url("~@/assets/images/home/home-bg.png");
  position: fixed;
  width: 100%;
  top: 0px;
  bottom: 0px;
  overflow: hidden;
  & .qurey_body {
    top: 40%;
    left: 80%;
    position: absolute;
    & .input_warp {
      display: flex;
      >.el-button {
        margin-left: 5px;
        min-width: 35px !important;
        border-radius: 50% !important;
        background-color: #6997fd !important;
        opacity: 0.8;
      }
    }
    .list_body {
      height: 200px;
      background-color: ghostwhite;
      border-radius: 7px;
      margin-top: 6px;
      overflow-y: auto;
      opacity: 0.8;
      & .list_warp {
        padding: 5px;
        margin-left: 6px;
        font-size: 12px;
        cursor: default;
      }
    }
  }
}
</style>
