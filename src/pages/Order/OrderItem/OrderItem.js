import React from 'react';
import './OrderItem.scss';

function OrderItem() {
  return (
    <div className="orderItem">
      <div className="orderItemContents">
        <div className="subtotal">
          <div>소계 (세금 포함)</div>
          <div>₩ 99,000</div>
        </div>
        <div className="deliveryCharge">
          <div>배송</div>
          <div>₩ 0</div>
        </div>
        <div className="tax">
          <div>포함된 세금</div>
          <div>₩ 0</div>
        </div>
        <div className="total">
          <div>합계</div>
          <div className="totalPrice">₩ 99,000</div>
        </div>
        <div className="allItem">
          <div>모든 제품 보기 (2)</div>
          <div className="seeMore">⊕</div>
        </div>
        <div className="gift">
          <img
            className="giftImg"
            alt="선물 이미지"
            src="https://www.aesop.com/u1nb1km7t5q7/6lBVrzFupRhceSGPoHjEZn/91a435d514bd547ff0be64e834f7dee7/Aesop_Interactive_Order_Summary_Gift_Wrapping_KR_Tablet_800x800px.png"
          />
          <div>선물할 제품인가요?</div>
          <div className="change">변경</div>
        </div>
      </div>
    </div>
  );
}

export default OrderItem;
