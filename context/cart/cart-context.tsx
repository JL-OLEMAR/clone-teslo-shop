/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react'
import { type ICartProduct } from '@/interfaces'

interface ContextProps {
  cart: ICartProduct[]
  addProductCart: (product: ICartProduct) => void
  updateCartQuantity: (product: ICartProduct) => void
  removeCartProduct: (product: ICartProduct) => void
}

export const CartContext = createContext({} as ContextProps)
