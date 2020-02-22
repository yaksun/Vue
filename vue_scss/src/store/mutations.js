export default {
  // 求助列表标题修改
  initHelpListTitle (state, obj) {
    state.helpListObj.index= obj.index
    state.helpListObj.title = obj.title
    state.helpListObj.param = obj.param
  },
  // 求助列表是否刷新
  initRefreshHelpList (state, status) {
    state.refreshHelpList = status
  },


  initTime (state, param) {
    state.time = param
  },

  initRefreshHelpStatistic (state, status) {
    state.refreshHelpStatistic = status
  },

  initInfo (state, info) {
    state.info = info
  },

  initInfoBoxStatus (state, status) {
    state.infoBoxStatus = status
  },
  
  initHelpInfo (state, info) {
    state.helpInfo = info
  },

  initHelpInfoBoxStatus (state, status) {
    state.helpInfoBoxStatus = status
  }
  // setinternshipRotation (state, { key, value }) {
  //   state.internshipData[key] = value
  // }
}
