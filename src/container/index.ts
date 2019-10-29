import { Component, Vue } from 'vue-property-decorator';
import PortfolioFooter from '../components/PortfolioFooter/index.vue';
import PortfolioHeader from '../components/PortfolioHeader/index.vue';

@Component({
  components: {
    PortfolioFooter,
    PortfolioHeader
  }
})

export default class Container extends Vue {}
