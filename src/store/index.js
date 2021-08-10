import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/API';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoading: false,
    error: null,
    order: null,
    texts: null,
  },
  mutations: {
    SET_ORDER(state, order) {
      state.order = order;
    },
    SET_TEXTS(state, texts) {
      state.texts = texts;
    },
    SET_ERROR(state, error) {
      state.error = error;
    },
    SET_ISLOADING(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    /* eslint-disable */
    fetchOrder({ commit }, orderId) {
      commit('SET_ERROR', null);

      /*
      * if orderId is not composed only of number,
      * set error and do not call the API
      */
      if (!orderId.match(/^\d+$/)) {
        return commit('SET_ERROR', 404);
      }

      commit('SET_ISLOADING', true);

      api.get(`/order/${orderId}`)
        .then((response) => commit('SET_ORDER', response.data))
        .catch(({ response }) => commit('SET_ERROR', response?.status || 500))
        .finally(() => commit('SET_ISLOADING', false));
    },
    resetOrder({ commit }) {
      commit('SET_ORDER', null);
    },
    fetchTexts({ commit }) {
      api.get(`/texts`)
        .then((response) => commit('SET_TEXTS', response.data))
        .catch(({ response }) => console.log(response?.status || 500))
        .finally(() => commit('SET_ISLOADING', false));
    },
  },
});
