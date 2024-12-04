// import type { FuseSortFunctionMatch, FuseSortFunctionMatchList } from 'fuse.js'
import type { Avatar } from './avatar'

export type Command = {
  id: string | number
  prefix?: string
  suffix?: string
  icon?: string
  iconClass?: string
  avatar?: Avatar
  chip?: string
  disabled?: boolean
  shortcuts?: string[]
  group?: string
  score?: number
  // matches?: (FuseSortFunctionMatch | FuseSortFunctionMatchList)[]
  [key: string]: unknown
}

export type Group = {
  key: string
  active?: string
  inactive?: string
  commands: Command[]
  [key: string]: unknown
}
