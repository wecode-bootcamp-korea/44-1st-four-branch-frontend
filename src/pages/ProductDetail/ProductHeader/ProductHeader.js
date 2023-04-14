import React, { useState, useEffect } from 'react';
import { FiPlusCircle } from 'react-icons/fi';
import logoImg from '../../../assets/main/fourbsopLogo.png';
import ProductWishList from './ProductWishList/ProductWishList';
import ModalDetailView from '../ModalDetailView/ModalDetailView';
import { useParams } from 'react-router-dom';
import CartMessage from '../../../Components/Basket/Cartma/CartMessage';
import './ProductHeader.scss';

function ProductHeader({
  isOpenModal,
  modalView,
  slide,
  isCloseModal,
  setBasket,
  cartPutIn,
  addBasketClose,
  addBasket,
}) {
  const [productDetailList, setProductDetailList] = useState({});
  const [wishList, setWishList] = useState(false);
  const params = useParams();
  const { id } = params;
  const token = localStorage.getItem('TOKEN');

  const ingredientsString = productDetailList?.ingredients;
  let ingredientsArray = [];
  if (ingredientsString && ingredientsString !== undefined) {
    [...ingredientsArray] = JSON.parse(ingredientsString);
  }

  function handleWIshList() {
    setWishList(wishList => !wishList);
  }

  useEffect(() => {
    fetch(`http://10.58.52.90:3000/products?pid=${id}`, {
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(response => response.json())
      .then(result => setProductDetailList(result[0]));
  }, [id]);

  function shoppingBasket() {
    fetch('http://10.58.52.90:3000/carts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: token,
      },
      body: JSON.stringify({
        productId: productDetailList.id,
      }),
    })
      .then(response => response.json())
      .then(result => {
        setBasket(result);
      });
  }

  return (
    <div>
      {cartPutIn && <CartMessage addBasketClose={addBasketClose} />}
      {isOpenModal && (
        <ModalDetailView
          modalView={modalView}
          productDetailList={productDetailList}
          isCloseModal={isCloseModal}
          ingredientsArray={ingredientsArray}
        />
      )}

      <div className={`productHeader ${slide}`} key={id}>
        <section className="logoContainer">
          <img className="logo" src={logoImg} alt="logo" />
        </section>
        <section className="productImageContainer">
          <img
            className="productImage"
            src={productDetailList.imageUrl}
            alt="제품이미지"
          />
        </section>
        <section className="productDetailContainer">
          <div className="productTitleContainer">
            <div className="productCategoryLink">
              {productDetailList.mainCategoryName}
              <div className="divideDot" />
              {productDetailList.subCategoryName}
            </div>
            <h2 className="productName">{productDetailList.name}</h2>
            <p className="productDescription">
              {productDetailList.description}
            </p>
          </div>
          <ul className="productDetail">
            <li className="productIngredient">
              <h6 className="ingredientTitle">주요 성분</h6>
              <p className="ingredientText">{`${ingredientsArray[0]}, ${ingredientsArray[1]}, ${ingredientsArray[2]}`}</p>
              <FiPlusCircle
                className="detailViewButton"
                onClick={isOpenModal}
              />
            </li>
            <li className="productSize">
              <h6 className="sizeTitle">사이즈</h6>
              <p className="sizeText">{productDetailList.size}</p>
            </li>
          </ul>
          <button
            onClick={() => {
              shoppingBasket();
              addBasket();
            }}
            className="primarySolidButton"
          >{`카트에 추가하기 - ₩ ${Math.floor(
            productDetailList.price
          ).toLocaleString()}`}</button>
          <ProductWishList
            wishList={wishList}
            handleWishList={handleWIshList}
          />
        </section>
      </div>
    </div>
  );
}

export default ProductHeader;
