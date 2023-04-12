import React, { useEffect, useRef } from 'react';
import './LeftBanner.scss';

function LeftBanner() {
  const banner = useRef();
  useEffect(() => {
    let observer = new IntersectionObserver(e => {
      if (e[0].isIntersecting) {
        e[0].target.style.opacity = 1;
      } else {
        e[0].target.style.opacity = 0;
      }
    });
    observer.observe(banner.current);
  });

  return (
    <article ref={banner} className="leftBanner">
      <div className="articleImg" />
      <div className="articleContent">
        <div>프래그런스</div>
        <h2 className="mainTitle">진실된 아름다움, 4bsop 소개</h2>
        <p className="content">
          피부 본연의 가치를 최우선으로 생각하는 사람들에게 진실되고 젤제된
          아름다움을 선사하고자 합니다.
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
