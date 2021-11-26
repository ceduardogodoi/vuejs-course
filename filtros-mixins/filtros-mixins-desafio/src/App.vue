<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		<h3>Exercício 1</h3>
		<p>{{ text | noComma }}</p>
		<hr />
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->
		<h3>Exercício 2</h3>
		<p>{{ text | wordCounter }}</p>
		<hr />

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->
		<h3>Exercício 3</h3>
		<p>{{ textWithNoSpaces }}</p>
		<p>{{ textWithWordCounter }}</p>
		<hr />

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import mixin from './mixin'

export default {
	data() {
		return {
			text: 'Pedro é legal'
		}
	},
	filters: {
		noComma(value) {
			return value.replaceAll(' ', ',')
		}
	},
	mixins: [mixin]
	// computed: {
	// 	textWithNoSpaces() {
	// 		return this.text.replaceAll(' ', ',')
	// 	},
	// 	textWithWordCounter() {
	// 		return this.text
	// 			.split(' ')
	// 			.map(word => `${word} (${word.length})`)
	// 			.join(' ')
	// 	}
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
