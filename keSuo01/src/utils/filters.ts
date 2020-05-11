import Vue from "vue";
import moment from "moment";

/**
 * 性别转换
 * value|genderFilter
 * @param inputValue 输入枚举值
 * @returns 返回枚举值对应的字符串[性别]
 */
export function genderFilter(inputValue: number): string {
  let outputValue = "";
  switch (inputValue) {
    case 1:
      outputValue = "男";
      break;
    case 2:
      outputValue = "女";
      break;
    case 0:
      outputValue = "未知";
      break;
    default:
      break;
  }
  return outputValue;
}

/**
 * 日志版本过滤 value|versionFliter
 * @param oldData 输入枚举值
 * @returns 返回枚举值对应字符串[运行环境]
 */
export function versionFliter(oldData: number): string {
  let newData = "";
  switch (oldData) {
    case 10:
      newData = "DEV";
      break;
    case 20:
      newData = "UAT";
      break;
    case 30:
      newData = "PROD";
      break;
    case 400:
      newData = "Local";
      break;
    default:
      break;
  }
  return newData;
}

/**
 * 状态过滤 value|statusFilter
 * @inputValue 输入枚举值
 * @returns 返回状态转换值
 */
export function statusFilter(inputValue: number): string {
  let outputValue = "";
  switch (inputValue) {
    case 1:
      outputValue = "启用";
      break;
    case 2:
      outputValue = "禁用";
      break;
    default:
      break;
  }
  return outputValue;
}

/**
 * 规则类型 value|detailedTypeFilter
 * @param inputValue 枚举输入值
 * @returns 返回规则类型枚举对应值
 */
export function detailedTypeFilter(inputValue: string): string {
  let outputValue = "";
  switch (inputValue) {
    case "together":
      outputValue = "同行";
      break;
    case "nightOut":
      outputValue = "夜出";
      break;
    case "range":
      outputValue = "范围";
      break;
    case "foothold":
      outputValue = "落脚点";
      break;
    case "senstArea":
      outputValue = "敏感区域";
      break;
    default:
      break;
  }
  return outputValue;
}

/**
 * 任务进度 anaylsisStatusFilter
 * @param inputValue 枚举输入值
 * @returns 返回规则类型枚举对应值
 */
export function anaylsisStatusFilter(inputValue: number): string {
  let outputValue = "";
  switch (inputValue) {
    case 1:
      outputValue = "进行中";
      break;
    case 2:
      outputValue = "完成";
      break;
    default:
      break;
  }
  return outputValue;
}

/**
 * 时间规则转换类型 value|timeFilter
 * @param time 时间戳转化为时间
 * @returns 返回规则类型枚举对应值
 */
export function timeFilter(time: string): string {
  if (!time) return "";
  return moment(Number(time)).format("YYYY-MM-DD HH:mm:ss");
}

/**
 * 轨迹列表--时间规则转换类型 value|timeFilter
 * @param time 时间戳转化为时间
 * @returns 返回规则类型枚举对应值
 */
export function trackListTimeFilter(time: string): string {
  if (!time) return "";
  if(typeof time == 'string'){
    return time;
  }else {
    return moment(Number(time)).format("YYYY-MM-DD HH:mm:ss");
  }
}

export function timeSplitFilter(time: string): string {
  if (!time) return "";
  return moment(Number(time))
    .format("YYYY-MM-DD HH:mm:ss")
    .split(" ")[1];
}
export function dateSplitFilter(time: string): string {
  if (!time) return "";
  return moment(Number(time))
    .format("YYYY-MM-DD HH:mm:ss")
    .split(" ")[0];
}
/**
 * 阈值预警类型转换
 * @param type 类型数据
 * @returns 返回规则类型
 */
export function overThresholdFilter(type: string): string {
  let dataString = "未知";
  switch (type) {
    case "wifi":
      dataString = "mac流量";
      break;
    case "face":
      dataString = "人脸流量";
      break;
    case "car":
      dataString = "车辆流量";
      break;
  }
  return dataString;
}

