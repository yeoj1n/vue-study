import Vue from 'vue'
import App from '@/App.vue'
import { router } from '@/routes/route.js'
import axios from 'axios';
import store from '@/store/store.js'

//Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
  router,
  axios,
  store
}).$mount('#app')
