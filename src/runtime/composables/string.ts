// runtime/composables/validation.ts
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const getTokens = () => {
  return {
    blue: {
      50: '#F0F8FF',
      100: '#DAEFFF',
      200: '#B4DCFF',
      300: '#90C6FF',
      400: '#74B3FF',
      500: '#4692FF',
      600: '#3371DB',
      700: '#2353B7',
      800: '#163A93',
      900: '#0D287A'
    },
    red: {
      50: '#FFF3ED',
      100: '#FFE8D8',
      200: '#FFCBB2',
      300: '#FFA88B',
      400: '#FF876F',
      500: '#FF503F',
      600: '#DB2F2E',
      700: '#B71F2B',
      800: '#931428',
      900: '#7A0C26'
    }
  }
}
