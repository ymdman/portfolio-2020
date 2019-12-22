import { Component, Vue } from 'vue-property-decorator';
import career from '../../store/modules/career';
import PfoLazyLoadImg from '../../components/PfoLazyLoadImg/index.vue';

@Component({
  components: {
    PfoLazyLoadImg
  }
})
export default class Career extends Vue {
  created(): void {
    career.fetchData();
  }

  get list(): string[] | number[] {
    return career.list;
  }

  get description(): string {
    return career.description;
  }
}
