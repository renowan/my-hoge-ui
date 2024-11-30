export function classNames(...classes: unknown[string]) {
  return classes.filter(Boolean).join(' ')
}

export const hexToRgb = (hex: string) => {
  // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i
  hex = hex.replace(shorthandRegex, function (_, r, g, b) {
    return r + r + g + g + b + b
  })

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? `${parseInt(result[1], 16)} ${parseInt(result[2], 16)} ${parseInt(
        result[3],
        16,
      )}`
    : null
}

export const getSlotsChildren = (slots) => {
  let children = slots.default?.()
  if (children.length) {
    children = children
      .flatMap((c) => {
        if (typeof c.type === 'symbol') {
          if (typeof c.children === 'string') {
            // `v-if="false"` or commented node
            // eslint-disable-next-line array-callback-return
            return
          }
          return c.children
        } else if (c.type.name === 'ContentSlot') {
          return c.ctx.slots.default?.()
        }
        return c
      })
      .filter(Boolean)
  }
  return children
}

export const removePrefix = (s: string): string => {
  const index = s.indexOf(' ')
  if (index !== -1) {
    return s.slice(index + 1)
  }
  return s
}

export const stringConvert = (str: string) => {
  // 空文字, マイナス記号の場合はそのまま返す
  if (str === '' || str === '-') {
    return ''
  }

  // 0の場合はそのまま返す
  if (str !== '' && Number(str) === 0) {
    return '0'
  }

  // まず、数字と小数点、先頭にあるマイナス記号以外を取り除きます。
  const filtered = str
    .replace(/[０-９]/g, (s) => {
      return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
    }) // 全角数字を半角数字に変換
    .replace(/(?!^-|\.)(\D)/g, '') // 先頭のマイナス記号を除く数字、小数点以外を取り除く
    .replace(/^-\./g, '0.') // 先頭のマイナス記号の後ろにある小数点を取り除く
    .replace(/^\./g, '') // 先頭の小数点を取り除く
    .replace(/^-$/, '') // 値がマイナス記号のみの場合取り除く
    .replace(/(?<=\.\d*)\./g, '') // 2つ以上の小数点がある場合、2つ目以降を取り除く
    .replace(/\.*$/, '') // 末尾小数点除去
    .replace(/\.([0-9]*?)0+$/, '.$1') // 小数点がある場合、末尾の0除去

  return String(Number(filtered))
}
