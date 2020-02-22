import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import common from './modules/common'
import tags from './modules/tags'
import logs from './modules/logs'
import getters from './getters'
import goods from './modules/goods'
import supplier from './modules/supplier'
import goodsCategory from './modules/goodsCategory'

Vue.use(Vuex)
const store = new Vuex.Store({
    modules: {
        user,
        common,
        logs,
        tags,
        goods,
        supplier,
        goodsCategory

    },
    getters,
})

export default store