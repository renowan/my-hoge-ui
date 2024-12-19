<template>
  <span :class="`text-${size}`" class="text-gray-600">
    {{ `${totalLabel}: ${total}` }}
    <ZButton
      color="gray"
      variant="ghost"
      :size="size"
      :padded="false"
      :disabled="!canGoPrev"
      @click="goPrev"
      ><ZIcon class="px-1" :class="`text-${size}`" name="icon-left-open-mini"
    /></ZButton>
    {{ modelValue }} / {{ maxPage }}
    <ZButton
      color="gray"
      variant="ghost"
      :size="size"
      :padded="false"
      :disabled="!canGoNext"
      @click="goNext"
      ><ZIcon class="px-1" :class="`text-${size}`" name="icon-right-open-mini"
    /></ZButton>
  </span>
</template>

<script setup lang="ts">
const props = defineProps({
  modelValue: {
    type: Number,
    required: true,
  },
  pageCount: {
    type: Number,
    default: 10,
  },
  total: {
    type: Number,
    required: true,
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md'>,
    default: 'sm',
  },
  totalLabel: {
    type: String,
    default: () => 'Total',
  },
})

const emit = defineEmits(['update:modelValue'])

const maxPage = computed(() => {
  return Math.ceil(props.total / props.pageCount)
})

const canGoNext = computed(() => {
  return props.modelValue < maxPage.value
})

const canGoPrev = computed(() => {
  return props.modelValue > 1
})

const goPrev = () => {
  if (props.modelValue > 1) {
    emit('update:modelValue', props.modelValue - 1)
  }
}

const goNext = () => {
  if (props.modelValue < maxPage.value) {
    emit('update:modelValue', props.modelValue + 1)
  }
}

watch(
  () => props.total,
  () => {
    if (props.modelValue === 1) {
      return
    }
    if (props.total <= (props.modelValue - 1) * props.pageCount) {
      emit('update:modelValue', props.modelValue - 1)
    }
  },
)
</script>
