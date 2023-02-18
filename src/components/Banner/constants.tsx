import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export const BENEFITS_LIST = [
  {
    id: '1',
    icon: <ShoppingCart size={16} weight="fill" color="white" />,
    label: 'Compra simples e segura',
    variant: 'yellowDark',
  },
  {
    id: '2',
    icon: <Package size={16} weight="fill" color="white" />,
    label: 'Embalagem mantém o café intacto',
    variant: 'gray',
  },
  {
    id: '3',
    icon: <Timer size={16} weight="fill" color="white" />,
    label: 'Entrega rápida e rastreada',
    variant: 'yellow',
  },
  {
    id: '4',
    icon: <Coffee size={16} weight="fill" color="white" />,
    label: 'O café chega fresquinho até você',
    variant: 'purple',
  },
] as const
