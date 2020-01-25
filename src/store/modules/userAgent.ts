import {
  VuexModule,
  Module,
  Action,
  Mutation,
  getModule
} from 'vuex-module-decorators';
import store from '../index';
import Bowser from 'bowser';

@Module({
  dynamic: true,
  store,
  namespaced: true,
  name: 'userAgent'
})
class UserAgent extends VuexModule {
  userAgent: Bowser.Parser.Details = {};

  @Action
  createUserAgent(): void {
    const userAgent = Bowser.getParser(window.navigator.userAgent).getBrowser();
    this.addUserAgent(userAgent);
  }

  @Mutation
  addUserAgent(userAgent: {}): void {
    this.userAgent = userAgent;
  }

  get isChrome(): boolean {
    return this.userAgent.name === 'Chrome';
  }

  get isSafari(): boolean {
    return this.userAgent.name === 'Safari';
  }

  get isFirefox(): boolean {
    return this.userAgent.name === 'Firefox';
  }
}

export default getModule(UserAgent);
