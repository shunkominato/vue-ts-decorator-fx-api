import Vue from 'vue';
import Vuex from 'vuex';

import FxRepository from './stores/repositories/FxRepository';

Vue.use(Vuex);
Vue.config.devtools = process.env.NODE_ENV === 'development';

export default new Vuex.Store({
  modules: {
    Fx: FxRepository,
  },
});
