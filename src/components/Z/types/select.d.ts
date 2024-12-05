export type SelectSize = '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'
export type SelectColor = 'white' | 'gray'
export type SelectVariant = 'outline' | 'none'

export interface SelectConfig {
  wrapper: string
  base: string
  bgColor: string
  rounded: string
  placeholder: string
  size: Record<SelectSize, string>
  padding: Record<SelectSize, string>
  color: {
    white: {
      outline: string
      none: string
    }
    gray: {
      outline: string
      none: string
    }
  }
  variant: {
    outline: string
    none: string
  }
  default: {
    size: SelectSize
    color: SelectColor
    variant: SelectVariant
    loadingIcon: string
    trailingIcon: string
  }
}
