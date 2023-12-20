import { createStore } from 'vuex';

export const store = createStore({
  state() {
    return {
      data: null,
      lastFetchTime: null,
    };
  },
  mutations: {
    cacheData(state, newData) {
      state.data = newData;
      state.lastFetchTime = Date.now();
    },
  },
});