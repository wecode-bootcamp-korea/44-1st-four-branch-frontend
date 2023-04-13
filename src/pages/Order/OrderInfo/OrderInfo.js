import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './OrderInfo.scss';

function OrderInfo({
  orderModal,
  movePayment,
  enterBox,
  totalPrice,
  receiveInfo,
  setOrderConfirm,
}) {
  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    nation: '',
    postCode: '',
    address: '',
  });
  // const [orderNumber, setOrderNumber] = useState();
  const [receiveDelivery, setReceiveDelivery] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem('TOKEN');

  function handleUserInfo(e) {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  function submitUserInfo() {
    fetch(`http://10.58.52.90:3000/users/address`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        country: userInfo.nation,
        postcode: userInfo.postCode,
        detail: userInfo.address,
      }),
    })
      .then(response => response.json())
      .then(result => {
        console.log(result);
      });
  }

  console.log(receiveDelivery);

  function submitTotalPrice() {
    fetch(`http://10.58.52.90:3000/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        totalPrice,
      }),
    })
      .then(response => response.json())
      .then(result => {
        setReceiveDelivery(result);
      });
  }

  function pointPayment() {
    fetch(`http://10.58.52.90:3000/orders/pointpay`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        orderNumber: receiveDelivery.orderNumber,
      }),
    })
      .then(response => response.json())
      .then(result => {
        setOrderConfirm(result);
      });
  }

  function orderCompletedMove() {
    navigate('/ordercomplete');
  }

  return (
    <div className="orderInfo" ref={enterBox}>
      <nav className="orderNav">
        <ul className="orderProcess">
          {ORDER_PROCESS.map((process, i) => {
            return <li key={i}>{process}</li>;
          })}
        </ul>
      </nav>
      <div className="userInfoWrap">
        <div className="userInfo">
          <div className="orderUserName">
            <div className="userName">주문자 성함</div>
            <div className="edit">편집</div>
          </div>
          <div className="name">
            {`${receiveInfo.userFirstName}${receiveInfo.userLastName}`}님
          </div>
          <div className="emailId">{receiveInfo.email}</div>
        </div>
        {orderModal === '배송' && (
          <div className="deliveryInfo">
            <div className="sendTo">주문을 어디로 보내시겠습니까?</div>
            <div className="enterDeliveryInfo">
              <input
                className="firstName"
                name="firstName"
                type="text"
                placeholder="성"
                value={userInfo.firstName}
                onChange={handleUserInfo}
              />
              <input
                className="lastName"
                name="lastName"
                type="text"
                placeholder="이름"
                value={userInfo.lastName}
                onChange={handleUserInfo}
              />
              <input
                className="nation"
                name="nation"
                placeholder="국가"
                value={userInfo.nation}
                onChange={handleUserInfo}
              />
              <input
                className="postCode"
                name="postCode"
                placeholder="우편번호"
                value={userInfo.postCode}
                onChange={handleUserInfo}
              />
              <input
                className="address"
                name="address"
                placeholder="주소"
                value={userInfo.address}
                onChange={handleUserInfo}
              />
              <button
                className="moveBtn"
                onClick={() => {
                  movePayment();
                  submitUserInfo();
                  submitTotalPrice();
                }}
              >
                결제수단 선택
              </button>
            </div>
          </div>
        )}
        {orderModal === '결제' && (
          <>
            <div className="shippingAddress">
              <div className="deliveryTitle"> 배송 정보 </div>
              <div className="userName">
                {`${receiveDelivery.userFirstName}${receiveDelivery.userLastName}`}
              </div>
              <div className="userAddress">{receiveDelivery.addressDetail}</div>
              <div className="userPostCode"> {receiveDelivery.postcode} </div>
              <div className="free"> 무료 배송 ₩0</div>
            </div>
            <div className="termsOfPayment">
              <div className="paymentTitle"> 어떻게 지불하시겠습니까? </div>
              <div>
                <input
                  name="payment"
                  id="point"
                  type="radio"
                  checked="checked"
                />
                <label htmlFor="point">POINT 결제</label>
              </div>
              <div>
                <input name="payment" id="card" type="radio" />
                <label htmlFor="cart">카드 결제</label>
              </div>
              <button
                className="pageMove"
                onClick={() => {
                  pointPayment();
                  orderCompletedMove();
                }}
              >
                결제하기
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderInfo;

const ORDER_PROCESS = ['고객 정보', '>', '배송', '>', '결제', '>', '주문확인'];
