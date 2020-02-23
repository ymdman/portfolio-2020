import { Component, Watch, Vue } from 'vue-property-decorator';
import work from '../../store/modules/work';
import location from '../../store/modules/location';
import TheHero from '../../components/TheHero/index.vue';
import VButton from '../../components/VButton/index.vue';
import VLazyLoadImg from '../../components/VLazyLoadImg/index.vue';

@Component({
  components: {
    TheHero,
    VButton,
    VLazyLoadImg
  }
})
export default class Work extends Vue {
  get work(): { title: string } {
    return work.detail;
  }

  get paramsId(): string | undefined {
    return location.params.id;
  }

  @Watch('$route')
  updateRoute(to: { params: { id: string } }): void {
    work.fetchData(to.params.id);
  }

  created(): void {
    work.fetchData(this.paramsId);
  }

  beforeUpdate(): void {
    this.updateTitle();
  }

  destroyed(): void {
    work.clearData();
  }

  updateTitle(): void {
    document.title = `${this.work.title} | Work | Kazuhiro Yamada Portfolio`;
  }
}
