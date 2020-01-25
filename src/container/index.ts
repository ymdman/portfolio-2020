import { Component, Vue } from 'vue-property-decorator';
import layout from '../store/modules/layout';
import location from '../store/modules/location';
import userAgent from '../store/modules/userAgent';
import { throttle } from '../utils/';
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
  created(): void {
    userAgent.createUserAgent();
  }

  mounted(): void {
    window.addEventListener(
      'resize',
      throttle(this.handleWindowResize, 1000) as EventListener
    );
  }

  destroyed(): void {
    window.removeEventListener(
      'resize',
      throttle(this.handleWindowResize, 1000) as EventListener
    );
  }

  get isTopPage(): boolean {
    return location.isTopPage;
  }

  get isWorkPage(): boolean {
    return location.isWorkPage;
  }

  handleWindowResize(): void {
    const width = window.innerWidth;
    const height = window.innerHeight;
    layout.updateSize(width, height);
  }
}
