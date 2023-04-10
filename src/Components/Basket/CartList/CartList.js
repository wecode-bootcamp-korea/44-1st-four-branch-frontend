import React from 'react';
import CartItem from '../CartItem/CartItem';
import './CartList.scss';

function CartList({ cartClose, basket, handleQuantity, removeItem }) {
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
      {basket.length === 0 ? (
        <div className="isEmptyBasket">
          장바구니가 비어있습니다. <br />
          구매하실 상품을 장바구니에 담아주세요.
        </div>
      ) : (
        basket.map(basketItem => {
          return (
            <CartItem
              handleQuantity={handleQuantity}
              key={basketItem.id}
              id={basketItem.id}
              basketItem={basketItem}
              removeItem={removeItem}
            />
          );
        })
      )}
      {/* {basket.map(basketItem => {
        return (
          <CartItem
            handleQuantity={handleQuantity}
            key={basketItem.id}
            id={basketItem.id}
            basketItem={basketItem}
          />
        );
      })} */}
    </ul>
  );
}

export default CartList;
