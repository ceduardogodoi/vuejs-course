<template>
	<div id="app">
		<h1>Filtros &amp; Mixins</h1>
		<hr />
		<p>{{ cpfDoAluno | cpf | inverter }}</p>
		<hr />
		<input type="text" :value="cpfDoAluno | cpf | inverter">
		<hr />
		<Frutas />
		<hr />
		<div>
			<ul>
				<li v-for="fruta in frutas" :key="fruta">
					{{ fruta }}
				</li>
				<input type="text" v-model="fruta" @keydown.enter="add">
			</ul>
		</div>
		<hr />
		<p>{{ usuarioLogado }}</p>
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
import frutasMixin from './frutasMixin'
import usuarioMixin from './usuarioMixin'

export default {
	components: { Frutas },
	mixins: [frutasMixin, usuarioMixin],
	filters: {
		cpf(valor) {
			const arr = `${valor}`.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
		}
	},
	data() {
		return {
			cpfDoAluno: '60070080090',
			frutas: ['abacate']
		}
	},
	created() {
		console.log('Created - App.vue')
	}
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

input {
	font-size: 2.5rem;
}
</style>
