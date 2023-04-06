import React from 'react';
import { useState } from 'react';
import CategoryBox from '../../pages/Main/CategoryBox/CategoryBox';
import UserBlackWindow from '../../pages/Main/UserBlackWindow/UserBlackWindow';
import CheckUser from '../CheckUser/CheckUser';
import './Nav.scss';

function Nav() {
  const [userInfo, setUserInfo] = useState(false);

  function userInfoOpen() {
    setUserInfo(true);
  }

  function userInfoClose() {
    setUserInfo(false);
  }

  return (
    <>
      {/* <CategoryBox /> */}
      {userInfo && <CheckUser userInfoClose={userInfoClose} />}
      {userInfo && <UserBlackWindow userInfoClose={userInfoClose} />}
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
            <li>카트</li>
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

const SKINCARE = ['홈', '스킨 케어', '바디 & 핸드', '헤어', '향수', '스토어'];
