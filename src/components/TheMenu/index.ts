import { Component, Vue } from 'vue-property-decorator';
import menu from '../../store/modules/menu';
import VIconX from '../VIcons/VIconX/index.vue';

@Component({
  components: {
    VIconX
  }
})
export default class TheMenu extends Vue {
  get isMenuOpened(): boolean {
    return menu.isOpened;
  }

  handleIconXClick(): void {
    menu.toggle();
  }

  handleOverlayClick(): void {
    menu.toggle();
  }

  handleRouterLinkClick(): void {
    menu.toggle();
  }
}
