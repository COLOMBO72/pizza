import React from 'react';
import stylesCart from '../../styles/Cart.module.scss';
import ItemOrder from './ItemOrder';
import { useSelector } from 'react-redux';
import { clearOrders, selectCart } from '../../Redux/slices/cartSlice';
import EmptyCartRight from './EmptyCartRight';
import { useAppDispatch } from '../../Redux/store';

const CartRight: React.FC = () => {
  const dispatch = useAppDispatch();
  const { orders, sum } = useSelector(selectCart);
  const clearAll = () => {
    if (window.confirm('Вы уверены что хотите очистить корзину?')) {
      dispatch(clearOrders());
    }
  };
  const totalCount = orders.reduce((count: number, order: any) => count + order.count, 0);
  if (orders.length == 0) {
    return <EmptyCartRight />;
  }
  return (
    <div className={stylesCart.cartRight_wrapper}>
      <img src="/img/logo-shop-big.png" width={80} />
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
