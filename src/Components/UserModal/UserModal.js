import React from 'react';
import './UserModal.scss';

function UserModal({ userInfoClose, data, modalChangehandle }) {
  const { title, button, button2 } = data;
  return (
    <div className="userModal">
      <div className="userInfo">
        <div className="closeBtn" onClick={userInfoClose}>
          ✕
        </div>
        <div className="title">{title}</div>
        {title === '회원가입' && (
          <div className="subTitle">
            회원가입을 통해 주문 내역을 확인하고 지난 구매 상품을 재구매하실 수
            있습니다.
          </div>
        )}
        <form>
          {title === '회원가입' && (
            <>
              <input className="firstName" placeholder="성" />
              <input className="lastName" placeholder="이름" />
            </>
          )}
          <input className="email" type="email" placeholder="이메일 주소" />
          <input className="password" type="password" placeholder="비밀번호" />
          {title === '로그인' && (
            <div className="passwordReset">비밀번호 재설정하기</div>
          )}
          {title === '회원가입' && (
            <div className="agreeInfo">
              <input type="checkbox" />
              <label>본인은 만 14세 이상입니다 (필수)</label>
              <input type="checkbox" />
              <label>이용 약관에 동의합니다 (필수)</label>
              <div className="squareBox" />
              <input type="checkbox" />
              <label>개인정보 수집 및 이용 조건에 동의합니다 (필수)</label>
              <div className="squareBox" />
              <input type="checkbox" />
              <label>마케팅 정보 수신에 동의합니다 (선택)</label>
              <div className="squareBox" />
            </div>
          )}
          <button
            className="submitBtn"
            onClick={e => {
              e.preventDefault();
            }}
          >
            {button}
          </button>
        </form>
        {title === '로그인' && (
          <div className="userConfirm">회원이 아니신가요?</div>
        )}
        <button
          className="signUpBtn"
          onClick={() => {
            modalChangehandle();
          }}
        >
          {button2}
        </button>
        {title === '회원가입' && (
          <div className="accountConfirm">
            이미 이솝 계정을 가지고 계십니까?
          </div>
        )}
      </div>
    </div>
  );
}

export default UserModal;
