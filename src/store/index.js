import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    data: null
  },
  mutations: {
    setData(state, value){
      state.data = value
    }
  },
  actions: {
  },
  modules: {
  }
})

export default store
