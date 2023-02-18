import { v4 as uuidv4 } from 'uuid'
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
    id: uuidv4(),
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: '9,90',
    tags: ['tradicional'],
    image: Expresso,
  },
  {
    id: uuidv4(),
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: '9,90',
    tags: ['tradicional'],
    image: Americano,
  },
  {
    id: uuidv4(),
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: '9,90',
    tags: ['tradicional'],
    image: Cremoso,
  },
  {
    id: uuidv4(),
    name: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: '9,90',
    tags: ['tradicional', 'gelado'],
    image: Gelado,
  },
  {
    id: uuidv4(),
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: '9,90',
    tags: ['tradicional', 'com leite'],
    image: ComLeite,
  },
  {
    id: uuidv4(),
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: '9,90',
    tags: ['tradicional', 'com leite'],
    image: Latte,
  },
  {
    id: uuidv4(),
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: '9,90',
    tags: ['tradicional', 'com leite'],
    image: Capuccino,
  },
  {
    id: uuidv4(),
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: '9,90',
    tags: ['tradicional', 'com leite'],
    image: Macchiato,
  },
  {
    id: uuidv4(),
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: '9,90',
    tags: ['tradicional', 'com leite'],
    image: Mocaccino,
  },
  {
    id: uuidv4(),
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: '9,90',
    tags: ['especial', 'com leite'],
    image: ChocolateQuente,
  },
  {
    id: uuidv4(),
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: '9,90',
    tags: ['especial', 'alcoólico', 'gelado'],
    image: Cubano,
  },
  {
    id: uuidv4(),
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: '9,90',
    tags: ['especial'],
    image: Havaiano,
  },
  {
    id: uuidv4(),
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: '9,90',
    tags: ['especial'],
    image: Arabe,
  },
  {
    id: uuidv4(),
    name: 'Irlândes',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: '9,90',
    tags: ['especial', 'alcoólico'],
    image: Irlandes,
  },
]

export const FILTER_LIST_ITEMS = [
  'tradicional',
  'especial',
  'com leite',
  'alcoolico',
  'gelado',
]
