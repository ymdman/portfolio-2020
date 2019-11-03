import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    type: window.innerWidth > 640 ? 'desktop' : 'mobile',

    layout: {
      width: window.innerWidth,
      height: window.innerHeight
    }
  },

  actions: {
    updateSize: (context): void => {
      context.commit('layout');
    }
  },

  mutations: {
    updateSize: (state): void => {
      if (state.layout.width > 640) {
        state.type = 'desktop';
      } else {
        state.type = 'mobile';
      }
    }
  },

  getters: {
    isDesktop: (state): boolean => {
      return state.type === 'desktop';
    },

    isMobile: (state): boolean => {
      return state.type === 'mobile';
    }
  }
});
