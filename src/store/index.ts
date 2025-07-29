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

export interface Address {
	zipCode: string
	street: string
	streetNumber: string
	complement: string
	neighborhood: string
	city: string
	state: string
}

export type PaymentMethod = 'credit' | 'debit' | 'cash'

interface AppStore {
	// Cart state
	items: CartItem[]
	deliveryFee: number

	// Address state
	address: Address

	// Payment state
	paymentMethod: PaymentMethod | null

	// Cart actions
	addToCart: (coffee: Coffee, quantity: number) => void
	removeFromCart: (coffeeId: number) => void
	updateQuantity: (coffeeId: number, quantity: number) => void
	clearCart: () => void
	getTotalPrice: () => number
	getTotalItems: () => number

	// Address actions
	setAddress: (address: Address) => void
	updateAddressField: (field: keyof Address, value: string) => void
	clearAddress: () => void

	// Payment actions
	setPaymentMethod: (method: PaymentMethod) => void
	clearPaymentMethod: () => void

	// Combined actions
	clearOrder: () => void
}

const initialAddress: Address = {
	zipCode: '',
	street: '',
	streetNumber: '',
	complement: '',
	neighborhood: '',
	city: '',
	state: ''
}

export const useAppStore = create<AppStore>((set, get) => ({
	// Initial state
	items: [],
	deliveryFee: 3.50,
	address: initialAddress,
	paymentMethod: null,

	// Cart actions
	addToCart: (coffee, quantity) => set((state) => {
		const existingItem = state.items.find(item => item.coffee.id === coffee.id)

		if (existingItem) {
			return {
				items: state.items.map(item =>
					item.coffee.id === coffee.id
						? { ...item, quantity: item.quantity + quantity }
						: item
				)
			}
		} else {
			return {
				items: [...state.items, { coffee, quantity }]
			}
		}
	}),

	removeFromCart: (coffeeId) => set((state) => ({
		items: state.items.filter(item => item.coffee.id !== coffeeId)
	})),

	updateQuantity: (coffeeId, quantity) => set((state) => ({
		items: state.items.map(item =>
			item.coffee.id === coffeeId
				? { ...item, quantity }
				: item
		)
	})),

	clearCart: () => set({
		items: []
	}),

	getTotalPrice: () => {
		return get().items.reduce((total, item) => {
			return total + (item.coffee.price * item.quantity)
		}, 0)
	},

	getTotalItems: () => {
		return get().items.reduce((total, item) => total + item.quantity, 0)
	},

	// Address actions
	setAddress: (address) => set({ address }),

	updateAddressField: (field, value) => set((state) => ({
		address: {
			...state.address,
			[field]: value
		}
	})),

	clearAddress: () => set({ address: initialAddress }),

	// Payment actions
	setPaymentMethod: (method) => set({ paymentMethod: method }),

	clearPaymentMethod: () => set({ paymentMethod: null }),

	// Combined actions
	clearOrder: () => set({
		items: [],
		address: initialAddress,
		paymentMethod: null
	})
}))
