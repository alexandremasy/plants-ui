<template>
  <main
		id="main"
		class="main">

    <h1>Hello</h1>
  </main>
</template>

<script>
export default {
	name: 'Home',

	inject: [
		'$dc'
	],

	mounted(){
		console.log('ddd', this.$dc);
	}
}
</script>
