<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade do Usuário: <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reiniciar nome</button>
        <button @click="reiniciarFn">Reiniciar nome (callback)</button>
    </div>
</template>

<script>
export default {
	props: {
		nome: {
			type: String,
			// required: true
			// default() {
			// 	return Array(10)
			// 		.fill(0)
			// 		.join(',')
			// }
			default: 'Anônimo'
		},
		reiniciarFn: Function,
		idade: Number
	},
	methods: {
		inverterNome() {
			return this.nome
				.split('')
				.reverse()
				.join('')
		},
		reiniciarNome() {
			this.$emit('nomeMudou', 'Pedro')
		}
	}
}
</script>

<style scoped>
.componente {
	flex: 1;
	background-color: #ec485f;
	color: #fff;
}
</style>
