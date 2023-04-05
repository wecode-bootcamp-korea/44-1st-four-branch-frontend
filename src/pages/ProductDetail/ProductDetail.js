import React, { useState } from 'react';
import ProductHeader from './ProductHeader/ProductHeader';
import Benefits from './Benefits/Benefits';
import HowToUse from './HowToUse/HowToUse';
import Recommend from './Recommend/Recommend';
import Info from './Info/Info';

import './ProductDetail.scss';

function ProductDetail() {
  const [modalView, setModalView] = useState('');

  function isOpenModal() {
    setModalView('slide');
    window.document.body.style.overflow = 'hidden';
  }

  function isCloseModal() {
    setModalView('close');
    window.document.body.style.overflow = 'scroll';
  }

  return (
    <div className={`productDetail ${modalView}`}>
      <ProductHeader
        isOpenModal={isOpenModal}
        isCloseModal={isCloseModal}
        modalView={modalView}
      />
      <Benefits />
      <HowToUse />
      <Recommend />
      <Info />
    </div>
  );
}

export default ProductDetail;
