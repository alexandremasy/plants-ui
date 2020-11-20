import Vue from 'vue'
import App from './App.vue'
import router from './views/router'
import store from './store'
import { install } from '@spices/basil'

import { DataController } from './data'

Vue.config.productionTip = false
Vue.use(install)

let dc = new DataController(store)
dc.fetch()

new Vue({
  router,
	store,
	provide(){
		return {
			'$dc': dc
		}
	},
  render: h => h(App)
}).$mount('#app')
