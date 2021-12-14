import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-a2b9f-default-rtdb.firebaseio.com/'

Vue.use({
	install(Vue) {
		Vue.prototype.$http = axios

		Vue.prototype.$http.interceptors.request.use(config => {
			console.log('request interceptor:', config.method)
			// if (config.method === 'post') {
			// 	config.method = 'put'
			// }
			return config
		})
	}
})
