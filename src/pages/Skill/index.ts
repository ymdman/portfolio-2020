import { Component, Vue } from 'vue-property-decorator';
import skill from '../../store/modules/skill';
import VBarGraph from '../../components/VBarGraph/index.vue';
import VTag from '../../components/VTag/index.vue';

@Component({
  components: {
    VBarGraph,
    VTag
  }
})
export default class Skill extends Vue {
  get description(): string {
    return skill.description;
  }

  get programming(): {} {
    return skill.programming;
  }

  get tool(): {} {
    return skill.tool;
  }

  created(): void {
    skill.fetchData();
  }
}
