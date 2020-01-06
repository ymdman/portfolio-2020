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

  get programming(): {} {
    return skill.programming;
  }

  get tool(): {} {
    return skill.tool;
  }
}
