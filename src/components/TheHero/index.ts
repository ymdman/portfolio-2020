import { Component, Prop, Vue } from 'vue-property-decorator';
import VLazyLoadImg from '../../components/VLazyLoadImg/index.vue';

@Component({
  components: {
    VLazyLoadImg
  }
})
export default class TheHero extends Vue {
  visible = false;

  @Prop({ type: String, required: true })
  src!: string;

  @Prop({ type: String, required: true })
  alt!: string;

  @Prop({ type: String, required: true })
  title!: string;
}
