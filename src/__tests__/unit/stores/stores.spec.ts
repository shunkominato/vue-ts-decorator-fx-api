import { createLocalVue } from '@vue/test-utils'
import Actions from '../../../stores/actions'
import Store from '../../../store'
import axios from 'axios'
import sinon from 'sinon'
import flushPromises from 'flush-promises'
import asyncRequest from '../../../stores/services/asyncRequest'
import Vuex from 'vuex'

const localVue = createLocalVue()
localVue.use(Vuex)

describe('srores', () => {
    const resolved = (res = {}): Promise<object> => Promise.resolve(res)
    const commit = jest.fn()

    const callback = sinon.stub(axios, 'get')
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

    const res: AxiosResponse = {
        status: 200,
        data: {
            bpi: {
                USD: {
                    rate: {
                        BTCUSD: '1000000',
                    },
                },
                GBP: {
                    rate: {
                        BTCGBP: '900000',
                    },
                },
                EUR: {
                    rate: {
                        BTCEUR: '800000',
                    },
                },
            },
        },
    }

    callback.returns(resolved(res))

    test('Actions 正しいURLでAPI実行されること', async () => {
        // Actions 呼び出し
        await Actions.getBTC({ commit })
        // APIを実行し、サーバー側はMockのため、flushPromisesでcallbackで設定した戻り値(resolved)を返す
        await flushPromises()

        const testEqualArg = 'https://api.coindesk.com/v1/bpi/currentprice.json'
        // 正しいURLでAPIを実行していること
        expect(callback.getCall(0).args[0]).toEqual(testEqualArg)
    })

    test('Mutation 正しくstateを設定できること', async () => {
        await Actions.getBTC({ commit })
        await flushPromises()

        // Mutationを呼び出し
        Store.commit('stores/setBTCUSD', '100')
        Store.commit('stores/setBTCGBP', '90')
        Store.commit('stores/setBTCEUR', '80')

        // 上記で設定した値が各stateに設定されていること
        expect(Store.getters['stores/getBTCUSD']).toEqual('100')
        expect(Store.getters['stores/getBTCGBP']).toEqual('90')
        expect(Store.getters['stores/getBTCEUR']).toEqual('80')
    })
})
