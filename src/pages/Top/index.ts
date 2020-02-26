import { Component, Vue } from 'vue-property-decorator';
import top from '../../store/modules/top';
import TheHero from '../../components/TheHero/index.vue';
import VLazyLoadImg from '../../components/VLazyLoadImg/index.vue';
import VIconGitHub from '../../components/VIcons/github.vue';
import VIconQiita from '../../components/VIcons/qiita.vue';

@Component({
  components: {
    TheHero,
    VIconGitHub,
    VIconQiita,
    VLazyLoadImg
  }
})
export default class Top extends Vue {
  get hero(): {} {
    return top.hero;
  }

  get description(): string {
    return top.description;
  }

  get pointList(): string[] {
    return top.pointList;
  }

  get profile(): {} {
    return top.profile;
  }

  created(): void {
    top.fetchData();
  }
}
