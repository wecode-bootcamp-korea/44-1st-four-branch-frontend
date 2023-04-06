import React, { useState } from 'react';
import CategoryForm from './CategoryForm/CategoryForm';
import './Nav.scss';

function Nav() {
  const [category, setCategory] = useState(false);
  const [categoryChange, setCategoryChange] = useState([]);

  function categoryHandle(targetId) {
    if (targetId === 1) {
      alert('메인으로 이동');
    } else if (targetId === 2) {
      setCategoryChange(SKINCARE);
      setCategory(true);
    } else if (targetId === 3) {
      setCategoryChange(BODYHAND_DATA);
      setCategory(true);
    } else if (targetId === 4) {
      setCategoryChange(HAIR_DATA);
      setCategory(true);
    } else if (targetId === 5) {
      setCategoryChange(PERFUME);
      setCategory(true);
    }
  }

  return (
    <>
      {category && (
        <CategoryForm
          categoryChange={categoryChange}
          categoryHandle={categoryHandle}
        />
      )}
      <nav className="nav">
        <ul className="navigation">
          <div className="flexStart">
            {CATEGORY_LIST.map(category => {
              return (
                <li
                  className="categoryList"
                  key={category.id}
                  id={category.id}
                  onClick={() => {
                    categoryHandle(category.id);
                  }}
                >
                  {category.categoryName}
                </li>
              );
            })}
          </div>
          <div className="flexEnd">
            <li className="loginButton">로그인</li>
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
  { id: 1, categoryName: '홈' },
  { id: 2, categoryName: '스킨 케어' },
  { id: 3, categoryName: '바디 &핸드' },
  { id: 4, categoryName: '헤어' },
  { id: 5, categoryName: '향수' },
  { id: 6, categoryName: '스토어' },
];

const SKINCARE = [
  {
    categoryList: [
      '모두보기',
      '클렌저',
      '각질 제거',
      '트리트먼트 & 마스크',
      '토너',
    ],
    categoryImage:
      'https://www.aesop.com/u1nb1km7t5q7/6Va39pw5RZBeMeQ9fdy2Zi/cdc6a081e7c8a3c361226cc5f86bb2cb/Aesop_Homepage_Navigation_Category_Skin_Desktop_1700x2400px.jpg',
  },
];

const BODYHAND_DATA = [
  {
    categoryList: ['모두보기', '핸드', '바디'],
    categoryImage:
      'https://www.aesop.com/u1nb1km7t5q7/11tFhBHEqkvZwHOiZMqGXo/0e2830ab4f36be98df48da3c57da1d5d/Aesop_Homepage_Navigation_Category_Body_Hand_Desktop_1700x2400px.jpg',
  },
];

const HAIR_DATA = [
  {
    categoryList: ['모두보기', '샴푸', '컨디셔너', '트리트먼트'],
    categoryImage:
      'https://www.aesop.com/u1nb1km7t5q7/1fi7x3gxHOba7MFtIctntt/9e47c7b14c67f3ed28df74c416090251/Aesop_Homepage_Navigation_Category_Hair_Desktop_1700x2400px.jpg',
  },
];

const PERFUME = [
  {
    categoryList: ['모두보기', '플로럴', '프레쉬', '우디', '오퓰런트'],
    categoryImage:
      'https://www.aesop.com/u1nb1km7t5q7/6hAuVvwJ8jj5GYOVhsCAqB/82bcf2e821b13258afad2c64406f8e29/Aesop_Homepage_Navigation_Category_Fragrance_Desktop_1700x2400px.jpg',
  },
];
