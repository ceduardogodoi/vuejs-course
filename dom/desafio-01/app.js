new Vue({
	el: '#desafio',
	data: {
		nome: 'Carlos',
		idade: 29,
		imagem: 'https://miro.medium.com/max/1400/1*OrjCKmou1jT4It5so5gvOA.jpeg'
	},
	methods: {
		exibeNumeroRandomico() {
			return Math.random()
		}
	}
})
