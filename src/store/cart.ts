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
	addToCart: (coffee: Coffee, quantity: number) => void
}

export const useCartStore = create<CartStore>((set) => ({
	items: [],

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
}))
