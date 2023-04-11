import React, { useState, useEffect } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import logoImg from '../../../assets/main/aesop-logo.png';
import ProductWishList from './ProductWishList/ProductWishList';
import ModalDetailView from '../ModalDetailView/ModalDetailView';

import './ProductHeader.scss';
import { useParams } from 'react-router-dom';

function ProductHeader({ isOpenModal, modalView, slide, isCloseModal }) {
  const [productDetailList, setProductDetailList] = useState([]);
  const [wishList, setWishList] = useState(false);
  const params = useParams();
  const { id } = params;

  function handleWIshList() {
    setWishList(wishList => !wishList);
  }

  function makeIngredientList(value) {
    return JSON.parse(value);
  }

  useEffect(() => {
    fetch(`http://10.58.52.90:3000/products?pid=${id}`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => setProductDetailList(result));
  }, [id]);

  return (
    <div>
      {isOpenModal && (
        <ModalDetailView
          modalView={modalView}
          productDetailList={productDetailList}
          isCloseModal={isCloseModal}
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
          return (
            <div className={`productHeader ${slide}`} key={id}>
              <section className="logoContainer">
                <img className="logo" src={logoImg} alt="logo" />
              </section>
              <section className="productImageContainer">
                <img className="productImage" src={imageUrl} alt={name} />
              </section>
              <section className="productDetailContainer">
                <div className="productTitleContainer">
                  <div className="productCategoryLink">
                    {mainCategoryName}
                    <div className="divideDot" />
                    {subCategoryName}
                  </div>
                  <h2 className="productName">{name}</h2>
                  <p className="productDescription">{description}</p>
                </div>
                <ul className="productDetail">
                  <li className="productIngredient">
                    <h6 className="ingredientTitle">주요 성분</h6>
                    <p className="ingredientText">
                      {makeIngredientList(ingredients)[0]},
                      {makeIngredientList(ingredients)[1]},
                      {makeIngredientList(ingredients)[2]}
                    </p>
                    <FiPlusCircle
                      className="detailViewButton"
                      onClick={isOpenModal}
                    />
                  </li>
                  <li className="productSize">
                    <h6 className="sizeTitle">사이즈</h6>
                    <p className="sizeText">{size}</p>
                  </li>
                </ul>
                <button className="primarySolidButton">{`카트에 추가하기 - ₩${Math.floor(
                  price
                ).toLocaleString()}`}</button>
                <ProductWishList
                  wishList={wishList}
                  handleWishList={handleWIshList}
                />
              </section>
            </div>
          );
        }
      )}
    </div>
  );
}

export default ProductHeader;
