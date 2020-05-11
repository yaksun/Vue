import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const router = new Router({
  routes: [
    { path: "/", redirect: "/login" },
    {
      path: "/About",
      name: "About",
      meta: { title: "About页" },
      component: resolve => require(["@/pages/About.vue"], resolve)
    },
    {
      path: "/Error",
      name: "Error",
      meta: { title: "Error页" },
      component: resolve => require(["@/pages/Error.vue"], resolve)
    },
    {
      path: "/Home",
      name: "Home",
      meta: { title: "Home页" },
      component: resolve => require(["@/pages/Home.vue"], resolve)
    },
    {
      path: "/Login",
      name: "Login",
      meta: { title: "Login页" },
      component: resolve => require(["@/pages/Login.vue"], resolve)
    },
    {
      path: "/Enter",
      name: "Enter",
      meta: { title: "Enter页" },
      component: resolve => require(["@/pages/Enter.vue"], resolve)
    }
  ]
});

export default router;
