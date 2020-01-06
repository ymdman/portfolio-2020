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

  @Action
  fetchData(): void {
    fetch('./api/skill.json')
      .then(res => res.json())
      .then(res => {
        this.addProgramming(res.programming);
        this.addTool(res.tool);
        this.addDescription(res.description);
      })
      .catch(err => {
        console.error(err);
      });
  }

  @Mutation
  addProgramming(programming: {}): void {
    this._programming = programming;
  }

  @Mutation
  addTool(tool: {}): void {
    this._tool = tool;
  }

  @Mutation
  addDescription(description: string): void {
    this._description = description;
  }

  get programming(): {} {
    return this._programming;
  }

  get tool(): {} {
    return this._tool;
  }

  get description(): string {
    return this._description;
  }
}

export default getModule(Skill);
