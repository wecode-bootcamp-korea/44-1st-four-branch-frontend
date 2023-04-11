import React, { useState, useEffect } from 'react';
import Logo from '../../assets/fourbsopLogo.png';
import './OrderConfirm.scss';

function OrderConfirm() {
  const [orderInfo, setOrderInfo] = useState([]);
  console.log(orderInfo);
  useEffect(() => {
    fetch('/data/orderInfo.json')
      // fetch('http://10.58.52.107:3000/orders', {
      //   // method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8',
      //   },
      // })
      .then(response => response.json())
      .then(result => setOrderInfo(result));
  }, []);

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
        {orderInfo.map({id, orderNumber, orderDate} => (
          <form key={item.id}>
            <div className="orderNum">
              <h6>{`주문 번호 확인 ${item.orderNumber}`}</h6>
              <p>{item.orderDate}</p>
            </div>
            <div className="detailInfo">
              <section>
                <h6 className="title">배송 정보</h6>
                <p>장 다희</p>
                <p>{item.address.detail}</p>
                <p>{item.address.postcode}</p>
                <p>{item.address.country}</p>
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
                <p>{item.productName}</p>
                <span>{item.size}</span>
                <span />
                <h6>{`₩${Math.floor(item.price).toLocaleString()}`}</h6>
              </li>
              <li className="totalPrice">
                <p>합계</p>
                <h3 className="totalNum">{`₩${Math.floor(
                  item.totalPrice
                ).toLocaleString()}`}</h3>
              </li>
            </ul>
          </form>
        ))}
      </section>
    </div>
  );
}

export default OrderConfirm;
