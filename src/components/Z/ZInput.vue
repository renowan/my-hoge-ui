<template>
  <div :class="ui.wrapper">
    <input
      :id="name"
      ref="input"
      :name="name"
      :value="displayValue"
      :type="type"
      :required="required"
      :placeholder="String(placeholder)"
      :disabled="disabled || loading"
      class="form-input"
      :class="inputClass"
      :style="paddingRightStyle"
      v-bind="$attrs"
      @focus="onFocus"
      @keydown="onKeydown"
      @keyup.enter="onEnter"
      @input="onInput"
      @blur="onBlur"
    />
    <slot />

    <span
      v-if="(isLeading && leadingIconName) || $slots.leading"
      :class="leadingWrapperIconClass"
    >
      <slot name="leading" :disabled="disabled" :loading="loading">
        <UIcon :name="leadingIconName" :class="leadingIconClass" />
      </slot>
    </span>

    <span
      v-if="(isTrailing && trailingIconName) || $slots.trailing"
      :class="trailingWrapperIconClass"
    >
      <slot name="trailing" :disabled="disabled" :loading="loading">
        <UIcon :name="trailingIconName" :class="trailingIconClass" />
      </slot>
    </span>
    <span v-if="unit" ref="unitbox" :class="trailingWrapperIconClass">
      <span class="text-gray-500 dark:text-gray-400 text-xs">{{ unit }}</span>
    </span>
  </div>
</template>

<script lang="ts">
import { ref, computed, onMounted, defineComponent, watch } from "vue";
import type { PropType } from "vue";
import UIcon from "./ZIcon.vue";
import { useFormEvents } from "./composables/useFormEvents";
import { classNames, stringConvert } from "./utils";
import appConfig from "./appConfig";

