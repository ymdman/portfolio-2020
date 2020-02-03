import { Component, Vue } from 'vue-property-decorator';
import menu from '../../store/modules/menu';
import VIconThreeBars from '../../components/VIcons/threeBars.vue';

@Component({
  components: {
    VIconThreeBars
  }
})
export default class TheHeader extends Vue {
  handleIconThreeBarsClick(): void {
    menu.toggle();
  }
}
