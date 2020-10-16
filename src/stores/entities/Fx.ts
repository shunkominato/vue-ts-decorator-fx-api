export interface FxRates {
  JPY: string;
  GBP: string;
  USD: string;
}

export interface FxAxiosResponse {
  status: number;
  data: {
    rates: {
      JPY: string;
      GBP: string;
      USD: string;
    };
  };
}
