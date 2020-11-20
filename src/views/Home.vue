<template>
  <main
		id="main"
		class="main">

		<header class="header">
			<article>Product</article>
			<div class="header__months">
				<article class="header__month" title="Janvier">j</article>
				<article class="header__month" title="Février">f</article>
				<article class="header__month" title="Mars">m</article>
				<article class="header__month" title="Avril">a</article>
				<article class="header__month" title="Mai">m</article>
				<article class="header__month" title="Juin">j</article>
				<article class="header__month" title="Juillet">j</article>
				<article class="header__month" title="Aout">a</article>
				<article class="header__month" title="Septembre">s</article>
				<article class="header__month" title="Octobre">o</article>
				<article class="header__month" title="Novembre">n</article>
				<article class="header__month" title="Décembre">d</article>
			</div>
		</header>

		<details
			v-for="(category, i) in categories"
			:key="i"
			class="category">
			<summary>
				<div class="category__title">{{ category.name }}</div>

				<div class="category__timing">
					<div class="category__sowing"></div>
				</div>
			</summary>
		</details>
  </main>
</template>

<script>
import { mapState } from 'vuex'

export default {
	name: 'Home',

	inject: [
		'$dc'
	],

	computed: {
		...mapState({
			categories: state => state.categories,
			plants: state => state.plants,
		})
	},

	methods: {

	},
}
</script>
