import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class TheHero extends Vue {
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
}
