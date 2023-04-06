import React from 'react';
import './LeftBanner.scss';

function LeftBanner() {
  return (
    <article className="leftBanner">
      <div className="articleImg" />
      <div className="articleContent">
        <div>홈 프래그런스</div>
        <h2 className="mainTitle">아로마틱 인센스 소개</h2>
        <p className="content">
          사유하는 마음을 위한 아로마 3종 - 무라사키, 카게로우, 사라시나
          아로마틱 인센스와 단아한 형태가 돋보이는 브론즈 인센스 홀더를
          만나보세요.
        </p>
        <div className="squareBox">
          <div className="text">컬렉션 보기</div>
          <div className="arrow">→</div>
        </div>
      </div>
    </article>
  );
}

export default LeftBanner;
