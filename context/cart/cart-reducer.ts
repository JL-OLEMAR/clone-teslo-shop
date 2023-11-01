import { type CartState } from './cart-provider'
import { type ICartProduct } from '@/interfaces'

type CartActionType =
  | { type: '[Cart] - LoadCart from cookies | storage', payload: ICartProduct[] }
  | { type: '[Cart] - Add Product', payload: ICartProduct }

export function cartReducer(state: CartState, action: CartActionType): CartState {
  switch (action.type) {
    case '[Cart] - LoadCart from cookies | storage':
      return {
        ...state
      }

    default:
      return state
  }
}
