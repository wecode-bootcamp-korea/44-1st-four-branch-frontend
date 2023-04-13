import React from 'react';
import { Link } from 'react-router-dom';
import ProductRelatedImage from '../../../../assets/ProductDetail/kit.png';
import './ProductRelated.scss';

function ProductRelated() {
  return (
    <div className="productRelated">
      <Link className="productRelatedLink" to="/">
        <h6 className="productRelatedText">키트를 확인해보세요.</h6>
        <p className="productRelatedTitle">인더스트리어스</p>
        <img
          className="productRelatedImage"
          src={ProductRelatedImage}
          alt="관련된 제품"
        />
      </Link>
    </div>
  );
}

export default ProductRelated;
