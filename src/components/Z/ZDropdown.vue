<template>
  <HMenu
    v-slot="{ open }"
    as="div"
    :class="ui.wrapper"
    @mouseleave="onMouseLeave"
  >
    <HMenuButton
      ref="trigger"
      as="div"
      :disabled="disabled"
      class="inline-flex w-full"
      role="button"
      @mouseover="onMouseOver"
    >
      <slot :open="open" :disabled="disabled">
        <ZButton
          :color="color"
          :size="size"
          :variant="variant"
          :disabled="disabled"
          trailing-icon="icon-down-open-mini"
          >{{ label }}</ZButton
        >
      </slot>
    </HMenuButton>

    <div
      v-if="open && myOptions.length"
      ref="container"
      :class="[ui.container, ui.width]"
      :style="containerStyle"
      @mouseover="onMouseOver"
    >
      <Transition appear v-bind="ui.transition">
        <HMenuItems
          :class="[
            ui.base,
            ui.divide,
            ui.ring,
            ui.rounded,
            ui.shadow,
            ui.background,
            ui.height,
            menuClasses,
          ]"
          static
        >
          <div v-if="searchable" class="p-2">
            <ZInput v-model="searchWord" />
          </div>
          <div v-for="(subItems, index) of myOptions" :key="index">
            <HMenuItem
              v-for="(item, subIndex) of subItems"
              :key="subIndex"
              v-slot="{ active, disabled: itemDisabled }"
              :disabled="item.disabled"
            >
              <ZLinkCustom
                v-bind="
                  omit(item, [
                    'label',
                    'icon',
                    'iconClass',
                    'avatar',
                    'shortcuts',
                    'click',
                  ])
                "
                :class="[
                  ui.item.base,
                  ui.item.padding,
                  ui.item.size,
                  ui.item.rounded,
                  active ? ui.item.active : ui.item.inactive,
                  itemDisabled && ui.item.disabled,
                ]"
                @click="item.click ? item.click() : onClick(item)"
              >
                <slot :name="item.slot || 'item'" :item="item">
                  <template v-if="propsMultiple">
                    <ZCheckbox :modelValue="item.selected" />
                  </template>
                  <!-- <ZIcon v-if="item.icon" :name="item.icon" :class="[ui.item.icon.base, active ? ui.item.icon.active : ui.item.icon.inactive, item.iconClass]" /> -->
                  <span class="truncate">{{ item[optionsLabel] }}</span>
                </slot>
              </ZLinkCustom>
            </HMenuItem>
          </div>
        </HMenuItems>
      </Transition>
    </div>
  </HMenu>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue'
import type { PropType } from 'vue'
import {
  Menu as HMenu,
  MenuButton as HMenuButton,
  MenuItems as HMenuItems,
  MenuItem as HMenuItem,
} from '@headlessui/vue'
import { omit } from './utils/lodash'
import { usePopper } from './composables/usePopper'
import appConfig from './appConfig'
import { RouteLocationRaw } from './types/dropdown'
type ColorKey = keyof typeof appConfig.ui.button.color
type VariantKey = keyof typeof appConfig.ui.button.variant
type SizeKey = keyof typeof appConfig.ui.button.size
type Mode = 'click' | 'hover'

type Props = {
  color: ColorKey
  variant: VariantKey
  size: SizeKey
}

export type Option = {
  label?: string
  value?: string
  disabled?: boolean
  click?: () => void
  to?: RouteLocationRaw
  slot?: string
  [key: string]:
    | string
    | number
    | boolean
    | undefined
    | (() => void)
    | RouteLocationRaw
}

type MenuApi = {
  openMenu?: () => void
  closeMenu?: () => void
  menuState: number
}

