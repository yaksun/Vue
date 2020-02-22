import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Mytest from "./views/Mytest.vue";
import Echarts from './views/Echarts'
import MyTable from './views/MyTable'
import NewDrag from './views/NewDrag'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
      {
          path: "/mytest",
          name: "mytest",
          component: Mytest
      },
      {
          path: "/echarts",
          name: "echarts",
          component: Echarts
      },
      {
        path: "/mytable",
        name: "mytable",
        component: MyTable
    },
      {
          path: "/newdrag",
          name: "newdrag",
          component: NewDrag
      }


    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () =>
    //     import(/* webpackChunkName: "about" */ "./views/About.vue")
    // }
  ]
});
