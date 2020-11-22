<template>
  <main
		id="main"
		class="main">

		<header class="header">
			<article>Product</article>
			<div class="header__months">
				<article 
					v-for="(month, i) in months"
					:key="i"
					class="header__month" 
					title="Janvier">{{ month.labels[0][0] }}</article>
			</div>
		</header>

		<details
			v-for="(category, i) in categories"
			:key="i"
			class="category">
			<category-header 
				:value="category" />
		</details>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import { Month } from '../data'
import CategoryHeader from './components/category/header'

export default {
	name: 'Home',

	inject: [
		'$dc'
	],

	components: {
		CategoryHeader
	},

	computed: {
		...mapState({
			categories: state => state.categories,
			plants: state => state.plants,
		}),

		months(){
			return Month.ALL
		}
	},

	methods: {

	},
}
</script>
