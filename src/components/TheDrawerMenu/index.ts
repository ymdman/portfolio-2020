import { Component, Vue } from 'vue-property-decorator';
import drawerMenu from '../../store/modules/drawerMenu';
import VIconX from '../VIcons/x.vue';

@Component({
  components: {
    VIconX
  }
})
export default class TheDrawerMenu extends Vue {
  get isDrawerMenuOpened(): boolean {
    return drawerMenu.isOpened;
  }

  handleIconXClick(): void {
    drawerMenu.toggle();
  }

  handleOverlayClick(): void {
    drawerMenu.toggle();
  }

  handleRouterLinkClick(): void {
    drawerMenu.toggle();
  }
}
