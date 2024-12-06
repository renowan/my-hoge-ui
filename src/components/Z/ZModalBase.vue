<template>
  <TransitionRoot :appear="appear" :show="isOpen" as="template">
    <HDialog
      :initial-focus="initialFocusRef"
      :class="ui.wrapper"
      @close="(e) => !preventClose && close(e)"
    >
      <TransitionChild
        v-if="overlay"
        as="template"
        :appear="appear"
        v-bind="ui.overlay.transition"
      >
        <div :class="[ui.overlay.base, ui.overlay.background]" />
      </TransitionChild>

      <div :class="ui.inner">
        <div :class="[ui.container, ui.padding]">
          <TransitionChild
            as="template"
            :appear="appear"
            v-bind="transitionClass"
          >
            <HDialogPanel
              :class="[ui.base, ui.background, ui.ring, ui.shadow, myWidth]"
            >
              <slot />
            </HDialogPanel>
          </TransitionChild>
        </div>
      </div>
    </HDialog>
  </TransitionRoot>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import type { PropType } from 'vue'
import {
  Dialog as HDialog,
  DialogPanel as HDialogPanel,
  TransitionRoot,
  TransitionChild,
} from '@headlessui/vue'
import appConfig from './appConfig'

export default defineComponent({
  components: {
    HDialog,
    HDialogPanel,
    TransitionRoot,
    TransitionChild,
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    appear: {
      type: Boolean,
      default: false,
    },
    overlay: {
      type: Boolean,
      default: true,
    },
    transition: {
      type: Boolean,
      default: true,
    },
    preventClose: {
      type: Boolean,
      default: false,
    },
    noCloseOnBackdrop: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<'sm' | 'md' | 'lg' | 'xl'>,
      default: 'md',
    },
    ui: {
      type: Object as PropType<Partial<typeof appConfig.ui.modal>>,
      default: () => appConfig.ui.modal,
    },
    initialFocusRef: {
      type: Object as PropType<HTMLElement | null>,
      default: () => null,
    },
  },
  emits: ['update:modelValue', 'close'],
  setup(props, { emit }) {
    const ui = computed(() => appConfig.ui.modal)
    const isOpen = computed({
      get() {
        return props.modelValue
      },
      set(value) {
        emit('update:modelValue', value)
      },
    })

    const transitionClass = computed(() => {
      if (!props.transition) {
        return {}
      }

      return {
        ...ui.value.transition,
      }
    })

    function close(value: boolean) {
      if (props.noCloseOnBackdrop) {
        return
      }
      isOpen.value = value

      emit('close')
    }

    type WidthSettingType = {
      sm: string
      md: string
      lg: string
      xl: string
    }

    const widthSetting: WidthSettingType = {
      sm: 'sm:max-w-md',
      md: 'sm:max-w-md md:max-w-2xl',
      lg: 'sm:max-w-md md:max-w-2xl lg:max-w-4xl',
      xl: 'sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-7xl',
    }

    const myWidth = computed(() => {
      return widthSetting[props.size]
    })

    const onClose = () => {
      console.log('onClose')
      // (e) => !props.preventClose && close(e)
    }

    // @close="(e) => !preventClose && close(e)"

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      isOpen,
      transitionClass,
      close,
      onClose,
      myWidth,
    }
  },
})
</script>
