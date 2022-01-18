import Vue from 'vue';
import VueRouter from 'vue-router';
import MainPage from '../views/MainPage.vue';
import HotelPage from '../views/HotelPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage,
  },
  {
    path: '/hotel/:id',
    name: 'HotelPage',
    component: HotelPage,
  },
];

const router = new VueRouter({
  base: '/cuva-test/',
  mode: 'history',
  routes,
});

export default router;
