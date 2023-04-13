import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryForm from './CategoryForm/CategoryForm';
import CartBlackWindow from '../../pages/Main/CartBlackWindow/CartBlackWindow';
import UserBlackWindow from '../../pages/Main/UserBlackWindow/UserBlackWindow';
import Basket from '../Basket/Basket';
import CheckUser from '../CheckUser/CheckUser';
import LoginSuccess from '../LoginSuccess/LoginSuccess';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  CATEGORY_LIST,
  SKINCARE,
  BODYHAND_DATA,
  HAIR_DATA,
  PERFUME,
} from './NavData';
import './Nav.scss';

function Nav({ basket, setBasket, handleTotalPrice, handleCategoryName }) {
  const [userInfo, setUserInfo] = useState(false);
  const [userNameCheck, setUserNameCheck] = useState(false);
  const [loginStatus, setLoginStatus] = useState('');
  const [logOut, setLogOut] = useState('');
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
  const token = localStorage.getItem('TOKEN');

  function categoryHandle(targetId) {
    if (targetId === '홈') {
      navigate('/main');
      setCategory(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.document.body.style.overflow = 'scroll';
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
    window.document.body.style.overflow = 'hidden';
    setUserInfo(userInfo => !userInfo);
    setTimeout(() => {
      setScale('scale');
    }, 10);
  }

  function userInfoClose() {
    window.document.body.style.overflow = 'scroll';
    setUserInfo(userInfo => !userInfo);
    setScale('');
  }

  function loginSuccessClose() {
    setUserNameCheck(false);
  }

  function handleLogOut() {
    localStorage.removeItem('TOKEN');
    setLogOut('');
  }

  function cartOpen() {
    setCartModal('slide');
    setCart(cart => !cart);
  }

  function cartClose() {
    setCartModal('');
    setCart(cart => !cart);
  }

  function orderMove() {
    navigate('./order');
    setCartModal('');
    setCart(cart => !cart);
  }

  return (
    <>
      {userNameCheck && (
        <LoginSuccess
          userNameCheck={userNameCheck}
          loginSuccessClose={loginSuccessClose}
        />
      )}
      {userInfo && (
        <CheckUser
          userInfoClose={userInfoClose}
          scale={scale}
          userNameCheck={userNameCheck}
          setUserNameCheck={setUserNameCheck}
          setLoginStatus={setLoginStatus}
          setLogOut={setLogOut}
        />
      )}
      {userInfo && <UserBlackWindow userInfoClose={userInfoClose} />}
      {category && (
        <CategoryForm
          categoryChange={categoryChange}
          categoryHandle={categoryHandle}
          categoryBoxClose={categoryBoxClose}
          handleCategoryName={handleCategoryName}
        />
      )}
      <Basket
        cartModal={cartModal}
        cartClose={cartClose}
        basket={basket}
        setBasket={setBasket}
        orderMove={orderMove}
        handleTotalPrice={handleTotalPrice}
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
            <li className="search">
              <div>검색</div>
              <AiOutlineSearch />
            </li>
          </div>
          <div className="flexEnd">
            {token ? (
              <li>{`${loginStatus}님`}</li>
            ) : (
              <li className="loginButton" onClick={userInfoOpen}>
                로그인
              </li>
            )}
            <li>위시리스트</li>
            <li className="cartBtn" onClick={cartOpen}>
              <div>카트</div>
              {basket.length === 0 ? null : (
                <div className="cartQuantity">{basket.length}</div>
              )}
            </li>
            {token && (
              <li className="logoutBtn" onClick={handleLogOut}>
                {logOut}
              </li>
            )}
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
