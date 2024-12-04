import type { Button } from './button'

export type AccordionItem = Button & {
  slot?: string
  disabled?: boolean
  content?: string
  defaultOpen?: boolean
  closeOthers?: boolean
}
