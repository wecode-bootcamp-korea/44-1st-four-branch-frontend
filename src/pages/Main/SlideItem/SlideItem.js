import React from 'react';
import './SlideItem.scss';

function SlideItem() {
  return (
    <div className="slideItem">
      <img
        alt="제품이미지"
        src="https://images.ctfassets.net/u1nb1km7t5q7/3SCXvldc9HEEWCzyg44wPK/993a270f9be982665519dfd794f638ef/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Large_684x668px.png"
      />
      <h3>이더시스 오 드 퍼퓸</h3>
      <p>우디, 스파이시, 앰버리</p>
    </div>
  );
}

export default SlideItem;
