import asyncRequest from './services/asyncRequest';

// actions
export default {
  getBTC: ({ commit }: { commit: any }): Promise<object> => {
    return new Promise<object>((resolve: () => void, reject: () => void) => {
      const url = 'https://api.exchangeratesapi.io/latest';
      asyncRequest(url)
        .then((res: AxiosResponse): void => {
          console.log('----------Axios Success----------');
          // mutations call
          // stores/mutations.tsを呼ぶ
          console.log(res.data.rates.AUD);
          commit('setBTCUSD', res.data.bpi.USD.rate);
          commit('setBTCGBP', res.data.bpi.GBP.rate);
          commit('setBTCEUR', res.data.bpi.EUR.rate);
          resolve();
        })
        .catch((err: any): void => {
          console.log('----------Axios Err----------');
          console.log(err);
          reject();
        });
    });
  },
};
