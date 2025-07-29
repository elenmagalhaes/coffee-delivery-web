import { useAddressStore } from '../store/address'
import type { Address } from '../store/address'

export const useAddress = () => {
  const address = useAddressStore((state) => state.address)
  const setAddress = useAddressStore((state) => state.setAddress)

  return {
    address,
    setAddress,
    // Helper methods
    isComplete: () => {
      const requiredFields = ['zipCode', 'street', 'streetNumber', 'neighborhood', 'city', 'state']
      return requiredFields.every(field => address[field as keyof Address]?.trim() !== '')
    },
    isEmpty: () => {
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
    // Individual field updates
    updateField: (field: keyof Address, value: string) => {
      setAddress({
        ...address,
        [field]: value
      })
    },
    clearAddress: () => {
      setAddress({
        zipCode: '',
        street: '',
        streetNumber: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: ''
      })
    }
  }
}

export type { Address }
