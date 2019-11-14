import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import store from '../index';

@Module({
  dynamic: true,
  store,
  namespaced: true,
  name: 'layout'
})
class Layout extends VuexModule {
  type = window.innerWidth > 640 ? 'desktop' : 'mobile';
  width = window.innerWidth;

  @Action
  updateSize(): void {
    this.context.commit('layout');
  }

  @Mutation
  layout(): void {
    if (this.width > 640) {
      this.type = 'desktop';
    } else {
      this.type = 'mobile';
    }
  }

  get isDesktop(): boolean {
    return this.type === 'desktop';
  }

  get isMobile(): boolean {
    return this.type === 'mobile';
  }
}

export default getModule(Layout);
