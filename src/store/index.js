import Vue from 'vue'
import Vuex from 'vuex'

import { DataController } from '../data'

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

let dc = new DataController()
dc.fetch()
.then((data) => {
  store.commit('setData', data)
})


export default store
