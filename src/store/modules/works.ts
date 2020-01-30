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
  name: 'works'
})
class Works extends VuexModule {
  _list = [];
  _description = '';

  @Action
  fetchData(): void {
    fetch('/api/works.json')
      .then(res => res.json())
      .then(res => {
        this.updateList(res.list);
        this.updateDescription(res.description);
      })
      .catch(err => {
        console.error(err);
      });
  }

  @Mutation
  updateList(list: []): void {
    this._list = list;
  }

  @Mutation
  updateDescription(description: string): void {
    this._description = description;
  }

  get list(): string[] | number[] {
    return this._list;
  }

  get description(): string {
    return this._description;
  }
}

export default getModule(Works);
