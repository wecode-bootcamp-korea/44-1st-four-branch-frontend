import React from 'react';
import './ProductDetail.scss';
import Header from './Header/Header';
import Benefits from './Benefits/Benefits';
import HowToUse from './HowToUse/HowToUse';
import Recommend from './Recommend/Recommend';
import Info from './Info/Info';
// import ModalDetailView from './ModalDetailView/ModalDetailView';

function ProductDetail() {
  return (
    <div className="productDetail">
      {/* <ModalDetailView /> */}
      <Header />
      <Benefits />
      <HowToUse />
      <Recommend />
      <Info />
    </div>
  );
}

export default ProductDetail;
