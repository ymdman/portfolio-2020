import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import store from '../index';

@Module({
  dynamic: true,
  store,
  namespaced: true,
  name: 'skill'
})
class Skill extends VuexModule {
  _programming = {};
  _tool = {};
  _description = '';

  get programming(): {} {
    return this._programming;
  }

  get tool(): {} {
    return this._tool;
  }

  get description(): string {
    return this._description;
  }

  @Action
  fetchData(): void {
    fetch('/api/skill.json')
      .then(res => res.json())
      .then(res => {
        this.updateProgramming(res.programming);
        this.updateTool(res.tool);
        this.updateDescription(res.description);
      })
      .catch(err => {
        console.error(err);
      });
  }

  @Mutation
  updateProgramming(programming: {}): void {
    this._programming = programming;
  }

  @Mutation
  updateTool(tool: {}): void {
    this._tool = tool;
  }

  @Mutation
  updateDescription(description: string): void {
    this._description = description;
  }
}

export default getModule(Skill);