export default defineComponent({
  components: {
    HMenu,
    HMenuButton,
    HMenuItems,
    HMenuItem,
  },
  props: {
    options: {
      type: Array<Option> || Array<Array<Option>>,
      default: () => [],
    },
    optionsLabel: {
      type: String,
      default: 'label',
    },
    label: {
      type: String,
      default: 'label',
    },
    searchable: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String as PropType<Props['size']>,
      default: () => appConfig.ui.button.default.size,
      validator(value: string) {
        return Object.keys(appConfig.ui.button.size).includes(value)
      },
    },
    color: {
      type: String as PropType<Props['color']>,
      default: 'gray',
    },
    variant: {
      type: String as PropType<Props['variant']>,
      default: () => appConfig.ui.button.default.variant,
      validator(value: string) {
        return [
          ...Object.keys(appConfig.ui.button.variant),
          ...Object.values(appConfig.ui.button.color).flatMap((value) =>
            Object.keys(value),
          ),
        ].includes(value)
      },
    },
    mode: {
      type: String as PropType<Mode>,
      default: 'click',
      validator: (value: Mode) => {
        return ['click', 'hover'].includes(value)
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    popper: {
      type: Object,
      default: () => ({}),
    },
    openDelay: {
      type: Number,
      default: 50,
    },
    closeDelay: {
      type: Number,
      default: 0,
    },
    menuClasses: {
      type: String,
      default: '',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['on-click'],
  setup(props, ctx) {
    const ui = computed(() => appConfig.ui.dropdown)
    const popper = computed(() => {
      return props.popper
    })

    const searchWord = ref('')

    // menuの表示位置を設定
    const myPoper: unknown = popper.value.placement
      ? Object.assign(popper.value, { strategy: 'fixed' })
      : { placement: 'bottom-start', strategy: 'fixed' }
    // @ts-ignore
    const [trigger, container] = usePopper(myPoper)
    const menuApi = ref<MenuApi | null>(null)
    let openTimeout: number | null = null
    let closeTimeout: number | null = null

    // フラットの配列ならネストする、ネストされた配列ならそのまま返す
    const myOptions = computed(() => {
      const data: Array<Option> | Array<Array<Option>> = props.options
      let newData = []
      if (Array.isArray(data[0])) {
        // すでにネストされた配列の場合、そのまま返す
        // @ts-ignore
        newData = data as Array<Array<Option>>
      } else {
        // ネストされた配列でない場合、新しいネストされた配列を作成して返す
        // @ts-ignore
        newData = [data]
      }

      // 検索ワードがある場合、検索ワードにマッチするものだけを返す
      const searchWordValue = searchWord.value
      if (searchWordValue !== '' && props.searchable) {
        // @ts-ignore
        newData = newData.map((subItems) => {
          // @ts-ignore
          return subItems.filter((item) => {
            // labelを小文字に変換して検索する
            // @ts-ignore
            return item[props.optionsLabel]
              // @ts-ignore
              .toLowerCase()
              .includes(searchWordValue.toLowerCase())
          })
        })
      }
      return newData
    })

    onMounted(() => {
      setTimeout(() => {
        // TODO: $の型を正しくつけたい
        // @ts-ignore
        const menuProvides = trigger.value?.$.provides
        if (!menuProvides) {
          return
        }
        const menuProvidesSymbols = Object.getOwnPropertySymbols(menuProvides)
        menuApi.value =
          menuProvidesSymbols.length && menuProvides[menuProvidesSymbols[0]]
      }, 200)

      // menuApiのmenuStateを監視し、変更があった際に処理を実行
      watch(
        () => menuApi.value?.menuState,
        (newState, oldState) => {
          if (newState !== oldState && newState === 0) {
            // メニューが開いたとき、検索ワードをリセットする
            searchWord.value = ''
          }
        },
      )
    })
    const containerStyle = computed(() => {
      if (props.mode !== 'hover') {
        return {}
      }

      return {}
    })
    function onMouseOver() {
      if (props.mode !== 'hover' || !menuApi.value) {
        return
      }
      if (closeTimeout) {
        clearTimeout(closeTimeout)
        closeTimeout = null
      }
      if (menuApi.value.menuState === 0) {
        return
      }
      if (openTimeout === null) {
        openTimeout = window.setTimeout(() => {
          if (menuApi.value) {
            menuApi.value.openMenu && menuApi.value.openMenu()
          }
          openTimeout = null
        }, props.openDelay)
      }
    }
    function onMouseLeave() {
      if (props.mode !== 'hover' || !menuApi.value) {
        return
      }
      if (openTimeout) {
        clearTimeout(openTimeout)
        openTimeout = null
      }
      if (menuApi.value.menuState === 1) {
        return
      }
      if (closeTimeout === null) {
        closeTimeout = window.setTimeout(() => {
          if (menuApi.value) {
            menuApi.value.openMenu && menuApi.value.openMenu()
          }
          closeTimeout = null
        }, props.openDelay)
      }
    }

    const onClick = (option: Option) => {
      ctx.emit('on-click', option)
    }

    return {
      ui,
      trigger,
      container,
      containerStyle,
      onMouseOver,
      onMouseLeave,
      omit,
      onClick,
      myOptions,
      searchWord,
      propsMultiple: props.multiple,
    }
  },
})
</script>
