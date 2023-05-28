import type { VerticalNavItems } from '@/@layouts/types'

export default [
  {
    title: 'Home',
    to: { name: 'index' },
    icon: { icon: 'tabler-smart-home' },
  },
  {
    title: 'Decrement',
    to: { name: 'decrement' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Stripe Test',
    to: { name: 'stripe' },
    icon: { icon: 'tabler-file' },
  },
  {
    title: 'Plaid Test',
    to: { name: 'plaid' },
    icon: { icon: 'tabler-file' },
  },
] as VerticalNavItems
