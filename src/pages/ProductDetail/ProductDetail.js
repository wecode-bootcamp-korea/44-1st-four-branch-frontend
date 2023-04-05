import React from 'react';
import ProductHeader from './ProductHeader/ProductHeader';
import Benefits from './Benefits/Benefits';
import HowToUse from './HowToUse/HowToUse';
import Recommend from './Recommend/Recommend';
import Info from './Info/Info';
import './ProductDetail.scss';

function ProductDetail() {
  return (
    <div className="productDetail">
      <ProductHeader />
      <Benefits />
      <HowToUse />
      <Recommend />
      <Info />
    </div>
  );
}

export default ProductDetail;
