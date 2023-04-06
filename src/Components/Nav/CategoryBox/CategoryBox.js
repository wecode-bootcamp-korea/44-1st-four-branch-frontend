import React from 'react';
import './CategoryBox.scss';

function CategoryBox({ categoryChange, categoryHandle }) {
  return (
    <div className="categoryBox">
      <nav>
        <ul>
          <div className="flexStart">
            {CATEGORY_LIST.map(data => {
              return (
                <li
                  key={data.id}
                  onClick={() => {
                    categoryHandle(data.id);
                  }}
                >
                  {data.categoryName}
                </li>
              );
            })}
            <li className="closeBtn">닫기 ✕</li>
          </div>
          <div className="flexEnd">
            <li className="loginBtn">로그인</li>
            <li className="wishList">위시리스트</li>
            <li className="cart">카트</li>
          </div>
        </ul>
      </nav>
      <div className="categoryMain">
        <ul>
          카테고리
          {categoryChange[0].categoryList.map((data, index) => {
            return <li key={index}>{data}</li>;
          })}
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

const CATEGORY_LIST = [
  { id: 1, categoryName: '홈' },
  { id: 2, categoryName: '스킨 케어' },
  { id: 3, categoryName: '바디 &핸드' },
  { id: 4, categoryName: '헤어' },
  { id: 5, categoryName: '향수' },
  { id: 6, categoryName: '스토어' },
];
