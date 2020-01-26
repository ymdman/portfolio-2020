import { Component, Vue } from 'vue-property-decorator';
import about from '../../store/modules/about';
import TheHero from '../../components/TheHero/index.vue';
import VLazyLoadImg from '../../components/VLazyLoadImg/index.vue';
import VIconGitHub from '../../components/VIcons/github.vue';
import VIconQiita from '../../components/VIcons/qiita.vue';

@Component({
  components: {
    TheHero,
    VLazyLoadImg,
    VIconGitHub,
    VIconQiita
  }
})
export default class Top extends Vue {
  created(): void {
    about.fetchData();
  }

  get description(): string {
    return about.description;
  }

  get pointList(): string[] {
    return about.pointList;
  }

  get profile(): {} {
    return about.profile;
  }
}
