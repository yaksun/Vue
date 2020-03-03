import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
  helpListObj: {
    index: '',
    title: '求助列表',
    param: '',
  },
  refreshHelpList: false,
  time: '', // 时间
  refreshHelpStatistic: false,

  // 详情信息弹框
  infoBoxStatus: false,
  info: '',

  // 求助列表弹框
  helpInfo: '',
  helpInfoBoxStatus: false
}

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
