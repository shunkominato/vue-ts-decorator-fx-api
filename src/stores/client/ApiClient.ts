import axios, { AxiosInstance, AxiosResponse } from 'axios';
import camelcaseKeys from 'camelcase-keys';
import snakecaseKeys from 'snakecase-keys';

export interface SuccessResponse<T> extends AxiosResponse {
  data: {
    body: T;
  };
}

export interface FailResponse<T> extends AxiosResponse {
  response: {
    data: T;
  };
}

export interface FailResponseType {
  code: number;
  exception: string | string[];
  result: number | null;
  status: string | null;
}

class ApiClient {
  client: AxiosInstance;

  constructor() {
    this.client = axios.create({
      baseURL: 'https://api.exchangeratesapi.io',
    });

    // Request : APIとのインターフェースを揃えるために、camelCaseをsnake_caseに変換する
    this.client.interceptors.request.use((request) => {
      if (request?.data) {
        // GET処理などの場合は落ちてしまうので、if文を通す
        request.data = snakecaseKeys(request.data, { deep: true });
      }
      return request;
    });

    // Response : APIとのインターフェースを揃えるために、取得した値をsnake_caseからcamelCaseを変換する
    this.client.interceptors.response.use((response) => {
      response.data = camelcaseKeys(response.data, { deep: true });
      return response;
    });
  }
}
