<template>
	<div class="contadores">
		<h1>Contadores</h1>

		<app-contador v-for="contador in 5" :key="contador" />
	</div>
</template>

<script>
import ContadorVue from './Contador.vue'

export default {
	components: {
		'app-contador': ContadorVue
	}
}
</script>

<style></style>
