/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createContext, useReducer, useState } from 'react'
import CartReducer from './CartReducer'

const CartContext = createContext()

const CartProvider = ({ children }) => {
  let initialState = { cart: [] }

  if (localStorage.getItem('cartProduct')) { initialState = JSON.parse(localStorage.getItem('cartProduct')) }

  const [state, dispatch] = useReducer(CartReducer, initialState)

  return (<CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>)
}

export { CartContext, CartProvider }
