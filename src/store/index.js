import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    newu: [],
    page: 1
  },

  mutations: {
    submit(state, { payload }) {
      state.newu.push(payload);
    },
  },

  actions: {
    submit({ commit }, payload) {
      commit("submit", { payload });
    },
  },

  getters: {
    newu: state => state.newu
  }
});