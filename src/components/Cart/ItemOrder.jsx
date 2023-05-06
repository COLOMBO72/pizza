import React from 'react';
import stylesCart from '../../styles/Cart.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addOrder, orderMinusCount, removeOrder } from '../../Redux/slices/cartSlice';

const ItemOrder = ({ id, title, price, count, imageUrl, activeSize, type }) => {
  const dispatch = useDispatch();
  const onClickPlus = () => {
    dispatch(addOrder({ id }));
  };
  const onClickMinus = () => {
    if (count<=1){
      onClickDelete()
    }else{
      dispatch(orderMinusCount({
        id,
      }))
    }
  }
  const onClickDelete = () => {
    if (window.confirm('Вы уверены что хотите убрать товар?')){
      dispatch(removeOrder(id))
    }
  }
  return (
    <div className={stylesCart.itemBlock}>
      <img src={imageUrl} width={100} />
      <div className={stylesCart.infoBlock}>
        <div className={stylesCart.types}>
          <h1>{title}</h1>
          <span>{activeSize} см.</span>
          <span>{type}</span>
        </div>
        <div className={stylesCart.count}>
          <img src="/img/icon-minus.png" width={20} onClick={onClickMinus}/>
          {count}
          <img src="/img/icon-plus.png" width={20} onClick={onClickPlus} />
          <span className={stylesCart.price}>Цена: {price * count}</span>
        </div>
      </div>
      <img onClick={onClickDelete} className={stylesCart.delete} src="/img/icon-trash.png" width={20} />
    </div>
  );
};

export default ItemOrder;
