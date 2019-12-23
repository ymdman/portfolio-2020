import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class PfoLazyLoadImg extends Vue {
  @Prop({ type: String, required: true })
  src!: string;

  @Prop({ type: Number })
  width!: number;

  @Prop({ type: Number })
  height!: number;

  isLoadingSupported = 'loading' in HTMLImageElement.prototype;
  io = {} as IntersectionObserver;

  mounted(): void {
    if (!this.isLoadingSupported) {
      this.observe();
    }
  }

  destroyed(): void {
    if (!this.isLoadingSupported) {
      this.unobserve();
    }
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
