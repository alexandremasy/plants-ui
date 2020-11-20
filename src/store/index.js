import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
		plants: null,
		categories: null,
  },
  mutations: {
		setCategories(state, value){
			state.categories = value
		},
    setPlants(state, value){
			state.plants = value
		},
  },
  actions: {
  },
  modules: {
  }
})

export default store
