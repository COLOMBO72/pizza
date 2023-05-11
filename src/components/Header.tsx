import stylesHeader from '../styles/Header.module.scss';
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Search from './ProductItems/Search';
import { useSelector } from 'react-redux';
import { selectCart } from '../Redux/slices/cartSlice';

const Header: React.FC = () => {
  const { sum, orders } = useSelector(selectCart);
  const location = useLocation();
  const isMounted = React.useRef(false);

  //сохраняет в локальный store данные, чтобы
  //их доставать после обновления страницы
  // для этого делаем useRef
  React.useEffect(() => {
    if (isMounted.current) {
      const json = JSON.stringify(orders);
      localStorage.setItem('cart', json);
    }
    isMounted.current = true;
  }, [orders]);

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
        {location.pathname != '/cart' && <Search />}
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
