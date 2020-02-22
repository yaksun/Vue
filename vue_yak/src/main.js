import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import './mock/mockServer' // 加载mockServer即可

import {
  Row,
  Col,
  Button,
  Card,
  Table,
  Input
} from 'element-ui'

Vue.use(Row)
Vue.use(Col)
Vue.use(Button)
Vue.use(Card)
Vue.use(Table)
Vue.use(Input)

window.$vm =new Vue({
  el:'#app',
  components:{App},
  template:'<App />',
  router,
  store
})

// console.log(vm);
