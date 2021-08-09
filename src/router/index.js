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
  },
  {
    name: 'OrderTrackingPage',
    path: '/order/:orderId',
    components: {
      OrderTracking,
    },
  },
  {
    name: 'NotFound',
    path: '/:catchAll(.*)',
    component: AppError,
    props: () => ({ type: 404 }),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
