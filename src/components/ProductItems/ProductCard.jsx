import React from 'react';
import stylesCard from '../../styles/ProductCard.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder } from '../../Redux/slices/cartSlice';

const ProductCard = ({ id, title, price, imageUrl, type, size, ...props }) => {
  let arrTypes = ['Тонкое', 'Толстое'];
  let [activeType, setActiveType] = React.useState(false);
  let [activeSize, setActiveSize] = React.useState(false);
  const dispatch = useDispatch();
  const countOrder = useSelector((state) => state.cart.orders.find((obj) => obj.id == id));
  const addedCount = countOrder ? countOrder.count : 0;
  const onClickAdd = () => {
    const order = {
      id,
      title,
      price,
      imageUrl,
      type: arrTypes[activeType],
      activeSize,
    };
    dispatch(addOrder(order));
  };

  return (
    <div className={stylesCard.card}>
      <img src={imageUrl} width={200} />
      <p>{title}</p>
      <div>
        <div className={stylesCard.sizesPizza}>
          {props.sizes.map((s) => {
            return (
              <button
                onClick={() => setActiveSize(s)}
                className={activeSize === s ? `${stylesCard.sbuttonactive}` : null}
                key={s}
              >
                {s}см.
              </button>
            );
          })}
        </div>
        <div className={stylesCard.typesPizza}>
          {props.types.map((t) => {
            return (
              <button
                onClick={() => setActiveType(t)}
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
      Rating: {props.rating}
    </div>
  );
};
export default ProductCard;
