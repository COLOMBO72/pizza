import React from 'react'
import { calcSum } from './calcSum';
import { CartItem } from '../Redux/slices/cartSlice';

export const GetItemsFromLocalStorage = () => {
  const data = localStorage.getItem('cart');
  const orders = data ? JSON.parse(data) : [];
  const sum = calcSum(orders);
    return {
      orders: orders as CartItem[],
      sum,
    }
}
