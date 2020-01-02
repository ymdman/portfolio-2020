import { Component, Vue } from 'vue-property-decorator';
import skill from '../../store/modules/skill';
import VProgressBar from '../../components/VProgressBar/index.vue';

@Component({
  components: {
    VProgressBar
  }
})
export default class Skill extends Vue {
  created(): void {
    skill.fetchData();
  }

  get description(): string {
    return skill.description;
  }

  get programmingList(): string[] | number[] {
    return skill.programmingList;
  }

  get skillDetailList(): string[] {
    return skill.skillDetailList;
  }

  get toolList(): string[] {
    return skill.toolList;
  }
}
