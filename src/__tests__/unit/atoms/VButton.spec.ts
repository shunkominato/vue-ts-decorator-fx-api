import { shallowMount, Wrapper } from '@vue/test-utils'
import Component from '@atoms/VButton.vue'

describe('VButton.vue', () => {
    //propsを設定
    const btnName = '実行'
    const theme = 'primary'

    let wrapper: Wrapper<Vue>

    beforeEach(() => {
        wrapper = shallowMount(Component, {
            propsData: { btnName, theme },
        })
    })

    afterEach(() => {
        wrapper.destroy
    })
    //テストidからdomを取得する際のutillメソッド
    const sel = (id: string): string => `[data-testid="${id}"]`

    test('propsが受け取れていること', () => {
        expect(wrapper.vm.$props.btnName).toEqual('実行')

        // 親がpropsを更新
        wrapper.setProps({ btnName: 'test' })

        wrapper.vm.$nextTick(() => {
            // 変更したpropsが更新さていること
            expect(wrapper.vm.$props.btnName).toEqual('test')
        })
    })

    test('ボタンクリック時にclickイベントが発火されること', () => {
        const button = wrapper.find(sel('test-btn'))
        button.trigger('click')

        wrapper.vm.$nextTick(() => {
            // clickイベントが発火されること
            expect(wrapper.emitted('click')).toBeTruthy()
        })
    })
})
