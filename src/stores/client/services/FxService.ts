// import { apiClient, SuccessResponse, FailResponse, FailResponseType } from '@/stores/client/ApiClient';
import { apiClient } from '@/stores/client/ApiClient';
export type type = 'getFxRates';

export class FxServices {
  // postなども想定
  static async dispatch(type: type, data?: any, apikey?: string): Promise<any> {
    // postする際にdataとapikeyは必要になる。lintでerrorにしないため、ダミーでdataとapikeyを使用しておく
    console.log(data);
    console.log(apikey);
    switch (type) {
      case 'getFxRates': {
        return await this.getFxRates();
      }
    }
  }

  private static async getFxRates(): Promise<any> {
    try {
      const url = '/latest';
      const result = await apiClient.get(url);
      return result.data.rates;
    } catch (e) {
      // logをここで出力し、componentまでthrowする
      return this.handleError(e);
    }
  }

  private static handleError(e: any): any {
    console.log(e);
    // エラーログを残すためのAPI実行
    // const { exception, code } = e.response.data;
    // const url = hogehoge
    // const data = {
    //   code,
    //   exception,
    //   level: 'error'
    //   src: 'FxService.ts'
    // }
    // await apiClient.post(url, data, apikey);
    throw new Error();
  }
}
