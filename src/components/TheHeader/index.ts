import { Component, Vue } from 'vue-property-decorator';
import drawerMenu from '../../store/modules/drawerMenu';
import VIconThreeBars from '../../components/VIcons/threeBars.vue';

@Component({
  components: {
    VIconThreeBars
  }
})
export default class TheHeader extends Vue {
  text = 'Header component';

  get isDrawerMenuOpened(): boolean {
    return drawerMenu.isOpened;
  }

  handleIconThreeBarsClick(): void {
    drawerMenu.toggle();
  }
}
