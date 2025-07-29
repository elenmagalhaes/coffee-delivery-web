import { create } from 'zustand'

export interface Coffee {
	id: number
	name: string
	description: string
	tags: string[]
	price: number
	image: string
}

export interface CartItem {
	coffee: Coffee
	quantity: number
}

interface CartStore {
	items: CartItem[]
	deliveryFee: number
	addToCart: (coffee: Coffee, quantity: number) => void
	removeFromCart: (coffeeId: number) => void
	updateQuantity: (coffeeId: number, quantity: number) => void
	clearCart: () => void
	getTotalPrice: () => number
	getTotalItems: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
	items: [],
	deliveryFee: 3.50,

	addToCart: (coffee, quantity) => set((state) => {
		const existingItem = state.items.find(item => item.coffee.id === coffee.id)

		if (existingItem) {
			// Se o item já existe, atualiza a quantidade
			return {
				items: state.items.map(item =>
					item.coffee.id === coffee.id
						? { ...item, quantity: item.quantity + quantity }
						: item
				)
			}
		} else {
			// Se o item não existe, adiciona ao carrinho
			return {
				items: [...state.items, { coffee, quantity }]
			}
		}
	}),
	removeFromCart: (coffeeId) => set((state) => ({
		items: state.items.filter(item => item.coffee.id !== coffeeId)
	})),
	updateQuantity: (coffeeId, quantity) => set((state) => {
		return {
			items: state.items.map(item =>
				item.coffee.id === coffeeId
					? { ...item, quantity }
					: item
			)
		}
	}),
	clearCart: () => set({ items: [], deliveryFee: 3.50 }),
	getTotalPrice: () => {
		return get().items.reduce((total, item) => {
			return (total + (item.coffee.price * item.quantity));
		}, 0);
	},
	getTotalItems: () => {
		return get().items.reduce((total, item) => total + item.quantity, 0);
	}
}))
