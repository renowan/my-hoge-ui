<template>
    <nuxt-link :to="to" class="group flex gap-y-6 size-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-neutral-800 dark:focus:outline-none dark:focus:outline-none dark:focus:bg-neutral-800">
      <!-- <ZIcon :name="icon" class="text-2xl me-6" /> -->
      <div>
        <div>
          <h3 class="block font-bold text-gray-600 dark:text-white">{{title}}</h3>
          <p class="text-sm text-gray-600">{{ discription }}</p>
        </div>

        <p class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold text-primary-600">
          詳細へ
          <!-- <ZIcon name="icon-angle-right" /> -->
        </p>
      </div>
    </nuxt-link>
</template>

<script setup lang="ts">
const props = defineProps({
  to: {
    type: String,
    default: '/',
  },
  icon: {
    type: String,
    default: 'icon-book-1',
  },
  title: {
    type: String,
    default: 'title',
  },
  discription: {
    type: String,
    default: 'discription',
  },
})
</script>

<style lang="scss" scoped>
</style>
