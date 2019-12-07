import { Component, Vue } from 'vue-property-decorator';
import drawerMenu from '../../store/modules/drawerMenu';
import PfoIconThreeBars from '../../components/PfoIcons/threeBars.vue';

@Component({
  components: {
    PfoIconThreeBars
  }
})
export default class PfoHeader extends Vue {
  text = 'Header component';

  get isDrawerMenuOpened(): boolean {
    return drawerMenu.isOpened;
  }

  handleIconThreeBarsClick(): void {
    drawerMenu.toggle();
  }
}
