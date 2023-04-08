import React from 'react';
import { useState } from 'react';
import CartBlackWindow from '../../pages/Main/CartBlackWindow/CartBlackWindow';
import UserBlackWindow from '../../pages/Main/UserBlackWindow/UserBlackWindow';
import Basket from '../Basket/Basket';
import CheckUser from '../CheckUser/CheckUser';
import LoginSuccess from '../LoginSuccess/LoginSuccess';
import './Nav.scss';

function Nav() {
  const [userInfo, setUserInfo] = useState(false);
  const [cartModal, setCartModal] = useState('');
  const [cart, setCart] = useState(false);

  function userInfoOpen() {
    setUserInfo(true);
  }

  function userInfoClose() {
    setUserInfo(false);
  }

  function cartOpen() {
    setCartModal('slide');
    setCart(cart => !cart);
  }

  function cartClose() {
    setCartModal('');
    setCart(cart => !cart);
  }

  return (
    <>
      {userInfo && <CheckUser userInfoClose={userInfoClose} />}
      {userInfo && <UserBlackWindow userInfoClose={userInfoClose} />}
      {/* <LoginSuccess /> */}
      <Basket cartModal={cartModal} cartClose={cartClose} />
      {cart && <CartBlackWindow cartClose={cartClose} />}
      <nav className="nav">
        <ul className="navigation">
          <div className="flexStart">
            {CATEGORY_LIST.map((category, index) => {
              return <li key={index}>{category}</li>;
            })}
          </div>
          <div className="flexEnd">
            <li className="loginButton" onClick={userInfoOpen}>
              로그인
            </li>
            <li>위시리스트</li>
            <li onClick={cartOpen}>카트</li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Nav;

const CATEGORY_LIST = [
  '홈',
  '스킨 케어',
  '바디 & 핸드',
  '헤어',
  '향수',
  '스토어',
];

// const SKINCARE = ['홈', '스킨 케어', '바디 & 핸드', '헤어', '향수', '스토어'];
