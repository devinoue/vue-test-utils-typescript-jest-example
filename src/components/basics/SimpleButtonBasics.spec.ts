import { shallowMount, Wrapper } from '@vue/test-utils'
import SimpleButtonBasics from './SimpleButtonBasics.vue'

// コンポーネントのオブジェクト
let wrapper: Wrapper<any>

describe('ボタン関連総合', () => {
  beforeEach(() => {
    wrapper = shallowMount(SimpleButtonBasics)
  })
  it('要素の存在を確認', () => {
    expect(wrapper.contains('button')).toBe(true)
  })

  it('開閉時の.open内の文字列の確認', () => {
    expect(wrapper.find('.open').text()).toEqual('About...')
  })

  it('ボタンインタラクションの確認', () => {
    // wrapperクラスのisVisibleメソッドを使う
    // v-showやv-ifなどによって見えているかどうか確認できる

    // 見えてない
    expect(wrapper.vm.menuOpen).toBe(false)
    expect(wrapper.find('.open').isVisible()).toBe(false)

    wrapper.find('button').trigger('click')

    // 見えてる
    expect(wrapper.find('.open').isVisible()).toBe(true)
    expect(wrapper.vm.menuOpen).toBe(true)
  })

  it('clickでtoggleMenuが実行される', () => {
    // jest.fn()とsetMethodsメソッドの組み合わせる。
    const mockMethod = jest.fn()
    wrapper.setMethods({
      toggleMenu: mockMethod,
    })
    wrapper.find('button').trigger('click')
    expect(mockMethod).toHaveBeenCalled()
  })
})
