import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import store from '../index';

interface Profile {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  job: string;
  description: string;
}

@Module({
  dynamic: true,
  store,
  namespaced: true,
  name: 'about'
})
class About extends VuexModule {
  _pointList = [];
  _profile: Profile = {
    image: {
      src: '',
      alt: ''
    },
    name: '',
    job: '',
    description: ''
  };
  _description = '';

  @Action
  fetchData(): void {
    fetch('./api/about.json')
      .then(res => res.json())
      .then(res => {
        this.addPoint(res.pointList);
        this.addProfile(res.profile);
        this.addDescription(res.description);
      })
      .catch(err => {
        console.error(err);
      });
  }

  @Mutation
  addPoint(pointList: []): void {
    this._pointList = pointList;
  }

  @Mutation
  addProfile(profile: Profile): void {
    this._profile = profile;
  }

  @Mutation
  addDescription(description: string): void {
    this._description = description;
  }

  get pointList(): string[] {
    return this._pointList;
  }

  get profile(): {} {
    return this._profile;
  }

  get description(): string {
    return this._description;
  }
}

export default getModule(About);
