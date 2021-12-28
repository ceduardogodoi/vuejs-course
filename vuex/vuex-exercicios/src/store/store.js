import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		produtos: [],
		quantidade: 3,
		preco: 19.99
	},
	getters: {
		valorTotal(state, getters) {
			return state.produtos.reduce((acumulador, produto) => {
				acumulador += produto.quantidade * produto.preco
				return acumulador
			}, 0)
		}
		// quantidade(state) {
		// 	return state.quantidade
		// },
		// preco(state) {
		// 	return state.preco
		// }
	},
	mutations: {
		adicionarProduto(state, payload) {
			state.produtos.push(payload)
		},
		setQuantidade(state, payload) {
			state.quantidade = payload
		},
		setPreco(state, payload) {
			state.preco = payload
		}
	},
	actions: {
		adicionarProduto(context, payload) {
			setTimeout(() => {
				context.commit('adicionarProduto', payload)
			}, 1000)
		}
	}
})
