import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  sum: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addOrder(state, action) {
      const findOrder = state.orders.find((obj) => obj.id == action.payload.id);
      if (findOrder) {
        findOrder.count++;
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
    orderMinusCount(state, action) {
      const findOrder = state.orders.find((obj) => obj.id == action.payload.id);
      if (findOrder) {
        findOrder.count--;
      }
    },
    removeOrder(state,action) {
      state.orders = state.orders.filter((obj) => obj.id !== action.payload)
    },
    clearOrders(state) {
      state.orders = [];
      state.sum = 0;
    },
  },
});

export const { addOrder, orderMinusCount, clearOrders,removeOrder } = cartSlice.actions;
export default cartSlice.reducer;
