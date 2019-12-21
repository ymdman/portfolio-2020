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
    career.fetchList();
  }

  get list(): string[] | number[] {
    return career.list;
  }
}
