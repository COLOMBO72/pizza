import { configureStore } from '@reduxjs/toolkit'
import pizzas from './slices/pizzasSlice'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    pizzas,
    filter,
    cart,
  },
})