import { sideBarItemConfig } from './AsideConfigTypes'

export const layoutsAsideConfig: sideBarItemConfig[] = [
  { 
    to: 'layouts',
    label: ($t) => $t('layouts'),
  },
  {
    to: 'layouts-inputs',
    label: ($t) => $t('入力画面'),
  },
  {
    to: 'layouts-filter',
    label: ($t) => $t('フィルター'),
  },
  {
    to: 'layouts-validation',
    label: ($t) => $t('バリデーション'),
  },
  {
    to: 'layouts-scroll-table',
    label: ($t) => $t('横スクロールテーブル'),
  },
  {
    to: 'layouts-loading',
    label: ($t) => $t('Loading処理'),
  },
  {
    to: 'layouts-dashboard',
    label: ($t) => $t('ダッシュボード'),
  },
]