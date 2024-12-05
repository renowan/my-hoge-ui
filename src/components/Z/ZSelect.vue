<template>
  <div class="relative">
    <select
      :id="name"
      class="form-select"
      :class="selectClass"
      :disabled="disabled"
      :name="name"
      :value="modelValue"
      @input="onInput"
      @change="onChange"
    >
      <option v-if="!options.length" value="" disabled>{{ noOptionsLabel }}</option>
      <option
        v-for="(item, index) in options"
        :key="index"
        :value="item[optionsValue]"
        :disabled="Boolean(item.disabled)"
      >
        {{ item[optionsLabel] }}
      </option>
    </select>
    <ZErrorMessage
      v-if="errorMessage && showError === true"
      :error-message="errorMessage"
      class="mt-1"
    />
    <!-- <span class="absolute inset-y-0 end-0 flex items-center pointer-events-none pe-2.5">
      <span class="i-heroicons-chevron-down-20-solid flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5" aria-hidden="true"></span>
    </span> -->
  </div>
</template>

<script lang="ts" setup>
import { computed, PropType } from 'vue'
import type { DropdownItem, SelectSize, SelectColor, SelectVariant, SelectConfig } from './types'
import appConfig from './appConfig'
import { classNames } from './utils'

const props = defineProps({
  modelValue: {
    type: [String, Number, Object],
    default: '',
  },
  options: {
    type: Array as PropType<DropdownItem[]>,
    default: () => [],
  },
  name: {
    type: String,
    default: null,
  },
  optionsLabel: {
    type: String,
    default: 'label',
  },
  optionsValue: {
    type: String,
    default: 'value',
  },
  noOptionsLabel: {
    type: String,
    default: 'No options',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<SelectSize>,
    default: () => appConfig.ui.select.default.size,
    validator(value: string) {
      return ['2xs', 'xs', 'sm', 'md', 'lg', 'xl'].includes(value)
    },
  },
  status: {
    type: String as PropType<SelectColor>,
    default: () => appConfig.ui.select.default.color,
    validator(value: string) {
      return ['white', 'gray'].includes(value)
    },
  },
  variant: {
    type: String as PropType<SelectVariant>,
    default: () => appConfig.ui.select.default.variant,
    validator(value: string) {
      return ['outline', 'none'].includes(value)
    },
  },
  errorMessage: {
    type: String,
    required: false,
    default: '',
  },
  showError: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const ui = computed(() => appConfig.ui.select as unknown as SelectConfig)
const emit = defineEmits(['update:modelValue', 'change'])

const onInput = (event: Event) => {
  emit('update:modelValue', (event.target as HTMLInputElement).value)
}

const selectClass = computed(() => {
  const variant = 
    ui.value.color[props.status]?.[props.variant] ||
    ui.value.variant[props.variant]

  return classNames(
    ui.value.base,
    ui.value.bgColor,
    ui.value.rounded,
    ui.value.size[props.size],
    ui.value.padding[props.size],
    variant?.replaceAll('{color}', props.status),
    'pe-9',
  )
})

const onChange = (event: Event) => {
  emit('change', event)
}
</script>