/**
 * 活动轨迹分析类型转换
 * @param type 类型数据
 * @returns 返回规则类型
 */
export function trackTypeFilter(type: number): string {
  let dataString = "未知";
  switch (type) {
    case 1:
      dataString = "人员";
      break;
    case 2:
      dataString = "车辆";
      break;
    case 3:
      dataString = "mac";
      break;
  }
  return dataString;
}

/**
 * 活动轨迹分析类型转换
 * @param type 类型数据
 * @returns 返回规则类型
 */
export function analyseSourcePFliter(type: string): string {
  let dataString = "未知";
  switch (type) {
    case "1":
      dataString = "人员";
      break;
    case "2":
      dataString = "车辆";
      break;
    case "3":
      dataString = "mac";
      break;
  }
  return dataString;
}

/**
 * 超出范围预警 类型转换
 * @param type 类型数据
 * @returns 返回规则类型
 */
export function sourceTypeFliter(type: string): string {
  let dataString = "未知";
  switch (type) {
    case "face":
      dataString = "人员预警";
      break;
    case "car":
      dataString = "车辆预警";
      break;
    case "wifi":
      dataString = "WIFI预警";
      break;
  }
  return dataString;
}

/**
 * 活动轨迹分析 状态转换
 * @param type 类型数据
 * @returns 返回规则类型
 */
export function trackFlagFilter(type: number): string {
  let dataString: string = "";
  switch (type) {
    case 0:
      dataString = "未执行";
      break;
    case 1:
      dataString = "执行中";
      break;
    case 2:
      dataString = "已完成";
      break;
    case 3:
      dataString = "执行失败";
      break;
    case 9:
      dataString = "中断";
      break;
  }
  return dataString;
}

/**
 * 交通路况 转换
 * @param type 类型数据
 * @returns 返回规则类型
 */
export function roadTrafficStatusFilter(type: string): string {
  let dataString: string = "";
  switch (type) {
    case "0":
      dataString = "未知";
      break;
    case "1":
      dataString = "畅通";
      break;
    case "2":
      dataString = "缓行";
      break;
    case "3":
      dataString = "拥堵";
      break;
    case "4":
      dataString = "严重拥堵";
      break;
  }
  return dataString;
}

/**
 * 非法运营车类型 转换
 * @param type 类型数据
 * @returns 返回规则类型
 */
export function feifaCarFilter(type: number): string {
  let dataString: string = "";
  switch (type) {
    case 1:
      dataString = "正常车辆";
      break;
    case 2:
      dataString = "非法运营车辆";
      break;
    case 3:
      dataString = "疑似非法运营车辆";
      break;
  }
  return dataString;
}





/**注册全局过滤器 */
Vue.filter("genderFilter", genderFilter);
Vue.filter("statusFilter", statusFilter);
Vue.filter("versionFliter", versionFliter);
Vue.filter("detailedTypeFilter", detailedTypeFilter);
Vue.filter("timeFilter", timeFilter);
Vue.filter("trackListTimeFilter", trackListTimeFilter);
Vue.filter("anaylsisStatusFilter", anaylsisStatusFilter);
Vue.filter("overThresholdFilter", overThresholdFilter);
Vue.filter("analyseSourcePFliter", analyseSourcePFliter);
Vue.filter("trackFlagFilter", trackFlagFilter);
Vue.filter("trackTypeFilter", trackTypeFilter);
Vue.filter("timeSplitFilter", timeSplitFilter);
Vue.filter("dateSplitFilter", dateSplitFilter);
Vue.filter("sourceTypeFliter", sourceTypeFliter);
Vue.filter("roadTrafficStatusFilter", roadTrafficStatusFilter);
Vue.filter("feifaCarFilter", feifaCarFilter);
