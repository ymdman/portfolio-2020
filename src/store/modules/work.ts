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
  name: 'work'
})
class Work extends VuexModule {
  @Action
  fetchData(): void {
    const id = store.getters.params.id;

    fetch(`./api/works/${id}.json`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }
}

export default getModule(Work);
