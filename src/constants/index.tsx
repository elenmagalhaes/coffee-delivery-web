import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import Americano from '../assets/img/americano.svg'
import Arabe from '../assets/img/arabe.svg'
import Capuccino from '../assets/img/capuccino.svg'
import ChocolateQuente from '../assets/img/chocolate-quente.svg'
import ComLeite from '../assets/img/com-leite.svg'
import Cremoso from '../assets/img/cremoso.svg'
import Cubano from '../assets/img/cubano.svg'
import Expresso from '../assets/img/expresso.svg'
import Gelado from '../assets/img/gelado.svg'
import Havaiano from '../assets/img/havaiano.svg'
import Irlandes from '../assets/img/irlandes.svg'
import Latte from '../assets/img/latte.svg'
import Macchiato from '../assets/img/macchiato.svg'
import Mocaccino from '../assets/img/mochaccino.svg'

export const PRODUCTS_CATALOG = [
  {
    id: 1,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    amount: 1,
    tags: ['tradicional'],
    image: Expresso,
  },
  {
    id: 2,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    amount: 1,
    tags: ['tradicional'],
    image: Americano,
  },
  {
    id: 3,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    amount: 1,
    tags: ['tradicional'],
    image: Cremoso,
  },
  {
    id: 4,
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    amount: 1,
    tags: ['tradicional', 'gelado'],
    image: Gelado,
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    amount: 1,
    tags: ['tradicional', 'com leite'],
    image: ComLeite,
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    amount: 1,
    tags: ['tradicional', 'com leite'],
    image: Latte,
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    amount: 1,
    tags: ['tradicional', 'com leite'],
    image: Capuccino,
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    amount: 1,
    tags: ['tradicional', 'com leite'],
    image: Macchiato,
  },
  {
    id: 9,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    amount: 1,
    tags: ['tradicional', 'com leite'],
    image: Mocaccino,
  },
  {
    id: 10,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    amount: 1,
    tags: ['especial', 'com leite'],
    image: ChocolateQuente,
  },
  {
    id: 11,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    amount: 1,
    tags: ['especial', 'alcoólico', 'gelado'],
    image: Cubano,
  },
  {
    id: 12,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    amount: 1,
    tags: ['especial'],
    image: Havaiano,
  },
  {
    id: 13,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    amount: 1,
    tags: ['especial'],
    image: Arabe,
  },
  {
    id: 14,
    name: 'Irlândes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    amount: 1,
    tags: ['especial', 'alcoólico'],
    image: Irlandes,
  },
]

export const FILTER_LIST_ITEMS = [
  'tradicional',
  'especial',
  'com leite',
  'alcoólico',
  'gelado',
]

export const BENEFITS_LIST = [
  {
    id: 1,
    icon: <ShoppingCart size={16} weight="fill" color="white" />,
    label: 'Compra simples e segura',
    variant: 'yellowDark',
  },
  {
    id: 2,
    icon: <Package size={16} weight="fill" color="white" />,
    label: 'Embalagem mantém o café intacto',
    variant: 'gray',
  },
  {
    id: 3,
    icon: <Timer size={16} weight="fill" color="white" />,
    label: 'Entrega rápida e rastreada',
    variant: 'yellow',
  },
  {
    id: 4,
    icon: <Coffee size={16} weight="fill" color="white" />,
    label: 'O café chega fresquinho até você',
    variant: 'purple',
  },
] as const
