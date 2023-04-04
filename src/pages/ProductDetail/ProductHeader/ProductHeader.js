import React from 'react';
import { Link } from 'react-router-dom';
import './ProductHeader.scss';
import { FiPlusCircle, FiHeart } from 'react-icons/fi';
import Logo from '../../../assets/ProductDetail/aesop-logo.png';
import Product from '../../../assets/ProductDetail/product(00).png';
import ProductRelatedImage from '../../../assets/ProductDetail/kit.png';

function ProductHeader() {
  return (
    <div className="productHeader">
      <section className="logoContainer">
        <img src={Logo} alt="logo" />
      </section>
      <section className="productImageContainer">
        <img src={Product} alt="레저렉션 아로마틱 핸드 밤" />
      </section>
      <section className="productDetailContainer">
        <div className="productTitle">
          <div className="productCategoryLink">
            <Link to="/">바디 & 핸드</Link>
            <div className="divideDot" />
            <Link to="/">핸드</Link>
          </div>
          <h2>레저럭션 아로마틱 핸드밤</h2>
          <p>
            지친 손과 큐티클에 풍부한 수분을 공급해주는 향긋한 보태니컬 핸드 밤
          </p>
        </div>
        <ul className="productDetail">
          <li className="productIngredient">
            <h6>주요 성분</h6>
            <p>만다린, 로즈마리 리프, 시더우드 아틀라스</p>
            <FiPlusCircle className="icon20 detailViewButton" />
          </li>
          <li className="productSize">
            <h6>사이즈</h6>
            <p>75 mL</p>
          </li>
        </ul>
        <button className="primaryButton">카트에 추가하기</button>
        <div className="wishList">
          <FiHeart className="icon16 wishListOn" />
          <p>위시리스트에 담기</p>
        </div>
        <div className="productRelated">
          <Link to="/">
            <h6>키트를 확인해보세요.</h6>
            <p>인더스트리어스</p>
            <img src={ProductRelatedImage} alt="관련된 제품" />
          </Link>
        </div>
      </section>
    </div>
  );
}

export default ProductHeader;
