import { Component, Vue } from 'vue-property-decorator';
import { mapGetters, mapActions } from 'vuex';

@Component({
  computed: {
    ...mapGetters('layout', ['isDesktop'])
  },
  methods: {
    ...mapActions('layout', ['updateSize'])
  }
})
export default class PfoFooter extends Vue {}
