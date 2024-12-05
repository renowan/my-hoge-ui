import type { Link } from './link'
import type { Avatar } from './avatar'

// export interface DropdownItem extends Link {
//   label: string
//   slot?: string
//   icon?: string
//   iconClass?: string
//   avatar?: Avatar
//   shortcuts?: string[]
//   disabled?: boolean
//   click?: Function
// }

export type DropdownItem = {
  label?: string
  value?: string | number
  [key: string]: unknown
}

type RouteLocationRaw = {
  name?: string
  path?: string
  params?: Record<string, any>
  query?: Record<string, any>
  hash?: string
}
