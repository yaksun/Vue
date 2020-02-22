import Vue from 'vue'
import state from './state'
import actions from './actions'
import getter from './getter'
import mutations from './mutations'

export default new Vue.store({
  state,
  actions,
  getter,
  mutations
})
