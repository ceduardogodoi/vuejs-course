import Vue from 'vue'

export default {
  async loadData({ commit }) {
    const resp = await Vue.prototype.$http('data.json')
    const data = resp.data
    if (data) {
      commit('setStocks', data.stocks)
      commit('setPortfolio', {
        funds: data.funds,
        stockPortfolio: data.stockPortfolio
      })
    }
  }
}
