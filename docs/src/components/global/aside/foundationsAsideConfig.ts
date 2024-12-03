import { sideBarItemConfig } from './AsideConfigTypes'

export const foundationsAsideConfig: sideBarItemConfig[] = [
  { 
    to: 'foundations',
    label: ($t) => $t('Foundations'),
  },
  { 
    to: 'foundations-colors',
    label: ($t) => $t('Colors'),
  },
  { 
    to: 'foundations-typography',
    label: ($t) => $t('Fypography'),
  },
]