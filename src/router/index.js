import Vue from 'vue';
import VueRouter from 'vue-router';

import OrderTracking from '@/components/OrderTracking/OrderTracking.vue';
import AppError from '@/components/AppError.vue';
import AppHome from '@/components/AppHome.vue';

Vue.use(VueRouter);

const routes = [
  {
    name: 'HomePage',
    path: '/',
    component: AppHome,
    meta: {
      title: 'Accueil - Test Tediber',
    },
  },
  {
    name: 'OrderTrackingPage',
    path: '/order/:orderId',
    component: OrderTracking,
    meta: {
      title: 'Suivi de commande - Test Tediber',
    },
  },
  {
    name: 'NotFound',
    path: '/:catchAll(.*)',
    component: AppError,
    props: () => ({ errorTypeProp: 404 }),
    meta: {
      title: 'Erreur - Test Tediber',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

export default router;
