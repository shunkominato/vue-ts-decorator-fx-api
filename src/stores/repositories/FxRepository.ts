import { Module, Mutation, VuexModule, Action } from 'vuex-module-decorators';
import { FxRates } from '@/stores/entities/Fx';
import { FxServices } from '@/stores/client/services/FxService';

@Module({
  namespaced: true,
  name: 'Fx',
})
export default class FxRepository extends VuexModule {
  private fxRates: FxRates = {
    JPY: '0',
    GBP: '0',
    USD: '0',
  };

  get getFxRates(): FxRates {
    console.log(this.fxRates);
    return this.fxRates;
  }

  @Action
  async fetchFxRates(): Promise<void> {
    const fxAllRates = await FxServices.dispatch('getFxRates');
    console.log(fxAllRates);
    const Rates = {
      JPY: fxAllRates['jpy'],
      GBP: fxAllRates['gbp'],
      USD: fxAllRates['usd'],
    };
    console.log(Rates);
    this.context.commit('_setFxRates', Rates);
  }

  @Mutation
  private _setFxRates(fxRates: FxRates): void {
    this.fxRates.JPY = fxRates.JPY;
    this.fxRates.GBP = fxRates.GBP;
    this.fxRates.USD = fxRates.USD;
  }
}
