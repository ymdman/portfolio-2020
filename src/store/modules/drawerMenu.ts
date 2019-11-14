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
  name: 'drawerMenu'
})
class DrawerMenu extends VuexModule {
  isOpen = false;

  @Action
  toggle(): void {
    this.context.commit('drawerMenu');
  }

  @Mutation
  drawerMenu(): void {
    this.isOpen = !this.isOpen;
  }

  get isOpened(): boolean {
    return this.isOpen;
  }
}

export default getModule(DrawerMenu);
