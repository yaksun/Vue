import {
  RECEIVE_INITMSG,
  RECEIVE_LAST_ITEM

} from './mutation-types'

export default {
  [RECEIVE_INITMSG](state,{img}){
      state.dragList = img
  },
  [RECEIVE_LAST_ITEM](state,{item}){
    state.lastItem = item
  }
}



