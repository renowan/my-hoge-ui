<template>
  <ZModalBase
    :model-value="modelValue"
    :prevent-close="preventClose"
    :transition="false"
    :size="size"
    :no-close-on-backdrop="noCloseOnBackdrop"
    @close="onClickClose"
  >
    <ZCard
      :ui="{
        divide: 'divide-y divide-gray-100 dark:divide-gray-800',
        header: { padding: 'p-3' },
        footer: { padding: 'p-3' },
      }"
      :body-class="myBodyClass"
    >
      <template #header>
        <div class="flex justify-between items-center">
          <h4 class="text-gray-600 text-lg font-medium">{{ title }}</h4>
          <ZButton
            class="mr-1"
            :padded="false"
            color="gray"
            variant="ghost"
            tabindex="-1"
            @click="onClickClose"
          >
            <svg
              class="w-3 h-3 text-gray-400 hover:text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              ></path>
            </svg>
          </ZButton>
        </div>
      </template>

      <slot />

      <template #footer>
        <div class="text-right">
          <ZButton
            v-if="showCancel"
            class="mr-1"
            color="gray"
            variant="ghost"
            @click="onClickCancel"
            >{{ cancelLabel }}</ZButton
          >
          <ZButton
            v-if="showOk"
            :color="okColor"
            :disabled="okDisabled"
            variant="solid"
            @click="onClickOk"
            >{{ okLabel }}</ZButton
          >
        </div>
      </template>
    </ZCard>
  </ZModalBase>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue'
import { classNames } from '../../utils'
import ZModalBase from './ModalBase.vue'

const props = defineProps({
  title: { type: String, required: true },
  modelValue: { type: Boolean, default: false },
  preventClose: { type: Boolean, default: false },
  bodyClass: { type: String, default: 'p-4' },
  showOk: { type: Boolean, default: true },
  okDisabled: { type: Boolean, default: false },
  showCancel: { type: Boolean, default: true },
  noCloseOnBackdrop: { type: Boolean, default: false },
  okLabel: { type: String, default: 'OK' },
  okColor: { type: String, default: 'primary' },
  cancelLabel: { type: String, default: 'キャンセル' },
  size: { type: String as PropType<'sm' | 'md' | 'lg' | 'xl'>, default: 'md' },
})

const emit = defineEmits([
  'update:modelValue',
  'close',
  'ok',
  'on-cancel',
  'on-close',
])

const myBodyClass = computed(() => {
  return classNames(
    props.bodyClass,
    'overflow-y-auto',
    'max-h-[calc(100vh_-_220px)]',
  )
})

const onClickClose = () => {
  emit('update:modelValue', false)
  emit('on-close')
  emit('close')
}

const onClickCancel = () => {
  emit('update:modelValue', false)
  emit('on-cancel')
  emit('close')
}

const onClickOk = () => {
  emit('ok')
}
</script>
