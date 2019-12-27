import { shallowMount, Wrapper } from '@vue/test-utils'
import SimpleButtonBasics from './SimpleButtonBasics.vue'

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
    expect(wrapper.vm.menuOpen).toBe(false)
    wrapper.find('button').trigger('click')

    expect(wrapper.vm.menuOpen).toBe(true)
  })

  it('clickでtoggleMenuが実行される', () => {
    const mockMethod = jest.fn()
    wrapper.setMethods({
      toggleMenu: mockMethod,
    })
    wrapper.find('button').trigger('click')
    expect(mockMethod).toHaveBeenCalled()
  })
})
