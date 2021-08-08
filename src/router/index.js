import Vue from 'vue';
import VueRouter from 'vue-router';

import OrderTracking from '@/components/OrderTracking/OrderTracking.vue';
import AppError from '@/components/AppError.vue';
import AppHome from '@/components/AppHome.vue';

import textData from '../../data/texts.json';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: AppHome,
  },
  {
    path: '/order/:orderId',
    component: OrderTracking,
    props: () => ({ returnNotice: textData.returnNotice }),
  },
  {
    path: '/:catchAll(.*)',
    component: AppError,
    name: 'NotFound',
    props: () => ({ type: 404 }),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
