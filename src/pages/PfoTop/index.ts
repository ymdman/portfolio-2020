import { Component, Vue } from 'vue-property-decorator';
import layout from '../../store/modules/layout';

@Component
export default class Top extends Vue {
  get windowHeight(): number {
    return layout.windowHeight;
  }
}
