import Vue from 'vue'
import VueRouter from 'vue-router'


// import Miste from '../page/Miste/Miste'
// import Profile from '../page/Profile/Profile'
// import Order from '../page/Order/Order'
// import Search from '../page/Search/Search'

const Miste=()=>import('../page/Miste/Miste')
const Profile=()=>import('../page/Profile/Profile')
const Order=()=>import('../page/Order/Order')
const Search=()=>import('../page/Search/Search')

import Login from '../page/Login/Login'
import Shop from '../page/Shop/Shop'
import ShopGoods  from '../page/Shop/ShopGoods/ShopGoods'
import ShopInfo from '../page/Shop/ShopInfo/ShopInfo'
import ShopRatings from '../page/Shop/ShopRatings/ShopRatings'

Vue.use(VueRouter)

export default  new VueRouter({
  routes:[
    {
      path:'/miste',
      component:Miste,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/profile',
      component:Profile,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/order',
      component:Order,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/search',
      component:Search,
      meta: {
        showFooter: true
      }
    },
    {
      path:'/',
      redirect:'/miste'
    },
    {
      path:'/login',
      component:Login,
      meta: {
        showFooter: false
      }
    },
    {
      path:'/shop',
      component:Shop,
      children:[
        {
          path:'goods',
          component:ShopGoods
        },
        {
          path:'ratings',
          component:ShopRatings
        },
        {
          path:'info',
          component:ShopInfo
        },
        {
          path:'',
          redirect: 'goods'
        }
      ]
    }
  ]
})
