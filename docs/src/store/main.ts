import { defineStore } from 'pinia'

export type AppCommonMessage = {
  title: string
  message: string
}

export type AppCommonDialog = {
  title: string
  message: string
  okLabel?: string
  okColor?: string
  cancelLabel?: string
  cancelColor?: string
  onOk: () => void // return true to close dialog
}

interface State {
  count: number
  isAppLoading: boolean
  appCommonMessage: AppCommonMessage | null
  appCommonError: AppCommonMessage | null
  appCommonDialog: AppCommonDialog | null,
}

export const useStore = defineStore('main', {
  state: (): State => ({
    count: 0,
    isAppLoading: false,
    appCommonMessage: null,
    appCommonError: null,
    appCommonDialog: null,
  }),
  actions: {
    setIsAppLoading(state: boolean) {
      this.isAppLoading = state
    },
  }
})
