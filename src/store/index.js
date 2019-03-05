import Vue from 'vue'
import Vuex from 'vuex'

import icbc from './modules/icbc'

Vue.use(Vuex)
export default new Vuex.Store({
  modules: {
    icbc
  }
})
