import React from 'react';
import { useNavigate } from 'react-router-dom';
import logoImg from '../../../assets/main/fourbsopLogo.png';
import { CATEGORY_LIST } from '../NavData';
import './CategoryBox.scss';

function CategoryBox({
  categoryChange,
  categoryHandle,
  categoryBoxClose,
  handleCategoryName,
}) {
  const navigate = useNavigate();

  function goToProductList(targetId) {
    navigate(`/productlist/${targetId}?offset=0&limit=5`);
  }

  return (
    <div className="categoryBox">
      <nav>
        <div className="mainCategory">
          <ul className="flexStart">
            {CATEGORY_LIST.map(data => {
              return (
                <div
                  className="category"
                  key={data.id}
                  onClick={() => {
                    categoryHandle(data.categoryName);
                  }}
                >
                  {data.categoryName}
                </div>
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
          </ul>
        </div>
      </nav>
      <div className="categoryList">
        <ul className="subCategory">
          <img className="logoImg" alt="logoImage" src={logoImg} />
          <li className="categoryTitle">카테고리</li>
          {categoryChange[0].categoryList.map(data => {
            return (
              <li
                className="smallCategory"
                key={data.id}
                id={data.id}
                onClick={() => {
                  goToProductList(data.id);
                  categoryBoxClose();
                  handleCategoryName(data.name);
                }}
              >
                {data.name}
              </li>
            );
          })}
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
