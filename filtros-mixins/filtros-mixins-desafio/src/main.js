import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

/** Exercício 2
 * Filtro global que conta o tamanho de cada palavra e adiciona o
 * valor na string final
 * "Pedro é legal" => "Pedro (5) é (1) legal (5)" */
Vue.filter('wordCounter', value => {
	return value
		.split(' ')
		.map(word => `${word} (${word.length})`)
		.join(' ')
})

new Vue({
	render: h => h(App)
}).$mount('#app')
