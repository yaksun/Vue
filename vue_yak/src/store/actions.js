import {
  RECEIVE_INITMSG,
  RECEIVE_LAST_ITEM
} from './mutation-types'


import {
  reqInitMsg,
  reqLastItem
} from '../api'

export default {
  // 第二个参数还可以放回调函数
  async getInitMsg({commit}){

    const result = await reqInitMsg()
    if(result.code == 0){
      const img = result.data
      commit(RECEIVE_INITMSG,{img})
    }

  },
  async getLastItem({commit},val){

      commit(RECEIVE_LAST_ITEM,{val})

  },

}
