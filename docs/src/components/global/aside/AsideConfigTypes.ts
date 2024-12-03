export type iconConfig = {
  type: string
  ztype: string
  color: string
  condition?: (data) => boolean
  // conditionで自動算出、入力は不要
  enable?: boolean
}
export type sideBarItemConfig = {
  // nuxt-linkのto属性
  to?: string
  // クリックイベントを識別するための名前、クリックイベントを発火させない場合は不要
  name?: string
  // 表示ラベル
  label: (t?: any) => string
  // ymの場合は自動でセットする
  params?: any
  href?: string
  targetBlank?: boolean
  // クリックイベントを取得する場合はこちらを使う、toとhrefは排他
  noLink?: boolean
  // アイコン表示
  icon?: iconConfig
  condition?: (data) => boolean
  // 子を持つメニュー項目
  children?: sideBarItemConfig[]
  // 承認の数を表示する場合はこちらを使う
  count?: (data) => string
  // countがある場合はこちらは自動的に算出される
  countText?: (data) => string
}