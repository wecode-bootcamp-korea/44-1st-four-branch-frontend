import React from 'react';
import './CartMessage.scss';

function CartMessage({ addBasketClose }) {
  return (
    <div className="cartMessage">
      <div className="cartContents">
        <div
          className="closeBtn"
          onClick={() => {
            addBasketClose();
          }}
        >
          ✕
        </div>
        <div className="putIn">선택한 상품이 장바구니에 담겼습니다.</div>
        <div
          className="shopping"
          onClick={() => {
            addBasketClose();
          }}
        >
          계속 쇼핑하기
        </div>
      </div>
    </div>
  );
}

export default CartMessage;
