export default {
	state: {
		funds: 10_000,
		stocks: []
	},
	mutations: {
		buyStock(state, { stockId, quantity, stockPrice }) {
			const record = state.stocks.find(element => element.id === stockId)
			if (record) {
				record.quantity += quantity
			} else {
				state.stocks.push({
					id: stockId,
					quantity
				})
			}

			state.funds -= stockPrice * quantity
		},
		sellStock(state, { stockId, quantity, stockPrice }) {
			const record = state.stocks.find(element => element.id === stockId)
			if (record.quantity > quantity) {
				record.quantity -= quantity
			} else {
				state.stocks.splice(state.stocks.indexOf(record), 1)
			}

			state.funds += stockPrice * quantity
		}
	},
	actions: {
		sellStock({ commit }, order) {
			commit('sellStock', order)
		}
	},
	getters: {
		stockPortfolio(state, getters) {
			// state.stocks has the portfolio stocks
			return state.stocks.map(stock => {
				// getters.stocks has the global stocks (from stocks module)
				const record = getters.stocks.find(element => element.id === stock.id)
				return {
					id: stock.id,
					quantity: stock.quantity,
					name: record.name,
					proce: record.price
				}
			})
		},
		funds(state) {
			return state.funds
		}
	}
}
