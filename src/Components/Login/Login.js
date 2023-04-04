import React from 'react';
import './Login.scss';
import { FiX } from 'react-icons/fi';

function Login() {
  return (
    <div className="login">
      <div className="container">
        <div className="icon-handle-page">
          <FiX className="icon-20 close-button" />
        </div>
        <h3 className="title">로그인</h3>
        <form>
          <input className="email input-w500" placeholder="이메일 주소" />
          <div className="password">
            <input
              className="input-w500"
              placeholder="비밀번호"
              type="password"
            />
            <button className="password-type-button">보기</button>
          </div>
        </form>
        <button className="primary-button">로그인</button>
      </div>
    </div>
  );
}

export default Login;
