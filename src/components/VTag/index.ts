import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class VTag extends Vue {
  @Prop({ type: String, required: true })
  label!: string;
}
