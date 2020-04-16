import Vue from 'vue';
import VueRouter from 'vue-router';
import Fitness from '../views/Example01/Fitness.vue';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/fitness',
    name: 'Fitness',
    component: Fitness,
  },
  {
    path: '/example02',
    name: 'Example02',
    component: () => import('../views/Example02/Index.vue'),
  },
  {
    path: '/example03',
    name: 'Example03',
    component: () => import('../views/Example03/Index.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
