import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VButton extends Vue {
  @Prop({ type: String, required: true })
  label!: string;
}
