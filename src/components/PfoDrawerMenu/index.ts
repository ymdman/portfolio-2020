import { Component, Vue } from 'vue-property-decorator';
import drawerMenu from '../../store/modules/drawerMenu';
import PfoIconX from '../PfoIcons/x.vue';

@Component({
  components: {
    PfoIconX
  }
})
export default class PfoDrawerMenu extends Vue {
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
