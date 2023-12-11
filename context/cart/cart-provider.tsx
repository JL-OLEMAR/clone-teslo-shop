import { useReducer, type ReactNode } from 'react'
import { CartContext } from './cart-context'
import { cartReducer } from './cart-reducer'
import { type ICartProduct } from '@/interfaces'

export interface CartState {
  cart: ICartProduct[]
  addProductCart: (product: ICartProduct) => void
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  addProductCart: () => { }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  const addProductCart = (product: ICartProduct) => {
    const isProductInCart = (p: ICartProduct) => p._id === product._id
    const isProductSameSize = (p: ICartProduct) => p.size === product.size
    const productInCart = state.cart.find(p => isProductInCart(p) && isProductSameSize(p))

    if (!productInCart) {
      // Si el producto no está en el carrito, AGRÉGALO
      return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })
    }

    if (!isProductSameSize(productInCart)) {
      // Si el producto ya está en el carrito pero con un tamaño diferente, AGRÉGALO como un nuevo producto
      return dispatch({ type: '[Cart] - Update products in cart', payload: [...state.cart, product] })
    }

    // Si el producto ya está en el carrito con el mismo tamaño, ACTUALIZA la cantidad
    const updatedProduct = state.cart.map(prod => {
      if (isProductInCart(prod) && isProductSameSize(prod)) {
        // Update quantity
        prod.quantity += product.quantity
      }
      return prod
    })

    dispatch({ type: '[Cart] - Update products in cart', payload: updatedProduct })
  }

  return (
    <CartContext.Provider value={{ ...state, addProductCart }}>
      {children}
    </CartContext.Provider>
  )
}
