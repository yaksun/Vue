import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Main from  '@/components/Main'
import Test1 from '@/components/home/Test1'
import SetChart from '@/components/SetChart'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/set_chart',
      name:'SetChart',
      component:SetChart
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
      children:[
        {
          path:'test1',
          name:'Test1',
          component:Test1
        }
      ]
    }
  ]
})
