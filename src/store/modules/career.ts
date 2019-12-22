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
  _description = '';

  @Action
  fetchData(): void {
    fetch('./api/career.json')
      .then(res => res.json())
      .then(res => {
        this.addList(res.list);
        this.addDescription(res.description);
      })
      .catch(err => {
        console.error(err);
      });
  }

  @Mutation
  addList(list: []): void {
    this._list = list;
  }

  @Mutation
  addDescription(description: string): void {
    this._description = description;
  }

  get list(): string[] | number[] {
    return this._list;
  }

  get description(): string {
    return this._description;
  }
}

export default getModule(Career);
