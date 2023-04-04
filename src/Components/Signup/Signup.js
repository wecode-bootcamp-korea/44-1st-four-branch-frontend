import React from 'react';
import './Login.scss';

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="iconHandlePage">
          <FiArrowLeft className="icon20 prevButton" />
          <FiX className="icon20 closeButton" />
        </div>
        <h3 className="title">회원가입</h3>
        <p className="sub-text">
          회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을 재구매하실 수
          있습니다.
        </p>
        <form>
          <input className="lastName inputW240" placeholder="성" />
          <input className="firstName inputW240" placeholder="이름" />
          <input className="email inputW500" placeholder="이메일 주소" />
          <div className="password">
            <input
              className="inputW500"
              placeholder="비밀번호"
              type={passwordType.type}
            />
            <button
              className="password-typeButton"
              onClick={handlePasswordType}
            >
              {passwordType.text}
            </button>
          </div>
          <div className="checkBox">
            <input type="checkbox" />
            <span>본인은 만 14세 이상입니다 (필수)</span>
          </div>
          <div className="checkBox">
            <div>
              <input type="checkbox" />
              <span>이용 약관에 동의합니다 (필수)</span>
            </div>
            <div className="infoBox">
              이솝 온라인 몰 서비스 이용약관
              <br /> <br />
              이솝 온라인(이하'본 사이트')에 방문해주신 고객님께 감사드립니다.
              <br />이 약관은 이솝 코리아 유한회사가 운영하는 사이트에서
              제공하는 <br />
              인터넷 관련 서비스를 이용함에 있어 온라인 쇼핑몰과 이용자의 권리,{' '}
              <br />
              의무 및 책임사항을 규정함을 목적으로 합니다.
            </div>
          </div>
          <div className="checkBox">
            <div>
              <input type="checkbox" />
              <span>개인정보 수집 및 이용조건에 동의합니다 (필수)</span>
            </div>
            <div className="info-box">
              이솝 온라인 몰 서비스 이용약관
              <br /> <br />
              이솝 온라인(이하'본 사이트')에 방문해주신 고객님께 감사드립니다.
              <br />이 약관은 이솝 코리아 유한회사가 운영하는 사이트에서
              제공하는 <br />
              인터넷 관련 서비스를 이용함에 있어 온라인 쇼핑몰과 이용자의 권리,{' '}
              <br />
              의무 및 책임사항을 규정함을 목적으로 합니다.
            </div>
          </div>
          <div className="checkBox">
            <div>
              <input type="checkBox" />
              <span>마케팅 정보 수신에 동의합니다 (선택)</span>
            </div>
            <div className="infoBox">
              이솝 온라인 몰 서비스 이용약관
              <br /> <br />
              이솝 온라인(이하'본 사이트')에 방문해주신 고객님께 감사드립니다.
              <br />이 약관은 이솝 코리아 유한회사가 운영하는 사이트에서
              제공하는 <br />
              인터넷 관련 서비스를 이용함에 있어 온라인 쇼핑몰과 이용자의 권리,{' '}
              <br />
              의무 및 책임사항을 규정함을 목적으로 합니다.
            </div>
          </div>
        </form>
        <button className="primaryButtonSolid">회원가입</button>
      </div>
    </div>
  );
}

export default Signup;
