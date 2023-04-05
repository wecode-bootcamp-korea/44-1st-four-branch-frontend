import React, { useState, useEffect } from 'react';
import { FiPlusCircle, FiHeart } from 'react-icons/fi';
import Logo from '../../../assets/ProductDetail/aesop-logo.png';
import ProductRelated from './ProductRelated/ProductRelated';
import './ProductHeader.scss';

function ProductHeader() {
  const [productDetailList, setProductDetailList] = useState([]);

  useEffect(() => {
    fetch('/data/productDetailList.json')
      .then(response => response.json())
      .then(result => setProductDetailList(result));
  }, []);

  return (
    <div>
      {productDetailList.map(productInfo => {
        return (
          <div className="productHeader" key={productInfo.id}>
            <section className="logoContainer">
              <img src={Logo} alt="logo" />
            </section>
            <section className="productImageContainer">
              <img src={productInfo.image} alt={productInfo.name} />
            </section>
            <section className="productDetailContainer">
              <div className="productTitle">
                <div className="productCategoryLink">
                  {productInfo.mainCategory}
                  <div className="divideDot" />
                  {productInfo.subCategory}
                </div>
                <h2>{productInfo.name}</h2>
                <p>{productInfo.description}</p>
              </div>
              <ul className="productDetail">
                <li className="productIngredient">
                  <h6>주요 성분</h6>
                  <p>{productInfo.ingredient.join(', ')}</p>
                  <FiPlusCircle className="icon20 detailViewButton" />
                </li>
                <li className="productSize">
                  <h6>사이즈</h6>
                  <p>{productInfo.size}</p>
                </li>
              </ul>
              <button className="primaryButton">{`카트에 추가하기 - ${productInfo.price}`}</button>
              <div className="wishList">
                <FiHeart className="icon16 wishListOn" />
                <p>위시리스트에 담기</p>
              </div>
              <ProductRelated />
            </section>
          </div>
        );
      })}
    </div>
  );
}

export default ProductHeader;
