export type FormError = {
  path: string
  message: string
}

export type Form<T> = {
  validate(): Promise<T>
}

export type FormEvent = {
  type: 'blur' // | 'change' | 'focus'
  path: string
}
