<template>
  <li v-if="item.disabled">
    <span
      class="flex items-center px-2 py-2 text-gray-400 group text-sm cursor-not-allowed"
      :class="myClass"
    >
      <span :class="textSpanClass">{{ item.label($t) }}</span>
      <span
        v-if="item.count"
        class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm text-blue-800 bg-blue-100 rounded-full text-sm"
        >{{ item.count }}</span
      >
    </span>
  </li>
  <li v-else-if="item.noLink">
    <span
      class="flex items-center px-2 py-2 text-white hover:bg-zbgray-600 group text-sm cursor-pointer"
      :class="myClass"
      @click="onClick"
    >
      <span :class="textSpanClass">{{ item.label($t) }}</span>
      <span
        v-if="item.count"
        class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm text-blue-800 bg-blue-100 rounded-full text-sm"
        >{{ item.count }}</span
      >
    </span>
  </li>
  <li v-else-if="item.href">
    <a
      :href="item.href"
      :target="item.targetBlank ? '_blank' : ''"
      class="flex items-center px-2 py-2 text-white hover:bg-gray-100 group text-sm"
      :class="myClass"
    >
      <!-- <span :class="textSpanClass">{{ item.label($t) }}<ZIcon v-if="item.icon" class="ml-1 relative top-0.5" :name="item.icon.ztype" /></span> -->
      <span
        v-if="item.count"
        class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm text-blue-800 bg-blue-100 rounded-full text-sm"
        >{{ item.count }}</span
      >
      <span
        v-if="item.badge"
        class="inline-flex items-center justify-center px-2 ml-3 text-sm text-white bg-gray-100 rounded-full text-sm"
        >{{ item.badge }}</span
      >
    </a>
  </li>
  <li v-else>
    <NuxtLink
      :to="{ name: item.to }"
      class="flex items-center px-2 py-2 text-white hover:bg-zbgray-600 group text-sm"
      :class="myClass"
    >
      <!-- <span :class="textSpanClass">{{ item.label($t) }}<ZIcon v-if="item.icon" class="ml-1 relative top-0.5" :name="item.icon.ztype" /></span> -->
      <span
        v-if="item.count"
        class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm text-blue-800 bg-blue-100 rounded-full text-sm"
        >{{ item.count }}</span
      >
      <span
        v-if="item.badge"
        class="inline-flex items-center justify-center px-2 ml-3 text-sm text-gray-600 bg-gray-100 rounded-full text-sm"
        >{{ item.badge }}</span
      >
    </NuxtLink>
  </li>
</template>

<script setup lang="ts">
// import { classNames } from '@/components/Z/utils/'
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  isInner: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits([
  'on-click',
])

const textSpanClass = computed(() => {
  // return classNames(
  //   props.isInner ? '' : 'ml-2',
  //   props.item.count || props.item.badge ? 'flex-1 whitespace-nowrap' : '',
  // )
  return ''
})

const myClass = computed(() => {
  // return classNames(
  //   props.isInner ? 'pl-7' : '',
  // )
  return ''
})

const $t = (text: string) => {
  return text
}

const onClick = () => {
  emit('on-click')
}
</script>

<style scoped>
.router-link-active, .router-link-exact-active {
  @apply bg-zbgray-800 border-r-4 border-primary-500;
}
</style>
