import type { Placement, PositioningStrategy } from '@popperjs/core'

export type PopperOptions = {
  locked?: boolean
  overflowPadding?: number
  offsetDistance?: number
  offsetSkid?: number
  placement?: Placement
  strategy?: PositioningStrategy
  gpuAcceleration?: boolean
  adaptive?: boolean
  scroll?: boolean
  resize?: boolean
}
