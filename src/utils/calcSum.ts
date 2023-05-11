import React from 'react'
import { CartItem } from '../Redux/slices/cartSlice';

export const calcSum = (orders: CartItem[]) => {
  return orders.reduce((price, obj) => {
    return obj.price * obj.count + price;
  }, 0);
}

