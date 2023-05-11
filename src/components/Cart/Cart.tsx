import React from 'react';
import stylesCart from '../../styles/Cart.module.scss';
import ItemOrder from './ItemOrder';
import { useSelector } from 'react-redux';
import { clearOrders, selectCart } from '../../Redux/slices/cartSlice';
import EmptyCart from './EmptyCart';
import { useAppDispatch } from '../../Redux/store';

const Cart: React.FC = () => {
  const dispatch = useAppDispatch();
  const { orders, sum } = useSelector(selectCart);
  const clearAll = () => {
    if (window.confirm('Вы уверены что хотите очистить корзину?')) {
      dispatch(clearOrders());
    }
  };
  const totalCount = orders.reduce((count: number, order: any) => count + order.count, 0);
  if (orders.length == 0) {
    return <EmptyCart />;
  }
  return (
    <div className={stylesCart.wrapperCart}>
      <h3>Your cart:</h3>
      {orders.map((item: any) => (
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

export default Cart;
