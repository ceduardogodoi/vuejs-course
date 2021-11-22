<template>
	<div>
		<Rotulo nome="Nome">
			<input @input="alterarNome" v-model="value.name" id="name" type="text">
		</Rotulo>
		<Rotulo nome="Sobrenome">
			<input @input="alterarSobrenome" v-model="value.surname" id="surname" type="text">
		</Rotulo>
	</div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
	components: { Rotulo },
	props: {
		value: {
			type: Object,
			required: true
		}
	},
	methods: {
		alterarNome(event) {
			this.$emit('input', {
				name: event.target.value,
				surname: this.value.surname
			})
		},
		alterarSobrenome(event) {
			this.$emit('input', {
				name: this.value.name,
				surname: event.target.value
			})
		}
	}
}
</script>
