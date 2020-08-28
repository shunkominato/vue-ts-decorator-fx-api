interface State {
    BTCUSD: string
    BTCGBP: string
    BTCEUR: string
}

interface AxiosResponse {
    status: number
    data: {
        bpi: {
            USD: {
                rate: {
                    BTCUSD: string
                }
            }
            GBP: {
                rate: {
                    BTCGBP: string
                }
            }
            EUR: {
                rate: {
                    BTCEUR: string
                }
            }
        }
    }
}
