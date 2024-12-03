// Data

const colors = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'primary',
  'danger',
  'info',
]

const table = {
  wrapper: 'relative',
  base: 'min-w-full table-fixed',
  divide: 'divide-y divide-gray-300',
  thead: '',
  tbody: 'divide-y divide-gray-200',
  tr: {
    base: '',
    selected: 'bg-gray-50',
    active: 'hover:bg-gray-50 cursor-pointer',
  },
  th: {
    base: 'text-left rtl:text-right',
    padding: 'px-3 py-3.5',
    color: 'text-gray-900',
    font: 'font-semibold',
    size: 'text-sm',
  },
  td: {
    base: 'whitespace-nowrap',
    padding: 'px-3 py-4',
    color: 'text-gray-500',
    font: '',
    size: 'text-sm',
  },
  loadingState: {
    wrapper:
      'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
    label: 'text-sm text-center text-gray-900',
    icon: 'w-6 h-6 mx-auto text-gray-400 mb-4 animate-spin',
  },
  emptyState: {
    wrapper:
      'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
    label: 'text-sm text-center text-gray-900',
    icon: 'w-6 h-6 mx-auto text-gray-400 mb-4',
  },
  default: {
    sortAscIcon: 'i-heroicons-bars-arrow-up-20-solid',
    sortDescIcon: 'i-heroicons-bars-arrow-down-20-solid',
    sortButton: {
      icon: 'i-heroicons-arrows-up-down-20-solid',
      trailing: true,
      square: true,
      color: 'gray',
      variant: 'ghost',
      class: '-m-1.5',
    },
    loadingState: {
      icon: 'i-heroicons-arrow-path-20-solid',
      label: 'Loading...',
    },
    emptyState: {
      icon: 'i-heroicons-circle-stack-20-solid',
      label: 'No items.',
    },
  },
}

// Elements

const avatar = {
  wrapper: 'relative inline-flex items-center justify-center flex-shrink-0',
  background: 'bg-gray-100',
  rounded: 'rounded-full',
  text: 'font-medium leading-none text-gray-900 truncate',
  placeholder: 'font-medium leading-none text-gray-500 truncate',
  size: {
    '3xs': 'h-4 w-4 text-[8px]',
    '2xs': 'h-5 w-5 text-[10px]',
    xs: 'h-6 w-6 text-xs',
    sm: 'h-8 w-8 text-sm',
    md: 'h-10 w-10 text-base',
    lg: 'h-12 w-12 text-lg',
    xl: 'h-14 w-14 text-xl',
    '2xl': 'h-16 w-16 text-2xl',
    '3xl': 'h-20 w-20 text-3xl',
  },
  chip: {
    base: 'absolute rounded-full ring-1 ring-white flex items-center justify-center text-white font-medium',
    background: 'bg-{color}-500',
    position: {
      'top-right': 'top-0 right-0',
      'bottom-right': 'bottom-0 right-0',
      'top-left': 'top-0 left-0',
      'bottom-left': 'bottom-0 left-0',
    },
    size: {
      '3xs': 'h-[4px] min-w-[4px] text-[4px] p-px',
      '2xs': 'h-[5px] min-w-[5px] text-[5px] p-px',
      xs: 'h-1.5 min-w-[0.375rem] text-[6px] p-px',
      sm: 'h-2 min-w-[0.5rem] text-[7px] p-0.5',
      md: 'h-2.5 min-w-[0.625rem] text-[8px] p-0.5',
      lg: 'h-3 min-w-[0.75rem] text-[10px] p-0.5',
      xl: 'h-3.5 min-w-[0.875rem] text-[11px] p-1',
      '2xl': 'h-4 min-w-[1rem] text-[12px] p-1',
      '3xl': 'h-5 min-w-[1.25rem] text-[14px] p-1',
    },
  },
  icon: {
    base: 'text-gray-500 flex-shrink-0',
    size: {
      '3xs': 'h-2 w-2',
      '2xs': 'h-2.5 w-2.5',
      xs: 'h-3 w-3',
      sm: 'h-4 w-4',
      md: 'h-5 w-5',
      lg: 'h-6 w-6',
      xl: 'h-7 w-7',
      '2xl': 'h-8 w-8',
      '3xl': 'h-10 w-10',
    },
  },
  default: {
    size: 'sm',
    icon: null,
    chipColor: null,
    chipPosition: 'top-right',
  },
}

const avatarGroup = {
  wrapper: 'flex flex-row-reverse',
  ring: 'ring-2 ring-white dark:ring-gray-900',
  margin: '-me-1.5 first:me-0',
}

