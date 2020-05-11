/**
 * 运行环境
 */
export enum RuntimeEnvMode {
  /**
   * 开发环境
   */
  DEV = 10,

  /**
   * 测试环境
   */
  UAT = 20,

  /**
   * 生产环境
   */
  PROD = 30,

  /**
   * 本地环境
   */
  Local = 40
}

/**
 * home主页面底部导航----【系统管理】模块
 */
export enum SystemManagementEnumType {
  /**
   * 用户管理
   */
  userManage = 101,

  /**
   * 组织机构管理
   */
  orgManage = 102,

  /**
   * 角色管理
   */
  roleManage = 103,

  /**
   * 功能模块管理
   */
  funcManage = 104,

  /**
   * 统一日志
   */
  logManage = 105,

  /**
   * 系统配置
   */
  settingManage = 106,

  /**
   * None
   */
  none = -1
}

/**
 * home主页面底部导航----【行为分析异常】模块
 */
export enum BehaviorAnalysisEnumType {
  /**
   * 视频智能分析
   */
  videoAnalysis = 201,

  /**
   * 伴随车分析
   */
  BSCarAnalysis = 202,

  /**
   * 频繁夜出分析
   */
  nightOutAnalysis = 203,

  /**
   * 落脚点分析
   */
  footholdAnalysis = 204,

  /**
   * 涉疆车牌分析
   */
  SJCarAnalysis = 205,

  /**
   * 假车牌分析
   */
  falseCarplateAnalysis = 206,

  /**
   * 套车牌分析
   */
  fakeCarAnalysis = 207,

  /**
   * 非法运营车
   */
  feiFaCar = 208,

  /**
   * 运输危险物品
   */
  dangerDoods = 209,

  /**
   * 敏感地区管理
   */
  minGanPlaceManage = 210,

  /**
   * None
   */
  none = -1
}

/**积分规则配置 */
// IntegralRuleConfig = 201

/**
 * home主页面底部导航----【多维布控】模块
 */
export enum NetWarningEnumType {
  /**
   * 综合多维布控
   */
  duoweiBK = 301,

  /**
   * 时空碰撞
   */
  shikongPZ = 302,

  /**
   * 轨迹查询
   */
  traceSearch = 303,

  /**
   * None
   */
  none = -1
}

/**
 * home主页面底部导航----【活动轨迹分析】模块
 */
export enum TrackAnalysisEnumType {
  /**
   * 个体轨迹分析
   */
  singleTrack = 401,

  /**
   *群体轨迹分析
   */
  lotTrack = 402,

  /**
   *轨迹对比分析
   */
  trackContrast = 403,

  /**
   * None
   */
  none = -1
}

/**
 * 设备类型
 */
export enum DeviceTypeEnumType {
  /** 全部*/
  all = 0,
  /**人脸 */
  face = 1,
  /**车辆 */
  car = 2,
  /**wifi */
  wifi = 3,
  /**摄像头 */
  video = 4,
  /**ar高点 */
  arTop = 5,
  /**违停抓拍 */
  unsafeStop = 6,
  /**应急广播 */
  voice = 7
}

/**
 * tab类型声明，主要用于tab标签
 */
export enum TabsTypeEnumType {
  /**【设备列表】-设备类型tab */
  deviceList_deviceType = 0,
  /**【设备列表】-组织机构tab */
  deviceList_org = 1,
  /**【设备列表】-收藏夹tab */
  deviceList_collector = 2
}

/**
 * 操作类型，主要用于详情弹框、修改弹框、新增弹框
 */
export enum OperationEnumType {
  /**正常 */
  none = -1,
  /**详情 */
  details = 0,
  /**新增 */
  add = 1,
  /**新增和修改 */
  edit = 2,
  /**新增和修改 */
  addAndedit = 3
}

/**
 * 轨迹数据类型枚举
 * by lavender 2019.04.11
 */
export enum traceDataTypeEnumType {
  /**
   * 人脸轨迹
   */
  FaceTrace = 0,

  /**
   * 车辆轨迹
   */
  CarTrace = 1,

  /**
   * wifi轨迹
   */
  WifiTrace = 2,

  /**
   * 多轨
   */
  multiTrack = 3
}

/**
 * 首页左下角【更多】
 */
export enum homeMoreType {
  /**
   * 设备列表
   */
  deviceList = 1,
  /**
   * 预警记录
   */
  alarmRecords = 2,
  /**
   * 交通概况
   */
  roadTraffic = 3
}
