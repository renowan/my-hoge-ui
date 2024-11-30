export function omit<T extends Record<string, unknown>, K extends keyof T>(
  object: T,
  keysToOmit: K[] | unknown[],
): Pick<T, Exclude<keyof T, K>> {
  const result = { ...object }

  for (const key of keysToOmit) {
    delete result[key]
  }

  return result
}

export function get(
  object: Record<string, unknown>,
  path: (string | number)[] | string,
  defaultValue?: unknown,
): unknown {
  if (typeof path === 'string') {
    path = path.split('.').map((key) => {
      const numKey = Number(key)
      return isNaN(numKey) ? key : numKey
    })
  }

  let result: unknown = object

  for (const key of path) {
    if (result === undefined || result === null) {
      return defaultValue
    }

    result = result[key]
  }

  return result !== undefined ? result : defaultValue
}
