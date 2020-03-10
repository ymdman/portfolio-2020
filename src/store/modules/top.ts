import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import store from '../index';

interface Hero {
  src: string;
  alt: string;
  title: string;
  subTitle: string;
}

interface Profile {
  image: {
    src: string;
    alt: string;
  };
  name: string;
  job: string;
  summary: string;
}

@Module({
  dynamic: true,
  store,
  namespaced: true,
  name: 'about'
})
class About extends VuexModule {
  _hero = {
    src: '',
    alt: '',
    title: '',
    subTitle: ''
  };
  _pointList = [];
  _profile: Profile = {
    image: {
      src: '',
      alt: ''
    },
    name: '',
    job: '',
    summary: ''
  };
  _description = '';

  get hero(): {} {
    return this._hero;
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

  @Action
  fetchData(): void {
    fetch('/api/top.json')
      .then(res => res.json())
      .then(res => {
        this.updateHero(res.hero);
        this.updatePoint(res.pointList);
        this.updateProfile(res.profile);
        this.updateDescription(res.description);
      })
      .catch(err => {
        console.error(err);
      });
  }

  @Mutation
  updateHero(hero: Hero): void {
    this._hero = hero;
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
