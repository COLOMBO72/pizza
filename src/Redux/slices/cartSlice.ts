import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type CartItem = {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
    type: string;
    size: number;
    count: number;
}// в тип мы можем передать всё, даже тесты и функции

interface ICartSliceState {
  sum: number;
  orders: CartItem[];
}//интерфейс инициализируется как объект

const initialState: ICartSliceState = {
  orders: [],
  sum: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrder(state, action: PayloadAction<CartItem>) {
      const findOrder = state.orders.find((obj) => obj.id == action.payload.id);
      // const findType = state.orders.find((obj) => obj.type == action.payload.type);
      if (findOrder) {
        findOrder.count++
      } else {
        state.orders.push({
          ...action.payload,
          count: 1,
        });
      }
      state.sum = state.orders.reduce((price, obj) => {
        return obj.price * obj.count + price;
      }, 0);
    },
    orderMinusCount(state, action: PayloadAction<CartItem>) {
      const findOrder = state.orders.find((obj) => obj.id == action.payload.id);
      if (findOrder) {
        findOrder.count--;
      }
      state.sum = state.orders.reduce((price, obj) => {
        return obj.price * obj.count;
      }, 0);
    },
    removeOrder(state,action: PayloadAction<string>) {
      state.orders = state.orders.filter((obj) => obj.id !== action.payload)
      state.sum = state.orders.reduce((price, obj) => {
        return obj.price * obj.count;
      }, 0);
    },
    clearOrders(state) {
      state.orders = [];
      state.sum = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;
export const selectCartOrderById = (id: string) =>  
(state: RootState) => state.cart.orders.find((obj) => obj.id == id);

export const { addOrder, orderMinusCount, clearOrders,removeOrder } = cartSlice.actions;
export default cartSlice.reducer;
