import { sideBarItemConfig } from './AsideConfigTypes'

export const otherAsideConfig: sideBarItemConfig[] = [
  { 
    to: 'other',
    label: ($t) => $t('other'),
  },
  {
    label: ($t) => $t('ページサンプル'),
    children: [
      {
        to: 'other-c-activity-emissions-hubs',
        label: ($t) => $t('GHG排出'),
      },
      {
        to: 'other-c-campanySelector',
        label: ($t) => $t('会社選択'),
      },
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
      {
        to: 'other-c-setting-company',
        label: ($t) => $t('企業情報'),
      },
      {
        to: 'other-c-setting-users',
        label: ($t) => $t('ユーザー管理'),
      },
      {
        to: 'other-sample-list-icon',
        label: ($t) => $t('ListIcon'),
      },
    ],
  },
  {
    label: ($t) => $t('その他'),
    children: [
      {
        to: 'other-sample-workspace',
        label: ($t) => $t('Workspace'),
      },
      {
        to: 'other-sample-input-test',
        label: ($t) => $t('input-test'),
      },
      {
        to: 'other-sample-mailer',
        label: ($t) => $t('メーラータイプ'),
      },
      {
        to: 'components-sample',
        label: ($t) => $t('Disabled'),
        disabled: true,
      },
    ],
  },
  {
    label: ($t) => $t('アイコンサンプル'),
    children: [
      {
      to: 'components-sample',
      label: ($t) => $t('HasIcon'),
      icon: {
        type: 'document',
        ztype: 'i-heroicons-exclamation-triangle',
        color: 'text-zbgray-500',
      },
    },
    {
      to: 'components-sample',
      label: ($t) => $t('HasIcon'),
      icon: {
        type: 'alert',
        ztype: 'i-heroicons-clipboard-document-list',
        color: 'text-zbyellow-500',
      },
    },
    {
      to: 'components-sample',
      label: ($t) => $t('HasNumber'),
      count: 3,
    },
    {
      to: 'components-sample',
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
    ],
  },
]