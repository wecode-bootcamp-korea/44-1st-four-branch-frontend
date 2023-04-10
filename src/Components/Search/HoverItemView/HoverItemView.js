import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HoverItemView.scss';

function HoverItemView({ item, showProduct }) {
  const { name, imageUrl } = item;

  const navigate = useNavigate();
  function moveItemPage() {
    navigate(`/productDetail/${item.id}`);
  }

  return (
    <div
      className="hoverItemView"
      onMouseEnter={() => {
        showProduct();
      }}
      onClick={moveItemPage}
    >
      <img className="hoverItemImage" alt={name} src={imageUrl} />
      <button className="primarySolidButton">더 알아보기</button>
    </div>
  );
}

export default HoverItemView;
