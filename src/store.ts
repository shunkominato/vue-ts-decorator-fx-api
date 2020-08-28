import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.config.devtools = process.env.NODE_ENV === 'development'

import stores from './stores'

export default new Vuex.Store({
    modules: {
        stores,
    },
})
