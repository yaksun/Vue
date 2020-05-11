import { loginAPIs } from "./loginAPIs";
import { adminAPIs } from "./adminAPIs";
import { socketioAPIs } from "./socketioAPIs";
import { mapAPIs } from "./mapAPIs";
import { dictTagAPIs } from "./dictTagAPIs";
import { timeAPIs } from "./timeAPI";
import { weatherAPIs } from "./weatherAPI";
import { alarmAPIs } from "./alarmAPIs";
import { tEventUpdateAPI } from "./tEventUpdateAPIs";
import { instructionInfoAPIs } from "./instructionInfoAPIs";
import { taskInfoAPIs } from "./taskInfoAPIs";
import { fileCenterAPIs } from "./fileCenterAPIs";
import { orderTaskAPIs } from "./orderTaskAPIs";
import { insQuickReply } from "./insQuickReply";
import { instructionInfoUserAPI } from "./instructionInfoUserAPIs";
import { gpsAPI } from "./gpsAPIs";
import { planningAPI } from "./planningAPIs";
import {instructReply} from "./instructReply"
import {instructionReceive} from "./instructionReceive"
/**
 * 全局访问接口
 */
export const globalAPI = {
  /**
   * 登录模块
   */
  loginAPIs,

  /**
   * admin管理
   */
  adminAPIs,

  /**
   * socket通讯模块
   */
  socketioAPIs,
  /**
   * 地图链接路径
   */
  mapAPIs,
  /**
   * 后台配置
   */
  dictTagAPIs,
  /** 获取系统时间 */
  timeAPIs,
  /** 获取城市天气 */
  weatherAPIs,
  /**
   * 新增事件更新、二次定位、更新发案地址
   */
  tEventUpdateAPI,
  /** 警情回告 */
  alarmAPIs,
  /**
   * 指令详情列表的查询
   */
  instructionInfoAPIs,
  /**
   * 指令流程
   */
  taskInfoAPIs,
  /** 文件上传 删除 获取 */
  fileCenterAPIs,
  /** 民警推送 撤回 重推 */

  instructionInfoUserAPI,

  gpsAPI,

  planningAPI,

  insQuickReply,

  orderTaskAPIs,
  /**指令回复分页列表**/
  instructReply,
  /**指令消息发送**/
  instructionReceive
};
