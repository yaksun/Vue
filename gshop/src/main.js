
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import VueLazyload from 'vue-lazyload'

import { Button } from 'mint-ui';
import VueCookies from 'vue-cookies'
import './fiters' // 加载过滤器
import loading from './common/imgs/loading.gif'


// 引入就可以加载Mock服务
import './mocks/mockServer'


Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})

Vue.use(VueCookies)
Vue.component(Button.name, Button)

new Vue({
  el:'#app',
  router,
  store,
  render: h=>h(App)
})
