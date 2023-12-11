/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { createContext } from 'react'
import { type ICartProduct } from '@/interfaces'

interface ContextProps {
  cart: ICartProduct[]
  addProductCart: (product: ICartProduct) => void

}

export const CartContext = createContext({} as ContextProps)
