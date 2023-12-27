import { useReducer, type ReactNode, useEffect } from 'react'
import Cookie from 'js-cookie'

import { CartContext } from './cart-context'
import { cartReducer } from './cart-reducer'
import { type ICartProduct } from '@/interfaces'

export interface CartState {
  cart: ICartProduct[]
  numberOfItems: number
  subTotal: number
  tax: number
  total: number
}

const CART_INITIAL_STATE: CartState = {
  cart: [],
  numberOfItems: 0,
  subTotal: 0,
  tax: 0,
  total: 0
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, CART_INITIAL_STATE)

  useEffect(() => {
    const cartType = '[Cart] - LoadCart from cookies | storage'
    try {
      const cartCookie = Cookie.get('cart')
      const cookieProducts = cartCookie ? JSON.parse(cartCookie) : []
      dispatch({ type: cartType, payload: cookieProducts })
    } catch (error) {
      console.error('Error while parsing cart cookie:')
      dispatch({ type: cartType, payload: [] })
    }
  }, [])

  useEffect(() => {
    if (state.cart.length <= 0) return
    Cookie.set('cart', JSON.stringify(state.cart), { expires: 7 })
  }, [state.cart])

  useEffect(() => {
    const numberOfItems = state.cart.reduce((prev, current) => current.quantity + prev, 0)
    const subTotal = state.cart.reduce((prev, { price, quantity }) => (price * quantity) + prev, 0)
    const taxRate = Number(process.env.NEXT_PUBLIC_TAX_RATE ?? 0)

    const orderSummary = {
      numberOfItems,
      subTotal,
      tax: subTotal * taxRate,
      total: subTotal * (1 + taxRate)
    }
    dispatch({ type: '[Cart] - Update order summary', payload: orderSummary })
  }, [state.cart])

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

  const updateCartQuantity = (product: ICartProduct) => {
    dispatch({ type: '[Cart] - Change product quantity', payload: product })
  }

  const removeCartProduct = (product: ICartProduct) => {
    dispatch({ type: '[Cart] - Remove product in cart', payload: product })
    Cookie.remove('cart')
    Cookie.set('cart', JSON.stringify([]), { expires: 7 })
  }

  return (
    <CartContext.Provider value={{
      ...state,
      addProductCart,
      updateCartQuantity,
      removeCartProduct
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
