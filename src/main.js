import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueAxios from 'vue-axios'
import store from './store'

import axios from 'axios'
window.axios = axios

createApp(App).use(router).use(VueAxios, axios).use(store).mount('#app')
