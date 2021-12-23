import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		produtos: []
	},
	getters: {
		valorTotal(state) {
			return state.produtos.reduce((acumulador, produto) => {
				acumulador += produto.quantidade * produto.preco
				return acumulador
			}, 0)
		}
	}
})