export default defineComponent({
  components: {
    UIcon,
  },
  inheritAttrs: false,
  props: {
    modelValue: {
      type: [String, Number, Object] as PropType<string | number | null>,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    numeric: {
      type: Boolean,
      default: false,
    },
    name: {
      type: String,
      default: null,
    },
    placeholder: {
      type: [String, Number],
      default: "",
    },
    unit: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    autofocus: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      default: null,
    },
    loadingIcon: {
      type: String,
      default: () => appConfig.ui.input.default.loadingIcon,
    },
    leadingIcon: {
      type: String,
      default: null,
    },
    trailingIcon: {
      type: String,
      default: null,
    },
    trailing: {
      type: Boolean,
      default: false,
    },
    leading: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    padded: {
      type: Boolean,
      default: true,
    },
    // 数値をcommaで表示するか
    comma: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: () => appConfig.ui.input.default.size,
      validator(value: string) {
        return Object.keys(appConfig.ui.input.size).includes(value);
      },
    },
    color: {
      type: String,
      default: () => appConfig.ui.input.default.color,
      validator(value: string) {
        return [
          "",
          ...appConfig.ui.colors,
          ...Object.keys(appConfig.ui.input.color),
        ].includes(value);
      },
    },
    variant: {
      type: String,
      default: () => appConfig.ui.input.default.variant,
      validator(value: string) {
        return [
          ...Object.keys(appConfig.ui.input.variant),
          ...Object.values(appConfig.ui.input.color).flatMap((value) =>
            Object.keys(value)
          ),
        ].includes(value);
      },
    },
    ui: {
      type: Object as PropType<Partial<typeof appConfig.ui.input>>,
      default: () => appConfig.ui.input,
    },
  },
  emits: ["update:modelValue", "blur", "enter"],
  setup(props, { emit, slots, attrs }) {
    const ui = computed(() => appConfig.ui.input);

    const { emitFormBlur } = useFormEvents();

    const input = ref<HTMLInputElement | null>(null);
    const unitbox = ref<HTMLInputElement | null>(null);
    const isFocused = ref(false);
    const displayValue = ref<string>(
      props.modelValue ? String(props.modelValue) : ""
    );
    const internalValue = ref<string>(
      props.modelValue ? String(props.modelValue) : ""
    );

    // modelValueをwatchして、displayValueを更新する
    watch(
      () => props.modelValue,
      (newValue) => {
        const newValueString = String(newValue || "");
        if (
          newValue !== internalValue.value &&
          isNumber(newValueString) &&
          !isFocused.value
        ) {
          displayValue.value = newValueString;
          internalValue.value = newValueString;
          if (props.comma) {
            displayValue.value = addComma(displayValue.value);
          }
        }
      }
    );

    const autoFocus = () => {
      if (props.autofocus) {
        input.value?.focus();
      }
    };

    const onInput = (event: Event) => {
      const inputElement = event.target as HTMLInputElement;
      const newValue = inputElement.value;
      displayValue.value = newValue;
      internalValue.value = newValue;
      if (props.numeric) {
        // 入力条件に合わない場合は、元の値を返す

        if (!isNumber(newValue)) {
          emit("update:modelValue", props.modelValue);
          return;
        }

        emit("update:modelValue", newValue === "" ? null : Number(newValue));
        return;
      }
      emit("update:modelValue", newValue);
    };

    const isNumber = (value: string) => {
      const newValue = Number(value);
      return typeof newValue === "number" && !isNaN(newValue);
    };

    const addComma = (value: string) => {
      const [integerPart, decimalPart] = value.split(".");
      const formattedInteger = integerPart.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );
      return decimalPart
        ? `${formattedInteger}.${decimalPart}`
        : formattedInteger;
    };

    const onBlur = (event: FocusEvent) => {
      emitFormBlur();
      emit("blur", event);
      // 先頭に0がある場合は削除、正しい小数点が後ろにある場合は削除しない
      if (props.numeric) {
        if (input.value === null) {
          return;
        }
        displayValue.value = stringConvert(displayValue.value);

        if (displayValue.value === "") {
          emit("update:modelValue", null);
        } else {
          emit("update:modelValue", Number(displayValue.value));
        }

        // emitのあとにcomma処理
        if (props.comma) {
          displayValue.value = addComma(displayValue.value);
        }
      }

      isFocused.value = false;
    };

    const onFocus = () => {
      isFocused.value = true;
      displayValue.value = props.modelValue ? String(props.modelValue) : "";
    };

    const onEnter = () => {
      emit("enter");
    };

    const onKeydown = (event: KeyboardEvent) => {
      if (
        props.type === "number" &&
        attrs.min !== undefined &&
        // @ts-ignore
        attrs.min >= 0 &&
        event.key === "-"
      ) {
        event.preventDefault();
      }
    };

    onMounted(() => {
      setTimeout(() => {
        autoFocus();
      }, 100);
    });

    const inputClass = computed(() => {
      const color = props.color || "gray";
      const variant =
        // @ts-ignore
        ui.value.color?.[color as string]?.[props.variant as string] ||
        // @ts-ignore
        ui.value.variant[props.variant];

      let bgColor = props.disabled ? "bg-gray-100" : "bg-white";
      if (props.variant === "none") {
        bgColor = "";
      }

      return classNames(
        ui.value.base,
        ui.value.rounded,
        ui.value.placeholder,
        // @ts-ignore
        ui.value.size[props.size],
        // @ts-ignore
        props.padded ? ui.value.padding[props.size] : "p-0",
        variant?.replaceAll("{color}", color),
        (isLeading.value || slots.leading) &&
        // @ts-ignore
          ui.value.leading.padding[props.size],
        // @ts-ignore
        (isTrailing.value || slots.trailing) &&
        // @ts-ignore
          ui.value.trailing.padding[props.size],
        bgColor
      );
    });

    const paddingRightStyle = computed(() => {
      if (!props.unit) {
        return {};
      }
      // @ts-ignore
      const unitWidth = unitbox.value?.offsetWidth + 6 || 0;
      return props.unit?.length > 0 ? { paddingRight: `${unitWidth}px` } : {};
    });

    const isLeading = computed(() => {
      return (
        (props.icon && props.leading) ||
        (props.icon && !props.trailing) ||
        (props.loading && !props.trailing) ||
        props.leadingIcon
      );
    });

    const isTrailing = computed(() => {
      return (
        (props.icon && props.trailing) ||
        (props.loading && props.trailing) ||
        props.trailingIcon
      );
    });

    const leadingIconName = computed(() => {
      if (props.loading) {
        return props.loadingIcon;
      }

      return props.leadingIcon || props.icon;
    });

    const trailingIconName = computed(() => {
      if (props.loading && !isLeading.value) {
        return props.loadingIcon;
      }

      return props.trailingIcon || props.icon;
    });

    const leadingWrapperIconClass = computed(() => {
      return classNames(
        ui.value.icon.leading.wrapper,
        ui.value.icon.leading.pointer,
        // @ts-ignore
        ui.value.icon.leading.padding[props.size]
      );
    });

    const leadingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        // @ts-ignore
        appConfig.ui.colors.includes(props.color) &&
          ui.value.icon.color.replaceAll("{color}", props.color),
        // @ts-ignore
        ui.value.icon.size[props.size],
        props.loading && "animate-spin"
      );
    });

    const trailingWrapperIconClass = computed(() => {
      return classNames(
        ui.value.icon.trailing.wrapper,
        ui.value.icon.trailing.pointer,
        // @ts-ignore
        ui.value.icon.trailing.padding[props.size]
      );
    });

    const trailingIconClass = computed(() => {
      return classNames(
        ui.value.icon.base,
        // @ts-ignore
        appConfig.ui.colors.includes(props.color) &&
        // @ts-ignore
          ui.value.icon.color.replaceAll("{color}", props.color),
        // @ts-ignore
        ui.value.icon.size[props.size],
        props.loading && !isLeading.value && "animate-spin"
      );
    });

    displayValue.value = stringConvert(displayValue.value);
    if (props.comma) {
      displayValue.value = addComma(displayValue.value);
    }

    return {
      // eslint-disable-next-line vue/no-dupe-keys
      ui,
      input,
      unitbox,
      isLeading,
      isTrailing,
      inputClass,
      leadingIconName,
      leadingIconClass,
      leadingWrapperIconClass,
      trailingIconName,
      trailingIconClass,
      trailingWrapperIconClass,
      onInput,
      onBlur,
      onEnter,
      onKeydown,
      onFocus,
      paddingRightStyle,
      displayValue,
    };
  },
});
</script>
