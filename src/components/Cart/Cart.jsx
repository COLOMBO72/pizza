import React from 'react'
import stylesCart from '../../styles/Cart.module.scss'
import ItemOrder from './ItemOrder'

const Cart = () => {
  return (
    <div className={stylesCart.wrapperCart}>
      <h3>Your cart:</h3>
      <ItemOrder/>
      <div className={stylesCart.sum}>
        sum
      </div>
      <button>
        Оформить заказ
      </button>
    </div>
  )
}

export default Cart
