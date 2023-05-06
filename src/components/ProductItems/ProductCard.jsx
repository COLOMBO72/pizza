import React from 'react';
import stylesCard from '../../styles/ProductCard.module.scss';

const ProductCard = (props) => {
  let arrTypes = ['Тонкое', 'Толстое'];
  let [activeType, setActiveType] = React.useState(false);
  let [activeSize, setActiveSize] = React.useState(false);

  return (
    <div className={stylesCard.card}>
      <img src={props.imageUrl} width={200} />
      <p>{props.title}</p>
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
          <span>Price: {props.price}</span>
          <button>
            <img src="/img/logo-shop.png" width={20} />
          </button>
        </div>
      </div>
      Rating: {props.rating}
    </div>
  );
};
export default ProductCard;
