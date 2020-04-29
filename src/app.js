import Vue from 'vue';
import VueRouter from 'vue-router';
import Hello from './components/Hello.vue';
import NavRouter from './components/NavRouter.vue';
import _ from './css/main.css';


Vue.use(VueRouter);

const User = {
  template: '<div>User {{ $route.params.id }}</div>'
};

const NotFound = {
  template: '<div><h1>Not Found</h1></div>'
};



const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User },
    { path: '/hello', component: Hello},
    { path: '*', component: NotFound},
  ]
});
router.replace('/hello');

new Vue({
  router,
  components: {
    NavRouter
  }
}).$mount('#app');
