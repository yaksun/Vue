import * as types from "./mutation-types";

export default {
  [types.ADD_COUNT](state: any) {
    state.count++;
  },

  /**获取token值 */
  [types.SET_TOKEN](state: any, data: any) {
    state.token = data;
  },

  [types.SET_USERINFO](state: any, data: any) {
    state.userinfo = data;
  },

  [types.SET_PERMISIONMENU](state: any, data: any) {
    state.permissionMenu = data;
  },

  /** 获取后台配置项 */
  [types.SET_VIDEOSERVERID](state: any, data: any) {
    state.videoServerId = data;
  },
  [types.SET_VIDEOURL](state: any, data: any) {
    state.videoUrl = data;
  },
  [types.SET_SIGNALRURL](state:any, data: any) {
    state.signalrUrl = data;
  },
  [types.SET_CHECKINFO](state: any, data: any) {
    state.checkInfo = data;
  },
  [types.SET_MAPSERVER](state: any, data: any) {
    state.mapServer = data;
  },
  [types.SET_MAPSOMEURL](state: any, data: any) {
    state.mapSomeUrl = data;
  },
  /** end */
  [types.SET_SYSTEMTIME](state: any, data: any) {
    state.systemTime = data;
  },
  [types.SET_CASESOURCE](state: any, data: any) {
    state.caseSource = data;
  },
  [types.SET_CASEDATAS](state: any, data: any) {
    state.caseDatas = data;
  },
  [types.SET_CASEPOSITIONDATAS](state: any, data: any) {
    state.casePositionDatas = data;
  },
  [types.SET_DUTYZONE](state: any, data: any) {
    state.dutyZone = data;
  },
  [types.SET_CURRENTPOLICELIST](state: any, data: any) {
    state.currentPoliceList = data;
  },
   /**signalr 是否连接***/
  [types.INIT_SIGNALR](state:any, data: any) {
    state.signalrStatus = data;
  },//signalrConnectionState
  // [types.SIGNALR_CONNECT](state:any, data: any) {
  //   state.signalrStatus = data;
  // },
  /***signa当前是什么状态***/
  [types.SET_SIGNALRSTATE](state:any, data: any) {
    state.connectionState= data;
  },

  /** 获取当前指令信息 */
  [types.SET_CURRENTINSINFO](state: any, data: any) {
    state.currentInsInfo = data;
  },
  /** 设置是否有新任务 */
  [types.SET_NEWTASK](state: any, data: any) {
    state.isNewTask = data;
  },

    // 设置任务列表
    [types.SET_TASKLISTINFO](state: any, data: any) {
        state.taskListInfo = data;
    },

    // 设置部门列表
    [types.SET_POSITIONINFO](state: any, data: any) {
        state.positionInfo = data;
    },

    // 设置敏感词
    [types.SET_SENSITIVEWORDS](state: any, data: any) {
        state.sensitiveWords = data;
    },

  /**选中的某条任务**/
  [types.SET_TASKINFO](state: any, data: any) {
    state.taskInfo = data;
  },
  [types.SET_TASKID](state: any, data: any) {
    state.taskId = data;
  },

  /** signalr事件 */
  [types.SET_ALARMINSINFO](state: any, data: any) {
    state.addAlarmInsInfo = data;
  },

    /** 选中的某个受理单位信息 */
    [types.SET_RESPONSE_POSITION](state: any, data: any) {
        state.responsePosition = data;
    },

    /** 联动责任区域*/
    [types.SET_DUTY_AREA](state: any, data: any) {
        state.dutyArea = data;
    },

    /** 联动处警人员*/
    [types.SET_POLICE_LIST](state: any, data: any) {
        state.policeList = data;
    }
};
