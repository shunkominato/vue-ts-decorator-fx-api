import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators';
import { Fx } from '@/stores/entities/Fx';

@Module({
  namespaced: true,
  name: 'Fx',
})
export default class FxRepository extends VuexModule {
  @Action
  async fetchFxRates(): Promise<void> {
    const FxRates = await 
  }
}
