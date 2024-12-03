<template>
  <div>hoge</div>
</template>

<script setup lang="ts">
import { RouteRecordName } from 'vue-router'
import ZAsideElm from './ZAsideElm.vue'
// import ZAccordion from '@/components/Z/ZAccordion.vue'
import { sideBarItemConfig } from '@/components/global/aside/AsideConfig'

const emit = defineEmits([
  'on-click',
])


const props = defineProps({
  itemGroup: {
    type: Object as PropType<sideBarItemConfig>,
    required: true,
  },
  currentRouterName: {
    type: String as () => RouteRecordName,
    default: '',
  },
})

const $t = (text: string) => {
  return text
}

const isOpen = ref(false)

if (props.itemGroup.children?.some((elm) => elm.to === props.currentRouterName)) {
  isOpen.value = true
}

const onClick = () => {
  emit('on-click')
}
</script>