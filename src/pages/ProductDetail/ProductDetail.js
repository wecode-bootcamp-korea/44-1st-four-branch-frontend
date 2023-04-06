import React, { useState } from 'react';
import ProductHeader from './ProductHeader/ProductHeader';
import Benefits from './Benefits/Benefits';
import HowToUse from './HowToUse/HowToUse';
import Recommend from './Recommend/Recommend';
import Info from './Info/Info';

import './ProductDetail.scss';

function ProductDetail() {
  const [modalView, setModalView] = useState('');
  const [scrollView, setScrollView] = useState('');
  const [arrowPrevButton, setArrowPrevButton] = useState('');
  const [arrowNextButton, setArrowNextButton] = useState('');

  function isOpenModal() {
    setModalView('slide');
    window.document.body.style.overflow = 'hidden';
  }

  function isCloseModal() {
    setModalView('close');
    window.document.body.style.overflow = 'scroll';
  }

  function handleRightScroll() {
    setScrollView('rightScroll');
  }

  function handleLeftScroll() {
    setScrollView('leftScroll');
  }

  function appearArrowButton() {
    setArrowPrevButton('hover');
    setArrowNextButton('hover');
  }

  function removeArrowButton() {
    setArrowPrevButton('');
    setArrowNextButton('');
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
      <Recommend
        handleRightScroll={handleRightScroll}
        handleLeftScroll={handleLeftScroll}
        scrollView={scrollView}
        appearArrowButton={appearArrowButton}
        removeArrowButton={removeArrowButton}
        arrowPrevButton={arrowPrevButton}
        arrowNextButton={arrowNextButton}
      />
      <Info />
    </div>
  );
}

export default ProductDetail;
