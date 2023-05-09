import React from 'react';
import stylesCart from '../../styles/Cart.module.scss';

const EmptyCartRight = () => {
  return (
    <div className={stylesCart.EmptyCartRight}>
      <img src="/img/logo-shop-big.png" />
      <div>Добавьте товары, чтобы пополнить корзину</div>
    </div>
  );
};

export default EmptyCartRight;
