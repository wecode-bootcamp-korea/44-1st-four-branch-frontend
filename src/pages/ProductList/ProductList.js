import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import logoImg from '../../assets/main/fourbsopLogo.png';
import ItemDisplay from './ItemDisplay/ItemDisplay';
import './ProductList.scss';

function ProductList({ categoryName }) {
  const [productData, setProductData] = useState([]);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const params = useParams();
  const { id } = params;
  const [searchParams, setSearchParams] = useSearchParams();
  const offset = searchParams.get('offset');
  const limit = searchParams.get('limit');

  useEffect(() => {
    fetch(
      `http://10.58.52.90:3000/products?${id}&offset=${offset}&limit=${limit}`
    )
      .then(response => response.json())
      .then(result => {
        setProductData(result);
      });
  }, [id, offset]);

  function handlePageNation(offsetValue) {
    searchParams.set('offset', (offsetValue - 1) * 5);
    setSearchParams(searchParams);
  }

  function handleFilter() {
    setIsOpenFilter(prev => !prev);
  }

  function filterDesc() {
    fetch(
      `http://10.58.52.90:3000/products?${id}&offset=${offset}&limit=${limit}&orderby=price&sorting=DESC`
    )
      .then(response => response.json())
      .then(result => setProductData(result));
  }

  function filterAsc() {
    fetch(
      `http://10.58.52.90:3000/products?${id}&offset=${offset}&limit=${limit}&orderby=price&sorting=ASC`
    )
      .then(response => response.json())
      .then(result => setProductData(result));
  }

  return (
    <div className="productList">
      <img className="logoImage" src={logoImg} alt="로고 이미지" />
      <nav className="categoryBar">
        <h2 className="categoryTitle">{categoryName}</h2>
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
          <h3 className="title">최소한의 루틴</h3>
          <p className="itemIntroduce">
            있는 그대로 충분하다, 무언가를 더하기보다 있는 그대로의 모습을
            들여다보고 그 본여의 가치를 살리려는 노력
          </p>
        </div>
        {productData.map(data => {
          return <ItemDisplay key={data.id} data={data} />;
        })}
      </section>
      <div className="pagenation">
        <button
          className="pageButton"
          onClick={() => {
            handlePageNation(1);
          }}
        >
          1
        </button>
        <button
          className="pageButton"
          onClick={() => {
            handlePageNation(2);
          }}
        >
          2
        </button>
      </div>
    </div>
  );
}

export default ProductList;
