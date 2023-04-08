import React from 'react';
import CartList from './CartList/CartList';
import './Basket.scss';

function Basket({ cartModal, cartClose }) {
  return (
    <div className={`basket ${cartModal}`}>
      <CartList cartClose={cartClose} />
      <div className="paymentBox">
        <div className="paymentContent">
          <div className="promotion">
            <div>프로모션 코드 적용</div>
            <div className="plus">⊕</div>
          </div>
          <div className="freeDelivery">
            전 제품 무료 배송 혜택을 즐겨보세요.
          </div>
          <div className="price">
            <div>소계 (세금포함)</div>
            <div className="totalPrice">₩ 222,000</div>
          </div>
          <div className="payment">결제하기</div>
        </div>
      </div>
    </div>
  );
}

export default Basket;
