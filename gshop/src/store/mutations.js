import {
  RECEIVE_ADDRESS,
  RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINGS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART,
  RECEIVE_SEARCH_SHOPS
} from './mutation-types'

import Vue from 'vue'

export default{
  [RECEIVE_ADDRESS] (state, {address}) {
    state.address = address
  },
  [RECEIVE_CATEGORYS](state,{categorys}){
      state.categorys = categorys
  },
  [RECEIVE_SHOPS](state,{shops}){
    state.shops = shops
  },
  [RECEIVE_USER_INFO](state,{userInfo}){
    console.log(userInfo);
    state.userInfo = userInfo
  },
  [RESET_USER_INFO](state){
    state.userInfo = {}
  },
  [RECEIVE_SHOP_INFO](state,{shopInfo}){
    state.info = shopInfo
  },
  [RECEIVE_SHOP_GOODS](state,{shopGoods}){
    state.goods = shopGoods
  },
  [RECEIVE_SHOP_RATINGS](state,{shopRatings}){
    state.ratings = shopRatings
  },
  [INCREMENT_FOOD_COUNT](state,{food}){

    // 第一次添加，就给它加上count属性
    if(!food.count){
      Vue.set(food,'count',1)

      // 将food添加到cartFoods中
      state.cartFoods.push(food)

    }else{
      food.count++
    }
  },
  [DECREMENT_FOOD_COUNT](state,{food}){
    if(food.count){
      food.count--
      if(food.count===0) {
          // 将food从cartFoods中移除
          state.cartFoods.splice(state.cartFoods.indexOf(food), 1)
        }

    }
  },
  [CLEAR_CART](state){
    // 1.把food数量置0
    state.cartFoods.forEach(food=>food.count = 0)

    // 2.把数组置空
    state.cartFoods=[]
  },
  [RECEIVE_SEARCH_SHOPS](state,{searchShops}){
    state.searchShops = searchShops
  },




}
