import React from 'react';
import stylesCard from '../../styles/ProductCard.module.scss';
import { useSelector } from 'react-redux';
import { CartItem, addOrder, selectCartOrderById } from '../../Redux/slices/cartSlice';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../Redux/store';
import { Pizza } from '../../Redux/slices/pizzasSlice';

const ProductCard: React.FC<Pizza> = ({ id, title, price, imageUrl, types, sizes, rating }) => {
  let arrTypes = ['Тонкое', 'Пышное'];
  let [activeType, setActiveType] = React.useState('');
  let [activeSize, setActiveSize] = React.useState(0);
  const dispatch = useAppDispatch();
  const countOrder = useSelector(selectCartOrderById(id));
  const addedCount = countOrder ? countOrder.count : 0;
  const onClickAdd = () => {
    const order: CartItem = {
      id,
      title,
      price,
      imageUrl,
      type: arrTypes[activeType],
      size: activeSize,
      count: 0,
    };
    if (activeSize == 0) {
      alert('check types or sizes');
    } else {
      dispatch(addOrder(order));
      console.log(order);
    }
  };

  return (
    <div className={stylesCard.card}>
      <p>{title}</p>
      <Link to={`/pizza/${id}`}>
        <img src={imageUrl} width={200} />
      </Link>
      Rating: {rating}
      <div className={stylesCard.nearlyWrapper}>
        <div className={stylesCard.sizesPizza}>
          {sizes.map((s) => {
            return (
              <button
                onClick={() => {
                  if (activeSize == 0) {
                    setActiveSize(s);
                  } else {
                    setActiveSize(0);
                  }
                }}
                className={activeSize === s ? `${stylesCard.sbuttonactive}` : null}
                key={s}
              >
                {s ? `${s}см` : ''}
              </button>
            );
          })}
        </div>
        <div className={stylesCard.typesPizza}>
          {types.map((t) => {
            return (
              <button
                onClick={() => {
                  if (activeType == '') {
                    setActiveType(t);
                  } else {
                    setActiveType('');
                  }
                }}
                className={activeType === t ? `${stylesCard.tbuttonactive}` : null}
                key={t}
              >
                {arrTypes[t]}
              </button>
            );
          })}
        </div>
        <div className={stylesCard.addToShop}>
          <span>Price: {price}</span>
          <button onClick={onClickAdd}>
            <img src="/img/logo-shop.png" width={20} />
            {addedCount > 0 ? <span>{addedCount}</span> : ''}
          </button>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
