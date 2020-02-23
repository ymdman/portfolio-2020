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
  name: 'hero'
})
class Hero extends VuexModule {
  _isVisible = false;

  get isVisible(): boolean {
    return this._isVisible;
  }

  @Action
  visible(value: boolean): void {
    this.update(value);
  }

  @Mutation
  update(value: boolean): void {
    this._isVisible = value;
  }
}

export default getModule(Hero);
