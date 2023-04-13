import React, { useEffect, useRef } from 'react';
import gif from '../../../assets/main/ezgif.com-gif-maker.gif';
import './RightBanner.scss';

function RightBanner() {
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
    <article ref={banner} className="rightBanner">
      <div className="articleContent">
        <div>프래그런스</div>
        <h2 className="mainTitle">진실된 아름다움</h2>
        <p className="content">
          피부 본연의 가치를 최우선으로 생각하는 사람들에게 진실되고 젤제된
          아름다움을 선사하고자 합니다.
        </p>
        <div className="squareBox">
          <div className="text">컬렉션 보기</div>
          <div className="arrow">→</div>
        </div>
      </div>
      <div className="contentImg">
        <img className="gifImage" src={gif} alt="숲속" />
      </div>
    </article>
  );
}

export default RightBanner;
