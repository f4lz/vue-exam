import Vue from 'vue'
import films from '@/store/modules/films'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

  modules: {
    films,
  }
})
