<template>
	<div id="app">
		<h1>Formulário Desafio</h1>
		<div class="conteudo">
			<!-- Exercicio 02 -->
			<!-- Só mostrar o fomulário de não tiver sido submetido -->
			<!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->
			<form v-if="!submitted" class="painel">
				<div class="cabecalho">Formulário</div>
				<!-- Exercicio 01 -->
				<!-- Criar uma formulário de registro -->
				<!-- Nome completo (Nome e Sobrenome) -->

					<!-- Exercicio 03 -->
				<!-- Crie um componente personalizado NomeCompleto -->
				<!-- Esse componente deve receber Nome e Sobrenome -->
				<NomeCompleto :value="user.fullName" />

				<!-- Email -->
				<Rotulo nome="E-mail">
					<input id="email" type="email" v-model="user.email">
				</Rotulo>

				<!-- Senha -->
				<Rotulo nome="Senha">
					<input id="password" type="password" v-model="user.password">
				</Rotulo>

				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="Armazenar dados?">
					<input type="checkbox" v-model="shouldStoreData">
				</Rotulo>

				<button @click="submitForm" type="button">Submeter formulário</button>
			</form>

			<div v-else class="painel">
				<Rotulo nome="Nome">
					<output>{{ user.fullName.name }}</output>
				</Rotulo>

				<Rotulo nome="Sobrenome">
					<output>{{ user.fullName.surname }}</output>
				</Rotulo>

				<!-- Email -->
				<Rotulo nome="E-mail">
					<output>{{ user.email }}</output>
				</Rotulo>

				<!-- Senha -->
				<Rotulo nome="Senha">
					<output>{{ user.password }}</output>
				</Rotulo>

				<!-- Armazenar Dados? (Sim/Não) -->
				<Rotulo nome="Armazenar dados?">
					<output>{{ shouldStoreData }}</output>
				</Rotulo>
			</div>
		</div>
	</div>
</template>

<script>
import Rotulo from './components/Rotulo.vue'
import NomeCompleto from './components/NomeCompleto.vue'

export default {
	name: 'app',
	components: { Rotulo, NomeCompleto },
	data() {
		return {
			user: {
				fullName: {
					name: '',
					surname: ''
				},
				email: '',
				password: ''
			},
			shouldStoreData: true,
			submitted: false
		}
	},
	methods: {
		submitForm() {
			this.submitted = true
		}
	}
}
</script>

<style>
body {
	background-color: #ececec;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

	display: flex;
	flex-direction: column;
}

.conteudo {
	display: flex;
}

.painel {
	flex: 1;
	background: #fff;
	margin: 0px 10px;
	padding: 20px;
	border: 1px solid #aaa;
	border-radius: 5px;
}

.painel .cabecalho {
	width: 100%;
	background-color: #ddd;
	padding: 10px 0px;
	border-radius: 5px;
	font-size: 1.4rem;
}

#app form button {
	float: right;
	margin: 10px 0px;
	padding: 10px 20px;
	font-size: 1.4rem;
	border-radius: 5px;
	color: #fff;
	background-color: #2196f3;
}

#app h1 {
	font-weight: 200;
	margin: 20px;
	padding: 0;
}

.mr-4 {
	margin-right: 40px;
}
</style>
