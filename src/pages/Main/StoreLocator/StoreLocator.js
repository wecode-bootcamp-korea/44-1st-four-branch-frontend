import React from 'react';
import './StoreLocator.scss';

function StoreLocator() {
  return (
    <article className="storeLocator">
      <div className="content">
        <h2>스토어 로케이터</h2>
        <p>
          매장에서는 이솝 컨설턴트가 고객 여러분을 따뜻하게 맞이하고 기프트
          구매를 위한 맞춤형 컨성팅을 제공해드립니다.
        </p>
        <div className="squareBox">
          <div className="text">가까운 스토어 찾기</div>
          <div className="arrow">→</div>
        </div>
      </div>
      <div className="carousel">
        <img
          alt="스토어 이미지"
          src="https://www.aesop.com/u1nb1km7t5q7/69ZsQrxOqIfGv57UKdoZq8/90a8ed3fd1a5b9235942a1b8f3fefc26/Aesop_KR_Store_Hannam_III_Hero_Bleed_Desktop_2880x1620px.jpg"
        />
        <img
          alt="스토어 이미지"
          src="https://www.aesop.com/u1nb1km7t5q7/6IMiE1PUDTKpx0PnpEMjjI/6335b5b7d6f5f20d3c11ed59ee15ddc7/Aesop_Parnas_II_Hero_Bleed_Desktop_2880x1620px.jpg"
        />
        <img
          alt="스토어 이미지"
          src="https://www.aesop.com/u1nb1km7t5q7/3iH5rovaCgvnsof8sZm26G/af454de4805a21bf78ea6730a19b9553/Aesop_Seongsu_Hero_Bleed_Desktop_2880x1620px.jpg"
        />
      </div>
    </article>
  );
}

export default StoreLocator;
