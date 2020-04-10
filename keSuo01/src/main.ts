import Vue from "vue";
import App from "./App.vue";
import router from "./routes/router";
import store from "./store/store";

/**组件拖拽自定义指令 */
import "@/utils/v-dialogDrag";
import '@/authorization/permission';
/**添加全局filters */
import "@/utils/filters";
/**引入jquery**/
import $ from 'jquery';
(window as any).jQuery = $
require('signalr')
/**element-ui */
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI, { size: "small" });

// import highcharts from 'highcharts';
// Vue.prototype.$Highcharts = highcharts;

/**elementui-verify校验插件安装 */
// import elementUIVerify from 'element-ui-verify';
// Vue.use(elementUIVerify);

/**animate.css */
import animated from "animate.css";
//窗体v-if过渡动画
Vue.prototype.$animateEnter = "animated fadeInRightBig";
Vue.prototype.$animateLeave = "animated fadeOutRightBig";

Vue.use(animated);

//hjf  菜单权限控制
import { SystemManagementEnumType, BehaviorAnalysisEnumType, NetWarningEnumType, TrackAnalysisEnumType } from "@/utils/enumTypes";
Vue.prototype.SystemManagementEnumType = SystemManagementEnumType; //系统管理
Vue.prototype.BehaviorAnalysisEnumType = BehaviorAnalysisEnumType;
Vue.prototype.NetWarningEnumType = NetWarningEnumType;
Vue.prototype.TrackAnalysisEnumType = TrackAnalysisEnumType;

// 引入Echarts
import echarts from "echarts";
Vue.prototype.$echarts = echarts;
Vue.use(echarts as any);

import Axios from 'axios';
Vue.prototype.$axios = Axios;

Vue.config.productionTip = false;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


