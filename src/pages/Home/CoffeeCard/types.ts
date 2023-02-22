export interface Product {
  id: number
  name: string
  description: string
  price: string
  amount: number
  image: string
  tags: string[]
}

export interface CoffeCardProps {
  product: Product
}
