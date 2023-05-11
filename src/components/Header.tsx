import stylesHeader from '../styles/Header.module.scss';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './ProductItems/Search';
import { useSelector } from 'react-redux';
import { selectCart } from '../Redux/slices/cartSlice';

const Header: React.FC = () => {
  const { sum, orders } = useSelector(selectCart);
  const location = useLocation();
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
            {location.pathname != '/cart' && (
              <NavLink to="/cart">
                <span className={stylesHeader.sum}>{orders.length != 0 ? `${sum}р` : ''}</span>
                <img src="/img/logo-shop.png" />
              </NavLink>
            )}
          </div>
          {location.pathname != '/login' && (
            <NavLink to="/login">
              <img src="/img/logo-user.png" />
            </NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
