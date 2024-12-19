<template>
  <li class="mr-2 inline-block text-sm font-medium text-center text-gray-500">
    <a
      :class="classes"
      class="inline-block p-2 border-b-2 rounded-t-lg cursor-pointer"
      @click="onClick"
    >
      <ZIcon
        v-if="item?.iconName"
        :name="item.iconName"
        class="mr-1"
        :class="isActive && item?.iconColor ? item.iconColor : ''"
      />
      <span>{{ item?.label }}</span>
    </a>
  </li>
</template>

<script setup lang="ts">
export type TabOption = {
  label: string
  index: number
  iconName?: string
  iconColor?: string
}

const props = defineProps({
  index: {
    type: Number,
    default: 0,
  },
  isActive: {
    type: Boolean,
    default: false,
  },
  item: {
    type: Object as PropType<TabOption | null>,
    default: () => null,
  },
})

const emit = defineEmits(['onClick'])

const classes = computed(() => {
  return props.isActive
    ? ['text-primary-600', 'border-primary-600', 'active']
    : [
        'border-transparent',
        'hover:text-gray-600',
        'hover:border-gray-300',
        'dark:hover:text-gray-300',
      ]
})

const onClick = () => {
  emit('onClick', props.index)
}
</script>
