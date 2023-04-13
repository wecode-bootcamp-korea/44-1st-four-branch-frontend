import React from 'react';
import './CartItem.scss';

function CartItem({ basketItem, handleQuantity, removeItem }) {
  return (
    <li className="cartItem">
      <div className="itemName">{basketItem.name}</div>
      <div className="quantityBox">
        <div
          className="minus"
          onClick={() => {
            handleQuantity('minus', basketItem.cartId, basketItem.quantity - 1);
          }}
        >
          -
        </div>
        <div>{basketItem.quantity}</div>
        <div
          className="plus"
          onClick={() => {
            handleQuantity('plus', basketItem.cartId, basketItem.quantity + 1);
          }}
        >
          +
        </div>
      </div>
      <div
        className="removeBtn"
        onClick={() => {
          removeItem(basketItem.cartId);
        }}
      >
        삭제
      </div>
      <div className="itemPrice">{`₩ ${Math.floor(
        basketItem.totalPriceByP
      ).toLocaleString()}`}</div>
    </li>
  );
}

export default CartItem;
