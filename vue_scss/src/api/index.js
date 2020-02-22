import base from '../request/base'
import axios from '../request/http'
import Vue from 'vue'
import baseUrl from '../request/base'

// TOP10 疫情城市
const getTopTen = function () {
  return axios.get('/api/board/getYqTopTen')
}

// 获取武汉的疫情情况
const getWhInfo = function () {
  return axios.get('/api/board/getWhyq')
}

// 辖区分布

// 搜索
const searchTrip = function (time, number, address) {  
  return axios.get(`/api/board/getQuery?dateTime=${time}&trainNumber=${number}&address=${address}`)
}

// 车次信息
const getCarInfo = function(id) {
  return axios.get(`/api/board/getOneQuery?id=${id}`)
}

// 相同行程查询工具 前端做分页
const searchRoute = function (trafficType) {
  return axios.get(`/api/board/getQueryTool?trafficType=${trafficType}`)
}

// 警情列表
const getPoliceList = function (phone, address, wordType) {
  if(phone) {
    return axios.get(`/api/board/getjpList?phone=${phone}`)
  }

  if(address) {
    return axios.get(`/api/board/getjpList?address=${address}`)
  }

  if(wordType) {
    return axios.get(`/api/board/getjpList?wordType=${wordType}`)
  }

  return axios.get('/api/board/getjpList')
}

// 获取单条警情信息
const getJpInfo = function (id) {
  return axios.get(`/api/board/getOnejp?id=${id}`)
}

// 词云
const getWordCloud = function () { 
  return axios.get('/api/board/getWordCloud')
}

// 防控指数(警情总数，疫情相关求助)
const getPlatformStatistic = function () {
  return axios.get('/api/board/getPlatformStatistic')
}

// 投诉类型饼图
const getTypesComplaintsline = function (time) {
  return axios.get(`/api/board/getTypesComplaintsline?dateTime=${time}`)
}

// 累计趋势图 
const getTypesComplaintstRend = function () { 
  return axios.get('/api/board/getTypesComplaintstRend')
}

// 警情数量柱形图 
const getRepeatHelpLine = function () { 
  return axios.get('/api/board/getRepeatHelpLine')
}

// 重复警情联动
const getRepeatHelpSuperposition = function () { 
  return axios.get('/api/board/getRepeatHelpSuperposition')
}

export {
  getTopTen,
  getWhInfo,
  searchTrip,
  getCarInfo,
  searchRoute,
  getPoliceList,
  getJpInfo,
  getWordCloud,
  getPlatformStatistic,
  getTypesComplaintsline,
  getTypesComplaintstRend,
  getRepeatHelpLine,
  getRepeatHelpSuperposition
}

