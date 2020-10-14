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

  get getFxRatesJPY(): string {
    return this.fxRates.JPY;
  }

  get getFxRatesGBP(): string {
    return this.fxRates.GBP;
  }

  get getFxRatesUSD(): string {
    return this.fxRates.USD;
  }

  @Action
  async fetchFxRates(): Promise<void> {
    const fxAllRates = await FxServices.dispatch('getFxRates');
    const Rates: FxRates = {
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
