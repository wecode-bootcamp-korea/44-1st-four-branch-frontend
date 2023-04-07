import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CategoryForm from './CategoryForm/CategoryForm';
import './Nav.scss';
import {
  CATEGORY_LIST,
  SKINCARE,
  BODYHAND_DATA,
  HAIR_DATA,
  PERFUME,
} from './NavData';

function Nav() {
  const [category, setCategory] = useState(false);
  const [categoryChange, setCategoryChange] = useState([]);
  const navigate = useNavigate();

  const OBJ = {
    '스킨 케어': SKINCARE,
    '바디 & 핸드': BODYHAND_DATA,
    헤어: HAIR_DATA,
    향수: PERFUME,
  };

  function categoryHandle(targetId) {
    if (targetId === '홈') {
      navigate('/main');
    } else {
      setCategoryChange(OBJ[targetId]);
      setCategory(true);
    }
  }

  function categoryBoxClose() {
    setCategory(false);
  }

  return (
    <>
      {category && (
        <CategoryForm
          categoryChange={categoryChange}
          categoryHandle={categoryHandle}
          categoryBoxClose={categoryBoxClose}
        />
      )}
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
