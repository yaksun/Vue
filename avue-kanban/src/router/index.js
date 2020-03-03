import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '疫情治安防控平台'
      },
      component: () => import('../views/index.vue')
    },
    {
      path: '/index',
      name: 'index',
      meta: {
        title: '疫情治安防控平台'
      },
      component: () => import('../views/index.vue')
    }
  ]
})
