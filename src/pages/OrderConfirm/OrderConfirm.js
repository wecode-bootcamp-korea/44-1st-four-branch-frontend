import React, { useState, useEffect } from 'react';
import Logo from '../../assets/fourbsopLogo.png';
import './OrderConfirm.scss';

function OrderConfirm() {
  const [orderInfo, setOrderInfo] = useState([]);
  let totalAmount = [];

  function makeOrderInfo(value) {
    return JSON.parse(value);
  }

  // const token = localStorage.getItem('token');
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIzLCJpYXQiOjE2ODEyMDQ1NjMsImV4cCI6MTY4MTYzNjU2M30._cA8Gy_gfkTmjqLsoEcLqOPHCvYo5YK5j50oH4Vn5K0';

  useEffect(() => {
    fetch('http://10.58.52.79:3000/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
    })
      .then(response => response.json())
      .then(result => setOrderInfo(result));
  }, []);

  return (
    <div className="orderConfirm">
      {orderInfo.map((info, index) => {
        return (
          <div className="orderConfirmWrap" key={index}>
            <section className="logoContainer">
              <img className="logo" src={Logo} alt="로고" />
            </section>
            <section className="contents">
              <h2 className="comment">{`${info.userFirstName} ${info.userLastName} 님 감사합니다.`}</h2>
              <p>
                {`감사합니다. ${info.userFirstName} ${info.userLastName} 님. 주문이 완료되었습니다. 추가 문의 사항이
                있으시면 연락 주시기 바랍니다.`}
              </p>

              <form>
                <div className="orderNum">
                  <div>
                    <span>주문 번호 </span>
                    <span className="num">{info.orderNumber}</span>
                  </div>
                  <p>{info.orderDate}</p>
                </div>
                <div className="detailInfo">
                  <div>
                    <h6 className="title">배송 정보</h6>
                    <p>{`${info.userFirstName} ${info.userLastName}`}</p>
                    <p>{makeOrderInfo(info.userAddress).country}</p>
                    <p>{makeOrderInfo(info.userAddress).postcode}</p>
                    <p>{makeOrderInfo(info.userAddress).detail}</p>
                  </div>
                  <div>
                    <h6 className="title">주문 상태</h6>
                    <p>{info.orderStatus}</p>
                  </div>
                  <div>
                    <h6 className="title">지불 방법</h6>
                    <p>포인트</p>
                  </div>
                </div>
                <ul className="bills">
                  {makeOrderInfo(info.orderItems).map((item, index) => (
                    <li key={index}>
                      <p className="productName">{item.productName}</p>
                      <span>{item.size}</span>
                      <div className="productPrice">
                        <span>{`₩ ${Math.floor(
                          item.price
                        ).toLocaleString()}`}</span>
                        <span>{` x ${item.quantity}`}</span>
                      </div>
                    </li>
                  ))}
                  <li className="totalPrice">
                    <span>합계</span>
                    <span className="totalNum">
                      {`₩ ${Math.floor(
                        (totalAmount = makeOrderInfo(
                          orderInfo[0].orderItems
                        ).reduce(
                          (accumulator, currentValue) =>
                            accumulator +
                            currentValue.price * currentValue.quantity,
                          0
                        ))
                      ).toLocaleString()}`}
                    </span>
                  </li>
                </ul>
              </form>
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default OrderConfirm;
