import React from 'react';
import { useState } from 'react';
import CartBlackWindow from '../../pages/Main/CartBlackWindow/CartBlackWindow';
import UserBlackWindow from '../../pages/Main/UserBlackWindow/UserBlackWindow';
import Basket from '../Basket/Basket';
import CheckUser from '../CheckUser/CheckUser';
import './Nav.scss';

function Nav({ basket, setBasket }) {
  const [userInfo, setUserInfo] = useState(false);
  const [scale, setScale] = useState('');
  const [cartModal, setCartModal] = useState('');
  const [cart, setCart] = useState(false);

  function userInfoOpen() {
    setUserInfo(userInfo => !userInfo);
    setTimeout(() => {
      setScale('scale');
    }, 10);
  }

  function userInfoClose() {
    setUserInfo(userInfo => !userInfo);
    setScale('');
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
      {userInfo && <CheckUser userInfoClose={userInfoClose} scale={scale} />}
      {userInfo && <UserBlackWindow userInfoClose={userInfoClose} />}
      <Basket
        cartModal={cartModal}
        cartClose={cartClose}
        basket={basket}
        setBasket={setBasket}
      />
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
            <li className="cartBtn" onClick={cartOpen}>
              <div>카트</div>
              {basket.length === 0 ? null : (
                <div className="cartQuantity">{basket.length}</div>
              )}
            </li>
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
