<template>
  <div class="border-b border-gray-200">
    <ul :class="ulClasses">
      <ZTab
        v-for="(item, index) of options"
        :key="item.label"
        :item="item"
        :index="index"
        :is-active="index === modelValue"
        @on-click="onTabClick"
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import { TabOption } from '@/components/Z/ZTab.vue'

export type TabsOption = TabOption

const props = defineProps({
  // value: {
  //   type: [String, Number, Boolean],
  //   default: null,
  // },
  modelValue: {
    type: Number,
    default: 0,
  },
  options: {
    type: Array as PropType<TabsOption[]>,
    default: () => [],
  },
  id: {
    type: String,
    default: null,
  },
  name: {
    type: String,
    default: null,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  help: {
    type: String,
    default: null,
  },
  scrollableHorizontal: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['update:modelValue', 'change'])

const ulClasses = computed(() => {
  if (props.scrollableHorizontal) {
    return 'overflow-x-scroll whitespace-nowrap -mb-px'
  } else {
    return 'flex flex-wrap -mb-px'
  }
})

const onTabClick = (index: number) => {
  emit('update:modelValue', index)
  emit('change', index)
}
</script>
