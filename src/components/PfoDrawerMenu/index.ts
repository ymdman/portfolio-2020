import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';

@Component({
  computed: {
    ...mapGetters('drawerMenu', ['isOpened'])
  },
  methods: {
    ...mapActions('drawerMenu', ['toggleDrawerMenu'])
  }
})
export default class PfoDrawerMenu extends Vue {}
