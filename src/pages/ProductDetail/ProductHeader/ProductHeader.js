import React, { useState, useEffect } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import Logo from '../../../assets/ProductDetail/aesop-logo.png';
import ProductWishList from './ProductWishList/ProductWishList';
import ProductRelated from './ProductRelated/ProductRelated';
import ModalDetailView from '../ModalDetailView/ModalDetailView';

import './ProductHeader.scss';

function ProductHeader({ isOpenModal, modalView, slide, isCloseModal }) {
  const [productDetailList, setProductDetailList] = useState([]);
  const [wishList, setWishList] = useState(false);

  function handleWIshList() {
    wishList === false ? setWishList(true) : setWishList(false);
  }

  useEffect(() => {
    // fetch('/data/productDetailList.json')
    //   .then(response => response.json())
    //   .then(result => setProductDetailList(result));

    fetch('http://10.58.52.89:3000/products?pid=1', {
      // method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => setProductDetailList(result));
  }, []);

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
          const ingredientList = JSON.parse(ingredients);
          return (
            <div className={`productHeader ${slide}`} key={id}>
              <section className="logoContainer">
                <img className="logo" src={Logo} alt="logo" />
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
                    <p className="ingredientText">{`${ingredientList[1]}, ${ingredientList[2]}, ${ingredientList[3]}`}</p>
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