const badge = {
  base: 'inline-flex items-center',
  rounded: 'rounded',
  font: 'font-medium',
  size: {
    xs: 'text-xs px-1.5 py-0.5',
    sm: 'text-xs px-2 py-1',
    md: 'text-sm px-2 py-1',
    lg: 'text-sm px-2.5 py-1.5',
  },
  color: {
    white: {
      solid: 'ring-1 ring-inset ring-gray-300 text-gray-600 bg-white',
    },
    gray: {
      solid: 'ring-1 ring-inset ring-gray-300 text-gray-600 bg-gray-50',
    },
    black: {
      solid: 'text-white bg-gray-900',
    },
  },
  variant: {
    solid: 'bg-{color}-500 text-white',
    outline: 'text-{color}-500 ring-1 ring-inset ring-{color}-500',
    soft: 'bg-{color}-50 opacity-10 text-{color}-500',
    subtle:
      'bg-{color}-50 text-{color}-500 ring-1 ring-inset ring-{color}-500 ring-opacity-25',
  },
  default: {
    size: 'sm',
    variant: 'solid',
    color: 'primary',
  },
}

const button = {
  base: 'focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0',
  font: 'font-normal',
  rounded: 'rounded',
  size: {
    '2xs': 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base',
  },
  gap: {
    '2xs': 'gap-x-1',
    xs: 'gap-x-1.5',
    sm: 'gap-x-1.5',
    md: 'gap-x-2',
    lg: 'gap-x-2.5',
    xl: 'gap-x-2.5',
  },
  padding: {
    '2xs': 'px-2 py-1',
    xs: 'px-2.5 py-1.5',
    sm: 'px-2.5 py-1.5',
    md: 'px-3 py-2',
    lg: 'px-3.5 py-2.5',
    xl: 'px-3.5 py-2.5',
  },
  square: {
    '2xs': 'p-1',
    xs: 'p-1.5',
    sm: 'p-1.5',
    md: 'p-2',
    lg: 'p-2.5',
    xl: 'p-2.5',
  },
  color: {
    white: {
      solid:
        'shadow-sm ring-1 ring-inset ring-gray-300 text-gray-600 bg-white hover:bg-gray-50 disabled:bg-white focus-visible:ring-2 focus-visible:ring-primary-500',
      ghost:
        'text-gray-900 hover:bg-white focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
    },
    gray: {
      solid:
        'shadow-sm ring-1 ring-inset ring-gray-300 text-gray-600 bg-gray-50 hover:bg-gray-100 disabled:bg-gray-50 focus-visible:ring-2 focus-visible:ring-primary-500',
      ghost:
        'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
      link: 'text-gray-500 hover:text-gray-700 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
    },
    red: {
      solid:
        'shadow-sm text-white bg-red-500 hover:bg-red-600 disabled:bg-red-400 focus-visible:ring-2 focus-visible:ring-red-500',
      ghost:
        'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
      link: 'text-gray-500 hover:text-gray-700 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
    },
    danger: {
      solid:
        'shadow-sm text-white bg-danger-500 hover:bg-danger-600 disabled:bg-danger-400 focus-visible:ring-2 focus-visible:ring-danger-500',
      ghost:
        'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-danger-500',
      link: 'text-gray-500 hover:text-gray-700 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-danger-500',
    },
    info: {
      solid:
        'shadow-sm text-white bg-info-500 hover:bg-info-600 disabled:bg-info-400 focus-visible:ring-2 focus-visible:ring-info-500',
      ghost:
        'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-info-500',
      link: 'text-gray-500 hover:text-gray-700 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-danger-500',
    },
    blue: {
      solid:
        'shadow-sm text-white bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 focus-visible:ring-2 focus-visible:ring-blue-500',
      ghost:
        'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
      link: 'text-gray-500 hover:text-gray-700 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
    },
    primary: {
      solid:
        'shadow-sm text-white bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 focus-visible:ring-2 focus-visible:ring-primary-500',
      ghost:
        'text-gray-600 hover:text-gray-900 hover:bg-gray-50 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
      link: 'text-gray-500 hover:text-gray-700 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
    },
    black: {
      solid:
        'shadow-sm text-white bg-gray-900 hover:bg-gray-800 disabled:bg-gray-900 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
      link: 'text-gray-700 underline-offset-4 hover:underline focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
    },
  },
  variant: {
    solid:
      'shadow-sm text-white bg-{color}-500 hover:bg-{color}-600 disabled:bg-{color}-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500',
    outline:
      'ring-1 ring-inset ring-current text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-{color}-500',
    soft: 'text-{color}-500 dark:text-{color}-400 bg-{color}-50 hover:bg-{color}-100 disabled:bg-{color}-50 dark:bg-{color}-950 dark:hover:bg-{color}-900 dark:disabled:bg-{color}-950 focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500',
    ghost:
      'text-{color}-500 dark:text-{color}-400 hover:bg-{color}-50 disabled:bg-transparent dark:hover:bg-{color}-950 dark:disabled:bg-transparent focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500',
    link: 'text-{color}-500 hover:text-{color}-600 disabled:text-{color}-500 dark:text-{color}-400 dark:hover:text-{color}-500 dark:disabled:text-{color}-400 underline-offset-4 hover:underline focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-{color}-500',
  },
  icon: {
    base: 'flex-shrink-0',
    size: {
      '2xs': 'h-4 w-4',
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-5 w-5',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
  },
  default: {
    size: 'sm',
    variant: 'solid',
    color: 'primary',
    loadingIcon: 'i-heroicons-arrow-path-20-solid',
  },
}

const buttonGroup = {
  wrapper: 'inline-flex -space-x-px',
  rounded: 'rounded',
  shadow: 'shadow-sm',
}

const dropdown = {
  wrapper: 'relative inline-flex text-left rtl:text-right',
  container: 'z-20',
  width: 'w-48',
  height: '',
  background: 'bg-white',
  shadow: 'shadow-lg',
  rounded: 'rounded',
  ring: 'ring-1 ring-gray-200',
  base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
  divide: 'divide-y divide-gray-200',
  padding: 'p-1',
  item: {
    base: 'group flex items-center gap-2 w-full',
    rounded: 'rounded',
    padding: 'px-2 py-1.5',
    size: 'text-sm',
    active: 'bg-gray-100 text-gray-900',
    inactive: 'text-gray-700',
    disabled: 'cursor-not-allowed opacity-50',
    icon: {
      base: 'flex-shrink-0 h-4 w-4',
      active: 'text-gray-500',
      inactive: 'text-gray-400',
    },
    avatar: {
      base: 'flex-shrink-0',
      size: '3xs',
    },
    shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5 ms-auto',
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: 'transition duration-100 ease-out',
    enterFromClass: 'transform scale-95 opacity-0',
    enterToClass: 'transform scale-100 opacity-100',
    leaveActiveClass: 'transition duration-75 ease-in',
    leaveFromClass: 'transform scale-100 opacity-100',
    leaveToClass: 'transform scale-95 opacity-0',
  },
  popper: {
    placement: 'bottom-end',
    strategy: 'fixed',
  },
}

const accordion = {
  wrapper: 'w-full flex flex-col',
  item: {
    base: '',
    size: 'text-sm',
    color: 'text-gray-500',
    padding: 'pt-1.5 pb-3',
    icon: 'ms-auto transform transition-transform duration-200',
  },
  transition: {
    enterActiveClass:
      'overflow-hidden transition-[height] duration-200 ease-out',
    leaveActiveClass:
      'overflow-hidden transition-[height] duration-200 ease-out',
  },
  default: {
    openIcon: 'i-heroicons-chevron-down-20-solid',
    closeIcon: '',
    class: 'mb-1.5 w-full',
    variant: 'soft',
  },
}

const alert = {
  wrapper: 'w-full relative overflow-hidden',
  title: 'text-sm font-medium',
  description: 'mt-1 text-sm leading-4 opacity-90',
  shadow: '',
  rounded: 'rounded-lg',
  padding: 'p-3',
  icon: {
    base: 'flex-shrink-0 w-5 h-5',
  },
  avatar: {
    base: 'flex-shrink-0 self-center',
    size: 'md',
  },
  color: {
    white: {
      solid: 'text-gray-900 bg-white ring-1 ring-gray-200',
    },
  },
  variant: {
    solid: 'bg-{color}-500 text-white',
    outline: 'text-{color}-500 ring-1 ring-inset ring-{color}-500',
    soft: 'bg-{color}-50 text-{color}-500',
    subtle:
      'bg-{color}-50 text-{color}-500 ring-1 ring-inset ring-{color}-500 ring-opacity-25',
  },
  default: {
    color: 'white',
    variant: 'solid',
    icon: null,
    closeButton: null,
    actionButton: {
      size: 'xs',
      color: 'primary',
      variant: 'link',
    },
  },
}

const kbd = {
  base: 'inline-flex items-center justify-center text-gray-900',
  padding: 'px-1',
  size: {
    xs: 'h-4 min-w-[16px] text-[10px]',
    sm: 'h-5 min-w-[20px] text-[11px]',
    md: 'h-6 min-w-[24px] text-[12px]',
  },
  rounded: 'rounded',
  font: 'font-medium font-sans',
  background: 'bg-gray-100',
  ring: 'ring-1 ring-gray-300 ring-inset',
  default: {
    size: 'sm',
  },
}

// Forms

const input = {
  wrapper: 'relative',
  base: 'relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0',
  rounded: 'rounded',
  placeholder: 'placeholder-gray-300',
  size: {
    '2xs': 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base',
  },
  gap: {
    '2xs': 'gap-x-1',
    xs: 'gap-x-1.5',
    sm: 'gap-x-2',
    md: 'gap-x-2',
    lg: 'gap-x-2',
    xl: 'gap-x-2',
  },
  padding: {
    '2xs': 'px-2 py-1',
    xs: 'px-2.5 py-1.5',
    sm: 'px-2.5 py-1.5',
    md: 'px-3 py-2',
    lg: 'px-3.5 py-2.5',
    xl: 'px-3.5 py-2.5',
  },
  leading: {
    padding: {
      '2xs': 'ps-7',
      xs: 'ps-8',
      sm: 'ps-9',
      md: 'ps-10',
      lg: 'ps-11',
      xl: 'ps-12',
    },
  },
  trailing: {
    padding: {
      '2xs': 'pe-7',
      xs: 'pe-8',
      sm: 'pe-9',
      md: 'pe-10',
      lg: 'pe-11',
      xl: 'pe-12',
    },
  },
  color: {
    white: {
      outline:
        'shadow-sm text-gray-600 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-primary-500',
    },
    gray: {
      outline:
        'shadow-sm bg-gray-50 text-gray-600 ring-1 ring-inset ring-gray-300 focus:ring-1 focus:ring-primary-500',
    },
  },
  variant: {
    outline:
      'shadow-sm bg-transparent text-gray-600 ring-1 ring-inset ring-{color}-500 focus:ring-2 focus:ring-{color}-500',
    none: 'bg-transparent focus:ring-0 focus:shadow-none',
  },
  icon: {
    base: 'flex-shrink-0 text-gray-400',
    color: 'text-{color}-500',
    size: {
      '2xs': 'h-4 w-4',
      xs: 'h-4 w-4',
      sm: 'h-5 w-5',
      md: 'h-5 w-5',
      lg: 'h-5 w-5',
      xl: 'h-6 w-6',
    },
    leading: {
      wrapper: 'absolute inset-y-0 start-0 flex items-center -mt-1',
      pointer: 'pointer-events-none',
      padding: {
        '2xs': 'ps-2',
        xs: 'ps-2',
        sm: 'ps-2',
        md: 'ps-3',
        lg: 'ps-3.5',
        xl: 'ps-3.5',
      },
    },
    trailing: {
      wrapper: 'absolute inset-y-0 end-0 flex items-center',
      pointer: 'pointer-events-none',
      padding: {
        '2xs': 'pe-2',
        xs: 'pe-2.5',
        sm: 'pe-2.5',
        md: 'pe-3',
        lg: 'pe-3.5',
        xl: 'pe-3.5',
      },
    },
  },
  default: {
    size: 'sm',
    color: 'white',
    variant: 'outline',
    loadingIcon: 'i-heroicons-arrow-path-20-solid',
  },
}

const formGroup = {
  wrapper: '',
  label: {
    wrapper: 'flex content-center items-center justify-between',
    base: 'block font-medium text-gray-700',
    // eslint-disable-next-line quotes
    required: `after:content-['*'] after:ms-0.5 after:text-red-500`,
  },
  size: {
    '2xs': 'text-xs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-sm',
    lg: 'text-sm',
    xl: 'text-base',
  },
  container: 'mt-1 relative',
  description: 'text-gray-500',
  hint: 'text-gray-500',
  help: 'mt-2 text-gray-500',
  error: 'mt-2 text-red-500',
}

const textarea = {
  ...input,
  bgColor: 'bg-white',
  default: {
    size: 'sm',
    color: 'white',
    variant: 'outline',
  },
}

const select = {
  ...input,
  bgColor: 'bg-white',
  placeholder: 'text-gray-900',
  default: {
    size: 'sm',
    color: 'white',
    variant: 'outline',
    loadingIcon: 'i-heroicons-arrow-path-20-solid',
    trailingIcon: 'i-heroicons-chevron-down-20-solid',
  },
}

const selectMenu = {
  wrapper: 'relative',
  container: 'z-20',
  width: 'w-full',
  height: 'max-h-60',
  base: 'relative focus:outline-none overflow-y-auto scroll-py-1',
  background: 'bg-white',
  shadow: 'shadow-lg',
  rounded: 'rounded',
  padding: 'p-1',
  ring: 'ring-1 ring-gray-200',
  input:
    'block w-[calc(100%+0.5rem)] focus:ring-transparent text-sm px-3 py-1.5 text-gray-700 bg-white border-0 border-b border-gray-200 focus:border-inherit sticky -top-1 -mt-1 mb-1 -mx-1 z-10 placeholder-gray-400 focus:outline-none',
  option: {
    base: 'cursor-default select-none relative flex items-center justify-between gap-1',
    rounded: 'rounded',
    padding: 'px-2 py-1.5',
    size: 'text-sm',
    color: 'text-gray-900',
    container: 'flex items-center gap-2 min-w-0',
    active: 'bg-gray-100',
    inactive: '',
    selected: 'pe-7',
    disabled: 'cursor-not-allowed opacity-50',
    empty: 'text-sm text-gray-400 px-2 py-1.5',
    icon: {
      base: 'flex-shrink-0 h-4 w-4',
      active: 'text-gray-900',
      inactive: 'text-gray-400',
    },
    selectedIcon: {
      wrapper: 'absolute inset-y-0 end-0 flex items-center',
      padding: 'pe-2',
      base: 'h-4 w-4 text-gray-900 flex-shrink-0',
    },
    avatar: {
      base: 'flex-shrink-0',
      size: '3xs',
    },
    chip: {
      base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
    },
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    leaveActiveClass: 'transition ease-in duration-100',
    leaveFromClass: 'opacity-100',
    leaveToClass: 'opacity-0',
  },
  popper: {
    placement: 'bottom-end',
  },
  default: {
    selectedIcon: 'i-heroicons-check-20-solid',
  },
}

const radio = {
  wrapper: 'relative flex items-start',
  base: 'h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
  color: 'text-{color}-500',
  background: 'bg-white',
  border: 'border border-gray-300',
  ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  label: 'font-medium text-gray-700',
  required: 'text-red-500',
  help: 'text-gray-500',
  default: {
    color: 'primary',
  },
}

const checkbox = {
  wrapper: 'relative flex items-start',
  base: 'h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent',
  rounded: 'rounded',
  color: 'text-{color}-500',
  background: 'bg-white disabled:bg-gray-200',
  border: 'border border-gray-300',
  ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  label: 'font-normal text-gray-600',
  required: 'text-red-500',
  help: 'text-gray-500',
  default: {
    color: 'primary',
  },
}

const toggle = {
  base: 'relative inline-flex h-5 w-9 flex-shrink-0 border-2 border-transparent disabled:cursor-not-allowed disabled:opacity-50 focus:outline-none',
  rounded: 'rounded-full',
  ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  active: 'bg-{color}-500',
  inactive: 'bg-gray-200',
  container: {
    base: 'pointer-events-none relative inline-block h-4 w-4 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
    active: 'translate-x-4 rtl:-translate-x-4',
    inactive: 'translate-x-0 rtl:-translate-x-0',
  },
  icon: {
    base: 'absolute inset-0 h-full w-full flex items-center justify-center transition-opacity',
    active: 'opacity-100 ease-in duration-200',
    inactive: 'opacity-0 ease-out duration-100',
    on: 'h-3 w-3 text-{color}-500',
    off: 'h-3 w-3 text-gray-400',
  },
  default: {
    onIcon: null,
    offIcon: null,
    color: 'primary',
  },
}

const range = {
  wrapper: 'relative w-full flex items-center',
  base: 'w-full absolute appearance-none cursor-pointer disabled:cursor-not-allowed disabled:bg-opacity-50 focus:outline-none peer group',
  rounded: 'rounded-lg',
  background: 'bg-transparent',
  ring: 'focus-visible:ring-2 focus-visible:ring-{color}-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white',
  progress: {
    base: 'absolute pointer-events-none peer-disabled:bg-opacity-50',
    rounded: 'rounded-s-lg',
    background: 'bg-{color}-500',
    size: {
      sm: 'h-1',
      md: 'h-2',
      lg: 'h-3',
    },
  },
  thumb: {
    base: '[&::-webkit-slider-thumb]:relative [&::-moz-range-thumb]:relative [&::-webkit-slider-thumb]:z-[1] [&::-moz-range-thumb]:z-[1] [&::-webkit-slider-thumb]:appearance-none [&::-moz-range-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0',
    color: 'text-{color}-500',
    background:
      '[&::-webkit-slider-thumb]:bg-white [&::-moz-range-thumb]:bg-current',
    ring: '[&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-current',
    size: {
      sm: '[&::-webkit-slider-thumb]:h-3 [&::-moz-range-thumb]:h-3 [&::-webkit-slider-thumb]:w-3 [&::-moz-range-thumb]:w-3 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1',
      md: '[&::-webkit-slider-thumb]:h-4 [&::-moz-range-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-moz-range-thumb]:w-4 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1',
      lg: '[&::-webkit-slider-thumb]:h-5 [&::-moz-range-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-moz-range-thumb]:w-5 [&::-webkit-slider-thumb]:-mt-1 [&::-moz-range-thumb]:-mt-1',
    },
  },
  track: {
    base: '[&::-webkit-slider-runnable-track]:group-disabled:bg-opacity-50 [&::-moz-slider-runnable-track]:group-disabled:bg-opacity-50',
    background:
      '[&::-webkit-slider-runnable-track]:bg-gray-200 [&::-moz-slider-runnable-track]:bg-gray-200',
    rounded:
      '[&::-webkit-slider-runnable-track]:rounded-lg [&::-moz-slider-runnable-track]:rounded-lg',
    size: {
      sm: '[&::-webkit-slider-runnable-track]:h-1 [&::-moz-slider-runnable-track]:h-1',
      md: '[&::-webkit-slider-runnable-track]:h-2 [&::-moz-slider-runnable-track]:h-2',
      lg: '[&::-webkit-slider-runnable-track]:h-3 [&::-moz-slider-runnable-track]:h-3',
    },
  },
  size: {
    sm: 'h-3',
    md: 'h-4',
    lg: 'h-5',
  },
  default: {
    size: 'md',
    color: 'primary',
  },
}

// Layout

const card = {
  base: 'overflow-hidden',
  background: 'bg-white',
  divide: 'divide-y divide-gray-200',
  ring: 'ring-1 ring-gray-200',
  rounded: 'rounded',
  shadow: 'shadow',
  body: {
    base: '',
    background: '',
    padding: 'px-4 py-3',
  },
  header: {
    base: '',
    background: '',
    padding: 'px-4 py-3',
  },
  footer: {
    base: '',
    background: '',
    padding: 'px-4 py-3',
  },
}

const container = {
  base: 'mx-auto',
  padding: 'px-4 sm:px-6 lg:px-8',
  constrained: 'max-w-7xl',
}

const skeleton = {
  base: 'animate-pulse',
  background: 'bg-gray-100',
  rounded: 'rounded',
}

// Navigation

const verticalNavigation = {
  wrapper: 'relative',
  base: 'group relative flex items-center gap-2 focus:outline-none focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-1 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75',
  ring: 'focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500',
  padding: 'px-3 py-1.5',
  width: 'w-full',
  rounded: 'rounded',
  font: 'font-medium',
  size: 'text-sm',
  active: 'text-gray-900',
  inactive: 'text-gray-500 hover:text-gray-900 hover:before:bg-gray-50',
  label: 'truncate relative',
  icon: {
    base: 'flex-shrink-0 w-4 h-4',
    active: 'text-gray-700 dark:text-gray-200',
    inactive:
      'text-gray-400 dark:text-gray-500 group-hover:text-gray-700 dark:group-hover:text-gray-200',
  },
  avatar: {
    base: 'flex-shrink-0',
    size: '3xs',
  },
  badge: {
    base: 'relative ms-auto inline-block py-0.5 px-2 text-xs rounded-md -me-1 -my-0.5',
    active: 'bg-white dark:bg-gray-900',
    inactive:
      'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white group-hover:bg-white dark:group-hover:bg-gray-900',
  },
}

const commandPalette = {
  wrapper:
    'flex flex-col flex-1 min-h-0 divide-y divide-gray-100',
  container:
    'relative flex-1 overflow-y-auto divide-y divide-gray-100 scroll-py-2',
  input: {
    wrapper: 'relative flex items-center',
    base: 'w-full placeholder-gray-400 dark:placeholder-gray-500 bg-transparent border-0 text-gray-900 dark:text-white focus:ring-0 focus:outline-none',
    padding: 'px-4',
    height: 'h-12',
    size: 'sm:text-sm',
    icon: {
      base: 'pointer-events-none absolute start-4 text-gray-400 dark:text-gray-500',
      size: 'h-4 w-4',
      padding: 'ps-10',
    },
    closeButton: 'absolute end-4',
  },
  emptyState: {
    wrapper:
      'flex flex-col items-center justify-center flex-1 px-6 py-14 sm:px-14',
    label: 'text-sm text-center text-gray-900 dark:text-white',
    queryLabel: 'text-sm text-center text-gray-900 dark:text-white',
    icon: 'w-6 h-6 mx-auto text-gray-400 dark:text-gray-500 mb-4',
  },
  group: {
    wrapper: 'p-2',
    label: 'px-2 my-2 text-xs font-semibold text-gray-900 dark:text-white',
    container: 'text-sm text-gray-700 dark:text-gray-200',
    command: {
      base: 'flex justify-between select-none items-center rounded-md px-2 py-1.5 gap-2 relative',
      active: 'bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white',
      inactive: '',
      label: 'flex items-center gap-1.5 min-w-0',
      prefix: 'text-gray-400 dark:text-gray-500',
      suffix: 'text-gray-400 dark:text-gray-500',
      container: 'flex items-center gap-2 min-w-0',
      icon: {
        base: 'flex-shrink-0 w-4 h-4',
        active: 'text-gray-900 dark:text-white',
        inactive: 'text-gray-400 dark:text-gray-500',
      },
      selectedIcon: {
        base: 'h-4 w-4 text-gray-900 dark:text-white flex-shrink-0',
      },
      avatar: {
        base: 'flex-shrink-0',
        size: '3xs',
      },
      chip: {
        base: 'flex-shrink-0 w-2 h-2 mx-1 rounded-full',
      },
      disabled: 'opacity-50',
      shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5',
    },
    active: 'flex-shrink-0 text-gray-500',
    inactive: 'flex-shrink-0 text-gray-500',
  },
  default: {
    icon: 'i-heroicons-magnifying-glass-20-solid',
    loadingIcon: 'i-heroicons-arrow-path-20-solid',
    emptyState: {
      icon: 'i-heroicons-magnifying-glass-20-solid',
      label: "We couldn't find any items.",
      queryLabel:
        "We couldn't find any items with that term. Please try again.",
    },
    closeButton: null,
    selectedIcon: 'i-heroicons-check-20-solid',
  },
}

const pagination = {
  wrapper: 'flex items-center -space-x-px',
  base: '',
  rounded: 'first:rounded-s last:rounded-e',
  default: {
    size: 'sm',
    activeButton: {
      color: 'primary',
    },
    inactiveButton: {
      color: 'white',
    },
    prevButton: {
      color: 'white',
      class: 'rtl:[&_span:first-child]:rotate-180',
      icon: 'icon-angle-left',
    },
    nextButton: {
      color: 'white',
      class: 'rtl:[&_span:last-child]:rotate-180',
      icon: 'icon-angle-right',
    },
  },
}

const tabs = {
  wrapper: 'relative space-y-2',
  container: 'relative w-full',
  base: 'focus:outline-none',
  list: {
    base: 'relative',
    background: 'bg-gray-100',
    rounded: 'rounded-lg',
    shadow: '',
    padding: 'p-1',
    height: 'h-10',
    width: 'w-full',
    marker: {
      wrapper:
        'absolute top-[4px] left-[4px] duration-200 ease-out focus:outline-none',
      base: 'w-full h-full',
      background: 'bg-white',
      rounded: 'rounded',
      shadow: 'shadow-sm',
    },
    tab: {
      base: 'relative inline-flex items-center justify-center flex-shrink-0 w-full whitespace-nowrap focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 transition-colors duration-200 ease-out',
      background: '',
      active: 'text-gray-900',
      inactive: 'text-gray-500',
      height: 'h-8',
      padding: 'px-3',
      size: 'text-sm',
      font: 'font-medium',
      rounded: 'rounded',
      shadow: '',
    },
  },
}

// Overlays

const modal = {
  wrapper: 'relative z-50',
  inner: 'fixed inset-0 overflow-y-auto',
  container: 'flex min-h-full items-start justify-center text-center',
  padding: 'p-4 sm:p-0',
  margin: 'sm:my-8',
  base: 'relative text-left rtl:text-right overflow-hidden mt-14 mb-8 w-full flex flex-col',
  overlay: {
    base: 'fixed inset-0 transition-opacity',
    background: 'bg-gray-200/75',
    // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
    transition: {
      enter: 'ease-out duration-300',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'ease-in duration-200',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
  },
  background: 'bg-white',
  ring: '',
  rounded: 'rounded',
  shadow: 'shadow-xl',
  width: 'sm:max-w-lg md:max-w-3xl',
  height: '',
  // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
  transition: {
    enter: 'ease-out duration-300',
    enterFrom: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
    enterTo: 'opacity-100 translate-y-0 sm:scale-100',
    leave: 'ease-in duration-200',
    leaveFrom: 'opacity-100 translate-y-0 sm:scale-100',
    leaveTo: 'opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95',
  },
}

const slideover = {
  wrapper: 'fixed inset-0 flex z-50',
  overlay: {
    base: 'fixed inset-0 transition-opacity',
    background: 'bg-gray-200/75',
    // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
    transition: {
      enter: 'ease-in-out duration-500',
      enterFrom: 'opacity-0',
      enterTo: 'opacity-100',
      leave: 'ease-in-out duration-500',
      leaveFrom: 'opacity-100',
      leaveTo: 'opacity-0',
    },
  },
  base: 'relative flex-1 flex flex-col w-full focus:outline-none',
  background: 'bg-white',
  ring: '',
  rounded: '',
  padding: '',
  shadow: 'shadow-xl',
  width: 'w-screen max-w-md',
  // Syntax for `<TransitionRoot>` component https://headlessui.com/vue/transition#basic-example
  transition: {
    enter: 'transform transition ease-in-out duration-300',
    leave: 'transform transition ease-in-out duration-200',
  },
}

const tooltip = {
  wrapper: 'relative inline-flex',
  container: 'z-20',
  width: 'max-w-xs',
  background: 'bg-white',
  color: 'text-gray-900',
  shadow: 'shadow',
  rounded: 'rounded',
  ring: 'ring-1 ring-gray-200',
  base: 'invisible lg:visible h-6 px-2 py-1 text-xs font-normal truncate',
  shortcuts: 'hidden md:inline-flex flex-shrink-0 gap-0.5',
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: 'transition ease-out duration-200',
    enterFromClass: 'opacity-0 translate-y-1',
    enterToClass: 'opacity-100 translate-y-0',
    leaveActiveClass: 'transition ease-in duration-150',
    leaveFromClass: 'opacity-100 translate-y-0',
    leaveToClass: 'opacity-0 translate-y-1',
  },
  popper: {
    strategy: 'fixed',
  },
}

const popover = {
  wrapper: 'relative',
  container: 'z-20',
  width: '',
  background: 'bg-white',
  shadow: 'shadow-lg',
  rounded: 'rounded',
  ring: 'ring-1 ring-gray-200',
  base: 'overflow-hidden focus:outline-none',
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: 'transition ease-out duration-200',
    enterFromClass: 'opacity-0 translate-y-1',
    enterToClass: 'opacity-100 translate-y-0',
    leaveActiveClass: 'transition ease-in duration-150',
    leaveFromClass: 'opacity-100 translate-y-0',
    leaveToClass: 'opacity-0 translate-y-1',
  },
  popper: {
    strategy: 'fixed',
  },
}

