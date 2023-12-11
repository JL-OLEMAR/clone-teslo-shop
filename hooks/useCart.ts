import { CartContext } from '@/context'
import { useContext } from 'react'

export function useCart() {
  const cartContext = useContext(CartContext)

  if (cartContext == null) {
    throw new Error('useUi must be used within an UiProvider')
  }

  return cartContext
}
