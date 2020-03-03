/* eslint-disable eqeqeq */
import axios from 'axios'
import store from '../store'
import router from '../router'
import { Message } from 'element-ui';

// 创建axios实例
let instance = axios.create({
  timeout: 1000 * 60,
  headers: {
    'Content-Type': 'application/json'
  }
})

/**
 * 跳转登录页
 * 携带当前页面路由，以期在登录页面完成登录后返回当前页面
 */
const toLogin = () => {
  router.replace({
    path: '/',
    query: {
      redirect: router.currentRoute.fullPath
    }
  })
}

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (status, response) => {
  console.log(status);
  // 状态码判断
  switch (status) {
    // 401 未登录 没有携带token token过期
    case 401:
      Message({
        type: 'warning',
        message: '没有携带token'
      })
      break
    // 404请求不存在
    case 404:
      Message({
        type: 'warning',
        message: '请求的资源不存在'
      })
      break
    default:
      console.log(other)
  }
}

// 灰度测试，全局添加请求头
let setHttpHeader = { 'Service-Type': 'grey' }

// 请求拦截器
instance.interceptors.request.use(config => {

  if (setHttpHeader) {
    for (let headerKey in setHttpHeader) {
      config.headers[headerKey] = setHttpHeader[headerKey]
    }
  }
  return config
}, error => {
  return Promise.error(error)
})

// 响应拦截器
instance.interceptors.response.use(
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 服务器状态码不是200的情况
  error => {
    const { response } = error
    if (response) {
      errorHandle(response.status, response)
      return Promise.reject(response)
    } else {
      // 处理断网的情况
      // eg:请求超时或断网时，更新state的network状态
      // network状态在app.vue中控制着一个全局的断网提示组件的显示隐藏
      // 关于断网组件中的刷新重新获取数据，会在断网组件中说明
      if (!window.navigator.onLine) {
        store.commit('changeNetwork', false)
      } else {
        return Promise.reject(error)
      }
    }
  }
)

export default instance
