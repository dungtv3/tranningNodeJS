import Vue from 'vue';
import App from './components/App.vue';
import router from './router'
import setHeaderToken from '@/setHeaderToken.js'
Vue.config.productionTip = false
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
setHeaderToken(token);
new Vue({
  ...App,
  router,
}).$mount('#app');
