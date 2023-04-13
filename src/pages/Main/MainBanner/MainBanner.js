import React from 'react';
import logoImg from '../../../assets/main/fourbsopLogo.png';
import mainGif from '../../../assets/main/import_60c19d5f460238.73088478.gif';
import './MainBanner.scss';

function MainBanner() {
  return (
    <div className="mainBanner" style={{ backgroundImage: `url(${mainGif})` }}>
      <div className="bannerContent">
        <img className="logoImg" alt="로고이미지" src={logoImg} />
        <div className="content">
          <h2>감각적인 뷰티 브랜드</h2>
          <p>
            현대인들의 피부 고민에 맞는 최적의 스킨케어 솔루션을 제공하고자
            하며,
            <br /> 영향력 있게 새로운 트렌드를 만들어갑니다.
          </p>
          <div className="squareBox">
            <div className="text">트렌드 보기</div>
            <div className="arrow">→</div>
          </div>
        </div>
      </div>
      {/* <div className="bannerImg" /> */}
    </div>
  );
}

export default MainBanner;
