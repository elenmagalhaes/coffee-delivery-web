import { useCartStore } from '../store/cart'
import type { Coffee, CartItem } from '../store/cart'

export const useCart = () => {
  const items = useCartStore((state) => state.items)
  const deliveryFee = useCartStore((state) => state.deliveryFee)
  const addToCart = useCartStore((state) => state.addToCart)
  const removeFromCart = useCartStore((state) => state.removeFromCart)
  const updateQuantity = useCartStore((state) => state.updateQuantity)
  const clearCart = useCartStore((state) => state.clearCart)
  const getTotalPrice = useCartStore((state) => state.getTotalPrice)
  const getTotalItems = useCartStore((state) => state.getTotalItems)

  return {
    items,
    deliveryFee,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
    // Computed values
    totalPrice: getTotalPrice(),
    totalItems: getTotalItems(),
    subtotal: getTotalPrice(),
    total: getTotalPrice() + deliveryFee,
    isEmpty: items.length === 0,
    // Helper methods
    getItemQuantity: (coffeeId: number) => {
      const item = items.find(item => item.coffee.id === coffeeId)
      return item ? item.quantity : 0
    },
    hasItem: (coffeeId: number) => {
      return items.some(item => item.coffee.id === coffeeId)
    }
  }
}

export type { Coffee, CartItem }
