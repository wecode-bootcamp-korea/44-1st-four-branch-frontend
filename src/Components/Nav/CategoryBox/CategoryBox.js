import React from 'react';
import './CategoryBox.scss';
import logoImg from '../../../assets/product/aesop-logo.png';
import { CATEGORY_LIST } from '../NavData';

function CategoryBox({ categoryChange, categoryHandle, categoryBoxClose }) {
  return (
    <div className="categoryBox">
      <nav>
        <ul className="mainCategory">
          <div className="flexStart">
            {CATEGORY_LIST.map(data => {
              return (
                <li
                  className="category"
                  key={data.id}
                  onClick={() => {
                    categoryHandle(data.categoryName);
                  }}
                >
                  {data.categoryName}
                </li>
              );
            })}
            <li
              onClick={() => {
                categoryBoxClose();
              }}
              className="closeBtn"
            >
              닫기 ✕
            </li>
          </div>
          <li className="flexEnd">
            <div className="loginBtn">로그인</div>
            <div className="wishList">위시리스트</div>
            <div className="cart">카트</div>
          </li>
        </ul>
      </nav>
      <div className="categoryList">
        <ul className="subCategory">
          <img className="logoImg" alt="logoImage" src={logoImg} />
          <li className="categoryTitle">카테고리</li>
          {categoryChange[0].categoryList.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
        </ul>
        <ul className="daily">
          <li className="categoryTitle">데일리 에센셜</li>
          <li>레저렉션 아로마틱 핸드 밤</li>
          <li>레저렉션 아로마틱 핸드 워시</li>
          <li>제라늄 리프 듀엣</li>
          <li>이그절티드 아이 세럼</li>
        </ul>
        <ul className="newArrival">
          <li className="categoryTitle">신제품</li>
          <li>사가지 이더시스 오 드 퍼퓸</li>
          <li>위 비 트리플 씨 페이셜 젤</li>
          <li>파스리 리프 듀엣 세럼</li>
        </ul>
        <div
          className="categoryBoxImg"
          style={{ backgroundImage: `url(${categoryChange[0].categoryImage})` }}
        />
      </div>
    </div>
  );
}

export default CategoryBox;
