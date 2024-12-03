<template>
  <aside
    class="flex-none bg-zbgray-700 overflow-y-auto border-r border-slate-200 duration-200 ease-in-out" :class="isFolder ? 'w-14' : 'w-52'"
    aria-label="Sidebar"
  >
    <div v-if="isFolder" class="h-full py-3">
      <div class="px-3 py-1 text-right">
        <a @click="onClickFolderBtn">
          <!-- <ZIcon name="icon-right-open-big" class="text-white text-2xl hover:text-gray-300 hover:cursor-pointer" /> -->
        </a>
      </div>
    </div>
    <div v-if="!isFolder" class="h-full py-3">
      <div class="px-3 py-1 text-right">
        <a @click="onClickFolderBtn">
          <!-- <ZIcon name="icon-left-open-big" class="text-white text-2xl hover:text-gray-300 hover:cursor-pointer" /> -->
        </a>
      </div>
      <ul>
        <template v-for="(item, index) in defaultConfig" :key="index">
          <template v-if="item.children">
            <ZAsideElmAccordion :item-group="item" :current-router-name="currentRouterName" @on-click="onClick" />
          </template>
          <template v-else>
            <ZAsideElm :item="item" @on-click="onClick" />
            </template>
        </template>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts">
import ZAsideElm from './aside/ZAsideElm.vue'
import ZAsideElmAccordion from '@/components/global/aside/ZAsideElmAccordion.vue'
import { sideBarItemConfig } from '@/components/global/aside/AsideConfigTypes'
// import { defaultConfig } from '@/components/global/aside/AsideConfig'
import { foundationsAsideConfig } from '@/components/global/aside/foundationsAsideConfig'
import { layoutsAsideConfig } from '@/components/global/aside/layoutsAsideConfig'
import { componentsAsideConfig } from '@/components/global/aside/componentsAsideConfig'
import { otherAsideConfig } from '@/components/global/aside/otherAsideConfig'

const emit = defineEmits([
  'openFeedbackWidget',
])

const route = useRoute()
const currentRouterName = computed(() => route.name || '')

const onClick = (item: sideBarItemConfig) => {
  if (item?.name === 'common.sidebar.contactAndQuestions') {
    emit('openFeedbackWidget')
  }
}

const isFolder = ref(false)

const onClickFolderBtn = () => {
  isFolder.value = !isFolder.value
}

const defaultConfig = ref<sideBarItemConfig[]>([])

watch(
  () => route.path,
  (newPath) => {
    updateAsideConfig(newPath)
  },
)

const updateAsideConfig = (path: string) => {
  if (path.includes('/foundation', 0)) {
    defaultConfig.value = foundationsAsideConfig
  } else if (path.includes('/layouts', 0)) {
    defaultConfig.value = layoutsAsideConfig
  } else if (path.includes('/components', 0)) {
    defaultConfig.value = componentsAsideConfig
  } else if (path.includes('/other', 0)) {
    defaultConfig.value = otherAsideConfig
  } else {
    defaultConfig.value = foundationsAsideConfig
  }
}

updateAsideConfig(route.path)
</script>
