import { configureStore } from '@reduxjs/toolkit'
import home from './slices/homeSlice'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    home,
    filter,
    cart,
  },
})