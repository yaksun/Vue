import * as types from "./mutation-types";

export const addCountAction = ({ commit }: any) => commit(types.ADD_COUNT);

/**设置token */
export const setTokenAction = ({ commit }: any, data: any) =>
  commit(types.SET_TOKEN, data);

export const setUserinfoAction = ({ commit }: any, data: any) =>
  commit(types.SET_USERINFO, data);

export const setPermissionMenu = ({ commit }: any, data: any) =>
  commit(types.SET_PERMISIONMENU, data);

/** 设置后台配置项 */
export const setVideoServerId = ({ commit }: any, data: any) => {
  commit(types.SET_VIDEOSERVERID, data);
}
export const setVideoUrl = ({ commit }: any, data: any) => {
  commit(types.SET_VIDEOURL, data);
}
export const setSignalrUrl = ({ commit }: any, data: any) => {
  commit(types.SET_SIGNALRURL, data);
}
export const setCheckInfo = ({ commit }: any, data:any) => {
  commit(types.SET_CHECKINFO, data);
}
export const setMapSomeUrl = ({ commit }: any, data: any) => {
  commit(types.SET_MAPSOMEURL, data);
}
export const setMapServer = ({ commit }: any, data: any) => {
  commit(types.SET_MAPSERVER, data);
}
/** end */
export const setSystemTime = ({ commit }: any, data: any) => {
  commit(types.SET_SYSTEMTIME, data);
}
export const setCaseSource = ({ commit }: any, data: any) => {
  commit(types.SET_CASESOURCE, data);
}
export const setCaseDatas = ({ commit }: any, data: any) => {
  commit(types.SET_CASEDATAS, data);
}
export const setPositionDatas = ({ commit }: any, data: any) => {
  commit(types.SET_CASEPOSITIONDATAS, data);
}
export const setDutyZone = ({ commit }: any, data: any) => {
  commit(types.SET_DUTYZONE, data);
}
export const setCurrentPoliceList = ({ commit }: any, data: any) => {
  commit(types.SET_CURRENTPOLICELIST, data);
}
/***signalr的初始状态**/
export const initSignalr = ({ commit }: any, data: any) => {
  commit(types.INIT_SIGNALR, data);
}
/***signa当前是什么状态***/
export const signalrConState = ({ commit }: any, data: any) => {
  commit(types.SET_SIGNALRSTATE, data);
}

/** 获取当前指令信息 */
export const setCurrentInsInfo = ({ commit }: any, data: any) => {
  commit(types.SET_CURRENTINSINFO, data);
}


export const setTaskListInfo = ({ commit }: any, data: any) =>
    commit(types.SET_TASKLISTINFO, data);


export const setPositionInfo = ({ commit }: any, data: any) =>
    commit(types.SET_POSITIONINFO, data);



export const setSensitiveWords = ({ commit }: any, data: any) =>
    commit(types.SET_SENSITIVEWORDS, data);

/**选中的某条任务***/
export const setTaskInfo = ({ commit }: any, data: any) =>{
  commit(types.SET_TASKINFO, data);
}
export const setTaskId = ({ commit }: any, data: any) =>{
  commit(types.SET_TASKID, data);
}

/** 选中的某个受理单位信息 */
export const setResponsePosition = ({ commit }: any, data: any) =>{
    commit(types.SET_RESPONSE_POSITION , data);
}


/** 联动责任区域列表 */
export const setDutyArea = ({ commit }: any, data: any) =>{
    commit(types.SET_DUTY_AREA , data);
}


/** 联动处警人员 */
export const setPoliceList = ({ commit }: any, data: any) =>{
    commit(types.SET_POLICE_LIST , data);
}
