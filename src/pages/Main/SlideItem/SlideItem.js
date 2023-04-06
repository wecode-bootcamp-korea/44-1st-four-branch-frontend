import React from 'react';
import './SlideItem.scss';

function SlideItem({ data }) {
  return (
    <div className="slideItem">
      <img className="carouselItem" alt="제품이미지" src={data.imageUrl} />
      <h3 className="itemName">{data.name}</h3>
      <p className="itemIngredient">{data.summary}</p>
    </div>
  );
}

export default SlideItem;
