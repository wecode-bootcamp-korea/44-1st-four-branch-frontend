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

  function categoryHandle(targetId) {
    if (targetId === 1) {
      navigate('/main');
      setCategory(false);
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
