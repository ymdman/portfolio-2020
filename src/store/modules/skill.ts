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
  _programmingList = [];
  _skillDetailList = [];
  _toolList = [];
  _description = '';

  @Action
  fetchData(): void {
    fetch('./api/skill.json')
      .then(res => res.json())
      .then(res => {
        this.addProgramming(res.programmingList);
        this.addSkillDetail(res.skillDetailList);
        this.addTool(res.toolList);
        this.addDescription(res.description);
      })
      .catch(err => {
        console.error(err);
      });
  }

  @Mutation
  addProgramming(programmingList: []): void {
    this._programmingList = programmingList;
  }

  @Mutation
  addSkillDetail(skillDetailList: []): void {
    this._skillDetailList = skillDetailList;
  }

  @Mutation
  addTool(toolList: []): void {
    this._toolList = toolList;
  }

  @Mutation
  addDescription(description: string): void {
    this._description = description;
  }

  get programmingList(): string[] | number[] {
    return this._programmingList;
  }

  get skillDetailList(): string[] {
    return this._skillDetailList;
  }

  get toolList(): string[] {
    return this._toolList;
  }

  get description(): string {
    return this._description;
  }
}

export default getModule(Skill);
