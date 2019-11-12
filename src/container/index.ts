import { Component, Vue } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import PfoDrawerMenu from '../components/PfoDrawerMenu/index.vue';
import PfoFooter from '../components/PfoFooter/index.vue';
import PfoHeader from '../components/PfoHeader/index.vue';

@Component({
  components: {
    PfoDrawerMenu,
    PfoFooter,
    PfoHeader
  },
  methods: {
    ...mapActions('drawerMenu', ['toggleDrawerMenu'])
  }
})
export default class Container extends Vue {}
