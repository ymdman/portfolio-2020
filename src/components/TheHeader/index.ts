import { Component, Vue } from 'vue-property-decorator';
import menu from '../../store/modules/menu';
import hero from '../../store/modules/hero';
import VIconThreeBars from '../../components/VIcons/threeBars.vue';

@Component({
  components: {
    VIconThreeBars
  }
})
export default class TheHeader extends Vue {
  get isHeroVisible(): boolean {
    return hero.isVisible;
  }

  handleIconThreeBarsClick(): void {
    menu.toggle();
  }
}
