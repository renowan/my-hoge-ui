<template>
  <Menu v-slot="{ open }" as="div" class="relative">
    <MenuButton
      as="div"
      class="flex py-1 px-2 rounded items-center cursor-pointer hover:bg-gray-100"
    >
      <ZIcon
        name="i-heroicons-user-circle"
        class="text-gray-600 text-2xl mr-1"
      />
      <span class="text-gray-600 text-sm">ホゲ太郎</span>
      <ZIcon name="i-heroicons-chevron-down-20-solid" class="ml-1" />
    </MenuButton>
    <div v-if="open" class="z-20 w-48 pt-1 absolute right-0 left-auto">
      <MenuItems>
        <div
          class="relative focus:outline-none overflow-y-auto scroll-py-1 divide-y divide-gray-200 ring-1 ring-gray-200 rounded shadow-lg bg-white bg-white"
        >
          <ul>
            <li
              class="group flex items-center gap-2 w-full px-2 py-1.5 text-sm text-gray-600 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              プロフィール設定
            </li>
            <li
              class="group flex items-center gap-2 w-full px-2 py-1.5 text-sm text-gray-600 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              言語設定
            </li>
            <li
              class="group flex items-center gap-2 w-full px-2 py-1.5 text-sm text-gray-600 dark:text-gray-200 hover:bg-gray-100 cursor-pointer"
            >
              ログアウト
            </li>
          </ul>
        </div>
      </MenuItems>
    </div>
  </Menu>
</template>

<script setup lang="ts">
import { Menu, MenuButton, MenuItems } from '@headlessui/vue'
</script>

<style lang="scss" scoped></style>
