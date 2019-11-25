import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    score:0,
    nbrBadRes:0,
    nbrNoRes:0
  },
  getters : {
    scoreTotal : state => state.score,
    badResponse : state => state.nbrBadRes,
    noResponse : state => state.nbrNoRes,
  },
  mutations: {
    UPGRADE_SCORE:(state,payload) => {
      state.score = state.score + payload
    },
    UPGRADE_BAD_RES:(state,payload) => {
      state.nbrBadRes = state.nbrBadRes + payload
    },
    UPGRADE_NO_RES:(state,payload) => {
      state.nbrNoRes = state.nbrNoRes + payload
    },
  },
  actions: {
    upgrateScore({commit},payload) {
      commit('UPGRADE_SCORE',payload);
    },
    upgrateNbBadRes({commit},payload) {
      commit('UPGRADE_BAD_RES',payload);
    },
    upgrateNbNoRes({commit},payload) {
      commit('UPGRADE_NO_RES',payload);
    }
  },
  modules: {
  }
})
