import { convert, detect } from 'encoding-japanese'

export default (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = function () {
      const arr = new Uint8Array(reader.result as ArrayBuffer)
      const encoding = detect(arr)

      if (encoding === 'UTF8') {
        const converted = convert(arr, {
          to: 'UNICODE',
          from: 'UTF8',
          type: 'string',
        })
        resolve(converted)
      } else if (encoding === 'SJIS') {
        const converted = convert(arr, {
          to: 'UNICODE',
          from: 'SJIS',
          type: 'string',
        })
        resolve(converted)
      } else {
        reject(new Error([encoding].join(',')))
      }
    }
  })
}
