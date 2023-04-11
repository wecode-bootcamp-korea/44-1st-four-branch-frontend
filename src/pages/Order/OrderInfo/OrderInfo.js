import React from 'react';
import './OrderInfo.scss';

function OrderInfo({ orderModal, setOrderModal, movePayment, enterBox }) {
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
          <div className="name">김영운 님</div>
          <div className="emailId">justreet@naver.com</div>
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
              />
              <input
                className="lastName"
                name="lastName"
                type="text"
                placeholder="이름"
              />
              <input
                className="phoneNumber"
                name="phoneNumber"
                placeholder="국가"
              />
              <input
                className="postCode"
                name="postCode"
                placeholder="우편번호"
              />
              <input
                className="betterAddress"
                name="betterAddress"
                placeholder="주소"
              />
              <button
                className="moveBtn"
                onClick={() => {
                  movePayment();
                }}
              >
                배송 정보로 이동
              </button>
            </div>
          </div>
        )}
        {orderModal === '결제' && (
          <>
            <div className="shippingAddress">
              <div className="deliveryTitle"> 배송 정보 </div>
              <div className="userName"> 김영운 </div>
              <div className="userAddress"> 서울 강남구 테헤란로 427, 1층 </div>
              <div className="userPostCode"> 06159 </div>
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
              <button className="pageMove">다음 페이지</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default OrderInfo;

const ORDER_PROCESS = ['고객 정보', '>', '배송', '>', '결제', '>', '주문확인'];