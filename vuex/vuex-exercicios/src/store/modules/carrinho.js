export default {
	namespaced: true,
	state: {
		produtos: []
	},
	getters: {
		valorTotal(state, getters, rootState) {
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
		adicionarProduto(context, payload, state, rootState) {
			setTimeout(() => {
				context.commit('adicionarProduto', payload)
			}, 1000)
		}
	}
}
