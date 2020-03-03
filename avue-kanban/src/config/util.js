import Cookies from 'js-cookie'

/**
 * 获取当前时间是周几
 * 
 */
function getWeekTime(data){
  var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
  var d = weekArray[new Date(data).getDay()];
  return d;
}

/**
 * 获取当前年月日
 */
function getData() {
  let myDate = new Date();
  let year = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
  let month = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
  let day = myDate.getDate(); //获取当前日(1-31)

  month = month >= 10 ? month : '0' + month
  day = day >= 10 ? day : '0' + day
  return year + '-' + month + '-' + day
}

/**
 * 获取指定间隔天数的时间 用于后台传参
 * @param {int} dayNum 时间间隔天数
 */
function getCurrentDataInterval (dayNum) {
  var dd = new Date()
  var startTime = ''
  var endTime = dd.toISOString().substring(0, 10) + 'T23:59:59.0000000+08:00'
  if (dayNum === 1) {
    startTime = dd.toISOString().substring(0, 10) + 'T00:00:00.0000000+08:00'
  } else {
    startTime = new Date(dd.getTime() - 24 * 60 * 60 * 1000 * (dayNum - 1)).toISOString().substring(0, 10) + 'T00:00:00.0000000+08:00'
  }
  let dateIntervalArr = [startTime, endTime]
  return dateIntervalArr
}

// 获取当前时间的小时间隔
function getCurrentHoursInterval (hoursNum) {
  var dd = new Date();
  let endTime = getDateTimeByStr (dd, true);
  let startTime = getDateTimeByStr (new Date(dd.getTime() - hoursNum * 60 * 60 * 1000 ), true)
  return [startTime, endTime]
}

/**
 * 时间转换格式
 * @param {String} str 当前时间
 * @param {Boolean} isFull true 后台传参格式  false 前台显示格式
 */
function getDateTimeByStr (str, isFull) {
  if (str) {
    let dd = new Date(str)
    let y = dd.getFullYear()
    let m = dd.getMonth() + 1
    let HH24 = dd.getHours() < 10 ? '0' + dd.getHours() : dd.getHours()
    let Mi = dd.getMinutes() < 10 ? '0' + dd.getMinutes() : dd.getMinutes()
    let ss = dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds()
    m = m < 10 ? '0' + m : m
    let d = dd.getDate()
    d = d < 10 ? ('0' + d) : d

    let dateStr
    if (isFull) {
      dateStr = y + '-' + m + '-' + d + 'T' + HH24 + ':' + Mi + ':' + ss + '.0000000+08:00'
    } else {
      dateStr = y + '-' + m + '-' + d + ' ' + HH24 + ':' + Mi + ':' + ss
    }
    return dateStr
  } else {
    return '暂无'
  }
}

/**
 * 时间转换格式 只显示年月日
 * @param {String} str 当前时间
 */
function forTimeByStr (str) {
  if (str) {
    let dd = new Date(str)
    let y = dd.getFullYear()
    let m = dd.getMonth() + 1
    let HH24 = dd.getHours() < 10 ? '0' + dd.getHours() : dd.getHours()
    let Mi = dd.getMinutes() < 10 ? '0' + dd.getMinutes() : dd.getMinutes()
    let ss = dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds()
    m = m < 10 ? '0' + m : m
    let d = dd.getDate()
    d = d < 10 ? ('0' + d) : d

    let dateStr = y + '-' + m + '-' + d
    return dateStr
  } else {
    return '暂无'
  }
}

let setStorage = (name, val) => {
  localStorage.setItem(name, val)
};

let getStorage = name => {
  return localStorage.getItem(name)
};

let removeStorage = name => {
  localStorage.setItem(name, "")
};

let getCookie = name => {
  Cookies.get('name')
};

let setCookie = (name, value, iDay) => {
  //设置cookie
  Cookies.set(name, value, {expires: iDay})
};

let removeCookie = name => {
  //删除cookie
  Cookies.remove(name)
};

function getArrByKey(data, k) {
  let key = k || "value";
  let res = [];
  if (data) {
    data.forEach(function(t) {
      res.push(t[key]);
    });
  }
  return res;
}

export {
  getWeekTime,
  getData,
  getCurrentDataInterval,
  getCurrentHoursInterval,
  getDateTimeByStr,
  forTimeByStr,
  setStorage,
  getStorage,
  removeStorage,
  setCookie,
  getCookie,
  removeCookie,
  getArrByKey
}
