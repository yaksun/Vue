import Vue from 'vue'

import VueRouter from 'vue-router'
import DragLayout from '../page/DragLayout'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/',
      component:DragLayout

    }
  ]
})
