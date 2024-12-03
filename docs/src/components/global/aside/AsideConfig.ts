import { sideBarItemConfig } from './AsideConfigTypes'

export const defaultConfig: sideBarItemConfig[] = [
  {
    to: 'index',
    label: ($t) => $t('Home'),
  },
  {
    label: ($t) => $t('UIライブラリ'),
    children: [
      {
        to: 'ui-sample',
        label: ($t) => $t('UIサンプル'),
      },
      {
        to: 'ui-alert',
        label: ($t) => $t('Alert'),
      },
      {
        to: 'ui-button',
        label: ($t) => $t('Button'),
      },
      {
        to: 'ui-input',
        label: ($t) => $t('Input'),
      },
      {
        to: 'ui-tabs',
        label: ($t) => $t('Tabs'),
      },
      {
        to: 'ui-select',
        label: ($t) => $t('Select'),
      },
      {
        to: 'ui-dropdown',
        label: ($t) => $t('Dropdown'),
      },
      {
        to: 'ui-modal',
        label: ($t) => $t('Modal'),
      },
      {
        to: 'ui-table',
        label: ($t) => $t('Table'),
      },
      {
        to: 'ui-text',
        label: ($t) => $t('Text'),
      },
      {
        to: 'ui-truncatetext',
        label: ($t) => $t('TruncateText'),
      },
      {
        to: 'ui-extendtext',
        label: ($t) => $t('ExtendText'),
      },
      {
        to: 'ui-pagination',
        label: ($t) => $t('Pagination'),
      },
      {
        to: 'ui-icon',
        label: ($t) => $t('Icon'),
      },
      {
        to: 'ui-spinner',
        label: ($t) => $t('Spinner'),
      },
      {
        to: 'ui-datePicker',
        label: ($t) => $t('DatePicker'),
      },
      {
        to: 'ui-appCommonModal',
        label: ($t) => $t('appCommonModal'),
      },
    ],
  },
  {
    label: ($t) => $t('デザインガイドライン'),
    children: [
      {
        to: 'sample-typography',
        label: ($t) => $t('Typography'),
      },
      {
        to: 'sample-colors',
        label: ($t) => $t('Colors'),
      },
      {
        to: 'sample-inputs',
        label: ($t) => $t('入力画面'),
      },
      {
        to: 'sample-validation',
        label: ($t) => $t('バリデーション'),
      },
      {
        to: 'sample-scroll-table',
        label: ($t) => $t('横スクロールテーブル'),
      },
      {
        to: 'sample-loading',
        label: ($t) => $t('Loading処理'),
      },
      {
        to: 'sample-dashboard',
        label: ($t) => $t('ダッシュボード'),
      },
    ],
  },
  {
    label: ($t) => $t('ページ再現'),
    children: [
      {
        to: 'other-c-activity-emissions-hubs',
        label: ($t) => $t('GHG排出'),
      },
    ],
  },
  {
    label: ($t) => $t('企業グループ申請・管理'),
    children: [
      {
        to: 'other-c-company-group-workflow-settings-approval-form',
        label: ($t) => $t('承認経路一覧'),
      },
      {
        to: 'other-c-company-group-workflow-settings-request-form',
        label: ($t) => $t('申請依頼管理'),
      },
      {
        to: 'other-c-company-group-workflow-settings-request-form-create',
        label: ($t) => $t('フォーム作成'),
      },
      {
        to: 'other-c-company-group-workflow-settings-request-form-progress',
        label: ($t) => $t('進捗一覧'),
      },
      {
        to: 'other-c-company-group-workflow-settings-request-form-hubs',
        label: ($t) => $t('拠点一覧'),
      },
      {
        to: 'other-c-company-group-workflow-settings-request-form-detail',
        label: ($t) => $t('申請詳細'),
      },
      {
        to: 'other-c-company-group-workflow-settings-request',
        label: ($t) => $t('申請'),
      },
    ],
  },
  {
    label: ($t) => $t('フィルター'),
    children: [
      {
        to: 'other-filter-sample-1',
        label: ($t) => $t('Filter1'),
      },
      {
        to: 'other-filter-sample-2',
        label: ($t) => $t('Filter2'),
      },
    ],
  },
  {
    to: 'sample-workspace',
    label: ($t) => $t('Workspace'),
  },
  {
    to: 'sample-input-test',
    label: ($t) => $t('input-test'),
  },
  {
    to: 'ui-sample',
    label: ($t) => $t('Disabled'),
    disabled: true,
  },
  {
    to: 'ui-sample',
    label: ($t) => $t('HasIcon'),
    icon: {
      type: 'document',
      ztype: 'i-heroicons-exclamation-triangle',
      color: 'text-zbgray-500',
    },
  },
  {
    to: 'ui-sample',
    label: ($t) => $t('HasIcon'),
    icon: {
      type: 'alert',
      ztype: 'i-heroicons-clipboard-document-list',
      color: 'text-zbyellow-500',
    },
  },
  {
    to: 'ui-sample',
    label: ($t) => $t('HasNumber'),
    count: 3,
  },
  {
    to: 'ui-sample',
    label: ($t) => $t('HasBagde'),
    badge: 'Pro',
  },
  {
    noLink: true,
    label: ($t) => $t('noLink'),
  },
  {
    href: 'https://zeroboard.jp/',
    targetBlank: true,
    label: ($t) => $t('href'),
  },
]
