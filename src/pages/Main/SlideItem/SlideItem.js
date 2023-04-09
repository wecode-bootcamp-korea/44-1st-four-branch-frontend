import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SlideItem.scss';

function SlideItem({ item }) {
  const navigate = useNavigate();

  function productDetailMove() {
    navigate(`/productDetail/${item.id}`);
  }

  return (
    <div className="slideItem" onClick={productDetailMove}>
      <img className="carouselItem" alt="제품이미지" src={item.imageUrl} />
      <h3 className="itemName">{item.name}</h3>
      <p className="itemIngredient">{item.description}</p>
    </div>
  );
}

export default SlideItem;
