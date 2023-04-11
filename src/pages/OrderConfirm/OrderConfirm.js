import React, { useState, useEffect } from 'react';
import Logo from '../../assets/fourbsopLogo.png';
import './OrderConfirm.scss';

function OrderConfirm() {
  const [orderInfo, setOrderInfo] = useState([]);
  let totalNum = 0; 
  ({makeOrderInfo(orderItems).price})

  function makeOrderInfo(value) {
    return JSON.parse(value);
  }

  // const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('/data/orderInfo.json')
      // fetch('http://10.58.52.107:3000/orders', {
      //   method: 'GET',
      //   headers: {
      //     'Content-Type': 'application/json;charset=utf-8',
      //     Authorization: token
      //   },
      // }) .then(response => response.json())
      .then(result => setOrderInfo(result));
  }, []);
  // console.log(orderInfo.orderItems.price);
  return (
    <div className="orderConfirm">
      {orderInfo.map(
        (
          {
            orderNumber,
            orderDate,
            address,
            orderItems,
            orderStatus,
            totalPrice,
          },
          index
        ) => {
          return (
            <div key={index}>
              <section className="logoContainer">
                <img className="logo" src={Logo} alt="로고" />
              </section>
              <section className="contents">
                <h2 className="comment">장다희 님 감사합니다.</h2>
                <p>
                  감사합니다. 장다희님. 주문이 완료되었습니다. 추가 문의 사항이
                  있으시면 연락 주시기 바랍니다.
                </p>
                <form>
                  <div className="orderNum">
                    <h6>{`주문 번호 확인 ${orderNumber}`}</h6>
                    <p>{orderDate}</p>
                  </div>
                  <div className="detailInfo">
                    <section>
                      <h6 className="title">배송 정보</h6>
                      <p>장 다희</p>
                      <p>{makeOrderInfo(address).detail}</p>
                      <p>{makeOrderInfo(address).postcode}</p>
                      <p>{makeOrderInfo(address).country}</p>
                    </section>
                    <section>
                      <h6 className="title">주문 상태</h6>
                      <p>{orderStatus}</p>
                    </section>
                    <section>
                      <h6 className="title">지불 방법</h6>
                      <p>포인트</p>
                    </section>
                  </div>
                  <ul className="bills">
                    {makeOrderInfo(orderItems).map((item, index) => (
                      <li key={index}>
                        <p>{item.productName}</p>
                        <span>{item.size}</span>
                        <span />
                        <div>
                          <span>{`₩${Math.floor(
                            item.price
                          ).toLocaleString()}`}</span>
                          <span>{` x ${item.quantity}`}</span>
                        </div>
                      </li>
                    ))}
                    <li className="totalPrice" key={index}>
                      <span>합계</span>
                      <span className="totalNum">
                        {makeOrderInfo(orderItems).price}
                      </span>
                    </li>
                  </ul>
                </form>
              </section>
            </div>
          );
        }
      )}
    </div>
  );
}

export default OrderConfirm;
