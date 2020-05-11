//import { areaList_model_detail } from "@/model/behaviorAnalysis/integralRule_result_model";

export const getCount = (state: any): number => state.count;

/**获取token值 */
export const getToken = (state: any): string => state.token;
export const getUserinfo = (state: any): any => state.userinfo;
export const getPermissionMenu = (state: any): any => state.permissionMenu;

/**获取后台配置项 */
export const getVideoServerId = (state: any): string => state.videoServerId;
export const getVideoUrl = (state: any): string => state.videoUrl;
export const getSignalrUrl = (state: any): string => state.signalrUrl;
export const getCheckInfo = (state: any): string => state.checkInfo;
export const getMapSomeUrl = (state: any): string => state.mapSomeUrl;
export const getMapServer = (state: any): string => state.mapServer;
/**end */

// 系统时间
export const getSystemTime = (state: any): string => state.systemTime;
// 地址 天气
export const getCityName = (state: any): string => state.cityName;

// 字典数据
export const getCaseSource = (state: any): any => state.caseSource;
export const getCaseDatas = (state: any): any => state.caseDatas;
export const getCasePositionDatas = (state: any): any => state.casePositionDatas;
export const getDutyZone = (state: any): any => state.dutyZone;
export const getCurrentPoliceList = (state: any): any => state.currentPoliceList;
/**signalr连接状态**/
export const getConnectState = (state: any): any => state.connectionState;

/** 获取当前指令列表选中项数据 */
export const getCurrentInsInfo = (state: any): any => state.currentInsInfo;

/**获取警情列表信息**/
export const taskListInfo = (state: any): any => state.taskListInfo;

// 获取部门列表信息
export const positionInfo = (state: any): any => state.positionInfo;

// 获取敏感词信息
export const SensitiveWords = (state: any): any => state.SensitiveWords;

/**选中的某条任务*/
export const taskInfo = (state: any): any => state.taskInfo;
export const taskId = (state: any): any => state.taskId;
/**signalr推送过来的消息，查收**/
export const signalrMsg = (state: any): any => state.signalrMsg;

/** singlar事件 */
export const getAlarmInsInfo = (state: any): any => state.addAlarmInsInfo

/** end */

