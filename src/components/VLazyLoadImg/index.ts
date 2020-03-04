import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

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

  @Watch('src')
  updateSrc(): void {
    if (!this.isLoadingSupported) {
      this.observe();
    }
  }

  mounted(): void {
    const isSrc = !!this.src;
    if (!this.isLoadingSupported && isSrc) {
      this.observe();
    }
  }

  destroyed(): void {
    if (!this.isLoadingSupported) {
      this.unobserve();
    }
  }

  observe(): void {
    this.io = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        if (!entry.isIntersecting) {
          return;
        }
        this.unobserve();
        this.$el.setAttribute('src', this.src);
      },
      { rootMargin: '300px 0px' }
    );
    this.io.observe(this.$el);
  }

  unobserve(): void {
    this.io.unobserve(this.$el);
    this.io.disconnect();
  }
}
