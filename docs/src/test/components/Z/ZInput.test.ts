import { mount } from '@vue/test-utils'
import ZInput from '@/components/Z/ZInput.vue'

describe('ZInput numeric with comma', () => {
  const createWrapper = () => {
    return mount(ZInput, {
      props: {
        numeric: true,
        comma: true,
        modelValue: null,
      },
    })
  }

  // 数値入力のテストケース
  const testCases = [
    { input: '123456789', expected: '123,456,789', emitValue: 123456789 },
    { input: '1234', expected: '1,234', emitValue: 1234 },
    { input: '1000', expected: '1,000', emitValue: 1000 },
    { input: '1000.', expected: '1,000', emitValue: 1000 },
    { input: '10.', expected: '10', emitValue: 10 },
    { input: '10.0', expected: '10', emitValue: 10 },
    { input: '-.01', expected: '0.01', emitValue: -0.01 },
    { input: '-', expected: '', emitValue: null },
    { input: '１２３', expected: '123', emitValue: null }, // 全角数、フォーカスを外したあとに変換される
  ]

  testCases.forEach(({ input, expected, emitValue }) => {
    it(`入力値 "${input}" が "${expected}" としてフォーマットされること`, async () => {
      const wrapper = createWrapper()
      const inputElement = wrapper.find('input')

      // フォーカスを当てる
      await inputElement.trigger('focus')
      await nextTick()

      // 値を入力
      await inputElement.setValue(input)

      // emitされた値をチェック
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')[0]).toEqual([emitValue])

      // 親コンポーネントからの値の更新をシミュレート
      await wrapper.setProps({
        modelValue: emitValue,
      })

      // blurイベントの発火
      await inputElement.trigger('blur')
      await nextTick()

      // フォーマット後の値をチェック
      expect(inputElement.element.value).toBe(expected)
    })
  })

  // 特殊な入力値のテスト
  describe('特殊な入力値のテスト', () => {
    it('"-0" を入力すると "-0" となること', async () => {
      const wrapper = createWrapper()
      const inputElement = wrapper.find('input')

      // フォーカスを当てる
      await inputElement.trigger('focus')
      await nextTick()

      // -0 を入力
      await inputElement.setValue('-0')
      await nextTick()

      // 0を入力
      await inputElement.setValue('0')
      console.log('c',wrapper.emitted('update:modelValue')[0])
      // emitされた値をチェック
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')[0]).toEqual([-0])

      // 親コンポーネントからの値の更新をシミュレート
      await wrapper.setProps({
        modelValue: 0,
      })

      // blurイベントの発火
      await inputElement.trigger('blur')
      await nextTick()

      // 最終的な表示値をチェック
      expect(inputElement.element.value).toBe('0')
    })
  })

  // フォーカス/ブラー時の動作確認
  it('フォーカス状態に応じて正しくフォーマットが切り替わること', async () => {
    const wrapper = mount(ZInput, {
      props: {
        numeric: true,
        comma: true,
        modelValue: 1000,
      },
    })

    const input = wrapper.find('input')

    // 初期状態（フォーカスなし）でカンマ付き
    expect(input.element.value).toBe('1,000')

    // フォーカス時にカンマなし
    await input.trigger('focus')
    await nextTick()
    expect(input.element.value).toBe('1000')

    // ブラー時に再びカンマ付き
    await input.trigger('blur')
    await nextTick()
    expect(input.element.value).toBe('1,000')
  })
})
