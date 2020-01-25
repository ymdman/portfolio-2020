import { Component, Prop, Vue } from 'vue-property-decorator';
import userAgent from '../../store/modules/userAgent';

@Component
export default class VLazyLoadImg extends Vue {
  isLoadingSupported = 'loading' in HTMLImageElement.prototype;
  io = {} as IntersectionObserver;

  @Prop({ type: String, required: true })
  src!: string;

  @Prop({ type: String, required: true })
  alt!: string;

  @Prop({ type: Number })
  width!: number;

  @Prop({ type: Number })
  height!: number;

  mounted(): void {
    this.observe();
  }

  beforeUpdate(): void {
    if (this.isFirefox) {
      this.observe();
    }
  }

  destroyed(): void {
    if (!this.isLoadingSupported) {
      this.unobserve();
    }
  }

  get isFirefox(): boolean {
    return userAgent.isFirefox;
  }

  observe(): void {
    this.io = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        return;
      }
      this.unobserve();
      this.$el.setAttribute('src', this.src);
    });
    this.io.observe(this.$el);
  }

  unobserve(): void {
    this.io.unobserve(this.$el);
    this.io.disconnect();
  }
}
