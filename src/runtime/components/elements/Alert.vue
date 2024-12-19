<template>
  <div
    class="flex items-center p-1 text-sm border rounded"
    :class="myClass"
    role="alert"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    default: 'primary',
  },
})

const myClass = computed(() => {
  return `border-${props.color}-300 text-${props.color}-600 bg-${props.color}-50`
})
</script>

<style lang="scss" scoped></style>
