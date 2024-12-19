<template>

    <div
      ref="trigger"
      :class="ui.wrapper"
      @mouseover="onMouseOver"
      @mouseleave="onMouseLeave"
    >


      <slot :open="open"> Hover </slot>

      <Teleport to="body">

        <div
          v-if="open && !prevent"
          ref="container"
          :class="[ui.container, ui.width]"
          class="myIndex"
        >
          <Transition appear v-bind="ui.transition">
            <div
              :class="[
                showAll ? ui.showAll : ui.base,
                ui.background,
                ui.color,
                ui.rounded,
                ui.shadow,
                ui.ring,
              ]"
            >
              <slot name="text">
                {{ text }}
              </slot>
    
              <span v-if="shortcuts?.length" :class="ui.shortcuts">
                <span class="mx-1 text-gray-600 dark:text-gray-200">&middot;</span>
                <UKbd v-for="shortcut of shortcuts" :key="shortcut" size="xs">
                  {{ shortcut }}
                </UKbd>
              </span>
            </div>
          </Transition>
        </div>
      </Teleport>
    </div>

</template>

<script lang="ts">
import { computed, ref, defineComponent } from 'vue'
import type { PropType } from 'vue'
import { usePopper } from '../../composables/usePopper'
import UKbd from '../elements/Kbd.vue'
import type { PopperOptions } from '../../types/index'
import appConfig from '../appConfig'

export default defineComponent({
  components: {
    UKbd,
  },
  props: {
    text: {
      type: String,
      default: null,
    },
    prevent: {
      type: Boolean,
      default: false,
    },
    showAll: {
      type: Boolean,
      default: false,
    },
    shortcuts: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    openDelay: {
      type: Number,
      default: 0,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    popper: {
      type: Object as PropType<PopperOptions>,
      default: () => ({}),
    },
    ui: {
      type: Object as PropType<Partial<typeof appConfig.ui.tooltip>>,
      default: () => appConfig.ui.tooltip,
    },
  },
  setup(props) {
    const ui = computed(() => ({ ...appConfig.ui.tooltip, ...props.ui }))
    const popper = computed(
      () => Object.assign(props.popper, ui.value.popper) as PopperOptions,
    )
    const [trigger, container] = usePopper(popper.value)

    const open = ref(false)

    let openTimeout: NodeJS.Timeout | null = null
    let closeTimeout: NodeJS.Timeout | null = null

    // Methods

    function onMouseOver() {
      // cancel programmed closing
      if (closeTimeout) {
        clearTimeout(closeTimeout)
        closeTimeout = null
      }
      // dropdown already open
      if (open.value) {
        return
      }
      openTimeout =
        openTimeout ||
        setTimeout(() => {
          open.value = true
          openTimeout = null
        }, props.openDelay)
    }

    function onMouseLeave() {
      // cancel programmed opening
      if (openTimeout) {
        clearTimeout(openTimeout)
        openTimeout = null
      }
      // dropdown already closed
      if (!open.value) {
        return
      }
      closeTimeout =
        closeTimeout ||
        setTimeout(() => {
          open.value = false
          closeTimeout = null
        }, props.closeDelay)
    }

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      trigger,
      container,
      open,
      onMouseOver,
      onMouseLeave,
    }
  },
})
</script>

<style lang="scss" scoped>
.myIndex {
  z-index: 1000;
}
</style>
