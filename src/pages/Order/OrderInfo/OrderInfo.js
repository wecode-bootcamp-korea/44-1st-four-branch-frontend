import React from 'react';
import './OrderInfo.scss';

function OrderInfo() {
  return (
    <div className="orderInfo">
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
        <div className="deliveryInfo">
          <div className="sendTo">주문을 어디로 보내시겠습니까?</div>
          <div className="nameInput">
            <div>
              <div>
                <label>성</label>
              </div>
              <input
                className="firstName"
                name="firstName"
                type="text"
                placeholder="성"
              />
            </div>
            <div>
              <div>
                <label>이름</label>
              </div>
              <input
                className="lastName"
                name="lastName"
                type="text"
                placeholder="이름"
              />
            </div>
          </div>
          <div>
            <label htmlFor="countryCode">국가 코드</label>
            <select id="countryCode">
              <option value="KOR">KOR</option>
              <option>나열되지 않은 국가</option>
            </select>
            <input
              className="phoneNumber"
              name="phoneNumber"
              placeholder="전화번호 (010-0000-0000)"
            />
          </div>
          <label>국가</label>
          <select>
            <option>대한민국</option>
            <option>나열되지 않은 국가</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default OrderInfo;

const ORDER_PROCESS = ['고객 정보', '>', '배송', '>', '결제', '>', '주문확인'];
