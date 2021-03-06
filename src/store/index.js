import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hotels: [],
  },
  mutations: {
    setHotels(state, hotels) {
      state.hotels = hotels;
    },
  },
  actions: {
    async fetchHotels({ commit }) {
      const hotelsLimit = 20;
      const hotels = await axios.get('https://jsonplaceholder.typicode.com/posts', {
        params: {
          _limit: hotelsLimit,
        },
      });
      commit('setHotels', hotels.data);
      return hotels;
    },
  },
  modules: {
  },
});
