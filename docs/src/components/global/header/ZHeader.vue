<template>
  <header class="sticky top-0 z-50 w-full border-b border-gray-200 bg-white">
    <div class="flex mx-auto px-2 lg:px-4">
      <div class="flex h-16">
        <div class="flex items-center mr-12">
          <nuxt-link class="flex items-center hover:cursor-pointer" to="/">
            <img src="@/assets/img/logo.svg" class="my3 h-8 w-auto" alt="" />
          </nuxt-link>
        </div>
        <!-- border-b-[3px] border-primary-600 -->
        <div
          v-for="(item, index) in headerMenu"
          :key="index"
          :item="item"
          class="flex text-sm text-gray-600 font-bold items-center border-b-[3px] mr-2 pt-1"
          :class="
            route.path.includes(item.path, 0)
              ? 'border-primary-600'
              : 'border-transparent'
          "
        >

        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute()

const headerMenu = [
  { label: '基本', path: '/foundations' },
  { label: 'コンポーネント', path: '/components' },
  { label: 'レイアウトパターン', path: '/layouts' },
  { label: 'その他', path: '/other' },
]
</script>

<style lang="scss" scoped></style>
