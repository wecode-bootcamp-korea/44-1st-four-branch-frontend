import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logoImg from '../../assets/main/fourbsopLogo.png';
import ItemDisplay from './ItemDisplay/ItemDisplay';
import './ProductList.scss';

function ProductList() {
  const [productData, setProductData] = useState([]);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    fetch(`http://10.58.52.90:3000/products?${id}`)
      .then(response => response.json())
      .then(result => {
        setProductData(result);
      });
  }, [id]);

  function handleFilter() {
    setIsOpenFilter(prev => !prev);
  }

  function filterDesc() {
    fetch(`http://10.58.52.90:3000/products?${id}&orderby=price&sorting=DESC`)
      .then(response => response.json())
      .then(result => setProductData(result));
  }

  function filterAsc() {
    fetch(`http://10.58.52.90:3000/products?${id}&orderby=price&sorting=ASC`)
      .then(response => response.json())
      .then(result => setProductData(result));
  }

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
        <div className="filter" onClick={handleFilter}>
          <p className="text">정렬</p>
          <p className="underArrow">⌵</p>
          {isOpenFilter && (
            <ul className="filterOpen">
              <li className="priceAsc" onClick={filterDesc}>
                높은가격순
              </li>
              <li className="desc" onClick={filterAsc}>
                낮은가격순
              </li>
            </ul>
          )}
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
