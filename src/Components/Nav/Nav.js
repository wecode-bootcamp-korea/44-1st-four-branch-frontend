import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryForm from './CategoryForm/CategoryForm';
import CartBlackWindow from '../../pages/Main/CartBlackWindow/CartBlackWindow';
import UserBlackWindow from '../../pages/Main/UserBlackWindow/UserBlackWindow';
import Basket from '../Basket/Basket';
import CheckUser from '../CheckUser/CheckUser';
import {
  CATEGORY_LIST,
  SKINCARE,
  BODYHAND_DATA,
  HAIR_DATA,
  PERFUME,
} from './NavData';
import './Nav.scss';

function Nav({ basket, setBasket }) {
  const [userInfo, setUserInfo] = useState(false);
  const [scale, setScale] = useState('');
  const [cartModal, setCartModal] = useState('');
  const [cart, setCart] = useState(false);
  const [category, setCategory] = useState(false);
  const [categoryChange, setCategoryChange] = useState([]);
  const navigate = useNavigate();
  const MAIN_CATEGORY = {
    '스킨 케어': SKINCARE,
    '바디 & 핸드': BODYHAND_DATA,
    헤어: HAIR_DATA,
    향수: PERFUME,
  };

  function categoryHandle(targetId) {
    if (targetId === '홈') {
      navigate('/main');
      setCategory(false);
      window.document.body.style.overflow = 'scroll';
    } else {
      window.document.body.style.overflow = 'hidden';
      setCategoryChange(MAIN_CATEGORY[targetId]);
      setCategory(true);
    }
  }

  function categoryBoxClose() {
    setCategory(false);
    window.document.body.style.overflow = 'scroll';
  }

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
      {category && (
        <CategoryForm
          categoryChange={categoryChange}
          categoryHandle={categoryHandle}
          categoryBoxClose={categoryBoxClose}
        />
      )}
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
            {CATEGORY_LIST.map(category => {
              return (
                <li
                  className="categoryList"
                  key={category.categoryName}
                  id={category.categoryName}
                  onClick={() => {
                    categoryHandle(category.categoryName);
                  }}
                >
                  {category.categoryName}
                </li>
              );
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
