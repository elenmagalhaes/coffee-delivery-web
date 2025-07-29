import { create } from "zustand";

export interface Address {
	zipCode: string;
	street: string;
	streetNumber: string;
	complement: string;
	neighborhood: string;
	city: string;
	state: string;
}

interface AddressStore {
	address: Address;
	getAddress: () => AddressStore;
	setAddress: (address: Address) => void;
}

export const useAddressStore = create<AddressStore>((set, get) => ({
	address: {
		zipCode: "",
		street: "",
		streetNumber: "",
		complement: "",
		neighborhood: "",
		city: "",
		state: "",
	},
	getAddress: () => get(),
	setAddress: (address: Address) => set({ address }),
}));