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

  get pointList(): string[] {
    return this._pointList;
  }

  get profile(): {} {
    return this._profile;
  }

  get description(): string {
    return this._description;
  }

  @Action
  fetchData(): void {
    fetch('/api/about.json')
      .then(res => res.json())
      .then(res => {
        this.updatePoint(res.pointList);
        this.updateProfile(res.profile);
        this.updateDescription(res.description);
      })
      .catch(err => {
        console.error(err);
      });
  }

  @Mutation
  updatePoint(pointList: []): void {
    this._pointList = pointList;
  }

  @Mutation
  updateProfile(profile: Profile): void {
    this._profile = profile;
  }

  @Mutation
  updateDescription(description: string): void {
    this._description = description;
  }
}

export default getModule(About);
