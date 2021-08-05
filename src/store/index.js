import Vue from 'vue';
import Vuex from 'vuex';
import orderData from '../../data/orders.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data() {
      return {
        order: orderData,
      };
    },
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
