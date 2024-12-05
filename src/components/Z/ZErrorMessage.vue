<template>
  <div v-if="hasError" class="text-danger-600 text-sm">
    <ul>
      <li v-for="(message, index) in messages" :key="index">
        {{ message }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  errorMessage: {
    type: [String, Array],
    required: false,
    default: '',
  },
})

const hasError = computed(() => {
  return props.errorMessage.length > 0
})

const messages = computed(() => {
  if (Array.isArray(props.errorMessage)) {
    return props.errorMessage
  }
  return props.errorMessage ? props.errorMessage.split(',') : []
})
</script>
