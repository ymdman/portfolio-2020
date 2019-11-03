import { Component, Vue } from 'vue-property-decorator';

@Component
export default class PfoFooter extends Vue {
  get isDesktop(): boolean {
    return this.$store.getters.isDesktop;
  }

  handleClick(): void {
    console.log(this.$store);

    this.$store.dispatch('updateSize');
  }
}
