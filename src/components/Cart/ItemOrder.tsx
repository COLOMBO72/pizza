import React from 'react';
import stylesCart from '../../styles/Cart.module.scss';
import { useDispatch } from 'react-redux';
import { CartItem, addOrder, orderMinusCount, removeOrder } from '../../Redux/slices/cartSlice';

type Itemorder = {
  id: string,
  title: string,
  price: number,
  count: number,
  imageUrl: string,
  size: number,
  type: string
}

const ItemOrder:React.FC<Itemorder> = ({ id, title, price, count, imageUrl, size, type }) => {
  const dispatch = useDispatch();
  const onClickDelete = () => {
    if (window.confirm('Вы уверены что хотите убрать товар?')){
      dispatch(removeOrder(id))
    }
  }
  const onClickPlus = () => {
    dispatch(addOrder({ id }as CartItem));
  };
  const onClickMinus = () => {
    if (count<=1){
      onClickDelete()
    }else{
      dispatch(orderMinusCount({
        id,
      }as CartItem))
    }
  }
  return (
    <div className={stylesCart.itemBlock}>
      <img className={stylesCart.imgBig} src={imageUrl} />
      <div className={stylesCart.infoBlock}>
        <div className={stylesCart.types}>
          <h1>{title}</h1>
          <span>{size} см.</span>
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
