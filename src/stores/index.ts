import { Module } from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export const state = (): State => ({
    BTCUSD: '0',
    BTCGBP: '0',
    BTCEUR: '0',
})

export default {
    namespaced: true,
    state,
    actions,
    getters,
    mutations,
} as Module<any, any>
