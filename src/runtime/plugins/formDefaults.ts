// import type { Component } from 'vue'
import { defineNuxtPlugin } from '#app'

export interface FormDefaultsStore {
  optionalLabel: string
  requiredLabel: string
}

// グローバルストアを作成
const formDefaults: FormDefaultsStore = {
  optionalLabel: 'optional',
  requiredLabel: 'required'
}

export function getFormDefaults() {
  return formDefaults
}

export function setFormDefaults(defaults: Partial<FormDefaultsStore>) {
  Object.assign(formDefaults, defaults)
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      formDefaults,
      setFormDefaults
    }
  }
})