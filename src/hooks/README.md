# Hooks Personalizados

Este diretório contém hooks personalizados criados a partir dos stores do Zustand para facilitar o uso e fornecer funcionalidades adicionais.

## useCart

Hook para gerenciar o estado do carrinho de compras.

### Uso

```tsx
import { useCart } from '@/hooks'

const Component = () => {
  const {
    items,
    deliveryFee,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalPrice,
    totalItems,
    total,
    isEmpty,
    getItemQuantity,
    hasItem
  } = useCart()

  return (
    // JSX do componente
  )
}
```

### Propriedades

#### Estados
- `items: CartItem[]` - Lista de itens no carrinho
- `deliveryFee: number` - Taxa de entrega
- `isEmpty: boolean` - Indica se o carrinho está vazio

#### Valores Computados
- `totalPrice: number` - Preço total dos itens (sem taxa de entrega)
- `totalItems: number` - Quantidade total de itens
- `subtotal: number` - Mesmo que totalPrice
- `total: number` - Preço total incluindo taxa de entrega

#### Ações
- `addToCart(coffee: Coffee, quantity: number): void` - Adiciona item ao carrinho
- `removeFromCart(coffeeId: number): void` - Remove item do carrinho
- `updateQuantity(coffeeId: number, quantity: number): void` - Atualiza quantidade
- `clearCart(): void` - Limpa o carrinho

#### Métodos Auxiliares
- `getItemQuantity(coffeeId: number): number` - Retorna a quantidade de um item específico
- `hasItem(coffeeId: number): boolean` - Verifica se um item está no carrinho

## useAddress

Hook para gerenciar o endereço de entrega.

### Uso

```tsx
import { useAddress } from '@/hooks'

const Component = () => {
  const {
    address,
    setAddress,
    isComplete,
    isEmpty,
    getFormattedAddress,
    updateField,
    clearAddress
  } = useAddress()

  return (
    // JSX do componente
  )
}
```

### Propriedades

#### Estados
- `address: Address` - Objeto com os dados do endereço

#### Ações
- `setAddress(address: Address): void` - Define o endereço completo
- `updateField(field: keyof Address, value: string): void` - Atualiza um campo específico
- `clearAddress(): void` - Limpa todos os campos do endereço

#### Métodos Auxiliares
- `isComplete(): boolean` - Verifica se todos os campos obrigatórios estão preenchidos
- `isEmpty(): boolean` - Verifica se o endereço está vazio
- `getFormattedAddress(): string` - Retorna o endereço formatado para exibição

### Tipo Address

```typescript
interface Address {
  zipCode: string
  street: string
  streetNumber: string
  complement: string
  neighborhood: string
  city: string
  state: string
}
```

## Como Migrar

### Antes (usando store diretamente)
```tsx
import { useCartStore } from '@/store/cart'

const Component = () => {
  const { items, addToCart, getTotalItems } = useCartStore()
  const totalItems = getTotalItems()
  
  // ...
}
```

### Depois (usando hook personalizado)
```tsx
import { useCart } from '@/hooks'

const Component = () => {
  const { items, addToCart, totalItems } = useCart()
  
  // ...
}
```

## Vantagens dos Hooks Personalizados

1. **Interface Simplificada**: Valores computados já disponíveis sem necessidade de chamar funções
2. **Métodos Auxiliares**: Funcionalidades adicionais como `hasItem`, `isEmpty`, `getFormattedAddress`
3. **Melhor DX**: IntelliSense aprimorado e menos boilerplate
4. **Reutilização**: Lógica encapsulada e reutilizável
5. **Tipo-Segurança**: Todos os tipos exportados e disponíveis
