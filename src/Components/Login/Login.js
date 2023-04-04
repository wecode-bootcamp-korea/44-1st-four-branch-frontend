import React from 'react';
import './Login.scss';
import { FiX } from 'react-icons/fi';

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="iconHandlePage">
          <FiX className="icon20 closeButton" />
        </div>
        <h2>로그인</h2>
        <form>
          <input className="email inputW500" placeholder="이메일 주소" />
          <div className="password">
            <input
              className="inputW500"
              placeholder="비밀번호"
              type="password"
            />
            <div className="passwordTypeButton">보기</div>

            <div className="passwordReset">비밀번호 재설정하기</div>
          </div>
        </form>
        <button className="primaryButton loginButton">로그인</button>
        <div>
          <h4>회원이 아니신가요?</h4>
          <button className="secondaryButton signupButton">회원가입</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
