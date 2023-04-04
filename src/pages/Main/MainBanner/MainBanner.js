import React from 'react';
import './MainBanner.scss';
import logoImg from '../../../assets/main/aesop-logo.png';

function MainBanner() {
  return (
    <div className="mainBanner">
      <div className="bannerContent">
        <img className="logoImg" alt="로고이미지" src={logoImg} />
        <div className="content">
          <h2>감각적인 실내 공간을 위한 홈 프래그런스</h2>
          <p>
            분위기 전환이 필요한 가정이나 사무실에 이상적인 이솝의 홈 레인지는
            아로마틱 인센스, 룸 스프레이 등 다양한 방향제품으로 구성되어
            있습니다.
          </p>
          <div className="squareBox">
            <div className="text">센티드 홈 보기</div>
            <div className="arrow">→</div>
          </div>
        </div>
      </div>
      <div className="bannerImg" />
    </div>
  );
}

export default MainBanner;
