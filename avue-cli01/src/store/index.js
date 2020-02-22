import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import tags from './modules/tags'
import logs from './modules/logs'
import getters from './getters'
import todos from './modules/todos'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        todos,
        user,
        common,
        logs,
        tags
    },
    getters,
})

export default store