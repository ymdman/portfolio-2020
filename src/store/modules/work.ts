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
        { src: '', alt: '' },
        { src: '', alt: '' }
      ]
    },
    charge: '',
    experience: '',
    other: ''
  };

  @Action
  fetchData(id: string | undefined): void {
    fetch(`/api/works/${id}.json`)
      .then(res => res.json())
      .then(res => {
        this.updateDetail(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  @Action
  clearData(): void {
    const detail: Detail = {
      title: '',
      description: '',
      site: {
        name: '',
        img: [
          { src: '', alt: '' },
          { src: '', alt: '' }
        ]
      },
      charge: '',
      experience: '',
      other: ''
    };
    this.updateDetail(detail);
  }

  @Mutation
  updateDetail(detail: Detail): void {
    this._detail = detail;
  }

  get detail(): Detail {
    return this._detail;
  }
}

export default getModule(Work);
