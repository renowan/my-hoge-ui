import { sideBarItemConfig } from './AsideConfigTypes'

export const componentsAsideConfig: sideBarItemConfig[] = [
  {
    to: 'components',
    label: ($t) => $t('Components'),
  },
  {
    label: ($t) => $t('Form'),
    children: [
      {
        to: 'components-input',
        label: ($t) => $t('Input'),
      },
      {
        to: 'components-inputBase',
        label: ($t) => $t('InputBase'),
      },
      {
        to: 'components-select',
        label: ($t) => $t('Select'),
      },
      {
        to: 'components-singleSelect',
        label: ($t) => $t('SingleSelect'),
      },
      {
        to: 'components-multiSelect',
        label: ($t) => $t('MultiSelect'),
      },
      {
        to: 'components-inputGroup',
        label: ($t) => $t('InputGroup'),
      },
      {
        to: 'components-inputSearch',
        label: ($t) => $t('InputSearch'),
      },
      {
        to: 'components-selectDisplay',
        label: ($t) => $t('SelectDisplay'),
      },
    ],
  },
  {
    label: ($t) => $t('テキスト'),
    children: [
      {
        to: 'components-text',
        label: ($t) => $t('Text'),
      },
      {
        to: 'components-truncatetext',
        label: ($t) => $t('TruncateText'),
      },
      {
        to: 'components-extendtext',
        label: ($t) => $t('ExtendText'),
      },
    ],
  },
  {
    label: ($t) => $t('overlays'),
    children: [
      {
        to: 'components-modal',
        label: ($t) => $t('Modal'),
      },
      // {
      //   to: 'components-slideover',
      //   label: ($t) => $t('Slideover'),
      // },
    ],
  },
  {
    to: 'components-button',
    label: ($t) => $t('Button'),
  },
  {
    to: 'components-sample',
    label: ($t) => $t('UIサンプル'),
  },
  {
    to: 'components-alert',
    label: ($t) => $t('Alert'),
  },
  {
    to: 'components-tabs',
    label: ($t) => $t('Tabs'),
  },
  {
    to: 'components-dropdown',
    label: ($t) => $t('Dropdown'),
  },
  {
    to: 'components-table',
    label: ($t) => $t('Table'),
  },

  {
    to: 'components-pagination',
    label: ($t) => $t('Pagination'),
  },
  {
    to: 'components-icon',
    label: ($t) => $t('Icon'),
  },
  {
    to: 'components-spinner',
    label: ($t) => $t('Spinner'),
  },
  {
    to: 'components-datePicker',
    label: ($t) => $t('DatePicker'),
  },
  {
    to: 'components-appCommonModal',
    label: ($t) => $t('appCommonModal'),
  },
]