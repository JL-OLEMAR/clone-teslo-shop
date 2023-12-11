import { CartContext } from '@/context'
import { useContext } from 'react'

export function useCart() {
  const cartContext = useContext(CartContext)

  if (cartContext == null) {
    throw new Error('useCart must be used within a CartProvider')
  }

  return cartContext
}
