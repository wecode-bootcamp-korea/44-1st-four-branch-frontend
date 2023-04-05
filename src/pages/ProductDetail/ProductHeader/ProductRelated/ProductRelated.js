import React from 'react';
import { Link } from 'react-router-dom';
import ProductRelatedImage from '../../../../assets/ProductDetail/kit.png';
import './ProductRelated.scss';

function ProductRelated() {
  return (
    <div className="productRelated">
      <Link to="/">
        <h6>키트를 확인해보세요.</h6>
        <p>인더스트리어스</p>
        <img src={ProductRelatedImage} alt="관련된 제품" />
      </Link>
    </div>
  );
}

export default ProductRelated;
