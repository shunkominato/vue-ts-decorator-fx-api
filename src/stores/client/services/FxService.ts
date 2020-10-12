import { apiClient, SuccessResponse, FailResponse, FailResponseType } from '@/stores/client/ApiClient';
import { Fx, FxAxiosResponse } from '@/stores/entities/Fx';
export type type = 'getFxRates';

export class FxServices {
  static async dispatch(type: type, data?: any, apikey?: string): Promise<any> {
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
      return result.data.body;
    } catch (e) {
      return this.handleError(e);
    }
  }

  private static handleError(e: any): any {
    console.log(e);
    alert('システムエラーが発生しました');
  }
}
