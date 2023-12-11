import { type CartState } from './cart-provider'
import { type ICartProduct } from '@/interfaces'

type CartActionType =
  | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }
  | { type: '[Cart] - Update products in cart', payload: ICartProduct[] }

export function cartReducer(state: CartState, action: CartActionType): CartState {
  switch (action.type) {
    case '[Cart] - LoadCart from cookies | storage':
      return {
        ...state
      }

    case '[Cart] - Update products in cart':
      return {
        ...state,
        cart: [...action.payload]
      }

    default:
      return state
  }
}
