/*
 *   此版本为规则引擎版本
 *   jp_wuhan_dev ： 武汉开发环境
 *   gaw_wuhan_prod ： 武汉正式环境（线上环境）
 */

var environment = 'H5_config' // 后台管理配置 type
var serviceGateWayUrl = 'http://172.16.14.151:20014'

/**
 * 地图配置
 */
var mapSomeURL = "";
var mapServer = "";
var mapFeatureServer = "";
var dojoURL = "";
var cssURL = "";
var g_centerPoint = null;
var zoom = 5;
var isWGS84;
var wkid = 4326;

if(wkid === 4326) {
  isWGS84 = true
}else {
  isWGS84 = false;
}