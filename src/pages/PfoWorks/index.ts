import { Component, Vue } from 'vue-property-decorator';
import works from '../../store/modules/works';
import PfoLazyLoadImg from '../../components/PfoLazyLoadImg/index.vue';

@Component({
  components: {
    PfoLazyLoadImg
  }
})
export default class Works extends Vue {
  created(): void {
    works.fetchData();
  }

  get list(): string[] | number[] {
    return works.list;
  }

  get description(): string {
    return works.description;
  }
}
