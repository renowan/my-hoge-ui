import { ref, onMounted, watchEffect } from 'vue'
import {
  popperGenerator,
  defaultModifiers,
  Instance,
  Placement,
  Options,
  Strategy
} from '@popperjs/core/lib/popper-lite'
import { omitBy, isUndefined } from 'lodash'
import flip from '@popperjs/core/lib/modifiers/flip'
import offset from '@popperjs/core/lib/modifiers/offset'
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow'
import computeStyles from '@popperjs/core/lib/modifiers/computeStyles'
import eventListeners from '@popperjs/core/lib/modifiers/eventListeners'
import { unrefElement, UnRefElementReturn } from '@vueuse/core'
export const createPopper = popperGenerator({
  defaultModifiers: [
    ...defaultModifiers,
    offset,
    flip,
    preventOverflow,
    computeStyles,
    eventListeners,
  ],
})

interface UsePopperOptions {
  locked?: boolean;
  overflowPadding?: number;
  offsetDistance?: number;
  offsetSkid?: number;
  gpuAcceleration?: boolean;
  adaptive?: boolean;
  scroll?: boolean;
  resize?: boolean;
  placement?: Placement;
  strategy?: Strategy;
}

export function usePopper(
  {
    locked = false,
    overflowPadding = 8,
    offsetDistance = 8,
    offsetSkid = 0,
    gpuAcceleration = true,
    adaptive = true,
    scroll = true,
    resize = true,
    placement,
    strategy,
  }: UsePopperOptions = {},
  virtualReference?: UsePopperOptions = {},
) {
  const reference = ref(null)
  const popper = ref(null)
  const instance = ref<Instance | null>(null)
  onMounted(() => {
    watchEffect((onInvalidate) => {
      if (!popper.value) {
        return
      }
      if (!reference.value && !virtualReference?.value) {
        return
      }
      const popperEl: UnRefElementReturn = unrefElement(popper)
      const referenceEl: UnRefElementReturn = virtualReference?.value || unrefElement(reference)
      if (!(popperEl instanceof HTMLElement)) {
        return
      }
      if (!referenceEl) {
        return
      }
      instance.value = createPopper(
        referenceEl,
        popperEl,
        omitBy(
          {
            placement,
            strategy,
            modifiers: [
              {
                name: 'flip',
                enabled: !locked,
              },
              {
                name: 'preventOverflow',
                options: {
                  padding: overflowPadding,
                },
              },
              {
                name: 'offset',
                options: {
                  offset: [offsetSkid, offsetDistance],
                },
              },
              {
                name: 'computeStyles',
                options: {
                  adaptive,
                  gpuAcceleration,
                },
              },
              {
                name: 'eventListeners',
                options: {
                  scroll,
                  resize,
                },
              },
            ],
          },
          isUndefined,
        ),
      )
      onInvalidate(instance.value.destroy)
    })
  })
  return [reference, popper, instance]
}
