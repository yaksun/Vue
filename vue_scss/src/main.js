import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import initRouter from './router/router-actions'
import store from './store/index'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import echarts from 'echarts'
import Axios from 'axios'

Vue.prototype.$echarts = echarts
Vue.prototype.$axios = Axios

Vue.config.productionTip = false
Vue.use(ElementUI)

initRouter(router) // 引用路由钩子函数

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
