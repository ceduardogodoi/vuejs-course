<template>
	<div id="app">
		{{ titulo }}

		<button @click="titulo += '#'">Alterar título</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			titulo: 'Teste data usando VueJS'
		}
	}
}
</script>

<style>
#app {
	background-color: brown;
	color: white;
}
</style>
