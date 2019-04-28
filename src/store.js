import Vue from 'vue'
import Vuex from 'vuex'
import Banks from './store/modules/banks'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Banks
  }
})
