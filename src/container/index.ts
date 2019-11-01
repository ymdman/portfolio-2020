import { Component, Vue } from 'vue-property-decorator';
import PfoFooter from '../components/PfoFooter/index.vue';
import PfoHeader from '../components/PfoHeader/index.vue';

@Component({
  components: {
    PfoFooter,
    PfoHeader
  }
})
export default class Container extends Vue {}
