import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '@/../tailwind.config.js'

const fullConfig = resolveConfig(tailwindConfig)
const colors = fullConfig.theme.colors
const dashboard = fullConfig.theme.colors.dashboard

const categoryColors = [
  dashboard.category1,
  dashboard.category2,
  dashboard.category3,
  dashboard.category4,
  dashboard.category5,
  dashboard.category6,
  dashboard.category7,
  dashboard.category8,
  dashboard.category9,
  dashboard.category10,
  dashboard.category11,
  dashboard.category12,
  dashboard.category13,
  dashboard.category14,
  dashboard.category15,
]

export default {
  fullConfig,
  colors,
  dashboard,
  categoryColors,
}
