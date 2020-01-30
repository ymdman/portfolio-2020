import { Component, Watch, Vue } from 'vue-property-decorator';
import work from '../../store/modules/work';
import location from '../../store/modules/location';
import TheHero from '../../components/TheHero/index.vue';
import VLazyLoadImg from '../../components/VLazyLoadImg/index.vue';

@Component({
  components: {
    TheHero,
    VLazyLoadImg
  }
})
export default class Work extends Vue {
  created(): void {
    work.fetchData(this.paramsId);
  }

  destroyed(): void {
    work.clearData();
  }

  @Watch('$route')
  updateRoute(to: { params: { id: string } }): void {
    work.fetchData(to.params.id);
  }

  get work(): {} {
    return work.detail;
  }

  get paramsId(): string | undefined {
    return location.params.id;
  }
}
