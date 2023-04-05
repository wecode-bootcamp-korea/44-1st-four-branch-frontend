import React, { useState, useEffect } from 'react';
import { FiPlusCircle, FiHeart } from 'react-icons/fi';
import Logo from '../../../assets/ProductDetail/aesop-logo.png';
import ProductRelated from './ProductRelated/ProductRelated';
import ModalDetailView from '../ModalDetailView/ModalDetailView';

import './ProductHeader.scss';

function ProductHeader({ isOpenModal, modalView, slide }) {
  const [productDetailList, setProductDetailList] = useState([]);

  useEffect(() => {
    fetch('/data/productDetailList.json')
      .then(response => response.json())
      .then(result => setProductDetailList(result));
  }, []);

  return (
    <div>
      {isOpenModal && (
        <ModalDetailView
          modalView={modalView}
          productDetailList={productDetailList}
        />
      )}
      {productDetailList.map(
        ({
          ingredients,
          id,
          imageUrl,
          name,
          mainCategoryName,
          subCategoryName,
          description,
          size,
          price,
        }) => {
          const ingredientList = JSON.parse(ingredients);
          return (
            <div className={`productHeader ${slide}`} key={id}>
              <section className="logoContainer">
                <img src={Logo} alt="logo" />
              </section>
              <section className="productImageContainer">
                <img src={imageUrl} alt={name} />
              </section>
              <section className="productDetailContainer">
                <div className="productTitle">
                  <div className="productCategoryLink">
                    {mainCategoryName}
                    <div className="divideDot" />
                    {subCategoryName}
                  </div>
                  <h2>{name}</h2>
                  <p>{description}</p>
                </div>
                <ul className="productDetail">
                  <li className="productIngredient">
                    <h6>주요 성분</h6>
                    <p>{`${ingredientList[1]}, ${ingredientList[2]}, ${ingredientList[3]}`}</p>
                    {/* <p>만다린, 로즈마리 리프, 시더우드 아틀라스ß</p> */}
                    <FiPlusCircle
                      className="icon20 detailViewButton"
                      onClick={isOpenModal}
                    />
                  </li>
                  <li className="productSize">
                    <h6>사이즈</h6>
                    <p>{size}</p>
                  </li>
                </ul>
                <button className="primaryButton">{`카트에 추가하기 - ${price}`}</button>
                <div className="wishList">
                  <FiHeart className="icon16 wishListOn" />
                  <p>위시리스트에 담기</p>
                </div>
                <ProductRelated />
              </section>
            </div>
          );
        }
      )}
    </div>
  );
}

export default ProductHeader;
