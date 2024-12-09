<template>
  <button
    v-if="!to || disabled"
    :type="type"
    :disabled="disabled"
    v-bind="$attrs"
    :class="inactiveClass"
  >
    <slot />
  </button>
  <component
    :is="resolveLink"
    v-else
    v-slot="{
      route,
      href,
      target,
      rel,
      navigate,
      isActive,
      isExactActive,
      isExternal,
    }"
    v-bind="$props"
    custom
  >
    <a
      v-bind="$attrs"
      :href="!disabled ? href : undefined"
      :aria-disabled="disabled ? 'true' : undefined"
      :role="!disabled ? 'link' : undefined"
      :rel="rel"
      :target="target"
      :class="resolveLinkClass(route, $route, { isActive, isExactActive })"
      @click="(e) => !disabled && !isExternal && navigate(e)"
    >
      <slot v-bind="{ isActive: exact ? isExactActive : isActive }" />
    </a>
  </component>
</template>

<script lang="ts">
import { computed, resolveComponent, PropType } from "vue";
import isEqual from "lodash/isEqual";
import { defineComponent } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    to: {
      type: [String, Object],
      default: null,
    },
    type: {
      type: String as PropType<'button' | 'submit' | 'reset' | undefined>,
      default: "button",
    },
    disabled: {
      type: Boolean,
      default: null,
    },
    exact: {
      type: Boolean,
      default: false,
    },
    exactQuery: {
      type: Boolean,
      default: false,
    },
    exactHash: {
      type: Boolean,
      default: false,
    },
    inactiveClass: {
      type: String,
      default: undefined,
    },
  },
  setup(props) {
    // Dynamically resolve the link component based on environment
    const resolveLink = computed(() => {
      try {
        // Check if we're in a Nuxt environment
        // @ts-ignore
        const nuxt = import.meta.env.SSR !== undefined;
        return nuxt
          ? resolveComponent("NuxtLink")
          : resolveComponent("RouterLink");
      } catch {
        // Fallback to RouterLink if not in Nuxt environment
        return "RouterLink";
      }
    });

    function resolveLinkClass(
      route,
      $route,
      { isActive, isExactActive }: { isActive: boolean; isExactActive: boolean }
    ) {
      // @ts-ignore
      if (props.exactQuery && !isEqual(route.query, $route.query)) {
        // @ts-ignore
        return props.inactiveClass;
      }
      // @ts-ignore
      if (props.exactHash && route.hash !== $route.hash) {
        // @ts-ignore
        return props.inactiveClass;
      }
      // @ts-ignore
      if (props.exact && isExactActive) {
        // @ts-ignore
        return props.activeClass;
      }
      // @ts-ignore
      if (!props.exact && isActive) {
        // @ts-ignore
        return props.activeClass;
      }
      // @ts-ignore
      return props.inactiveClass;
    }

    return {
      resolveLinkClass,
      resolveLink,
    };
  },
});
</script>
