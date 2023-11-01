import { useReducer, type ReactNode } from 'react'
import { CartContext } from './cart-context'
import { cartReducer } from './cart-reducer'
import { type ICartProduct } from '@/interfaces'

export interface CartState {
  cart: ICartProduct[]
}

const CART_INITIAL_STATE: CartState = {
  cart: []
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  return (
    <CartContext.Provider value={{
      ...state
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
