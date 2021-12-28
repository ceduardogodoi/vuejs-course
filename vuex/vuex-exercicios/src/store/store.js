import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		produtos: []
	},
	getters: {
		valorTotal(state, getters) {
			return state.produtos.reduce((acumulador, produto) => {
				acumulador += produto.quantidade * produto.preco
				return acumulador
			}, 0)
		}
	},
	mutations: {
		adicionarProduto(state, payload) {
			state.produtos.push(payload)
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
