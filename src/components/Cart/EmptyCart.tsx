import React from 'react';
import stylesCart from '../../styles/Cart.module.scss';
import { NavLink } from 'react-router-dom';

const EmptyCart: React.FC = () => {
  return (
    <div className={stylesCart.EmptyCartWrapper}>
      <h3>
        Похоже вы ничего не выбрали,
        <br />
        но это можно исправить
        <img src="/img/icon-smile.png" />
      </h3>
      <NavLink to="/home">Перейти в меню</NavLink>
    </div>
  );
};

export default EmptyCart;
