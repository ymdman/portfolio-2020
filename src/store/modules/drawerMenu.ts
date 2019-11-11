import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

export interface RootState {
  modules: object;
}

export interface DrawerMenuState {
  isOpened: boolean;
}

const state: DrawerMenuState = {
  isOpened: false
};

const actions: ActionTree<DrawerMenuState, RootState> = {
  toggleDrawerMenu: (context): void => {
    context.commit('drawerMenu');
  }
};

const mutations: MutationTree<DrawerMenuState> = {
  drawerMenu: (state): void => {
    state.isOpened = !state.isOpened;
  }
};

const getters: GetterTree<DrawerMenuState, RootState> = {
  isOpened: (state): boolean => {
    return state.isOpened;
  }
};

const DrawerMenu: Module<DrawerMenuState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};

export default DrawerMenu;
