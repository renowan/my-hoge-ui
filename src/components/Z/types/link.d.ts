import type { NuxtLinkProps } from '#app'

export type Link = NuxtLinkProps & {
  exact?: boolean
  exactQuery?: boolean
  exactMatch?: boolean
  inactiveClass?: string
}
