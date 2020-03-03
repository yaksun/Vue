/**
 * 接口域名的管理
 */
const developmentUrl = serviceGateWayUrl  // 写入配置文件，Jenkins打包自动根据环境更改
const baseUrl = {
  url: developmentUrl,
  // fileUrl: developmentUrl + '/api/jp-TIFS-FileCenter-ms/file?businessId=', // 图片地址
}

export default baseUrl
