import { configureStore } from '@reduxjs/toolkit'
import pizzas from './slices/pizzasSlice'
import filter from './slices/filterSlice'
import cart from './slices/cartSlice'
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    pizzas,
    filter,
    cart,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types