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

  get isChrome(): boolean {
    return this.userAgent.name === 'Chrome';
  }

  get isSafari(): boolean {
    return this.userAgent.name === 'Safari';
  }

  get isFirefox(): boolean {
    return this.userAgent.name === 'Firefox';
  }

  @Action
  createUserAgent(): void {
    const userAgent = Bowser.getParser(window.navigator.userAgent).getBrowser();
    this.updateUserAgent(userAgent);
  }

  @Mutation
  updateUserAgent(userAgent: {}): void {
    this.userAgent = userAgent;
  }
}

export default getModule(UserAgent);
