import { shallowMount } from '@vue/test-utils'
import Child from './Child.vue'

//props関連
describe('正しくpropsされる', () => {
  it('msgが渡される正しくレンダーされる', () => {
    const thisMsg = 'Ohayo'
    const wrapper: any = shallowMount(Child, {
      propsData: { msg: thisMsg },
    })
    expect(wrapper.props().msg).toEqual(thisMsg)
  })
})

// Emit関連
describe('テキストフォームとv-modelのテスト', () => {
  it('テキストフォームのデータをセットし、v-modelと等しいことを確認', () => {
    const wrapper: any = shallowMount(Child)
    const someText = wrapper.find('input[type="text"]')
    someText.setValue('ohayo')
    expect(wrapper.vm.someText).toBe('ohayo')
  })
  it('emit upしたデータが等しい', () => {
    const wrapper: any = shallowMount(Child)

    // 元のコンポーネントなら
    // this.$emit("event",someValue)
    // このtestコードでは
    // wrapper.vm.$emit("event",someValue)

    wrapper.vm.$emit('input-text', 'ohayo')
    expect(wrapper.emitted()['input-text'][0][0]).toBe('ohayo')

    // [0][0]とあるように、emittedは多次元配列で返す。
    // これは一度目のemitが発火すると、ペイロードは[0][0]で取得でき、
    // 二度目のemitなどがある場合は[1][0]としてペイロードの中身を得られる
  })
})
