import { Component, Vue } from 'vue-property-decorator';
import works from '../../store/modules/works';
import VLazyLoadImg from '../../components/VLazyLoadImg/index.vue';

@Component({
  components: {
    VLazyLoadImg
  }
})
export default class Works extends Vue {
  get list(): string[] | number[] {
    return works.list;
  }

  get description(): string {
    return works.description;
  }

  created(): void {
    works.fetchData();
  }
}
