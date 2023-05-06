import stylesHeader from '../styles/Header.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';
import Search from './ProductItems/Search';
import { useSelector } from 'react-redux';

const Header = () => {
  const sum = useSelector((state) => state.cart.sum);
  return (
    <header className={stylesHeader.headerWrapper}>
      <div className={stylesHeader.upHeader}>
        <div className={stylesHeader.headerLeft}>
          <div>
            <NavLink to="/home">
              <img src="/img/logotip.png" width={60} />
            </NavLink>
            <p>Taste and quality are everything</p>
          </div>
        </div>
        <Search />
        <div className={stylesHeader.headerRight}>
          <div className={stylesHeader.cardWrapper}>
            <NavLink to="/cart">
              <span className={stylesHeader.sum}>{sum}р</span>
              <img src="/img/logo-shop.png" />
            </NavLink>
          </div>
          <NavLink to="/login">
            <img src="/img/logo-user.png" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Header;
