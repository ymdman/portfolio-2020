import { Component, Prop, Vue } from 'vue-property-decorator';
import hero from '../../store/modules/hero';

@Component
export default class TheHero extends Vue {
  io = {} as IntersectionObserver;

  @Prop({ type: String, required: true })
  src!: string;

  @Prop({ type: String, required: true })
  alt!: string;

  @Prop({ type: String, required: true })
  title!: string;

  get updatedSrc(): string {
    return this.src;
  }

  get updatedAlt(): string {
    return this.alt;
  }

  get updatedTitle(): string {
    return this.title;
  }

  mounted(): void {
    this.observe();
  }

  destroyed(): void {
    this.unobserve();
    hero.visible(false);
  }

  observe(): void {
    this.io = new IntersectionObserver(
      entries => {
        const entry = entries[0];
        hero.visible(entry.isIntersecting);
      },
      { rootMargin: '-35px 0px 0px' }
    );
    this.io.observe(this.$el);
  }

  unobserve(): void {
    this.io.unobserve(this.$el);
    this.io.disconnect();
  }
}
