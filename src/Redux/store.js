import { configureStore } from '@reduxjs/toolkit'
import home from './slices/homeSlice'
import filter from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    home,
    filter,
  },
})