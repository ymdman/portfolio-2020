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
  name: 'career'
})
class Career extends VuexModule {
  _list = [];

  @Action
  fetchList(): void {
    fetch('./api/career.json')
      .then(res => res.json())
      .then(list => this.addList(list))
      .catch(err => {
        console.error(err);
      });
  }

  @Mutation
  addList(list: []): void {
    this._list = list;
  }

  get list(): string[] | number[] {
    return this._list;
  }
}

export default getModule(Career);
