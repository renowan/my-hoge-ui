<template>
  <label class="text-gray-400 text-sm inline-block"
    ><slot />
    <div
      v-if="!required && optional"
      class="inline text-zbgray-500 text-xs pl-2"
    >
      ({{ optionalLabel }})
    </div>
    <div v-if="required" class="inline text-zbred-500 text-xs pl-2">
      ({{ requiredLabel }})
    </div>
  </label>
</template>

<script lang="ts" setup>
import appGlobalConfig from '#build/app.config'

withDefaults(
  defineProps<{
    optional?: boolean
    required?: boolean
    optionalLabel?: string
    requiredLabel?: string
  }>(),
  {
    optional: false,
    required: false,
    optionalLabel: appGlobalConfig.ui?.defaultLabel?.formLabel?.optionalLabel || 'optional',
    requiredLabel: appGlobalConfig.ui?.defaultLabel?.formLabel?.requiredLabel || 'required',
  },
)
</script>
