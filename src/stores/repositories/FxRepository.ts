import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators';
import { FxRates } from '@/stores/entities/Fx';
import { FxServices } from '@/stores/client/services/FxService';

@Module({
  namespaced: true,
  name: 'Fx',
})
export default class FxRepository extends VuexModule {
  private fxRates: FxRates;

  get getFxRates(): FxRates {
    return this.fxRates;
  }

  @Action
  async fetchFxRates(): Promise<void> {
    const fxRates = await FxServices.dispatch('getFxRates');
    this.context.commit('_setFxRates', fxRates);
  }

  @Mutation
  private _setFxRates(fxRates: FxRates): void {
    this.fxRates = fxRates;
  }
}
