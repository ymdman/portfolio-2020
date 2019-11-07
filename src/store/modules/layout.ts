import { Module, ActionTree, MutationTree, GetterTree } from 'vuex';

export interface RootState {
  modules: object;
}

export interface LayoutState {
  type: string;
  layout: {
    width: number;
    height: number;
  };
}

const state: LayoutState = {
  type: window.innerWidth > 640 ? 'desktop' : 'mobile',
  layout: {
    width: window.innerWidth,
    height: window.innerHeight
  }
};

const actions: ActionTree<LayoutState, RootState> = {
  updateSize: (context): void => {
    context.commit('layout');
  }
};

const mutations: MutationTree<LayoutState> = {
  layout: (state): void => {
    if (state.layout.width > 640) {
      state.type = 'desktop';
    } else {
      state.type = 'mobile';
    }
  }
};

const getters: GetterTree<LayoutState, RootState> = {
  isDesktop: (state): boolean => {
    return state.type === 'desktop';
  },

  isMobile: (state): boolean => {
    return state.type === 'mobile';
  }
};

const Layout: Module<LayoutState, RootState> = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};

export default Layout;
