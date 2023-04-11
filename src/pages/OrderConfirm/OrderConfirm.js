import React, { useState, useEffect } from 'react';
import Logo from '../../assets/fourbsopLogo.png';
import './OrderConfirm.scss';

function OrderConfirm() {
  const [orderInfo, setOrderInfo] = useState([]);

  // useEffect(() => {

  //   fetch('http://10.58.52.90:3000/products?pid=1', {
  //     // method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //     },
  //   })

      fetch('http://10.58.52.90:3000/products?pid=1', {
      // method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => setOrderInfo(result));
  }, []);

  const {
    orderNumber,
    orderDate,
    address,
    productName,
    size,
    price,
    totalPrice,
  } = orderInfo;

  return (
    <div className="orderConfirm">
      <section className="logoContainer">
        <img className="logo" src={Logo} alt="로고" />
      </section>
      <section className="contents">
        <h2 className="comment">장다희 님 감사합니다.</h2>
        <p>
          감사합니다. 장다희님. 주문이 완료되었습니다. 추가 문의 사항이 있으시면
          연락 주시기 바랍니다.
        </p>
        <form>
          <div className="orderNum">
            <h6>주문 번호 확인 {orderNumber}</h6>
            <p>2023-04-27</p>
          </div>
          <div className="detailInfo">
            <section>
              <h6 className="title">배송 정보</h6>
              <p>장 다희</p>
              <p>서울 강남구..</p>
              <p>우편번호</p>
              <p>대한민국</p>
            </section>
            <section>
              <h6 className="title">주문 상태</h6>
              <p>배송 완료</p>
            </section>
            <section>
              <h6 className="title">지불 방법</h6>
              <p>포인트</p>
            </section>
          </div>
          <ul className="bills">
            <li>
              <p>레버런스 밤</p>
              <span>75ml</span>
              <span>W33,000 x 1</span>
              <h6>W33,000</h6>
            </li>
            <li className="totalPrice">
              <p>합계</p>
              <h3 className="totalNum">W33,000</h3>
            </li>
          </ul>
        </form>
      </section>
    </div>
  );
}

export default OrderConfirm;
