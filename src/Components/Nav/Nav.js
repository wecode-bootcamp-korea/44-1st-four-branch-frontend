import React from 'react';
import './Nav.scss';

function Nav() {
  return (
    <nav className="nav">
      <ul>
        <div className="flexStart">
          {CATEGORY_LIST.map((category, index) => {
            return <li key={index}>{category}</li>;
          })}
        </div>
        <div className="flexEnd">
          <li>로그인</li>
          <li>위시리스트</li>
          <li>카트</li>
        </div>
      </ul>
    </nav>
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
