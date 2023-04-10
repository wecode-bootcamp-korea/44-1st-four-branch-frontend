import React, { useEffect, useState } from 'react';
import logoImg from '../../assets/productlist/aesop-logo.png';
import ItemDisplay from './ItemDisplay/ItemDisplay';
import './ProductList.scss';

function ProductList() {
<<<<<<< HEAD
  return <div className="productList" />;
=======
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    fetch('http://10.58.52.89:3000/products')
      .then(response => response.json())
      .then(result => {
        setProductData(result);
      });
  }, []);

  return (
    <div className="productList">
      <img className="logoImage" src={logoImg} alt="로고 이미지" />
      <h2 className="categoryTitle">클렌저</h2>
      <nav className="categoryBar">
        <ul className="categoryList">
          {CATEGORY_LIST.map((category, index) => {
            return (
              <li key={index} className="category">
                {category}
              </li>
            );
          })}
        </ul>
        <div className="filter">
          <p className="text">필터</p>
          <p className="underArrow">⌵</p>
        </div>
      </nav>
      <section>
        <div className="itemListInfo">
          <h3 className="title">처음의 시작</h3>
          <p className="itemIntroduce">
            각질, 불필요한 유분 그리고 기타 잔여물을 말끔히 씻어내어 피부를
            깨끗하게 하는 것은 인텔리전트 스킨케어의 기초입니다.
          </p>
        </div>
        {productData.map(data => {
          return <ItemDisplay key={data.id} data={data} />;
        })}
      </section>
    </div>
  );
>>>>>>> main
}

export default ProductList;

const CATEGORY_LIST = [
  '모두 보기',
  '|',
  '클렌저',
  '토너',
  '각질',
  '트리트먼트 & 마스트',
];
