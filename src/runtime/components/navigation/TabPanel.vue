<template>
  <div class="grid gap-2" :class="`md:grid-cols-${cols}`">
    <!-- <div class="md:grid-cols-2 md:grid-cols-3 md:grid-cols-4 md:grid-cols-5"></div> -->
    <ZTabPanelItem
      v-for="(option, index) in options"
      :key="index"
      v-model="pick"
      :option="option"
    />
  </div>
</template>

<script setup lang="ts">
import ZTabPanelItem from './ZTabPanelItem.vue'
type Option = {
  label: string
  description: string
  value: string | number
}
const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null,
  },
  options: { type: Array as PropType<Option[]>, default: () => [] },
})

const emit = defineEmits(['update:modelValue'])

const cols = computed(() => {
  return props.options.length
})

const pick = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
</script>
