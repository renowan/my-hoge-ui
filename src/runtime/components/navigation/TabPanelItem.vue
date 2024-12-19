<template>
  <div
    class="flex pl-4 border rounded p-3 cursor-pointer"
    :class="checked ? 'border-primary-500 bg-primary-50' : 'border-gray-200'"
    @click="updateValue"
  >
    <div class="flex">
      <div class="flex items-center h-5">
        <input
          :id="name"
          :name="name"
          aria-describedby="helper-radio-text"
          type="radio"
          :value="option.value"
          :checked="checked"
          class="h-4 w-4 disabled:opacity-50 disabled:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:ring-offset-transparent bg-white border border-gray-300 focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white text-primary-500 form-radio"
          @input="updateValue"
        />
      </div>
      <div class="ml-2 text-sm">
        <label for="helper-radio" class="font-medium text-gray-600">{{
          option.label
        }}</label>
        <p
          v-if="option.description"
          id="helper-radio-text"
          class="text-xs font-normal text-gray-400"
        >
          {{ option.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
type Option = {
  label: string
  description: string
  value: [string, number]
}

const props = defineProps({
  modelValue: {
    type: [String, Number, Boolean, Object],
    default: null,
  },
  option: {
    type: Object as PropType<Option>,
    required: true,
  },
  name: {
    type: String,
    default: 'tab-panel',
  },
})

const emit = defineEmits(['update:modelValue'])

const checked = ref(props.modelValue === props.option.value)
const updateValue = () => {
  emit('update:modelValue', props.option.value)
}

watchEffect(() => {
  checked.value = props.modelValue === props.option.value
})
</script>
