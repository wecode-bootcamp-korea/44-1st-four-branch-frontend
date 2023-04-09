import React from 'react';
import './CartItem.scss';

function CartItem({ basketItem, handleQuantity }) {
  return (
    <li className="cartItem">
      <div className="itemName">{basketItem.name}</div>
      <div className="quantityBox">
        <div
          className="minus"
          onClick={() => {
            handleQuantity('minus', basketItem.id, basketItem.quantity - 1);
          }}
        >
          -
        </div>
        <div>{basketItem.quantity}</div>
        <div
          className="plus"
          onClick={() => {
            handleQuantity('plus', basketItem.id, basketItem.quantity + 1);
          }}
        >
          +
        </div>
      </div>
      <div className="removeBtn">삭제</div>
      <div className="itemPrice">{`₩ ${Math.floor(
        basketItem.quantity * basketItem.price
      ).toLocaleString()}`}</div>
    </li>
  );
}

export default CartItem;
