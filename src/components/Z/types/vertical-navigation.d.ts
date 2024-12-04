import type { Link } from './link'
import type { Avatar } from './avatar'

export type VerticalNavigationLink = Link & {
  label: string
  icon?: string
  iconClass?: string
  avatar?: Avatar
  click?: Function
  badge?: string | number
}
