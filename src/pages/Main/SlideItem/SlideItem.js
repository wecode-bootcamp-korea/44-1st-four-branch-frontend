import React from 'react';
import './SlideItem.scss';

function SlideItem({ data }) {
  return (
    <div className="slideItem">
      <img
        className="carouselItem"
        alt="제품이미지"
        src="https://images.ctfassets.net/u1nb1km7t5q7/3SCXvldc9HEEWCzyg44wPK/993a270f9be982665519dfd794f638ef/Aesop_Fragrance_Eidesis_Eau_de_Parfum_50mL_Web_Large_684x668px.png"
      />
      <h3 className="itemName">{data.name}</h3>
      <p className="itemIngredient">{data.description}</p>
    </div>
  );
}

export default SlideItem;
