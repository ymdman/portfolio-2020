import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import store from '../index';

interface Detail {
  title: string;
  description: string;
  site: {
    name: string;
    img: [
      {
        src: string;
        alt: string;
      },
      {
        src: string;
        alt: string;
      }
    ];
  };
  charge: string;
  experience: string;
  other: string;
}

@Module({
  dynamic: true,
  store,
  namespaced: true,
  name: 'work'
})
class Work extends VuexModule {
  _detail: Detail = {
    title: '',
    description: '',
    site: {
      name: '',
      img: [
        {
          src: '',
          alt: ''
        },
        {
          src: '',
          alt: ''
        }
      ]
    },
    charge: '',
    experience: '',
    other: ''
  };

  @Action
  fetchData(): void {
    const id = store.getters['location/params'].id;

    fetch(`./api/works/${id}.json`)
      .then(res => res.json())
      .then(res => {
        this.addDetail(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  @Mutation
  addDetail(detail: Detail): void {
    this._detail = detail;
  }

  get detail(): {} {
    return this._detail;
  }
}

export default getModule(Work);
