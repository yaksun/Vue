
export class time {
  /**
   * 获取当前时间是周几
   * 
   */
  public static getWeekTime(data: string){
    var weekArray = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");
    var d = weekArray[new Date(data).getDay()];
    return d;
  }

  /**
   * 获取当前时间，如：15:34
   * 
   */
  public static getHMTime(data: string){
    var h = new Date(data).getHours();
    var m = new Date(data).getMinutes();
    var tt=''
    if(m<10){
      tt = h+':'+'0'+m
    }else{
      tt = h+':'+ m
    }
    return tt;
  }

  /**
   * 获取指定间隔天数的时间 用于后台传参
   * @param {int} dayNum 时间间隔天数
   */
  public static getCurrentDataInterval (dayNum: number) {
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

  
  // 获取当前时间 多少秒的时间间隔 用于视频回放
  public static getCurrentHoursInterval (secondNum: number) {
    var dd: any = new Date();
    let endTime = this.getDateTimeByStr(dd, true, true);
    let startTime = this.getDateTimeByStr(new Date(dd.getTime() - secondNum * 1000 ), true, true)
    return [startTime, endTime]
  }

  /**
   * 时间转换格式
   * @param {String} str 当前时间
   * @param {Boolean} isFull true 后台传参格式  false 前台显示格式
   * @param {Boolean} resultStatus false 前台显示  true 后台传参
   */
  public static getDateTimeByStr (str: any, isFull: boolean, resultStatus: boolean) {
    if (str) {
      let dd = new Date(str)

      let y: any = dd.getFullYear()
      let m: any = dd.getMonth() + 1
      let HH24 = dd.getHours() < 10 ? '0' + dd.getHours() : dd.getHours()
      let Mi = dd.getMinutes() < 10 ? '0' + dd.getMinutes() : dd.getMinutes()
      let ss = dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds()
      m = m < 10 ? '0' + m : m
      let d: any = dd.getDate()
      d = d < 10 ? ('0' + d) : d

      let dateStr
      if (isFull) {
        dateStr = y + '-' + m + '-' + d + 'T' + HH24 + ':' + Mi + ':' + ss + '.0000000+08:00'
      } else {
        dateStr = y + '-' + m + '-' + d + ' ' + HH24 + ':' + Mi + ':' + ss
      }
      return dateStr
    } else {
      if (resultStatus) {
        return '';
      }
      return '暂无';
    }
  }
}
