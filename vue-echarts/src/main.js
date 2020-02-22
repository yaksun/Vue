// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import {Col,Row,Container,Main,Header,Footer,Aside} from 'element-ui'

Vue.config.productionTip = false
Vue.component(Col.name,Col)
Vue.component(Row.name,Row)
Vue.component(Container.name,Container)
Vue.component(Main.name,Main)
Vue.component(Header.name,Header)
Vue.component(Footer.name,Footer)
Vue.component(Aside.name,Aside)
import Store from './store'



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  Store
})
