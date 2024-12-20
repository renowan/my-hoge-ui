<template>
  <ZLink
    :type="type"
    :disabled="disabled || loading"
    :class="buttonClass"
    v-bind="attrs"
  >
    <slot name="leading" :disabled="disabled" :loading="loading">
      <ZIcon
        v-if="isLeading && leadingIconName"
        :name="leadingIconName"
        :class="leadingIconClass"
        aria-hidden="true"
      />
    </slot>

    <slot>
      <span
        v-if="label"
        :class="[truncate ? 'text-left break-all line-clamp-1' : '']"
      >
        {{ label }}
      </span>
    </slot>

    <slot name="trailing" :disabled="disabled" :loading="loading">
      <ZIcon
        v-if="isTrailing && trailingIconName"
        :name="trailingIconName"
        :class="trailingIconClass"
        aria-hidden="true"
      />
    </slot>
  </ZLink>
</template>

<script lang="ts">
import { computed, defineComponent, useSlots } from 'vue'
import type { PropType } from 'vue'
import { classNames } from '../../utils'
import { omit } from '../../utils/lodash'
import appConfig from '../appConfig'
import ZLink from './Link.vue'
import ZIcon from './Icon.vue'

type ColorKey = keyof typeof appConfig.ui.button.color
type VariantKey = keyof typeof appConfig.ui.button.variant
type SizeKey = keyof typeof appConfig.ui.button.size

type Props = {
  color: ColorKey
  variant: VariantKey
  size: SizeKey
}

export default defineComponent({
  components: {
    ZIcon,
    ZLink,
  },
  props: {
    type: {
      type: String,
      default: 'button',
    },
    block: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    padded: {
      type: Boolean,
      default: true,
    },
    fw: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<Props['size']>,
      default: () => appConfig.ui.button.default.size,
      validator(value: string) {
        return Object.keys(appConfig.ui.button.size).includes(value)
      },
    },
    color: {
      type: String as PropType<Props['color']>,
      default: () => appConfig.ui.button.default.color,
      validator(value: string) {
        return [
          ...appConfig.ui.colors,
          ...Object.keys(appConfig.ui.button.color),
        ].includes(value)
      },
    },
    variant: {
      type: String as PropType<Props['variant']>,
      default: () => appConfig.ui.button.default.variant,
      validator(value: string) {
        return [...Object.keys(appConfig.ui.button.variant)].includes(value)
      },
    },
    icon: {
      type: String,
      default: null,
    },
    loadingIcon: {
      type: String,
      default: () => appConfig.ui.button.default.loadingIcon,
    },
    leadingIcon: {
      type: String,
      default: null,
    },
    trailingIcon: {
      type: String,
      default: null,
    },
    trailing: {
      type: Boolean,
      default: false,
    },
    leading: {
      type: Boolean,
      default: false,
    },
    square: {
      type: Boolean,
      default: false,
    },
    truncate: {
      type: Boolean,
      default: false,
    },
    ui: {
      type: Object as PropType<Partial<typeof appConfig.ui.button>>,
      default: () => appConfig.ui.button,
    },
    roundedOff: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, { attrs }) {
    const slots = useSlots()

    const ui = computed(() => appConfig.ui.button)

    const isLeading = computed(() => {
      return (
        (props.icon && props.leading) ||
        (props.icon && !props.trailing) ||
        (props.loading && !props.trailing) ||
        props.leadingIcon
      )
    })

    const isTrailing = computed(() => {
      return (
        (props.icon && props.trailing) ||
        (props.loading && props.trailing) ||
        props.trailingIcon
      )
    })

    const isSquare = computed(
      () => props.square || (!slots.default && !props.label),
    )

    const buttonClass = computed(() => {
      const variant =
        ui.value.color?.[props.color]?.[props.variant] ||
        ui.value.variant[props.variant]

      return classNames(
        ui.value.base,
        ui.value.font,
        props.roundedOff ? '' : ui.value.rounded,
        ui.value.size[props.size],
        ui.value.gap[props.size],
        props.padded &&
          ui.value[isSquare.value ? 'square' : 'padding'][props.size],
        variant?.replaceAll('{color}', props.color),
        props.block
          ? 'w-full flex justify-center items-center'
          : 'inline-flex items-center',
        props.fw ? 'min-w-[6rem] justify-center' : '',
      )
    })

    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon
      }

      return props.leadingIcon || props.icon
    })

    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon
      }

      return props.trailingIcon || props.icon
    })

    const leadingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        ui.value.icon.size[props.size],
        props.loading && 'animate-spin',
      )
    })

    const trailingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        ui.value.icon.size[props.size],
        props.loading && !isLeading.value && 'animate-spin',
      )
    })

    return {
      attrs: computed(() => omit(attrs, ['class'])),
      isLeading,
      isTrailing,
      isSquare,
      buttonClass,
      leadingIconName,
      trailingIconName,
      leadingIconClass,
      trailingIconClass,
    }
  },
})
</script>
