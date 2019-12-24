import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import { Route } from 'vue-router';
import store from '../index';

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

    const titleElm = document.querySelector('title');
    const descriptionElm = document.querySelector('meta[name="description"]');
    let title = '';
    let description = '';
    switch (to.name) {
      case 'top':
        description = 'toptoptoptoptoptoptoptoptoptoptoptoptoptoptoptoptop';
        break;
      case 'skill':
        title = 'Skill | ';
        description = 'skillskillskillskillskillskillskillskillskillskill';
        break;
      case 'works':
        title = 'Works | ';
        description = 'worksworksworksworksworksworksworksworksworksworks';
        break;
      default:
        break;
    }

    if (titleElm !== null) {
      titleElm.innerHTML = `${title}Kazuhiro Yamada Portfolio`;
    }

    if (descriptionElm !== null) {
      descriptionElm.setAttribute('content', description);
    }
  }

  get name(): string {
    return this.route.name;
  }

  get path(): string {
    return this.route.path;
  }

  get params(): object {
    return this.route.params;
  }

  get query(): object {
    return this.route.query;
  }

  get isTop(): boolean {
    const path = this.route.path;
    return path === '/';
  }

  get isSkill(): boolean {
    const path = this.route.path;
    return path === '/skill';
  }

  get isWorks(): boolean {
    const path = this.route.path;
    return path === '/works';
  }
}

export default getModule(Location);
