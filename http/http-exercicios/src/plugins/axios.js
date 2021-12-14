import Vue from 'vue'
import axios from 'axios'

// axios.defaults.baseURL = 'https://curso-vue-a2b9f-default-rtdb.firebaseio.com/'

Vue.use({
	install(Vue) {
		// Vue.prototype.$http = axios
		Vue.prototype.$http = axios.create({
			baseURL: 'https://curso-vue-a2b9f-default-rtdb.firebaseio.com/'
		})

		Vue.prototype.$http2 = axios.create({
			baseURL: 'https://jsonplaceholder.typicode.com/'
		})
	}
})
