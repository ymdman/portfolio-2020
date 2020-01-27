import { Component, Vue } from 'vue-property-decorator';
import work from '../../store/modules/work';
import TheHero from '../../components/TheHero/index.vue';
import VLazyLoadImg from '../../components/VLazyLoadImg/index.vue';

Component.registerHooks(['beforeRouteEnter']);
@Component({
  components: {
    TheHero,
    VLazyLoadImg
  }
})
export default class Work extends Vue {
  created(): void {
    work.fetchData();
  }

  get work(): {} {
    return work.detail;
  }
}
