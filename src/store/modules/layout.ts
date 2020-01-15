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
  name: 'layout'
})
class Layout extends VuexModule {
  type = window.innerWidth > 640 ? 'desktop' : 'mobile';
  width = window.innerWidth;
  height = window.innerHeight;

  @Action
  updateSize(width: number, height: number): void {
    this.layout(width, height);
  }

  @Mutation
  layout(width: number, height: number): void {
    this.width = width;
    this.height = height;

    if (this.width > 640) {
      this.type = 'desktop';
    } else {
      this.type = 'mobile';
    }
  }

  get isDesktop(): boolean {
    return this.type === 'desktop';
  }

  get isMobile(): boolean {
    return this.type === 'mobile';
  }

  get windowWidth(): number {
    return this.width;
  }

  get windowHeight(): number {
    return this.height;
  }
}

export default getModule(Layout);
