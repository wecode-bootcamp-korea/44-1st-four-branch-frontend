import React from 'react';
import './ProductDetail.scss';
import ProductHeader from './ProductHeader/ProductHeader';
import Benefits from './Benefits/Benefits';
import HowToUse from './HowToUse/HowToUse';
import Recommend from './Recommend/Recommend';
import Info from './Info/Info';

function ProductDetail() {
  return (
    <div className="productDetail">
      {/* <ModalDetailView /> */}
      <ProductHeader />
      <Benefits />
      <HowToUse />
      <Recommend />
      <Info />
    </div>
  );
}

export default ProductDetail;
