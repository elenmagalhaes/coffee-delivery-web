import { useAppStore, type Address, type CartItem, type Coffee, type PaymentMethod } from '../store'

export const useApp = () => {
	// Cart selectors
	const items = useAppStore((state) => state.items)
	const deliveryFee = useAppStore((state) => state.deliveryFee)
	const addToCart = useAppStore((state) => state.addToCart)
	const removeFromCart = useAppStore((state) => state.removeFromCart)
	const updateQuantity = useAppStore((state) => state.updateQuantity)
	const clearCart = useAppStore((state) => state.clearCart)
	const getTotalPrice = useAppStore((state) => state.getTotalPrice)
	const getTotalItems = useAppStore((state) => state.getTotalItems)

	// Address selectors
	const address = useAppStore((state) => state.address)
	const setAddress = useAppStore((state) => state.setAddress)
	const updateAddressField = useAppStore((state) => state.updateAddressField)
	const clearAddress = useAppStore((state) => state.clearAddress)

	// Payment selectors
	const paymentMethod = useAppStore((state) => state.paymentMethod)
	const setPaymentMethod = useAppStore((state) => state.setPaymentMethod)
	const clearPaymentMethod = useAppStore((state) => state.clearPaymentMethod)

	// Combined selectors
	const clearOrder = useAppStore((state) => state.clearOrder)

	return {
		// Cart data
		items,
		deliveryFee,
		totalPrice: getTotalPrice(),
		totalItems: getTotalItems(),
		subtotal: getTotalPrice(),
		total: getTotalPrice() + deliveryFee,
		isEmpty: items.length === 0,

		// Cart actions
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,

		// Cart helpers
		getItemQuantity: (coffeeId: number) => {
			const item = items.find(item => item.coffee.id === coffeeId)
			return item ? item.quantity : 0
		},
		hasItem: (coffeeId: number) => {
			return items.some(item => item.coffee.id === coffeeId)
		},

		// Address data
		address,

		// Address actions
		setAddress,
		updateAddressField,
		clearAddress,

		// Address helpers
		isAddressComplete: () => {
			const requiredFields = ['zipCode', 'street', 'streetNumber', 'neighborhood', 'city', 'state']
			return requiredFields.every(field => address[field as keyof Address]?.trim() !== '')
		},
		isAddressEmpty: () => {
			return Object.values(address).every(value => value.trim() === '')
		},
		getFormattedAddress: () => {
			const { street, streetNumber, complement, neighborhood, city, state } = address
			let formatted = `${street}, ${streetNumber}`
			if (complement) {
				formatted += ` - ${complement}`
			}
			formatted += ` - ${neighborhood}, ${city}/${state}`
			return formatted
		},

		// Payment data
		paymentMethod,

		// Payment actions
		setPaymentMethod,
		clearPaymentMethod,

		// Payment helpers
		getPaymentMethodLabel: () => {
			switch (paymentMethod) {
				case 'credit':
					return 'Cartão de Crédito'
				case 'debit':
					return 'Cartão de Débito'
				case 'cash':
					return 'Dinheiro'
				default:
					return null
			}
		},

		// Combined actions
		clearOrder,

		// Order validation
		isOrderComplete: () => {
			const requiredFields = ['zipCode', 'street', 'streetNumber', 'neighborhood', 'city', 'state']
			const isAddressValid = requiredFields.every(field => address[field as keyof Address]?.trim() !== '')
			const hasItems = items.length > 0
			const hasPaymentMethod = paymentMethod !== null

			return isAddressValid && hasItems && hasPaymentMethod
		}
	}
}

// Export types for convenience
export type { Address, CartItem, Coffee, PaymentMethod }

