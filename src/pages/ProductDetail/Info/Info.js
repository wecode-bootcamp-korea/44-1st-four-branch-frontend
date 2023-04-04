import React from 'react';
import { FiChevronUp } from 'react-icons/fi';
import './Info.scss';

function Info() {
  return (
    <div className="info">
      <ul>
        <li>
          <div className="title">
            <h2>상품의 지급방법 및 시기 안내</h2>
            <FiChevronUp className="icon20 closeButton" />
          </div>
          <p>
            이솝 온라인 몰에서 구매하고자 하는 제품에 대한 대금 지급은 신용카드
            등의 각종 카드 결제로 할 수 있습니다.
          </p>
        </li>
        <li>
          <div className="title">
            <h2>주문수량 및 배송국가 제한 안내</h2>
            <FiChevronUp className="icon20 closeButton" />
          </div>
          <p>
            1. 한 번 주문 시 동일 상품은 10개까지 구매가 가능합니다(일부 제품
            제외).
            <br />
            2. 배송 국가는 대한민국으로 한정되며 다른 나라의 배송을 원하실 경우
            해당 나라의 사이트를 이용해 주시기 바랍니다.
          </p>
        </li>
        <li>
          <div className="title">
            <h2>주문수량 및 배송국가 제한 안내</h2>
            <FiChevronUp className="icon20 closeButton" />
          </div>
          <p>
            1. 한 번 주문 시 동일 상품은 10개까지 구매가 가능합니다(일부 제품
            제외).
            <br />
            2. 배송 국가는 대한민국으로 한정되며 다른 나라의 배송을 원하실 경우
            해당 나라의 사이트를 이용해 주시기 바랍니다.
          </p>
        </li>
        <li>
          <div className="title">
            <h2>주문수량 및 배송국가 제한 안내</h2>
            <FiChevronUp className="icon20 closeButton" />
          </div>
          <p>
            1. 한 번 주문 시 동일 상품은 10개까지 구매가 가능합니다(일부 제품
            제외).
            <br />
            2. 배송 국가는 대한민국으로 한정되며 다른 나라의 배송을 원하실 경우
            해당 나라의 사이트를 이용해 주시기 바랍니다.
          </p>
        </li>
        <li>
          <div className="title">
            <h2>주문수량 및 배송국가 제한 안내</h2>
            <FiChevronUp className="icon20 closeButton" />
          </div>
          <p>
            1. 한 번 주문 시 동일 상품은 10개까지 구매가 가능합니다(일부 제품
            제외).
            <br />
            2. 배송 국가는 대한민국으로 한정되며 다른 나라의 배송을 원하실 경우
            해당 나라의 사이트를 이용해 주시기 바랍니다.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Info;
