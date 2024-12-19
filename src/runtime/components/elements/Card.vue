<template>
  <component
    :is="$attrs.onSubmit ? 'form' : as"
    :class="[ui.base, ui.rounded, ui.divide, ui.ring, ui.shadow, ui.background]"
    v-bind="$attrs"
  >
    <div
      v-if="$slots.header"
      :class="[ui.header.base, ui.header.padding, ui.header.background]"
    >
      <slot name="header" />
    </div>
    <div
      :class="[
        ui.body.base,
        bodyClass ? bodyClass : ui.body.padding,
        ui.body.background,
      ]"
    >
      <slot />
    </div>
    <div
      v-if="$slots.footer"
      :class="[ui.footer.base, ui.footer.padding, ui.footer.background]"
    >
      <slot name="footer" />
    </div>
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import appConfig from '../appConfig'

export default defineComponent({
  inheritAttrs: false,
  props: {
    as: {
      type: String,
      default: 'div',
    },
    bodyClass: {
      type: String,
      default: '',
    },
  },
  setup() {
    const ui = computed(() => appConfig.ui.card)
    return {
      ui,
    }
  },
})
</script>
