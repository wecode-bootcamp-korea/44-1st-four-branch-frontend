import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartList.scss';

function CartList({ cartClose }) {
  return (
    <ul className="cartList">
      <li className="cartListTitle">
        <div className="name">상품명</div>
        <div className="size">사이즈</div>
        <div className="quantity">수량</div>
        <div
          className="closeBtn"
          onClick={() => {
            cartClose();
          }}
        >
          ✕
        </div>
      </li>
      <CartItem />
      <CartItem />
    </ul>
  );
}

export default CartList;
