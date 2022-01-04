import stocks from '../../data/stocks'

export default {
	state: {
		stocks: []
	},
	mutations: {
		// stocks é o parâmetro payload
		setStocks(state, stocks) {
			state.stocks = stocks
		}
	},
	actions: {
		buyStock({ commit }, order) {
			commit()
		},
		initStocks({ commit }) {
			commit('setStocks', stocks)
		}
	},
	getters: {
		stocks(state) {
			return state.stocks
		}
	}
}
