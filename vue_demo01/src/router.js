import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from './components/HelloWorld'
import Home from './components/Home'
import News from './components/News'
import Sport from './components/Sport'
import NewsDetail from './components/NewsDetail'
import ErrorPage from './components/ErrorPage'
Vue.use(VueRouter)

const routerPush = VueRouter.prototype.push
const routerReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

VueRouter.prototype.replace = function replace(location) {
  return routerReplace.call(this, location).catch(error=> error)
}


export default new VueRouter({
  routes:[
    {
      path:'/hello',
      name:'HelloWorld',
      component:HelloWorld,
      children:[
        {
          path:'home',
          name:'Home',
          component:Home
        },
        {
          path:'news',
          name:'News',
          component:News,
          children: [
            {
              path:'detail',
              name:'NewsDetail',
              component:NewsDetail
            },
            {
              path:'error',
              name:'error',
              component:ErrorPage
            },
            {
              path:'',
              redirect:'error'
            }
          ]
        },
        {
          path:'sport',
          name:'Sport',
          component:Sport
        }
      ]
    },

  ]
})
