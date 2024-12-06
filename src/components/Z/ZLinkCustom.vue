<template>
  <button v-if="!$attrs.to" v-bind="$attrs" :class="inactiveClass">
    <slot />
  </button>
  <component
    :is="resolveLink"
    v-else
    v-slot="{ href, navigate, exact, isActive, isExactActive }"
    :to="$attrs.to"
    custom
  >
    <a
      v-bind="$attrs"
      :href="href"
      :class="resolveLinkClass({ isActive, isExactActive })"
      @click="navigate"
    >
      <slot v-bind="{ isActive: exact ? isExactActive : isActive }" />
    </a>
  </component>
</template>

<script setup lang="ts">
import { computed, resolveComponent } from "vue";

const props = defineProps({
  activeClass: {
    type: String,
    default: "",
  },
  inactiveClass: {
    type: String,
    default: "",
  },
});

// Dynamically resolve the link component based on environment
const resolveLink = computed(() => {
  try {
    // Check if we're in a Nuxt environment
    const nuxt = import.meta.env.SSR !== undefined;
    return nuxt ? resolveComponent("NuxtLink") : resolveComponent("RouterLink");
  } catch {
    // Fallback to RouterLink if not in Nuxt environment
    return "RouterLink";
  }
});

function resolveLinkClass({
  isActive,
  isExactActive,
}: {
  isActive: boolean;
  isExactActive: boolean;
}) {
  if (isActive || isExactActive) {
    return props.activeClass;
  }

  return props.inactiveClass;
}
</script>
