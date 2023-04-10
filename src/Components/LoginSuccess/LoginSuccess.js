import React from 'react';
import './LoginSuccess.scss';

function LoginSuccess() {
  return (
    <div className="loginSuccess">
      <div className="contents">
        <div className="closeBtn">✕</div>
        <div className="greeting">돌아온 것을 환영합니다. 영운 님</div>
        <div className="success">성공적으로 로그인 하였습니다.</div>
        <div className="accountInfo">계정 정보 보기</div>
      </div>
    </div>
  );
}

export default LoginSuccess;
