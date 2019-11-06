import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);
const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const router = new VueRouter({
  mode: 'history',
  routes : [
    { path: '/login', name: 'login', component: require('@/pages/login.vue').default },
    { path: '/register', name: 'register', component: require('@/pages/register.vue').default },
    { path: '/', name: 'home', component: require('@/pages/home.vue').default },
    { path: '/create', name: 'create', component: require('@/pages/addEmployee.vue').default },
    { path: '/edit/:id', name: 'edit', component: require('@/pages/editEmployee.vue').default },
  ]
});

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/') {
    if (!token) {
      next('/login');
    }
  }
  if (to.fullPath === '/login') {
    if (token) {
      next('/');
    }
  }
  next();
});
export default router;
