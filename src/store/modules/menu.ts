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
  name: 'menu'
})
class DrawerMenu extends VuexModule {
  _isOpened = false;

  @Action
  toggle(): void {
    this.update();
  }

  @Mutation
  update(): void {
    this._isOpened = !this._isOpened;
  }

  get isOpened(): boolean {
    return this._isOpened;
  }
}

export default getModule(DrawerMenu);
