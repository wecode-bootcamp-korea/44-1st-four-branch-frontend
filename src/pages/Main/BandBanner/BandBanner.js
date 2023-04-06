import React from 'react';
import { useState } from 'react';
import BlackWindow from '../BlackWindow/BlackWindow';
import GuideModal from '../GuideModal/GuideModal';
import './BandBanner.scss';

function BandBanner() {
  const [guideModal, setGuideModal] = useState(false);
  const [slide, setSlide] = useState('');

  function guideModalOpen() {
    window.document.body.style.overflow = 'hidden';
    setGuideModal(true);
    setSlide('slide');
  }

  function guideModalClose() {
    window.document.body.style.overflow = 'scroll';
    setGuideModal(false);
    setSlide('');
  }

  return (
    <>
      <GuideModal guideModalClose={guideModalClose} slide={slide} />
      {guideModal && <BlackWindow guideModalClose={guideModalClose} />}
      <div className="bandBanner" onClick={guideModalOpen}>
        <div className="bannerTitle">
          전 구매 무료 배송과 선물 포장 혜택을 즐겨보세요.
          <span className="plus">+</span>
        </div>
      </div>
    </>
  );
}

export default BandBanner;
