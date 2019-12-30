import { Component, Vue } from 'vue-property-decorator';
import layout from '../store/modules/layout';
import location from '../store/modules/location';
import TheDrawerMenu from '../components/TheDrawerMenu/index.vue';
import TheFooter from '../components/TheFooter/index.vue';
import TheHeader from '../components/TheHeader/index.vue';

@Component({
  components: {
    TheDrawerMenu,
    TheFooter,
    TheHeader
  }
})
export default class Container extends Vue {
  get isDesktop(): boolean {
    return layout.isDesktop;
  }

  get isTopPage(): boolean {
    return location.isTopPage;
  }
}
