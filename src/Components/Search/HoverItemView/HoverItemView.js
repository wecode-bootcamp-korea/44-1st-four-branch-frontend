import React from 'react';
import './HoverItemView.scss';

function HoverItemView({ item, showProduct }) {
  const { name, imageUrl } = item;

  function moveItemPage() {}

  return (
    <div
      className="hoverItemView"
      onMouseEnter={() => {
        showProduct();
      }}
    >
      <img className="hoverItemImage" alt={name} src={imageUrl} />
      <button className="primarySolidButton" onClick={moveItemPage}>
        더 알아보기
      </button>
    </div>
  );
}

export default HoverItemView;
