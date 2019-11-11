import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';

@Component({
  methods: {
    ...mapActions('drawerMenu', ['toggleDrawerMenu'])
  }
})
export default class PfoDrawerMenu extends Vue {}
