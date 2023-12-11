import { type CartState } from './cart-provider'
import { type ICartProduct } from '@/interfaces'

type CartActionType =
  | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }
  | { type: '[Cart] - Update products in cart', payload: ICartProduct[] }
  | { type: '[Cart] - Change product quantity', payload: ICartProduct }

export function cartReducer(state: CartState, action: CartActionType): CartState {
  switch (action.type) {
    case '[Cart] - LoadCart from cookies | storage':
      return {
        ...state,
        cart: [...action.payload]
      }

    case '[Cart] - Update products in cart':
      return {
        ...state,
        cart: [...action.payload]
      }

    case '[Cart] - Change product quantity':
      return {
        ...state,
        cart: state.cart.map(prod => {
          if (prod._id !== action.payload._id) return prod
          if (prod.size !== action.payload.size) return prod

          return {
            ...prod,
            quantity: action.payload.quantity
          }
        })
      }

    default:
      return state
  }
}
