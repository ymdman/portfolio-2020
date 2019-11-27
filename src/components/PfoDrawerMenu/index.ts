import { Component, Vue } from 'vue-property-decorator';
import drawerMenu from '../../store/modules/drawerMenu';

@Component
export default class PfoDrawerMenu extends Vue {
  get isDrawerMenuOpened(): boolean {
    return drawerMenu.isOpened;
  }

  handleOverlayClick(): void {
    drawerMenu.toggle();
  }

  handleRouterLinkClick(): void {
    console.log('hoge');

    drawerMenu.toggle();
  }
}
