import {
  RECEIVE_ADDRESS
  , RECEIVE_CATEGORYS,
  RECEIVE_SHOPS,
  RECEIVE_USER_INFO,
  RESET_USER_INFO,
  RECEIVE_SHOP_INFO,
  RECEIVE_SHOP_GOODS,
  RECEIVE_SHOP_RATINGS,
  RECEIVE_SEARCH_SHOPS,
  INCREMENT_FOOD_COUNT,
  DECREMENT_FOOD_COUNT,
  CLEAR_CART
} from './mutation-types'
import {
  reqAddress,
  reqFoodCategorys,
  reqShops,
  reqLogout,
  reqUserInfo,
  reqShopInfo,
  reqShopGoods,
  reqShopRatings,
  reqSearchShops

} from '../api'

export default{
    async getAddress({commit,state}){
      // 发送异步ajax请求
      const geohash = state.latitude + ',' + state.longitude
      const result = await reqAddress(geohash)
      // 提交一个mutation
      if (result.code === 0) {
        const address = result.data

        // 数据以对象形式传递
        commit(RECEIVE_ADDRESS, {address})
      }
    },


  async getFoodCategorys({commit}){

      const result = await reqFoodCategorys()

      if(result.code == 0){
        const categorys = result.data
        commit(RECEIVE_CATEGORYS,{categorys})
     }
  },

  async getShops({commit,state}){
        const {longitude,latitude} = state
      const  result = await reqShops(longitude,latitude)
      if(result.code == 0){
        const shops = result.data
        commit(RECEIVE_SHOPS,{shops})
      }
  },

  // 同步记录用户信息
  recordUser({commit}, userInfo) {
    commit(RECEIVE_USER_INFO, {userInfo})
  },

  // 异步获取用户信息
  async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },


  async getLogout({commit}){

      const result = await reqLogout()
      if(result.code == 0){
        commit(RESET_USER_INFO)
      }
  },

  // 异步获取用户信息
  async getShopInfo({commit}) {
    const result = await reqShopInfo()
    if (result.code === 0) {
      const shopInfo = result.data
      commit(RECEIVE_SHOP_INFO, {shopInfo})
    }
  },

  // 异步获取信商品息
  async getShopGoods({commit},callback) {
    const result = await reqShopGoods()
    if (result.code === 0) {
      const shopGoods = result.data
      commit(RECEIVE_SHOP_GOODS, {shopGoods})
      callback && callback()
    }
  },
  // 异步获取信商品息
  async getShopRatings({commit},callback) {
    const result = await reqShopRatings()
    if (result.code === 0) {
      const shopRatings = result.data
      commit(RECEIVE_SHOP_RATINGS, {shopRatings})
      callback && callback()
    }
  },

  async updateFoodCount({commit},{isAdd,food}){
      if(isAdd){
        commit(INCREMENT_FOOD_COUNT,{food})
      }else{
        commit(DECREMENT_FOOD_COUNT,{food})
      }

  },

  // 同步清空购物车
  clearCart({commit}) {
    commit(CLEAR_CART)
  },


// 异步获取搜索的商家列表
  async getSearchShops({commit,state},keywords){
    const geohash = state.latitude + ',' + state.longitude
    const result = await reqSearchShops(geohash,keywords)

    if(result.code == 0){
      const searchShops = result.data
      commit(RECEIVE_SEARCH_SHOPS,{searchShops})
    }
  },


}
