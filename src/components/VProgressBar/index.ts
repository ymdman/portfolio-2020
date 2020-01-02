import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VProgressBar extends Vue {
  @Prop({ type: Number, required: true })
  glowWidth!: number;

  io = {} as IntersectionObserver;
  style = {
    width: ''
  };

  mounted(): void {
    this.observe();
  }

  destroyed(): void {
    this.unobserve();
  }

  observe(): void {
    this.io = new IntersectionObserver(entries => {
      const entry = entries[0];
      if (!entry.isIntersecting) {
        return;
      }
      this.unobserve();
      this.style.width = `${this.glowWidth}%`;
    });
    this.io.observe(this.$el);
  }

  unobserve(): void {
    this.io.unobserve(this.$el);
    this.io.disconnect();
  }
}
