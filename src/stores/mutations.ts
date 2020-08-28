// mutations
export default {
    /**
     * @param state
     * @param payload
     */
    initBTC(state: State, payload: string): void {
        state.BTCUSD = payload
        state.BTCGBP = payload
        state.BTCEUR = payload
    },
    setBTCUSD(state: State, payload: string): void {
        state.BTCUSD = payload
    },
    setBTCGBP(state: State, payload: string): void {
        state.BTCGBP = payload
    },
    setBTCEUR(state: State, payload: string): void {
        state.BTCEUR = payload
    },
}