const contextMenu = {
  wrapper: 'relative',
  container: 'z-20',
  width: '',
  background: 'bg-white',
  shadow: 'shadow-lg',
  rounded: 'rounded',
  ring: 'ring-1 ring-gray-200',
  base: 'overflow-hidden focus:outline-none',
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: 'transition ease-out duration-200',
    enterFromClass: 'opacity-0 translate-y-1',
    enterToClass: 'opacity-100 translate-y-0',
    leaveActiveClass: 'transition ease-in duration-150',
    leaveFromClass: 'opacity-100 translate-y-0',
    leaveToClass: 'opacity-0 translate-y-1',
  },
  popper: {
    placement: 'bottom-start',
    scroll: false,
  },
}

const notification = {
  wrapper: 'w-full pointer-events-auto',
  container: 'relative overflow-hidden',
  title: 'text-sm font-medium text-gray-900',
  description: 'mt-1 text-sm leading-4 text-gray-500',
  background: 'bg-white',
  shadow: 'shadow-lg',
  rounded: 'rounded',
  padding: 'p-4',
  ring: 'ring-1 ring-gray-200',
  icon: {
    base: 'flex-shrink-0 w-5 h-5',
    color: 'text-{color}-500',
  },
  avatar: {
    base: 'flex-shrink-0 self-center',
    size: 'md',
  },
  progress: {
    base: 'absolute bottom-0 end-0 start-0 h-1',
    background: 'bg-{color}-500',
  },
  // Syntax for `<Transition>` component https://vuejs.org/guide/built-ins/transition.html#css-based-transitions
  transition: {
    enterActiveClass: 'transform ease-out duration-300 transition',
    enterFromClass: 'translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2',
    enterToClass: 'translate-y-0 opacity-100 sm:translate-x-0',
    leaveActiveClass: 'transition ease-in duration-100',
    leaveFromClass: 'opacity-100',
    leaveToClass: 'opacity-0',
  },
  default: {
    color: 'primary',
    icon: null,
    closeButton: {
      icon: 'i-heroicons-x-mark-20-solid',
      color: 'gray',
      variant: 'link',
      padded: false,
    },
    actionButton: {
      size: 'xs',
      color: 'white',
    },
  },
}

const notifications = {
  wrapper: 'fixed flex flex-col justify-end z-[55]',
  position: 'bottom-0 end-0',
  width: 'w-full sm:w-96',
  container: 'px-4 sm:px-6 py-6 space-y-3 overflow-y-auto',
}

export default {
  ui: {
    hoge: { abc: 12 },
    colors,
    table,
    avatar,
    avatarGroup,
    badge,
    button,
    buttonGroup,
    dropdown,
    kbd,
    accordion,
    alert,
    input,
    formGroup,
    textarea,
    select,
    selectMenu,
    checkbox,
    radio,
    toggle,
    range,
    card,
    container,
    skeleton,
    verticalNavigation,
    commandPalette,
    pagination,
    tabs,
    modal,
    slideover,
    popover,
    tooltip,
    contextMenu,
    notification,
    notifications,
  },
}
