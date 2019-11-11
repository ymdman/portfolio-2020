import Vue from 'vue';
import Vuex from 'vuex';
import layout from './modules/layout';
import drawerMenu from './modules/drawerMenu';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    drawerMenu,
    layout
  }
});
