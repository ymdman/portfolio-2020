import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import { Route } from 'vue-router';
import store from '../index';

interface Params {
  id?: string;
}

@Module({
  dynamic: true,
  store,
  namespaced: true,
  name: 'location'
})
class Location extends VuexModule {
  route = {
    name: '',
    path: '/',
    params: {},
    query: {},
    hash: ''
  };

  get name(): string {
    return this.route.name;
  }

  get path(): string {
    return this.route.path;
  }

  get params(): Params {
    return this.route.params;
  }

  get query(): {} {
    return this.route.query;
  }

  get isTopPage(): boolean {
    const path = this.route.path;
    return path === '/';
  }

  get isSkillPage(): boolean {
    const path = this.route.path;
    return path === '/skill';
  }

  get isWorksPage(): boolean {
    const path = this.route.path;
    return path === '/works';
  }

  get isWorkPage(): boolean {
    const name = this.route.name;
    return name === 'work';
  }

  @Action
  update(to: Route): void {
    this.all(to);
  }

  @Mutation
  all(to: Route): void {
    this.route.name = to.name as string;
    this.route.path = to.path;
    this.route.params = to.params;
    this.route.query = to.query;
    this.route.hash = to.hash;
  }
}

export default getModule(Location);
