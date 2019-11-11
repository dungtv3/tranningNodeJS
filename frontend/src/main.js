window.axios = require('axios')

import Vue from 'vue';
import store from './store'
import router from './router'
import App from './components/App.vue';
import setHeaderToken from '@/setHeaderToken.js'
import VueSocketio from 'vue-socket-io'
Vue.use(VueSocketio, 'http://127.0.0.2:3000');
Vue.config.productionTip = false
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
setHeaderToken(token);
new Vue({
  store,
  router,
  ...App,
}).$mount('#app');
