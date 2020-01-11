import { Component, Vue } from 'vue-property-decorator';
import work from '../../store/modules/work';
import VLazyLoadImg from '../../components/VLazyLoadImg/index.vue';

@Component({
  components: {
    VLazyLoadImg
  }
})
export default class Works extends Vue {
  created(): void {
    work.fetchData();
  }
}
