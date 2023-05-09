import React from 'react';
import stylesCart from '../../styles/Cart.module.scss';
import ItemOrder from './ItemOrder';
import { useDispatch, useSelector } from 'react-redux';
import { clearOrders } from '../../Redux/slices/cartSlice';
import EmptyCartRight from './EmptyCartRight';

const CartRight = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.cart.orders);
  const sum = useSelector((state) => state.cart.sum);
  const clearAll = () => {
    if (window.confirm('Вы уверены что хотите очистить корзину?')) {
      dispatch(clearOrders());
    }
  };
  const totalCount = orders.reduce((count, order) => count + order.count, 0);
  if (orders == 0) {
    return <EmptyCartRight/>
  }
  return (
    <div className={stylesCart.cartRight_wrapper}>
      <img src="/img/logo-shop-big.png" width={80}/>
      <span>Выбранные товары: </span>
      {orders.map((item) => (
        <ItemOrder key={item.id} {...item} />
      ))}
      <div className={stylesCart.sum}>
        {sum != 0 ? <span>Сумма к оплате: {sum} рублей.</span> : ''}
        <div>Всего пицц: {totalCount}</div>
      </div>
      <button className={stylesCart.buttonAccept}>Оформить заказ</button>
      <button className={stylesCart.buttonDel} onClick={clearAll}>
        Очистить корзину
      </button>
    </div>
  );
};

export default CartRight;
